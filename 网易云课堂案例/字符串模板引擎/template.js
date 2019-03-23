// 模板引擎

(function(global){
	console.log(global);

	// 扩展对象的方法
	function extend(){
		var target = arguments[0] || {};
		var len = arguments.length;
		var i = 1;
		if(typeof target !== "object"){
			target = {};
		}
		// 遍历待合并的配置对象的键
		for(; i<len; i++){
			if((options = arguments[i]) != null){
				for(key in options){
					target[key] = options[key];
				}
			}
		}
		return target;
 	}

	// 解析规则，三种解析方法
	var	templateSettings = {
		evalute:/<%([\s\S]+?)%>/g,		// 逻辑
		interpolate:/<%=([\s\S]+?)%>/g,	// 变量
		escape:/<%-([\s\S]+?)%>/g,		// 逃逸的字符，即不需要转化的字符 " '
	}

	// 字符传的逃逸  如引号 " 需要正常输出，控制台报错的原因

	// 第一步 枚举需要逃逸的字符
	var rescapes={
		// 需要逃逸的字符，如 引号" '
	}

	// 第二步 通过正则捕获
	// escapesExp= /正则/

	// 第三部 字符串的替换

	var template = function(text, settings){
		// console.log(templateSetting);
		// 对象扩展
		settings = extend({}, templateSettings, settings);
		
		// new RegExp() 与 RegExp() 的区别
		var matcher = new RegExp([
				settings.escape.source,
				settings.interpolate.source,
				settings.evalute.source				// 优先匹配其他的类型，
			].join("|"), "g");
		
		console.log(matcher);

		var source = "_p+='";	//执行头
		var index = 0;
		text.replace(matcher, function(matcher, escape, interpolate, evalute, offset){
			console.log(interpolate);
			source += text.slice(index, offset);
			index = offset + matcher.length;
			console.log(index);
			if(escape){
				// 处理字符串逃逸
				// 第一步：枚举需要逃逸的字符
			}else if(interpolate){
				// 处理变量
				source += "'+\n((_t=(" + interpolate + ")) == null?'':_t) + \n'";

			}else if(evalute){
				// 处理逻辑
				source += "';\n" + evalute +"\n_p+='";
				console.log(source);
			}
		});

		source += "';";
		console.log(source);
		source = "with(obj||{}){\n" + source +"}\n";
		source = "var _t,_p='';" + source + "return _p;\n";
		console.log(source);
		var render = new Function(settings.variable || "obj", source);
		// 预编译 缓存模板
		var template = function(data){
			return render.call(this, data);
		}
		
		return template;		
	}
	global.template = template;	// 模板引擎核心函数  提升性能  字符串逃逸
})(this);	// this = window