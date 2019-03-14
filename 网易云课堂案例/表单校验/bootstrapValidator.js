(function(global, factory, plug){
	factory.call(global, global.jQuery, plug);
})(window, function($, plug){
	// 默认值
	var __DEFS__={
		__find__ : "input,select,list,textarea",
		__filter__ : "[type=submit],[type=reset],[type=button],[type=image]",
		__error__ : "-error",
		__hint__ : "* fail valid."
	};

	// 默认配置项
	var __OPS__={
		raise : "change"
	}

	// 规则引擎配置项（用户可扩展的）
	var __RULES___={
		// 必填项
		"required":function(){
			var val=this.val();
			return val=!null && val!=undefined && val!="";
		},
		// 检查邮箱的格式
		"email":function(){
			return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.val());
		},
		// 格式必须符合自定义的正则表达式要求
		"regex":function(config){
			return new RegExp(config).test(this.val());
		},
		// 必须是正数
		"integer":function(){
			return false;
		},
		// 必须是数字
		"number":function(){
			return false;
		},
		// 最小值
		"min":function(){
			return false;
		},
		// 最大值
		"max":function(){
			return false;
		},
		// 最少长度
		"min-length":function(){
			return false;
		},
		// 最大长度
		"max-length":function(){
			return false;
		}
	}


	// 闭包
	$.fn[plug]=function(options){
		var $this = $(this);
		options = $.extend(__OPS__, options);			// 扩展
		var $fields = $this.find(__DEFS__.__find__).not(__DEFS__.__filter__);
		$fields.on(options.raise, function(){
			// console.log(options.raise);
			var $filed = $(this);						// 当前被校验的目标元素
			// console.log($fields);

			var $group = $filed.parents(".form-group").removeClass("has-success has-error");// 找到group元素
			$filed.next(".help-block").remove();		// 清空提示信息

			var result, _e, _r = true;					// 档次校验结果，默认为成功
			$.each(__RULES___, function(rule, valid){	// 迭代规则
				
				// console.log(rule);

				_r = $filed.data(rule);
				
				if(_r){
					result = valid.call($filed, _r);
					// console.log(rule + "=>" result);
					$group.addClass(result ? "has-success" : "has-error")
					if(!result){
						_e = $filed.data(rule + __DEFS__.__error__) || __DEFS__.__hint__;
						$filed.after("<span class=\"help-block\">" + _e + "</sapn>");
					}
					return result;
				}
				// console.log(rule + "=>" + $filed.data(rule));
			});
		});
		
	}
},"bootstrapValidator");