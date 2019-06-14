geo: {
    map: 'china',
    center: [112.194115019531, 23.582111640625],
    zoom: 12,
    aspectScale: 1, //长宽比
    label: {
      normal: {
        show: true,
        textStyle: {
          fontSize: 16,
          color: '#ccc'
          }
        },
      emphasis: {
        show: false,
        textStyle: {
          color: '#ccc'
        }
      }
      },
    roam: false,
    itemStyle: {
      normal: {
        borderColor: "#fff",
        borderWidth: 5,
        areaColor: '#272235',
        fontWeightL: 700,
      /*  shadowBlur:20,
        shadowColor: '#fff',*/

      },
      emphasis: {
        areaColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#3f15d6' // 0% 处的颜色
          }, {
            offset: 1, color: '#d243cd' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        }
      }
    }
  },


  series: [
    {
      type: 'map',
      map: 'china',
      center: [112.194115019531, 23.582111640625],
      zoom: 12,
      geoIndex: 1,
      aspectScale: 1, //长宽比
      showLegendSymbol: false, // 存在legend时显示

      label: {
        normal: {
          show: true,
          textStyle: {
            fontSize: 16,
            color: '#ccc'
          }
        },
        emphasis: {
          show: false,
          textStyle: {
            color: '#ccc'
          }
        }
      },
      roam: false,
      itemStyle: {
        normal: {
          areaColor: '#272235',
          borderColor: '#fff',
          fontWeightL: 700,
          borderWidth: 1
        },
        emphasis: {
          areaColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#3f15d6' // 0% 处的颜色
            }, {
              offset: 1, color: '#d243cd' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        }
      },
      data: []
    }
    ]