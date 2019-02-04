<?php 
/**
 * Extra PHP functions.
 */
//More beautiful method to get a value from a complex array.
function array_get($array, $key, $default = null)
    {
        if (is_null($key)) {
            return $array; 
        }

        if (isset($array[$key])) {
            return $array[$key];
        }

        foreach (explode('.', $key) as $segment) {
            if (! is_array($array) || ! array_key_exists($segment, $array)) {
                return $default;
            }

            $array = $array[$segment];
        }
        return $array;
}
//Random string
function str_rand($length = 16){
    $string = '';
    while (($len = strlen($string)) < $length) {
        $size = $length - $len;
        $bytes = random_bytes($size);
        $string .= substr(str_replace(['/', '+', '='], '', base64_encode($bytes)), 0, $size);
    }
    return $string;
}