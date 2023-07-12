 // Dados do gráfico
 var data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
  datasets: [
    {
      label: 'Vendas',
      data: [500, 700, 900, 400, 600],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ]
};''

// Configurações do gráfico
var options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

// Criar o gráfico de área
var ctx = document.getElementById('grafico_area').getContext('2d');
var areaChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});
