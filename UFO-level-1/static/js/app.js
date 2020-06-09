// from data.js
//var tableData = data;

var tbody = d3.select("tbody");

console.log(tbody)

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#datetime");

// This function is triggered when the button is clicked

button.on("click", handlefilter);

//This function will add the table rows and data based off filter condition

function handlefilter(event)
{
    console.log("The filter button is clicked");
//    var InputText=d3.event.target.value;
    var InputText= inputField.property("value");
//    d3.selectAll("td").remove();
    tbody.selectAll("tr").remove();
    console.log(InputText);
    data.forEach(function(ufo)
    {
        // console.log(ufo)
        //console.log(ufo);
        //console.log(ufo.datetime);
        console.log(InputText);
        if ( ufo.datetime === InputText || InputText === "" ) 
        {
            var row = tbody.append("tr")
            console.log(ufo)
            Object.entries(ufo).forEach(function([key,value])
            {
            console.log(key, value);
            row.append("td").text(value);
            })
        }
    })

}

// this inline function will display the tables rows and data when the html file is opened for first time

data.forEach(function(ufo)
{
    // console.log(ufo)
    console.log(ufo);
    console.log(ufo.datetime);
    var row = tbody.append("tr")
    console.log(ufo)
    Object.entries(ufo).forEach(function([key,value])
    {
    console.log(key, value);
    row.append("td").text(value);
    })
})






