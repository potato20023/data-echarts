<template>
  <div class="sort model">
    <div class="model_title">资源分类</div>
    <div id="sort"></div>
  </div>
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "culture",
  data() {
    return {
    };
  },
  mounted() {
    this.mmm()
  },
  computed:{
    ...mapGetters(['resourceSort',"screenWidth","screenHeight"])
  },
  methods: {
    mmm() {
      let $this = this;

      var option = {
        // title: {
        //   text: "资源分类",
        //   left: "left",
        //   top: 20,
        //   textStyle: {
        //     color: "#fff"
        //   }
        // },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
          height:'80%'   // 柱形图高度
        },
        xAxis: [
          {
            type: "category",
            // data: [ "教案","课件","习题",'素材',"试卷","微课","其他"],
            data:$this.resourceSort.name,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel:{
               // 柱形图x轴文字样式
              textStyle: {
                color: "#A4E4F7",
                fontSize:18 * $this.screenHeight / 1080
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel:{
                // 柱形图y轴文字样式
              textStyle: {
                color: "#A4E4F7",
                fontSize:16 * $this.screenHeight / 1080
              },
              // y轴的值超过1000，用1k表示
              formatter:function(value){
                let str = ''
                if(value >=0 && value < 1000){
                  str = value + '  '
                }else if(value >= 1000 && value < 10000){
                  str = Math.floor(value / 100) / 10 + "k  ";
                }else if(value >= 10000){
                  str = Math.floor(value / 1000) + "k  ";
                }
                return str
              }
            },
            splitLine: {
              // 分隔线样式
              lineStyle: {
                type: "dashed", // 虚线
                color: "rgba(255,255,255,0.1)"
              }
            }
          }
        ],
        series: [
          {
            name: "",
            type: "bar", 
            barWidth: "30%",    // 圆柱宽度
            data:$this.resourceSort.count,
            // data:[6388,6691,3606,29965,0,0,1],
            itemStyle: {
              normal: {  
                color: new $this.$echarts.graphic.LinearGradient(     // 圆柱颜色(渐变)
                  0,0,0,1, // 0,0,1,0表示从左向右    0,0,0,1表示从上向下
                  [
                    { offset: 0, color: "#2950FC" },// 上
                    { offset: 1, color: "#3E98F3" } // 下
                  ]
                ),
                label:{    // 圆柱上方显示数字
                  show:true,
                  position:'top',
                  textStyle:{
                    color:'#f5f5f6',
                    fontSize:18 * $this.screenHeight / 1080
                  },
                  // 当数值超过1000时用k表示
                  formatter: function(params) {
                    let str = "";
                    if(params.data >= 0 && params.data < 1000){
                      str = params.data;
                    }else if (params.data >= 1000 && params.data < 10000) {
                      str = Math.floor(params.data / 100) / 10 + "k";
                    } else if(params.data >= 10000){
                      str = Math.floor(params.data / 1000) + "k";
                    }
                    return str;
                  }
                }
              }
            }
          }
        ]
      };
      var chart = this.$echarts.init(document.getElementById("sort"));
      chart.clear();
      chart.resize();//在容器大小发生改变时手动调整图标尺寸
      chart.setOption(option);
      // setTimeout(()=>{
      //   window.onresize = function(){
      //     chart.resize();//在容器大小发生改变时手动调整图标尺寸
      //   }
      // },200) 
    }
  },
  watch:{
    resourceSort:function(res){
      this.mmm()
    },
    screenWidth:function(res){
      // console.log(res)
      this.mmm()
    },
    screenHeight:function(res){
      this.mmm();
    }
  }
};
</script>

<style>
</style>