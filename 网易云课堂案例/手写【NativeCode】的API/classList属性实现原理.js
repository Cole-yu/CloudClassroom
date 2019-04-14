function MyDomTokenList(el){

}

MyDomTokenList.prototype = {
	add:function(clazz){
		[].push.call(this, clazz);
		this.value = [].join.call(this, " ");
	},
	remove:function(clazz){
		for(var i=0;i<this.length;i++){
			if(this[i] === clazz){
				[].splice.call(this,i,1);
				this.value = [].join.call(this, ' ');
				return clazz;
			}
		}
	},
	toggle:function(clazz){
		if(!this.remove(clazz)){
			this.add(clazz);
		}
	},
	contains:function(){
		return this.indexOf(clazz)!=-1;
	}
}

Object.defineProperty(HTMLElement.prototype, 'classList', {
	get : function(){			// 钩子函数
		if(!this.__tlc__){		// tokenListCache
			this.__tlc__ = this.className.split(' '); 	// 规则的array实例
			this.__tlc__ = new MyDomTokenList(this); 	// 把它阉割，删除array中的其他方法；由原本的array实例变成了MyDomTokenList
		}
		return this.__tlc__;
	},
	set : function(nv){
		el.className = nv;
	}
});