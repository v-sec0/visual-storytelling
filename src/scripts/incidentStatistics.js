
(async function () {
  const data = [
    { causeOfCrash: "Unseen Object", count: 2765 },
    { causeOfCrash: "Failure to yield", count: 2286 },
    { causeOfCrash: "Following too closely", count: 1858 },
    { causeOfCrash: "Improper Lane Change/Usage", count: 1794 },
    { causeOfCrash: "Over the speed limit", count: 1608 },
  ];

  const colors = [ "#9E9780", "#F2DFA0", "#F27C85", "#A0F2B3", "#A0ABF2"];

  new Chart($("#incidentStatistics"), {
    type: "doughnut",
    data: {
      labels: data.map((row) => row.causeOfCrash),
      datasets: [
        {
          label: "Number of incidents",
          data: data.map((row) => row.count),
          backgroundColor: colors,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true, 
          text: 'Top 5 causes of traffic incidents in 2022',
          position: 'bottom',
          font: {
            size: 16,
            family: "Nunito",
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
