$(document).ready(function(){
	//////////////////////01_yotei.html/////////////////////////////
	
	////////////////////////////////////////////////////////////////
	//////////////////////02_yotei.html/////////////////////////////
	var arrImg = [];
	var arrName = [];
	var img = '';
	$("#selectTable tbody tr:nth-child(1)").each(function(){
		$('#employeeName').text($(this).find('td:first-child + td').text());
		$('#imgPersonSelect').attr("src", $(this).find('img').attr('src'));
	});

	$('#selectTable tbody').on( 'click', 'tr', function () {
		$('#selectTable tr').not(this).removeClass('highlight');
		$(this).toggleClass('highlight');
		var link = $(this).find('img').attr('src');
		var name = $(this).find('td:first-child + td').text();
		arrImg.push(link);
		arrName.push(name);
		img =  arrImg[arrImg.length - 1];
		$('#employeeName').text(arrName[arrName.length - 1]);
		$('#imgPersonSelect').attr("src", img);
	} );
	$('.tdKyoten1').css('width', '5%');
	$('.tdKyoten2').css('width', '20%');
	$('.tdKyoten3').css('width', '20%');
	$('.tdKyoten4').css('width', '20%');
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
		dd='0'+dd
	} 

	if(mm<10) {
		mm='0'+mm
	} 
	mm = mm - 1;
	$('#todayString').text(formatDay(new Date(yyyy, mm, dd)));
	function formatDay(before) {
		var days = ["日","月","火","水","木","金","土"];
		var strYear = before.getFullYear();
		var strMonth = before.getMonth() + 1;
		var strdayInNum = before.getDate();
		var strdayInText = days[before.getDay()];
		if (parseInt(strMonth) < 10) {
			strMonth = '0' + strMonth;
		}
		var temp = strYear + '/' + strMonth + '/' + strdayInNum + '(' + strdayInText + ')';
		return temp;
	}
	var checkScreen = 0;
	var width = $(window).width();
	setWidthTable(width);
	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	$('#myBtn').click(function() {
		checkScreen = 1;
		document.getElementById('myModal').style.display = "block";
	});
	$('#myBtnLeave').click(function() {
		checkScreen = 2;
		document.getElementById('myModal').style.display = "block";
	});
	////////////////////////////////////////////////////////////////
	//////////////////////04_yotei.html/////////////////////////////
	$('#myBtn04').click(function() {
		checkScreen = 3;
		document.getElementById('myModal').style.display = "block";
	});
	$('#myBtnLeave04').click(function() {
		checkScreen = 4;
		document.getElementById('myModal').style.display = "block";
	});
	$('#myBtnLeave').attr('disabled', 'disabled');
	$('#myBtnLeave04').attr('disabled', 'disabled');
	$('#btnGoout02').attr('disabled', 'disabled');
	$('#btnReturn02').attr('disabled', 'disabled');
	$('#btnGoout04').attr('disabled', 'disabled');
	$('#btnReturn04').attr('disabled', 'disabled');
	$('.btClose').click(function() {
		if (checkScreen == 1) {
			$('#timeCome').text($('#oclockTime').text());
			$('#myBtn').attr('disabled', 'disabled');
			$('#myBtnLeave').removeAttr('disabled');
			$('#btnGoout02').removeAttr('disabled');
		}
		else if (checkScreen == 2) {
			$('#timeLeave').text($('#oclockTime').text());
			$('#myBtnLeave').attr('disabled', 'disabled');
			$('#btnGoout02').attr('disabled', 'disabled');
		}
		else if (checkScreen == 3) {
			$('#timeCome04').text($('#txt').text());
			$('#myBtn04').attr('disabled', 'disabled');
			$('#myBtnLeave04').removeAttr('disabled');
			$('#btnGoout04').removeAttr('disabled');
		}
		else if (checkScreen == 4) {
			$('#timeLeave04').text($('#txt').text());
			$('#myBtnLeave04').attr('disabled', 'disabled');
			$('#btnGoout04').attr('disabled', 'disabled');
		}
		document.getElementById('myModal').style.display = "none";
	});
	$('#btnGoout02').click(function() {
		$('#btnGoout02').attr('disabled', 'disabled');
		$('#myBtn').attr('disabled', 'disabled');
		$('#myBtnLeave').attr('disabled', 'disabled');
		$('#btnReturn02').removeAttr('disabled');
	});
	$('#btnReturn02').click(function() {
		$('#btnReturn02').attr('disabled', 'disabled');
		$('#btnGoout02').removeAttr('disabled');
		$('#myBtn').attr('disabled', 'disabled');
		$('#myBtnLeave').removeAttr('disabled');
		$('#btnReturn02').attr('disabled', 'disabled');
	});
	$('#btnGoout04').click(function() {
		$('#btnGoout04').attr('disabled', 'disabled');
		$('#myBtn04').attr('disabled', 'disabled');
		$('#myBtnLeave04').attr('disabled', 'disabled');
		$('#btnReturn04').removeAttr('disabled');
	});
	$('#btnReturn04').click(function() {
		$('#btnReturn04').attr('disabled', 'disabled');
		$('#btnGoout04').removeAttr('disabled');
		$('#myBtn04').attr('disabled', 'disabled');
		$('#myBtnLeave04').removeAttr('disabled');
		$('#btnReturn04').attr('disabled', 'disabled');
	});
	// Change the selector if needed
	var $table = $('.table'),
		$bodyCells = $table.find('tbody tr:first').children(),
		colWidth;

	// Get the tbody columns width array
	colWidth = $bodyCells.map(function() {
		return $(this).width();
	}).get();

	// Set the width of thead columns
	$table.find('thead tr').children().each(function(i, v) {
		$(v).width(colWidth[i]);
	});
	$('#headerMenu').append('<li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle">メニュー <b class="caret"></b></a><ul class=\"dropdown-menu pull-right\"><li class="dropdown-header">利用者メニュー</li><li><a href="./03_yotei_touroku.html">&nbsp;&nbsp;予定登録</a></li><li><a href="./02_ippan_dakoku.html">&nbsp;&nbsp;一般利用者打刻画面</a></li><li class="divider"></li><li class="dropdown-header">拠点メニュー</li><li><a href="./04_kyoten_dakoku.html">&nbsp;&nbsp;拠点打刻画面 表示</a></li><li class="divider"></li><li class="dropdown-header">監督者メニュー</li><li><a href="./05_yojitsu_kakunin.html">&nbsp;&nbsp;組織内当日予実確認画面</a></li><li><a href="./06_yojitsu_shounin.html">&nbsp;&nbsp;組織内予実承認</a></li><li><a href="./07_shukei.html">&nbsp;&nbsp;組織内集計</a></li><li><a href="./08_kinmutaikei_kyoten.html">&nbsp;&nbsp;勤務体系・拠点 割り当て</a></li><li class="divider"></li><li class="dropdown-header">システム管理者メニュー</li><li><a href="./09_soshiki_touroku.html">&nbsp;&nbsp;組織編集</a></li><li><a href="./10_user_touroku.html">&nbsp;&nbsp;ユーザ登録</a></li><li><a href="./11_kinmutaikei_sakusei.html">&nbsp;&nbsp;勤務体系作成</a></li><li><a href="./12_kibun_list.html">&nbsp;&nbsp;気分リスト作成</a></li><li><a href="./13_sabun_riyuu_list.html">&nbsp;&nbsp;差異理由リスト作成</a></li><li><a href="./14_kyoten_touroku.html">&nbsp;&nbsp;拠点リスト作成</a></li><li class="divider"></li><li><a href="./01_login.html">ログアウト</a></li></ul></li>');
	$('#footer').append('<div class="row"><div class="col-sm-4">2017 TAS Vietnam</div><div class="col-sm-8 textRight paddingRight3em">勤怠管理@クラウド (仮)</div></div>');
	
});

$(window).resize(function() {
	$('.tdKyoten1').css('width', '5%');
	$('.tdKyoten2').css('width', '20%');
	$('.tdKyoten3').css('width', '20%');
	$('.tdKyoten4').css('width', '20%');
	var $windowWidth = $(window).width();
	setWidthTable($windowWidth);
	var $table = $('.table'),
		$bodyCells = $table.find('tbody tr:first').children(),
		colWidth;

	// Get the tbody columns width array
	colWidth = $bodyCells.map(function() {
		return $(this).width();
	}).get();

	// Set the width of thead columns
	$table.find('thead tr').children().each(function(i, v) {
		$(v).width(colWidth[i]);
	}); 
}).resize();

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == document.getElementById('myModal')) {
		document.getElementById('myModal').style.display = "none";
	}

}
function setWidthTable($windowWidth) {
	if (parseInt($windowWidth) >= 1920) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '320px');
		$('.padTopLeftRight250').css('padding-right', '320px');
	}
	else if (parseInt($windowWidth) >= 1870 && parseInt($windowWidth) < 1920) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '310px');
		$('.padTopLeftRight250').css('padding-right', '310px');
	}
	else if (parseInt($windowWidth) >= 1800 && parseInt($windowWidth) < 1870) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '290px');
		$('.padTopLeftRight250').css('padding-right', '290px');
	}
	else if (parseInt($windowWidth) > 1750 && parseInt($windowWidth) < 1800) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '250px');
		$('.padTopLeftRight250').css('padding-right', '250px');
	}
	else if (parseInt($windowWidth) >= 1700 && parseInt($windowWidth) <= 1750) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '230px');
		$('.padTopLeftRight250').css('padding-right', '230px');
	}
	else if (parseInt($windowWidth) >= 1650 && parseInt($windowWidth) < 1700) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '210px');
		$('.padTopLeftRight250').css('padding-right', '210px');
	}
	else if (parseInt($windowWidth) >= 1600 && parseInt($windowWidth) < 1650) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '190px');
		$('.padTopLeftRight250').css('padding-right', '190px');
	}
	else if (parseInt($windowWidth) >= 1550 && parseInt($windowWidth) < 1600) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '170px');
		$('.padTopLeftRight250').css('padding-right', '170px');
	}
	else if (parseInt($windowWidth) >= 1500 && parseInt($windowWidth) < 1550) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '150px');
		$('.padTopLeftRight250').css('padding-right', '150px');
	}
	else if (parseInt($windowWidth) >= 1450 && parseInt($windowWidth) < 1500) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '130px');
		$('.padTopLeftRight250').css('padding-right', '130px');
	}
	else if (parseInt($windowWidth) >= 1400 && parseInt($windowWidth) < 1450) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '100px');
		$('.padTopLeftRight250').css('padding-right', '100px');
	}
	else if (parseInt($windowWidth) >= 1350 && parseInt($windowWidth) < 1400) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '80px');
		$('.padTopLeftRight250').css('padding-right', '80px');
	}
	else if (parseInt($windowWidth) >= 1300 && parseInt($windowWidth) < 1350) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '60px');
		$('.padTopLeftRight250').css('padding-right', '60px');
	}
	else if (parseInt($windowWidth) >= 1250 && parseInt($windowWidth) < 1300) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '40px');
		$('.padTopLeftRight250').css('padding-right', '40px');
	}
	
	else if (parseInt($windowWidth) >= 1200 && parseInt($windowWidth) < 1250) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '30px');
		$('.padTopLeftRight250').css('padding-right', '30px');
	}
	else if (parseInt($windowWidth) >= 1100 && parseInt($windowWidth) < 1200) {
		$('.widthTable1').css('width', '35%');
		$('.widthTable2').css('width', '65%');
		$('.padTopLeftRight250').css('padding-left', '20px');
		$('.padTopLeftRight250').css('padding-right', '20px');
	}
	else if (parseInt($windowWidth) < 1100) {
		$('.widthTable1').css('width', '40%');
		$('.widthTable2').css('width', '60%');
		$('.padTopLeftRight250').css('padding-left', '30px');
		$('.padTopLeftRight250').css('padding-right', '30px');
	}
}

var app = angular.module('myApp', ['ngFileUpload','ngCsv']);
////////////////////////////////////////////////////////////////
//////////////////////02_ippan.html/////////////////////////////
app.controller('TimeCtrl', function($scope, $interval) {
	var tick = function() {
		$scope.clock = Date.now();
	}
	tick();
	$interval(tick, 1000);
});
app.controller('02_controller', function($scope, $http) {
	$scope.metricsTableData = [];
	$scope.currentDate = new Date();
	callInit();
	
	function callInit() {
		$scope.metricsTableData = [];
		var year = $scope.currentDate.getFullYear();
		var month = $scope.currentDate.getMonth();
		var fmonth = ("0" + (month+1)).slice(-2);
		$scope.currentYearMonth = year + '年' + fmonth + '月';
		var arrDay = ["25", "26", "27", "28", "29", "30", "31"];
		var days = [];
		for (var i in arrDay) {
			var dt = new Date(year, month, arrDay[i]);
			days.push(dt);
		}
		var workingTimes = ["8:55", "8:55", "8:55", "8:55", "8:55", "8:55", "8:55"];
		var imageComes = ["img/cloud.png", "img/cloud.png", "img/cloud.png", "img/sun.png", "img/cloud.png", "img/cloud.png", "img/cloud.png"];
		var timeToLeaves = ["20:30", "22:00", "19:30", "18:00", "21:00", "20:00", "4:00"];
		var imageLeaves= ["img/cloud.png", "img/rain.png", "img/cloud.png", "img/sun.png", "img/cloud.png", "img/cloud.png", "img/hard_rain.png"];
		var overtimes = ["2:30", "4:00", "1:30", "0:00", "3:00", "2:00", "10:30"];
		for (var day in days) {
			var objData = {};
			objData.day = formatDay(days[day]);
			objData.workingTime = workingTimes[day];
			objData.imageCome = imageComes[day];
			objData.timeToLeave = timeToLeaves[day];
			objData.imageLeave = imageLeaves[day];
			objData.overtime = overtimes[day];
			$scope.metricsTableData.push(objData);
		}
	}
	
	function formatDay(before) {
		var days = ["日","月","火","水","木","金","土"];
		var strYear = before.getFullYear();
		var strMonth = before.getMonth() + 1;
		var strdayInNum = before.getDate();
		var strdayInText = days[before.getDay()];
		var temp = strYear + '/' + strMonth + '/' + strdayInNum + '(' + strdayInText + ')';
		return temp;
	}
	$scope.prvMonth = function() {
		var previousMonth = new Date($scope.currentDate);
		previousMonth.setMonth($scope.currentDate.getMonth()-1);
		$scope.currentDate = previousMonth;
		callInit();
	}
	$scope.nxtMonth = function() {
		var previousMonth = new Date($scope.currentDate);
		previousMonth.setMonth($scope.currentDate.getMonth()+1);
		$scope.currentDate = previousMonth;
		callInit();
	}
	$scope.holidayList2017 = [
		{date:'2017/1/1', name:''},
		{date:'2017/1/2', name:''},
		{date:'2017/1/3', name:''},
		{date:'2017/1/9', name:''},
		{date:'2017/2/11', name:''},
		{date:'2017/2/14', name:''},
		{date:'2017/3/20', name:''},
		{date:'2017/4/29', name:''},
		{date:'2017/5/3', name:''},
		{date:'2017/5/4', name:''},
		{date:'2017/5/5', name:''},
		{date:'2017/6/21', name:''},
		{date:'2017/7/7', name:''},
		{date:'2017/7/17', name:''},
		{date:'2017/8/11', name:''},
		{date:'2017/9/1', name:''},
		{date:'2017/9/18', name:''},
		{date:'2017/9/22', name:''},
		{date:'2017/9/23', name:''},
		{date:'2017/10/9', name:''},
		{date:'2017/11/3', name:''},
		{date:'2017/11/15', name:''},
		{date:'2017/11/23', name:''},
		{date:'2017/12/21', name:''},
		{date:'2017/12/23', name:''},
		{date:'2017/12/25', name:''},
		{date:'2017/12/29', name:''}
	];
	$scope.set_color = function(data) {
		var splitDay = data.day.split('(')[0];
		var result = $scope.holidayList2017.findIndex(x => x.date==splitDay);
		if( result !== -1 ) {
			return {
				color: "red"
			}
		} else {
			if (data.day.includes('土')) {
				return {
					color: "blue"
				}
			} else if (data.day.includes('日')) {
				return {
					color: "red"
				}
			}
		}
	}
});
////////////////////////////////////////////////////////////////
//////////////////////03_yotei.html/////////////////////////////
app.controller('03_controller', function($scope, $http, $window) {
	$scope.smartTableData = [];
	$scope.holidayList2017 = [
		{date:'2017/1/1', name:''},
		{date:'2017/1/2', name:''},
		{date:'2017/1/3', name:''},
		{date:'2017/1/9', name:''},
		{date:'2017/2/11', name:''},
		{date:'2017/2/14', name:''},
		{date:'2017/3/20', name:''},
		{date:'2017/4/29', name:''},
		{date:'2017/5/3', name:''},
		{date:'2017/5/4', name:''},
		{date:'2017/5/5', name:''},
		{date:'2017/6/21', name:''},
		{date:'2017/7/7', name:''},
		{date:'2017/7/17', name:''},
		{date:'2017/8/11', name:''},
		{date:'2017/9/1', name:''},
		{date:'2017/9/18', name:''},
		{date:'2017/9/22', name:''},
		{date:'2017/9/23', name:''},
		{date:'2017/10/9', name:''},
		{date:'2017/11/3', name:''},
		{date:'2017/11/15', name:''},
		{date:'2017/11/23', name:''},
		{date:'2017/12/21', name:''},
		{date:'2017/12/23', name:''},
		{date:'2017/12/25', name:''},
		{date:'2017/12/29', name:''}
	];
	
	$scope.currentDate = new Date();
	callInit();
	
	function callInit() {
		$scope.smartTableData = [];
		var year = $scope.currentDate.getFullYear();
		var month = $scope.currentDate.getMonth();
		var fmonth = ("0" + (month+1)).slice(-2);
		$scope.currentYearMonth = year + '年' + fmonth + '月';
		var isFirstRow = false;
		var isSecondRow = false;
		var days = getDaysInMonth(month, year);
		for (var day in days) {
			var objData = {};
			objData.day = formatDay(days[day]);
			// Add others data.
			if (!isFirstRow) {
				var comeTime = {};
				comeTime.hour = {value: 9, text: '9時'};
				comeTime.minute = {value: 15, text: '15分'};
				objData.comeTime = comeTime;
				var gohome = {};
				gohome.hour = {value: 20, text: '20時'};
				gohome.minute = {value: 30, text: '30分'};
				objData.gohome = gohome;
				objData.estOtTime = '2:30';
				objData.reason = '月初の書類整理が立て込む見込みのため';
				isFirstRow = true;
			}else {
				if (!isSecondRow) {
					var comeTime = {};
					comeTime.hour = {value: 9, text: '9時'};
					comeTime.minute = {value: 0, text: '0分'};
					objData.comeTime = comeTime;
					var gohome = {};
					gohome.hour = {value: 18, text: '18時'};
					gohome.minute = {value: 0, text: '0分'};
					objData.gohome = gohome;
					objData.estOtTime = '';
					objData.reason = '';
					isSecondRow = true;
				}
			}
			$scope.smartTableData.push(objData);
		}
	}
	function getDaysInMonth(month, year) {
		var date = new Date(year, month, 1);
		var days = [];
		while (date.getMonth() === month) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}
		return days;
	}
	
	function formatDay(before) {
		var days = ["日","月","火","水","木","金","土"];
		var strYear = before.getFullYear();
		var strMonth = before.getMonth() + 1;
		var strdayInNum = before.getDate();
		var strdayInText = days[before.getDay()];
		var temp = strYear + '/' + strMonth + '/' + strdayInNum + '(' + strdayInText + ')';
		return temp;
	}
	$scope.test = function(data) {
		
	}
	$scope.set_color = function(data) {
		var splitDay = data.day.split('(')[0];
		var result = $scope.holidayList2017.findIndex(x => x.date==splitDay);
		if( result !== -1 ) {
			return {
				color: "red"
			}
		} else {
			if (data.day.includes('土')) {
				return {
					color: "blue"
				}
			} else if (data.day.includes('日')) {
				return {
					color: "red"
				}
			}
		}
	}
	
	$scope.hourLst = [
		{value: 0, text: '0時'},
		{value: 1, text: '1時'},
		{value: 2, text: '2時'},
		{value: 3, text: '3時'},
		{value: 4, text: '4時'},
		{value: 5, text: '5時'},
		{value: 6, text: '6時'},
		{value: 7, text: '7時'},
		{value: 8, text: '8時'},
		{value: 9, text: '9時'},
		{value: 10, text: '10時'},
		{value: 11, text: '11時'},
		{value: 12, text: '12時'},
		{value: 13, text: '13時'},
		{value: 14, text: '14時'},
		{value: 15, text: '15時'},
		{value: 16, text: '16時'},
		{value: 17, text: '17時'},
		{value: 18, text: '18時'},
		{value: 19, text: '19時'},
		{value: 20, text: '20時'},
		{value: 21, text: '21時'},
		{value: 22, text: '22時'},
		{value: 23, text: '23時'}
	];
	$scope.minuteLst = [
		{value: 0, text: '0分'},
		{value: 5, text: '5分'},
		{value: 10, text: '10分'},
		{value: 15, text: '15分'},
		{value: 20, text: '20分'},
		{value: 25, text: '25分'},
		{value: 30, text: '30分'},
		{value: 35, text: '35分'},
		{value: 40, text: '40分'},
		{value: 45, text: '45分'},
		{value: 50, text: '50分'},
		{value: 55, text: '55分'}
	];
	
	$scope.prvMonth = function() {
		var previousMonth = new Date($scope.currentDate);
		previousMonth.setMonth($scope.currentDate.getMonth()-1);
		$scope.currentDate = previousMonth;
		callInit();
	}
	$scope.nxtMonth = function() {
		var previousMonth = new Date($scope.currentDate);
		previousMonth.setMonth($scope.currentDate.getMonth()+1);
		$scope.currentDate = previousMonth;
		callInit();
	}
	
	$scope.uploadFiles = function(file, errFile) {
		
		var comeTime = {};
		comeTime.hour = {value: 9, text: '9時'};
		comeTime.minute = {value: 0, text: '0分'};
		
		var gohome = {};
		gohome.hour = {value: 18, text: '18時'};
		gohome.minute = {value: 0, text: '0分'};
		
		$scope.smartTableData[2].comeTime = comeTime;
		$scope.smartTableData[2].gohome = gohome;
		$scope.smartTableData[2].estOtTime = '';
		$scope.smartTableData[2].reason = '';
		
		$scope.smartTableData[5].comeTime = comeTime;
		$scope.smartTableData[5].gohome = gohome;
		$scope.smartTableData[5].estOtTime = '';
		$scope.smartTableData[5].reason = '';
		
		$scope.smartTableData[6].comeTime = comeTime;
		$scope.smartTableData[6].gohome = gohome;
		$scope.smartTableData[6].estOtTime = '';
		$scope.smartTableData[6].reason = '';
		
		$scope.smartTableData[7].comeTime = comeTime;
		$scope.smartTableData[7].gohome = gohome;
		$scope.smartTableData[7].estOtTime = '';
		$scope.smartTableData[7].reason = '';
		
		$window.scrollTo(0, 0);
	}
});

////////////////////////////////////////////////////////////////
//////////////////////04_kyoten.html/////////////////////////////
app.controller('04_controller', function($scope, $http) {
	$scope.dataTableKyoten = [];
	$scope.dataTableKyoten = [
		{
			"employeeNumber": "200820",
			"name": "相蘓 慶介",
			"affiliation": "システム開発部1課",
			"image": "img/person01.png"
		},
		{
			"employeeNumber": "200821",
			"name": "赤根 響",
			"affiliation": "システム開発部2課",
			"image": "img/person02.png"
		},
		{
			"employeeNumber": "200822",
			"name": "東仲里 夏帆里",
			"affiliation": "システム開発部3課",
			"image": "img/person03.png"
		},
		{
			"employeeNumber": "200823",
			"name": "阿倉 沙彩",
			"affiliation": "システム開発部4課",
			"image": "img/person04.png"
		},
		{
			"employeeNumber": "200824",
			"name": "畦布 由理子",
			"affiliation": "人事部",
			"image": "img/rabbit.png"
		},
		{
			"employeeNumber": "200825",
			"name": "阿立 紗月",
			"affiliation": "人事部",
			"image": "img/sakura.png"
		},
		{
			"employeeNumber": "200826",
			"name": "穴竃 すばる",
			"affiliation": "経営部1",
			"image": "img/person05.png"
		},
		{
			"employeeNumber": "200827",
			"name": "天川谷 方規",
			"affiliation": "経営部2",
			"image": "img/person21.gif"
		},
		{
			"employeeNumber": "200828",
			"name": "飴川 秦",
			"affiliation": "経営部3",
			"image": "img/tulip.png"
		},
		{
			"employeeNumber": "200829",
			"name": "阿立 紗月",
			"affiliation": "人事部",
			"image": "img/sakura.png"
		},
		{
			"employeeNumber": "200830",
			"name": "穴竃 すばる",
			"affiliation": "経営部1",
			"image": "img/rose.png"
		},
		{
			"employeeNumber": "200831",
			"name": "天川谷 方規",
			"affiliation": "経営部2",
			"image": "img/mai.png"
		},
		{
			"employeeNumber": "200832",
			"name": "飴川 秦",
			"affiliation": "経営部3",
			"image": "img/tulip.png"
		}
	];
});

////////////////////////////////////////////////////////////////
//////////////////////03_yotei.html/////////////////////////////
app.controller('05_controller', function($scope, $http) {
	$scope.smartTableData = [];
	$scope.currentDate = new Date();
	callInit();
	
	function callInit() {
		$scope.smartTableData = [];
		var year = $scope.currentDate.getFullYear();
		var month = $scope.currentDate.getMonth() + 1;
		var day = $scope.currentDate.getDate();
		$scope.currentYearMonth = year + '年' + month + '月' + day + '日';
	}

	$scope.prvDay = function() {
		var previousDay = new Date($scope.currentDate);
		previousDay.setDate($scope.currentDate.getDate() - 1);
		$scope.currentDate = previousDay;
		callInit();
	}
	$scope.nxtDay = function() {
		var nextDay = new Date($scope.currentDate);
		nextDay.setDate($scope.currentDate.getDate() + 1);
		$scope.currentDate = nextDay;
		callInit();
	}
});

////////////////////////////////////////////////////////////////
//////////////////////06_yoteishonin.html/////////////////////////////
app.controller('06_controller', function($scope, $http) {
	$scope.smartTableData = [];
	$scope.currentDate = new Date();
	callInit();
	
	function callInit() {
		$scope.smartTableData = [];
		var year = $scope.currentDate.getFullYear();
		var month = $scope.currentDate.getMonth();
		$scope.currentYearMonth = year + '年' + (month+1) + '月';
		var days = getDaysInMonth(month, year);
		for (var day in days) {
			var objData = {};
			objData.day = formatDay(days[day]);
			$scope.smartTableData.push(objData);
		}
	}
	function getDaysInMonth(month, year) {
		var date = new Date(year, month, 1);
		var days = [];
		while (date.getMonth() === month) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}
		return days;
	}
	
	function formatDay(before) {
		var days = ["日","月","火","水","木","金","土"];
		var strYear = before.getFullYear();
		var strMonth = before.getMonth() + 1;
		var strdayInNum = before.getDate();
		var strdayInText = days[before.getDay()];
		var temp = strYear + '/' + strMonth + '/' + strdayInNum + '(' + strdayInText + ')';
		return temp;
	}
  
	$scope.userNameLst = [
		{value: 0, text: '相蘓 慶介'},
		{value: 1, text: '赤根 響'},
		{value: 2, text: '東仲里 夏帆里'},
		{value: 3, text: '阿倉 沙彩'},
		{value: 4, text: '畦布 由理子'},
		{value: 5, text: '阿立 紗月'},
		{value: 6, text: '穴竃 すばる'},
		{value: 7, text: '天川谷 方規'},
		{value: 8, text: '飴川 秦'},
		{value: 9, text: '在賀 櫂'}
	];
	$scope.holidayList2017 = [
        {date:'2017/1/1(', name:''},
        {date:'2017/1/9(', name:''},
        {date:'2017/2/11(', name:''},
        {date:'2017/3/20(', name:''},
        {date:'2017/4/29(', name:''},
        {date:'2017/5/3(', name:''},
        {date:'2017/5/4(', name:''},
        {date:'2017/5/5(', name:''},
        {date:'2017/7/17(', name:''},
        {date:'2017/8/11(', name:''},
        {date:'2017/9/18(', name:''},
        {date:'2017/9/22(', name:''},
        {date:'2017/10/9(', name:''},
        {date:'2017/11/3(', name:''},
        {date:'2017/11/23(', name:''},
        {date:'2017/12/23(', name:''}
    ];
	$scope.prvMonth = function() {
		var previousMonth = new Date($scope.currentDate);
		previousMonth.setMonth($scope.currentDate.getMonth()-1);
		$scope.currentDate = previousMonth;
		callInit();
	}
	$scope.nxtMonth = function() {
		var previousMonth = new Date($scope.currentDate);
		previousMonth.setMonth($scope.currentDate.getMonth()+1);
		$scope.currentDate = previousMonth;
		callInit();
	}
	$scope.set_color = function(data) {
        for (var i = 0; i < $scope.holidayList2017.length; i++) {
            var holiday = $scope.holidayList2017[i]
            if (data.day.includes(holiday.date)) {
                return {
                    color: "red"
                }
            }
        }

        if (data.day.includes('土')) {
            return {
                color: "blue"
            }
        } else if (data.day.includes('日')) {
            return {
                color: "red"
            }
        }
        
    }
});
////////////////////////////////////////////////////////////////
//////////////////////07_shukei.html/////////////////////////////
app.controller('07_controller', function($scope, $http) {
	$scope.currentDate = new Date();
	callInit();
	
	function callInit() {
		var year = $scope.currentDate.getFullYear();
		var month = $scope.currentDate.getMonth() + 1;
		$scope.currentYearMonth = year + '年' + month + '月';
	}
	function getDaysInMonth(month, year) {
		var date = new Date(year, month, 1);
		var days = [];
		while (date.getMonth() === month) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}
		return days;
	}
	
	function formatDay(before) {
		var days = ["日","月","火","水","木","金","土"];
		var strYear = before.getFullYear();
		var strMonth = before.getMonth() + 1;
		var strdayInNum = before.getDate();
		var strdayInText = days[before.getDay()];
		var temp = strYear + '/' + strMonth + '/' + strdayInNum + '(' + strdayInText + ')';
		return temp;
	}
	$scope.prvMonth = function() {
		var previousMonth = new Date($scope.currentDate);
		previousMonth.setMonth($scope.currentDate.getMonth()-1);
		$scope.currentDate = previousMonth;
		callInit();
	}
	$scope.nxtMonth = function() {
		var previousMonth = new Date($scope.currentDate);
		previousMonth.setMonth($scope.currentDate.getMonth()+1);
		$scope.currentDate = previousMonth;
		callInit();
	}
	$scope.dataTableShukei = [];
	$scope.dataTableShukei = [
		{
			"name": "内住 いほり",
			"total": "2日",
			"totalTime": "(9:00)",
			"overtime": "0日",
			"overtime1": "(0:00)",
			"break": "0日",
			"break1": "(0:00)",
			"late": "1",
			"leaveEarly": "0",
			"absence": "0",
			"manypeople": "0",
			"holiday": "0",
			"substituteHoliday": "0",
			"other": "0",
			"notyetEntered": "5"
		},
		{
			"name": "烏鷹 祐一",
			"total": "0日",
			"totalTime": "(0:00)",
			"overtime": "0日",
			"overtime1": "(0:00)",
			"break": "0日",
			"break1": "(0:00)",
			"late": "0",
			"leaveEarly": "0",
			"absence": "0",
			"manypeople": "0",
			"holiday": "0",
			"substituteHoliday": "0",
			"other": "0",
			"notyetEntered": "10"
		},
		{
			"name": "牛山 羽留奈",
			"total": "0日",
			"totalTime": "(0:00)",
			"overtime": "0日",
			"overtime1": "(0:00)",
			"break": "0日",
			"break1": "(0:00)",
			"late": "0",
			"leaveEarly": "0",
			"absence": "0",
			"manypeople": "0",
			"holiday": "0",
			"substituteHoliday": "0",
			"other": "0",
			"notyetEntered": "10"
		},
		{
			"name": "牛坂 まゆこ",
			"total": "0日",
			"totalTime": "(0:00)",
			"overtime": "0日",
			"overtime1": "(0:00)",
			"break": "0日",
			"break1": "(0:00)",
			"late": "0",
			"leaveEarly": "0",
			"absence": "0",
			"manypeople": "0",
			"holiday": "0",
			"substituteHoliday": "0",
			"other": "0",
			"notyetEntered": "10"
		},
		{
			"name": "浮須 いろは",
			"total": "8日",
			"totalTime": "(52:53)",
			"overtime": "6日",
			"overtime1": "(48:58)",
			"break": "3日",
			"break1": "(0:00)",
			"late": "1",
			"leaveEarly": "0",
			"absence": "0",
			"manypeople": "0",
			"holiday": "0",
			"substituteHoliday": "0",
			"other": "0",
			"notyetEntered": "1"
		},
		{
			"name": "入島 ももえ",
			"total": "0日",
			"totalTime": "(0:00)",
			"overtime": "0日",
			"overtime1": "(0:00)",
			"break": "0日",
			"break1": "(0:00)",
			"late": "0",
			"leaveEarly": "0",
			"absence": "0",
			"manypeople": "0",
			"holiday": "0",
			"substituteHoliday": "0",
			"other": "0",
			"notyetEntered": "10"
		},
		{
			"name": "妹脊 遙奈",
			"total": "0日",
			"totalTime": "(0:00)",
			"overtime": "0日",
			"overtime1": "(0:00)",
			"break": "0日",
			"break1": "(0:00)",
			"late": "0",
			"leaveEarly": "0",
			"absence": "0",
			"manypeople": "0",
			"holiday": "0",
			"substituteHoliday": "0",
			"other": "0",
			"notyetEntered": "10"
		},
		{
			"name": "今敷 越子",
			"total": "0日",
			"totalTime": "(0:00)",
			"overtime": "0日",
			"overtime1": "(0:00)",
			"break": "0日",
			"break1": "(0:00)",
			"late": "0",
			"leaveEarly": "0",
			"absence": "0",
			"manypeople": "0",
			"holiday": "0",
			"substituteHoliday": "0",
			"other": "0",
			"notyetEntered": "10"
		},
		{
			"name": "井手窪 まなか",
			"total": "0日",
			"totalTime": "(0:00)",
			"overtime": "0日",
			"overtime1": "(0:00)",
			"break": "0日",
			"break1": "(0:00)",
			"late": "0",
			"leaveEarly": "0",
			"absence": "0",
			"manypeople": "0",
			"holiday": "0",
			"substituteHoliday": "0",
			"other": "0",
			"notyetEntered": "10"
		},
		{
			"name": "一田 みさ",
			"total": "0日",
			"totalTime": "(0:00)",
			"overtime": "0日",
			"overtime1": "(0:00)",
			"break": "0日",
			"break1": "(0:00)",
			"late": "0",
			"leaveEarly": "0",
			"absence": "0",
			"manypeople": "0",
			"holiday": "0",
			"substituteHoliday": "0",
			"other": "0",
			"notyetEntered": "10"
		}
	];
});
////////////////////////////////////////////////////////////////
//////////////////////09_touroku.html/////////////////////////////
app.controller('09_controller', function($scope, $http) {
	$scope.smartTableData = [];
	callInit();
	
	function callInit() {
		$scope.smartTableData = [
			{
				"no": "0001",
				"meaning": "システム開発部",
				"members": "50人"
			},
			{
				"no": "0002",
				"meaning": "システム開発部1課",
				"members": "10人"
			},
			{
				"no": "0003",
				"meaning": "システム開発部2課",
				"members": "10人"
			},
			{
				"no": "0004",
				"meaning": "システム開発部3課",
				"members": "10人"
			},
			{
				"no": "0005",
				"meaning": "システム開発部4課",
				"members": "10人"
			},
			{
				"no": "0006",
				"meaning": "システム開発部5課",
				"members": "10人"
			},
			{
				"no": "0007",
				"meaning": "-"
			},
			{
				"no": "0008",
				"meaning": "-"
			},
			{
				"no": "0009",
				"meaning": "-"
			},
			{
				"no": "0010",
				"meaning": "-"
			},
			{
				"no": "0011",
				"meaning": "-"
			},
			{
				"no": "0012",
				"meaning": "-"
			},
			{
				"no": "0013",
				"meaning": "-"
			},
			{
				"no": "0014",
				"meaning": "-"
			},
			{
				"no": "0015",
				"meaning": "-"
			}
		];
	$scope.room = [
			{value: 0, text: '-'},
			{value: 1, text: 'システム開発部'},
			{value: 2, text: 'システム開発部1課'},
			{value: 3, text: 'システム開発部2課'},
			{value: 4, text: 'システム開発部3課'},
			{value: 5, text: 'システム開発部4課'},
			{value: 6, text: 'システム開発部5課'}
		];
	}
  
});

////////////////////////////////////////////////////////////////
//////////////////////11_kinmusakusei.html/////////////////////////////
app.controller('11_controller', function($scope, $http) {
	$scope.smartTableData = [];
	callInit();
	
	function callInit() {
		$scope.smartTableData = [
		   {
		    "id": "01",
		    "department": "【シフト】 10:00-19:00",
		    "arrangeTime": "10:00　〜　19:00",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "02",
		    "department": "【シフト】 09:30-18:00",
		    "arrangeTime": "09:30　〜　18:00",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "03",
		    "department": "【タス】 時短勤務 （09:00-16:00）",
		    "arrangeTime": "09:00　〜　16:00",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "04",
		    "department": "【タス】 時短勤務 （09:30-16:30）",
		    "arrangeTime": "09:30　〜　16:30",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "05",
		    "department": "【タス】 時短勤務 （09:30-17:00）",
		    "arrangeTime": "09:30　〜　17:00",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "06",
		    "department": "【シフト】 10:00-19:00",
		    "arrangeTime": "10:00　〜　19:00",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "07",
		    "department": "【シフト】 09:30-18:00",
		    "arrangeTime": "09:30　〜　18:00",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "08",
		    "department": "【タス】 時短勤務 （09:00-16:00）",
		    "arrangeTime": "09:00　〜　16:00",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "09",
		    "department": "【タス】 時短勤務 （09:30-16:30）",
		    "arrangeTime": "09:30　〜　16:30",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "10",
		    "department": "【タス】 時短勤務 （09:30-17:00）",
		    "arrangeTime": "09:30　〜　17:00",
		    "workingTime": "04:00"
		   },{
		    "id": "11",
		    "department": "【シフト】 10:00-19:00",
		    "arrangeTime": "10:00　〜　19:00",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "12",
		    "department": "【シフト】 09:30-18:00",
		    "arrangeTime": "09:30　〜　18:00",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "13",
		    "department": "【タス】 時短勤務 （09:00-16:00）",
		    "arrangeTime": "09:00　〜　16:00",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "14",
		    "department": "【タス】 時短勤務 （09:30-16:30）",
		    "arrangeTime": "09:30　〜　16:30",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "15",
		    "department": "【タス】 時短勤務 （09:30-17:00）",
		    "arrangeTime": "09:30　〜　17:00",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "16",
		    "department": "【シフト】 10:00-19:00",
		    "arrangeTime": "10:00　〜　19:00",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "17",
		    "department": "【シフト】 09:30-18:00",
		    "arrangeTime": "09:30　〜　18:00",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "18",
		    "department": "【タス】 時短勤務 （09:00-16:00）",
		    "arrangeTime": "09:00　〜　16:00",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "19",
		    "department": "【タス】 時短勤務 （09:30-16:30）",
		    "arrangeTime": "09:30　〜　16:30",
		    "workingTime": "04:00"
		   },
		   {
		    "id": "20",
		    "department": "【タス】 時短勤務 （09:30-17:00）",
		    "arrangeTime": "09:30　〜　17:00",
		    "workingTime": "04:00"
		   }
	  ];
	}

	$scope.hourLst = [
		{value: 0, text: '0時'},
		{value: 1, text: '1時'},
		{value: 2, text: '2時'},
		{value: 3, text: '3時'},
		{value: 4, text: '4時'},
		{value: 5, text: '5時'},
		{value: 6, text: '6時'},
		{value: 7, text: '7時'},
		{value: 8, text: '8時'},
		{value: 9, text: '9時'},
		{value: 10, text: '10時'},
		{value: 11, text: '11時'},
		{value: 12, text: '12時'},
		{value: 13, text: '13時'},
		{value: 14, text: '14時'},
		{value: 15, text: '15時'},
		{value: 16, text: '16時'},
		{value: 17, text: '17時'},
		{value: 18, text: '18時'},
		{value: 19, text: '19時'},
		{value: 20, text: '20時'},
		{value: 21, text: '21時'},
		{value: 22, text: '22時'},
		{value: 23, text: '23時'}
	];
	$scope.minuteLst = [
		{value: 0, text: '0分'},
		{value: 5, text: '5分'},
		{value: 10, text: '10分'},
		{value: 15, text: '15分'},
		{value: 20, text: '20分'},
		{value: 25, text: '25分'},
		{value: 30, text: '30分'},
		{value: 35, text: '35分'},
		{value: 40, text: '40分'},
		{value: 45, text: '45分'},
		{value: 50, text: '50分'},
		{value: 55, text: '55分'}
	];
  
});

////////////////////////////////////////////////////////////////
//////////////////////10_user_touroku.html/////////////////////////////
app.controller('10_controller', function($scope, $http, $window) {
	$scope.smartTableData = [];
	$scope.userNameLst = [];
	$scope.sexLst = [];
	$scope.complianceLst = [];
	$scope.workScheduleLst = [];
	
	$scope.userNameLst = [		
		{value: 0, text: 'システム開発部'},
		{value: 1, text: 'システム開発部1課'},
		{value: 2, text: 'システム開発部2課'},
		{value: 3, text: 'システム開発部3課'},
		{value: 4, text: 'システム開発部4課'},
		{value: 5, text: 'システム開発部5課'}		
	];
	
	$scope.sexLst = [
		{value: 0, text: '男性'},
		{value: 1, text: '女性'},		
	];
	$scope.complianceLst = [
		{value: 0, text: '赤坂見附オフィス'},
		{value: 1, text: '客先'},
		{value: 2, text: '新大阪オフィス'},
		{value: 3, text: '草津オフィス'},
		{value: 4, text: '自宅勤務'},
		{value: 5, text: '休職中'}
	];

	$scope.workScheduleLst = [
		{value: 0, text: '【シフト】 10:00-19:00'},
		{value: 1, text: '【シフト】 09:30-18:00'},
		{value: 2, text: '【タス】 時短勤務 （09:00-16:00）'},
		{value: 3, text: '【タス】 時短勤務 （09:30-16:30）'},
		{value: 4, text: '【タス】 時短勤務 （09:30-17:00）'}
	];
	
	$scope.smartTableData = [
		{
			"no": "0001",
			"name": "相蘓 慶介",
			"division": "システム開発部",
			"place": "赤坂見附オフィス",
			"author": "一般",
			"retired": ""
		},
		{
			"no": "0002",
			"name": "赤根 響",
			"division": "システム開発部1課",
			"place": "客先",
			"author": "一般",
			"retired": ""
		},
		{
			"no": "0003",
			"name": "東仲里 夏帆里",
			"division": "システム開発部2課",
			"place": "新大阪オフィス",
			"author": "一般",
			"retired": "O"
		},
		{
			"no": "0004",
			"name": "阿倉 沙彩",
			"division": "システム開発部3課",
			"place": "草津オフィス",
			"author": "一般",
			"retired": ""
		},
		{
			"no": "0005",
			"name": "畦布 由理子",
			"division": "システム開発部4課",
			"place": "自宅勤務",
			"author": "一般",
			"retired": "O"
		},
		{
			"no": "0006",
			"name": "阿立 紗月",
			"division": "システム開発部5課",
			"place": "休職中",
			"author": "一般",
			"retired": ""
		}
	];
	$scope.imageUpload = [];
	$scope.uploadImage = function(file, errFile) {
		if (file) {
			$scope.imageUpload = [
			{
				"icon": "img/rainbow.png"
			}]	
			$window.scrollTo(0, 0);
	
		}
	} 	
	$scope.uploadFiles = function(file, errFile) {
		if (file) {
			for ( var i = 0; i < 5; i++ ) {
				var arrLen = $scope.smartTableData.length;
				var userObj = {
					"no": "00" + arrLen,
					"name": "阿立 紗月",
					"division": "システム開発部４課",
					"place": "客先",
					"author": "一般",
					"retired": ""
				};

				$scope.smartTableData.push(userObj);
			}
			
			$window.scrollTo(0, 0);
		}
	}
});
////////////////////////////////////////////////////////////////
//////////////////////13_riyurisuto.html/////////////////////////////

app.controller('12_controller', function($scope, $http) {
	$scope.smartTableData = [];
	$scope.imageUpload = [];
	callInit();
	
	function callInit() {
		$scope.smartTableData = [
			{
				"no": "01",
				"meaning": "晴れ",
				"icon": "img/sun.png",
				"scope": 10
			},
			{
				"no": "02",
				"meaning": "曇り",
				"icon": "img/cloud.png",
				"scope": 5
			},
			{
				"no": "03",
				"meaning": "雨",
				"icon": "img/rain.png",
				"scope": 2
			},
			{
				"no": "04",
				"meaning": "土砂降り",
				"icon": "img/hard_rain.png",
				"scope": 0
			},
			{
				"no": "05",
				"meaning": "",
			}
		];	  
	}
	$scope.imageUpload = [];
	$scope.uploadFiles = function(file, errFile) {
		if (file) {
			$scope.imageUpload = [
			{
				"icon": "img/rainbow.png"
			}]	
			$window.scrollTo(0, 0);
	
		}
	}  
});
////////////////////////////////////////////////////////////////
//////////////////////13_riyurisuto.html/////////////////////////////
app.controller('13_controller', function($scope, $http) {
	$scope.smartTableData = [];
	callInit();
	
	function callInit() {
		$scope.smartTableData = [
			{
				"no": "01",
				"meaning": "午前半休"
			},
			{
				"no": "02",
				"meaning": "午後半休"
			},
			{
				"no": "03",
				"meaning": "体調不良のため"
			},
			{
				"no": "04",
				"meaning": "電車遅延のため"
			},
			{
				"no": "05",
				"meaning": "その他",
			}
		];	  
	}
  
});
////////////////////////////////////////////////////////////////
//////////////////////14_kyoyenrisuto.html/////////////////////////////
app.controller('14_controller', function($scope, $http) {
	$scope.smartTableData = [];
	callInit();
	
	function callInit() {
		$scope.smartTableData = [
			{
				"no": "01",
				"meaning": "赤坂見附オフィス",
				"scope": "20名"
			},
			{
				"no": "02",
				"meaning": "客先",
				"scope": "200名"
			},
			{
				"no": "03",
				"meaning": "新大阪オフィス",
				"scope": "30名"
			},
			{
				"no": "04",
				"meaning": "草津オフィス",
				"scope": "5名"
			},
			{
				"no": "05",
				"meaning": "自宅勤務",
				"scope": "3名"
			},
			{
				"no": "06",
				"meaning": "休職中",
				"scope": "10名"
			}		
		];	  
	}
  
});
////////////////////////////////////////////////////////////////
//////////////////////08_settei.html/////////////////////////////
app.controller('08_controller', function($scope, $http) {
		$scope.smartTableData = [
		{soshikiUser:'礒岩 寧々', kinmu: {value: 0, text: '通常勤務体系'}, kyoten: {value: 1, text: '客先'}},
		{soshikiUser:'幾間 遥', kinmu: {value: 1, text: '時短勤務'}, kyoten: {value: 4, text: '自宅勤務'}},
		{soshikiUser:'生川 剛', kinmu: {value: 1, text: '時短勤務'}, kyoten: {value: 3, text: '草津オフィス'}},
		{soshikiUser:'飯橋 直太郎', kinmu: {value: 0, text: '通常勤務体系'}, kyoten: {value: 2, text: '新大阪オフィス'}},
		{soshikiUser:'蟻原 茜', kinmu: null, kyoten: null},
		{soshikiUser:'在賀 櫂', kinmu: null, kyoten: null},
		{soshikiUser:'飴川 秦', kinmu: null, kyoten: null},
		{soshikiUser:'天川谷 方規', kinmu: null, kyoten: null},
		{soshikiUser:'穴竃 すばる', kinmu: null, kyoten: null}
	];
	
	$scope.kinmuLst = [
		{value: 0, text: '通常勤務体系'},
		{value: 1, text: '時短勤務'},
		{value: 2, text: 'IIJ標準勤務'},
		{value: 3, text: 'データセンタ勤務'}
	];
	$scope.kyotenLst = [
		{value: 0, text: '赤坂見附オフィス'},
		{value: 1, text: '客先'},
		{value: 2, text: '新大阪オフィス'},
		{value: 3, text: '草津オフィス'},
		{value: 4, text: '自宅勤務'},
		{value: 5, text: '休職中'}
	];
	
	$scope.showKinmu = function(data) {
		var selected = [];
		if(data.kinmu) {
			selected = $filter('filter')($scope.kinmuLst, {text: data.text});
		}
		return selected.length ? selected[0].text : 'Not set';
	}
});