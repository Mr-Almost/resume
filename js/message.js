!function(){
var view=document.querySelector('section.message')

var model={
    init:function(){
        var APP_ID = 'AAnijDKsSjmjCeLvXIz2xtrb-gzGzoHsz';
        var APP_KEY = 'TyisuXFL3yYz6RDpsMrq2Kuh';
        AV.init({appId: APP_ID,appKey: APP_KEY});
      },
    //获取数据
    fetch:function(){
        var query = new AV.Query('Message');
        return query.find()
    },
    //保存数据
    save:function(name,content){  
    var Message=AV.Object.extend('Message')
    var message = new Message();
   return message.save({
    'name':name,
    'content':content
    })
  }

}


var controller={
    view:null,
    model:null,
    messageList:null,
    form:null,
    init:function(view,model){
        this.view=view
        this.model=model

        this.form=view.querySelector('#postMessageForm')
        this.messageList=view.querySelector('#messageList')
        this.model.init()
        this.loadMessages()
        this.bindEvents()
    },
   
    loadMessages:function(){
       this.model.fetch().then( (messages)=> {
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
        })
    },
    bindEvents:function(){
            this.form.addEventListener('submit',(e)=>{
             e.preventDefault()
             if(!this.form.querySelector('input').value.length){ this.form.querySelector('input').disabled = 'disabled'; alert('请输入内容')}// 含有disabled属性的表单字段将不会被提交
             else{ this.saveMessage()}
            
            })
    },
    saveMessage:function(){
        let myForm=this.form
        let name=myForm.querySelector('input[name=name]').value
        let content=myForm.querySelector('input[name=content]').value
        this.model.save(name,content).then( function(object) {
            let li=document.createElement('li') 
            li.innerText=`${object.attributes.name}:${object.attributes.content}`
            let messageList=document.querySelector('#messageList')
            messageList.appendChild(li)
            myForm.querySelector('input[name=content]').value=''
        })
    }
}
    controller.init(view,model)

}.call()









