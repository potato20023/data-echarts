<template>
  <div class="resources model">
    
    <div class="model_title">
      资源使用情况
    </div>
    <div class="model_con">
      <div class="res_num">
        <div class="res_num_item res_left">
          <p class="name">资源下载量</p>
          <p class="num">{{resourceNum}}</p>
        </div>
        <div class="res_num_item res_right">
          <p class="name">资源总量</p>
          <p class="num">{{allNum}}</p>
        </div>
      </div>

      <!-- <div class="model_right">
        <img src="@/assets/image/zhanwei.gif" alt="">
      </div> -->
      <!-- <div class="model_right">
        <div v-if="resourceNum >= 0 && allNum > 0" class="percentage">{{prec}}%</div>
        <div id="resources"></div>
      </div> -->
      
    </div>
    <div class="res_bg">
      <img src="@/assets/image/model_bg.png" alt="">
    </div>
    
  </div>
  
  
</template>

<script>
import { mapGetters,mapState } from "vuex";
export default {
  data() {
    return {
      num:0,
      all:0,
    };
  },
  mounted() {
    
    // this.per()
    // setTimeout(()=>{
    //       this.mmm()
    //     },1000)
    
      
  },

  computed: {
    ...mapGetters(["resourceNum","allNum","screenWidth","screenHeight"]),
    prec(){
      this.num = this.resourceNum;
      this.all = this.allNum;
      if(this.num > this.all){
        this.num  = Math.round(this.all * 0.8 + (this.num % this.all) * 0.2)  
        return  Math.round(this.num/this.all*100)
      }else{
        return  Math.round(this.num/this.all*100)
      }
    }
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
                // y:'bottom',
                bottom:20,
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
                  center:['50%','43%'],
                  data: [
                      { value: $this.num, name: "资源使用量" },
                      { value: ($this.all - $this.num), name: "资源未使用量" },
                      // { value: 0, name: "资源使用量" },
                      // { value: 0, name: "资源未使用量" }
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
      chart.clear();
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
    // num:function(res){
    //   this.mmm();
    // },
    // all:function(res){
    //   this.mmm();
    // },
    // screenWidth:function(res){
    //   // console.log(res)
    //   this.mmm()
    // },
    // screenHeight:function(res){
    //   this.mmm();
    // }
  }
};
</script>

<style>


</style>