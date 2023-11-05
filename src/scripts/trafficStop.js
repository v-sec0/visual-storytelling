import { Chart } from "../../node_modules/chart.js/auto";

(async function () {
  const data = [
    { citation: "Speeding", count: 152344 },
    { citation: "No Seat Belt", count: 39061 },
    { citation: "Tag Violation", count: 19482 },
    { citation: "Driving Suspended", count: 17542 },
    { citation: "No Insurance", count: 17051 },
  ];

  new Chart($("#trafficStop"), {
    type: "pie",
    data: {
      labels: data.map((row) => row.citation),
      datasets: [
        {
          label: "Number of citations",
          data: data.map((row) => row.count),
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
            family: "Fira Sans",
            size: 13,
          },
          color: '#FFF',
        },
      },
    },
  });
})();
