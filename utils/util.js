function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

/*  
 * 时间格式化工具 
 * 把Long类型日期还原MM-dd 00:00格式日期   
 */
function startTimeFormatUtil(longTypeDate) {
  if (longTypeDate.toString().indexOf(':') >= 0) return longTypeDate;
  longTypeDate -= 8 * 60 * 60 * 1000;
  var dateTypeDate = '';
  var date = new Date();
  date.setTime(longTypeDate);
  //dateTypeDate += date.getFullYear();   //年    
  //dateTypeDate += "-" + date.getMonth(); //月     
  dateTypeDate += date.getMonth() + 1 + '月'; //月    
  dateTypeDate += date.getDate() + '日';   //日    
  var tmp = '';
  if (date.getHours() < 10) tmp = '0';
  dateTypeDate += tmp;   
  dateTypeDate += date.getHours();//时
  tmp = '';
  if (date.getMinutes() < 10) tmp = '0';
  dateTypeDate += ':';
  dateTypeDate += tmp;
  dateTypeDate += date.getMinutes();//分
  //dateTypeDate += ":" + date.getSeconds();     //秒
  return dateTypeDate;
}

/*  
 * 时间格式化工具 
 * 把Long类型日期还原00:00格式日期   
 */
function endTimeFormatUtil(longTypeDate) {
  if (longTypeDate.toString().indexOf(':') >= 0) return longTypeDate;
  longTypeDate -= 8 * 60 * 60 * 1000;
  var dateTypeDate = '';
  var date = new Date();
  date.setTime(longTypeDate);
  //dateTypeDate += date.getFullYear();   //年    
  //dateTypeDate += "-" + date.getMonth(); //月     
  // dateTypeDate += date.getMonth() + "月"; //月    
  // dateTypeDate += date.getDay() + "日";   //日    
  // dateTypeDate += date.getHours();   //时
  // dateTypeDate += ":" + date.getMinutes();     //分  
  var tmp = '';
  if (date.getHours() < 10) tmp = '0';
  dateTypeDate += tmp;
  dateTypeDate += date.getHours();//时
  tmp = '';
  if (date.getMinutes() < 10) tmp = '0';
  dateTypeDate += ':';
  dateTypeDate += tmp;
  dateTypeDate += date.getMinutes();//分
  //dateTypeDate += ":" + date.getSeconds();     //秒
  return dateTypeDate;
}

module.exports = {
  formatTime: formatTime,
  startTimeFormatUtil: startTimeFormatUtil,
  endTimeFormatUtil: endTimeFormatUtil
};
