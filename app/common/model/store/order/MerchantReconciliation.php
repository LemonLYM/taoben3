<?php
/**
 * @package crmeb_merchant
 *
 * @author Qinii
 * @day 2020-06-15
 *
 * Copyright (c) http://crmeb.net
 */
namespace app\common\model\store\order;

use app\common\model\BaseModel;
use app\common\model\system\admin\Admin;
use app\common\model\system\merchant\Merchant;

class MerchantReconciliation extends BaseModel
{
    public static function tablePk(): ?string
    {
        return 'reconciliation_id';
    }

    public static function tableName(): string
    {
        return 'merchant_reconciliation';
    }

    public function withOrder()
    {
        return $this->hasMany(MerchantReconciliationOrder::class,'reconciliation_id','reconciliation_id');
    }

    public function merchant()
    {
        return $this->hasOne(Merchant::class,'mer_id','mer_id');
    }

    public function admin()
    {
        return $this->hasOne(Admin::class,'admin_id','admin_id');
    }

    /**
     * 计算扣除费用
     * @Author:Qinii
     * @Date: 2020/10/15
     * @return string
     */
    public function getChargeAttr()
    {
        return bcadd(bcadd(bcadd($this->order_extension,$this->order_rate,2),$this->refund_price,2),$this->refund_extensionthis,2);
    }
}
