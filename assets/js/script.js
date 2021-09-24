
var rightNow = moment().format("H")
var saveIcon = $('i')
var textArea = $('textarea')
var uInput = []

saveIcon.each(function(i){
    console.log(i)
    //adds event listener to each saveIcon
    var input = textArea[i]
    console.log(input)
    $(this).click( function(i){//This adds a listener to each saveIcon buttons
        // and I want it to dynamically select the textArea, but it will only 
        // select the first 
        if(!temp){localStorage.setItem('hour'+i,JSON.stringify(textArea.val()))}
    })
})

textArea.each(function(i){
    if (rightNow > i+9) {$(this).addClass('past')}
    if (rightNow == i+9) {$(this).addClass('present')}
    if (rightNow < i+9) {$(this).addClass('future')}
})