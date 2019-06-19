<template>
  <div class="library model">
    <div class="model_title">图书馆统计</div>
    <div id="library"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["videoNum","screenWidth","screenHeight"])
  },
  mounted() {
    this.mmm();
  },
  methods: {
    mmm() {
      let $this = this;
      var option = {
        // title: {
        //     text: '图书馆统计(叶县)',
        //     left: "left",
        //       top: 20,
        //       textStyle: {
        //         color: "#fff"
        //       }
        // },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend:{
          x:'center',
          y:'top',
          data:['图书馆点击量','图书馆资源总量'],
          textStyle:{
            color:'#f3fcff',
            fontSize:18 * $this.screenHeight / 1080
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
          height: '80%' // 图表高度
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            // data : ['周一','周二','周三','周四','周五','周六','周日'],
            data: $this.videoNum.insertTime,
            axisLabel: {
              // 横轴样式
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
            axisLabel: {
              textStyle: {
                color: "#A4E4F7",
                fontSize:16 * $this.screenHeight / 1080
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
            name: "图书馆点击量",
            // data: [120, 132, 811, 994, 1190, 1130, 1120,1190, 1130, 1120],
            data: $this.videoNum.videoHits,
            type: "line",  
            itemStyle: {    // 线条样式
              normal: {    
                color:'#77ffff',  // 折点颜色(border颜色)
                lineStyle: {    // 线条样式
                  color: "#77ffff"
                },
                label:{    // 折点上方显示数字
                  show:true,
                  position:'top',
                  textStyle:{
                    color:'#f5f5f6',
                    fontSize:18 * $this.screenHeight / 1080
                  }
                }
              },
              emphasis:{   // 高亮时样式
                color:'#77ffff'    // 折点颜色(bg填充颜色)
              }
            },
            areaStyle: {   // 填充样式
              normal: {
                color: new $this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2a97ec" },
                  { offset: 1, color: "#2a97ec" }
                ])
              }
            }
          },
          {
            name: "图书馆资源总量",
            // data: [820, 932, 901, 934, 1290, 1330, 1320,1190, 430, 320],
            data: $this.videoNum.videoTotal,
            type: "line",   
            itemStyle: {    // 线条样式
              normal: {    
                color:'#2950FC',  // 折点样式
                lineStyle: {    // 线条样式
                  color: "#2950FC"
                },
                // label:{    // 折点上方显示数字
                //   show:true,
                //   position:'top',
                //   textStyle:{
                //     color:'#f5f5f6',
                //     fontSize:14 * $this.screenHeight / 1080
                //   }
                // }
              },
              emphasis:{   // 高亮时样式
                color:'#2950FC',
                borderColor:'#2950FC'
              }
            },
            areaStyle: {// 填充样式
              normal: {
                color: new $this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2950FC" },
                  { offset: 1, color: "#3E98F3" }
                ])
              }
            }
          },
          
        ]
      };

      var chart = $this.$echarts.init(document.getElementById("library"));
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
    videoNum:function(res){
      this.mmm()
      // console.log(this.videoNum)
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
