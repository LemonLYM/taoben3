<?php
/**
 * @package crmeb_merchant
 *
 * @author xaboy
 * @day 2020-05-07
 *
 * Copyright (c) http://crmeb.net
 */

namespace app\common\dao\user;


use app\common\dao\BaseDao;
use app\common\model\user\UserAddress as model;
use app\common\model\user\UserCa;
use app\common\model\user\UserMer;

class UserMerDao extends BaseDao
{


    /**
     * @return string
     * @author Qinii
     */
    protected function getModel(): string
    {
        return UserMer::class;
    }



    public function getInfo($where)
    {
        return ($this->getModel()::getDB())->where($where)->find();
    }

}
