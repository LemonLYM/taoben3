<?php


namespace app\utils\elm;


class ElmViewUtils
{
    private $type;
    private $props;

    public function __construct()
    {
        $this->props = [];
    }

    public function image(string $title, string $src)
    {
        $this->type = "img";
        $this->props["src"] = $src;
        return $this;
    }


    public function disabled($f){
        $this->disabled = $f;
        return $this;
    }

    public function build(){
        return (array)$this;
    }
}