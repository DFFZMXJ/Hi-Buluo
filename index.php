<?php
/*
 * This is made my DFFZMXJ
 * If you see this name has benn changed, contact me.
 * @author DFFZMXJ
 */
const __PROGRAM_ROOT__ = __DIR__;
require "kernel/initalize.php";
header("Content-Type:text/plain;");
var_export([__PATH_INFO__,$_SERVER,$_GET]);
echo " By index.php";