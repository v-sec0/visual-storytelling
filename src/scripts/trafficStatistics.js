
(async function () {
  const data = [
    { classOfCrash: "Fatal", count: 587 },
    { classOfCrash: "Non-fatal", count: 10445 },
    { classOfCrash: "Unharmed", count: 21272 },
  ];

  const colors = ["#F27C85", "#F2DFA0", "#A0ABF2", "#A0F2B3", "#9E9780"];

  new Chart($("#trafficStatistics"), {
    type: "pie",
    data: {
      labels: data.map((row) => row.classOfCrash),
      datasets: [
        {
          label: "Number of victims",
          data: data.map((row) => row.count),
          backgroundColor: colors,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Types of Traffic-related Injuries in 2022",
          font: {
            family: "Nunito",
            size: 16,
          },
          color: '#FFF'
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
