//VARIABLE DECLARATIONS 
var dayTime =moment().format('MMMM Do YYYY');
var timeBlockHour = document.querySelector('time-block');
var currentHour = moment().format('k'); // this is only for our condition 
var row = document.getElementsByClassName('row');
var saveSchedule = document.getElementsByTagName('textarea');
var saveButton = document.getElementById('saveBtn');
var past= document.getEelementbyClassName('past')
// var present;
// var future;
var currentDay= document.getElementById("currentDay");
 currentDay.textContent= dayTime;
var row=document.getElementsByClassName('row');
 
// past 

if (currentHour > timeBlockHour) {
   
//    past.TextContent= 

    // timeBlockHour.style.(
    // 'style' ,'background-color:gray');
   
 
};
//present 
// else if (currentHour==timeBlockHour) {show red}
// //future
// /else {show green}

    
// LOCAL STORAGE 
//THEN the text for that event is saved in local storage- plug in save into localStorage 

//WHEN I refresh the page- button so: prevent default here 
//THEN the saved events persist-input of saved events will be sent to 
//local Storage & show to the User -> 
//turn it into a String then back into an object to show User



//EVENT Handlers 
//WHEN I click the save button for that time block- event handler added to save button 
// save button
// saveBtn.addEventListener('click', function(e){
//     event.preventDefault();
//     saveSchedule.value='';
// });

// 
// var noteScheduling= document.querySelectorAll('description');

// var =document.getElementsByClassName('row');

// jqueryTimeBlockHour = $('#9').attr('id')
//THEN each time block is color-coded to indicate whether it is in the past, present, or future

// noteScheduling.textContent.value('');
// FUNCTIONS 



// if() {
//     timeblock.textContent.past=('row')
// }


/* If the current hour is greater than that timeblock hour (x),
{then that timeblock should be grey (past hours)},
else IF {that time block === current hour,
then color should be red (present hour)},
else green {(future hour)}
*/






 
