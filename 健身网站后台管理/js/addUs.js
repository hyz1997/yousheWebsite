
$(function() {
	$('#submit').click(function(){
		var data = new FormData($('#productform')[0]);
		submit("http://172.22.4.202:8888/blog/management/updateAboutUs","#",data);
	});
	
})