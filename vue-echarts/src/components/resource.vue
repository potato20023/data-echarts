<template>
  <div class="resources model">
    <div class="model_title">
      资源使用率
    </div>
    <div class="res_num">
      <div class="res_num_item">
        <p class="name">资源使用量</p>
        <p class="num">{{resourceNum}}</p>
      </div>
      <div class="res_num_item">
        <p class="name">资源总量</p>
        <p class="num">{{allNum}}</p>
      </div>
    </div>
    <div v-if="resourceNum >= 0 && allNum >= 0" class="percentage">{{Math.round(resourceNum/allNum*100)}}%</div>
    <!-- <div class="percentage">{{Math.round(200/400*100)}}%</div> -->
    <!-- <div style="color:#fff;">{{resourceNum}}</div> -->
    <div id="resources">    
    </div>
  </div>
  
  
</template>

<script>
import { mapGetters,mapState } from "vuex";
export default {
  data() {
    return {
      
    };
  },
  mounted() {
    if(this.allNum){
      this.mmm()
    } 
  },
  computed: {
    ...mapGetters(["resourceNum","allNum","screenWidth","screenHeight"])    
  },
  methods: {
    mmm() {
      let $this = this
      var option = {
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {   // 列表样式
                show:true,
                orient: "horizontal",    // 图例列表的布局朝向 (横向)
                // x: "right",
                y:'bottom',
                right:30,
                textStyle:{    
                  color:'#f3fcff',
                  fontSize:16 * $this.screenHeight / 1080
                },
                data: ["资源使用量", "资源未使用量"]
            },
            color:['#44F0E9','#16ABFF'],   // 修改圆环颜色
            series: [
              {
                  name: "资源使用率",
                  type: "pie",
                  radius: ["40%", "65%"],   // 圆环大小
                  center:['65%','45%'],
                  data: [
                      { value: $this.resourceNum, name: "资源使用量" },
                      { value: ($this.allNum - $this.resourceNum), name: "资源未使用量" },
                      // { value: 12, name: "资源使用量" },
                      // { value: 16, name: "资源未使用量" }
                  ],
                  label:{
                    normal:{
                      show:false,   // 不显示分支出来的文字
                      fontSize:18 * $this.screenHeight / 1080
                    }
                  }
              }
            ]
      };

      var chart = $this.$echarts.init(document.getElementById('resources'));
      // chart.clear();
      chart.resize();//在容器大小发生改变时手动调整图标尺寸
      chart.setOption(option)
      // setTimeout(()=>{
      //   window.onresize = function(){
      //     chart.resize();//在容器大小发生改变时手动调整图标尺寸
      //   }
      // },200) 
    }
  },
  watch:{
    resourceNum:function(res){
      this.mmm()
    },
    allNum:function(res){
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