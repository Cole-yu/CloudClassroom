var request = require('request');
var redis = require('redis');

function home(req, res, next) {

    // redis 处理请求缓存
    // if(redis.get('xxx')){
    //     res.render('home.art',data);        
    // }
    // else{
    //     // 发起请求            
    // }

    // 请求合并
    // 收到客户端的一个请求，Node中间层向后台服务器发起多个请求，将多个结果合并后返回给浏览器

    function init(){
        request({
            url:'http://localhost:8080/',       // 请求渲染模板的数据
            methods:'GET'
        }, function(error, response, body){
            if(!error && response.statusCode == 200){
                var data = JSON.parse(body);
                res.render('index.art', data);
            }
        })
    }
    
    // init();    // TODO: 未执行验证
    res.render('index.art', { title: 'Express' });
}

module.exports = home;