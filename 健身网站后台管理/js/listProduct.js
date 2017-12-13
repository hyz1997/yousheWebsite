var total,pageSize,curPage,totalPage,myId;
function getData(page,pageSize){
    $.ajax({
        type: 'GET',
        url:"http://172.22.4.202:8888/blog/findAllProducts",
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
                //console.log(total);
                pageSize = data.data.pageSize; //每页显示条数
                curPage = page; //当前页
                totalPage = Math.ceil(total/pageSize); //总页数
                //console.log(totalPage);
                var data = data.data.result;//获取数据
                //console.log(data[0]);
                var li = "";
                for (var i = 0; i < data.length; i++) { //遍历json数据列
                    li += '<tr><td style="display: none" id="myId">'
                        +data[i].productId+
                        '</td><td id="name">'
                        +data[i].productName+
                        '</td><td id="type">'
                        +data[i].productType+
                        '</td><td id="content">'
                        +data[i].productContent+
                        '</td><td><img class="listProductImg" src="http://172.22.4.202:8888'
                        +data[i].productImg+
                        '"></td><td id="price">'
                        +data[i].productPrice+
                        '</td><td>'
                        +data[i].productKind+
                        '</td><td><a href="javascript:void(0)" id="edit">编辑</a></td><td id="del"><input type="button" class="btn btn-danger" id="del" value="删除"></td></tr>'    ;
                };
                //console.log(li);
                $("#article-list").html(li);
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
        delete("http://172.22.4.202:8888/blog/management/deleteProduct/",myId);
    });
    $(document).on('click','#edit',function() {
        myId = $(this).closest("tr").find('#myId').text();
        var name = $(this).closest("tr").find('#name').text();
        var content = $(this).closest("tr").find('#content').text();
        var price = $(this).closest("tr").find('#price').text();
        var type =$(this).closest("tr").find('#type').text();
        $('#courseName').val(name);
        $('#courseContent').val(content);
        $('#coursePrice').val(price);
        $('#courseType').val(type);
        $('#product').hide();
        $('#editPro').show();
    })
    $('#submit').click(function() {
        var title = $("input[type='text']").val();
        var content = $('#customized-buttonpane').html();
        var data = new FormData($('#productform')[0]);
        data.append("productId",myId);
        submit("http://172.22.4.202:8888/blog/management/updateProduct","listProduce.html",data);
    });
    
});