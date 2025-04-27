const ctx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Service Provider', 'Service Delivery Process', 'Facilities'],
    datasets: [{
      label: 'Rating',
      data: [5, 2, 3],
      backgroundColor: [
        '#4b6cb7',
        '#f7b42c',
        '#f45b69'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 5
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});
