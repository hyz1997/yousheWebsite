var total,pageSize,curPage,totalPage,myId;
function getData(page,pageSize){
    $.ajax({
        type: 'GET',
        url:"http://172.22.4.202:8888/blog/selectCoach",
        data: {
            'pageIndex':page,
            'pageSize':pageSize
        },
        dataType:'json',
        beforeSend:function(){
            $(".paging").append("<li id='loading'>loading...");//显示加载动画
        },
        success:function(data){
            if(data.status=="1"){
                $(".paging").empty();//清空数据区
                total = data.data.totalCount;//总记录数
                console.log(total);
                pageSize = data.data.pageSize; //每页显示条数
                curPage = page; //当前页
                totalPage = Math.ceil(total/pageSize); //总页数
                console.log(totalPage);
                var data = data.data.result;//获取数据
                var li = "";
                console.log(data);
                for (var i = 0; i < data.length; i++) { //遍历json数据列
                    //console.log(data[i].courseId);
                    li += '<tr><td style="display: none" id="myId">'
    					+data[i].coachId+
    					'</td><td id="name"><a href="javascript:void(0)">'
                        +data[i].coachName+
                        '</td><td id="introduction">'
                        +data[i].coachIntroduction+
                        '</td><td><img class="listProductImg" src="http://172.22.4.202:8888'
                        +data[i].coachImg+
                        '"></td><td id="edit"><a href="javascript:void(0)" id="edit">编辑</a></td><td id="del"><input type="button" class="btn btn-danger" id="del" value="删除"></td></tr>';
                };
                $("#article-list").html(li);
                console.log(li)
            }
        },
        complete:function(){ //生成分页条
            getPageBar();
            fun();
        },
        error:function(){
            alert("数据加载失败");
        }
    });
}
$(function(){
    getData(1,3);
    $(document).on('click','#del',function(){
        myId = $(this).closest("tr").find('#myId').text();
        console.log(myId);
        delete("http://172.22.4.202:8888/blog/management/deleteCoach/",myId);
    });
    $(document).on('click','#edit',function() {
        myId = $(this).closest("tr").find('#myId').text();
        console.log(myId);
        var  name = $(this).closest("tr").find('#name').text();
        var introduction = $(this).closest("tr").find('#introduction').text();
        $('#coachName').val(name);
        $('#coachIntroduction').val(introduction);
        $('#product').hide();
        $('#editPro').show();
    })
    $('#submit').click(function() {
        var data = new FormData($('#productform')[0]);
        data.append("coachId",myId);
        submit("http://172.22.4.202:8888/blog/management/updateCoach","listTrain.html");
    });
     
});

