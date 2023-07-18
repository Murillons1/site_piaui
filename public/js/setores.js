// -----------------------Gráfico Setor 1--------------------------------------------//


var dados = {
    labels: ['Estração de Pedra,Argila e Areia', 'Produção florestal-florestas nativas', 'Cultivo de soja',"Atividade de apoio a agricultura","Fabricação de produtos cerâmicos refratários","Produção florestal-florestas plantadas","Criação de bovinos","Fabricação de bovinos e derivados","Fabricação de artefatos de couro não especificado"],
    datasets: [{
        data: [139, 125, 102,11,9,4,3,3,1],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#FF6347","#000080","#00FA9A","#20B2AA","#4B0082","#FF1493","#A9A9A9"]
    }]
};

var opcoes = {
    responsive: true
};

var ctx = document.getElementById("grafico_setor1").getContext("2d");
var grafico_setor1 = new Chart(ctx, {
    type: 'pie',
    data: dados,
    options: opcoes
});

// -----------------------Gráfico Setor 2--------------------------------------------//


var dados = {
    labels: ['Trabalhador volante da agricultura', 'Trabalhador da exploração de Canauba', 'Cortador de Pedras',"Trabalho Agropecuário","Trabalhador da Pecuária","Destroçador de Pedra","Trabalhador da Cultura da cana-açucar","Servente de obras","Outros"],
    datasets: [{
        data: [122, 107, 77,65,54,31,25,24,141],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#FF6347","#000080","#00FA9A","#20B2AA","#4B0082","#FF1493","#A9A9A9"]
    },{
        data: [105,97, 80,68,39,31,26,24,120],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#FF6347","#000080","#00FA9A","#20B2AA","#4B0082","#FF1493","#A9A9A9"]
    }]
};

var opcoes = {
    responsive: true
};

var ctx = document.getElementById("grafico_setor2").getContext("2d");
var grafico_setor2 = new Chart(ctx, {
    type: 'pie',
    data: dados,
    options: opcoes
});

// -----------------------Gráfico Setor 4--------------------------------------------//

var dados = {
    labels: ['PARDA', 'BRANCA', 'PRETA'],
    datasets: [{
        data: [488, 79, 76],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] 
    },{
        data: [456, 74, 57],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] 
    }]
};

var opcoes = {
    responsive: true
};

var ctx = document.getElementById("grafico_setor4").getContext("2d");
var grafico_setor4 = new Chart(ctx, {
    type: 'pie',
    data: dados,
    options: opcoes
});



// -----------------------Gráfico Setor 6--------------------------------------------//


var dados = {
    labels: ['ATÉ 5º ANO INCOMPLETO', '6º AO 9º ANO INCOMPLETO',"FUNDAMENTAL COMPLETO",'ENSINO MEDIO COMPLETO',"ANALFABETO",'ENSINO MEDIO  INCOMPLETO',"5º ANO COMPLETO"],
    datasets: [{
        data: [177,122,92,85,64,58,47],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#FF6347","#000080","#00FA9A","#20B2AA","#4B0082",]
    },{
        data: [170,105,76,66,64,53,53],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#FF6347","#000080","#00FA9A","#20B2AA","#4B0082",]
    }]
};

var opcoes = {
    responsive: true
};

var ctx = document.getElementById("grafico_setor6").getContext("2d");
var grafico_setor6 = new Chart(ctx, {
    type: 'pie',
    data: dados,
    options: opcoes
});

// -----------------------Gráfico Setor 8--------------------------------------------//


var dados = {
    labels: ['>60', '55-59', '50-54', "45-49", "40-44", "35-39", "30-34", "25-29", "18-24", "<18"],
    datasets: [{
        data: [8, 18, 29, 46, 70, 89, 97, 102,149,14],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#FF6347","#000080","#00FA9A","#20B2AA","#4B0082","#FF1493","#A9A9A9","#7FFF00"]
    },{
        data: [4, 13, 31, 41, 67, 82, 90, 94,143,17],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#FF6347","#000080","#00FA9A","#20B2AA","#4B0082","#FF1493","#A9A9A9","#7FFF00"]
    }]
};

var opcoes = {
    responsive: true
};

var ctx = document.getElementById("grafico_setor8").getContext("2d");
var grafico_setor8 = new Chart(ctx, {
    type: 'pie',
    data: dados,
    options: opcoes
});

// -----------------------Gráfico Setor 10--------------------------------------------//

var dados = {
    labels: ['>60', '55-59', '50-54', "45-49", "40-44", "35-39", "30-34", "25-29", "18-24", "<18"],
    datasets: [{
        data: [0,0,0,4, 5, 3, 4, 4, 4, 2],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#FF6347","#000080","#00FA9A","#20B2AA","#4B0082","#FF1493","#A9A9A9","#7FFF00"]
    },{
        data: [0,0,0,0,0,2, 1, 1, 1, 3],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#FF6347","#000080","#00FA9A","#20B2AA","#4B0082","#FF1493","#A9A9A9","#7FFF00"]
    }]
};

var opcoes = {
    responsive: true
};

var ctx = document.getElementById("grafico_setor10").getContext("2d");
var grafico_setor10 = new Chart(ctx, {
    type: 'pie',
    data: dados,
    options: opcoes
});

