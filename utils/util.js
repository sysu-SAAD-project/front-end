function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/*  
 * 时间格式化工具 
 * 把Long类型日期还原yyyy-MM-dd 00:00:00格式日期   
 */
function datetimeFormatUtil(longTypeDate) {
  var dateTypeDate = "";
  var date = new Date();
  date.setTime(longTypeDate);
  dateTypeDate += date.getFullYear();   //年    
  dateTypeDate += "-" + date.getMonth(); //月     
  dateTypeDate += "-" + date.getDay();   //日    
  dateTypeDate += "  " + date.getHours();   //时    
  dateTypeDate += ":" + date.getMinutes();     //分  
  //dateTypeDate += ":" + date.getSeconds();     //秒
  return dateTypeDate;
}   

module.exports = {
  formatTime: formatTime,
  datetimeFormatUtil: datetimeFormatUtil
}
