<?php
/*
 * Hi Buluo API system. Open source API lab. This may execuse the API.
 * Developer can add their own API with register function.
 * Copyright © 2018 Copyright By Goddess. All Rights Are Reserved.
**/
namespace Hi{
  const onAPI = true;
  require "vendor/bin/loader.php";
}
namespace Hi\API{
//Let API to verify is running on api mode?
$apis = [];//No API for the default.
function Register($extID,$extension){
  //Register a new API.
  //Make sure there is no same API to replace. And make sure it is a validation API function.
  if(!empty($apis[$extID])||gettype($extension)!="function") return false;
  else {
    $apis[$extID]=$extension;//Add it to API list.
    return true;
  }
}
function Destory($extID){
  //Destory an API. (Even I don't know why... Hack the site?)
  if(empty($apis[$extID]))//Don't allow there is no existed API.
    return false;
  else {
    unset($apis[$extID]);
    return true;
  }
}
function Exec($extID,$functionID){
  //Execuse an API.
  return $apis[$extID]($functionID);
}
function Exists($extID){
  if(!empty($apis[$extID])) return true;
  else return false;
}

header("Content-Type:application/json");//Return as JSON for default.
header("Access-Control-Allow-Origin:*");//Allow other domains.
header("Server-Software:Hi-Buluo/".\Hi\About\version."");//Make my own flag.(●'◡'●)
if(empty($_GET["extension"])){//If user doen't give a extension ID, return an error.( means user direct accessed api.php)
  header(\Hi\Status[400]);
  die(json_encode([
    'status'=>400,
    'error'=>\Hi\get_text("errors.bad_request")
  ],JSON_PRETTY_PRINT));
}else if(Exists($_GET["extension"])){
  Exec($_GET["extension"],$_GET["function"]);
}else{
  header(\Hi\Status[404]);
  die(json_encode([
    'status'=>404,
    'error'=>\Hi\get_text("errors.not_found")
  ],JSON_PRETTY_PRINT));
}
}
