<template>
    <div class="container">
        <canvas id="myChart2"></canvas>
        <canvas id="myChart"></canvas>
        <div class="icones">
            <a href="javascript:void(0)" id="btn1"><i class="icon-sortir"></i></a>
            <!-- <a href="javascript:void(0)" v-on:click="btn1"><i class="icon-sortir"></i></a> -->
            <a href="javascript:void(0)" id="btn2"><i class="icon-budget"></i></a>
            <a href="javascript:void(0)" id="btn3"><i class="icon-brevage"></i></a>
            <a href="javascript:void(0)" id="btn4"><i class="icon-cbverre"></i></a>
            <a href="javascript:void(0)" id="btn5"><i class="icon-manger"></i></a>
            <a href="javascript:void(0)" id="btn6"><i class="icon-souvenir"></i></a>
            <a href="javascript:void(0)" id="btn7"><i class="icon-heure"></i></a>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  mounted: () => {
    // datas
    const question1 = {
      question: 'Sors-tu souvent boire des verres avec tes amis ?',
      response:
      [
        {
          proposition: 'Oui',
          pourcentage: 80.6
        },
        {
          proposition: 'Non',
          pourcentage: 19.4
        }
      ]
    }
    const Q1 = question1.question
    const labelsQ1 = question1.response.map(propo => propo.proposition)
    const dataQ1 = question1.response.map(pourcent => pourcent.pourcentage)

    // Q2
    const question2 = {
      question: 'Quel est ton budget bar par mois ?',
      response:
      [
        {
          proposition: '< 20€',
          pourcentage: 25
        },
        {
          proposition: 'Entre 20€ et 50€',
          pourcentage: 13.9
        },
        {
          proposition: 'Entre 50€ et 100€',
          pourcentage: 41.7
        },
        {
          proposition: '> 100€',
          pourcentage: 19.4
        }
      ]
    }

    const Q2 = question2.question
    const labelsQ2 = question2.response.map(propo => propo.proposition)
    const dataQ2 = question2.response.map(pourcent => pourcent.pourcentage)

    // Q3
    const question3 = {
      question: 'Quel est ton breuvage favoris ?',
      response:
      [
        {
          proposition: 'Bière',
          pourcentage: 55.6
        },
        {
          proposition: 'Cocktail',
          pourcentage: 25
        },
        {
          proposition: 'Shot',
          pourcentage: 2.8
        },
        {
          proposition: 'Soft',
          pourcentage: 16.7
        }
      ]
    }

    const Q3 = question3.question
    const labelsQ3 = question3.response.map(propo => propo.proposition)
    const dataQ3 = question3.response.map(pourcent => pourcent.pourcentage)

    // Q4
    const question4 = {
      question: 'Combien de verres par soir ?',
      response:
      [
        {
          proposition: 'Mois de 2',
          pourcentage: 25
        },
        {
          proposition: 'Entre 2 et 4',
          pourcentage: 50
        },
        {
          proposition: 'Plus de 4',
          pourcentage: 25
        }
      ]
    }

    const Q4 = question4.question
    const labelsQ4 = question4.response.map(propo => propo.proposition)
    const dataQ4 = question4.response.map(pourcent => pourcent.pourcentage)

    // Q5
    const question5 = {
      question: 'Commandes-tu à manger ?',
      response:
      [
        {
          proposition: 'Oui',
          pourcentage: 5.6
        },
        {
          proposition: 'Non, trop cher !',
          pourcentage: 38.9
        },
        {
          proposition: 'Ca depends',
          pourcentage: 55.6
        }
      ]
    }
    const Q5 = question5.question
    const labelsQ5 = question5.response.map(propo => propo.proposition)
    const dataQ5 = question5.response.map(pourcent => pourcent.pourcentage)
    // Q6
    const question6 = {
      question: 'Te souviens-tu de tes soirées bar?',
      response:
      [
        {
          proposition: 'Oui',
          pourcentage: 77.8
        },
        {
          proposition: 'Ca depends',
          pourcentage: 22.2
        }
      ]
    }

    const Q6 = question6.question
    const labelsQ6 = question6.response.map(propo => propo.proposition)
    const dataQ6 = question6.response.map(pourcent => pourcent.pourcentage)
    // Q7
    const question7 = {
      question: 'À quelle heure rentres-tu ?',
      response:
      [
        {
          proposition: 'Après 1 ou 2 verres',
          pourcentage: 8.3
        },
        {
          proposition: 'En milieu de soirée',
          pourcentage: 27.8
        },
        {
          proposition: 'A la fermeture du bar',
          pourcentage: 8.3
        },
        {
          proposition: 'Quand tout le monde est parti',
          pourcentage: 33.3
        },
        {
          proposition: 'Avec le dernier train de la soirée',
          pourcentage: 22.2
        }
      ]
    }

    const Q7 = question7.question
    const labelsQ7 = question7.response.map(propo => propo.proposition)
    const dataQ7 = question7.response.map(pourcent => pourcent.pourcentage)

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
          data: [34.4, 25, 18.8, 62.5, 90.6, 81.3, 18.8]
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
          text: 'Quand sortent-ils boire des verres ?',
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
    // console.log(button3)
    const button4 = document.getElementById('btn4')
    const button5 = document.getElementById('btn5')
    const button6 = document.getElementById('btn6')
    const button7 = document.getElementById('btn7')

    button1.addEventListener('click', () => {
      chart.options.title.text = Q1
      chart.data.labels = labelsQ1
      chart.data.datasets[0].data = dataQ1
      chart.update()
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
    button4.addEventListener('click', () => {
      chart.options.title.text = Q4
      chart.data.labels = labelsQ4
      chart.data.datasets[0].data = dataQ4
      chart.update()
    })
    button5.addEventListener('click', () => {
      chart.options.title.text = Q5
      chart.data.labels = labelsQ5
      chart.data.datasets[0].data = dataQ5
      chart.update()
      console.log('slt')
    })
    button6.addEventListener('click', () => {
      chart.options.title.text = Q6
      chart.data.labels = labelsQ6
      chart.data.datasets[0].data = dataQ6
      chart.update()
    })
    button7.addEventListener('click', () => {
      chart.options.title.text = Q7
      chart.data.labels = labelsQ7
      chart.data.datasets[0].data = dataQ7
      chart.update()
    })
  }
  // methods: {
  //   btn1(){
  //     const chart = chart.js
  //     chart.options.title.text = Q1
  //     chart.data.labels = labelsQ1
  //     chart.data.datasets[0].data = dataQ1
  //     chart.update()
  //     // console.log(chartjs)
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
      // border: solid purple;
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
