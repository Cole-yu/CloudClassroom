function data(req, res) {
    // 获取get请求的参数  http://localhost:3000/data?user=admin
    console.log(req.query);
    // node中 req是一个流对象，需要把它转化成 JS对象, 可以使用body-parser进行转化

    res.send('respond with a resource');
}

module.exports = data;