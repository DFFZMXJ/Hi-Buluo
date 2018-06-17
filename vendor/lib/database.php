<?php
/*
 * JSON database controller. Query, change and remove database.
**/
namespace Hi;
//File manager.
class Database{
  static function get($table){
    //Read JSON configs.
    $database = fopen("storage/data/".$table.".json","r");
    $result="";
    if(!$database) return false;
    while(!feof($database)) $result=$result.fgets($database);
    fclose($database);
    return JSON_decode($result,1);//Return as array.
  }
  static function put($table,$content){
    //Save JSON configs.
    if(empty($content)||empty($table)) return false;//These two options are required.
    $database = fopen("storage/data/".$table.".json","w");
    if(!$database) return false;
    fputs(JSON_encode($content,JSON_PRETTY_PRINT));
    fclose($database);
    return true;
  }
  static function delete($table){
    //Remove a existed config file.
    if(!file_exists("storage/data/".$table.".json")) return false;
    if(unlink("storage/data/".$table.".json")) return true;
    else return false;
  }
  static function ls(){
    //List all config files.
    $list=dir("storage/data");
    $files=[];
    while(($filename = $list->read())!==false) if($filename!="."&&$filename!="..") {
      preg_match("/(?<Filename>.*)\.json$/i", $filename,$realFilename);
      $files[]=$realFilename["Filename"];
    }
    return $files;
  }
}
//JSON database struct controller.
class JsonBase{
  //Please new this class first before using
  var $Data=null;
  function import($data){//Supported custom data.
    //Import parsed JSON data.
    if(gettype($data)=="array"){
      $this->Data=$data;
      return true;
    }else{
      return false;//Only accept parsed data.
    }
  }
  function export($encode=false){//Export data, opintion encoding.
    if($encode){
      return json_encode($this->Data,JSON_PRETTY_PRINT);
    }else{
      return $this->Data;
    }
  }
}
