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
    <title><?php echo \Hi\get_text("titles.home"); echo " - "; echo \Hi\Database::get("settings")["name"]; ?></title>
    <!--CSS Stylesheet File-->
    <link rel="stylesheet" type="text/css" href="/assets/css/mdui.min.css" />
    <link rel="stylesheet" type="text/css" href="/assets/css/os.css"/>
    <!--JavaScript File-->
    <script src="/assets/js/mithril.js"></script>
    <script src="/assets/js/mdui.min.js"></script>
    <script src="/assets/js/marked.js"></script>
    <script src="/assets/js/system.js"></script>
    <script>System.load.home();</script>
    <?php
    echo \Hi\Database::get("settings")["heading"]; //Load customized heading content.
    ?>
  </head>
  <body>
    <?php
    echo \Hi\Database::get("settings")["/body"]; //Load customized footer content.
    ?>
  </body>
</html>
<?php
    return true;
  }
}
?>
