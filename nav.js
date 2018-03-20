 (function(){

	var navi_list = [ 
					{'name':'소화갤러리', 
					 'sub_navi':[
								  {'name':'갤러리소개', 'href': 'gallery/intro'},
								  {'name':'작가소개',	'href': 'gallery/author'},
								  {'name':'오시는길',	'href': 'gallery/way'},
								  {'name':'주변안내',	'href': 'gallery/arround'}
								]
					},
					{'name':'작품', 
					 'sub_navi':[
								  {'name':'전통민화', 'href': ''},
								  {'name':'응용민화', 'href': ''},
								  {'name':'공예민화', 'href': ''},
								  {'name':'관화',	  'href': ''}
								]
					},
					{'name':'민화교실', 
					 'sub_navi':[
								  {'name':'수업알림', 'href': ''},
								  {'name':'수업사진', 'href': ''}
								]
					},
					{'name':'소화소식', 
					 'sub_navi':[
								  {'name':'전시안내', 'href': ''},
								  {'name':'보도자료', 'href': ''},
								  {'name':'소화풍경', 'href': ''}
								]
					}

					];

	var ul = document.createElement('ul');
	for(var i in navi_list){ 
		var menu_info =  navi_list[i];

		var li = document.createElement('li');
		li.innerHTML = menu_info.name; 

		var sub_ul = document.createElement('ul');
		for(var k in menu_info.sub_navi){
			var sub_menu = menu_info.sub_navi[k]; 

			var a = document.createElement('a');
			a.href		= sub_menu.href;
			a.innerHTML = sub_menu.name;
			a.style.textDecoration = 'none';

			var sub_li = document.createElement('li');
			sub_li.setAttribute('class','item');
			sub_li.style.display = 'inline-block';
			sub_li.style.margin = '10px';

			sub_li.onmouseover = function(){
				a.style.color = 'white';
				a.style.fontWeight = 'bolder';
			};
			sub_li.onmouseout = function(){
				a.style.color = 'white'; 
				a.style.fontWeight = 'normal';
			};

			sub_li.appendChild(a);
			sub_ul.appendChild(sub_li);
		}

		li.appendChild(sub_ul);
		ul.append(li);
	}

	var nav = document.getElementsByTagName('nav')[0];
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
