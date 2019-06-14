<template>
  <div class="resources model">
    <div class="model_title">
      资源使用率
    </div>
    <div class="res_num">
      <div class="res_num_item">
        <p class="name">资源使用量(份)</p>
        <p class="num">{{resourceNum.resourceNum}}</p>
      </div>
      <div class="res_num_item">
        <p class="name">资源总量(份)</p>
        <p class="num">{{resourceNum.allNum}}</p>
      </div>
    </div>
    <!-- <div style="color:#fff;">{{resourceNum}}</div> -->
    <div id="resources">    
    </div>
  </div>
  
  
</template>

<script>
import { mapGetters,mapState } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    this.mmm()
  },
  computed: {
    ...mapGetters(["resourceNum"])
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
                  fontSize:16
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
                      { value: $this.resourceNum.resourceNum, name: "资源使用量" },
                      { value: ($this.resourceNum.allNum - $this.resourceNum.resourceNum), name: "资源未使用量" },
                      // { value: 12, name: "资源使用量" },
                      // { value: 16, name: "资源未使用量" }
                  ],
                  label:{
                    normal:{
                      fontSize:18
                    }
                  }
              }
            ]
      };

      var chart = $this.$echarts.init(document.getElementById('resources'));
      chart.setOption(option)
    }
  },
  watch:{
    resourceNum:function(res){
      this.mmm()
    }
  }
};
</script>

<style>
</style>