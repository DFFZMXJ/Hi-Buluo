window["System"]=(()=>{
  //The snack skin's walking code.
  //Get the multi line of variable.
  var eof = input=>{
    if(!input.toString().replace(/\n/g,"@\\jump").match(/\/\*(.*)\*\//)) return null;
    return input.toString().replace(/\n/g,"@\\jump").match(/\/\*(.*)\*\//)[1].replace(/@\\jump/g,"\n");
  }
  //Stickers list.
  var Stickers = JSON.parse('{"happy":"1.png","wronged":"2.png","gift":"3.png","what":"4.png","cup":"5.png","doubt":"6.png","rising":"7.png","thumbs_up":"8.png","threw_up":"9.png","call":"10.png","too_happy":"11.png","despise":"12.png","weak":"13.png","awesome":"14.png","money":"15.png","reluctantly":"16.png","sweat":"17.png","sleep":"18.png","haha":"19.png","light_bulb":"20.png","spray":"21.png","insidious":"22.png","cool":"23.png","angry":"24.png","rose":"25.png","laughing_eyes":"26.png","funny":"27.png","flower_heart":"28.png","cold":"29.png","black_line":"30.png","kuanghan":"31.png","cry":"32.png","tears":"33.png","coin":"34.png","lol":"35.png","music":"36.png","unhappy":"37.png","be_good":"38.png","victory":"39.png","rainbow":"41.png","ha_ha":"42.png","yi":"43.png","surprised":"44.png","tongue":"45.png"}');
  String.prototype.sticker=function(mithrilSupported=false){
    //Convert :funny: as an emoji.
    if(!mithrilSupported) return this.replace(/:([^:\n]*):/gi,function(){
      if(Stickers[arguments[1]]) return "<img src=\"/assets/sticker/"+Stickers[arguments[1]]+".png\" alt=\""+arguments[1]+"\" class=\"hi-sticker\"/>";
      else return arguments[0];
    });
    else{}
  }
  return {
    Stickers:Stickers,
    load:{
      home:function(){
        //Load information for home page.
        m.render(document.body,m("p",":funny: Supported Mithril.js & stickers now!".sticker()));
      }
    }
  };
})();
