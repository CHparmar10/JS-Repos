// Dates

let  myDates = new Date();

console.log(myDates);                // 2024-09-26T10:14:46.533Z
console.log(myDates.toString());     // Thu Sep 26 2024 10:14:46 GMT+0000 (Coordinated Universal Time)
console.log(myDates.toDateString()); // Thu Sep 26 2024
console.log(myDates.toISOString());  // 2024-09-26T10:15:43.832Z
console.log(myDates.toJSON());       // 2024-09-26T10:16:22.700Z
console.log(myDates.toLocaleDateString()); // 9/26/2024
console.log(myDates.toLocaleString());     // 9/26/2024, 10:17:16 AM
console.log(myDates.toTimeString());       // 10:17:45 GMT+0000 (Coordinated Universal Time)
console.log(myDates.toUTCString());        // Thu, 26 Sep 2024 10:18:23 GMT

console.log(typeof myDates);              // object

let mycreateDate = new Date(2024,0,20);
console.log(mycreateDate.toLocaleString());


// Time Stamp

let myTimestamp =  Date.now();
console.log(myTimestamp);
console.log(mycreateDate.getTime());
console.log(Math.floor(myTimestamp / 1000));