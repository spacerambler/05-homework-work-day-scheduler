//objects
var dateEl = $('#currentDay')
var block1El = $('#7')
var block2El = $('#8')
var block3El = $('#9')
var block4El = $('#10')
var block5El = $('#11')
var block6El = $('#12')
var block7El = $('#13')
var block8El = $('#14')
var block9El = $('#15')
var block10El = $('#16')
var block11El = $('#17')
var block12El = $('#18')

//Inputting text for the current day in heading
var today = moment().format("dddd, MMMM Do YYYY")

dateEl.text(`${today}`)

//highlight current time
// block1El.attr('class', 'col-10 description present')
// block2El.attr('class', 'col-10 description past')
// block3El.attr('class', 'col-10 description future')

function highlightTime(){
    var time = moment().format('H');
    console.log(time);

    $('textarea').each(function(){
        var thisHour = parseInt($(this).attr('id'));

        if(thisHour < time) {
            $(this).attr('class', 'col-10 description past')
        } else if (thisHour === hour){
            $(this).attr('class', 'col-10 description present')
        } else {
            $(this).attr('class', 'col-10 description future')
        }
        })
    }

highlightTime()

//local storage, save inputs
// var task7am = document.createElement(block1El)
// console.log(task7am)