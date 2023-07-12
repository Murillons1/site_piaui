var dados = {
    labels: ["Pardo ", "Branca", "Preta"],
    datasets: [{
        data: [64, 17, 16], // Valores para cada categoria
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] // Cores de fundo para cada setor
    }]
};

// Opções do gráfico
var opcoes = {
    responsive: true
};

// Criação do gráfico de setores
var ctx = document.getElementById("setor").getContext("2d");
var grafico = new Chart(ctx, {
    type: 'pie',
    data: dados,
    options: opcoes
});