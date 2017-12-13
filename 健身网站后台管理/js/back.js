if(window.localStorage){
    console.log('This browser supports localStorage');
}else{
    alert('微软都放弃了IE，你还不放弃吗？IE会导致部分功能不能使用哟！');
}


/*上传文件*/
function submit(url,href,data) {
	$.ajax({
			type:"POST",
			url:url,
			data:data,
            async:false,
            cache:false,
            contentType:false,
            processData:false,
			success:function(data) {
				if(data.status=="1"){
					alert("保存成功！");
					windows.location.href=href;
				}
			},
			error:function(){
			   alert('保存失败！');
			}

		})
}
function delete(url,id) {
	$.ajax({
        type:"GET",
        url:"http://172.22.4.202:8888/blog/management/deleteCoach/"+myId,
        success:function(data) {
            if(data.status=="1"){
                alert("删除成功！");
                window.location.reload();
            }

        },
        error:function() {
            alert("删除失败！");
        }
    })
}
$(function() {
	
	$('.info-do li').hover(function(){
		console.log(this);
		$(this).find('.second-list').show();
	},function(){
		$(this).find('.second-list').hide();
	});

});
