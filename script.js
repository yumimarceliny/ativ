function drawGrafico1 () {

  var chartDom = document.getElementById('grafico_3b');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '3°A'
    },
    legend: {
      data: ['3A', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Desenvolvimento de habilidades sociais e cognitivas', max: 6500 },
        { name: 'Padrão estético contemporâneo', max: 16000 },
        { name: 'Esportes', max: 30000 },
        { name: 'Exercício físico e saúde', max: 38000 },
        { name: 'Danças e expressões corporais', max: 52000 },
        { name: 'Idenetidade cultural', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Física vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Física'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);


}

function drawGrafico2 () {

  var chartDom = document.getElementById('grafico_3a');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '3°B'
    },
    legend: {
      data: ['3B', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Desenvolvimento de habilidades sociais e cognitivas', max: 6500 },
        { name: 'Padrão estético contemporâneo', max: 16000 },
        { name: 'Esportes', max: 30000 },
        { name: 'Exercício físico e saúde', max: 38000 },
        { name: 'Danças e expressões corporais', max: 52000 },
        { name: 'Idenetidade cultural', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Física vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Física'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);


}

function drawGrafico3 () {

  var chartDom = document.getElementById('grafico_tads');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: 'TADS'
    },
    legend: {
      data: ['TADS', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Desenvolvimento de habilidades sociais e cognitivas', max: 6500 },
        { name: 'Padrão estético contemporâneo', max: 16000 },
        { name: 'Esportes', max: 30000 },
        { name: 'Exercício físico e saúde', max: 38000 },
        { name: 'Danças e expressões corporais', max: 52000 },
        { name: 'Idenetidade cultural', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Física vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Física'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);


}

drawGrafico1()
drawGrafico2()
drawGrafico3()