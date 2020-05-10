'use strict';

// global variable array of hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var Stores =[];

var parentElement =document.getElementById('table');

// constructor function
function Stores(name, minCustomersEachHour, maxCustomersEachHour, averageCookiesPerCustomer){
  this.name = name;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.customersEachHour =[];
  this.cookiesSoldEachHour =[];
  this.totalCookiesSold =0;
  allStores.push(this);
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
    var totalCookiesSold = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
  
    this.cookiesSoldEachHour.push(totalCookiesSold);
    this.dailyCookiesSold =+ totalCookiesSold;
  }
};

Stores.prototype.render = function(){
  this.calCookiesSoldEachHour();
  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    this.totalCookiesSold += this.cookiesSoldEachHour[i];
  }
};

Stores.prototype.render = function(){
  this.dailyCookiesSold();
  var parentElement =document.getElementById('table');
  var tableRow =document.createElement('tr');
  var tableHeader =document.createElement('th');
  tableHeader.textContent =this.name;
  tableRow.appendChild(tableHeader);
  
  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesSoldEachHour[i];
    tableRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = this.dailyCookiesSold;
  tableRow.appendChild(tableRow);

  parentElement.appendChild(tableRow);
};

var seattle = new Stores('Seattle', 23, 65, 6.3);
var tokyo = new Stores('Tokyo', 3, 24, 1.2);
var dubai = new Stores('Dubai', 11, 38, 3.7);
var paris = new Stores('Paris', 20, 38, 2.3);
var lima = new Stores('Lima', 2, 16, 4.6);

seattle.calCookiesSoldEachHour();
tokyo.calCookiesSoldEachHour();
dubai.calcCookiesSoldEachHour();
paris.calcCookiesSoldEachHour();
lima.calCookiesSoldEachHour();
// console.log('cookies sold each hour', seattle.cookiesSoldEachHour);

// Header hours
function headerRow(){
  var hoursRow =document.createElement('tr');
  var hoursHeader =document.createElement('th');
  hoursRow.appendChild(hoursHeader);
  for (var i =0; i <hours.length; i++) {
    hoursHeader =document.createElement('th');
    hoursHeader.textContent = hours[i];
    hoursRow.appendChild(hoursHeader);
  }
  hoursHeader = document.createElement('th');
  hoursHeader.textContent = 'Daily Total';
  hoursRow.appendChild(hoursHeader);
  parentElement.appendChild(hoursRow);
}
headerRow();

// Footer total
function footerRow(){
  var tableRow =document.createElement('tr');
  var tableHeader =document.createElement('th');
  tableHeader.textContent ='Hourly Total';
  tableRow.appendChild(tableHeader);
}
var overallTotal =0;
for (var i =0; i <hours.length; i++){
  var sum =0;
  for (var j =0; j < allStores.length; j++) {
    sum += allStores[j].cookiesSoldEachHour[i];
}

overallTotal =+ sum; {

var tableData = document.createElement('td');
tableData.textContent = overallTotal;
tableRow.appendChild(tableData);

tableData = document.createElement('td');
tableData.textContent = overallTotal;
tableRow.appendChild(tableData);
parentElement.appendChild(tableRow);
}
footerRow();

// helper function to generate a random number from Math.random
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min +1)) + min;
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();