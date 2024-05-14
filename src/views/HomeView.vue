<template>
    <div>
      <h2 @click="fetchData()">Electricity Sales Volume by Year</h2>
      <v-chart class="chart" :option="option" />
    </div>
  </template>
  
  <script>
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { BarChart } from 'echarts/charts';
  import {
      TitleComponent,
      TooltipComponent,
      LegendComponent,
  } from 'echarts/components';
  import VChart from 'vue-echarts';
  
  use([
      CanvasRenderer,
      BarChart,
      TitleComponent,
      TooltipComponent,
      LegendComponent,
  ]);
  
  export default {
      data() {
          return {
              posts: [],
              option: {
                  title: {
                      text: 'Electricity Sales Volume by Year',
                      left: 'center',
                  },
                  tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                          type: 'shadow'
                      }
                  },
                  legend: {
                      data: ['Electricity Sales Volume'],
                      left: 'right'
                  },
                  xAxis: {
                      type: 'category',
                      data: [],
                      axisLabel: {
                          rotate: 45
                      }
                  },
                  yAxis: {
                      type: 'value',
                      name: 'Sales Volume'
                  },
                  series: [{
                      name: 'Electricity Sales Volume',
                      type: 'bar',
                      data: [],
                      label: {
                          show: true,
                          position: 'top'
                      }
                  }]
              }
          }
      },
      methods: {
          fetchData() {
              fetch("../5years.json")
                  .then(res => res.json())
                  .then(data => {
                      this.posts = data;
                      const years = data.map(item => item['年度']);
                      const salesVolumes = data.map(item => item['售電量合計']);
                      this.option.xAxis.data = years;
                      this.option.series[0].data = salesVolumes;
                  })
          }
      },
      components: {
          VChart
      }
  }
  </script>
  
  <style scoped>
  .chart {
      height: 400px;
  }
  </style>
  