//hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}

// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

// var userBox = document.querySelectorAll('.user-box'),
// 	stepBtn = document.querySelectorAll('.apply-setps-btn'),
// 	oli = document.querySelector('.user-apply-sidenav').querySelectorAll('li');
	
// userBox = [].slice.call(userBox);
// stepBtn = [].slice.call(stepBtn);
// stepBtn.forEach(function(elem, index) {
// 	elem.addEventListener('click', function(event) {
// 		if(hasClass(event.target,'btn-next')) {
// 			userBox[index].style.display = 'none';
// 			removeClass(oli[index], 'now');
// 			userBox[index+1].style.display = 'block';
// 			addClass(oli[index+1], 'now');
// 		} else if(hasClass(event.target, 'btn-pre')) {
// 			userBox[index].style.display = 'none';
// 			removeClass(oli[index], 'now');
// 			userBox[index-1].style.display = 'block';
// 			addClass(oli[index-1], 'now');
// 		}
// 	})
// });



$().ready(function() {
	var userBox = document.querySelectorAll('.user-box');
	$('.btn-pre').each(function(index, elem) {
		elem.index = index;
		elem.onclick = function() {
			$('.user-box').each(function(i, e){
				e.style.display = 'none';
			})
			userBox[this.index].style.display = 'block';
		}
	})
	jQuery.extend(jQuery.validator.messages, {
	  required: "必填字段",
	  remote: "请修正该字段",
	  email: "请输入正确格式的电子邮件",
	  url: "请输入合法的网址",
	  date: "请输入合法的日期",
	  dateISO: "请输入合法的日期 (ISO).",
	  number: "请输入合法的数字",
	  digits: "只能输入整数",
	  creditcard: "请输入合法的信用卡号",
	  equalTo: "请再次输入相同的值",
	  accept: "请输入拥有合法后缀名的字符串",
	  maxlength: jQuery.validator.format("请输入一个 长度最多是 {0} 的字符串"),
	  minlength: jQuery.validator.format("请输入一个 长度最少是 {0} 的字符串"),
	  rangelength: jQuery.validator.format("请输入 一个长度介于 {0} 和 {1} 之间的字符串"),
	  range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
	  max: jQuery.validator.format("请输入一个最大为{0} 的值"),
	  min: jQuery.validator.format("请输入一个最小为{0} 的值")
	});
	$('#step1').validate({
		submitHandler:function(form){
           $('.step1').hide();  
           $('.step2').show();
       }    
	})
	$('#step2').validate({
		submitHandler:function(form) {
			$('.setp2').hide();
			$('.step3').show();
		}
	})
});