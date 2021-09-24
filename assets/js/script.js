
var rightNow = moment().format("H")
var saveIcon = $('i')
var textArea = $('textarea')
var uInput = []
//adds a click listener for all of the saveIcon elements
saveIcon.on('click', pushStorage)

textArea.each(function(i){
    if (rightNow > i+9) {$(this).addClass('past')}
    if (rightNow == i+9) {$(this).addClass('present')}
    if (rightNow < i+9) {$(this).addClass('future')}
})

function pushStorage() {
    $(this).parent().siblings('textarea').each(function(i){
        uInput[i] = $(this).val()
        localStorage.setItem('userInput',JSON.stringify(uInput))
    })
}

$(document).ready(function () {
    var getCheck = JSON.parse(localStorage.getItem('userInput'))
    if (!getCheck) {
        console.log('No data for this site stored on local storage.')
        return
    } else {
        for(i=0;i<getCheck.length;i++){
        //getCheck.each(function(i){ //I don't understand why this doesn't work
            textArea[i].value = getCheck[i]
        } 
    }

})