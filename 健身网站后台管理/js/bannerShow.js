var src;
console.log(1)
$(function() {
	var srcArr = [];
	var index = 0;
	$.ajax({
		type:"GET",
		url:"http://172.22.4.202:8888/blog/findAllBanners",
		success:function(data) {
			console.log(data.data);
			for(i=0;i<data.data.length;i++) {
				srcArr.push(data.data[i].bannerImg);
				console.log(data.data[i].bannerImg);
			}
			console.log(srcArr);
		}
	})
	$('#right').click(function() {
		if (index==3) {
			index = 0
		}
		else {
			$('.bannerShow img').attr('src',srcArr[index]);
			index++;
		}
		
	});
	$('#left').click(function() {
		if (index = -1) {
			index = 3
		} else {
			$('.bannerShow img').attr('src',srcArr[index]);
			index--;
		}
	})
	
})