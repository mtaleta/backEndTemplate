var NowDate = new Date();　
var y = NowDate.getFullYear();　
var m = NowDate.getMonth() + 1;
var d = NowDate.getDate();　　
var ds = NowDate.getDay();
var showTime = y + '/' + m + '/' + d
var showTimeHi = y + '/' + m + '/' + d + ' 10:00'
// 往前三個月
var getDates = new Date();
var newDate = getDates - (90 * 1000 * 60 * 60 * 24)
var startDate = new Date(newDate);
var sy = startDate.getFullYear();　
var sm = startDate.getMonth() + 1;
var sd = startDate.getDate();
var startTime = sy + '/' + sm + '/' + sd

//行銷通知建立
function marketingBuild() {
  $.datetimepicker.setLocale('zh-TW')
  $('#datetimepicker').datetimepicker({
    format: "Y/m/d",
    timepicker: false,
    todayButton: false,
    dayOfWeekStart: 1,
    minDate: 0,
    value: showTime,
  });
  $('#datetimepicker2').datetimepicker({
    datepicker: false,
    format: 'H:i',
    value: '10:00',
  });
}
//行銷通知編輯
function noticeEdit() {
  $.datetimepicker.setLocale('zh-TW')
  $('#datetimepicker').datetimepicker({
    format: "Y/m/d",
    timepicker: false,
    todayButton: false,
    dayOfWeekStart: 1,
    minDate: 0,
    value: showTime,
  });
  $('#datetimepicker2').datetimepicker({
    datepicker: false,
    format: 'H:i',
  });
}
//行銷通知查詢
function marketingSearch() {
  $.datetimepicker.setLocale('zh-TW')
  $('#timepickerStart').datetimepicker({
    format: "Y/m/d",
    timepicker: false,
    dayOfWeekStart: 1,
    todayButton: false,
    minDate: 1,
    value: showTime,
  });
}
// //行銷通知歷史查詢區間
function marketingHistory() {
  $.datetimepicker.setLocale('zh-TW')
  $('#MarketingTimePickerStart').datetimepicker({
    format: "Y/m/d",
    timepicker: false,
    dayOfWeekStart: 1,
    todayButton: false,
    minDate: 1,
    value: showTime,
    onShow: function (ct) {
      this.setOptions({
        maxDate: $('#MarketingTimePickerEnd').val() ? $('#MarketingTimePickerEnd').val() : 0
      })
    },
    timepicker: false
  });
  $('#MarketingTimePickerEnd').datetimepicker({
    format: "Y/m/d",
    timepicker: false,
    dayOfWeekStart: 1,
    todayButton: false,
    maxDate: 0, //最大日為今天
    minDate: 1, //最小日不限制
    value: showTime,
    onShow: function (ct) {
      this.setOptions({
        minDate: $('#MarketingTimePickerStart').val() ? $('#MarketingTimePickerStart').val() : 1
      })
    },
    timepicker: false
  });
}
// 優惠通知建立
function preferBuild() {
  $.datetimepicker.setLocale('zh-TW')
  $('#preferTimePickerStart').datetimepicker({
    format: "Y/m/d H:i",
    dayOfWeekStart: 1,
    todayButton: false,
    minDate: 0,
    value: showTimeHi,
  });
  $('#preferTimePickerEnd').datetimepicker({
    format: "Y/m/d H:i",
    dayOfWeekStart: 1,
    todayButton: false,
    minDate: 1, //最小日為今天
    value: showTimeHi,
    onShow: function (ct) {
      this.setOptions({
        minDate: $('#preferTimePickerStart').val() ? $('#preferTimePickerStart').val() : 1
      })
    }
  })
  $('#pushDay').datetimepicker({
    format: "Y/m/d",
    timepicker: false,
    todayButton: false,
    dayOfWeekStart: 1,
    minDate: 1,
    value: showTime,
  });
  $('#pushTime').datetimepicker({
    datepicker: false,
    format: 'H:i',
    value: '10:00',
  });
}
//優惠通知查詢
function perferInquiry() {
  $.datetimepicker.setLocale('zh-TW')
  $('#MarketingTimePickerStart').datetimepicker({
    format: "Y/m/d",
    timepicker: false,
    dayOfWeekStart: 1,
    todayButton: false,
    minDate: 1,
    value: showTime,
    onShow: function (ct) {
      this.setOptions({
        maxDate: $('#MarketingTimePickerEnd').val() ? $('#MarketingTimePickerEnd').val() : 0
      })
    },
    timepicker: false
  });
  $('#MarketingTimePickerEnd').datetimepicker({
    format: "Y/m/d",
    timepicker: false,
    dayOfWeekStart: 1,
    todayButton: false,
    maxDate: 0, //最大日為今天
    minDate: 1, //最小日不限制
    value: showTime,
    onShow: function (ct) {
      this.setOptions({
        minDate: $('#MarketingTimePickerStart').val() ? $('#MarketingTimePickerStart').val() : 1
      })
    },
    timepicker: false
  });
}
// 優惠通知編輯
function perferEdit() {
  $.datetimepicker.setLocale('zh-TW')
  $('#perferEditTimePickerEnd').datetimepicker({
    format: "Y/m/d H:i",
    dayOfWeekStart: 1,
    todayButton: false,
    minDate: 0, //最小日為今天
    timePicker: true
  });
  $('#pushDay').datetimepicker({
    format: "Y/m/d",
    timepicker: false,
    todayButton: false,
    dayOfWeekStart: 1,
    minDate: 1,
  });
  $('#pushTime').datetimepicker({
    datepicker: false,
    format: 'H:i',
    onClose: function (dateText, inst) {
      console.log("---已關閉datetimepicker----" + dateText);
    },
  });
}
// 報表時間區間
function report() {
  $("#showTime").append(y + '年' + m + '月' + d + '日 ');
  $.datetimepicker.setLocale('zh-TW')
  $('#timepickerStart').datetimepicker({
    format: "Y/m/d",
    timepicker: false,
    dayOfWeekStart: 1,
    todayButton: false,
    minDate: 1,
    value: startTime,
    onShow: function (ct) {
      this.setOptions({
        maxDate: $('#timepickerEnd').val() ? $('#timepickerEnd').val() : 0 //(這邊要-90天)
      })
    },
    timepicker: false
  });
  $('#timepickerEnd').datetimepicker({
    format: "Y/m/d",
    timepicker: false,
    dayOfWeekStart: 1,
    todayButton: false,
    maxDate: 0, //最大日為今天
    minDate: 1, //最小日不限制
    value: showTime,
    onShow: function (ct) {
      this.setOptions({
        minDate: $('#timepickerStart').val() ? $('#timepickerStart').val() : 1 //(這邊要+90天)
      })
    },
    timepicker: false
  });
}
// 安控報表查詢時間區間
function STreport() {
  $("#showTime").append(y + '年' + m + '月' + d + '日 ');
  $.datetimepicker.setLocale('zh-TW')
  $('#STtimepickerStart').datetimepicker({
    format: "Y/m/d",
    timepicker: false,
    dayOfWeekStart: 1,
    todayButton: false,
    minDate: 1,
    value: true,
    onShow: function (ct) {
      this.setOptions({
        maxDate: $('#STtimepickerEnd').val() ? $('#STtimepickerEnd').val() : 0
      })
    },
    timepicker: false
  });
  $('#STtimepickerEnd').datetimepicker({
    format: "Y/m/d",
    timepicker: false,
    dayOfWeekStart: 1,
    todayButton: false,
    maxDate: 0, //最大日為今天
    minDate: 1, //最小日不限制
    value: true,
    onShow: function (ct) {
      this.setOptions({
        minDate: $('#STtimepickerStart').val() ? $('#STtimepickerStart').val() : 1
      })
    },
    timepicker: false
  });
}