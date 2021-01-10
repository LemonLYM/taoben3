<?php
/**
 * @package crmeb_merchant
 *
 * @author xaboy
 * @day 2020-05-07
 *
 * Copyright (c) http://crmeb.net
 */

namespace app\validate\admin;


use think\Validate;

class UserCreditValidate extends Validate
{
    protected $failException = true;

    protected $rule = [
        'credit|信誉值' => 'require|integer|>=:0',
        'type|修改类型' => 'require|in:0,1'
    ];
}