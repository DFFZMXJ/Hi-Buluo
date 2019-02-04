<?php
/**
 * Initalize software.
 */
require __PROGRAM_ROOT__."/kernel/lib/autoload.php";
define(
    //Upgrade PHP to 7.0 or up to prevent this error.
    '__PATH_INFO__',$_SERVER['PATH_INFO']??$_SERVER['REDIRECT_PATH_INFO']??$_SERVER['REDIRECT_URL']??'/'
);