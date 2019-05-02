(function(global){

	var template = '<html xmlns:o="urn:schems-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="html"><head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>sheet1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets><x:ExcelWorkbook></xml></head><body>{htmldata}</body><html>';
	var Excel_URL =	"data:application/vnd.ms-excel;base64,";
	// base64
	var Export = {
		toExcel:function(data){
			var isIE = window.navigator.userAgent.toLocaleLowerCase().indexOf("trident");
			if(isIE !== -1){
				// IE系列的浏览器
				this._IEExport(data);
			}
			else{
				// 其他浏览器
				this._otherExport(data);
			}
		},
		_IEExport:function(data){
			console.log("IE系列的浏览器");
			// 1 打开exlce
			var oXL = new ActiveXObject("Excel.Application");
			// 2 新建工作簿
			var oWB = oXL.Workbooks.Add();
			// 3 激活新建的工作簿
			var oSheet = oWB.ActiveSheet;

			if(typeof data == 'string'){
				// table id
				var table = document.querySelector(data);
				// 创建一个装内容的容器
				var sel = document.body.createTextRange();
				// 将table 中的内容移入到容器中
				sel.moveToElementText(table);
				// 选中移入的内容
				try{
					sel.select();
				}
				catch(error){
					console.log(error);
				}
				// 复制容器中的内容
				sel.execCommand("Copy");
				// 粘贴到Excel工作簿中
				oSheet.Paste();
			}
			else{
				// []
				var j = 0;
				for(key in data[0]){
					oSheet.Cells(1,++j).value = data[0][key];					
				}
				for(var i=1; i<data.length; i++){
					var j = 0;
					var row = data[i];
					if(key === 'datetime'){
						oSheet.Cells(i+1,++j) = this._changeDate(row[key])
					}
					else{
						oSheet.Cells(i+1,++j) = row[key];
					}
				}
			}

			// 设置文件名
			var filename = oXL.Application.GetSaveAsFilename("微专业.xls","Excel Spreadsheets (*.xls),*.xls");
			// 报错工作簿
			oWB.SaveAs(filename);
			oWB.Close();
			oXL.Quit();
		},
		_otherExport:function(data){
			console.log("非IE系列的浏览器");
			var content = "";			

			if(typeof data === "string"){				
				// 传表格id
				var ele = document.querySelector(data);
				content = template.replace("{htmldata}", ele.outerHTML);
			}
			else{
				console.log(data);
				var arr = [];
				var self = this;			
				
				arr.push("<table>");
				data.forEach(function(value, index){
					arr.push("<tr style='color:red;'>");
						for(key in value){											
							arr.push("<td>" + (key === "datetime"&&index != 0 ? self._changeDate(value[key]):value[key]) + "</td>");
						}
					arr.push("<tr>");
				});
				arr.push("</table>");
				content = template.replace("{htmldata}",arr.join(''));				
			}

			// 模拟a标签download功能
			var aEle = document.createElement("a");
			aEle.href = Excel_URL + window.btoa(unescape(encodeURIComponent(content)));    // 编码 atob解码
			aEle.download = "wangyi.xls";
			aEle.click();
		},
		_changeDate:function (timestamp){
			var date = new Date(timestamp);
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var day = date.getDate();
			return year + "-" + month + "-" + day;
		}
	}

	global.Export = Export;
})(this)


// data:资源类型：编码,内容
// data:text/html;utf-8,<html><body>wangyiyunzhuanye</body></html>

// data:test/html,utf-8,<html><body>wangyiyunzhuanye</body></html>  下载成一个文件内容为 utf-8,<html><body>wangyiyunzhuanye</body></html>

// .xls文件的content-type：application/vnd.ms-excel