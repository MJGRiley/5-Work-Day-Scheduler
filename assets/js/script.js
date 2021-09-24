var rightNow = moment().format('H')
var saveIcon = $('i')
var textArea = $('textarea')
var uInput = []
// gets the date from momentjs
var toDay = moment().format('dddd [the] Do [of] MMMM')
//displays the date
$('#currentDay').text(toDay)
//adds a click listener for all of the saveIcon elements
saveIcon.on('click', pushStorage)
//changes the color of the textarea based on time +9 because the chart starts at 9am
textArea.each(function(i){
    if (rightNow > i+9) {$(this).addClass('past')}
    if (rightNow == i+9) {$(this).addClass('present')}
    if (rightNow < i+9) {$(this).addClass('future')}
})
//this function is called when one of the save icons is clicked
function pushStorage() {
    //selects all textarea $(this) currently points at the saveIcon
    $(this).parent().siblings('textarea').each(function(i){
        // S(this) changes to the textareas and puts the value of each into the user input array
        uInput[i] = $(this).val()
        //sends the user input array to local storage after stringifying it
        localStorage.setItem('userInput',JSON.stringify(uInput))
    })
}

$(document).ready(function () {
    //checks for any data currently in local storage
    var getCheck = JSON.parse(localStorage.getItem('userInput'))
    if (!getCheck) { //if getCheck comes back null, kick it out of this function
        console.log('No data for this site stored on local storage.')
        return
    } else {
        for(i=0;i<getCheck.length;i++){
        //getCheck.each(function(i){     //I don't understand why this doesn't work
        //is it because getCheck is an array of strings and not an array of DOM elements?
            textArea[i].value = getCheck[i]
        } 
    }
})