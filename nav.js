 (function(){
    
	// set navi list data
	var navi_datas = [ 
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
					}];


	// set navi name and content
	var ul = document.createElement('ul');
	for(var i in navi_datas){ 
		var navi_data		= navi_datas[i];
		var sub_navi_datas	= navi_data.sub_navi; 

		var li		 = document.createElement('li');
		li.innerHTML = navi_data.name; 
		li.setAttribute('class','navi_menu');

		// set sub-navi name and content
		var sub_ul = document.createElement('ul');
		for(var k in sub_navi_datas){
			var sub_a		= document.createElement('a');
			sub_a.href		= sub_navi_datas[k].href;
			sub_a.innerHTML = sub_navi_datas[k].name;

			var sub_li		= document.createElement('li');
			sub_li.setAttribute('class','sub_navi_menu');

			sub_li.appendChild(sub_a);
			sub_ul.appendChild(sub_li);
		}

		li.appendChild(sub_ul);
		ul.append(li);
	}

	var nav = document.getElementsByTagName('nav')[0];
	nav.appendChild(ul);

})();
