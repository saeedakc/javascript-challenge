// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Loop through data
data.forEach(function(dataSort) {
  console.log(dataSort);
});

data.forEach((dataSort) => {
    var row = tbody.append("tr");
    Object.entries(dataSort).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Level 2
// there was an attempt

function myFunction() {
  var input, filter, table, tr, td, i, txtValue, tbody;
  input = document.getElementById("datetime");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName(tbody);
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}