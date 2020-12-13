<?php
/**
 * @package crmeb_merchant
 *
 * @author Qinii
 * @day 2020-07-18
 *
 * Copyright (c) http://crmeb.net
 */
namespace app\common\repositories\system\merchant;

use app\common\repositories\BaseRepository;
use FormBuilder\Factory\Elm;
use app\common\dao\system\merchant\MerchantIntentionDao;
use think\facade\Route;

class MerchantIntentionRepository extends BaseRepository
{

    public function __construct(MerchantIntentionDao $dao)
    {
        $this->dao = $dao;
    }

    public function getList(array $where,$page,$limit)
    {
        $query = $this->dao->search($where);
        $count = $query->count();
        $list = $query->page($page,$limit)->order('create_time DESC , status ASC')->select();

        return compact('count','list');
    }

    public function markForm($id)
    {
        $data = $this->dao->get($id);
        $form = Elm::createForm(Route::buildUrl('systemMerchantIntentionMark', ['id' => $id])->build());
        $form->setRule([
            Elm::textarea('mark', '备注',$data['remark'])->required(),
        ]);
        return $form->setTitle('修改备注');
    }

    public function statusForm($id)
    {
        $form = Elm::createForm(Route::buildUrl('systemMerchantIntentionStatus', ['id' => $id])->build());
        $form->setRule([
           "<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607885914291&di=be3f7197b6c7c0599fa908cb22d01c2e&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F25%2F99%2F19300000421423134190997943822.jpg'/>",
            Elm::select('status', '审核状态', 1)->options([
                ['value' => 1, 'label' => '同意'],
                ['value' => 2, 'label' => '拒绝'],
            ]),
        ]);
        return $form->setTitle('修改审核状态');
    }
}
