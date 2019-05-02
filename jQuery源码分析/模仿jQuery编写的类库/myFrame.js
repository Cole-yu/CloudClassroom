// 参考链接：https://www.cnblogs.com/hrw3c/p/5304849.html

(function(global, factory){
		
	factory.call(global);

})(window, function(){

	// 需要每次实例化产生一个新的实例，不能使用单例模式（返回 yfx.fn 会造成单例模式）
	// 每次实例化，创建一个空间存放init方法的指针地址，而不是开辟一个空间存放函数；即能够产生实例又优化了性能。
	var yfx = function(){
		return new yfx.fn.init();
	}

	yfx.fn = {
		name : "yfx",
		age : "18",
		getName : function(){
			console.log(this.name);
			return this.name;
		},
		init : function(){
			console.log("Init had been execute !");
			return true;
		}
	}

	// 扩展对象的功能
	yfx.extend = yfx.fn.extend = function(){
		var len = arguments.length;

		var target = arguments[0] || {};

		var type = typeof target;
		
		if(type == "boolean" || type == "string" || type == "number"){
			console.error("Format is not right");
			return false;
		}

		// TODO 待增加健壮性
		for(var i=1; i<len; i++){
			var options = arguments[i];
			for(name in options){
				target[name] = options[name];
			}
		}

		return target;
	}

	// 需要进行原型绑定，否则会绑定到全局对象上，造成访问不到 yfx.fn 上的局部变量
	yfx.fn.init.prototype = yfx.fn;	

	// 在 window 上暴露
	window.yfx = window.$ = yfx;

	return yfx;
});