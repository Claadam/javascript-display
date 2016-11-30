function logArgs(args) {
  var a = 1
  console.log(args)
}

var consoleLogString = logArgs.toString()
var consoleLogBox = $("<pre>")
consoleLogBox.text(consoleLogString)
$("#firstbox").append(consoleLogBox)

function onePlus(val) {
  return val + 1
}

var onePlusString = onePlus.toString()
var onePlusBox = $("<pre>")
onePlusBox.text(onePlusString)
$("#secondbox").append(onePlusBox)

function rand() {
 return Math.floor(Math.random()*10) 
}

function timesTwo(rand) {
  return rand()*2
}

var timesTwoString = rand.toString() + "\n" + timesTwo.toString()
var timesTwoBox = $("<pre>")
timesTwoBox.text(timesTwoString)
$("#thirdbox").append(timesTwoBox)

function findjQuery() {
  var ID = $("#exampleID")
  var Class = $(".exampleClass")
}

var jQueryString = findjQuery.toString()
var jQueryBox = $("<pre>")
jQueryBox.text(jQueryString)
$("#fourthbox").append(jQueryBox)

function storeData () {
  var data = $("#exampleTextBox")
  storeValue (example, data)
}

var firebaseString = storeData.toString()
var firebaseBox = $("<pre>")
firebaseBox.text(firebaseString)
$("#fifthbox").append(firebaseBox)

function centerDiv () {
 $("sampleDiv").html("<div class='col md-5'></div> <div class="col md-2">")
}

function animation () {
  $("#sampleImage").animate({left: "+=32"}, 15)
  $("#sampleImage").animate({top: "+=315"}, 1500)
  $("#sampleImage").animate({height: "+=50"}, 150)
}

var animationString = animation.toString()
var animationBox = $("<pre>")
animationBox.text(animationString)
$("#seventhbox").append(animationBox)
