 (function(){

	var nav = document.getElementsByTagName('nav')[0];
	var ul = document.createElement('ul');

	var full_url = window.location.href;
	var pathname_index_num = full_url.indexOf(window.location.pathname);
	var admin_server_url = full_url.substring(0, pathname_index_num +1) ;

	var nav_list = [{'url': admin_server_url + "pos" ,              'menu_name':"POS" },
					{'url': admin_server_url + "exchange" ,			'menu_name':"교환-환불 내역" },
					{'url': admin_server_url + "invoice" ,			'menu_name':"송장" },
					{'url': admin_server_url + "delivery" ,         'menu_name':"배송상황" },
					{'url': admin_server_url + "manufacturer" ,     'menu_name':"제조사 주문" },
					{'url': admin_server_url + "optical-store" ,    'menu_name':"교환매장 정보" },
					{'url': admin_server_url + "message" ,          'menu_name':"문자정보" }];

	nav_list.forEach(renderMenuList);

	function renderMenuList(element, index, arr) {
		var cur_url = window.location.href;
		var a = document.createElement('a');
		a.href = element.url;
		a.innerHTML = element.menu_name;
		a.style.textDecoration = 'none';

		var li = document.createElement('li');
		li.setAttribute('class','item');
		li.style.display = 'inline-block';

		li.onmouseover = function(){
			a.style.color = 'white';
			a.style.fontWeight = 'bolder';
		};
		li.onmouseout = function(){
			a.style.color = 'white'; 
			a.style.fontWeight = 'normal';
		};

		li.appendChild(a);
		ul.appendChild(li);
	}

	nav.appendChild(ul);

	// media query event handler
	if (window.matchMedia) {
	  const mq = window.matchMedia("(min-width: 1060px)");
	  mq.addListener(WidthChange);
	  WidthChange(mq);
	}

	// media query change
	function WidthChange(mq) {
	  var navi = document.getElementsByTagName('nav')[0];
	  if (mq.matches) {
			navi.style.backgroundColor = 'pink';
		// window width is at least 500px
	  } else {
			navi.style.backgroundColor = 'olive';
		// window width is less than 500px
	  }

	}

})();
