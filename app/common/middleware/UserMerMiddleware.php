<?php
/**
 * @package crmeb_merchant
 *
 * @author xaboy
 * @day 2020-03-24
 *
 * Copyright (c) http://crmeb.net
 */

namespace app\common\middleware;

use app\common\repositories\system\merchant\MerchantAdminRepository;
use app\common\repositories\system\merchant\MerchantRepository;
use app\common\repositories\user\UserMerRepository;
use app\common\repositories\user\UserRepository;
use app\Request;
use crmeb\exceptions\AuthException;
use crmeb\services\JwtTokenService;
use Firebase\JWT\ExpiredException;
use think\exception\ValidateException;
use think\Response;
use Throwable;

class UserMerMiddleware extends BaseMiddleware
{

    /**
     * @param Request $request
     * @throws Throwable
     * @author xaboy
     * @day 2020-04-10
     */
    public function before(Request $request)
    {

        $this->request->userId();
        /**
         * @var MerchantRepository $repository
         */
        $repository = app()->make(MerchantRepository::class);

        $mer_id = app()->make(UserMerRepository::class)->getMeridByUserid($this->request->userId());
        $admin = $repository->getByMerId($mer_id);


        $request->macro('adminId', function () use (&$admin) {
            return $admin->merchant_admin_id;
        });
        $request->macro('adminInfo', function () use (&$admin) {
            return $admin;
        });
        $request->macro('merchantId', function () use (&$admin) {
            return $admin->mer_id;
        });

    }

    public function after(Response $response)
    {
        // TODO: Implement after() method.
    }
}