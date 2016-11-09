console.log("page loaded")

function logArgs(args) {
  var a = 1
  console.log(args)
}

var consoleLogString = logArgs.toString()
var consoleLogBox = $("<pre>")
consoleLogBox.text(consoleLogString)
$("#firstbox").append(consoleLogBox)

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