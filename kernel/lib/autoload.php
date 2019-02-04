<?php
/**
 * Include all files automatically.
 */
if(defined('HI_LOCKER_INC')) return 0;
define('HI_LOCKER_INC',true);//Lock this file.
//Found a new method to get the file list.
$files = scandir(__DIR__);
foreach($files as $filename) if($filename!="autoload.php"&&!is_dir($filename)) require $filename;
return $files;