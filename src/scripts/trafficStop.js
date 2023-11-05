
(async function () {
  const data = [
    { citation: "Speeding", count: 152344 },
    { citation: "No Seat Belt", count: 39061 },
    { citation: "Tag Violation", count: 19482 },
    { citation: "Driving Suspended", count: 17542 },
    { citation: "No Insurance", count: 17051 },
  ];

  const colors = ["#F27C85", "#F2DFA0", "#A0ABF2", "#A0F2B3", "#9E9780"];

  new Chart($("#trafficStop"), {
    type: "pie",
    data: {
      labels: data.map((row) => row.citation),
      datasets: [
        {
          label: "Number of citations",
          data: data.map((row) => row.count),
          backgroundColor: colors,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Top 5 Citations Issued for 2022",
          position: 'bottom',
          font: {
            family: "Nunito",
            size: 16,
          },
          color: '#FFF',
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
