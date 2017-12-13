/*注意: 本js脚本请在网页源代码最后的地方放置*/

if(!window.localStorage){
alert('您的浏览器不支持 localStorage 技术!');
}else{
var spanObj = document.getElementById('s1');
//console.log(spanObj.innerText);
var saveTimer= setInterval(function(){
var str="";
if(document.all){/*IE*/ str=document.frames[1].document.body.innerHTML; }
else{/*Chrome,ff*/ str=document.getElementById("customized-buttonpane").innerHTML; }
if(str.length>20 && (str.indexOf("。")>-1 || str.indexOf("，")>-1)){ /*有内容才保存 且有句号或逗号*/
localStorage.setItem("ctValue", str);
var d = new Date();
var YMDHMS = d.getFullYear() + "-" +(d.getMonth()+1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
spanObj.innerText='（数据保存于: '+YMDHMS+'）';
console.log(spanObj.innerText);
setTimeout(function(){ spanObj.innerText=''; },5000);
}
    },25000); //每隔N秒保存一次
function stoplocs(){
clearInterval(saveTimer); //停止保存
//localStorage.removeItem("ctValue"); //清空
}
function showlocs(){
var html = localStorage.getItem("ctValue");
console.log(html);
document.getElementById("customized-buttonpane").innerHTML = html;
//editor.setContent(html);
//alert(localStorage.getItem("ctValue"));
}
}