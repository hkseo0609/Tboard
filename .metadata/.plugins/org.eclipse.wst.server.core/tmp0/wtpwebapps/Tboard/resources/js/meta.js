var meta = meta || {};

meta.common=(function(){
	var init = function(ctx){
		alert(ctx);
		meta.session.init(ctx);
		meta.main.getBoard();
	};
	
	var onCreate = function(){
		
	};
	
	var setContextView = function(){
		
	};
	
	return {init:init}
})();

meta.session = {
		init : function(ctx){
			sessionStorage.setItem('x',ctx);
			sessionStorage.setItem('j',ctx+'/resources/js');
			sessionStorage.setItem('c',ctx+'/resources/css');
		},
		getPath : function(x){
			return sessionStorage.getItem(x);
		}
};

var $$ = function(x){return meta.session.getPath(x);};

meta.main = (function(){
	var ctx, js;
	var init=function(){
		ctx=$$('x');
		js=$$('j');
		
	};
	var getBoard=function(){
		init();
		alert('메인진입'+ctx);
		/*$.getJSON(ctx+'/get/1', d=>{
			alert('제이슨탐22');
			$('#d1').text(d.get.seq);
			$('#d2').text(d.get.title);
			$('#d3').text(d.get.content);
			$('#d4').text(d.get.createDt);
		});*/
		$.ajax({
			url:ctx+'/get/10',
			method:'get',
			contentType:'application/json',
			success : d=>{
				alert('제이슨탐');
				$('#d1').text(d.board.seq);
				$('#d2').text(d.board.title);
				$('#d3').text(d.board.content);
				$('#d4').text(d.board.createDt);
			},
			error : (x,s,m)=>{
				alert('에러 발생'+m);
			}
		});
	};
	
	return{init:init,
		getBoard:getBoard}
})();