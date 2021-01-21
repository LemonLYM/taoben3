<?php
/**
 * @package crmeb_merchant
 *
 * @author Qinii
 * @day 2020-07-18
 *
 * Copyright (c) http://crmeb.net
 */

namespace app\controller\admin\system\user;

use app\common\repositories\system\CacheRepository;
use app\common\repositories\user\UserCaRepository;
use app\common\repositories\user\UserMerRepository;
use app\common\repositories\user\UserRepository;
use app\utils\elm\ElmViewUtils;
use think\App;
use crmeb\basic\BaseController;
use app\common\repositories\system\merchant\MerchantIntentionRepository;

class UserIntention extends BaseController
{
    protected $caRepository;
    protected $userMerRepository;

    /**
     * MerchantIntention constructor.
     * @param App $app
     * @param UserCaRepository $ca
     * @param UserMerRepository $userMer
     */
    public function __construct(App $app, UserCaRepository $ca, UserMerRepository $userMer)
    {
        parent::__construct($app);
        $this->caRepository = $ca;
        $this->userMerRepository = $userMer;
    }

    public function statusForm($uid)
    {
        if($uid){
            $ca = $this->caRepository->getUserCa($uid);
            if($ca){
                $item[] =(new ElmViewUtils())->image("身份证正面", $ca->img1)->disabled(false)->build();
                $item[] =(new ElmViewUtils())->image("身份证反面面", $ca->img2)->disabled(false)->build();
            }else{
                return app('json')->fail('数据不存在');
            }
        }
        return app('json')->success(formToData($this->caRepository->statusForm($uid, $item)));
    }


    public function switchStatus($uid)
    {
        $status = $this->request->param('status', 0) == 1 ? 1 : 2;

        app()->make(UserRepository::class)->updateUserInfo($uid, ["user_ca"=> $status]);
        return app('json')->success('修改成功');
    }


}
