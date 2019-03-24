(function(global, factory){
	factory.call(global);
})(window,function(){
	var DEFS ={
		col:4,
		row:4
	}

	function CustomPage(el, options){
		this.__el__ = el = typeof el === "string"?document.getElementById(el):el;
		this.__el__.className += "module-panel";
		this.__modules__=this.__el__.children;	// 所有的模板
		this.layout();
		this.__b__ = document.createElement("i");
		this.__el__.appendChild(this.__b__);
		this.handler();		// 组件的事件交互都会在这个函数定义
	}

	CustomPage.prototype = {
		layout : function(){	// 布局
			var __m__, __r__, __c__ = 100/(this.__el__.dataset.col);
			var __t__ = 0, __l__ = 0;
			for(var i=0;i<this.__modules__.length;i++){
				__m__ = this.__modules__[i];
				__m__.className = "module";
				__r__ = __m__.dataset.row||DEFS.row;	//当行的权重
				// __m__.style.width = (__m__, __r__/12*100+"%");
				__m__.style.width = (__r__/12*100 + "%");
				__m__.style.height = __c__ + "%";
				__m__.style.top = __t__ + "%";
				__m__.style.left = __l__ + "%";
				__l__ += __r__/12*100;
				if(Math.ceil(__l__) === 100){
					__l__ = 0
				}
				console.log(__m__, (__r__/12*100)+"%");
			}
		},
		mask:function(){
			var mask = document.createElement("div");
			mask.className = 'mask';
			return mask;
		},
		handler:function(){
			var __that__ = this;
			this.__b__.onclick = function(){
				__that__.__state__ = __that.__state__?0:1;
				console.log(__that.__state__);
				if(__that__.__state__){
					__that__.__el__.className += "do-layout";
				}
				else{
					__that__.__el__.className += __that__.__el__.className.replace("do-layout","");
				}

				// todo 待补充

				document.onmouseup = function(){
					__p__.className = __p__.className.replace(" drag","");
					if(__move__){
						__p__.style.left = __p__.offset.left;
						__p__.style.top = __p__.offset.top;
						__target__ = __move__ = null;
					}
				}
			};

			__move__.offset = {
				left:__target__.offset.left,
				top:__target__.offset.top
			};

			__mask__.onmouseenter = function(){
				if(__move__){
					if(__move__.dataset.row===this.parentNode.dataset.row){
						__target__ = this.parentNode;
						var l = __target__.style.left;
						var t = __target__.style.top;
						__target__.style.left = __move__.offset.left;
						__target__.style.top = __move__.offset.top;
						__move__.offset.left = l;
						__move__.offset.top	= t;
					}
				}
			}
		}
	}

	this["CustomPage"] = CustomPage;			
});

new CustomPage("container", {});