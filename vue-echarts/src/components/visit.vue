<template>
  <div id="visit" style="width:400px;height:300px;border:1px solid #ddd;"></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState([])
  },
  mounted() {
    this.mmm();
  },
  methods: {
    mmm() {
      let $this = this;
      var option = {
        title: {
          text: "实时访问",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["06-05", "06-06", "06-07", "06-08", "06-09", "06-10", "06-11"],
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            name:'实时访问',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      };
      
      var chart = $this.$echarts.init(document.getElementById("visit"));
      chart.setOption(option);
    }
  }
};

</script>
