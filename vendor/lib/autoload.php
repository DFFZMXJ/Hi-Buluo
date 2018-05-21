<?php
/**
 * Include all libraries automatically.
 */
if(empty($HI_LOCKER_INC)){
    //Make sure not included this file again, check for the variable empty.
    $HI_LOCKER_INC=true;//Lock this file.
    $this_directory=dir(getcwd()."/vendor/lib");
    while(($filename = $this_directory->read())!==false){
        if($filename!="."&&$filename!="..")	include $filename;
    }
}
