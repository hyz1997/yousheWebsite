var myID;
//console.log(10);
$(function() {
	$('#submit').on("click",function(){
		var data = new FormData($('#productform')[0]);
		submit("http://172.22.4.202:8888/blog/management/insertWod","listWod.html",data);	
	});
	
})