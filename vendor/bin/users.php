<?php
/*
 * Hi-Buluo's users system, written by Goddess.
**/
namespace Hi\Users;
function register($username,$password,$email){
  //Register an user.
}
function ban($username,$reason){
  //Ban an user.
}
function unBan($username){
  //Un-ban an user.
}
function login($username,$password){
  //Check the validation of login.
}
if(\Hi\isOnAPI()) header("Debug-Users:".(string)\Hi\API\Register("users",function($funcID){
  //Register as Register API.
}));
