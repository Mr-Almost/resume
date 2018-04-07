<script>
       
/* setTimeout(function(){
siteWelcome.classList.remove('active')
   },100) */
   
let specialTags=document.querySelectorAll('[data-x]')
for(let i=0;i<specialTags.length;i++)
{
    specialTags[i].classList.add('offset')
}

setTimeout(function () {
findCloset();
},500)



window.onscroll =function(xxxx){
if(window.scrollY >0){
    topNavBar.classList.add('sticky')
}else{
    topNavBar.classList.remove('sticky')
}
findCloset();
}




function findCloset(){
let specialTags = document.querySelectorAll('[data-x]')
let minIndex = 0
for(let i =1;i<specialTags.length; i++){
if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
  minIndex = i
}
}
specialTags[minIndex].classList.remove('offset')


let id=specialTags[minIndex].id
let a=document.querySelector('a[href="#'+id+'"]')
let li=a.parentNode
let brotherAndme=li.parentNode.children
for(let i=0;i<brotherAndme.length;i++)
{
    brotherAndme[i].classList.remove('highlight')
}
li.classList.add('highlight')
}





let liTags =document.querySelectorAll('nav.menu >ul >li')
for(let i=0;i<liTags.length;i++){
    liTags[i].onmouseenter =function(x){
    let li=x.currentTarget.classList.add('active')
    }

    liTags[i].onmouseleave =function(x){
    let li=x.currentTarget.classList.remove('active')
    }
}

function animate(time) {
requestAnimationFrame(animate);
TWEEN.update(time);
}
requestAnimationFrame(animate);

let aTags =document.querySelectorAll('nav.menu >ul >li >a')
for(let i=0;i<aTags.length;i++){
 aTags[i].onclick=function(x){
     x.preventDefault();  
     let a=x.currentTarget
     let href=a.getAttribute('href')
     let element=document.querySelector(href)
     let top=element.offsetTop

     let currentTop=window.scrollY 
     let targetTop=top-80

     let s=targetTop - currentTop
     var coords = {y: currentTop }; 
     var t = Math.abs( (s/100)*300 )
     if(t>500){t=500}

     var tween = new TWEEN.Tween(coords)
     .to({ y: targetTop}, t)
     .easing(TWEEN.Easing.Quadratic.InOut) 
     .onUpdate(function() { 
        window.scrollTo(0,coords.y)
    })
    .start(); 

}
}



</script>