import { getIndexD,getbindNumD,getresourceNumD,getliveNumD,getcultureNumD,getvideoNumD,getlessonNumD,getdayOnlineNumD,getresourceSortD } from '../api/api'

const state = {
    screen:{
        screenWidth:'',
        screenHeight:''
    },    // 屏幕是否发生变化
    bindNum:{        // 注册班级数,在线班级数
        bindNum:'',   // 注册班级
        onlineNum:''   // 在线班级数
    },      
    resourceNum:{     // 资源使用统计
        resourceNum:'',   // 资源使用量
        allNum:''         // 资源总量
    },  
    liveNum:{           // 直播统计
        liveEdu:'',     // 教育局会议
        liveCampus:'',     //  校园电台
        liveTeaching:'',   // 教学直播
        liveClass:''     // 互动课堂
    },     
    cultureNum:{        // 班级文化(相册,手抄报)
        photoNum:'',    // 班级相册使用量
        paperNum:''     // 手抄报使用量
    },   
    videoNum:{          // 图书馆统计
        insertTime:[],  // x轴时间(数组)
        videoHits:[],   // 图书馆点击量(数组)
        videoTotal:[]   // 图书馆资源总量(数组)
    },    
    lessonNum:{        // 备课统计(备课学校,资源教师,备课资源总数)
        lessonSchool:'',   // 学校数
        lessonTeacher:'',  // 备课教师总数
        lessonResource:''  // 资源总数
    },    
    dayOnlineNum:{    // 每日在线人数
        count:[],    // y轴数量
        time:[]    // x轴时间
    },
    resourceSort:{   // 资源分类
        name:[],
        count:[]
    },
    info: [{     // 乡镇编号,时间戳
        time: '',
        number: '410422001000',
        fre: '1'
    }, {
        time: '',
        number: '410422002000',
        fre: '1'
    }, {
        time: '',
        number: '410422003000',
        fre: '1'
    }, {
        time: '',
        number: '410422205000',
        fre: '1'
    }, {
        time: '',
        number: '410422109000',
        fre: '1'
    }, {
        time: '',
        number: '410422210000',
        fre: '1'
    }, {
        time: '',
        number: '410422208000',
        fre: '1'
    }, {
        time: '',
        number: '410422106000',
        fre: '1'
    }, {
        time: '',
        number: '410422103000',
        fre: '1'
    }, {
        time: '',
        number: '410422207000',
        fre: '1'
    }, {
        time: '',
        number: '410422108000',
        fre: '1'
    }, {
        time: '',
        number: '410422102000',
        fre: '1'
    }, {
        time: '',
        number: '410422107000',
        fre: '1'
    }, {
        time: '',
        number: '410422201000',
        fre: '1'
    }, {
        time: '',
        number: '410422105000',
        fre: '1'
    }, {
        time: '',
        number: '410422204000',
        fre: '1'
    }, {
        time: '',
        number: '410422203000',
        fre: '1'
    }, {
        time: '',
        number: '410422101000',
        fre: '1'
    }]
}

const mutations = {
    // 设置屏幕是否发生变化
    'SET_SCREEN':(state, res) => {
        state.screen = res
    },
    // 设置注册班级数,在线班级数
    'SET_BIND_NUM':(state, res) => {
        state.bindNum = res
    },
    // 设置资源使用统计
    'SET_RESOURCE_NUM':(state, res) => {
        state.resourceNum = res
    },
    // 设置直播统计
    'SET_LIVE_NUM':(state, res) => {
        state.liveNum = res
    },
    // 设置班级文化(相册,手抄报)
    'SET_CULTURE_NUM':(state, res) => {
        state.cultureNum = res
    },
    // 设置图书馆统计
    'SET_VIDEO_NUM':(state, res) => {
        state.videoNum = res
    },
    // 设置备课统计
    'SET_LESSON_NUM':(state, res) => {
        state.lessonNum = res
    },
    // 设置每日在线数量
    'SET_DAYONLINE_NUM':(state, res) => {
        state.dayOnlineNum = res
    },
    // 设置资源分类
    'SET_SORT_NUM':(state, res) => {
        state.resourceSort = res
    }
    
}

const actions = {
    // 获取首页数据
    getIndex({ commit }, data) {
        return new Promise((resolve, reject) => {
            getIndexD(data).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 注册班级,在线班级
    getbindNum({ commit }, data) {
        return new Promise((resolve, reject) => {
            getbindNumD(data).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 资源使用率
    getresourceNum({ commit }, data) {
        return new Promise((resolve, reject) => {
            getresourceNumD(data).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 直播统计
    getliveNum({ commit }, data) {
        return new Promise((resolve, reject) => {
            getliveNumD(data).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 班级文化
    getcultureNum({ commit }, data) {
        return new Promise((resolve, reject) => {
            getcultureNumD(data).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 图书馆统计
    getvideoNum({ commit }, data) {
        return new Promise((resolve, reject) => {
            getvideoNumD(data).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 备课统计
    getlessonNum({ commit }, data) {
        return new Promise((resolve, reject) => {
            getlessonNumD(data).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 每日在线统计
    getdayOnlineNum({ commit }, data) {
        return new Promise((resolve, reject) => {
            getdayOnlineNumD(data).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 资源分类
    getresourceSort({ commit }, data) {
        return new Promise((resolve, reject) => {
            getresourceSortD(data).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

export default {
    state,
    mutations,
    actions
  }