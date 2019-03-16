import axios from 'axios';
export default(function(){
	// Vue有且仅有一个根实例，因此 Vue 不采用无new化构建方式返回一个实例，而是让用户自己手动构造var app =new Vue({el:"#app"});
	// 采用无new化构建对象，类似于jQuery，内部返回一个对象；避免每次请求都需要先new一个对象，造成麻烦（设计模式）
	function qa(arr){
		var _iqaob = new _iqa();
		var _urlarr = arr || [];
		for(var i = 0, len = _urlarr.length; i<len; i++){
			var _name = qa.getPathname(_urlarr[i]);
			// 使用闭包，向实例注入各个接口的方法
			(function(url){
				// 向返回对象中注入方法
				_iqaob[_name] = function(ob){
					_iqaob.sendMessage.call(_iqaob, url, ob);
				}
			})(_urlarr[i]);
		}
		return _iqaob;
	}

	function _iqa(){
		// 属性
		this._vueob = {};
 
		// 内部状态请求管理码
		this.statue = 0;
	}

	// 可扩展的配置 ob
	_iqa.prototype.sendMessage = function(url, ob){
		var self = this;
		var _url = url || "";
		var _ob = ob || {};
		var _type = ob.type || "get";
		var _data = ob.data || {};
		
		// 是否存在回调函数
		var _success = _ob.success || function(){};
		
		// 是否阻止同时或多次提交，默认false
		var _isblock = _ob.block || false;

		// 状态模式 || 状态器模式
		var status = {
			get : function(){				
				var _query = qa.qs(_data);
				axios.get(_url + _query).then(function(res){
					// 请求成功后，将内部状态码初始化为0
					self.statue = 0;					

					// 如果存在suceess回调函数，则表示用户拿到数据后要执行回调函数，再绑定到数据上；
					var _result = _success.call(self._vueob, res);			// 如果用户没有设置 success 回调函数，__result 就为 undefined
					
					var _name = qa.getPathname(_url);

					// 如果存在_result，表示用户拿到数据后设置了回调函数想执行自己的操作；否则就直接绑定到数据上
					if(_result){
						self._vueob[_name + "Data"] = _result;
					}
					else{
						// 把响应数据存放到 _vueob 属性对象上
						self._vueob[_name + "Data"] = res.data;
					}
				});
			},
			post : function(){
				axios.post(_url,_data).then(function(res){
					self.statue = 0;					

					// 如果存在suceess回调函数，则表示用户拿到数据后要执行回调函数，再绑定到数据上；
					var _result = _success.call(self._vueob, res);			// 如果用户没有设置 success 回调函数，__result 就为 undefined
					
					var _name = qa.getPathname(_url);

					// 如果存在_result，表示用户拿到数据后设置了回调函数想执行自己的操作；否则就直接绑定到数据上
					if(_result != undefined){
						self._vueob[_name + "Data"] = _result;				// 将获取到的数据绑定到 【 接口名 + Data 】 的 data属性中
					}
					else{
						// 把响应数据存放到 _vueob 属性对象上
						self._vueob[_name + "Data"] = res.data;
					}
				})

			},
			put : function(){

			},
			delete : function(){

			}
		}

		// 只有内部请求状态码为0 且 不阻止同时或多次提交
		if(self.statue == 0 && !_isblock){
			// 如果阻止同时多次提交，将statue改为1；那么在本次请求未完成前，就无法再次请求了
			if(_isblock){
				self.statue = 1;
			}
			status[_type]();
		}
		else{

		}	
	}

	// 把值绑定到属性 _vueob 中
	_iqa.prototype.v = function(vueob){
		this._vueob = vueob;
		return this;
	}

	// 静态方法，获取接口名
	qa.getPathname = function(url){
		var _arr = url.split('/');
		var _name = _arr[_arr.length - 1];	// json1.json  实际开发中已经是接口名

		// 如果匹配到.json，表示请求的是本地json文件，则需要获取前面的文件名，不需要后缀
		if(_name.indexOf(".json") != -1){						
			var _newName = _name.split('.')[0]	// girlFriend.json => girlFriend
			return _newName;	
		}
		else{
			// 表示请求的是服务器接口，直接返回就行
			return _name;						// userName
		}
				
	}

	// get请求中处理参数对象，{a:1,b=2} 处理为 url?a=1&b=2
	qa.qs = function(ob){
		var _str = "";
		if(JSON.stringify(ob) == "{}"){

		}
		else{
			_str += "?";
			var _len = 0;
			for(var item in ob){
				if(_len != 0){
					_str += "&"
				}
				_str += item;
				_str += "=";
				_str += ob[item];
				_len++;
			}
		}
		return _str;
	}
	return qa;
})();