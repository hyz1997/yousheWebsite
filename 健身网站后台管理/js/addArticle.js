
$(function() {
	$('#submit').click(function() {
        var myID = new Date().getTime();
		var title = $("input[type='text']").val();
		var content = $('#customized-buttonpane').html();	
		var data = {
			"articleTitle":title,
			"articleContent":content,
			"articleId":myID
		};
		submit("http://172.22.4.202:8888/blog/management/insertArticle","listArticel.html",data);
	});
});