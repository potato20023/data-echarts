<template>
  <div class="direct model">
    <div class="model_title">直播统计</div>
    <div id="direct"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { setTimeout } from 'timers';
export default {
  created(){
    // this.mmm1()
  },
   mounted() {
    this.mmm();
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["liveNum","liveEdu","liveCampus","liveTeaching","liveClass","screenWidth","screenHeight"])
  },
 
  methods: {
    mmm1(){
      let $this = this
      this.$store.dispatch("getliveNum", {
        areaCode: "410422",
        timeStamp: ""
      }).then(res => {
        // console.log(res);
        console.log(111)
        if(res.data){
          $this.$store.commit('SET_LIVE_NUM',{
            liveEdu:res.data[0].liveEdu,     // 教育局会议
            liveCampus:res.data[0].liveCampus,     //  校园电台
            liveTeaching:res.data[0].liveTeaching,   // 教学直播
            liveClass:res.data[0].liveClass     // 互动课堂
          })
        }
      });
    },
    mmm() {
      const $this = this;
      let option = {
        // backgroundColor: "#2c343c",
        // title: {
        //   text: "直播统计",
        //   left: "left",
        //   top: 20,
        //   textStyle: {
        //     color: "#fff"
        //   }
        // },
        legend: {
          x: "center",
          // y: "bottom",
          bottom:10,
          data: [
            "教育局会议",
            "互动课堂",
            "校园电台",
            "教学直播"
          ],
          textStyle:{
            color:'#f3fcff',
            fontSize:18 * $this.screenHeight / 1080
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: "直播间访问次数",
            type: "pie",
            radius: "55%",
            center: ["50%", "46%"],

            data: [
              { value: $this.liveEdu, name: "教育局会议" },
              { value: $this.liveClass, name: "互动课堂" },
              { value: $this.liveCampus, name: "校园电台" },
              { value: $this.liveTeaching, name: "教学直播" }
              // { value: 300, name: "教育局会议" },
              // { value: 200, name: "互动课堂" },
              // { value: 400, name: "校园电台" },
              // { value: 250, name: "教学直播" }
            ],
            // roseType: "radius",      // 圆饼类型
            label: {
              normal: {
                textStyle: {
                  //  // 显示文字样式
                  // color: "rgba(255, 255, 255, 1)"
                  fontSize:18 * $this.screenHeight / 1080
                }
              }
            },
            // labelLine: {
            //   normal: {
            //     lineStyle: {
            //       color: "rgba(255, 255, 255, 1)"
            //     },
            //     smooth: 0.2,
            //     length: 10,
            //     length2: 20
            //   }
            // },
      
          }
        ],
        color:['#f39700','#0C81FE', '#32B16C', '#44F0E9']
      };

      let chart = $this.$echarts.init(document.getElementById("direct"));
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
  watch: {
    liveNum: function(res) {
      this.mmm();
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
