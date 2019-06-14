<template>
  <div id="app">
    <img src="@/assets/image/title.png" class="title" alt="">
    <div class="statistics">
      <div class="statistics-left">
        <resource></resource>  <!-- 资源使用率-->
        <histogram></histogram> <!-- 备课统计 -->
        <!-- <visit></visit>         实时访问 -->
        <sort></sort>    <!-- 资源分类 -->
        
        
      </div>
      <div class="statistics-center">
        <bind></bind>          <!-- 注册班级, 在线班级 -->
        <map1></map1>            <!-- 叶县地图 -->
        <equipment></equipment> <!-- 设备每日在线统计 -->
      </div>
      <div class="statistics-right">
        <live></live>          <!-- 直播统计 -->
        <culture></culture>    <!-- 班级文化 -->
        <library></library>    <!-- 图书馆统计 -->
        
      </div>
    </div>
  </div>
</template>

<script>
import resource from "./components/resource.vue";      // 资源使用率
import live from "./components/live";                  // 直播统计
import library from "./components/library";            // 图书馆统计
import bind from './components/bind';                  // 注册班级, 在线班级
import map1 from "./components/map";                    // 叶县地图
import culture from './components/culture';            // 班级文化
import histogram from "./components/Histogram";        // 备课统计
import visit from "./components/visit";                // 实时访问
import equipment from './components/equipment';        // 设备不在线统计
import sort from './components/sort';                 // 资源分类
export default {
  name: "app",
  components: {
    resource,
    live,
    library,
    bind,
    map1,
    culture,
    histogram,
    visit,
    equipment,
    sort
  },
  created(){
    this.mmm()
  },
  mounted(){
    // this.mmm()
  },
  methods:{
    mmm() {      
      let $this = this
      // 获取首页数据
      // this.$store.dispatch("getIndex", {
      //   areaCode: "410422",
      //   timeStamp: ""
      // }).then(res => {
      //   console.log(res);
      // });
      // 注册班级,在线班级
      this.$store.dispatch("getbindNum", {
        areaCode: "410422",
        timeStamp: ""
      }).then(res => {
        // console.log(res);
        if(res.data){
          $this.$store.commit('SET_BIND_NUM',{
            bindNum:res.data[0].bindNum,
            onlineNum:res.data[0].onlineNum
          })
        }
        
      });
      // 资源使用率
      this.$store.dispatch("getresourceNum", {
        areaCode: "410422",
        timeStamp: ""
      }).then(res => {
        // console.log(res);
        if(res.data){
          $this.$store.commit('SET_RESOURCE_NUM',{
            resourceNum:res.data[0].resourceNum,
            allNum:250000
          })
        }
      });
      // 直播统计
      this.$store.dispatch("getliveNum", {
        areaCode: "410422",
        timeStamp: ""
      }).then(res => {
        // console.log(res);
        if(res.data){
          $this.$store.commit('SET_LIVE_NUM',{
            liveEdu:res.data[0].liveEdu,     // 教育局会议
            liveCampus:res.data[0].liveCampus,     //  校园电台
            liveTeaching:res.data[0].liveTeaching,   // 教学直播
            liveClass:res.data[0].liveClass     // 互动课堂
          })
        }
      });
      // 班级文化
      this.$store.dispatch("getcultureNum", {
        areaCode: "410422",
        timeStamp: ""
      }).then(res => {
        // console.log(res);
        if(res.data){
          $this.$store.commit('SET_CULTURE_NUM',{
            photoNum:res.data[0].photoNum,
            paperNum:res.data[0].paperNum
          })
        }
      });
      // 图书馆统计
      this.$store.dispatch("getvideoNum", {
        areaCode: "410422",
        timeStamp: ""
      }).then(res => {
        // console.log(res);
        if(res.data){
          let videoHits = []
          let insertTime = []
          let videoTotal = []
          let total = 0
          let data = res.data
          data.forEach(item => {
            videoHits.push(item.videoHits)
            insertTime.push(item.insertTime.slice(5))
            videoTotal.push(item.videoTotal)
            total++
            if(total >= data.length){
              // console.log('遍历完成')
              $this.$store.commit('SET_VIDEO_NUM',{
                videoHits:videoHits,
                insertTime:insertTime,
                videoTotal:videoTotal
              })
            }
          });
        }
      });
      // 备课统计
      this.$store.dispatch("getlessonNum", {
        areaCode: "410422",
        timeStamp: ""
      }).then(res => {
        // console.log(res);
        if(res.data){
          $this.$store.commit('SET_LESSON_NUM',{
            lessonSchool:res.data[0].lessonSchool,
            lessonTeacher:res.data[0].lessonTeacher,
            lessonResource:res.data[0].lessonResource
          })
        }
      });
      //设备每日在线统计
      this.$store.dispatch("getdayOnlineNum", {
        areaCode: "410422",
        timeStamp: ""
      }).then(res => {
        // console.log(res);
        if(res.data){
          let count = []
          let time = []
          let total = 0
          let data = res.data.rows
          data.forEach(item => {
            count.push(item.count)
            time.push(item.time.slice(5))
            total++
            if(total >= data.length){
              $this.$store.commit('SET_DAYONLINE_NUM',{
                count:count,
                time:time
              })
            }
          })
        }
      });

      // // 资源分类
      // this.$store.dispatch('getresourceSort',{
      //   areaCode:"410422",
      //   timeStamp:""
      // }).then(res=>{
      //   if(res.data){
      //     let count = []
      //     let name = []
      //     let total = 0
      //     let data = res.data
      //     data.forEach(item=>{
      //       count.push(item.count)
      //       name.push(item.name)
      //       total++
      //       if(total >= data.length){
      //         $this.store.commit('SET_SORT_NUM',{
      //           count:count,
      //           name:name
      //         })
      //       }
      //     })
      //   }
      // });


    }
  }
};
</script>


<style lang="scss">
  @import '@/assets/css/style.scss'
</style>