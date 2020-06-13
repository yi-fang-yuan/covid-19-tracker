<template>
  <div id="app">
       <div class="container1">
        <Card></Card>
        <Country></Country>
           <div class="chart">
      <div v-if="this.getGlobal === true">
          <Chart :chartData="{
      labels:this.currentDate,
      datasets:[
              {
               label: 'Dead',
               backgroundColor: '#f87979',
               borderColor:'red',
               data: this.currentDeath
              },
              {
                label:'Confirmed',
                borderColor: '#3333ff',
                fill:true,
                data: this.currentInfected
              }
      ],
    }"/>
        </div>
      <div v-else>
        <BarChart :chartData="{
          labels: ['Infected','Recovered','Deaths'],
          datasets: [{
             label:'People',
              backgroundColor:[
                        'rgba(	255, 165, 0,0.5)',
                        'rgba(	0, 255, 0,0.5)',
                        'red',
               ],
             data: [this.currentInfected, this.currentAlive,this.currentDeath],
          }]
        }" :options="{
                legend:{display:false},
                title: {display:true,text:`The current Situation at the Country`},
            }"></BarChart>
      </div>
           </div>
  </div>
    </div>

</template>

<script>

import Chart from "./components/Chart";
import {mapActions, mapGetters} from "vuex";
import Country from "./components/Country";
import BarChart from "./components/BarChart";
import Card from "./components/Card";
export default {
  name: 'App',
  components: {
      Card,
    BarChart,
    Country,
    Chart,
  },
  methods:{
    ...mapActions(["fetchData","fetchCardData"]),
  },
  computed:{
    ...mapGetters(["currentDeath","currentInfected","currentDate","currentAlive","getGlobal"]),
  },
  created(){
    this.fetchData();
    this.fetchCardData('Global');
  }
}
</script>

<style>
  .container1{
    display:flex;
    justify-content:center;
    width: 100%;
    flex-direction: column;
      align-items: center;
  }
  .chart{
      width: 85%;
  }
  @media(max-width:770px){
    .container1{
      width: 100% !important;
    }
  }
  body{
      background-color: rgb(250,250,250);
  }

</style>
