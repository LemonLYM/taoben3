<?php

namespace app\utils;


use app\common\dao\store\shipping\CityDao;
use think\facade\Cache;
use think\facade\Config;

class AddressUtils
{

    public function __construct()
    {

    }

    public static function getAddressName($id){
        if($id== 0){
            return  "";
        }
        $name = Cache::get('address_' . $id);
        if($name){
            return $name;
        }else{
            $name = (new CityDao())->selectWhere(["city_id"=>$id, "is_show" => 1], "name");
            if(count($name) > 0){
                Cache::set('address_' . $id, $name[0]['name']);
                return $name[0]['name'];
            }
        }
        return "";
    }

}