
var chartData;   // The data used to draw the chart
var chartLibraryLoaded = false;   // can't draw until chart library is loaded and we have data.

// Request to server; this invokes the /all route in /routes/data.js
// done() callback runs once a response is received from server, data is the JSON data the server returns
$.ajax('/data/all').done(function(data){
  chartData = data;  // save the data
  drawChart()   // try to draw chart
})


// Load components needed from chart library. If drawing many types of charts, will need more components. See google's documentation.
google.charts.load('current', {'packages': ['corechart']});
// Set the function to call once the chart library is loaded.
google.charts.setOnLoadCallback(chartsLoaded);

//Called once chart library loaded.
function chartsLoaded() {
  chartLibraryLoaded = true;   // Global var which can be checked before attempting to draw chart
  drawChart()   // try to draw chart
}

function drawChart() {

// Can only draw chart if there is data and the chart library is loaded.
  if (chartData && chartLibraryLoaded) {

    // Set up datatable columns
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'age');
    data.addColumn('number', 'cuteness');

    // loop over chartData objects, convert to array, add to DataTable
    chartData.forEach(function(cat) {
      data.addRow([ cat.age, cat.cuteness]);
    } );

    // configure options (which are optional)
    // see documentation
    var options = {
      title: 'Cat chart',
      hAxis: {title: 'Age'},
      vAxis: {title: 'Cuteness'},
      legend: 'none'
    }

    // Where to draw the chart?
    var chart_div = document.getElementById('chart_div');
    // make chart - specify what type - see documentation for types available
    var chart = new google.visualization.ScatterChart(chart_div)

    //and draw 
    chart.draw(data, options);

  }

}
