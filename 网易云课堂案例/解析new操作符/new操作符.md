访问到wy 构造函数里面的属性
访问到wy 原型上的属性

function WY(name, age){
	this.name = name;
	this.age = age;
}

newYW(WY, yfx, 20);

WY.prototype.ablility = 100;

WY.prototype.sayName = function(){
	console.log("hello" + this.name);
}

function newWY(){
	var obj = {};
	var Constructor = [].shift.call(arguments);
	obj.__proto___ =  Constructor.prototype;
	var result = Constructor.apply(obj, arguments);
	return typeof result === "object" ? result || obj : obj;
}


// new 的原理 返回值是引用对象，是原始值，是null 三种情况分类
function newWY(){	
	var Constructor = [].shift.call(arguments);	
	var obj = Object.create(Constructor.prototype);  // 原型链的属性和方法，访问不到
	var result = Constructor.apply(obj, arguments);
	return typeof result === "object" ? result || obj : obj;
}
```
	null 是 Object
```