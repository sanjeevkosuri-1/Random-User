var fullname=document.querySelector("#Name")
var email=document.querySelector("#Email")
var phone=document.querySelector("#phone")
var gender=document.querySelector("#gender")
var image=document.querySelector("#image")
var dob=document.querySelector("#date")


fullname.innerHTML=" "
email.innerHTML=" "
phone.innerHTML=' '
gender.innerHTML=""
dob.innerHTML=''
async function  fetchuser(){
    var raws=await fetch('https://randomuser.me/api')
    var datas= await raws.json();
    console.log(datas)
    const result=datas.results[0]
    console.log(result)

    fullname.innerHTML=`${result.name.title}:${result.name.first}:${result.name.last}`
    email.innerHTML=result.email
    phone.innerHTML=result.cell
    gender.innerHTML=result.gender
    image.src=result.picture.large
    dob.innerHTML=result.dob.date

 }
 fetchuser()
