console.log("page loaded")

function logArgs(args) {
  var a = 1
  console.log(args)
}

//var functionString = "#thisisanid"
//
//var consoleLogExample = $("#thisisanid")
//
//var formattedExample = $("#thisisanid")

var consoleLogExample = logArgs

var consoleLogBox = $("#thisisanid")
consoleLogBox.html(consoleLogExample)

//formattedExample.text(logArgs)
//
//consoleLogExample.html(formattedExample)
//
console.log(logArgs)