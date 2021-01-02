<?php
/**
 * @package crmeb_merchant
 *
 * @author Qinii
 * @day 2020-07-18
 *
 * Copyright (c) http://crmeb.net
 */
namespace app\controller\api\store\merchant;

use app\common\repositories\system\merchant\MerchantCategoryRepository;
use app\common\repositories\system\merchant\MerchantRepository;
use app\common\repositories\user\UserCaRepository;
use app\common\repositories\user\UserMerRepository;
use crmeb\exceptions\AuthException;
use crmeb\services\YunxinSmsService;
use think\App;
use crmeb\basic\BaseController;
use app\common\repositories\system\merchant\MerchantIntentionRepository as repository;

class MerchantIntention extends BaseController
{
    protected $repository;
    protected $userInfo;

    public function __construct(App $app, repository $repository, MerchantRepository $merRepo)
    {
        parent::__construct($app);
        $this->repository = $repository;
        $this->userInfo = $this->request->isLogin() ? $this->request->userInfo() : null;
    }

    public function create()
    {
        $data = $this->request->params(['phone', 'mer_name', 'name', 'code','images','merchant_category_id',"idCardImages"]);
        $check = (YunxinSmsService::create())->checkSmsCode($data['phone'], $data['code'],'intention');
        //if (!$check) return app('json')->fail('验证码不正确');
//        $categ = app()->make(MerchantCategoryRepository::class)->get($data['merchant_category_id']);
//        if(!$categ) return app('json')->fail('商户分类不存在');
        if (!$this->userInfo){
            throw new AuthException('token过期');
        }
        $data['uid'] = $this->userInfo->uid;

        $userMer = app()->make(UserMerRepository::class)->getWhere(["uid"=>$data['uid']]);
        if($userMer){
            throw new AuthException('已提交过申请');
        }


        try{
            $merData = [
                'category_id' =>1,         //商户分类
                'mer_name' =>$data['mer_name']. "的店铺",        //商户名称
                'mer_account' =>"",         //商户账号
                'mer_password' =>"",        //商户密码
                'real_name' =>"",       //商户姓名
                'mer_phone' =>"",       //商户手机号
                'mer_keyword' =>"",         //商户关键字
                'mer_address' =>"",         //商户地址
                'mark' =>"",        //备注
                'status' =>"",          //开启状态
                'commission_rate' =>"",         //提成比例
            ];
            $caData = array_merge($data["idCardImages"], [$data["images"][0]]);
        }catch (\Exception $e){
            throw new AuthException('参数错误');
        }
        //创建店铺
        $mer_id = app()->make(MerchantRepository::class)->createMerchant($merData);
        //创建审核
        app()->make(UserCaRepository::class)->merSave($data['uid'], $caData);
        //创建店铺对应关系
        $userMerData = [
            "uid"=> $data['uid'],
            "mer_id"=>$mer_id,
            "status"=>0,
        ];
        app()->make(UserMerRepository::class)->create($userMerData);
        //待审核状态.
        app()->make(UserRepository::class)->save(["uid"=>$data['uid'], ["mer_ca" =>0]]);


        $this->repository->create($data);
        return app('json')->success('提交成功');
    }

    /**
     * 商户分类
     * @Author:Qinii
     * @Date: 2020/9/15
     * @return mixed
     */
    public function cateLst()
    {
        $lst = app()->make(MerchantCategoryRepository::class)->getSelect();
        return app('json')->success($lst);
    }
}

