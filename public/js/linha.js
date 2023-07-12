// -----------------------Gráfico Barras--------------------------------------------//

var data = {
  labels: ['PARDA', 'BRANCA', 'PRETA'],
  datasets: [
    {
      label: 'Raça - Resgatados Naturais da UF',
      data: [488, 79, 76],
      fill: false,
      borderColor: '#FFFAFA		',
      tension: 0.1
      
    }
  ]
};


var options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

var ctx = document.getElementById('grafico_barras').getContext('2d');
var grafico_barras = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});


// -----------------------Gráfico Barras 2--------------------------------------------//

var data = {
  labels: ['PARDA', 'BRANCA', 'PRETA'],
  datasets: [
    {
      label: 'Raça - Resgatados Residentes na UF',
      data: [456, 74, 57],
      fill: false,
      borderColor: '#FFFAFA',
      tension: 0.1
      
    }
  ]
};

var options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

var ctx = document.getElementById('grafico_barras2').getContext('2d');
var grafico_barras2 = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});

// -----------------------Gráfico Barras 3--------------------------------------------//

var data = {
  labels: ['Estração de Pedra,Argila e Areia', 'Produção florestal-florestas nativas', 'Cultivo de soja',"Atividade de apoio a agricultura","Fabricação de produtos cerâmicos refratários","Produção florestal-florestas plantadas","Criação de bovinos","Fabricação de bovinos e derivados","Fabricação de artefatos de couro não especificado"],
  datasets: [
    {
      label: 'Raça - Resgatados Residentes na UF',
      data: [456, 74, 57],
      fill: false,
      borderColor: '#FFFAFA',
      tension: 0.1
      
    }
  ]
};

var options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

var ctx = document.getElementById('grafico_barras3').getContext('2d');
var grafico_barras3 = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});
