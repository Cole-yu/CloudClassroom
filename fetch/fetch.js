/*
 * 获取数据
 * @param url 资源地址
 * @param options 资源地址
*/
function FetchGet(url,options,callback){
	var option={ method:"GET" };
	if(option.method === "GET" && options.param){
		var arrParam=[]; 		// 存放转换之后的格式
		// citykey = 101210101
		Object.keys(options.param).forEach(function(key){
			arrParam.push(key + "=" +options.param[key]);
		});
		console.log(arrParam);
		if(url.search(/\?/) === -1){
			url += "?"+ arrParam.join("&");			
		}
		else{
			url += "&" + arrParam.join("&");
		}
	}

	fetch(url,option).then(function(res){
		console.log(res);
		return res.text();
	})
	.then(function(data){
		// console.log(data);
		callback(data);
	})
	.catch(function(err){
		console.log(err);
	})	
}