/* 전역변수 설정
*****************************************************************/
var w = $(window).width();
var i = 0;
var count;

/* #main #work_view li 의 최초 가로값 자동지정
*****************************************************************/
$("#main .works_view > li").css("width", (w/3)-2+"px");

/* 화면 리사이징 시 #main .works_view li 의 가로값 자동 설정
*****************************************************************/
$(window).on("resize", function(){
	 w = $(this).width();
	 $("#main .works_view > li").css("clear", "none");
	 if(w>1125){
		$("#main .works_view > li").css("width", (w/3)-2+"px");
		$("#main .works_view > li:nth-child(3n+1)").css("clear", "both");
	}else if(w>774){
		$("#main .works_view > li").css("width", (w/2)-1+"px");
		$("#main .works_view > li:nth-child(2n+1)").css("clear", "both");
	}else{
		 $("#main .works_view > li").css("width", "100%");
		 $("#main .works_view > li").css("clear", "both");
	}
});

/* #main #work_view li 내 아이콘 값 변경 (text>img)
*****************************************************************/
var $icons = $("#main .works_view .front > p.icon");

$.each($icons, function(index, el) {
	var $el = $(el),
		el_text = $el.text();
	if ( el_text.indexOf('pc') > -1 ) {
		$icons.eq(index).append("<span style='float: right;'><img src='img/icons/icon_web.gif'></span>");
	}
	if ( el_text.indexOf('tablet') > -1 ) {
		$icons.eq(index).append("<span  style='float: right;'><img src='img/icons/icon_pad.gif'></span>");
	}
	if ( el_text.indexOf('phone') > -1 ) {
		$icons.eq(index).append("<span  style='float: right;'><img src='img/icons/icon_phone.gif'></span>");
	}
});

$icons.css("color", "#eaeaea");

/* div.back 에 다른 클래스명이 있는 경우, 해당 클래스명이 들어간 visual_.gif 를 background로 넣음.
*****************************************************************/
var $visual = $("#main .works_view .back");

for(var i = 0; i < $visual.length; i++){
	if($visual[i].classList.length > 1){
		$($visual[i]).css({"background-image":"url('img/customers_visual/"+$visual[i].classList[1]+"_visual.jpg')", "height":"281px"});
	}
}

// $("#main .works_view li").mouseenter();