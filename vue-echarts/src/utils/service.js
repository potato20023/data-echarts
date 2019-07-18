let service = {}

if(process.env.NODE_ENV == 'development'){
    // 开发环境
    service.url = 'http://192.168.18.101:10000'
}else{
    // 部署环境
    service.url = 'http://10.95.33.1:10000'
    // service.url = 'http://172.31.32.31:10000'   // 叶县
    // service.url = 'http://192.168.18.101:10000'   // 郑州
}

export default service