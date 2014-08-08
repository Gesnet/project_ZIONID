###마크업 순서 : 로고 > 연락처 > 메뉴 > 브로슈어 > 이메일 연락 > 포트폴리오 > SNS > 주소
---
###마크업 사용 색 :
	header]
		logo_background : #a2cd22
		menu_background : #505b84
		Menu_inliner : #fff 20%
		Menu_outline : #fff 50%
		request_btn_background : #05b5c5
		request, brochur btn font : #fff
	section]
		title]
			구분선 : #d6d6d6
			mouse_enter effect : #505b84
		company_info] 
			background : #eaeaea
			span_font : #bdbcbc font-family 나눔 고딕 12px
			중간 btn : #fff,  width 5px height 11pz radius 2px
---
###페이지 링크 :
	*Facebook: https://www.facebook.com/ZIONID.kr , fa-facebook [&#xf09a;]
	*Twitter : https://twitter.com/myZionid, fa-twitter [&#xf099;]
	*Blog : http://blog.naver.com/combi789, fa-envelope [&#xf0e0;]
---
	* 메인페이지가 WORKS 페이지임.
	* 포트폴리오 12개씩 로딩됨.지오니드 홈페이지에서 중요한 것은 고객이 연락을 하는 것.
	  그렇기에 연락처가 따로 상단에 노출되고 있음.
	* 중단점 : 1 col 491px | 2 col 791px | 3col 1144px
	* 메뉴 클릭 시 동작방식 
		○ WORKS :  일반 페이지처럼 전체 페이지 로딩
		○ About : 메뉴 클릭 시 Drop down 방식으로 페이지 노출
		○ Contact : Upper 방식으로 지도 및 연락처 노출
	* 상단부분 메뉴 fixed 방식 아님.
	* Works 최하단으로 페이지 이동 시 top 으로 향하는 버튼이 없으니 12개 이상 로딩되는 경우 노출시키는 것이 좋을 듯 함.
	* 상단의 각 메뉴들에 일부러 1px씩의 border를 줌. 사이즈 계산에 참고
	* 중단점과 상관없이 포트폴리오 1개의 높이는 294px. 해당 사이즈는 상수값으로 줄 것.
	* 메뉴는 리스트 형식으로 할 것.
	* 포트폴리오는 12개 불러온 뒤 스크롤이 끝에 가면 다음 내용을 불러오는 방식으로 -> 클래스명으로 on/off 를 생각 해 봐야 할 듯 함.
