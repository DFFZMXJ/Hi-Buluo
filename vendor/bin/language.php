<?php
/*
 * Hi-Buluo's language loader.
 * Load the language file.
**/
namespace Hi;
function get_text($object){
  if(file_exists("vendor/langs/".(Database::get("settings")["language"]).".yml")){
    //If there is the language of settings.
    $texts = Parser\YAML::parse("vendor/langs/".(Database::get("settings")["language"].".yml"))["language"];
    $selected = explode(".",$object);
    $result=$object;
    for($i=0;$i<count($selected);$i++){
      //Return the selected text.
      if(!empty($texts[$selected[$i]])&&gettype($texts[$selected[$i]])!="array"){
        $result = $texts[$selected[$i]];
        return $texts[$selected[$i]];
        break;
      }else{
        if(!empty($texts[$selected[$i]])){
          $result = $texts[$selected[$i]];
          $texts = $texts[$selected[$i]];
          continue;
        }else{
          return $object;
          break;
        }
      }
    }
    return $result;
  }else{
    //If there is no current language.
    //Chinese simpfiled for the default.
    return $object;
  }
}
