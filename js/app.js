'use strict';

function Location(name,)





// get parent element from DOM
  // create element
  // apply text 
  // append it

// this is my global variable
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm'];

// // Seattle location
// var seattle = {
//   name: 'seattleStore',
//   minCustomersEachHour: 23,
//   maxCustomersEachHour: 65,
//   averageCookiesSoldPerCustomer: 6.3,
//   customersEachHour: [],
//   cookiesSoldEachHour: [],
//   totalCookiesForTheDay: 0,

//   // calculate customers each hour and populate the array
//   calcCustomerEachHour: function(){
    
//     for (var i=0; i<hours.length; i++){
//       var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
//       this.maxCustomersEachHour.push(customersThisHours);
//     }
  
//   // this loop will multiply the customers by the average cookies each customer buys 
//     for (var i=0; i<hours.length; i++) {
//       var cookiesSoldEachHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldEachHour);
//       this.cookiesSoldEachHour.push(cookiesSoldEachHour);
//       this.totalCookiesForTheDay = this.totalCookiesForTheDay + cookiesSoldEachHour;
//     }
//   },
  
//   // this will render the total cookies for the day to the DOM, the name of the store and the the cookies sold each hour
//   render: function(){
//     seattle.calcCustomersEachHour();
//     seattle.calcCookiesSoldEachHour();
//     var seattleElement = document.getElementById('seattle');
//     var listItem = document.createElement('li');
//     listItem.textContent = this.name;
//     seattleElement.appendChild(listItem);

//       for(var i=0;i<hours.length; i++){
//       listItem = document.createElement('li');
//       listItem.textContent = this.cookiesSoldEachHour[i];
//       seattleElement.appendChild(listItem);
//     }
//       listItem = document.createElement('li');
//       listItem.textContent = this.totalCookiesForTheDay;
//       seattleElement.appendChild(listItem);
//   }
// }
// seattle.render();

// // I got this from MDN Math.random
// function getRandomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; 
//   //The maximum and minimum are inclusive 
// }

// // this is my global variable
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm'];

// // Tokyo location
// var tokyo = {
//   name: 'tokyoStore',
//   minCustomersEachHour: 3,
//   maxCustomersEachHour: 24,
//   averageCookiesSoldPerCustomer: 1.2,
//   customersEachHour: [],
//   cookiesSoldEachHour: [],
//   totalCookiesForTheDay: 0,

//   // calculate customers each hour and populate the array
//   calcCustomerEachHour: function(){
    
//     for (var i=0; i<hours.length; i++){
//       var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
//       this.maxCustomersEachHour.push(customersThisHours);
//     }
  
//   // this loop will multiply the customers by the average cookies each customer buys 
//     for (var i=0; i<hours.length; i++) {
//       var cookiesSoldEachHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldEachHour);
//       this.cookiesSoldEachHour.push(cookiesSoldEachHour);
//       this.totalCookiesForTheDay = this.totalCookiesForTheDay + cookiesSoldEachHour;
//     }
//   },
  
//   // this will render the total cookies for the day to the DOM, the name of the store and the the cookies sold each hour
//   render: function(){
//     tokyo.calcCustomersEachHour();
//     tokyo.calcCookiesSoldEachHour();
//     var tokyoElement = document.getElementById('seattle');
//     var listItem = document.createElement('li');
//     listItem.textContent = this.name;
//     tokyoElement.appendChild(listItem);

//       for(var i=0;i<hours.length; i++){
//       listItem = document.createElement('li');
//       listItem.textContent = this.cookiesSoldEachHour[i];
//       tokyoElement.appendChild(listItem);
//     }
//       listItem = document.createElement('li');
//       listItem.textContent = this.totalCookiesForTheDay;
//       tokyoElement.appendChild(listItem);
//   }
// }
// tokyo.render();

// // I got this from MDN Math.random
// function getRandomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; 
//   //The maximum and minimum are inclusive 
// }

// // this is my global variable
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm'];

// //  Dubai location
// var dubai = {
//   name: 'dubaiStore',
//   minCustomersEachHour: 11,
//   maxCustomersEachHour: 38,
//   averageCookiesSoldPerCustomer: 3.7,
//   customersEachHour: [],
//   cookiesSoldEachHour: [],
//   totalCookiesForTheDay: 0,

//   // calculate customers each hour and populate the array
//   calcCustomerEachHour: function(){
    
//     for (var i=0; i<hours.length; i++){
//       var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
//       this.maxCustomersEachHour.push(customersThisHours);
//     }
  
//   // this loop will multiply the customers by the average cookies each customer buys 
//     for (var i=0; i<hours.length; i++) {
//       var cookiesSoldEachHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldEachHour);
//       this.cookiesSoldEachHour.push(cookiesSoldEachHour);
//       this.totalCookiesForTheDay = this.totalCookiesForTheDay + cookiesSoldEachHour;
//     }
//   },
  
//   // this will render the total cookies for the day to the DOM, the name of the store and the the cookies sold each hour
//   render: function(){
//     dubai.calcCustomersEachHour();
//     duabi.calcCookiesSoldEachHour();
//     var dubaiElement = document.getElementById('seattle');
//     var listItem = document.createElement('li');
//     listItem.textContent = this.name;
//     dubaiElement.appendChild(listItem);

//       for(var i=0;i<hours.length; i++){
//       listItem = document.createElement('li');
//       listItem.textContent = this.cookiesSoldEachHour[i];
//       dubaiElement.appendChild(listItem);
//     }
//       listItem = document.createElement('li');
//       listItem.textContent = this.totalCookiesForTheDay;
//       dubaiElement.appendChild(listItem);
//   }
// }
// dubai.render();

// // I got this from MDN Math.random
// function getRandomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; 
//   //The maximum and minimum are inclusive 
// }

// // this is my global variable
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm'];

// // Paris location
// var paris = {
//   name: 'parisStore',
//   minCustomersEachHour: 20,
//   maxCustomersEachHour: 38,
//   averageCookiesSoldPerCustomer: 2.3,
//   customersEachHour: [],
//   cookiesSoldEachHour: [],
//   totalCookiesForTheDay: 0,

//   // calculate customers each hour and populate the array
//   calcCustomerEachHour: function(){
    
//     for (var i=0; i<hours.length; i++){
//       var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
//       this.maxCustomersEachHour.push(customersThisHours);
//     }
  
//   // this loop will multiply the customers by the average cookies each customer buys 
//     for (var i=0; i<hours.length; i++) {
//       var cookiesSoldEachHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldEachHour);
//       this.cookiesSoldEachHour.push(cookiesSoldEachHour);
//       this.totalCookiesForTheDay = this.totalCookiesForTheDay + cookiesSoldEachHour;
//     }
//   },
  
//   // this will render the total cookies for the day to the DOM, the name of the store and the the cookies sold each hour
//   render: function(){
//     paris.calcCustomersEachHour();
//     paris.calcCookiesSoldEachHour();
//     var parisElement = document.getElementById('seattle');
//     var listItem = document.createElement('li');
//     listItem.textContent = this.name;
//     parisElement.appendChild(listItem);

//       for(var i=0;i<hours.length; i++){
//       listItem = document.createElement('li');
//       listItem.textContent = this.cookiesSoldEachHour[i];
//       parisElement.appendChild(listItem);
//     }
//       listItem = document.createElement('li');
//       listItem.textContent = this.totalCookiesForTheDay;
//       parisElement.appendChild(listItem);
//   }
// }
// paris.render();

// // I got this from MDN Math.random
// function getRandomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; 
//   //The maximum and minimum are inclusive 
// }

// // this is my global variable
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm'];

// // Lima location
// var lima = {
//   name: 'limaStore',
//   minCustomersEachHour: 2,
//   maxCustomersEachHour: 16,
//   averageCookiesSoldPerCustomer: 4.6,
//   customersEachHour: [],
//   cookiesSoldEachHour: [],
//   totalCookiesForTheDay: 0,

//   // calculate customers each hour and populate the array
//   calcCustomerEachHour: function(){
    
//     for (var i=0; i<hours.length; i++){
//       var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
//       this.maxCustomersEachHour.push(customersThisHours);
//     }
  
//   // this loop will multiply the customers by the average cookies each customer buys 
//     for (var i=0; i<hours.length; i++) {
//       var cookiesSoldEachHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldEachHour);
//       this.cookiesSoldEachHour.push(cookiesSoldEachHour);
//       this.totalCookiesForTheDay = this.totalCookiesForTheDay + cookiesSoldEachHour;
//     }
//   },
  
//   // this will render the total cookies for the day to the DOM, the name of the store and the the cookies sold each hour
//   render: function(){
//     lima.calcCustomersEachHour();
//     lima.calcCookiesSoldEachHour();
//     var limaElement = document.getElementById('seattle');
//     var listItem = document.createElement('li');
//     listItem.textContent = this.name;
//     limaElement.appendChild(listItem);

//       for(var i=0;i<hours.length; i++){
//       listItem = document.createElement('li');
//       listItem.textContent = this.cookiesSoldEachHour[i];
//       limaElement.appendChild(listItem);
//     }
//       listItem = document.createElement('li');
//       listItem.textContent = this.totalCookiesForTheDay;
//       limaElement.appendChild(listItem);
//   }
// }
// lima.render();

// // I got this from MDN Math.random
// function getRandomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; 
//   //The maximum and minimum are inclusive 
// }

//   var parentElement =document.getElementById('table');

//   // Location
//   var tableRow = document.createElement('tr');
//   var tableHeader = document.createElement('th');
//   tableHeader.textContent = 'Location';
 
//   for(var i=0; i<array.length; i++){

//   // Min customer
//   tableHeader = document.createElement('th');
//   tableHeader.textContent = 'Min/Cust';
//   tableRow.appendChild(tableHeader);

//   // Max customer
//   tableHeader = document.createElement('th');
//   tableHeader.textContent = 'Max/Cust';
//   tableRow.appendChild(tableHeader);

//   // Avg cookie sale
//   tableHeader = document.createElement('th');
//   tableHeader.textContent = 'Avg Cookie Sale';
//   tableRow.appendChild(tableHeader);


//   parentElement.appendChild(tableRow);
//   }

