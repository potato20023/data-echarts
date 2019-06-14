let service = {}

if(process.env.NODE_ENV == 'development'){
    // 开发环境
    service.url = 'http://192.168.17.216:9006'
}else{
    // 部署环境
    service.url = ''
}

export default service