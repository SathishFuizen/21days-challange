var btn=document.getElementById("btn");
var iframe=document.getElementById("fra");
var text=document.getElementById("text");


btn.addEventListener("click",function(){
    var html=text.textContent
    iframe.src="data:text/html;charset=ulf-8,"+ encodeURI(html)
})

text.addEventListener("click",function(){
    var html=text.textContent
    iframe.src="data:text/html;charset=ulf-8,"+ encodeURI(html)

})