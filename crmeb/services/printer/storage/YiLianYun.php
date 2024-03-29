<?php

namespace crmeb\services\printer\storage;

use crmeb\services\PrinterService;
use crmeb\services\printer\AccessToken;
use Exception;
use think\facade\Cache;

/**
 * Class YiLianYun
 * @package crmeb\services\printer\storage
 */
class YiLianYun extends PrinterService
{

    /**
     * 初始化
     * @param array $config
     * @return mixed|void
     */
    protected function initialize(array $config)
    {

    }

    /**
     * 开始打印
     * @return bool|mixed|string
     * @throws Exception
     */
    public function startPrinter()
    {
        if (!$this->printerContent) {
            return $this->setError('Missing print');
        }
        $arr = [
            'client_id' => $this->accessToken->clientId,
            'access_token' => $this->accessToken->getAccessToken(),
            'machine_code' => $this->accessToken->machineCode,
            'content' => $this->printerContent,
            'origin_id' => 'crmeb' . time(),
            'sign' => strtolower(md5($this->accessToken->clientId . time() . $this->accessToken->apiKey)),
            'id' => $this->accessToken->createUuid(),
            'timestamp' => time()
        ];
        $request = $this->accessToken->postRequest($this->accessToken->getApiUrl('print/index'), $arr);
        $info = \Qiniu\json_decode($request);
        if($info->error == 18){
            Cache::delete('YLY_access_token_'.$this->accessToken->clientId);
            $arr['access_token'] = $this->accessToken->getAccessToken();
            $request = $this->accessToken->postRequest($this->accessToken->getApiUrl('print/index'), $arr);
        }
        if ($request === false) {
            return $this->setError('request was aborted');
        }
        $request = is_string($request) ? json_decode($request, true) : $request;
        if (isset($request['error']) && in_array($request['error'], [18, 14])) {
            return $this->setError('Accesstoken has expired');
        }
        return $request;
    }

    /**
     * 设置打印内容
     * @param array $config
     * @return YiLianYun
     */
    public function setPrinterContent(array $config): self
    {
        $timeYmd = date('Y-m-d H:i:s', time());
        $goodsStr = '<table><tr><td>商品名称</td><td>数量</td><td>单价</td><td>金额</td></tr>';
        $product = $config['product'];
        foreach ($product as $item) {
            $goodsStr .= '<tr>';
            $goodsStr .= "<td>{$item['store_name']}</td><td>{$item['product_num']}</td><td>{$item['price']}</td><td>{$item['product_price']}</td>";
            $goodsStr .= '</tr>';
        }
        $goodsStr .= '</table>';
        $orderInfo = $config['orderInfo'];
        $name = $config['name'];
        $this->printerContent = <<<CONTENT
<FB><center> ** {$name} **</center></FB>
<FH2><FW2>----------------</FW2></FH2>
订单编号：{$orderInfo['order_sn']}\r
打印时间: {$timeYmd} \r
付款时间: {$orderInfo['pay_time']}\r
姓    名: {$orderInfo['real_name']}\r
电    话: {$orderInfo['user_phone']}\r
地    址: {$orderInfo['user_address']}\r
订单备注：{$orderInfo['mark']}\r
*************商品***************\r
{$goodsStr}
********************************\r
<FH>
<LR>合计：￥{$orderInfo['total_price']},优惠: ￥{$orderInfo['coupon_price']}</LR>
<LR>邮费：￥{$orderInfo['pay_postage']}</LR>
<right>实际支付：￥{$orderInfo['pay_price']}</right>
</FH>
<FS><center> ** 完 **</center></FS>
CONTENT;
        return $this;
    }


}
