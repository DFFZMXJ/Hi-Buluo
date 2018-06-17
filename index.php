<?php
/*
 * @Author Goddess of Learning
 * This is made my Goddess of Learning
 * It's open source for you!
 */

require "vendor/bin/loader.php";
if(file_exists("storage/installed.dll")&&empty($_GET["page"])){
  $Home = new Hi\Pages\Home;
  $Home->load();
}elseif (file_exists("storage/installed.dll")) {
  switch ($_GET["page"]) {
    case 'user'://User profile page
      break;
    case 'buluo':
      break;
    case 'auth':
      break;
    default:
      header(Hi\Status[404]);
      break;
  }
}else {
  //If admin did not install Hi Buluo.
}
