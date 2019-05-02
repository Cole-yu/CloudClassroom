(function(global, factory){
	factory.call(global);
})(this, function(){
	var version = "3.3.1";

	jQuery = function(selector, context){

	}

	jQuery.fn = {
		init: function(){

		}
	}

	init = jQuery.fn.init = function(selector, content, root){

	}	

	jQuery.fn = jQuery.prototype = {
		jQuery: version,
		constructor: jQuery,
		length: 0,
		addClass: function(){
			console.log("this is addClass");
			return this;
		},
		css: function(){
			console.log("this is css");
			return this;	
		},
		on: function(){
			console.log("this is on");
			return this;
		}
	}

	init.prototype = jQuery.fn;

	window.jQuery = window.$ = jQuery
	
	return jQuery;
});



// jQuery 扩展插件
(function(global, factory, pluginName){
	factory.call(global, global.jQuery, pluginName);
})(this, function($, pluginName){	
	// 向 jQuery实例 添加方法
	$.fn.pluginName = function(){

	}

	// 向 jQuery类 添加方法
	$.pluginName = function(){

	}

	$.fn.extend({
		pluginName: function(){

		}
	})
	$('element').pluginName();

	$.extend({
		pluginName: function(){

		}
	})
	$.pluginName()

}, "myPlugin");