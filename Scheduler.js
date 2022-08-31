//VARIABLE DECLARATIONS
var dayTime = moment().format("MMMM Do YYYY"); //Aug 30 2022 
var timeBlockHour = document.querySelector("timeblock");//container 
var row = document.querySelectorAll(".row");
// console.log(row);
var description = document.getElementsByClassName("description");
var saveButton = document.getElementById("saveBtn");
var currentDay = document.getElementById("currentDay");
currentDay.textContent = dayTime;
var hour= document.getElementById("9");
var currentHour = moment().format("HH");
currentHour.textContent = timeBlockHour;

//// row selection 
for (let i = 0; i < row.length; i++) {
    const element = row[i];
   var hour = element.getElementById(`${i}`)

}
// timeid 

 if (currentHour>hour) {

     var past = document.getElementsByClassName("past");
    row.textContent=past;

} else if (currentHour==hour) {

 var present = document.getElementsByClassName("present");
 present.setAttribute('class', 'present');
 row.textContent=present;
}
 
 else {
    var future = document.getElementsByClassName("future");
    future.setAttribute('class', 'future');
    row.textContent=future;

 };
 
 

 function inputEvent( ) {




 }

// function saveIt(e){
// event.preventDefault();
// saveButton.paren

// }


 
// saveSchedule.addEventListener('click', scheduler)
//  event.preventDefault();
//  saveSchedule.value='';


// saveEvent(e){ 
//     saveSchedule.value${{}}




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
// 
// var =document.getElementsByClassName('row');

// jqueryTimeBlockHour = $('#9').attr('id')
//THEN each time block is color-coded to indicate whether it is in the past, present, or future

// noteScheduling.textContent.value('');
// FUNCTIONS
// if() {
 