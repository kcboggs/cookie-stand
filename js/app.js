'use strict';

// global variable
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm'];

var seattle = new Stores('Seattle', 23, 65, 6.3);
var tokyo = new Stores('Tokyo', 3, 24, 1.2);
var dubai = new Stores('Dubai', 11, 38, 3.7);
var paris = new Stores('Paris', 20, 38, 2.3);
var lima = new Stores('Lima', 2, 16, 4.6);

// constructor function
function Stores(name, minCustomersEachHour, maxCustomersEachHour, averageCookiesPerCustomer){
  this.name = name;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.customersEachHour =[];
  this.cookiesSoldEachHour =[];
  this.totalCookies =0;
}
// for loop over hours
Stores.prototype.calcCustomersEachHour = function(){

  for (var i=0; i<hours.length; i++){
    var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

    this.customersEachHour.push(customersThisHours);
  }
};

// loop through array of customers and multiply each custer by average cookie sold
Stores.prototype.calCookiesSoldEachHour =function(){
  this.calcCustomersEachHour();
  for(var i=0; i<this.customerEachHours.length; i++){
    var totalCookies = Math.ceil(this.averageCookiesPerCustomer * this.customerEachHour[i]);
    this.cookiesSoldEachHour.push(totalCookies);
  }
};

Stores.prototype.cookiesSoldForTheDay = function(){
  this.calCookiesSoldEachHour();
  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    this.totalCookiesForTheDay += this.cookiesSoldEachHour[i];
  }
};

// helper function to generate a random number
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min +1)) + min;
}

seattle.calCookiesSoldEachHour();
tokyo.calCookiesSoldEachHour();
dubai.calcCookiesSoldEachHour();
paris.calcCookiesSoldEachHour();
lima.calCookiesSoldEachHour();
console.log('cookies sold each hour', seattle.cookiesSoldEachHour);
