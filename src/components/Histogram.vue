<template>
  <div class="histogram model">
    <div class="model_title">备课统计</div>
    <div id="histogram"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "histogram",
  data() {
    return {};
  },
  mounted() {
    this.mmm();
  },
  computed: {
    ...mapGetters(["lessonNum"])
  },
  methods: {
    mmm() {
      let $this = this;

      var option = {
        // title: {
        //   text: "备课统计",
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
          height: 220 // 柱形图高度
        },
        xAxis: [
          {
            type: "category",
            data: ["备课教师(位)", "资源总数(份)", "学校数(个)"],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              // 柱形图x轴文字样式
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
              // 柱形图y轴文字样式
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
            name: "",
            type: "bar",
            barWidth: "30%", // 圆柱宽度
            data: [$this.lessonNum.lessonTeacher,$this.lessonNum.lessonResource,$this.lessonNum.lessonSchool],
            // data: [100, 200, 300],
            itemStyle: {
              normal: {   
                color: new $this.$echarts.graphic.LinearGradient(   // 圆柱颜色(渐变)
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
                    fontSize:14
                  }
                }
              }
            }
          }
        ]
      };
      var hist = this.$echarts.init(document.getElementById("histogram"));
      hist.setOption(option);
      var zoomSize = 6;
      hist.on("click", function(params) {
        console.log(
          $this.dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]
        );
        hist.dispatchAction({
          type: "dataZoom",
          startValue:
            $this.dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue:
            $this.dataAxis[
              Math.min(params.dataIndex + zoomSize / 2, $this.datas.length - 1)
            ]
        });
      });
    }
  },
  watch: {
    lessonNum: function(res) {
      this.mmm();
    }
  }
};
</script>

<style>
</style>