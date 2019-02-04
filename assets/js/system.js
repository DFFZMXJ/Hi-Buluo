/**
 * Hi Buluo front-end JavaScript file
 */
function localStoragePlus(){
  //Improved edition of local storage. (No diffenrences, where's the improvement?)
  var excluedKeys = [
    //When running clear function and setItem function, deny these keys below. 
    'getItem',
    'setItem',
    'removeItem',
    'clear'
  ];
  var content = {};
  content.__proto__.getItem=function(key){
    return content[key];
  }
  content.__proto__.setItem=function(key,value){
    if(typeof key=="undefined") throw TypeError("Argument key is undefined.");
    if(excluedKeys.indexOf(key)==-1)content[key]=value;
  }
  content.__proto__.removeItem=function(key){
    if(excluedKeys.indexOf(key)==-1) if(!delete content[key]) content[key]=undefined;
  }
  content.__proto__.clear=function(){
    for(let i in content) if(excluedKeys.indexOf(i)==-1) if(!delete content[i]) content[i]=undefined;
  }
  Object.freeze(content.__proto__);//Prevent unexpected changes for preset functions.
  return content;
}
const System = new localStoragePlus();
const $ = mdui.JQ;