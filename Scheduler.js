
var currentDay= document.getElementById("currentDay");
var dayTime =moment().format('MMMM Do YYYY');
var currentHour=moment().format('k'); // this is only for our condition 

currentDay.textContent= dayTime;

var timeBlockHour = document.querySelector('#9')
timeBlockHour = timeBlockHour.attributes('id')
jqueryTimeBlockHour = $('#9').attr('id')
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
if (currentHour> timeBlockHour){}

/* If the current hour is greater than that timeblock hour (x),
then that timeblock should be grey (past hours),
else IF that time block === current hour,
then color should be red (present hour),
else green (future hour)
*/


//WHEN I click into a time block-input area 

//THEN I can enter an event-input text-going to add text area dynamically



//WHEN I click the save button for that time block- event handler added to save button 

//THEN the text for that event is saved in local storage- plug in save into localStorage 

//WHEN I refresh the page- button so no prevent default here 
//THEN the saved events persist-input of saved events will be sent to 
//local Storage & show to the User -> 
//turn it into a String then back into an object to show User 
