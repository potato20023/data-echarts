
const getters = {
    screen:state => state.screen,    // 屏幕宽高
    bindNum:state => state.bindNum,    // 绑定班级数
    resourceNum:state => state.resourceNum,   // 资源使用率
    liveNum:state => state.liveNum,      // 直播统计
    liveEdu:state => state.liveNum.liveEdu,
    liveCampus:state => state.liveNum.liveCampus,
    liveTeaching:state => state.liveNum.liveTeaching,
    liveClass:state => state.liveNum.liveClass,
    cultureNum:state => state.cultureNum,  // 班级文化
    videoNum:state => state.videoNum,     // 图书馆统计
    lessonNum:state => state.lessonNum,     // 备课统计
    dayOnlineNum:state => state.dayOnlineNum,  // 每日在线量
    resourceSort:state => state.resourceSort   // 资源分类
}

export default getters

