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
use app\common\dao\user\UserMerDao;
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
class UserMerRepository extends BaseRepository
{

    const USER_CA = 1;
    const MER_CA =2;

    /**
     * UserRepository constructor.
     * @param UserDao $dao
     */
    public function __construct(UserMerDao $dao)
    {
        $this->dao = $dao;
    }

    public function getUseridByMerid($merid)
    {
        $uid = $this->dao->getWhere(["mer_id"=>$merid], "uid");
        return $uid?$uid->uid: null;
    }

}
