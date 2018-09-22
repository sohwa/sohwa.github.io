
var slideDown = function(sub_menu_ul){
	for(var i =0; i<sub_menu_ul.children.length; i++){
		sub_menu_ul.children[i].style.display = 'inline-block' ;
	}
	var interval = setInterval(function(){
		var height = parseInt(sub_menu_ul.style.height);
		height = (height) ? (height+10) : 10;
		sub_menu_ul.style.height = height +'px';

		for(var i =0; i<sub_menu_ul.children.length; i++){
			var li =  sub_menu_ul.children[i];
			var opacity = (li.style.opacity)? parseFloat(li.style.opacity):0; 
			sub_menu_ul.children[i].style.opacity = (opacity + 0.1) +'' ;
			sub_menu_ul.children[i].style.filter ='alpha(opacity='+ ((opacity*100)+10) +')';
		}

		if(height > 100){
			clearInterval(interval);
			for(var i =0; i<sub_menu_ul.children.length; i++){
				sub_menu_ul.children[i].style.opacity = '1' ;
				sub_menu_ul.children[i].style.filter ='alpha(opacity=100)';
			}
		}
	}, 20);
}

var slideUp = function(sub_menu_ul, down_menu_ul){
	var up_interval = setInterval(function(){
		var height = parseInt(sub_menu_ul.style.height);
		height = (height) ? (height-10) : -1;
		sub_menu_ul.style.height = height +'px';

		for(var i =0; i<sub_menu_ul.children.length; i++){
			var li =  sub_menu_ul.children[i];
			var opacity = (li.style.opacity)? parseFloat(li.style.opacity):0; 
			sub_menu_ul.children[i].style.opacity = (opacity - 0.1) +'' ;
		}

		if(height < 0){
			clearInterval(up_interval);
			for(var i =0; i<sub_menu_ul.children.length; i++){
				sub_menu_ul.children[i].style.opacity = '0' ;
				sub_menu_ul.children[i].style.filter ='alpha(opacity=0)';
				sub_menu_ul.children[i].style.display = 'none' ;
			}
			if(down_menu_ul){
				slideDown(down_menu_ul);
			}
		}
	}, 10);
}

var animateSubNaviMenu = function(_selected_sub_menu_ul){

	var sub_navi_ul_arr = document.querySelectorAll('ul.sub_navi');
	
	var pre_selected_ul = null;
	for (var k = 0; k < sub_navi_ul_arr.length; k++) {
		var height = parseInt(sub_navi_ul_arr[k].style.height);
		if(Number.isInteger(height) && (height>100)){
			 pre_selected_ul = sub_navi_ul_arr[k] ;
		}
	}

	if(pre_selected_ul){
		if(pre_selected_ul === _selected_sub_menu_ul){
			slideUp(pre_selected_ul);
		}else{
			slideUp(pre_selected_ul, _selected_sub_menu_ul);
		}

	}else{
		slideDown(_selected_sub_menu_ul);
	}
};

var clickNaviMenu = function(_navi_menu_li, _navi_menu_idx){
	_navi_menu_li.onclick = function(){
		var nth_child_idx	= _navi_menu_idx +2;
		var sub_navi_ul		= document.querySelector('ul.sub_navi:nth-child('+nth_child_idx+')');
		animateSubNaviMenu(sub_navi_ul);
	}
}; 

var initNavi = function(){
	var navi_li_arr = document.querySelectorAll('ul.navi li');
    for (var i = 0; i < navi_li_arr.length; i++) {
        clickNaviMenu(navi_li_arr[i], i);
    }
};


var make_navigation = function(){

	// set navi list data
	var navi_datas = [ 
					{'name':'소화갤러리', 
					 'sub_navi':[
								  {'name':'갤러리소개', 'href': 'gallery/intro',   'img':'https://i.imgur.com/EQ3btHS.jpg'},
								  {'name':'작가소개',	'href': 'gallery/author',  'img':'https://i.imgur.com/b808cCQ.jpg'}, 
								  {'name':'오시는길',	'href': 'gallery/way', 	   'img':'https://i.imgur.com/bUgvFtK.jpg'},
								  {'name':'주변안내',	'href': 'gallery/arround', 'img':'https://i.imgur.com/ikOluVt.jpg'}
								]
					},
					{'name':'작품', 
					 'sub_navi':[
								  {'name':'전통민화', 'href': '', 'img':'https://i.imgur.com/ZZfRDNw.jpg'},
								  {'name':'응용민화', 'href': '', 'img':'https://i.imgur.com/tpwBgxk.jpg'}, 
								  {'name':'공예민화', 'href': '', 'img':'https://i.imgur.com/bgOcvDC.jpg'},
								  {'name':'관화',	  'href': '', 'img':'https://i.imgur.com/urRRq4d.jpg'} 
								]
					},
					{'name':'민화교실', 
					 'sub_navi':[
								  {'name':'수업알림', 'href': '', 'img':'https://i.imgur.com/z3rURl6.jpg'}, 
								  {'name':'수업사진', 'href': '', 'img':'https://i.imgur.com/w0HjsRi.jpg'}
								]
					},
					{'name':'소화소식', 
					 'sub_navi':[
								  {'name':'전시안내', 'href': '', 'img':'https://i.imgur.com/Z4rDpz1.jpg'}, 
								  {'name':'보도자료', 'href': '', 'img':'https://i.imgur.com/Cjc9cqu.jpg'},
								  {'name':'소화풍경', 'href': '', 'img':'https://i.imgur.com/gmIC8UD.jpg'}
								]
					}];


	// set navi name and content

	var nav = document.getElementsByTagName('nav')[0];


	var tbl = document.createElement('table');
    var tbdy = document.createElement('tbody');

    var tr = document.createElement('tr');

	// 로고 
	var td = document.createElement('td');
	var logo_img = document.createElement('img');
	var logo_img_url = 'https://i.imgur.com/03EZfiR.jpg';
	logo_img.src = logo_img_url;
	logo_img.style.height = '50px';
	logo_img.style.width = '180px';
	td.appendChild(logo_img);
	tr.appendChild(td)

	// web 버전 메뉴버튼 :  |소화갤러리 |작품 |민화교실 |소화소식   
	var td = document.createElement('td');
	var web_top_main_ul = document.createElement('ul');   
	for(var i in navi_datas){
		var web_li = document.createElement('li');
		web_li.innerHTML = navi_datas[i].name;
		web_li.style.display = 'inline-block';
		web_li.style.marginRight = '1rem';
		web_top_main_ul.appendChild(web_li);
	}
	td.appendChild(web_top_main_ul);
	tr.appendChild(td)

	// mobile 버전 메뉴버튼 :   ☰
	var td = document.createElement('td');
	var mobile_menu_btn = document.createElement('button');   
	mobile_menu_btn.innerHTML = '&#9776';
	td.appendChild(mobile_menu_btn);
	tr.appendChild(td)

    tbdy.appendChild(tr);
    tbl.appendChild(tbdy);

	nav.appendChild(tbl);


	// 서브메뉴들
	var ul = document.createElement('ul');
	ul.setAttribute('class','navi');
	for(var i in navi_datas){ 
		var navi_data		= navi_datas[i];
		var sub_navi_datas	= navi_data.sub_navi; 

		var li		 = document.createElement('li');
		li.setAttribute('class','navi_menu');

		var sub_navi_title_div = document.createElement('div');
        sub_navi_title_div.innerHTML = navi_data.name;
		sub_navi_title_div.setAttribute('class','sub_navi_title');
        li.appendChild(sub_navi_title_div);

		// set sub-navi name and content
		var sub_ul = document.createElement('ul');
		sub_ul.setAttribute('class','sub_navi');

		for(var k in sub_navi_datas){
			var img_div = document.createElement('div');
			var img = document.createElement('img');
			img.src = sub_navi_datas[k].img;
			img.style.height = '50px';
			img.style.width = '50px';

			img_div.appendChild(img);
			
			var a		= document.createElement('a');
			a.href		= sub_navi_datas[k].href;
			a.innerHTML = sub_navi_datas[k].name;

			var sub_li		= document.createElement('li');
			sub_li.setAttribute('class','sub_navi_menu');

			sub_li.appendChild(img_div);
			sub_li.appendChild(a);
			sub_ul.appendChild(sub_li);
		}

		li.appendChild(sub_ul);
		ul.append(li);
	}

	var nav = document.getElementsByTagName('nav')[0];
	nav.appendChild(ul);

};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    make_navigation();
  //initNavi();
} else {
  document.addEventListener("DOMContentLoaded", make_navigation);
}
