var elementsList = $("#elements-list")
var a = ["#ff3d0c", "#fc7814", "#ff9d00", "#ffe20c", "#e2ff0c", "#81ff0c", "#29ff0c", "#0cff89", "#0cfff6", "#0ccaff", "#0c69ff", "#0c10ff", "#590cff", "#9e0cff", "#da0cff", "#ff0cb6", "#ff0c6d", "#fc1414", "#ff3d0c", "#fc7814", "#ff9d00", "#ffe20c", "#e2ff0c", "#81ff0c", "#29ff0c", "#0cff89", "#0cfff6", "#0ccaff", "#0c69ff", "#0c10ff", "#590cff", "#9e0cff", "#da0cff", "#ff0cb6", "#ff0c6d", "#fc1414"]


for (i=0 i<5, i++) {
a.forEach(function(color){
  $("#element").clone().css({background: color}).appendTo(elementsList)
})
}