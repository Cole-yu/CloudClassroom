(function(global, factory){
	factory.call(global);
})(window,function(){
	var DEFS ={
		col:4,
		row:4
	}

	function CustomPage(el, options){
		this.__el__ = el = typeof el === "string"?document.getElementById(el):el;
		this.__el__.className += " module-panel";
		this.__masks__ = []; // 保存所有的遮罩层
		this.__modules__ = this.__el__.children;	// 所有的模板
		this.layout();
		this.__b__ = document.createElement("i");
		this.__el__.appendChild(this.__b__);
		this.handler();		// 组件的事件交互都会在这个函数定义
	}

	CustomPage.prototype = {
		layout : function(){	// 布局
			var __m__, __r__, __c__ = 100/(this.__el__.dataset.col);
			var __t__ = 0, __l__ = 0;
			for(var i=0; i<this.__modules__.length; i++){
				__m__ = this.__modules__[i];
				__m__.className = "module";
				__r__ = __m__.dataset.row||DEFS.row;	//当行的权重
				// __m__.style.width = (__m__, __r__/12*100+"%");
				__m__.style.width = (__r__/12*100 + "%");
				__m__.style.height = __c__ + "%";
				__m__.style.top = __t__ + "%";
				__m__.style.left = __l__ + "%";
				__l__ += __r__/12*100;
				__m__.appendChild(this.mask());
				if(Math.ceil(__l__) === 100){
					__l__ = 0;
					__t__ += __c__;
				}
				// console.log(__m__, (__r__/12*100)+"%");
			}
		},
		mask:function(){
			var mask = document.createElement("div");
			mask.className = 'mask';
			this.__masks__.push(mask);
			return mask;
		},
		handler:function(){
			// __move__ 移动的目标，  __target__ 移向的目标
			var __that__ = this, __mask__, __move__, __target__;
			this.__b__.onclick = function(){
				__that__.__state__ = __that__.__state__?0:1;
				// console.log(__that__.__state__);
				if(__that__.__state__){
					__that__.__el__.className += " do-layout";
				}
				else{
					__that__.__el__.className = __that__.__el__.className.replace(" do-layout","");
				}					
			};

			var __offset__ = {
				left : __that__.__el__.offsetLeft,
				top : __that__.__el__.offsetTop,
			}

			console.log(this.__masks__);
			for(var i =0; i<this.__masks__.length; i++){
				__mask__ = this.__masks__[i];
				__mask__.onmousedown = function(){
					var __p__  = __move__ = this.parentNode;
					__p__.className += " drag";
					__p__.offset = {
						left : __p__.style.left,
						top : __p__.style.top
					};
					document.onmousemove = function(e){
						__p__.style.left = (e.pageX - __offset__.left +10) + "px";
						__p__.style.top = (e.pageY - __offset__.top +10) + "px";						
					}
					document.onmouseup = function(){
						__p__.className = __p__.className.replace(" drag","");
						// document.onmouseup = null;
						if(__move__){							
							__p__.style.left = __p__.offset.left;
							__p__.style.top = __p__.offset.top;															
							__target__ = __move__ = null;
							
						}
						document.onmousemove = document.onmouseup = null;
					}
				}
				__mask__.onmouseenter = function(){
					if(__move__){
						if(__move__.dataset.row === this.parentNode.dataset.row){
							__target__ = this.parentNode;							
							var l = __target__.style.left;
							var t = __target__.style.top;
							__target__.style.left =  __move__.offset.left;
							__target__.style.top =  __move__.offset.top;
							__move__.offset.left = l;
							__move__.offset.top = t;							
						}
					}
				}
			}	
		}
	}

	this["CustomPage"] = CustomPage;			
});

new CustomPage("container", {});