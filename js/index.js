// Using Google Charts
// Label is overlayed HTML.
// All parts are configurable.


google.load("visualization", "1", {packages:["corechart"]});

google.setOnLoadCallback(drawChart);

function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Content', 'Size'],
		['Photos',     15],
		['Videos',      35],
		['Free Space',  50]
	]);

	var options = {
		title: "",
		pieHole: 0.7
    
    ,
		pieSliceBorderColor: "none",
     colors: ['#f1a828', '#a4103f', '#16226c' ],
		legend: {
			position: "none"	
		},
		pieSliceText: "none",
		tooltip: {
			trigger: "none"
		}
	};

	var chart = new google.visualization
			.PieChart(document.getElementById('chart'));
        
	chart.draw(data, options);
  
}