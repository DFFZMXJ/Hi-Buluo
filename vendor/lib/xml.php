<?php
/*
 * XML reader for PHP
 * @author made by Goddess of Learning
 * Usage: $var = xmlread(Path of file);
 */
namespace Hi\Parser\XML;
function xmlread($FilePath){
    //Function to read XML file. Transfer to array.
    if(file_exists($FilePath)){
        libxml_disable_entity_loader(false);
        $xmldoc = simplexml_load_file($FilePath,'SimpleXMLElement', LIBXML_NOCDATA);
    }else{
        libxml_disable_entity_loader(true);
        $xmldoc = simplexml_load_file($FilePath,'SimpleXMLElement', LIBXML_NOCDATA);
    }
    $Result = json_decode(json_encode($xmldoc),true);
    return $Result;
}
