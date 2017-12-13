var total,pageSize,curPage,totalPage,myId;
function getData(page,pageSize){
    $.ajax({
        type: 'GET',
        url:"http://172.22.4.202:8888/blog/findAllArticles",
        data: {
            'pageIndex':page,
            'pageSize':pageSize
        },
        async:false,
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
                for (var i = 0; i < data.length; i++) { //遍历json数据列
                    console.log(data[i].articleId);
                    li += '<tr><td style="display: none" id="myId">'
                        +data[i].articleId+
                        '</td><td style="display: none" id="content">'
                        +data[i].articleContent+
                        '</td></td><td id="title"><a href="editArt.html">'
                        +data[i].articleTitle+
                        '</td><td>发布</td><td>'
                        +data[i].articleTime+
                        '</td><td><a href="javascript:void(0)" id="edit">编辑</a></td><td id="del"><input type="button" class="btn btn-danger" id="del" value="删除"></td></tr>'	;
                };
                $("#articel-list").html(li);
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
        delete("http://172.22.4.202:8888/blog/management/deleteArticle/",myId);
    });
    $(document).on('click','#edit',function() {
        myId = $(this).closest("tr").find('#myId').text();
        var title = $(this).closest("tr").find('#title').text();
        $('#articel-title').val(title);
        var content = $(this).closest("tr").find('#content').text();
        $('#customized-buttonpane').html(content);
        $('#articel').hide();
        $('#editArticel').show();
    })
    $('#submit').click(function() {
        var title = $("input[type='text']").val();
        var content = $('#customized-buttonpane').html();
        console.log(content);
        submit("http://172.22.4.202:8888/blog/management/updateArticle","listArticel.html",data)
    });
    
});   
    