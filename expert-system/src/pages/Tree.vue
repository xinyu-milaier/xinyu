<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入树图组件
require('echarts/lib/chart/tree')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  name: 'Tree',
  data () {
    return {
      charts: '',
      option : {
        title : {
            text: '树图',
            subtext: '虚构数据'
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : false,

        
        }
                    
    }
  },
  methods: {
    drawTree() {
       // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制树
        myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });

    }
  },

  mounted () {
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    myChart.setOption(options)
    this.drawTree();

  }
}

</script>
<style lang="less" scoped>
.table-item{
  margin: 20px 0;

  p:first-child{
    font-size: 18px;
    margin: 10px 0;
    font-weight: bold;
  }

  .page-choose{
    float: right;
    overflow: hidden;
    margin: 10px 0;
  }

  .item-name{
    font-size: 12px;
    font-weight: bold;
    padding: 0 10px;
  }
}

.row-margin{
  margin:20px 0;
}
</style>
