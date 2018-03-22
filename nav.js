var initNavi = function(){


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

    var slideSubNaviMenu = function(fold_sub_menu_ul){

        var sn_uls = document.querySelectorAll('ul.sub_navi');
        
        var spread_sn_ul = null;
        for (var k = 0; k < sn_uls.length; k++) {
            var height = parseInt(sn_uls[k].style.height);
            if(Number.isInteger(height) && (height>100)){
                 spread_sn_ul = sn_uls[k] ;
            }
        }

        if(spread_sn_ul){
            if(spread_sn_ul === fold_sub_menu_ul){
                slideUp(spread_sn_ul);
            }else{
                slideUp(spread_sn_ul, fold_sub_menu_ul);
            }

        }else{
            slideDown(fold_sub_menu_ul);
        }
    };

    var clickNaviMenu = function(menu_li, menu_idx){
        menu_li.onclick = function(){
            var m_idx = menu_idx +2;
            var cur_sn_ul = document.querySelector('ul.sub_navi:nth-child('+m_idx+')');
            slideSubNaviMenu(cur_sn_ul);
        }
    }; 

	var navi_lis = document.querySelectorAll('ul.navi li');
    for (var nl_i = 0; nl_i < navi_lis.length; nl_i++) {
        clickNaviMenu(navi_lis[nl_i], nl_i);
    }

};





/* 
var make_navigation = function(){
    
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

};
*/

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  initNavi();
} else {
  document.addEventListener("DOMContentLoaded", initNavi);
}
