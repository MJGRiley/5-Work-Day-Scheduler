
var rightNow = moment().format("H")
var saveIcon = $('i')
var textArea = $('textarea')

console.log(saveIcon)
console.log(textArea)

saveIcon.each(function(i){
    saveIcon[i]
})

textArea.each(function(i){
    if (rightNow > i+9) {$(this).addClass('past')}
    if (rightNow == i+9) {$(this).addClass('present')}
    if (rightNow < i+9) {$(this).addClass('future')}
})
//adds event listener to each saveIcon

function storeLocally () {
   // localStorage.setItem('hour'+ hour, JSON.stringify(saveIcon[*]))
}