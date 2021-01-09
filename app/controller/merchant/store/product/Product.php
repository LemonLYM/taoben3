<?php
/**
 * @package crmeb_merchant
 * @Author: Qinii
 * @Date: 2020/5/8
 */
namespace app\controller\merchant\store\product;

use app\common\repositories\store\order\StoreCartRepository;
use crmeb\exceptions\AuthException;
use think\App;
use crmeb\basic\BaseController;
use app\validate\merchant\StoreProductValidate as validate;
use app\common\repositories\store\product\ProductRepository as repository;
use think\exception\ValidateException;

class Product extends BaseController
{
    protected  $repository ;

    /**
     * Product constructor.
     * @param App $app
     * @param repository $repository
     */
    public function __construct(App $app ,repository $repository)
    {
        parent::__construct($app);
        $this->repository = $repository;
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/18
     * @return mixed
     */
    public function lst()
    {
        [$page, $limit] = $this->getPage();
        $where = $this->request->params(['cate_id','keyword',['type',1],'mer_cate_id','is_gift_bag']);
        $where = array_merge($where,$this->repository->switchType($where['type'],$this->request->merId(),0));
        return app('json')->success($this->repository->getList($this->request->merId(),$where, $page, $limit));
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/18
     * @param $id
     * @return mixed
     */
    public function detail($id)
    {
        if(!$this->repository->merExists($this->request->merId(),$id))
            return app('json')->fail('数据不存在');
        return app('json')->success($this->repository->get($id));
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/18
     * @param validate $validate
     * @return mixed
     */
    public function create(validate $validate)
    {
        $merchant = $this->request->merchant();
        $data = $this->checkParams($validate);
        $data['mer_id'] = $this->request->merId();
        if ($data['is_gift_bag'] && !$this->repository->checkMerchantBagNumber($data['mer_id'])) return app('json')->fail('礼包数量超过数量限制');
        $this->repository->check($data,$this->request->merId());
        $data['status'] = $this->request->merchant()->is_audit ? 0 : 1;
        $data['mer_status'] = ($merchant['is_del'] || !$merchant['mer_state'] || !$merchant['status']) ? 0 : 1;
        $this->repository->create($data,0);
        return app('json')->success('添加成功');
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/18
     * @param validate $validate
     * @return mixed
     */
    public function createByUser(validate $validate)
    {
        $merchant = $this->request->merchant();
        $data = $this->checkParams($validate);
        $data['mer_id'] = $this->request->merId();
        $data['is_show'] = $this->request->merchant()->is_audit ? 0 : 1;
        $data['mer_status'] = ($merchant['is_del'] || !$merchant['mer_state'] || !$merchant['status']) ? 0 : 1;
        $this->repository->createByUser($data,0);
        return app('json')->success('添加成功');
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/18
     * @param validate $validate
     * @return mixed
     */
    public function FromByUser($id)
    {
        $merchant = $this->request->merchant();
        $product = $this->repository->getByUser($id);

        return app('json')->success("success", $product);
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/18
     * @param $id
     * @param validate $validate
     * @return mixed
     */
    public function update($id,validate $validate)
    {
        $merchant = $this->request->merchant();
        $data = $this->checkParams($validate);
        if(!$this->repository->merExists($this->request->merId(),$id))
            return app('json')->fail('数据不存在');
        $this->repository->check($data,$this->request->merId());
        $pro = $this->repository->getWhere(['product_id' => $id]);
        if($pro->status == -2){
            $data['status'] = 0;
        }else{
            $data['status'] = $this->request->merchant()->is_audit ? 0 : 1;
        }
        $data['mer_status'] = ($merchant['is_del'] || !$merchant['mer_state'] || !$merchant['status']) ? 0 : 1;
        unset($data['is_gift_bag']);
        $this->repository->edit($id,$data,$this->request->merId(),0);
        return app('json')->success('编辑成功');
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/18
     * @param $id
     * @param validate $validate
     * @return mixed
     */
    public function updateByUser($id,validate $validate)
    {
        $merchant = $this->request->merchant();
        $data = $this->checkParams($validate);
        if(!$this->repository->merExists($this->request->merId(),$id))
            return app('json')->fail('数据不存在');
        $pro = $this->repository->getWhere(['product_id' => $id]);
        if($pro->status == -2){
            $data['status'] = 0;
        }else{
            $data['status'] = $this->request->merchant()->is_audit ? 0 : 1;
        }
        $data['mer_status'] = ($merchant['is_del'] || !$merchant['mer_state'] || !$merchant['status']) ? 0 : 1;
        //默认是上架状态.
        $data['is_show'] = 1;
        unset($data['is_gift_bag']);
        $this->repository->editByUser($id,$data,$this->request->merId(),0);
        return app('json')->success('编辑成功');
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/18
     * @param $id
     * @return mixed
     */
    public function delete($id)
    {
        if(!$this->repository->merExists($this->request->merId(),$id))
            return app('json')->fail('数据不存在');
        if($this->repository->getWhereCount(['product_id' => $id,'is_show' => 1,'status' => 1]))
            return app('json')->fail('商品上架中');
        $this->repository->delete($id);
        return app('json')->success('转入回收站');
    }


    public function destory($id)
    {
        if(!$this->repository->merDeleteExists($this->request->merId(),$id))
            return app('json')->fail('只能删除回收站的商品');
        if(app()->make(StoreCartRepository::class)->getProductById($id))
            return app('json')->fail('商品有被加入购物车不可删除');
        $this->repository->destory($id);
        return app('json')->success('删除成功');
    }
    /**
     * @Author:Qinii
     * @Date: 2020/5/18
     * @param int $id
     * @return mixed
     */
    public function switchStatus($id)
    {
        $status = $this->request->param('status', 0) == 1 ? 1 : 0;
        if(!$this->repository->merExists($this->request->merId(),$id))
            return app('json')->fail('数据不存在');
        $this->repository->switchStatus([$id], ['is_show' => $status]);
        return app('json')->success('修改成功');
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/18
     * @return mixed
     */
    public function getStatusFilter()
    {
        return app('json')->success($this->repository->getFilter($this->request->merId(),'商品',0));
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/8
     * @Time: 14:39
     * @param validate $validate
     * @return array
     */
    public function checkParams(validate $validate)
    {
        $params = [
            "image", "slider_image", "store_name", "store_info", "keyword", "bar_code", "brand_id",
            "cate_id", "mer_cate_id", "unit_name", "sort" , "is_show", "is_good",'is_gift_bag',
            "video_link", "temp_id", "content", "spec_type","extension_type", "attr", "attrValue",
            ['give_coupon_ids',[]], "price", "cost", "new_percentage", "province", "city","postage","stock"
        ];
        $data = $this->request->params($params);
        $validate->check($data);
        return $data;
    }

    /**
     * TODO
     * @return mixed
     * @author Qinii
     * @day 2020-06-24
     */
    public function config()
    {
        $data['extension_status'] = systemConfig('extension_status');
        return app('json')->success($data);
    }


    /**
     * TODO
     * @param $id
     * @return mixed
     * @author Qinii
     * @day 2020-07-03
     */
    public function restore($id)
    {
        if(!$this->repository->merDeleteExists($this->request->merId(),$id))
            return app('json')->fail('只能删除回收站的商品');
        $this->repository->restore($id);
        return app('json')->success('商品已恢复');
    }




    /**
     * 我发布的
     * @Author:Qinii
     * @Date: 2020/5/28
     * @return mixede
     */
    public function myLst()
    {
        [$page, $limit] = $this->getPage();
        $where = $this->request->params(['keyword', 'cate_id', 'order']);
        $merid = $this->request->merchantId();
        if(!$merid)
            throw new AuthException('不是商户');

        $this->repository->addFiled("status, is_show");
        return app('json')->success($this->repository->getApiSearch($merid, $where, $page, $limit, $this->request->userInfo(), true));
    }
}
