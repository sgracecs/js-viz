$(function() {
  Highcharts.setOptions({
    lang: {
        decimalPoint: '.',
        thousandsSep: ','
    }
});
  $('#hcContainer').highcharts({
    data: {
      googleSpreadsheetKey: '1mqIPQLtlUQyvjgzn7W-XoIXGO1_i8WEYlUNNjH64abU',
    },
    chart: {
      type: 'line',
      backgroundColor: '#FFF',
      border: 'none',
      color: '#000',
      plotShadow: true,
      style: {
        fontFamily: 'Roboto Slab'
      }
    },
    credits: {
      enabled: true,
      href: false,
      text: "CSIS China Power Project | UNDP, World Bank",
      style: {
        fontFamily: 'Roboto Slab'
      }
    },
    title: {
      text: "Lines 1",
      style: {
        fontFamily: 'Roboto Slab'
      }
    },
    subtitle: {
      text: "2005-2014",
      style: {
        fontFamily: 'Roboto Slab'
      }
    },
    legend: {
      title: {
        text: 'Income Level<br/><span style="font-size: 9px; color: #666; font-weight: normal">(Click to hide)</span>',
        style: {
          fontStyle: 'italic',
          fontFamily: 'Roboto Slab'
        }
      },
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },
  colors: ['#ffd160', '#aa142d', '#ef9365', '#303d43', '#9864b6', '#5aa993', '#ed392a'],
    xAxis: {
      tickInterval: 1,
      tickmarkPlacement: 'on'
    },
    yAxis: {
      title: {
        text: "Education Index",
        style: {
          fontFamily: 'Roboto Slab'
        }
      },
    },
  plotOptions:
  {
    line: {
      marker: {
        enabled: false,
        symbol: "circle"
      }
    }
  },
  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }
});
});
