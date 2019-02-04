<?php
/**
 * Initial exception class.
 */
class hiException{
    public $error;//Error information.
    public $code;//Error identity. -1 for default.
    public $time;//Error time. Current time-stamp.
    public function __construct($error,$code=0){
        $this->error = $error;
        $this->code = $code;
        $this->time = time();
    }
}