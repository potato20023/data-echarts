<template>
  <div id="app">
    <!-- <video id="video1" width="2000" height="500" autoplay muted loop>
        <source src="@/assets/image/video1.mp4" type="video/mp4">
    </video> -->
    <!-- <router-view/> -->
    <img src="@/assets/image/title.png" class="title" alt @click="mmm">
    
    <div class="statistics">
      <div class="statistics-left">
        <resource></resource>
        <!-- 资源使用率-->
        <histogram></histogram>
        <!-- 备课统计 -->
        <sort></sort>
        <!-- 资源分类 -->
      </div>
      <div class="statistics-center">
        <bind></bind>
        <!-- 注册班级, 在线班级 -->
        <map1></map1>
        <!-- 叶县地图 -->
        <equipment></equipment>
        <!-- 设备每日在线统计 -->
      </div>
      <div class="statistics-right">
        <live></live>
        <!-- 直播统计 -->
        <culture></culture>
        <!-- 班级文化 -->
        <library></library>
        <!-- 图书馆统计 -->
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import resource from "./components/resource.vue"; // 资源使用率
import live from "./components/live"; // 直播统计
import library from "./components/library"; // 图书馆统计
import bind from "./components/bind"; // 注册班级, 在线班级
import map1 from "./components/map"; // 叶县地图
import culture from "./components/culture"; // 班级文化
import histogram from "./components/Histogram"; // 备课统计
import visit from "./components/visit"; // 实时访问
import equipment from "./components/equipment"; // 设备不在线统计
import sort from "./components/sort"; // 资源分类
import { setTimeout, setInterval } from "timers";
export default {
  name: "app",
  data() {
    return {
      screenWidth: document.documentElement.clientWidth, // 屏幕宽度
      screenHeight: document.documentElement.clientHeight // 屏幕高度
    };
  },
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
  created() {
    let $this = this
    this.mmm($this.townId);
    this.library(410422);
    this.equipment($this.townId);
    this.sort();
  },
  mounted() {
    // this.mmm()
    // this.screen()   // 监听屏幕
    let $this = this;
    window.onresize = function() {
      $this.screenWidth = document.documentElement.clientWidth;
      $this.screenHeight = document.documentElement.clientHeight;
    };
    this.refresh();
  },
  computed:{
    ...mapGetters(['townId'])
  },
  methods: {
    // 刷新
    refresh() {
      let $this = this
      setInterval(() => {        
        this.mmm($this.townId);
        this.library(410422);
        this.equipment($this.townId);
        this.sort();
      }, 180000);
      // setInterval(()=>{    // 12小时获取一次图书馆数据,每日在线统计
      //   this.library(410422);
      //   this.equipment($this.townId);
      //   this.sort();
      // },43200000)
    },
    // 获取叶县数据
    mmm(num) {
      let $this = this;
      // 获取首页数据
      // this.$store.dispatch("getIndex", {
      //   areaCode: num,
      //   timeStamp: ""
      // }).then(res => {
      //   console.log(res);
      // });
      // 注册班级,在线班级
      this.$store
        .dispatch("getbindNum", {
          areaCode: num,
          timeStamp: ""
        })
        .then(res => {
          // console.log(res);
          if (res.data) {
            $this.$store.commit("SET_BIND_NUM", {
              bindNum: res.data[0].bindNum,
              onlineNum: res.data[0].onlineNum
            });
          }
        });
      // 资源使用率
      this.$store
        .dispatch("getresourceNum", {
          areaCode: num,
          timeStamp: ""
        })
        .then(res => {
          // console.log(res);
          if (res.data) {
            $this.$store.commit("SET_RESOURCE_NUM",  res.data[0].resourceNum);
          }
        });
      // 直播统计
      this.$store
        .dispatch("getliveNum", {
          areaCode: num,
          timeStamp: ""
        })
        .then(res => {
          // console.log(res);
          if (res.data) {
            $this.$store.commit("SET_LIVE_NUM", {
              liveEdu: res.data[0].liveEdu, // 教育局会议
              liveCampus: res.data[0].liveCampus, //  校园电台
              liveTeaching: res.data[0].liveTeaching, // 教学直播
              liveClass: res.data[0].liveClass // 互动课堂
            });
          }
        });
      // 班级文化
      this.$store
        .dispatch("getcultureNum", {
          areaCode: num,
          timeStamp: ""
        })
        .then(res => {
          // console.log(res);
          if (res.data) {
            $this.$store.commit("SET_CULTURE_NUM", {
              photoNum: res.data[0].photoNum,
              paperNum: res.data[0].paperNum
            });
          }
        });
      
      // 备课统计
      this.$store
        .dispatch("getlessonNum", {
          areaCode: num,
          timeStamp: ""
        })
        .then(res => {
          // console.log(res);
          if (res.data) {
            $this.$store.commit("SET_LESSON_NUM", {
              lessonSchool: res.data[0].lessonSchool,
              lessonTeacher: res.data[0].lessonTeacher,
              lessonResource: res.data[0].lessonResource
            });
          }
        });
      
    },
    // 图书馆统计
    library(num){
      let $this = this
      // 图书馆统计
      this.$store
        .dispatch("getvideoNum", {
          areaCode: num,
          timeStamp: ""
        })
        .then(res => {
          // console.log(res);
          if (res.data) {
            let videoHits = [];
            let insertTime = [];
            let videoTotal = [];
            let total = 0;
            let data = res.data;
            data.forEach(item => {
              videoHits.push(item.videoHits);
              insertTime.push(item.insertTime.slice(5));
              videoTotal.push(item.videoTotal);
              total++;
              if (total >= data.length) {
                // console.log('遍历完成')
                $this.$store.commit("SET_VIDEO_NUM", {
                  videoHits: videoHits,
                  insertTime: insertTime,
                  videoTotal: videoTotal
                });
              }
            });
          }
        });
    },
    // 资源分类
    sort(){
      let $this = this;
       // 资源分类
      this.$store.dispatch('getresourceSort',{
        type:1,
        timeStamp:""
      }).then(res=>{
        if(res.data){
          let count = []
          let name = []
          let total = 0
          let data = res.data.categoryContent
          $this.$store.commit('SET_RESOURCE_ALL',res.data.resourceTotalNum)   // 设置资源总量
          data.forEach(item=>{
            count.push(item.count)
            name.push(item.typeName)
            total++
            if(total >= data.length){
              $this.$store.commit('SET_SORT_NUM',{
                count:count,
                name:name
              })
            }
          })
        }
      });
    },
    // 每日在线统计
    equipment(num){
      let $this = this
      //设备每日在线统计
      this.$store
        .dispatch("getdayOnlineNum", {
          areaCode: num,
          timeStamp: ""
        })
        .then(res => {
          // console.log(res);
          if (res.data) {
            let count = [];
            let time = [];
            let total = 0;
            let data = res.data.rows;
            data.forEach(item => {
              count.push(item.count);
              time.push(item.time.slice(5));
              total++;
              if (total >= data.length) {
                $this.$store.commit("SET_DAYONLINE_NUM", {
                  count: count,
                  time: time
                });
              }
            });
          }
        });
    },
  },
  watch: {
    screenWidth: function(res) {
      // console.log(res)
      // console.log('宽度变化了')
      // this.mmm();
      this.$store.commit("SET_SCREEN_WIDTH", res);
    },
    screenHeight: function(res) {
      // console.log('高度变化了')
      // this.mmm();
      this.$store.commit("SET_SCREEN_HEIGHT", res);
    }
  }
};
</script>


<style lang="scss">
@import "@/assets/css/style.scss";
</style>