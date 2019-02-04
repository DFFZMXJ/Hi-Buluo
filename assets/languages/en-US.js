/**
 * English (US) language pack for Hi Buluo (JavaScript file)
 * 
 * @author DFFZMXJ
 * @version 1.0
 */
System.setItem("language",{
    //Different lanuages will own different count systems, so I built a function to parse them. It's flexible.
    parseNumber:function(num){
        //Parse large numbers into a short form: 1,000,000 => 1M
        if(isNaN(num)) return NaN;
        var shortForms = ['K','M','B','T'];
        var suffix = -1;//Selected short form.
        while(num>1000&&suffix<shortForms.length-1){
            //Short forms are not infinity.
            num = Math.round(num/100)/10;//Simpify irrational numbers.
            suffix++;
        }
        return num+(suffix==-1?'':shortForms[suffix]);
    },
    parseBytes:function(bytes){
        //Parse byte into a larger unit: 2147483647 Bytes => 2GB
        if(isNaN(bytes)) return NaN;
        var units = ['KB','MB','GB','TB','PB','EB',/*Next units are from Wikipedia*/'ZB','YB',/*Next units are from Baidu, they may be fake*/'BB','NB','DB'];
        var suffix = -1;//Selected short form.
        while(bytes>1000&&suffix<units.length-1){
            //Short forms are not infinity.
            bytes = Math.round(bytes/100)/10;//Simpify irrational numbers.
            suffix++;
        }
        return bytes+(suffix==-1?'B':units[suffix]);
    },
    parseTime:function(time,disableRelativeTime=false){
        if(isNaN(time)) throw TypeError("Argument time isn't a number.");
        var months = "January February March April May June July August September October November December".split(" ");
        var units = {
            now:"Just now",
            sec:["second","seconds"],//Singular and plural
            min:["minute","minutes"],
            hrs:["hour","hours"],
            day:["day","days"],
            mon:["month","months"],
            aol:["ago","later"]//The past and the future
        };
        var assignedDate = new Date(time*1000);
        var now = new Date();
        if(disableRelativeTime||now.getTime()/1000-assignedDate.getTime()/1000>2678400||assignedDate.getTime()/1000-now.getTime()/1000>2678400)
            return months[assignedDate.getMonth()]+" "+assignedDate.getDate()+", "+assignedDate.getFullYear();//If it's from long ago or disabled friendly time, show the full date.
        //I am lazy to calculate the days of a month, so I will direct return a date if it's over than a month.
        var differenceSeconds = Math.max(now.getTime()-assignedDate.getTime(),assignedDate.getTime()-now.getTime())/1000;//My own method to calculate is it future or past.
        if(differenceSeconds<=10) return units.now;//Unavoidable mistakes.
        var parsedExpression = "";
        if(differenceSeconds<60)
            parsedExpression+=differenceSeconds+" "+units.sec[1];
        else if(differenceSeconds<3600)
            parsedExpression+=(differenceSeconds/60|0)+" "+units.min[(differenceSeconds/60|0)!=1?1:0];
        else if(differenceSeconds<86400)
            parsedExpression+=(differenceSeconds/3600|0)+" "+units.hrs[(differenceSeconds/3600|0)!=1?1:0];
        else
            parsedExpression+=(differenceSeconds/86400|0)+" "+units.day[(differenceSeconds/86400|0)!=1?1:0];
        return parsedExpression+" "+units.aol[(now.getTime()<assignedDate.getTime())?1:0];
    }
});