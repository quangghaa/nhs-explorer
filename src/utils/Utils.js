export const vndConverter = (vnd) => {
    if(vnd != undefined) {
        return vnd.toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,');

        
    }
    return vnd.toString();
}

export const formatTime = (timestring) => {
    if(timestring != undefined) {
        let date = new Date(timestring);

        var res = date.getUTCFullYear().toString() + "-" +
          (date.getUTCMonth() + 1).toString() +
          "-" + date.getUTCDate() + " " + date.getUTCHours() +
          ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();
        return res;
   }
   return null;
}