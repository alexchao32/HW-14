// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");



// Select the button
var button = d3.select("#filter-btn");

// Provide action once the button is pressed
button.on("click", function() {

  // Select the datetime input from the form
  var inputElement = d3.select("#datetime");
  console.log(inputElement);
  // Get the value property of the datetime
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  // Filter the data by the input date
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
  console.log(filteredData)

  // Add the filtered by date data to the table
  filteredData.forEach(function(alien) {
    //console.log(alien);
    var row = tbody.append("tr");
    Object.entries(alien).forEach(function([key, value]) {
        //console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value);
    });
    });

});
