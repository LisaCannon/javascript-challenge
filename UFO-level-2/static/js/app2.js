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

const descrList = ["datetime","city","state","country","shape"];

//Function to create a list of only unique values in an array.
function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

//loop through the variables to find the unique values and then list the unique values in a drop down list 
//for the user to select from for filtering.
for (i = 0; i < descrList.length; i ++ ){
  var varList = UFOentry.map(v => v[descrList[i]]);
  var varList = varList.filter( onlyUnique ).sort();
  console.log(varList);
  var varData = document.getElementById(descrList[i]);
  varList.forEach(function(varElement) {
    var varOption = document.createElement("option");
    varOption.text = varElement;
    varOption.value = varElement;
    varData.add(varOption);
  });
  if (descrList[i]=== "datetime") {var datetimeList = varList;}
  else if (descrList[i]=== "city") {var cityList = varList;}
  else if (descrList[i]=== "state") {var stateList = varList;}
  else if (descrList[i]=== "country") {var countryList = varList;}
  else if (descrList[i]=== "shape") {var shapeList = varList;}
}

//uptdate table with selections
// var button = d3.select("#filter-btn");

//after selections are entered, clicking the filter button filters the data in the table
d3.select("#filter-btn").on("click", function() {
  var filterUFO = UFOentry;
  for (i = 0; i < descrList.length;i++){
    var inputVal = d3.select("#"+descrList[i]).property("value");
    console.log(inputVal);
    //if no value is selected for an input field, no filter is added
    if (inputVal !== "") {
      filterUFO = filterUFO.filter(UFO => UFO[descrList[i]] === inputVal);
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


