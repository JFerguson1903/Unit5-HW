var DateTime = luxon.DateTime;
var currentDay = luxon.DateTime.local()
    //.toISO()
    //.fromISO();
console.log(currentDay);
console.log(currentDay.hour);