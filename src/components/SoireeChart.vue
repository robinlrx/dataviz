<template>
    <div class="container">
        <canvas id="myChart2"></canvas>
        <canvas id="myChart"></canvas>
        <div class="icones">
            <a href="javascript:void(0)" id="btn1"><i class="icon-ramener"></i></a>
            <a href="javascript:void(0)" id="btn2"><i class="icon-chez_toi"></i></a>
            <a href="javascript:void(0)" id="btn3"><i class="icon-dormir"></i></a>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  mounted: () => {
    // datas
    const question1 = {
      question: 'Ramènes-tu quelque chose à boire et/ou à manger ?',
      response:
      [
        {
          proposition: 'A boire',
          pourcentage: 8.3
        },
        {
          proposition: 'A manger',
          pourcentage: 2.8
        },
        {
          proposition: 'Les 2',
          pourcentage: 52.8
        },
        {
          proposition: 'Ca dépend',
          pourcentage: 36.1
        }
      ]
    }
    const Q1 = question1.question
    const labelsQ1 = question1.response.map(propo => propo.proposition)
    const dataQ1 = question1.response.map(pourcent => pourcent.pourcentage)

    // Q2
    const question2 = {
      question: 'Invites-tu tes potes chez toi où te fais tu inviter ?',
      response:
      [
        {
          proposition: "J'invite",
          pourcentage: 11.1
        },
        {
          proposition: 'Je me fais inviter',
          pourcentage: 33.3
        },
        {
          proposition: 'Ca dépend',
          pourcentage: 55.5
        }
      ]
    }

    const Q2 = question2.question
    const labelsQ2 = question2.response.map(propo => propo.proposition)
    const dataQ2 = question2.response.map(pourcent => pourcent.pourcentage)

    // Q3
    const question3 = {
      question: 'Dors-tu sur place ou rentres-tu chez toi ?',
      response:
      [
        {
          proposition: 'Sur place',
          pourcentage: 8.3
        },
        {
          proposition: 'Chez moi',
          pourcentage: 61.1
        },
        {
          proposition: 'Ca dépend',
          pourcentage: 30.6
        }
      ]
    }

    const Q3 = question3.question
    const labelsQ3 = question3.response.map(propo => propo.proposition)
    const dataQ3 = question3.response.map(pourcent => pourcent.pourcentage)

    // canvas
    const canvas = document.getElementById('myChart')
    // console.log(canvas)
    const ctx = canvas.getContext('2d')

    const polarGradiant1 = ctx.createLinearGradient(0, 0, 0, 600)
    polarGradiant1.addColorStop(0, '#56CBD2')
    polarGradiant1.addColorStop(1, '#006CFF')
    const polarGradiant2 = ctx.createLinearGradient(0, 0, 0, 600)
    polarGradiant2.addColorStop(0, '#E74A27')
    polarGradiant2.addColorStop(1, '#FFBC83')
    const polarGradiant3 = ctx.createLinearGradient(0, 0, 0, 600)
    polarGradiant3.addColorStop(0, '#EFC042')
    polarGradiant3.addColorStop(1, '#FF9300')
    const polarGradiant4 = ctx.createLinearGradient(0, 0, 0, 600)
    polarGradiant4.addColorStop(0, '#8A94F0')
    polarGradiant4.addColorStop(1, '#5566FF')
    const polarGradiant5 = ctx.createLinearGradient(0, 0, 0, 600)
    polarGradiant5.addColorStop(0, '#4BD1BD')
    polarGradiant5.addColorStop(1, '#098C9D')

    // chart.js
    Chart.defaults.global.defaultFontFamily = 'Brandon Grotesque'
    const chart = new Chart(ctx, {
      type: 'polarArea',

      data: {
        labels: labelsQ1,
        datasets: [{
          // label: 'My First dataset',
          backgroundColor: [polarGradiant1, polarGradiant2, polarGradiant3, polarGradiant4, polarGradiant5],
          data: dataQ1
        }]
      },

      options: {
        legend: {
          // display: false,
          position: 'right',
          align: 'end',
          fullWidth: false,
          labels: {
            // boxWidth: 20,
            fontSize: 20,
            fontColor: '#0e34e5',
            fontFamily: 'Brandon Grotesque'
          }
        },
        title: {
          display: true,
          text: Q1,
          position: 'bottom',
          fontSize: 30,
          fontColor: '#0e34e5'
        },
        scale: {
          gridLines: {
            color: 'rgba(14, 52, 229,1.0)',
            lineWidth: 2
          }
        },
        animation: {
          duration: 1300
        },
        tooltips: {
          bodyFontSize: 20
        }
      }
    })

    // canvas2
    const canvas2 = document.getElementById('myChart2')
    // console.log(canvas2)
    const ctx2 = canvas2.getContext('2d')
    const barGradient = ctx2.createLinearGradient(0, 0, 0, 600)
    barGradient.addColorStop(0, '#EFC042')
    barGradient.addColorStop(1, '#FF9300')

    const daysChart = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['L', 'M', 'Me', 'J', 'V', 'S', 'D'],
        datasets: [{
          // label: 'My First dataset',
          backgroundColor: [barGradient, barGradient, barGradient, barGradient, barGradient, barGradient, barGradient],
          data: [0, 2.8, 5.6, 22.2, 86.1, 94.4, 25]
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: false,
        aspectRatio: 1,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              fontColor: '#000000',
              fontSize: 10
            },
            ticks: {
              fontColor: '#0E34E5',
              fontSize: 14
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              fontColor: '#000000',
              fontSize: 10
            },
            gridLines: {
              color: 'rgba(14, 52, 229,1.0)',
              lineWidth: 2,
              borderDash: [5, 10]
            },
            ticks: {
              fontColor: '#0E34E5',
              fontSize: 14
            }
          }]
        },
        tooltips: {
          enabled: false
        },
        title: {
          display: true,
          text: 'Quand vas-tu en soirée chez tes amis ?',
          position: 'bottom',
          fontSize: 30,
          fontColor: '#0e34e5'
        }
      }
    })

    // clics des boutons
    const button1 = document.getElementById('btn1')
    const button2 = document.getElementById('btn2')
    const button3 = document.getElementById('btn3')

    button1.addEventListener('click', () => {
      chart.options.title.text = Q1
      chart.data.labels = labelsQ1
      chart.data.datasets[0].data = dataQ1
      chart.update()
      // console.log(dataviz.labelsQ1)
    })
    button2.addEventListener('click', () => {
      chart.options.title.text = Q2
      console.log(chart.options.title.text = Q2)
      chart.data.labels = labelsQ2
      chart.data.datasets[0].data = dataQ2
      chart.update()
    })
    button3.addEventListener('click', () => {
      chart.options.title.text = Q3
      chart.data.labels = labelsQ3
      chart.data.datasets[0].data = dataQ3
      chart.update()
    })
  }
  // methods: {
  //   onUpdateData() {
  //     Chart.chart.options.title.text = Q1
  //     chart.data.labels = labelsQ1
  //     chart.data.datasets[0].data = dataQ1
  //     chart.update()
  //   }
  // },
}
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        flex-direction: row;
        // width: 100%;
        height: 100vh;
        // max-height: max-content;
    }
    .icones{
      display: flex;
      flex-direction: column;
      margin: auto;
      position: relative;
      z-index: 3;
      right: 50%;
      // margin-right: 100px;
      // width: 100px;
      // margin-top: 90px;
      // border: solid green;
      & a{
        background-color: transparent;
        font-family: 'fontello';
        font-size: 2.5rem;
        text-decoration: none;
        border: solid #0E34E5;
        border-radius: 50px;
        width: 50px;
        height: 50px;
        margin-bottom: 5px;

        & i{
          margin-right: 50px;
        }

        &:hover{
          background-color:  #0E34E5;
          color: white;
        }
      }
    }
    canvas{
      transform: scale(0.8);
      // border: solid black;
    //    margin: auto;
    }
    canvas#myChart{
      // transform: scale(0.8);
      width: 100% !important;
      position: relative;
      z-index: 2;
      right: 20%;
    }
    canvas#myChart2{
      width: 35%!important;
      height: 30%;
      position: relative;
      z-index: 1;
      // right: 1%;
      /* top: 100vh; */
      align-self: flex-end;
      //  margin-top: .5%;
    }
</style>
