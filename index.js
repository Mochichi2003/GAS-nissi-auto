/** @OnlyCurrentDoc */
/**
 * 
 * @param {Number} value 体温
 * @return {String} return その日に学校にいってるかどうか
 * 
 */
function TAION(value) {
  var result

  if (value != "" && value >= 37.5) {
    result = "✕"
  } else if (value != "") {
    result = "◯"
  } else {
    result = ""
  }
  var color = "#550055"
  // result.setBackground("#550055")
  return result
}

function NISSHI(value) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("③日誌");

  console.log(sheet.getName());
  // return sheet.getName()
  var today = new Date();
  var firstday = new Date(2020, 3, 13);
  // var firstday = new Date(today.getFullYear(), 0, 1);

  var fulldays = Math.floor((today.getTime() - firstday.getTime()) / (1000 * 86400));
  console.log(fulldays + '日経過し');
  console.log("第" + Math.floor((fulldays - today.getDay() + 12) / 7) + "週目になりました");

  var Week_passed = Math.floor((fulldays) / 7)
  console.log(Week_passed);
  var Week_line_length = 16 + ((Week_passed) * 10) - 2
  console.log("行番号 = " + Week_line_length)
  sheet.getRange(5, 1, 9, 7).copyTo(sheet.getRange(Week_line_length, 1), { contentsOnly: true, formatOnly: true })//コピペするとこ
  sheet.getRange(Week_line_length, 1, 9, 7).copyTo(sheet.getRange(5, 1), { contentsOnly: true, formatOnly: true })//コピペするとこ
  // touday_nisshi.getValue()

}

function SYuhazime(params) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("③日誌");

  console.log(sheet.getName());
  // return sheet.getName()
  var today = new Date();
  var firstday = new Date(2020, 3, 13);
  // var firstday = new Date(today.getFullYear(), 0, 1);

  var fulldays = Math.floor((today.getTime() - firstday.getTime()) / (1000 * 86400));
  console.log(fulldays + '日経過し');
  console.log("第" + Math.floor((fulldays - today.getDay() + 12) / 7) + "週目になりました");

  var Week_passed = Math.floor((fulldays) / 7)
  console.log(Week_passed);
  var Week_line_length = 16 + ((Week_passed) * 10) - 2
  console.log("行番号 = " + Week_line_length)
  sheet.getRange(Week_line_length, 1, 9, 7).copyTo(sheet.getRange(5, 1), { contentsOnly: true, formatOnly: true })//コピペするとこ
  sheet.getRange(5, 1, 9, 7).copyTo(sheet.getRange(Week_line_length, 1), { contentsOnly: true, formatOnly: true })//コピペするとこ
  // touday_nisshi.getValue()
}