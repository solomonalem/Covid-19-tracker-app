google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Cases"],
    ["", 300],
    ["", 460],
    ["", 500],
    ["", 490],
    ["", 750],
    ["", 700],
    ["", 880],
    ["", 1120],
    ["", 1040],
    ["", 940],
    ["", 690],
    ["", 740],
    ["", 440],
    ["", 340],
    ["", 240],
  ]);

  var options = {
    title: "",
    curveType: "function",
    legend: { position: "bottom" },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}
