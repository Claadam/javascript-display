console.log("page loaded")

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

//var functionString = "#thisisanid"
//
//var consoleLogExample = $("#thisisanid")
//
//var formattedExample = $("#thisisanid")



//formattedExample.text(logArgs)
//
//consoleLogExample.html(formattedExample)
//
console.log(logArgs)