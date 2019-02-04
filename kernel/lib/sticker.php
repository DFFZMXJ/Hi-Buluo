<?php
/*
 * This is the sticker parser.
 * Made by DFFZMXJ.
 * This parser can convert :emoji_code: to a sticker image.
 * This parser will not be used formally because it will be merged with Markdown parser.
**/
class Sticker
{
  public static function convert($text){
    //Converter function.
    foreach($this->stickerList as $sticker=>$filename){
      //Replace sticker with foreach() function.
      $text=preg_replace('/:'.$sticker.':/i','<img class="hi-sticker" src="'.$this->stickerPath.$filename.'" alt="'.$sticker.'" title="'.$sticker.'" />', $text);
    }
    return $text;
  }
  var $stickerPath="/assets/sticker/";//The sticker path.
  var $stickerList=array(//Stickers list.
    //English name translated by Google.
    //Chinese name & sticker pack are from Tieba.
    'happy'=>'1.png',
    'wronged'=>'2.png',
    'gift'=>'3.png',
    'what'=>'4.png',
    'cup'=>'5.png',
    'doubt'=>'6.png',
    'rising'=>'7.png',
    'thumbs_up'=>'8.png',
    'threw_up'=>'9.png',
    'call'=>'10.png',
    'too_happy'=>'11.png',
    'despise'=>'12.png',
    'weak'=>'13.png',
    'awesome'=>'14.png',
    'money'=>'15.png',
    'reluctantly'=>'16.png',
    'sweat'=>'17.png',
    'sleep'=>'18.png',
    'haha'=>'19.png',//Tieba's raw name.
    'light_bulb'=>'20.png',
    'spray'=>'21.png',
    'insidious'=>'22.png',
    'cool'=>'23.png',
    'angry'=>'24.png',
    'rose'=>'25.png',
    'laughing_eyes'=>'26.png',
    'funny'=>'27.png',//THE MOST SPECIAL STICKER!!
    'flower_heart'=>'28.png',
    'cold'=>'29.png',
    'black_line'=>'30.png',
    'kuanghan'=>'31.png',//Google's result is "sweat".
    'cry'=>'32.png',
    'tears'=>'33.png',
    'coin'=>'34.png',
    'lol'=>'35.png',//Google's result is "haha".
    'music'=>'36.png',
    'unhappy'=>'37.png',
    'be_good'=>'38.png',
    'victory'=>'39.png',
    'rainbow'=>'41.png',//the 40th picture is the same as the 39th picture.
    'ha_ha'=>'42.png',
    'yi'=>'43.png',//Googls's result is "what".
    'surprised'=>'44.png',
    'tongue'=>'45.png'
  );
}
