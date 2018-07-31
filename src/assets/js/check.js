// 長度檢查(title)
function getStrLength() {
  var size = 0;
  var str = document.getElementById('prefername').value
  var textTotal = document.getElementById('textTotal')

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) <= 0x9FA5) {
      size += 2;
    } else {
      size += 1;
    }
  }
  textTotal.innerHTML = "<code>" + size + "</code>"
  return size;
}

// 長度檢查(內文)
function getPushStrLength() {
  var size = 0;
  var str = document.getElementById('pushText').value
  var textTotal = document.getElementById('pushTextCheck')

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) <= 0x9FA5) {
      size += 2;
    } else {
      size += 1;
    }
  }
  textTotal.innerHTML = "<code>" + size + "</code>"
  return size;
}
//優惠通知長度檢查
function getPushLength() {
  var size = 0;
  var str = document.getElementById('pushText').value
  var textTotal = document.getElementById('pushTextCheck')

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) <= 0x9FA5) {
      size += 2;
    } else {
      size += 1;
    }
  }
  textTotal.innerHTML = "<code>" + size + "</code>"
  previewText()
  return size;
}
//優惠通知建立長度檢查
function getPushBuildLength() {
  var size = 0;
  var str = document.getElementById('pushText').value
  var textTotal = document.getElementById('pushTextCheck')

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) <= 0x9FA5) {
      size += 2;
    } else {
      size += 1;
    }
  }
  textTotal.innerHTML = "<code>" + size + "</code>"
  previewBuildText()
  return size;
}

// 檢查是否IE8
function DetectIsIE() {
  var DEFAULT_VERSION = 8.0;
  var ua = navigator.userAgent.toLowerCase();
  var isIE = ua.indexOf("msie") > -1;
  var safariVersion;
  if (isIE) {
    safariVersion = ua.match(/msie ([\d.]+)/)[1];
  }
  if (safariVersion <= DEFAULT_VERSION) {
    $('#ie8NoGood').modal('show')
  };
}

//安控報表30天時間檢查
function reportTime() {
  var timeStart = $('#STtimepickerStart').val();
  var timeEnd = $('#STtimepickerEnd').val();
  var dtstart = new Date($('#STtimepickerStart').val());
  var dtend = new Date($('#STtimepickerEnd').val());
  var newDate = new Date(dtend - (1000 * 60 * 60 * 24 * 30))
  var newY = newDate.getFullYear() + '/'
  var newM = (newDate.getMonth() + 1 < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1) + '/'
  var newD = newDate.getDate()
  var Start = newY + newM + newD
  var dtStep = 1000 * 60 * 60 * 24;

  if (timeStart == '' || timeEnd == '') {
    $("#reporWarning").children().remove();
    $node = '<div>The inquiry period cannot be empty.</div>'
    $("#reporWarning").append($node);
    $("#reportModel").modal("show");
  }
  if ((dtend - dtstart) / dtStep > 30) {
    $("#reporWarning").children().remove();
    $node = '<div>The inquiry period exceeds 30 days</div>'
    $("#reporWarning").append($node);
    $("#reportModel").modal("show");
  }
}

//一般報表90天時間檢查
function reportNinety() {
  var timeStart = $('#timepickerStart').val();
  var timeEnd = $('#timepickerEnd').val();
  var dtstart = new Date($('#timepickerStart').val());
  var dtend = new Date($('#timepickerEnd').val());
  var newDate = new Date(dtend - (1000 * 60 * 60 * 24 * 90));
  var newY = newDate.getFullYear() + '/';
  var newM = (newDate.getMonth() + 1 < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1) + '/';
  var newD = newDate.getDate();
  var Start = newY + newM + newD;
  var dtStep = 1000 * 60 * 60 * 24;
  if (timeStart == '' || timeEnd == '') {
    $("#reporWarning").children().remove();
    $node = '<div>起訖日不可為空。</div>'
    $("#reporWarning").append($node);
    $("#reportModel").modal("show");
  } else if ((dtend - dtstart) / dtStep > 90) {
    $("#reporWarning").children().remove();
    $node = '<div>日期區間超過90天，需在' + Start + '至' + timeEnd + '之間。</div>'
    $("#reporWarning").append($node);
    $("#reportModel").modal("show");
  }
}

// ID隱碼/驗證
function hiddenID() {

  var id = $('#customID').val();
  $("#customIdHidden").val(id);
  if (id.length === 1) {
    var pass = id.substr(0, id.length - 1) + "*"
  } else if (id.length === 2) {
    var pass = id.substr(0, id.length - 2) + "**"
  } else {
    var pass = id.substr(0, id.length - 3) + "***"
  }

  $("#customID").val(pass);
  var hiddenid = $('#customIdHidden').val();
  var reg = new RegExp("^[a-zA-Z]{1}[1-2]{1}[0-9]{8}$");

  $("#reporWarning").children().remove();
  if (reg.test(hiddenid)) {
  } else {
    $node = '<div>格式輸入錯誤，請重新確認。</div>'
    $("#reporWarning").append($node);
    $("#reportModel").modal("show");
    $("#customID").val('');
    $("#customIdHidden").val('');
  }
}