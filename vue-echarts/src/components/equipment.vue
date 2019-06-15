<template>
  <div class="equipment model">
    <div class="model_title">每日在线统计</div>
    <div id="equipment"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["dayOnlineNum","screen"])
  },
  mounted() {
    this.mmm();
  },
  methods: {
    mmm() {
      let $this = this;
      var option = {
        // title: {
        //     text: '每日在线数量',
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
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
          // height: 220 // 图表高度
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            // data : ['周一','周二','周三','周四','周五','周六','周日'],
            data: $this.dayOnlineNum.time,
            axisLabel: {
              // 横轴样式
              textStyle: {
                color: "#A4E4F7",
                fontSize:16
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
                fontSize:16
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
            name: "总量",
            // data: [820, 932, 901, 934, 1290, 1330, 1320],
             data: $this.dayOnlineNum.count,
            type: "line",
            itemStyle: {    // 线条样式
              normal: {    
                color:'#77ffff',  // 折点样式
                lineStyle: {    // 线条样式
                  color: "#77ffff"
                },
                label:{    // 圆柱上方显示数字
                  show:true,
                  position:'top',
                  textStyle:{
                    color:'#f5f5f6',
                    fontSize:18
                  }
                }
              },
              emphasis:{   // 高亮时样式
                color:'#77ffff',
                borderColor:'#77ffff'
              }
            },
            areaStyle: {// 填充样式
              normal: {
                color: new $this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#288de0" },
                  { offset: 1, color: "#0e2361" }
                ]),
                
              }
            },
           
          },
          // {
          //   name: "",
          //   type: "bar",
          //   barWidth: "30%",   // 圆柱宽度
          //   data: $this.dayOnlineNum.count,
          //   itemStyle: {
          //     normal: {   
          //       color: new $this.$echarts.graphic.LinearGradient(   // 圆柱颜色(渐变)
          //         0,0,0,1, // 0,0,1,0表示从左向右    0,0,0,1表示从上向下
          //         [
          //           { offset: 0, color: "#2950FC" },// 上
          //           { offset: 1, color: "#3E98F3" } // 下
          //         ]
          //       ),
          //       label:{    // 圆柱上方显示数字
          //         show:true,
          //         position:'top',
          //         textStyle:{
          //           color:'#f5f5f6',
          //           fontSize:18
          //         }
          //       }
          //     }
          //   }
          // }
        ]
      };

      var chart = $this.$echarts.init(document.getElementById("equipment"));
      chart.resize();    //在容器大小发生改变时手动调整图标尺寸
      chart.setOption(option);
    }
  },
  watch: {
    dayOnlineNum: function(res) {
      this.mmm();
    },
    screen:function(res){
      this.mmm();
    }
  }
};
</script>
