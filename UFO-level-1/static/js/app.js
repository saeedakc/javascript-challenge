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
