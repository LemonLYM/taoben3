<?php
/**
 * @package crmeb_merchant
 *
 * @author xaboy
 * @day 2020-04-28
 *
 * Copyright (c) http://crmeb.net
 */

namespace app\common\repositories\user;


use app\common\dao\BaseDao;
use app\common\dao\user\UserCaDao;
use app\common\dao\user\UserDao;
use app\common\model\user\User;
use app\common\model\user\UserGroup;
use app\common\model\wechat\WechatUser;
use app\common\repositories\BaseRepository;
use app\common\repositories\store\coupon\StoreCouponRepository;
use app\common\repositories\store\order\StoreOrderRepository;
use app\common\repositories\system\attachment\AttachmentRepository;
use app\common\repositories\wechat\RoutineQrcodeRepository;
use crmeb\exceptions\AuthException;
use crmeb\jobs\AutoUserPosterJob;
use crmeb\jobs\SendNewPeopleCouponJob;
use crmeb\services\JwtTokenService;
use crmeb\services\QrcodeService;
use crmeb\services\UploadService;
use FormBuilder\Exception\FormBuilderException;
use FormBuilder\Factory\Elm;
use FormBuilder\Form;
use Swoole\Coroutine;
use Swoole\Coroutine\Channel;
use think\exception\ValidateException;
use think\facade\Queue;
use think\Image;
use think\model\Relation;
use function GuzzleHttp\Psr7\str;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;
use think\facade\Cache;
use think\facade\Config;
use think\facade\Db;
use think\facade\Route;
use think\Model;

/**
 * Class UserRepository
 * @package app\common\repositories\user
 * @author xaboy
 * @day 2020-04-28
 * @mixin UserDao
 */
class UserCaRepository extends BaseRepository
{

    const USER_CA = 1;
    const MER_CA =2;

    /**
     * UserRepository constructor.
     * @param UserDao $dao
     */
    public function __construct(UserCaDao $dao)
    {
        $this->dao = $dao;
    }

    public function userSave($uid,$images)
    {
        if(count($images) < 2)
            return false;
        $where = [
            'type' => self::USER_CA,
            'uid' => $uid,
        ];
        $data = ["msg" => ""];
        foreach ($images as $i => $img){
            $data["img".($i+1)] = $img;
        }
        $this->dao->save($where, $data);
        return true;
    }

    public function merSave($uid, $images)
    {
        if(count($images) < 3)
            return false;
        $where = [
            'type' => self::MER_CA,
            'uid' => $uid,
        ];
        $data = ["msg" => ""];
        foreach ($images as $i => $img){
            $data["img". ($i+1) ] = $img;
        }
        $this->dao->save($where, $data);
        return true;
    }

    public function getUserCa($uid)
    {
        $where = ["uid" =>$uid, 'type' => self::USER_CA];
        $caInfo = $this->dao->getInfo($where);
        return $caInfo;
    }

    public function getMerCa($uid)
    {
        $where = ["uid" =>$uid, 'type' => self::MER_CA];
        $caInfo = $this->dao->getInfo($where);

        return $caInfo;
    }


    public function statusForm($id, $item = [])
    {
        $form = Elm::createForm(Route::buildUrl('systemUserIntentionStatus', ['uid' => $id])->build());
        $rule = array_merge($item, [
            Elm::input("msg","提示", "", "text"),
            Elm::select('status', '审核状态', 1)->options([
                ['value' => 1, 'label' => '同意'],
                ['value' => 2, 'label' => '拒绝'],
            ]),
        ]);
        $form->setRule($rule);
        return $form->setTitle('修改审核状态');
    }
}
