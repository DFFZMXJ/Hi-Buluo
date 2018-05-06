/*
Good evening~ This is my own JavaScript lab!
This will be mixed with jQuery!
Another version of eaqJS! No version information!
 */
var hi = {
    //The mixer function in a object.
    local:function(key){
        //LocalStorage reader.
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
    session:{
        info:"This is an session file to store some information."
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
        bool:function(){
            return hi.rand.int(0,1)?true:false;
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
        custom:function(key,length){
            //Custom random strings by using custom keys.
            var result="";
            for(var i = 0; i < length; i++) result+=key.charAt(hi.rand.int(0,key.length-1));
            return result;
        }
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
        return result.toString(2);
    },
    repeat:function(string,times) {
        var result = "";
        for (var i = 0; i < times; i++) result += string;
        return result;
    },
    partten:{
        email:/^[A-Za-z0-9]+@[A-Za-z0-9]+[\.A-Za-z]+$/g, //Example: dffzmxj@qq.com
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