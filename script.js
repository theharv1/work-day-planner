$(document).ready(function(){

  // local storage values for all time blocks and sets them if they already exist
  
  // 8AM
  var t0 = localStorage.getItem("8am");
  $("#eight-am").text(t0);

  // 9AM
  var t1 = localStorage.getItem("9am");
  $("#nine-am").text(t1);

  // 10AM
  var t2 = localStorage.getItem("10am");
  $("#ten-am").text(t2);

  // 11AM
  var t3 = localStorage.getItem("11am");
  $("#eleven-am").text(t3);

  // 12PM
  var t4 = localStorage.getItem("12pm");
  $("#twelve-pm").text(t4);

  // 1PM
  var t5 = localStorage.getItem("1pm");
  $("#one-pm").text(t5);

  // 2PM
  var t6 = localStorage.getItem("2pm");
  $("#two-pm").text(t6);

  // 3PM
  var t7 = localStorage.getItem("3pm");
  $("#three-pm").text(t7);

  // 4PM
  var t8 = localStorage.getItem("4pm");
  $("#four-pm").text(t8);
  
  // 5PM
  var t9 = localStorage.getItem("5pm");
  $("#five-pm").text(t9);


  $(".saveBtn").on("click", function() {
      // gets the VALUE of the description in jQuery
      var value = $(this).siblings(".description").val(); 
      var time = $(this).siblings(".hour").text();
      localStorage.setItem(time, value);
      $(this).siblings(".description")[0].textContent = localStorage.value;

  });
  // current date and time
  $("#currentDay").text(moment().format("llll"));

  // apply color based on the current hour
  var elements = $(".time-block");
  var d = new Date();
 var h = d.getHours();
 
  
  for (i = 0; i < elements.length; i++) {
      var t = parseInt(elements[i].getAttribute("data-hour"));

      if (h < t) {
          elements[i].classList.add('future');
          elements[i].classList.remove('past');
          elements[i].classList.remove('present');
      }  else if (h > t) {
          elements[i].classList.add('past');
          elements[i].classList.remove('future');
          elements[i].classList.remove('present');
      } else if (h === t) {
          elements[i].classList.add('present');
          elements[i].classList.remove('future');
          elements[i].classList.remove('past');
      } else if (h > 16 && h < 8) {
          elements[i].classList.add('future');
          elements[i].classList.remove('past');
          elements[i].classList.remove('present');
      }
  }

});
