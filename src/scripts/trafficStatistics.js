
(async function () {
  const data = [
    { classOfCrash: "Fatal", count: 587 },
    { classOfCrash: "Non-fatal", count: 10445 },
    { classOfCrash: "Unharmed", count: 21272 },
  ];

  new Chart($("#trafficStatistics"), {
    type: "pie",
    data: {
      labels: data.map((row) => row.classOfCrash),
      datasets: [
        {
          label: "Number of victims",
          data: data.map((row) => row.count),
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Types of Traffic-related Injuries in 2022",
          font: {
            family: "Fira Sans",
            size: 25,
          },
          color: '#FFF'
        },
        legend: {
          labels: {
            font: {
              family: "Fira Sans",
              size: 16,
            },
          },
        },
      },
    },
  });
})();
