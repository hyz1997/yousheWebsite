
$(function() {
	$('#submit').on("click",function(){
		myID = new Date().getTime();
		var data = new FormData($('#productform')[0]);
		data.append("coachId",myID);
		submit("http://172.22.4.202:8888/blog/management/insertCoach","listTrain.html",data);
	});
	
})