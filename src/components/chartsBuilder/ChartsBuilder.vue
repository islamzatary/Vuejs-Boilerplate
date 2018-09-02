<template src="./chartsBuilder.html"></template>
<script>
import Chartjs from 'chart.js';
import {Api,Apid} from '@/utilities/Api'

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    defaultOptions: Object
  },
  data() {
    return {
      data: null,
      priority: 1,
      charts: {},
      exportedImg: null,
      chartTitle: null,
    }
  },
  created() {
    this.getCharts()
      .then(p => {
        this.$emit('activeCharts', this.charts);
        this.afterDraw();
      });
  },
  computed: {
    filteredData() {
      if(this.data)
        return this.data.sort((a, b) => a.order - b.order);
      return [];
    }
  },
  methods: {
    async getCharts(url = this.url, priority = 1) {
      if(priority === 1) {
        this.data = (await Apid().get(url)).data;
      } else {
        const newData = (await Apid().get(url)).data;
        newData.forEach(newEl => {
          this.data.map((el) => {
            if(el.name === newEl.name) {
              el.data = newEl.data;
            }
          });
        })
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.data.forEach((chart, index) => {
            if(chart.priority > this.priority)
              this.priority = chart.priority;
            const className = '.chart-' + index;
            const chartCanvas = document.querySelector(className);
            if(chart.priority === priority) {
              this.charts[chart.name] = new Chartjs(chartCanvas, {
                type: chart.type,
                data: chart.data,
                options: { ...this.defaultOptions, ...chart.options }
              });
            }
          });
          resolve(this.priority);
          
        });
      }).then(() => {
        if(this.priority > 1)
          return this.priority > priority ?
            this.getCharts(`/static/charts-${priority + 1}.json`, priority + 1) : this.priority;
      });
    },
    afterDraw() {
      Chartjs.plugins.register({
        afterDraw(chart) {
          if (!chart.data.datasets.length) {
            var ctx = chart.chart.ctx;
            var width = chart.chart.width;
            var height = chart.chart.height
            ctx.save();
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = "30px 'Avenir', Helvetica, Arial, sans-serif";
            ctx.fillText('No Data Available', width / 2 + 20, height / 2 - 10);
            ctx.globalAlpha = 0.6;
            ctx.fillStyle = "white";
            ctx.fillRect(0,0,width,height);
            ctx.restore();
          }
        }
      });
    },
    exportChart(chart, title) {
      this.exportedImg = this.charts[chart].toBase64Image();
      this.chartTitle = title;
      setTimeout(() => {
        this.$refs.export.click();
      }, 500);
    }
  }
}
</script>
<style scoped>
.chart-block {
  min-height: 250px;
}
</style>