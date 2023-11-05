(async function () {
  const data = [
    { speed: "25 MPH", control: 0 },
    { speed: "40 MPH", control: 10 },
    { speed: "50 MPH", control: 30 },
    { speed: "60 MPH", control: 35 },
    { speed: "70 MPH", control: 50 },
    { speed: "75 MPH", control: 65 },
    { speed: "80 MPH", control: 75 },
    { speed: "90 MPH", control: 80 },
    { speed: "100 MPH", control: 90 },
    { speed: "105 MPH", control: 95 },
  ];
  
  const color = ["#F27C85"]


  new Chart($("#speedControl"), {
    type: "line",
    data: {
      labels: data.map((row) => row.speed),
      datasets: [
        {
          label: "Danger Level",
          labels: "Likeihood of losing control",
          data: data.map((row) => row.control),
          backgroundColor: color,
          borderColor: color
        },
      ],
    },
    options: {
      plugins: {
        subtitle: {
          display: true,
          text: "Data is not representative of any factual study. For visual representation only.",
          position: "bottom",
          font: {
            family: 'Nunito'
          }
        },
        legend: {
          labels: {
            font: {
              family: "Nunito",
              size: 16,
            },
          },
        },
      },
    },
  });
})();
