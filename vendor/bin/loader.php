<?php
/*
 * This is the loader file!!!
 * Tasking well! This page's only one function is load all php files.
 */
namespace Hi{
  function isOnAPI(){
    return defined('onAPI');
  }
}
namespace{
require "about.php";
require "language.php";
require "vendor/lib/autoload.php";
require "users.php";
require "vendor/pages/home.php";
}
