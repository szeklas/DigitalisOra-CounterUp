// DIGITÁLIS ÓRA
const digitOraPanel=document.querySelector("#digitOraPanel")

let napok=["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"]

let oraPanel=document.querySelector(".oraPanel")
let evPanel=document.querySelector(".evPanel")
let napPanel=document.querySelector(".napPanel")

function DigitalisOra(){

    let date=new Date()

    let year=date.getFullYear()
    let month=date.getMonth()+1
    let day=date.getDate()
    let dayIndex=date.getDay()
    
    let hour=date.getHours()
    let min=date.getMinutes()
    let sec=date.getSeconds()


    if(month<10){
        month=`0${month}`
    }
    
    if(day<10){
        day=`0${day}`
    }

    if(hour<10){
        hour=`0${hour}`
    }

    if(min<10){
        min=`0${min}`
    }

    if(sec<10){
        sec=`0${sec}`
    }

    oraPanel.innerHTML=`${hour}:${min}:${sec}`
    evPanel.innerHTML=`${year}.${month}.${day}`
    napPanel.innerHTML=`${napok[dayIndex]}`

}

window.onload=DigitalisOra()

setInterval(()=>{
    DigitalisOra()
},1000)


// Mouseover event
document.querySelector("#digitOraPanel").addEventListener("mouseover",()=>{
    digitOraPanel.style.backgroundColor="black"
    digitOraPanel.style.color="white"
    digitOraPanel.style.filter="drop-shadow(2px 3px 5px black)"
})

document.querySelector("#digitOraPanel").addEventListener("mouseleave",()=>{
    digitOraPanel.style.backgroundColor="white"
    digitOraPanel.style.color="black"
    digitOraPanel.style.filter="none"
})



//COUNTER UP

let youtubeCounter=499900
let twitterCounter=1400
let projectsCounter=0

function YoutubeCounter(){
    youtubeCounter++
    document.querySelector("#youtubeCounter").innerHTML=youtubeCounter
}

const youtubeInterval=setInterval(()=>{
    YoutubeCounter()

    if(youtubeCounter==500000){
        clearInterval(youtubeInterval)
        document.querySelector("#subscribers").innerHTML=`Subscribers`
    }
},20)


function TwitterCounter(){
    twitterCounter++
    document.querySelector("#twitterCounter").innerHTML=twitterCounter+"+"
}

const twitterInterval=setInterval(()=>{
    TwitterCounter()
    
    if(twitterCounter==1500){
        clearInterval(twitterInterval)
        document.querySelector("#followers").innerHTML=`Followers`
    }
},20)


function ProjectsCounter(){
    projectsCounter++
    document.querySelector("#projectsCounter").innerHTML=projectsCounter
}

const projectsInterval=setInterval(()=>{
    ProjectsCounter()

    if(projectsCounter==30){
        clearInterval(projectsInterval)
        document.querySelector("#projects").innerHTML=`Projects`
    }
},67)