// 防抖和节流的意义

// 	防抖的作用：为了减少不必要的计算，不浪费资源，只在适合的时候再进行计算，阻止和减少不必要的计算；
// 	节流的作用：至少间隔一定周期再执行，保证一定时间段内只调用一次事件处理函数；

// 防抖与节流的应用场景

// 	防抖
// 		1. search搜索，用户再不断输入时，用防抖来节约请求资源
// 		2. window触发resize的时候
// 		3. 浏览器调整大小会不断触发resize事件，用防抖来让其只触发一次
// 		4. 防止重复提交
	
// 	节流
// 		1. 鼠标不断点击触发，mousedown(单位时间内只触发一次)		
// 		2. 监听滚动事件，比如滑倒底部自动加载更多，用throttle来判断


var count = 1;
var container = document.getElementById("container");

function getUserAction(){
	console.log(this);
	container.inderHTML = count++;
}

container.onmousemove = debounce(getUserAction, 1000, flag);

// 防抖
function debounce(func, wait){
	var timeout;
	return function(){
		var self = this;
		clearTimeout(timeout);

		if(flag){		// 开始边界 进去就是做
			var callNow = !timeout;		// 假设页面刷新 第一次进来 timeout 为假
			// console.log(callNow);

			timeout = setTimeout(function(){
				timeout = null;
			},wait)
			
			if(callNow){
				func.apply(self);
			}
		}
		else{
			timeout = setTimeout(function(){
				// setTimeout中 this指向会发生改变
				func.apply(self);
			}, wait);
		}		
	}
	// 可以控制边界
	// 开始边界 与 结束边界
};


container.onmousemove = throttle(getUserAction, 1000, flag);
// 节流
function throttle(func, wait){
	var prexious = 0;				// 用作标记 ==> 相对论
	return function(){
		var self = this;
		var now = +new Date();		// 将会调用Date原型上的vlaueOf方法
		// 获取1970年1月1号到现在的毫秒数 等价于 getTime方法
		if(now - prexious > wait){
			func.apply(self);
			prexious = now;
		}
	}
}


// 代码千万行，注释第一行，命名不规范，同事两行泪

// 防止某一时间 频繁触发
// 防抖 某一时间只指向一次 周期内没有再次触发 下次就可以执行
// 节流 间隔一定周期执行