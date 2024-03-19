/*console.log(document.getElementById("a"))
console.log(document.getElementsByClassName('a'))
console.log(document.getElementsByTagName('h1'))
console.log("sabari")
console.log(document.querySelector('.a'))
console.log(document.querySelectorAll('.a'))
console.log(document.querySelector('#a'))
console.log(document.querySelectorAll('#a'))*/
/*var count= document.getElementById('a');
console.log(count.innerHTML);
var image=document.getElementById('b')
console.log(image.src)





 var a= setInterval(function(){
    if(count.innerHTML>0)
        count.innerHTML-=1
    else
        
        clearInterval(a)

    
    if(count.innerHTML%2===0)
        image.src="https://png.pngtree.com/thumb_back/fh260/back_pic/03/58/87/6557a342a65732c.jpg"
    else
        image.src="https://cdn.pixabay.com/photo/2014/02/03/11/47/medications-257346__340.jpg"
 count.style.fontSize=count.innerHTML*10 +'vh'
    image.style.width=count.innerHTML*10 +"vw"

    console.log('run')
    


},1000)*/
/*var a=document.getElementById('a')

var btn=document.getElementById('btn')
btn.onclick=function(){
    btn.style.backgroundColor='rgb(' + Math.floor(Math.random()*255)+','+ Math.floor(Math.random()*255) +',' + Math.floor(Math.random()*255)+')'
    a.style.backgroundColor='rgb(' + Math.floor(Math.random()*255)+','+ Math.floor(Math.random()*255) +',' + Math.floor(Math.random()*255)+')'
    console.log(Math.floor(Math.random()*255))
    const z=new Audio()
    z.src="./ride.wav"
    z.play()
    


}


var toggle=document.getElementById('toggle')
var l=document.getElementById('l')
toggle.onclick=function(){
    if(l.classList.contains('s'))
    l.classList.remove('s')
    else
    l.classList.add('s')
}


var b1=document.getElementById('b1')
var b2=document.getElementById('b2')
var h=document.getElementById('h')
var c= window.getComputedStyle(h).fontSize

var size=parseInt(c.substring(0,c.length-2))
b1.onclick=function(){
    size+=10
    h.style.fontSize=size +'px'
}
b2.onclick=function(){
    size-=10
    h.style.fontSize=size +'px'
}


var n=document.getElementById('name')
n.addEventListener('input',function(e){


    var v =e.target.value
    v=v.toUpperCase()
    
    console.log(v)
    n.value=v

    
})


var p=document.getElementById('pass')
p.addEventListener('focus',function(){
    console.log('focused')
})
p.addEventListener('blur',function(){
    console.log('lost focus')
})


var s=document.getElementById('sub')
console.log(s)
s.addEventListener('submit',function(e1){
    
    e1.preventDefault()
    alert('hi')
    
})





document.body.addEventListener('keydown',function(e){
    var k=e.keyCode

    console.log(k +'key down')
})
document.body.addEventListener('keypress',function(e){
    var k=e.keyCode

    console.log(k +'key pressed')
})
document.body.addEventListener('keyup',function(e){
    var k=e.keyCode

    console.log(k +'key up')
})
var border=document.getElementById('a1')

document.body.addEventListener('keypress',function(e){
    var ke=e.key
    if (ke==='a')
    {
    const z=new Audio()
    z.src="./ride.wav"
    z.play()}

})
document.body.addEventListener('keydown',function(e){
    var ke=e.key
    if (ke==='a')
   {border.classList.remove('border-dark')
    border.classList.add('border-primary')
    
    const z=new Audio()
    z.src="./ride.wav"
    z.play()}

})
document.body.addEventListener('keyup',function(e){
    var ke=e.key
    if(ke==='a'){
        border.classList.remove('border-primary')
        border.classList.add('border-dark')



    }
})

var b2=document.getElementById('sss')
console.log(b2.classList)

    document.body.addEventListener('keydown',function(e){
        var ke=e.key
        if(ke==='s')
        {b2.classList.remove('border-dark')
        b2.classList.add('border-primary')
        const z=new Audio('./ride.wav')
        z.play()}

    })
    document.body.addEventListener('keypress',function(e){
        var ke=e.key
        if(ke==='s')
        {
        const z=new Audio('./ride.wav')
        z.play()}

    })
    document.body.addEventListener('keyup',function(e){
        var ke=e.key
        if(ke==='s')
        {b2.classList.add('border-dark')
        b2.classList.remove('border-primary')}
        

    })*/


    /*todo list
   var ul=document.getElementById('ul')

   var btn1=document.getElementById('butt')
   var e1
   var sub

   var form1=document.getElementById('form1')
   form1.addEventListener('input',function(e){
     e1=e.target.value
     
   })
   btn1.onclick=addItemsBE
   document.body.addEventListener('keydown',function(e){
    var k=e.key

    
    if(k==='Enter'){
       
        e.preventDefault()
        additem()
    }
   })

   function items(){
    var list=document.createElement('li')
    var text= document.createTextNode(e1)
    var bu=document.createElement('button')
    var i=document.createElement('i')
    i.classList.add("fa-solid") 
    i.classList.add("fa-xmark")
    bu.appendChild(i)
    bu.id='b'+(ul.childElementCount+1)

 
    
     list.appendChild(text)
     list.appendChild(bu)

     list.id='item'+(ul.childElementCount+1)
     list.classList.add("d-flex")
     list.classList.add("justify-content-between")
     return list
   }



  /*function additem(){
    if(e1!==null && e1!==undefined && e1!=='' && e1.substring(0)!==' '){
    
       var list= items()
        
    var item1=ul.firstElementChild
    ul.insertBefore(list,item1)
    
    form1.value=''
    e1=''

    }
    else{
        alert('enter todo list item')
    }
    
    
   }*/

   /*

   var r=document.getElementById('remove')
   r.addEventListener('click',function(){
    var item1=ul.firstElementChild
    ul.removeChild(item1)
    

 })


 var u=document.getElementById('update')
 u.addEventListener('click',function(e){
    if(e1!==null && e1!==undefined && e1!=='' && e1.substring(0)!==' '){
    
   var list= items()

    var item1=ul.firstElementChild
    ul.replaceChild(list,item1)
    form1.value=''
    e1=''}
    else{
        alert('enter a todo item')
    }
 })
 function id(){

 }
//remove specic item
 
var I
var subs
var itemid
 ul.addEventListener('mouseover',function(e){
    var a=e.target
   I= a.id
   
   
   subs=parseInt(I.substring(1,I.length))
  
   if(typeof(subs)==='number'){
   itemid='item'+subs


   
   var ite=document.getElementById(itemid)
 var del=document.getElementById(I)
 
 del.onclick=function(){
    ul.removeChild(ite)
 }}
    
    
 })


 function itemsFromBackEnd(response){
    var list=document.createElement('li')
    var text= document.createTextNode(response)
    var bu=document.createElement('button')
    var i=document.createElement('i')
    i.classList.add("fa-solid") 
    i.classList.add("fa-xmark")
    bu.appendChild(i)
    bu.id='b'+(ul.childElementCount+1)

 
    
     list.appendChild(text)
     list.appendChild(bu)

     list.id='item'+(ul.childElementCount+1)
     list.classList.add("d-flex")
     list.classList.add("justify-content-between")
     return list
   }

 function getItemsFromBackend(){
    var http=new XMLHttpRequest()
    http.open('GET','https://jsonplaceholder.typicode.com/todos',true)
    http.send()
    http.onreadystatechange=function(){
        if(this.status===200){
        if(this.readyState===4){
            var response=JSON.parse(this.responseText)
            for(var i=0;i<response.length;i++)
             ul.appendChild(itemsFromBackEnd( response[i].title ,))
        }}

        else{
            console.log('problem aquired')
        }
    }
 }
 getItemsFromBackend()

 function addItemsBE(){
    var http=new XMLHttpRequest()
    http.open('POST','https://jsonplaceholder.typicode.com/todos',true)
    var obj= JSON.stringify ({
        "userId": 1,
        "title": e1,
        "completed": false
      })

    http.send(obj)
    
        http.onreadystatechange=function(){
            if(this.status===201){
                if(this.readyState===4){
                    if(e1!==null && e1!==undefined && e1!=='' && e1.substring(0)!==' '){
    
                       ul.appendChild(itemsFromBackEnd(e1))
                     
                     form1.value=''
                     e1=''
                 
                     }
                     else{
                         alert('enter todo list item')
                     }
                    
                    
                }}
        
                else{
                    console.log('problem aquired')
                }
        }
 }















//end of todo*/

  /* var a=document.getElementById('a')
   a.addEventListener('mousedown',function(){
    console.log('down')
   })
   a.addEventListener('mouseup',function(){
    console.log('up')
   })
   a.addEventListener('click',function(){
    console.log('click')
   })
   a.addEventListener('dblclick',function(){
    console.log('double')
   })

var c=document.getElementById('c')
   var b=document.getElementById('b')
   var initial=0
/*b.addEventListener('mouseover',function(){
    initial+=1
    c.innerHTML=initial
    
})*/
/*b.addEventListener('mousemove',function(){
    initial+=1
    c.innerHTML=initial
    
})*/
/*b.addEventListener('mouseenter',function(){
    initial+=1
    c.innerHTML=initial
    
})*/


/*var str="9080240564"
var pat=/^(91)?[0-9]{10}$/
//var pat=new RegExp('pe[a-z]','gi')
console.log(pat.test(str))

console.log(str.match(pat))
console.log(str.search(pat))*/


/*var str="in"
var pat=/^(com|co|in)$/

console.log(pat.test(str))

console.log(str.match(pat))
console.log(str.search(pat))*/

/*var text=document.getElementById('text')
var err=document.getElementById('err')
text.addEventListener('input',function(e){
    var str=e.target.value
    var pat=/^[\w]{6,8}$/
    var res=pat.test(str)
    console.log(typeof(res))
    if (res===true){
        err.style.display='none'
    }
    else{
        err.style.display='block'
    }
})*/



//classes
//var age=5

/*var  person={
    name:'sabari',
    age:19,
    birthday:function(){
        console.log(this.age)
    }
}

console.log( person.age)
person.birthday()*/


/*function Person(n){
    this.name=n
   
    

}
Person.prototype.birthday=function(b){
    console.log(this.age=b)
}
Person.prototype.age
var sabari=new Person('sabari',19)
console.log(sabari.birthday())
var kumar=new Person('kumar')
kumar.age=17
console.log(kumar.age)
kumar.birthday(5)
kumar.age=8


console.log(kumar.age)

function classes(n){
    this.name=n
    this.birthday=function(){
        console.log(this.name)
    }

}

classes.prototype.age=7
classes.prototype.calculate=function(){
    console.log(this.age)
}
var sabari =new classes('sabari')
sabari.calculate()
sabari.birthday()*/



//JSON object

/*var obj={
    "name":"sabari",
    "age":20,
    "maried":false

}
console.log(obj)
console.log(obj.name)
var jsonstr=JSON.stringify(obj)
console.log(jsonstr)
console.log(JSON.parse(jsonstr))

var arr=[1,2,3,4]
console.log(arr)
console.log(arr[3])

//json array

var ar=[
    {
        "name":"sabari",
        "age":20,
        "maried":false
    
    },
    {
        "name":"kumar",
        "age":17,
        "maried":false
    
    },
    {
        "name":"thanappakium",
        "age":39,
        "maried":true
    
    }

]
var a=JSON.stringify(ar) 
console.log(a)
console.log(JSON.parse(a))
console.log(ar)*/
let a=5
let b=6
console.log(`this is ${a}, ${b}`)

class person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    fun=()=>{
        return `name: ${this.name},age ${this.age}`
    }
}

var p=new person('sabari',20)
console.log(p.fun())

class pilot extends person{
    constructor(name,age,work,aim){
        super(name,age)
        this.work=work
        this .aim=aim
    }
    data=()=>{
        return `work ${this.work} aim ${this.aim} name: ${this.name} , age ${this.age} details ${this.fun()}`
    }

}

var obj=new pilot('sabari',20,'pilot','engineer')

console.log(obj.data())
console.log(obj.fun())


const p1= new Promise((resolve,reject)=>{
    
    $.get('https://jsonplaceholder.typicode.com/todos',(data)=>{
        resolve(data)
    }).fail(err =>{
        reject(new Error(`this cause error status ${err}`))
    })
})

p1.then((respose)=>{
    console.log(response)
}).catch((error)=>{
    console.log(`error is ${error}`)
})








