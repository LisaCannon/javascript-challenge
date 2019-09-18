// from data.js
var UFOentry = data;
//begin with all of the data listed in the table
var tbody = d3.select("tbody");
UFOentry.forEach((entry) => {
    var row = tbody.append("tr");
    Object.entries(entry).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//uptdate table with selections
var button = d3.select("#filter-btn");
var descr_list = ["datetime","city","state","country","shape"];
var filterUFO = UFOentry;
//after selections are entered, clicking the filter button filters the data in the table
button.on("click", function() {
  for (i = 0; i < descr_list.length;i++){
    var inputVal = d3.select("#"+descr_list[i]).property("value");
    console.log(inputVal);
    //if no value is selected for an input field, no filter is added
    if (inputVal !== "") {
      filterUFO = filterUFO.filter(UFO => UFO[descr_list[i]] === inputVal);
    } 
  }
  console.log(filterUFO);
 
  //refresh the table with the filtered data
tbody.html("");
  console.log(tbody);
    filterUFO.forEach((filtered) => {
        var row = tbody.append("tr");
        Object.entries(filtered).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  
});


