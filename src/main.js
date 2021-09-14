import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


function checkAmount(input) {
  if (input <= 0) {
    return new Error("Not a valid Date! You IDIOT!!");
  } else {
    return true;
  }
}

$(document).ready(function() {
  $('#submit').click(function() {
    const currency = $('#currency').val();
    const input = $('#dollar').val();
    parseInt(input);
    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/007304291feade653405d100/latest/USD`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();
    function getElements(response) {
      $('.displayRate').html(`Currency Exchange Rate: ${response.conversion_rates[currency]}`);
      $('.displayExchange').html(`Amount in ${currency}: ${response.conversion_rates[currency] * input}`);
    }
    try {
      const isinputValid = checkAmount(input);
      if (isinputValid instanceof Error){
        console.error(isinputValid.message);
        throw RangeError("Not a valid Date! You IDIOT!!");
      } else {
        $("#displayDate").hide();
        console.log("Try was successful, no need to catch. Not an idiot :)");
      }
    } catch(error){
      console.error(`Red alert! There's an error! ${error.message}`);
      $('#showError').text("please enter a valid amount >:(");
      $('.displayRate').hide();
      $('.displayExchange').hide();
    }
  });
});

