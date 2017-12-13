$(function() {
	$("#amend").click(function() {
		$("#changeLogin").hide();
		$("#changePw").show();
		
	});
	$("#cancel").click(function(){
		$("#changePw").hide();
		$("#changeLogin").show();
	})
	$("#landing").click(function() {
		var data = new FormData($('#login')[0]);
		$.ajax({
			type:"POST",
			url:"http://172.22.4.202:8888/blog/management/login",
			data:data,
			async:false,
            cache:false,
            contentType:false,
            processData:false,
			success:function() {
				if (data.status="1") {
					alert("登录成功");
					window.open("bannerChange.html");
				}
			}
		})
	});
	var oldPassword = '' ;
	var newPassword = '';
	var rePassword = '';
	$("#submit").click(function() {
		oldPassword = $("#oldPassword").val();
		newPassword = $("#newPassword").val();
		console.log(newPassword.length);
		if (newPassword.length<8||newPassword.length>20) {
			alert("请设置长度为8-20位数字或字母")
		}
		rePassword = $("#rePassword").val();
		if(newPassword==rePassword) {
			$.ajax({
				type:"POST",
				url:"http://172.22.4.202:8888/blog/management/updateUser",
				data:{
					"oldPassword":oldPassword,
					"password":newPassword
				},
				success:function(data) {
					if (data.status="1") {
						alert("修改成功");
						//window.location.reload();
					} else {
						alert("您的输入有误！");
					}
					
				},
				error:function() {
					alert("您的输入有误！");
				}

			})
		} else {
			alert("两次输入的密码不一致！");
			newPassword = '';
			rePassword = '';
			$("#newPassword").val('');
			$("#rePassword").val('');
		}
		
	})
	
});