//objects
var dateEl = $('#currentDay')
var timeBlockEl = $('#7')

//Inputting text for the current day in heading
var now = moment().format("dddd, MMMM Do YYYY")

dateEl.text(`${now}`)

//highlight current time
// timeBlockEl.attr('class', 'present')

function highlightTime(){
    //if current time === id # then add class of present
    //if current time < id then add class of past
    //else class of present

}

//local storage, save inputs