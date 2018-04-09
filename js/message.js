var APP_ID = 'AAnijDKsSjmjCeLvXIz2xtrb-gzGzoHsz';
var APP_KEY = 'TyisuXFL3yYz6RDpsMrq2Kuh';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
var query = new AV.Query('Message');
query.find().then(function (messages) {
    let array=messages.map(( item)=> item.attributes)
console.log(array)
array.forEach((item)=>{
    let li=document.createElement('li')
    li.innerText=`${item.name}:${item.content}`
    let messageList=document.querySelector('#messageList')
    messageList.appendChild(li)
})

}, function (error) {
  alert('提交失败')
});
let myForm=document.querySelector('#postMessageForm')
postMessageForm.addEventListener('submit',function(e){
    e.preventDefault()
    let name=myForm.querySelector('input[name=name]').value
    let content=myForm.querySelector('input[name=content]').value
    var Message=AV.Object.extend('Message')
    var message = new Message();
    message.save({
        'name':name,
       'content':content
}).then(function(object) {
    let li=document.createElement('li')
    li.innerText=`${object.attributes.name}:${object.attributes.content}`
    let messageList=document.querySelector('#messageList')
    messageList.appendChild(li)
    myForm.querySelector('input[name=content]').value=''
  })
})
