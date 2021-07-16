function myFunction() {
  document.getElementById("demo").innerHTML = Date();
}

//Calculates the total score of student in student table and then displays average
function myScores() {
  var table = document.getElementById("student");
  var math = parseInt(document.getElementById("math").getElementsByTagName("td")[1].innerHTML);
  var english = parseInt(document.getElementById("english").getElementsByTagName("td")[1].innerHTML);
  var science = parseInt(document.getElementById("science").getElementsByTagName("td")[1].innerHTML);
  var art = parseInt(document.getElementById("art").getElementsByTagName("td")[1].innerHTML);
  
  var total = (math+english+science+art)/4;
  var row = table.insertRow(5);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
	
  cell1.innerHTML = "Total";
  cell2.innerHTML = total;
}
