import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#submit').click(function() {
    let currency = $('#currency').val();
    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/007304291feade653405d100/latest/USD`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    console.log(currency);
    request.open("GET", url, true);
    request.send();
    function getElements(response) {
      $('.displayRate').html(`Currency Exchange Rate: ${response.conversion_rates[currency]}`);
    }
  });
});