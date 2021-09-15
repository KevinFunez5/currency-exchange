import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import moneyService from './js/exchange';


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
    let promise = moneyService.getMoney();
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.displayRate').html(`Currency Exchange Rate: ${body.conversion_rates[currency]}`);
      $('.displayExchange').html(`Amount in ${currency}: ${body.conversion_rates[currency] * input}`);

    });
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

