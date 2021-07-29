//objects
var dateEl = $('#currentDay')

//Inputting text for the current day in heading
var now = moment().format("dddd, MMMM Do YYYY")

dateEl.text(`${now}`)