window.onload =function() {

// Set the date we're counting down to

var countDownMonth = "Aug";
var countDownDay = "30";
var countDownYear = "2017";
var countDownHours = "15";
var countDownMinutes = "37";
var countDownSeconds = "25";

var countDownDate = new Date(countDownMonth + " " + countDownDay + ", " + countDownYear + " " + countDownHours + ":" + countDownMinutes + ":" + countDownSeconds).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
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

  $(".counter").each(function() {

  	$(this).html(countDownTempl);

  });

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
  }
  
}, 1000);

};