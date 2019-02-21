// Based on the class example

var canvas = document.getElementById('bridge-chart')
console.log(canvas)
var ctx = canvas.getContext('2d')

chart = new Chart(ctx, {
  type: 'bar',
  data:  {
    labels: ["Verrazano-Narrows", "Golden Gate", "Mackinac", "George Washington", "Tacoma Narrows"],
    datasets: [{
      label: 'Length',
      data: [1298.4, 1280.2, 1158.0, 1067.0, 853.4],
      backgroundColor: ['gold', 'orange', 'gold', 'orange', 'gold']
    }]
  }, options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
	}
      }]
    }
  }
})