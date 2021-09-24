
var rightNow = moment().format("H")
var saveIcon = $('i')
var textArea = $('textarea')
var uInput = []

saveIcon.on('click',pushStorage)

textArea.each(function(i){
    if (rightNow > i+9) {$(this).addClass('past')}
    if (rightNow == i+9) {$(this).addClass('present')}
    if (rightNow < i+9) {$(this).addClass('future')}
})

function pushStorage() {
    $(this).parent().siblings('textarea').each(function(i){
        uInput[i] = $(this).val()
        //add push to local storage here
    })
}

//add check for local storage when page loads "init"