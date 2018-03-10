<?php
/*
 * SQLite manager for PHP
 * @author Goddess of Learning
 * Open PHP file.
 */

function sqlite($SQL,$DBPath="/Config/data.db"){
    //Execuse sql command to sqlite database and return a result
    $Database = sqlite_open($DBPath);
    if(!$Database)
        return null;
    $Result = sqlite_query($Database,$SQL);
    sqlite_close($Database);
    return $Result;
}