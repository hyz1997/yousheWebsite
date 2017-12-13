$(function() {
	$.ajax({
		type:"GET",
		url:"http://172.22.4.202:8888/blog/findSchedule/GroupSchedule",
		success:function(data) {
			if (data.status=="1") {
				data = data.data;
				console.log(data.scheduleImg)
				srcName = "http://172.22.4.202:8888"+data.scheduleImg;
				$(".banner1").attr("src",srcName);
				$(".bannerId1").append(data.scheduleId);
			}
		}
	})
	$.ajax({
		type:"GET",
		url:"http://172.22.4.202:8888/blog/findSchedule/MembershipDues",
		success:function(data) {
			if (data.status=="1") {
				data = data.data;
				//console.log(data);
				srcName = "http://172.22.4.202:8888"+data.scheduleImg;
				$(".banner2").attr("src",srcName);
				$(".bannerId2").append(data.scheduleId);
			}
		}
	})
	var flie,result;
	$('input[type="file"]').change(function() {
		file = this.files[0];
		console.log(file);
	});
		$('.submit').click(function() {
			var bannerIdText = $(this).closest('div').find(".bannerId").text();
			var data = new FormData();
			data.append("picture",file);
			console.log(bannerIdText);
			data.append("scheduleId",bannerIdText);
			console.log(data);
			$.ajax({
				type:"POST",
				url:" http://172.22.4.202:8888/blog/management/updateSchedule",
				data:data,
	            async:false,
	            cache:false,
	            contentType:false,
	            processData:false,
	            enctype: 'multipart/form-data',
				success:function(data) {
					if(data.status=="1"){
						alert("保存成功！");
						console.log(data);
						location.reload();
					}
				},
				error:function() {
					alert("保存失败！");
				}
		   })
		});		
})