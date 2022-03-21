function callMe() {
  var valLength = document.getElementById("length").value;
  var valWidth = document.getElementById("width").value;
  var area = valLength * valWidth;
  var perimeter = +valLength + +valWidth;
  console.log(perimeter);
  document.getElementById("output").innerHTML =
    "<p>Length is " +
    valLength +
    " & Width is : " +
    valWidth +
    ". So, Area of Rectangle is : " +
    area +
    " <br>Length is " +
    valLength +
    " & Width is : " +
    valWidth +
    ". So, Perimeter of Rectangle is : " +
   2 * perimeter +
    "</p>";
}
