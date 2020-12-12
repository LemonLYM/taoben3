<?php

namespace crmeb\basic;

use think\App;

abstract class BaseController
{
    protected $request;
    protected $app;
    protected $batchValidate = false;
    protected $middleware = [];
    private $authCode;

    public function __construct(App $app)
    {
        $this->app = $app;
        $this->request = app('request');
        $this->initialize();
    }

    public function getPage()
    {
        $data = $this->request->params(["page", "limit"]);
        $page = $data["page"] ?? 1;
        $limit = $data["limit"] ?? 20;

        return [(int)$page, (int)$limit];
    }


    protected function initialize()
    {
    }

    final protected function validate(array $data, $validate, $message = NULL, bool $batch = false)
    {
        if (is_array($validate)) {
            $v = new \think\facade\Validate();
            $v->rule($validate);
        } else {
            if (strpos($validate, '.')) {
                list($validate, $scene) = explode('.', $validate);
            }

            $class = (false !== strpos($validate, '\\') ? $validate : $this->app->parseClass(__FUNCTION__, $validate));
            $v = new $class();

            if (!empty($scene)) {
                $v->scene($scene);
            }
            if (is_string($message) && empty($scene)) {
                $v->scene($message);
            }
        }

        if (is_array($message)) {
            $v->message($message);
        }
        if ($batch || $this->batchValidate) {
            $v->batch(true);
        }

        return $v->failException(true)->check($data);
    }

    final protected function success($msg = 'ok', ?array $data = NULL)
    {
        return app('json')->success($msg, $data);
    }

    final protected function fail($msg = __FUNCTION__, ?array $data = NULL)
    {
        return app('json')->fail($msg, $data);
    }

    final protected function make(int $status, string $msg, ?int $code = NULL, ?array $data = NULL)
    {
        $json = app('json');

        if ($code) {
            $json->code($code);
        }

        return $json->make($status, $msg, $data);
    }

    final protected function checkAuthDecrypt()
    {
        return ['auth' => true];
        try {
            $res = $this->authorizationDecryptCrmeb(true);
            if ($res && is_array($res)) {
                list($domain, $recordCode, $installtime) = $res;
                $time = $installtime + 3888000;

                if ($time < time()) {
                    return $this->success('您得授权已过期请及时前往CRMEB官方进行授权', ['auth' => false]);
                } else {
                    $nowTime = ($time - time()) / 86400;
                    return $this->success('您得授权证书还有' . (int)$nowTime . '天过期,请及时前往CREMB官方进行授权认证!', ['auth' => false, 'day' => $nowTime]);
                }
            } else if ($res === true) {
                return $this->fail();
            } else {
                return $this->fail('授权文件读取错误');
            }
        } catch (\RuntimeException $e) {
            return $this->fail('授权文件读取错误');
        }
    }

    final private function authorizationDecryptCrmeb(bool $bool = false)
    {
        return true;

        $authorizationExtactPath = AUTHORIZATION_EXTACT;
        $authorizationExtacttext = AUTHORIZATION_TEXT;
        if (!$authorizationExtactPath || !is_file($authorizationExtactPath)) {
            throw new \RuntimeException('授权证书丢失', 42007);
        }
        if (!$authorizationExtacttext || !is_file($authorizationExtacttext)) {
            throw new \RuntimeException('授权文件丢失', 42006);
        }
        if ($authorizationExtactPath && $authorizationExtacttext) {
            $publicDecrypt = function (string $data, string $publicKey) {
                $decrypted = '';
                $pu_key = openssl_pkey_get_public(file_get_contents($publicKey));
                $plainData = str_split(base64_decode($data), 128);

                foreach ($plainData as $chunk) {
                    $str = '';
                    $decryptionOk = openssl_public_decrypt($chunk, $str, $pu_key);

                    if ($decryptionOk === false) {
                        return false;
                    }

                    $decrypted .= $str;
                }

                return $decrypted;
            };
            $encryptStr = file_get_contents($authorizationExtacttext);

            if (!$encryptStr) {
                throw new \RuntimeException('授权文件内容丢失', 42005);
            }

            $resArray = explode('==', $encryptStr);

            if (!is_array($resArray)) {
                throw new \RuntimeException('授权文件有变动无法解析', 42008);
            } else {
                list($encryptStr, $recordCode) = explode(',', $encryptStr);
            }

            if (!isset($recordCode)) {
                $recordCode = '';
            }

            $data = $publicDecrypt($encryptStr, $authorizationExtactPath);

            if ($data) {
                $data = json_decode($data);
                $path = app()->getRootPath() . 'public' . DS . 'install' . DS . 'install.lock';

                if (!is_file($path)) {
                    $path = app()->getRootPath() . '.constant';
                }

                if (!is_file($path)) {
                    throw new \RuntimeException('授权文件丢失', 42010);
                }

                $installtime = @filectime($path);
                if (isset($data->domain) && isset($data->expire) && isset($data->version)) {
                    $res = time() <= $installtime + $data->expire;

                    if ($res) {
                        if ($bool && ($data->domain === '*')) {
                            return [$data->domain, $recordCode, $installtime];
                        }
                        if (($data->domain === '*') || in_array(request()->host(), ['127.0.0.1', 'localhost'])) {
                            return true;
                        } else if ($data->domain === request()->host()) {
                            $this->authCode = $recordCode;
                            return true;
                        } else {
                            throw new \RuntimeException('您的授权域名和访问域名不一致!', 42000);
                        }
                    } else {
                        throw new \RuntimeException('您的授权已到期', 42001);
                    }
                }
            } else {
                throw new \RuntimeException('授权文件有变动无法解析', 42003);
            }
        }

        throw new \RuntimeException('授权失败', 42004);
    }

    final protected function makePostForm(string $title, array $field, $url, string $method = 'POST')
    {
        try {
            // $this->authorizationDecryptCrmeb();
            $form = \FormBuilder\Form::create((string)$url);
            $form->setMethod($method);
            $form->components($field);
            $form->setTitle($title);
            $rules = $form->getRules();
            $title = $form->getTitle();
            $action = $form->getAction();
            $method = $form->getMethod();
            $info = '';
            $status = true;
            return $this->success(compact('rules', 'title', 'action', 'method', 'info', 'status'));
        } catch (\Throwable $e) {
            $rules = [];
            $title = $e->getMessage();
            $info = '请联系CRMEB官方进行授权认证';
            $status = false;
            $action = '';
            $method = 'get';
            return $this->success(compact('rules', 'title', 'action', 'method', 'info', 'status'));
        }
    }

    final protected function attr_format($arr)
    {
        $data = [];
        $res = [];
        $count = count($arr);

        if (1 < $count) {
            for ($i = 0; $i < ($count - 1); $i++) {
                if ($i == 0) {
                    $data = $arr[$i]['detail'];
                }

                $rep1 = [];

                foreach ($data as $v) {
                    foreach ($arr[$i + 1]['detail'] as $g) {
                        $rep2 = ($i != 0 ? '' : $arr[$i]['value'] . '_$_') . $v . '-$-' . $arr[$i + 1]['value'] . '_$_' . $g;
                        $tmp[] = $rep2;

                        if ($i == $count - 2) {
                            foreach (explode('-$-', $rep2) as $k => $h) {
                                $rep3 = explode('_$_', $h);
                                $rep4['detail'][$rep3[0]] = (isset($rep3[1]) ? $rep3[1] : '');
                            }

                            if ($count == count($rep4['detail'])) {
                                $res[] = $rep4;
                            }
                        }
                    }
                }

                $data = (isset($tmp) ? $tmp : []);
            }
        } else {
            $dataArr = [];

            foreach ($arr as $k => $v) {
                foreach ($v['detail'] as $kk => $vv) {
                    $dataArr[$kk] = $v['value'] . '_' . $vv;
                    $res[$kk]['detail'][$v['value']] = $vv;
                }
            }

            $data[] = implode('-', $dataArr);
        }

        return [$data, $res];
    }

    final protected function getAuth()
    {
        return $this->success(['status' => 1, 'authCode' => 0, 'day' => 0]);

        try {
            $res = $this->authorizationDecryptCrmeb(true);
        } catch (\RuntimeException $e) {
            $res = false;
        }

        $defaultRecordCode = '00000000';
        if (($res && is_array($res)) || !$res) {
            list($domain, $recordCode, $installtime) = $res;
            $res = \crmeb\services\HttpService::postRequest('http://authorize.crmeb.net/api/auth_cert_query', ['domain_name' => $this->request->host(), 'label' => 3, 'version' => get_crmeb_version()]);
            $res = ($res ? json_decode($res, true) : []);
            $status = $res['data']['status'] ?? -9;
            $time = $installtime + 3888000;

            if ($time < time()) {
                $day = 0;
            } else {
                $day = (int)bcdiv((string)($time - time()), (string)86400, 0);
            }

            switch ((int)$status) {
                case 1:
                    $authCode = $res['data']['auth_code'] ?? $defaultRecordCode;
                    $autoContent = $res['data']['auto_content'] ?? '';
                    file_put_contents(app()->getRootPath() . 'ZEuduEXx9em36aYgTGvhQIq.txt', $autoContent . ',' . $authCode);
                    return $this->success(['status' => 1, 'authCode' => $authCode, 'day' => 0]);
                    break;
                case 2:
                    return $this->success(['status' => 2, 'day' => $day]);
                    break;
                case -1:
                    return $this->success(['status' => -1, 'day' => $day]);
                    break;
                case 0:
                    return $this->success(['status' => 0, 'day' => $day]);
                    break;
                default:
                    return $this->success(['status' => -9, 'day' => $day]);
                    break;
            }
        } else if ($res === true) {
            return $this->success(['status' => 1, 'authCode' => $this->authCode, 'day' => 0]);
        } else {
            return $this->success(['status' => 0]);
        }
    }
}

?>