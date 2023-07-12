// Dados para o gráfico de barras
var data = {
    labels: ['PARDA', 'PRETA', 'BRANCA'],
    datasets: [{
      label: 'Vendas',
      data: [120, 220, 180],
      backgroundColor: 'rgba(54, 162, 235, 0.5)', // Cor das barras
      borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda das barras
      borderWidth: 1 // Largura da borda das barras
    }]
  };
  
  // Configurações do gráfico
  var options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  // Criação do gráfico de barras
  var ctx = document.getElementById('grafico').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });