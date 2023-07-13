// Dados para o gráfico de barras
var data = {
    labels: ['Estração de Pedra,Argila e Areia', 'Produção florestal-florestas nativas', 'Cultivo de soja',"Atividade de apoio a agricultura","Fabricação de produtos cerâmicos refratários","Produção florestal-florestas plantadas","Criação de bovinos","Fabricação de bovinos e derivados","Fabricação de artefatos de couro não especificado"],
    datasets: [{
      label: 'Setores Econômicos mais frequentemente Envolvidos ',
      data: [139, 125, 102,11,9,4,3,3,1],
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
  var ctx = document.getElementById('grafico1').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 

  /////////////// Grafico 2 //////////////////////
var data = {
    labels: ['Trabalhador volante da agricultura', 'Trabalhador da exploração de Canauba', 'Cortador de Pedras',"Trabalho Agropecuário","Trabalhador da Pecuária","Destroçador de Pedra","Trabalhador da Cultura da cana-açucar","Servente de obras","Outros"],
    datasets: [{
      label: 'Ocupações - Resgatados Naturais da UF',
      data: [122, 107, 77,65,54,31,25,24,141],
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
  var ctx = document.getElementById('grafico2').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 

/////////////// Grafico 3 //////////////////////

var data = {
    labels: ['Trabalhador volante da agricultura', 'Trabalhador da exploração de Canauba', 'Cortador de Pedras',"Trabalho Agropecuário","Trabalhador da Pecuária","Destroçador de Pedra","Trabalhador da Cultura da cana-açucar","Servente de obras","Outros"],
    datasets: [{
      label: 'Ocupações - Resgatados Residentes na UF',
      data: [105,97, 80,68,39,31,26,24,120],
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
  var ctx = document.getElementById('grafico3').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 

/////////////// Grafico 4 //////////////////////

var data = {
    labels: ['PARDA', 'PRETA', 'BRANCA'],
    datasets: [{
      label: 'Raça - Resgatados Naturais da UF',
      data: [488, 79, 76],
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
  var ctx = document.getElementById('grafico4').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 

/////////////// Grafico 5 //////////////////////

var data = {
    labels: ['PARDA', 'PRETA', 'BRANCA'],
    datasets: [{
      label: 'Raça - Resgatados Residentes na UF',
      data: [456, 74, 57],
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
  var ctx = document.getElementById('grafico5').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 

/////////////// Grafico 6 //////////////////////

var data = {
    labels: ['ATÉ 5º ANO INCOMPLETO', '6º AO 9º ANO INCOMPLETO',"FUNDAMENTAL COMPLETO",'ENSINO MEDIO COMPLETO',"ANALFABETO",'ENSINO MEDIO  INCOMPLETO',"5º ANO COMPLETO"],
    datasets: [{
      label: 'Escolaridade - Resgatados Naturais da UF',
      data: [177,122,92,85,64,58,47],
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
  var ctx = document.getElementById('grafico6').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 

  /////////////// Grafico 7 //////////////////////
  var data = {
    labels: ['ATÉ 5º ANO INCOMPLETO', '6º AO 9º ANO INCOMPLETO',"FUNDAMENTAL COMPLETO",'ENSINO MEDIO COMPLETO',"ANALFABETO",'ENSINO MEDIO  INCOMPLETO',"5º ANO COMPLETO"],
    datasets: [{
      label: 'Escolaridade - Resgatados Residentes na UF',
      data: [170,105,76,66,64,53,53],
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
  var ctx = document.getElementById('grafico7').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 
  /////////////// Grafico 8 //////////////////////
  var data = {
    labels: ['>60', '55-59', '50-54', "45-49", "40-44", "35-39", "30-34", "25-29", "18-24", "<18"],
    datasets: [{
      label: 'Perfil Etário e de Sexo - Resgatados Naturais da UF',
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
  var ctx = document.getElementById('grafico8').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 
  /////////////// Grafico 9 //////////////////////
  var data = {
    labels: ['>60', '55-59', '50-54', "45-49", "40-44", "35-39", "30-34", "25-29", "18-24", "<18"],
    datasets: [{
      label: 'Perfil Etário e de Sexo - Resgatados Residentes na UF',
      data: [4, 13, 31, 41, 67, 82, 90, 94,143,17],
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
  var ctx = document.getElementById('grafico9').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 
  /////////////// Grafico 10 //////////////////////
  var data = {
    labels: ['>60', '55-59', '50-54', "45-49", "40-44", "35-39", "30-34", "25-29", "18-24", "<18"],
    datasets: [{
      label: 'Perfil Etário e de Sexo - Resgatados Residentes na UF',
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
  var ctx = document.getElementById('grafico10').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 
  /////////////// Grafico 11 //////////////////////
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
  var ctx = document.getElementById('grafico11').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 