'use strict';

// global variable
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm'];

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

// helper function to generate a random number
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min +1)) + min;
}

var seattle = new Stores('Seattle', 23, 65, 6.3);
seattle.calCookiesSoldEachHour();
console.log('cookies sold each hour', seattle.cookiesSoldEachHour);


