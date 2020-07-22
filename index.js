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
  sheet.getRange(57, 1, 9, 9).copyTo(sheet.getRange(570, 1), { contentsOnly: true, formatOnly: true })
  var today = new Date();
  var firstday = new Date(today.getFullYear(), 0, 1);
  var fulldays = Math.floor((today.getTime() - firstday.getTime()) / (1000 * 86400));
  document.write(fulldays + '日経過し');
  document.write("第" + Math.floor((fulldays - today.getDay() + 12) / 7) + "週目になりました");
  // touday_nisshi.getValue()

}