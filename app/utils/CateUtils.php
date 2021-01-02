<?php

namespace app\utils;


use app\common\dao\store\shipping\CityDao;
use app\common\dao\store\StoreCategoryDao;
use think\facade\Cache;
use think\facade\Config;

class CateUtils
{

    public function __construct()
    {

    }

    public static function getAddressName($id){
        if($id== 0){
            return  "";
        }
        $name = Cache::get('cate_' . $id);
        if($name){
            return $name;
        }else{
            $name = (new StoreCategoryDao())->selectWhere(["store_category_id"=>$id, "is_show" => 1], "cate_name");
            if($name){
                Cache::set('cate_' . $id, $name[0]['cate_name']);
                return $name;
            }
        }
        return "";
    }

}