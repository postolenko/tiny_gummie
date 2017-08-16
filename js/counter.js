window.onload =function() {

var countDownMonth = $(".counter_values").attr("data-month");
var countDownDay = $(".counter_values").attr("data-day");
var countDownYear = $(".counter_values").attr("data-year");
var countDownHours = $(".counter_values").attr("data-hours");
var countDownMinutes = $(".counter_values").attr("data-minutes");
var countDownSeconds = $(".counter_values").attr("data-seconds");

var countDownDate = new Date(countDownMonth + " " + countDownDay + ", " + countDownYear + " " + countDownHours + ":" + countDownMinutes + ":" + countDownSeconds).getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if( days < 10) {

  	days = "0" + days;

  }

  if( hours < 10) {

  	hours = "0" + hours;

  }

  if( minutes < 10) {

  	minutes = "0" + minutes;

  }

  if( seconds < 10) {

   seconds = "0" + seconds;

  }

	var daysStr = String(days).split("").join("</span><span>");
	var hoursStr = String(hours).split("").join("</span><span>");
	var minutesStr = String(minutes).split("").join("</span><span>");
	var secondsStr = String(seconds).split("").join("</span><span>");

  var countDownTempl = '<div class="counter-box">\
            <div class="cell cell-1">\
              <div class="time-val time-val-day"><span>'+ daysStr +'</span></div>\
              <br />\
              <div class="time-name">Дней</div>\
            </div>\
            <div class="cell cell-2">\
              <div class="time-val time-val-hours"><span>'+ hoursStr +'</span></div>\
              <br />\
              <div class="time-name">Часов</div>\
            </div>\
            <div class="cell cell-3">\
              <div class="time-val time-val-minutes"><span>'+ minutesStr +'</span></div>\
              <br />\
              <div class="time-name">Минут</div>\
            </div>\
            <div class="cell cell-4">\
              <div class="time-val time-val-seconds"><span>'+ secondsStr +'</span></div>\
              <br />\
              <div class="time-name">Секунд</div>\
            </div>\
          </div>';

  if (distance < 0 || $(".counter_values").attr("data-ziro") == "ziro" ) {

    clearInterval(x);

    var countDownTempl = '<div class="counter-box">\
          <div class="cell cell-1">\
            <div class="time-val time-val-day"><span>'+ "0</span><span>0" +'</span></div>\
            <br />\
            <div class="time-name">Дней</div>\
          </div>\
          <div class="cell cell-2">\
            <div class="time-val time-val-hours"><span>'+ "0</span><span>0" +'</span></div>\
            <br />\
            <div class="time-name">Часов</div>\
          </div>\
          <div class="cell cell-3">\
            <div class="time-val time-val-minutes"><span>'+ "0</span><span>0" +'</span></div>\
            <br />\
            <div class="time-name">Минут</div>\
          </div>\
          <div class="cell cell-4">\
            <div class="time-val time-val-seconds"><span>'+ "0</span><span>0" +'</span></div>\
            <br />\
            <div class="time-name">Секунд</div>\
          </div>\
        </div>';

    $(".counter").each(function() {

      console.log(countDownTempl);

      $(this).html(countDownTempl);

    });

  } else {

    $(".counter").each(function() {

    	$(this).html(countDownTempl);

    });

  }
  
}, 1000);

};