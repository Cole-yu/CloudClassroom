var WC = (function(global, factory){
	return factory.call(global);
})(this, function(){
	var __TOOL__ = {};
	__TOOL__.registerComponent = function(targetName, document, callback){
		// 第一步 获取对象
		var indexDoc = document;
		// currentScript: 获取正在执行JS代码的 script标签对象
		// ownerDocument: 以document对象返回 = 节点的ownerDocument
		var currentDoc = indexDoc.currentScript.ownerDocument;
		var temp = currentDoc.getElementById(targetName);
		console.log(temp);

		// 第二步 要注册元素
		var xinProto = Object.create(HTMLElement.prototype); // 确立祖宗 都要继承于它

		// 显示组件
		xinProto.createdCallback = function(){			
			// 谁被注册 this就代表谁
			// console.log(this);			

			// 创建一个影子DOM
			var root = this.createShadowRoot();
			//importNode 1.要导入的节点 2.是否复制所有的子孙节点
			root.appendChild(indexDoc.importNode(temp.content, true));
			callback.call(this, root);			

			// this.innerHTML = temp.innerHTML;
		}

		// 第二步 注册元素
		var xin  = indexDoc.registerElement(targetName, {
			prototype : xinProto
		});
	}
	return __TOOL__;	
});