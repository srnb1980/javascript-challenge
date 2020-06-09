// from data.js
//var tableData = data;

var tbody = d3.select("tbody");

console.log(tbody)

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");

// Getting a reference to the input elements on the page
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#CityName");
var inputState = d3.select("#StateName");
var inputCountry = d3.select("#CountryName");
var inputShape = d3.select("#ShapeName");

// This function is triggered when the button is clicked

button.on("click", handlefilter);

//This function will add the table rows and data based off filter condition

function handlefilter(event)
{
    console.log("The filter button is clicked");
    var InputDateValue= inputDate.property("value");
    var InputCityValue= inputCity.property("value");
    var InputStateValue = inputState.property("value");
    var InputCountryValue = inputCountry.property("value");
    var InputShapeValue = inputShape.property("value");
 //   d3.selectAll("td").remove();
    tbody.selectAll("tr").remove();
    console.log(InputDateValue,InputCityValue,InputStateValue,InputCountryValue,InputShapeValue);
    data.forEach(function(ufo)
    {
         if ( InputDateValue === ufo.datetime || InputDateValue === "" )
        { 
            if ( InputCityValue.toUpperCase() === ufo.city.toUpperCase() || InputCityValue === "" )
            {
                if ( InputStateValue.toUpperCase() === ufo.state.toUpperCase() || InputStateValue === "")
                {
                    if ( InputCountryValue.toUpperCase() === ufo.country.toUpperCase() || InputCountryValue === "")
                    {
                        if ( InputShapeValue.toUpperCase() === ufo.shape.toUpperCase() || InputShapeValue === "")
                        {
                            var row = tbody.append("tr");
                            console.log(ufo);
                            Object.entries(ufo).forEach(function([key,value])
                            {
                                console.log(key, value);
                                row.append("td").text(value);
                            });
                        }
                    }
                }
            }
        }
    });
}

// this inline function will display the tables rows and data when the html file is opened for first time

data.forEach(function(ufo)
{
    var row = tbody.append("tr")
    console.log(ufo)
    Object.entries(ufo).forEach(function([key,value])
    {
    console.log(key, value);
    row.append("td").text(value);
    });
});
