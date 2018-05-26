<?php
/*
 * Home page of Hi-Buluo. This inserted PHP codes.
 * Copyright (c) 2017 Copyright by Goddess. All Rights Reserved.
**/
namespace Hi\Pages;
class Home{
  /*Home page class.*/
  function load(){
    //Start loading.
    ?><!DOCTYPE html>
<html lang="<?php echo \Hi\Database::get("settings")["language"]; ?>">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width" />
    <title><?php echo \Hi\get_text("titles.home"); echo " - "; ?></title>
    <!--CSS Stylesheet File-->
    <link rel="stylesheet" type="text/css" href="/assets/css/mdui.min.css" />
    <link rel="stylesheet" type="text/css" href="/assets/css/os.css"/>
  </head>
  <body>
    <?php echo date("Y:M:d H:m:s");?>
    <!--JavaScript File-->
    <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/mdui.min.js"></script>
  </body>
</html>
<?php
    return true;
  }
}
