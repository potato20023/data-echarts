import requestD from '../utils/request'

// 获取首页信息
export function getIndexD(data) {
    return requestD({
        method: 'get',
        url: '/v6/screen/home/index',
        params: data
    })
};


// 注册班级,在线班级
export function getbindNumD(data) {
    return requestD({
        method: 'get',
        url: '/v6/screen/bindNum/list',
        params: data
    })
};

// 资源使用率
export function getresourceNumD(data) {
    return requestD({
        method: 'get',
        url: '/v6/screen/resourceNum/list',
        params: data
    })
};

// 直播统计
export function getliveNumD(data) {
    return requestD({
        method: 'get',
        url: '/v6/screen/liveNum/list',
        params: data
    })
};

// 班级文化
export function getcultureNumD(data) {
    return requestD({
        method: 'get',
        url: '/v6/screen/cultureNum/list',
        params: data
    })
};

// 图书馆统计
export function getvideoNumD(data) {
    return requestD({
        method: 'get',
        url: '/v6/screen/videoNum/list',
        params: data
    })
};

// 备课统计
export function getlessonNumD(data) {
    return requestD({
        method: 'get',
        url: '/v6/screen/lessonNum/list',
        params: data
    })
};

// 每日在线统计
export function getdayOnlineNumD(data) {
    return requestD({
        method: 'get',
        url: '/v6/screen/clientOnline/list',
        params: data
    })
};

// 资源分类
export function getresourceSortD(data) {
    return requestD({
        method: 'get',
        url: '',
        params: data
    })
};

