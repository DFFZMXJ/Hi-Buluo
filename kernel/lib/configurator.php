<?php
/**
 * Read, generate and modify configuration file.
 */
class Configuration{
    public static $file_name;
    public static $content;
    public static function read($filename){
        if(!file_exists($filename)) return false;
        return self::$content = require(self::$file_name=$filename);
    }
    public static function set($key,$value){
        //This is a hole to be filled.
        return false;
    }
    public static function save(){
        if(isset(self::$file_name)) return file_put_contents(self::$file_name,'<?php '.PHP_EOL.'return '.var_export(self::$content,true).';');
        return false;
    }
    public static function setup($filename,$content){
        if(file_exists($filename)) return false;
        file_put_contents(self::$file_name = $filename, '<?php '.PHP_EOL.'return '.var_export(self::$content = $content,true).';');
        return $content;
    }
}