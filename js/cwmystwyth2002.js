$(document).ready(function(){
  $.ajax({
    url: "http://sharedweb.cs.bangor.ac.uk/~eeu6fc/WeatherDV/cwmystwyth2002.php",
    type: "GET",
    success: function(data) {
      console.log(data);
      var year = [];
      var month = [];
      var tMax = [];
      var tMin = [];
      var airFrost = [];
      var rain = [];
      var sun = [];

      for(var i in data){
        year.push("Year " + data[i].yyyy);
        month.push("Month " + data[i].mm);
        tMax.push(data[i].tMax_degC);
        tMin.push(data[i].tMin_degC);
        airFrost.push(data[i].af_days);
        rain.push(data[i].rain_mm);
        sun.push(data[i].sun_hours);
      }

      var chartdata = {
        labels: month,
        datasets: [
          {
            label: 'Max Temp',
            backgroundColor: 'rgba(200, 200, 200, 0.75)',
            borderColor: 'rgba(200, 200, 200, 0.75)',
            hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
            hoverBorderColor: 'rgba(200, 200, 200, 1)',
            data: tMax
          },
          {
            label: 'Min Temp',
            backgroundColor: 'rgba(200, 400, 200, 0.75)',
            borderColor: 'rgba(200, 200, 400, 0.75)',
            hoverBackgroundColor: 'rgba(400, 200, 200, 1)',
            hoverBorderColor: 'rgba(200, 400, 200, 1)',
            data: tMin

          },
          {
            label: 'Air Frost',
            backgroundColor: 'rgba(300, 200, 200, 0.75)',
            borderColor: 'rgba(300, 200, 200, 0.75)',
            hoverBackgroundColor: 'rgba(300, 200, 200, 1)',
            hoverBorderColor: 'rgba(300, 200, 200, 1)',
            data: airFrost
          },
          {
            label: 'Rainfall',
            backgroundColor: 'rgba(200, 200, 600, 0.75)',
            borderColor: 'rgba(200, 200, 600, 0.75)',
            hoverBackgroundColor: 'rgba(200, 200, 600, 1)',
            hoverBorderColor: 'rgba(200, 200, 600, 1)',
            data: rain
          },
          {
            label: 'Sunshine',
            backgroundColor: 'rgba(300, 200, 600, 0.75)',
            borderColor: 'rgba(300, 200, 600, 0.75)',
            hoverBackgroundColor: 'rgba(300, 200, 600, 1)',
            hoverBorderColor: 'rgba(300, 200, 600, 1)',
            data: sun
          }
        ]
      };

      var ctx = $("#cwmCanvas");

      var barGraph = new Chart(ctx, {
        type: 'horizontalBar',
        data: chartdata
      });
    },
    error: function(data) {
      console.log(data);
    }
  });
});
