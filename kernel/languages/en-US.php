<?php
/**
 * English (US) language pack for Hi Buluo.
 * @author DFFZMXJ
 * @version 1.0
 */
if(defined('__INFO_ONLY__')) return [
    'language'=>'English',
    'short'=>'en-US'
];
function get_language_javascript($print = true){
    $js = file_get_contents(__DIR__.'/en-US.js');
    if($print) echo $js;
    return $js;
}
return [
    /**
     * Language strings.
     */
];