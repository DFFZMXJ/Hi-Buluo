/*
 * This is J8 lab.
 * Good evening~ This is my own JavaScript lab!
 * This will be mixed with jQuery!
 * ©Hi-Buluo designed by Goddess of Learning(DFFZMXJ) in 2018
**/
 //"use strict";
var none = Symbol("None");
var hi = {
    //The mixer function in a object.
    local:function(key){
        //LocalStorage reader&saver.
        if(!key)
            return null;
        else{
            return {
                val:function(val){
                    if(!val)
                        return localStorage.getItem(key);
                    else
                        return localStorage.setItem(key,val);
                },
                remove:function(){
                    return localStorage.removeItem(key);
                }
            };
        }
    },
    toQueryString:function(json){
      if(typeof json!="object") throw json+" isn't json data.";
      if(typeof json=="string") try{ json=JSON.parse(json);} catch(err){throw json+" isn't json data.";}
      var data = [];
	    var result = "";
	    for(keys in json) {
        data.push({
			  key:keys,
        value:json[keys]
      });
    }
    for(var i=0;i<data.length;i++) result+=escape(data[i].key)+"="+escape(data[i].value)+(i==data.length-1?"":"&");
    return result;
  },
    timeout:function(timeout,func,loop){
        //Timeout function.
        if(isNaN(loop)) loop=1;
        var funID=hi.rand.num(20);
        hi.session[funID]=setInterval(function(){
            //Function
            if(loop!=0){
                func(timeout,loop);
                --loop;
            }else{
                clearInterval(hi.session[funID]);
            }
        },timeout);
    },
    getCookies:function(query){
      //Get browser cookie.
      var cookies= document.cookie.split(";");
      for(var i=0;i<cookies.length;i++){
        if(cookies[i].trim().indexOf(query+"=")==0)return cookies[i].trim().substring((query+"=").length,cookies[i].trim().length);
      }
      return null;
    },
    setCookies:function(query,value,expire){
      //Set browser cookie.
    },
    removeCookies:function(query){
      //Remove browser cookie.
    },
    session:{
        info:"This is an session file to store some information."
    },
    hang:function(delay){
      //Make a delay by JS.
      if(isNaN(delay)) throw TypeError("delay value "+delay+" isn't a number!");
      var ended = 1;
      setTimeout(()=>{ended=0;},delay);
      while(ended);
      return true;
    },
    rand:{
        //Random string/number generator.
        int:function(min,max){
            //Random integer bigger than min and smaller than max.
            if(isNaN(min)||isNaN(max)) return Math.random();
            return min+ Math.round((Math.random())*(max-min));
        },
        num:function(length){
            //Generate random numbers by length.
            var result = "";
            for(var i = 0; i < length; i++) result+="0123456789".charAt(hi.rand.int(0,"0123456789".length-1));
            return result;
        },
        bool:function(percent=0.5){
            //Generate random boolean with possibly percent.
            percent_processed = 0;
            for(let i = 0; i < 100; i++) if(hi.rand.int(0,1)) percent_processed+=0.01;
            return percent_processed
        },
        char:function(length){
            //Generate random character.
            var result="";
            for(var i = 0; i < length; i ++) result+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(hi.rand.int(0,"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".length-1));
            return result;
        },
        array:function(key,split){
            switch(typeof(key)){
                case "object":
                    return key[hi.rand.int(0,key.length-1)];
                    break;
                case "string":
                    var result;
                    if(!split)
                        result = key.split();
                    else
                        result = key.split(split);
                    return result[hi.rand.int(0,result.length-1)];
                    break;
                default:
                    return null;
                break;
            }
        },
        uuid:function(){
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
        },
        custom_format_char:function(result="^^^-^^^^-^^^^",chars="0123456789"){
        	//Generate custom strings.// ^ for the current char to be replaced to random chars.
        	var output = "";
        	result=result.split("");
        	for(let i = 0; i < result.length; i++){
        		if(result[i]=="^") output+=hi.rand.custom(chars,1);
        		else
        		output+=result[i];
        	}
        	return output;
        },
        custom:function(keyg,length){
            //Custom random strings by using custom keys.
            var result="";
            for(var i = 0; i < length; i++) result+=keyg.charAt(hi.rand.int(0,keyg.length-1));
            return result;
        }
    },
    time:function(dd=new Date()){
      return Date.parse(dd)/1000;
    },
    go:window.history.pushState,
    base64:{
    	//Base 64 encoding/decoding
    	_Char:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    	encode:function(keyword){
    		if(typeof(keyword)=="undefined")return null;
    		else if(typeof(keyword)=="object")
    		keyword=JSON.stringify(keyword);
    		else if(typeof(keyword)!="string")
    		keyword=keyword.toString();
    		var result = "";
    		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    		var i = 0;
    		keyword = hi.utf8.encode(keyword);
    		while(i<keyword.length){
    			 chr1 = keyword.charCodeAt(i++);
    			 chr2 = keyword.charCodeAt(i++);
    			 chr3 = keyword.charCodeAt(i++);
    			 enc1 = chr1 >> 2;
    			 enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    			 enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    			 enc4 = chr3 & 63;
    			 if(isNaN(chr2)){
    			 	enc3=enc4=64;
    			 } else if(isNaN(chr3)){
    			 	enc4=64;
    			 }
    			 result=result+hi.base64._Char.charAt(enc1)+hi.base64._Char.charAt(enc2)+hi.base64._Char.charAt(enc3)+hi.base64._Char.charAt(enc4);

    		}return result;
    	},
    	decode:function (inputs) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        inputs = inputs.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < inputs.length) {
            enc1 = hi.base64._Char.indexOf(inputs.charAt(i++));
            enc2 = hi.base64._Char.indexOf(inputs.charAt(i++));
            enc3 = hi.base64._Char.indexOf(inputs.charAt(i++));
            enc4 = hi.base64._Char.indexOf(inputs.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = hi.utf8.decode(output);
        return output;
    }
    },
    utf8:{
    	//UTF-8 encoding/decoding
    	encode:function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    },
    decode:function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while ( i < utftext.length ) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
    },
    textarea:function(ID_key){
        //Textarea tool. Usage: new hi.textarea("Id of the element");
        var Element = document.getElementById(ID_key);
        this.getfocus=function(){
            Element.focus();
        };//Get the focus of the element.
        this.insert=function(before,after,location){
            if(!location || location.toUpperCase()=="END"){
                //Default: add at the last.
                Element.value+=before;
                Element.focus();
                return true;
            }else if(location.toUpperCase()=="CURSOR"){
                //Cursor: Add after the cursor.
                var begin = Element.selectionStart;
                var end = Element.selectionEnd;
                var selected = begin==end?Element.value.substring(begin,end):"";
                Element.value=Element.value.substring(0,begin)+before+after+Element.value.substring(end,Element.value.length);
                Element.focus();
                Element.selectionStart=begin+before;
                Element.selectionEnd=begin+before;
                return true;
            }else if(location.toUpperCase()=="BEGIN"){
                //Begin: Add at the beginning.
                Element.value=before+after+Element.value;
                Element.focus();
                return true;
            }else{
                return false;
            }
        };//Insert value(s) into textarea.
        this.val=function(value){
            if(typeof value==="undefined") return Element.value;
            else{
                return Element.value=value;
            }
        };//Set/Get the value.
        return true;
    },
    g_hash:function(text){
        var hash="";
        switch(typeof text){
            case "undefined":
                return false;
            break;
            case "string":
                hash=text;
                break;
            case "object":
                hash=JSON.stringify(text);
                break;
            default:
                hash=text.toString();
                break;
        }
        var chars = hash.length;
        var result = 0;
        for(var i = 0; i<chars;i++){
            result+=hash.charCodeAt(i);
        }
        return result.toString(16);
    },
    repeat:function(string,times) {
        var result = "";
        for (var i = 0; i < times; i++) result += string;
        return result;
    },
    hash:function(newv=none){
    	if(newv==none&&window.location.hash!="") return window.location.hash.replace("#","");
    	if(newv!=none) return window.location.hash=newv;
    	return null;
    },
    sha1:function(str){
    	/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1-BETA Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */
/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase     */
var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance  */
var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode    */
/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_sha1(s) {
 return binb2hex(core_sha1(str2binb(s), s.length * chrsz));
}
function b64_sha1(s) {
 return binb2b64(core_sha1(str2binb(s), s.length * chrsz));
}
function str_sha1(s) {
 return binb2str(core_sha1(str2binb(s), s.length * chrsz));
}
function hex_hmac_sha1(key, data) {
 return binb2hex(core_hmac_sha1(key, data));
}
function b64_hmac_sha1(key, data) {
 return binb2b64(core_hmac_sha1(key, data));
}
function str_hmac_sha1(key, data) {
 return binb2str(core_hmac_sha1(key, data));
}
/*
 * Perform a simple self-test to see if the VM is working
 */
function sha1_vm_test() {
 return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
}
/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */
function core_sha1(x, len) {
 /* append padding */
 x[len >> 5] |= 0x80 << (24 - len % 32);
 x[((len + 64 >> 9) << 4) + 15] = len;
 var w = Array(80);
 var a = 1732584193;
 var b = -271733879;
 var c = -1732584194;
 var d = 271733878;
 var e = -1009589776;
 for (var i = 0; i < x.length; i += 16) {
  var olda = a;
  var oldb = b;
  var oldc = c;
  var oldd = d;
  var olde = e;
  for (var j = 0; j < 80; j++) {
   if (j < 16) w[j] = x[i + j];
   else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
   var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
   e = d;
   d = c;
   c = rol(b, 30);
   b = a;
   a = t;
  }
  a = safe_add(a, olda);
  b = safe_add(b, oldb);
  c = safe_add(c, oldc);
  d = safe_add(d, oldd);
  e = safe_add(e, olde);
 }
 return Array(a, b, c, d, e);
}
/*
 * Perform the appropriate triplet combination function for the current
 * iteration
 */
function sha1_ft(t, b, c, d) {
 if (t < 20) return (b & c) | ((~b) & d);
 if (t < 40) return b ^ c ^ d;
 if (t < 60) return (b & c) | (b & d) | (c & d);
 return b ^ c ^ d;
}
/*
 * Determine the appropriate additive constant for the current iteration
 */
function sha1_kt(t) {
 return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;
}
/*
 * Calculate the HMAC-SHA1 of a key and some data
 */
function core_hmac_sha1(key, data) {
 var bkey = str2binb(key);
 if (bkey.length > 16) bkey = core_sha1(bkey, key.length * chrsz);
 var ipad = Array(16),
  opad = Array(16);
 for (var i = 0; i < 16; i++) {
  ipad[i] = bkey[i] ^ 0x36363636;
  opad[i] = bkey[i] ^ 0x5C5C5C5C;
 }
 var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
 return core_sha1(opad.concat(hash), 512 + 160);
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y) {
 var lsw = (x & 0xFFFF) + (y & 0xFFFF);
 var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
 return (msw << 16) | (lsw & 0xFFFF);
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */
function rol(num, cnt) {
 return (num << cnt) | (num >>> (32 - cnt));
}
/*
 * Convert an 8-bit or 16-bit string to an array of big-endian words
 * In 8-bit function, characters >255 have their hi-byte silently ignored.
 */
function str2binb(str) {
 var bin = Array();
 var mask = (1 << chrsz) - 1;
 for (var i = 0; i < str.length * chrsz; i += chrsz)
 bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
 return bin;
}
/*
 * Convert an array of big-endian words to a string
 */
function binb2str(bin) {
 var str = "";
 var mask = (1 << chrsz) - 1;
 for (var i = 0; i < bin.length * 32; i += chrsz)
 str += String.fromCharCode((bin[i >> 5] >>> (24 - i % 32)) & mask);
 return str;
}
/*
 * Convert an array of big-endian words to a hex string.
 */
function binb2hex(binarray) {
 var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
 var str = "";
 for (var i = 0; i < binarray.length * 4; i++) {
  str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
 }
 return str;
}
/*
 * Convert an array of big-endian words to a base-64 string
 */
function binb2b64(binarray) {
 var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
 var str = "";
 for (var i = 0; i < binarray.length * 4; i += 3) {
  var triplet = (((binarray[i >> 2] >> 8 * (3 - i % 4)) & 0xFF) << 16) | (((binarray[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4)) & 0xFF) << 8) | ((binarray[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4)) & 0xFF);
  for (var j = 0; j < 4; j++) {
   if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
   else str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
  }
 }
 return str;
}
return hex_sha1(str);
    },
    sha256:function(str){
    	/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-512, as defined
 * in FIPS 180-2
 * Version 2.2 Copyright Anonymous Contributor, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 * http://www.outofmemory.cn/codes
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_sha512(s)    { return rstr2hex(rstr_sha512(str2rstr_utf8(s))); }
function b64_sha512(s)    { return rstr2b64(rstr_sha512(str2rstr_utf8(s))); }
function any_sha512(s, e) { return rstr2any(rstr_sha512(str2rstr_utf8(s)), e);}
function hex_hmac_sha512(k, d)
  { return rstr2hex(rstr_hmac_sha512(str2rstr_utf8(k), str2rstr_utf8(d))); }
function b64_hmac_sha512(k, d)
  { return rstr2b64(rstr_hmac_sha512(str2rstr_utf8(k), str2rstr_utf8(d))); }
function any_hmac_sha512(k, d, e)
  { return rstr2any(rstr_hmac_sha512(str2rstr_utf8(k), str2rstr_utf8(d)), e);}

/*
 * Perform a simple self-test to see if the VM is working
 */
function sha512_vm_test()
{
  return hex_sha512("abc").toLowerCase() ==
    "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a" +
    "2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f";
}

/*
 * Calculate the SHA-512 of a raw string
 */
function rstr_sha512(s)
{
  return binb2rstr(binb_sha512(rstr2binb(s), s.length * 8));
}

/*
 * Calculate the HMAC-SHA-512 of a key and some data (raw strings)
 */
function rstr_hmac_sha512(key, data)
{
  var bkey = rstr2binb(key);
  if(bkey.length > 32) bkey = binb_sha512(bkey, key.length * 8);

  var ipad = Array(32), opad = Array(32);
  for(var i = 0; i < 32; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = binb_sha512(ipad.concat(rstr2binb(data)), 1024 + data.length * 8);
  return binb2rstr(binb_sha512(opad.concat(hash), 1024 + 512));
}

/*
 * Convert a raw string to a hex string
 */
function rstr2hex(input)
{
  try { hexcase } catch(e) { hexcase=0; }
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var output = "";
  var x;
  for(var i = 0; i < input.length; i++)
  {
    x = input.charCodeAt(i);
    output += hex_tab.charAt((x >>> 4) & 0x0F)
           +  hex_tab.charAt( x        & 0x0F);
  }
  return output;
}

/*
 * Convert a raw string to a base-64 string
 */
function rstr2b64(input)
{
  try { b64pad } catch(e) { b64pad=''; }
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var output = "";
  var len = input.length;
  for(var i = 0; i < len; i += 3)
  {
    var triplet = (input.charCodeAt(i) << 16)
                | (i + 1 < len ? input.charCodeAt(i+1) << 8 : 0)
                | (i + 2 < len ? input.charCodeAt(i+2)      : 0);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > input.length * 8) output += b64pad;
      else output += tab.charAt((triplet >>> 6*(3-j)) & 0x3F);
    }
  }
  return output;
}

/*
 * Convert a raw string to an arbitrary string encoding
 */
function rstr2any(input, encoding)
{
  var divisor = encoding.length;
  var i, j, q, x, quotient;

  /* Convert to an array of 16-bit big-endian values, forming the dividend */
  var dividend = Array(Math.ceil(input.length / 2));
  for(i = 0; i < dividend.length; i++)
  {
    dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
  }

  /*
   * Repeatedly perform a long division. The binary array forms the dividend,
   * the length of the encoding is the divisor. Once computed, the quotient
   * forms the dividend for the next step. All remainders are stored for later
   * use.
   */
  var full_length = Math.ceil(input.length * 8 /
                                    (Math.log(encoding.length) / Math.log(2)));
  var remainders = Array(full_length);
  for(j = 0; j < full_length; j++)
  {
    quotient = Array();
    x = 0;
    for(i = 0; i < dividend.length; i++)
    {
      x = (x << 16) + dividend[i];
      q = Math.floor(x / divisor);
      x -= q * divisor;
      if(quotient.length > 0 || q > 0)
        quotient[quotient.length] = q;
    }
    remainders[j] = x;
    dividend = quotient;
  }

  /* Convert the remainders to the output string */
  var output = "";
  for(i = remainders.length - 1; i >= 0; i--)
    output += encoding.charAt(remainders[i]);

  return output;
}

/*
 * Encode a string as utf-8.
 * For efficiency, this assumes the input is valid utf-16.
 */
function str2rstr_utf8(input)
{
  var output = "";
  var i = -1;
  var x, y;

  while(++i < input.length)
  {
    /* Decode utf-16 surrogate pairs */
    x = input.charCodeAt(i);
    y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
    if(0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF)
    {
      x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
      i++;
    }

    /* Encode output as utf-8 */
    if(x <= 0x7F)
      output += String.fromCharCode(x);
    else if(x <= 0x7FF)
      output += String.fromCharCode(0xC0 | ((x >>> 6 ) & 0x1F),
                                    0x80 | ( x         & 0x3F));
    else if(x <= 0xFFFF)
      output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
                                    0x80 | ((x >>> 6 ) & 0x3F),
                                    0x80 | ( x         & 0x3F));
    else if(x <= 0x1FFFFF)
      output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
                                    0x80 | ((x >>> 12) & 0x3F),
                                    0x80 | ((x >>> 6 ) & 0x3F),
                                    0x80 | ( x         & 0x3F));
  }
  return output;
}

/*
 * Encode a string as utf-16
 */
function str2rstr_utf16le(input)
{
  var output = "";
  for(var i = 0; i < input.length; i++)
    output += String.fromCharCode( input.charCodeAt(i)        & 0xFF,
                                  (input.charCodeAt(i) >>> 8) & 0xFF);
  return output;
}

function str2rstr_utf16be(input)
{
  var output = "";
  for(var i = 0; i < input.length; i++)
    output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF,
                                   input.charCodeAt(i)        & 0xFF);
  return output;
}

/*
 * Convert a raw string to an array of big-endian words
 * Characters >255 have their high-byte silently ignored.
 */
function rstr2binb(input)
{
  var output = Array(input.length >> 2);
  for(var i = 0; i < output.length; i++)
    output[i] = 0;
  for(var i = 0; i < input.length * 8; i += 8)
    output[i>>5] |= (input.charCodeAt(i / 8) & 0xFF) << (24 - i % 32);
  return output;
}

/*
 * Convert an array of big-endian words to a string
 */
function binb2rstr(input)
{
  var output = "";
  for(var i = 0; i < input.length * 32; i += 8)
    output += String.fromCharCode((input[i>>5] >>> (24 - i % 32)) & 0xFF);
  return output;
}

/*
 * Calculate the SHA-512 of an array of big-endian dwords, and a bit length
 */
var sha512_k;
function binb_sha512(x, len)
{
  if(sha512_k == undefined)
  {
    //SHA512 constants
    sha512_k = new Array(
new int64(0x428a2f98, -685199838), new int64(0x71374491, 0x23ef65cd),
new int64(-1245643825, -330482897), new int64(-373957723, -2121671748),
new int64(0x3956c25b, -213338824), new int64(0x59f111f1, -1241133031),
new int64(-1841331548, -1357295717), new int64(-1424204075, -630357736),
new int64(-670586216, -1560083902), new int64(0x12835b01, 0x45706fbe),
new int64(0x243185be, 0x4ee4b28c), new int64(0x550c7dc3, -704662302),
new int64(0x72be5d74, -226784913), new int64(-2132889090, 0x3b1696b1),
new int64(-1680079193, 0x25c71235), new int64(-1046744716, -815192428),
new int64(-459576895, -1628353838), new int64(-272742522, 0x384f25e3),
new int64(0xfc19dc6, -1953704523), new int64(0x240ca1cc, 0x77ac9c65),
new int64(0x2de92c6f, 0x592b0275), new int64(0x4a7484aa, 0x6ea6e483),
new int64(0x5cb0a9dc, -1119749164), new int64(0x76f988da, -2096016459),
new int64(-1740746414, -295247957), new int64(-1473132947, 0x2db43210),
new int64(-1341970488, -1728372417), new int64(-1084653625, -1091629340),
new int64(-958395405, 0x3da88fc2), new int64(-710438585, -1828018395),
new int64(0x6ca6351, -536640913), new int64(0x14292967, 0xa0e6e70),
new int64(0x27b70a85, 0x46d22ffc), new int64(0x2e1b2138, 0x5c26c926),
new int64(0x4d2c6dfc, 0x5ac42aed), new int64(0x53380d13, -1651133473),
new int64(0x650a7354, -1951439906), new int64(0x766a0abb, 0x3c77b2a8),
new int64(-2117940946, 0x47edaee6), new int64(-1838011259, 0x1482353b),
new int64(-1564481375, 0x4cf10364), new int64(-1474664885, -1136513023),
new int64(-1035236496, -789014639), new int64(-949202525, 0x654be30),
new int64(-778901479, -688958952), new int64(-694614492, 0x5565a910),
new int64(-200395387, 0x5771202a), new int64(0x106aa070, 0x32bbd1b8),
new int64(0x19a4c116, -1194143544), new int64(0x1e376c08, 0x5141ab53),
new int64(0x2748774c, -544281703), new int64(0x34b0bcb5, -509917016),
new int64(0x391c0cb3, -976659869), new int64(0x4ed8aa4a, -482243893),
new int64(0x5b9cca4f, 0x7763e373), new int64(0x682e6ff3, -692930397),
new int64(0x748f82ee, 0x5defb2fc), new int64(0x78a5636f, 0x43172f60),
new int64(-2067236844, -1578062990), new int64(-1933114872, 0x1a6439ec),
new int64(-1866530822, 0x23631e28), new int64(-1538233109, -561857047),
new int64(-1090935817, -1295615723), new int64(-965641998, -479046869),
new int64(-903397682, -366583396), new int64(-779700025, 0x21c0c207),
new int64(-354779690, -840897762), new int64(-176337025, -294727304),
new int64(0x6f067aa, 0x72176fba), new int64(0xa637dc5, -1563912026),
new int64(0x113f9804, -1090974290), new int64(0x1b710b35, 0x131c471b),
new int64(0x28db77f5, 0x23047d84), new int64(0x32caab7b, 0x40c72493),
new int64(0x3c9ebe0a, 0x15c9bebc), new int64(0x431d67c4, -1676669620),
new int64(0x4cc5d4be, -885112138), new int64(0x597f299c, -60457430),
new int64(0x5fcb6fab, 0x3ad6faec), new int64(0x6c44198c, 0x4a475817));
  }

  //Initial hash values
  var H = new Array(
new int64(0x6a09e667, -205731576),
new int64(-1150833019, -2067093701),
new int64(0x3c6ef372, -23791573),
new int64(-1521486534, 0x5f1d36f1),
new int64(0x510e527f, -1377402159),
new int64(-1694144372, 0x2b3e6c1f),
new int64(0x1f83d9ab, -79577749),
new int64(0x5be0cd19, 0x137e2179));

  var T1 = new int64(0, 0),
    T2 = new int64(0, 0),
    a = new int64(0,0),
    b = new int64(0,0),
    c = new int64(0,0),
    d = new int64(0,0),
    e = new int64(0,0),
    f = new int64(0,0),
    g = new int64(0,0),
    h = new int64(0,0),
    //Temporary variables not specified by the document
    s0 = new int64(0, 0),
    s1 = new int64(0, 0),
    Ch = new int64(0, 0),
    Maj = new int64(0, 0),
    r1 = new int64(0, 0),
    r2 = new int64(0, 0),
    r3 = new int64(0, 0);
  var j, i;
  var W = new Array(80);
  for(i=0; i<80; i++)
    W[i] = new int64(0, 0);

  // append padding to the source string. The format is described in the FIPS.
  x[len >> 5] |= 0x80 << (24 - (len & 0x1f));
  x[((len + 128 >> 10)<< 5) + 31] = len;

  for(i = 0; i<x.length; i+=32) //32 dwords is the block size
  {
    int64copy(a, H[0]);
    int64copy(b, H[1]);
    int64copy(c, H[2]);
    int64copy(d, H[3]);
    int64copy(e, H[4]);
    int64copy(f, H[5]);
    int64copy(g, H[6]);
    int64copy(h, H[7]);

    for(j=0; j<16; j++)
    {
        W[j].h = x[i + 2*j];
        W[j].l = x[i + 2*j + 1];
    }

    for(j=16; j<80; j++)
    {
      //sigma1
      int64rrot(r1, W[j-2], 19);
      int64revrrot(r2, W[j-2], 29);
      int64shr(r3, W[j-2], 6);
      s1.l = r1.l ^ r2.l ^ r3.l;
      s1.h = r1.h ^ r2.h ^ r3.h;
      //sigma0
      int64rrot(r1, W[j-15], 1);
      int64rrot(r2, W[j-15], 8);
      int64shr(r3, W[j-15], 7);
      s0.l = r1.l ^ r2.l ^ r3.l;
      s0.h = r1.h ^ r2.h ^ r3.h;

      int64add4(W[j], s1, W[j-7], s0, W[j-16]);
    }

    for(j = 0; j < 80; j++)
    {
      //Ch
      Ch.l = (e.l & f.l) ^ (~e.l & g.l);
      Ch.h = (e.h & f.h) ^ (~e.h & g.h);

      //Sigma1
      int64rrot(r1, e, 14);
      int64rrot(r2, e, 18);
      int64revrrot(r3, e, 9);
      s1.l = r1.l ^ r2.l ^ r3.l;
      s1.h = r1.h ^ r2.h ^ r3.h;

      //Sigma0
      int64rrot(r1, a, 28);
      int64revrrot(r2, a, 2);
      int64revrrot(r3, a, 7);
      s0.l = r1.l ^ r2.l ^ r3.l;
      s0.h = r1.h ^ r2.h ^ r3.h;

      //Maj
      Maj.l = (a.l & b.l) ^ (a.l & c.l) ^ (b.l & c.l);
      Maj.h = (a.h & b.h) ^ (a.h & c.h) ^ (b.h & c.h);

      int64add5(T1, h, s1, Ch, sha512_k[j], W[j]);
      int64add(T2, s0, Maj);

      int64copy(h, g);
      int64copy(g, f);
      int64copy(f, e);
      int64add(e, d, T1);
      int64copy(d, c);
      int64copy(c, b);
      int64copy(b, a);
      int64add(a, T1, T2);
    }
    int64add(H[0], H[0], a);
    int64add(H[1], H[1], b);
    int64add(H[2], H[2], c);
    int64add(H[3], H[3], d);
    int64add(H[4], H[4], e);
    int64add(H[5], H[5], f);
    int64add(H[6], H[6], g);
    int64add(H[7], H[7], h);
  }

  //represent the hash as an array of 32-bit dwords
  var hash = new Array(16);
  for(i=0; i<8; i++)
  {
    hash[2*i] = H[i].h;
    hash[2*i + 1] = H[i].l;
  }
  return hash;
}

//A constructor for 64-bit numbers
function int64(h, l)
{
  this.h = h;
  this.l = l;
  //this.toString = int64toString;
}

//Copies src into dst, assuming both are 64-bit numbers
function int64copy(dst, src)
{
  dst.h = src.h;
  dst.l = src.l;
}

//Right-rotates a 64-bit number by shift
//Won't handle cases of shift>=32
//The function revrrot() is for that
function int64rrot(dst, x, shift)
{
    dst.l = (x.l >>> shift) | (x.h << (32-shift));
    dst.h = (x.h >>> shift) | (x.l << (32-shift));
}

//Reverses the dwords of the source and then rotates right by shift.
//This is equivalent to rotation by 32+shift
function int64revrrot(dst, x, shift)
{
    dst.l = (x.h >>> shift) | (x.l << (32-shift));
    dst.h = (x.l >>> shift) | (x.h << (32-shift));
}

//Bitwise-shifts right a 64-bit number by shift
//Won't handle shift>=32, but it's never needed in SHA512
function int64shr(dst, x, shift)
{
    dst.l = (x.l >>> shift) | (x.h << (32-shift));
    dst.h = (x.h >>> shift);
}

//Adds two 64-bit numbers
//Like the original implementation, does not rely on 32-bit operations
function int64add(dst, x, y)
{
   var w0 = (x.l & 0xffff) + (y.l & 0xffff);
   var w1 = (x.l >>> 16) + (y.l >>> 16) + (w0 >>> 16);
   var w2 = (x.h & 0xffff) + (y.h & 0xffff) + (w1 >>> 16);
   var w3 = (x.h >>> 16) + (y.h >>> 16) + (w2 >>> 16);
   dst.l = (w0 & 0xffff) | (w1 << 16);
   dst.h = (w2 & 0xffff) | (w3 << 16);
}

//Same, except with 4 addends. Works faster than adding them one by one.
function int64add4(dst, a, b, c, d)
{
   var w0 = (a.l & 0xffff) + (b.l & 0xffff) + (c.l & 0xffff) + (d.l & 0xffff);
   var w1 = (a.l >>> 16) + (b.l >>> 16) + (c.l >>> 16) + (d.l >>> 16) + (w0 >>> 16);
   var w2 = (a.h & 0xffff) + (b.h & 0xffff) + (c.h & 0xffff) + (d.h & 0xffff) + (w1 >>> 16);
   var w3 = (a.h >>> 16) + (b.h >>> 16) + (c.h >>> 16) + (d.h >>> 16) + (w2 >>> 16);
   dst.l = (w0 & 0xffff) | (w1 << 16);
   dst.h = (w2 & 0xffff) | (w3 << 16);
}

//Same, except with 5 addends
function int64add5(dst, a, b, c, d, e)
{
   var w0 = (a.l & 0xffff) + (b.l & 0xffff) + (c.l & 0xffff) + (d.l & 0xffff) + (e.l & 0xffff);
   var w1 = (a.l >>> 16) + (b.l >>> 16) + (c.l >>> 16) + (d.l >>> 16) + (e.l >>> 16) + (w0 >>> 16);
   var w2 = (a.h & 0xffff) + (b.h & 0xffff) + (c.h & 0xffff) + (d.h & 0xffff) + (e.h & 0xffff) + (w1 >>> 16);
   var w3 = (a.h >>> 16) + (b.h >>> 16) + (c.h >>> 16) + (d.h >>> 16) + (e.h >>> 16) + (w2 >>> 16);
   dst.l = (w0 & 0xffff) | (w1 << 16);
   dst.h = (w2 & 0xffff) | (w3 << 16);
}
return hex_sha512(str);
    },
    QueryString:function(name) {
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
var r = window.location.search.substr(1).match(reg);
if (r != null) return unescape(r[2]); return null;
},
md5:function (string) {
 function RotateLeft(lValue, iShiftBits) {
  return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
 }
 function AddUnsigned(lX,lY) {
  var lX4,lY4,lX8,lY8,lResult;
  lX8 = (lX & 0x80000000);
  lY8 = (lY & 0x80000000);
  lX4 = (lX & 0x40000000);
  lY4 = (lY & 0x40000000);
  lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
  if (lX4 & lY4) {
   return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
  }
  if (lX4 | lY4) {
   if (lResult & 0x40000000) {
    return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
   } else {
    return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
   }
  } else {
   return (lResult ^ lX8 ^ lY8);
  }
  }
  function F(x,y,z) { return (x & y) | ((~x) & z); }
  function G(x,y,z) { return (x & z) | (y & (~z)); }
  function H(x,y,z) { return (x ^ y ^ z); }
 function I(x,y,z) { return (y ^ (x | (~z))); }
 function FF(a,b,c,d,x,s,ac) {
  a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
  return AddUnsigned(RotateLeft(a, s), b);
 };
 function GG(a,b,c,d,x,s,ac) {
  a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
  return AddUnsigned(RotateLeft(a, s), b);
 };
 function HH(a,b,c,d,x,s,ac) {
  a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
  return AddUnsigned(RotateLeft(a, s), b);
 };
 function II(a,b,c,d,x,s,ac) {
  a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
  return AddUnsigned(RotateLeft(a, s), b);
 };
 function ConvertToWordArray(string) {
  var lWordCount;
  var lMessageLength = string.length;
  var lNumberOfWords_temp1=lMessageLength + 8;
  var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
  var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
  var lWordArray=Array(lNumberOfWords-1);
  var lBytePosition = 0;
  var lByteCount = 0;
  while ( lByteCount < lMessageLength ) {
   lWordCount = (lByteCount-(lByteCount % 4))/4;
   lBytePosition = (lByteCount % 4)*8;
   lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
   lByteCount++;
  }
  lWordCount = (lByteCount-(lByteCount % 4))/4;
  lBytePosition = (lByteCount % 4)*8;
  lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
  lWordArray[lNumberOfWords-2] = lMessageLength<<3;
  lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
  return lWordArray;
 };
 function WordToHex(lValue) {
  var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
  for (lCount = 0;lCount<=3;lCount++) {
   lByte = (lValue>>>(lCount*8)) & 255;
   WordToHexValue_temp = "0" + lByte.toString(16);
   WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
  }
  return WordToHexValue;
 };
 function Utf8Encode(string) {
  string = string.replace(/\r\n/g,"\n");
  var utftext = "";
  for (var n = 0; n < string.length; n++) {
   var c = string.charCodeAt(n);
   if (c < 128) {
    utftext += String.fromCharCode(c);
   }
   else if((c > 127) && (c < 2048)) {
    utftext += String.fromCharCode((c >> 6) | 192);
    utftext += String.fromCharCode((c & 63) | 128);
   }
   else {
    utftext += String.fromCharCode((c >> 12) | 224);
    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
    utftext += String.fromCharCode((c & 63) | 128);
   }
  }
  return utftext;
 };
 var x=Array();
 var k,AA,BB,CC,DD,a,b,c,d;
 var S11=7, S12=12, S13=17, S14=22;
 var S21=5, S22=9 , S23=14, S24=20;
 var S31=4, S32=11, S33=16, S34=23;
 var S41=6, S42=10, S43=15, S44=21;
 string = Utf8Encode(string);
 x = ConvertToWordArray(string);
 a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
 for (k=0;k<x.length;k+=16) {
  AA=a; BB=b; CC=c; DD=d;
  a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
  d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
  c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
  b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
  a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
  d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
  c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
  b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
  a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
  d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
  c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
  b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
  a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
  d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
  c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
  b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
  a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
  d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
  c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
  b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
  a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
  d=GG(d,a,b,c,x[k+10],S22,0x2441453);
  c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
  b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
  a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
  d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
  c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
  b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
  a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
  d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
  c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
  b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
  a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
  d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
  c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
  b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
  a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
  d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
  c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
  b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
  a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
  d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
  c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
  b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
  a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
  d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
  c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
  b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
  a=II(a,b,c,d,x[k+0], S41,0xF4292244);
  d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
  c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
  b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
  a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
  d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
  c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
  b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
  a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
  d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
  c=II(c,d,a,b,x[k+6], S43,0xA3014314);
  b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
  a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
  d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
  c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
  b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
  a=AddUnsigned(a,AA);
  b=AddUnsigned(b,BB);
  c=AddUnsigned(c,CC);
  d=AddUnsigned(d,DD);
 }
 var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
 return temp.toLowerCase();
},
    partten:{
        email:/^[A-Za-z0-9\.\&]+@[A-Za-z0-9]+[\.A-Za-z]+$/g, //Example: dffzmxj@qq.com
        qq:/[0-9]{5,10}/g, //Example: 2477819731
        words:/^[A-Za-z0-9]+$/ //Example: Google
    }
};
eval("const "+decodeURI("%E7%8E%8B%E6%96%B0%E6%88%90")+" = \""+decodeURI("%E5%A4%A9%E4%B8%8B%E7%AC%AC%E4%B8%80%E5%A4%A7%E5%82%BB%E7%BC%BA")+"\";");
(function(){
    //Pre-loader function.
    if(!hi){
        console.error("Failed to load eaq.js! Refresh this page now!");
        return false;
    }
})();
