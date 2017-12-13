
$(function() {
	$.ajax({
		type:"GET",
		url:"http://172.22.4.202:8888/blog/findBannerByType/smallBanner",
		success:function(data) {
			if (data.status=="1") {
				data = data.data;
				for(i=0;i<data.length;i++) {
					srcName = "http://172.22.4.202:8888"+data[i].bannerImg;
					srcArr.push(srcName);
					
					var banner = ".banner" + (i+1);
					var bannerId = ".bannerId" + (i+1);
					//console.log(bannerId)
					$(banner).attr("src",srcArr[i]);
					$(bannerId).html(data[i].bannerId);
				}
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
			console.log($(".bannerId").html());
			var data = new FormData();
			data.append("picture",file);
			console.log(bannerIdText);
			data.append("bannerId",bannerIdText);
			console.log(data);
			$.ajax({
				type:"POST",
				url:"http://172.22.4.202:8888/blog/management/updateBanner",
				data:data,
	            async:false,
	            cache:false,
	            contentType:false,
	            processData:false,
	            enctype: 'multipart/form-data',
				success:function(data) {
					alert("保存成功！");
					console.log(data);
					location.reload();
				},
				error:function() {
					alert("保存失败！");
				}
		   })
		});	
	
	var srcArr = [];
	var altArr = [];
	

	
})