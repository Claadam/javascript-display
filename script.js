console.log("page loaded")

function logArgs(args) {
  var a = 1
  console.log(args)
}

var functionString = "how do I get the function as a string?"

var consoleLogExample = $("how do I get the element where I want to put the example?")

var formattedExample = $("#thisisanid")

formattedExample.text(logArgs())

consoleLogExample.html(formattedExample)
