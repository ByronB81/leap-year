// everything below this line is business or back-end logic
var leapYear = function(year) {
  return false;
};

// everything below this line is front-end logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
