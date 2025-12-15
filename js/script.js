let operation, answer, amount, timed, expired,cng
let count = correct = 0
let prd = 10;
let body = document.body
let opnPop = document.querySelector('.opnPop')
let confirm = document.querySelector('.confirm')
let yes = document.querySelector('.conf.btn1')
let cancel = document.querySelector('.conf.btn2')
let buttons = [...document.querySelectorAll('.hbtn')]
let quit = [...document.getElementsByClassName('quit')]
let restart = document.getElementsByClassName('restart')[0]
let header = document.getElementsByTagName('header')[0]
let main = document.getElementsByTagName('main')[0]
let footer = document.getElementsByTagName('footer')[0]
let start = document.getElementById('start')
let input = document.getElementById('input')
let home = document.getElementById('home')
let container = document.getElementById('container')
let startBack = document.getElementById('back')
let unlimited = document.getElementById('unlimited')
let progressive = document.getElementById('progressive')
let contain = document.getElementById('contain')
let pop = document.getElementsByClassName('pop')[0]
let help = document.getElementById('help')
let mq = document.getElementById('mq')
let test = document.getElementById('test')
let buttons2 = [...document.querySelectorAll('.in')]
let buttons3 = [...document.querySelectorAll('.opt')]
let transit = document.getElementsByClassName('transit')[0]
let play = document.getElementById('play')
let media = window.matchMedia('(min-width: 500px)')
let score = document.getElementsByClassName('score')[0]
let final = document.getElementsByClassName('final')[0]
let choose = [...document.getElementsByClassName('chs')]
let choice1 = choose[0]
let choice2 = choose[1]
let choice3 = choose[2]
let choice4 = choose[3]
let question = document.getElementById('question')
let timer = document.getElementById('timer')
let addition = document.getElementById('addition')
let subtraction = document.getElementById('subtraction')
let multiplication = document.getElementById('multiplication')
let division = document.getElementById('division')
let oprs = [...document.getElementsByClassName('opr')]
let oprContainer = document.getElementsByClassName('opr-container')[0]
let close = document.getElementsByClassName('close')[0]
let clock = document.getElementsByClassName('time')[0] 
buttons3.push(timer)
over = () => {
    count++
    clock.style.transition = 'width 0.2s linear'
    clcRtn = setTimeout(()=>clock.style.width = '100%', 2000)
    setTimeout(()=> clock.style.transition = 'width '+prd+'s linear',2900)
    cng = setTimeout(() => {
    let x = generate(0, operation)
    choose.forEach((g,i) => g.innerHTML = x[i + 1])
    question.innerHTML = x[0][0]
    clock.style.width = '0'
    },3000)
    expired = setTimeout(over,(prd * 1000) + 3000)
    if(count >= amount){
    clearTimeout(expired)
    clearTimeout(cng)
    clearTimeout(clcRtn)
    qboard.style.transition = 'opacity 0.5s ease-in, scale 0.5s ease-in'
    final.innerHTML = correct + ' / ' + count
    final.style.marginBottom = '5vh'
    final.style.fontSize = '2em'
    score.style.transition = 'opacity 0s, scale 0s'
    score.style.opacity = 0
    score.style.scale = 1.2
    score.style.display = 'flex'
    setTimeout(e => {
    score.style.transition = 'opacity 0.3s ease-out, scale 0.3s ease-out'
    qboard.style.opacity = 0
    qboard.style.scale = 0.7
    },3000)
    setTimeout(e => {
        score.style.opacity = 1
        score.style.scale = 1
    },3500)
    setTimeout(e => {
        qboard.style.opacity = 1
        qboard.style.scale = 1
        qboard.style.display = 'none'},3500)
    }
    setTimeout(e => ind(choose[crt],2.8),200)
}
oprs.forEach(f => f.onclick = () => {
    operation = f.value
    prd = 10 + 3*operation
    amount = document.getElementById('amount').value
    oprContainer.style.opacity = 0
    clock.style.transition = 'width '+prd+'s linear'
    setTimeout(() => {
        oprContainer.style.display = 'none'
        clock.style.width = '0'
    },100)
    timed ? expired = setTimeout(over,(prd*1000)+100) : 0
    timed ? clock.style.diplay = 'block' : 0
    let x = generate(0,operation);
    choose.forEach((f,i) => f.innerHTML = x[i + 1])
   question.innerHTML = x[0][0]
   block.style.display = 'none'
})
//choice onclick 
choose.forEach(f => f.onclick = () => { 
    count++
    timed ? clearTimeout(expired) : 0
    clock.style.transition = 'width 0.2s linear'
    clock.style.width = '100%'
    setTimeout(()=>clock.style.transition = 'width '+prd+'s linear',0)
    if(f.innerHTML == answer){
        ind(f,count < amount ? 1: 3);correct++
         ti =1000
    }else{
        ond(f,3);ind(choose.find(f => f.innerHTML == answer),3)
         ti = 3000
    }
    cng = setTimeout(()=>{
        let x = generate(0,operation);
        count < amount ? choose.forEach((f,i) => f.innerHTML = x[i + 1]) : 0
        count < amount ? question.innerHTML = x[0][0]:0
       clock.style.width = 0
       timed ? expired = setTimeout(over,prd*1000) : 0
        },ti) 
    if(count >= amount){
        setTimeout(e=>clearTimeout(expired),5000)
        qboard.style.transition = 'opacity 0.5s ease-in, scale 0.5s ease-in'
        final.innerHTML = correct + ' / ' + count
        final.style.marginBottom = '5vh'
        final.style.fontSize = '2em'
        score.style.transition = 'opacity 0s, scale 0s'
        score.style.opacity = 0
        score.style.scale = 1.2
        score.style.display = 'flex'
        setTimeout(e => {
        score.style.transition = 'opacity 0.3s ease-out, scale 0.3s ease-out'
        qboard.style.opacity = 0
        qboard.style.scale = 0.7
        },ti)
        setTimeout(e => {
            score.style.opacity = 1
            score.style.scale = 1
        },ti + 500)
        setTimeout(e => {
            qboard.style.opacity = 1
            qboard.style.scale = 1
            qboard.style.display = 'none'},ti + 500)
    }
})
//page load
let time2 = 0
let t2 = 0
body.onload = (e) => {
    mq.style.display = 'inline-block'
    mq.style.transition = 'opacity 1s ease'

    home.style.display ='flex'
    buttons.forEach(f => {
        f.style.transition = 'opacity 0s, translate 0s'
        f.style.opacity = 0
        f.style.translate = '-2rem'
    setTimeout(()=>{
        f.style.transition = 'opacity 0.6s ease, translate 0.3s ease-out'
        f.style.opacity = 1
        f.style.translate = '0'
        
    }, time2)        
    time2 += 100-t2
    t2+=20
    })
    setTimeout(()=>mq.style.opacity =1, 10);
   
}
//start click
start.addEventListener('click', e => {
    let time=750
    time1=200
    let t=t1=0
    buttons.forEach(f => {
        f.style.transition = 'opacity 0.3s ease-in, translate 0.3s ease-in,scale 0.1s ease'
        setTimeout(() => {
            f.style.translate='2rem'
            f.style.opacity = 0
        },time1)
        time1 += 100-t1
        t1+=30
})
        buttons2.forEach(btn => {
        btn.style.translate = '-2rem'
        btn.style.opacity = 0
        btn.style.transition = 'opacity 0.3s ease-out , translate 0.3s ease-out '
        setTimeout(() => {
        btn.style.translate = '0'
        btn.style.opacity = 1
        },time)
        time += 100-t
        t+=30
})
        setTimeout(()=>{
            home.style.display='none'
            input.style.display='flex'
        },600)
})
//startBack click
back.onclick = () => {
    let time = 200
    time1 = 900
    let t = t1 = 0
    buttons2.forEach(f => {
        f.style.transition = 'translate 0.3s ease-in, opacity 0.3s ease-in, scale 0.1s ease'
        setTimeout(() => {
            f.style.translate = '-2rem'
            f.style.opacity = 0
        },time)
        time+=100-t
        t+=30
    })
    buttons.forEach(f => {
        f.style.transition = 'translate 0.3s ease-out, opacity 0.3s ease-out'
        setTimeout(()=>{
            f.style.opacity = 1
            f.style.translate='0'
        },time1)
        time1 += 100-t1
        t1+=30
    })
    setTimeout(()=>{
        home.style.display = 'flex'
        input.style.display='none'},800)
    
    buttons2.forEach(f => {
        
    })
}
//help popup click
help.addEventListener('click', ()=>{
    contain.style.display='flex'
    pop.style.transition="transform 0s ease"
    pop.style.display='flex'
    pop.style.transform="scale(1.3)"
    setTimeout(()=>{
        contain.style.transition = 'opacity 0.5s ease'
        pop.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out"
        home.style.transition = 'scale 0.5s ease-in, opacity 0.5s ease-in'
        mq.style.transition = 'scale 0.5s ease-in,opacity 0.5s ease-in'
        contain.style.opacity=0.6
        pop.style.transform="scale(1)"
        pop.style.opacity=1
        home.style.opacity=0
        main.style.filter = '8px'
        mq.style.opacity = 0
    },50)
})
//popup return
contain.addEventListener('click', ()=>{
    pop.style.transition="opacity 0.3s ease-in, transform 0.5s ease-out"
    pop.style.transform="scale(1.3)"
    pop.style.opacity=0
    home.style.transition ='scale 0.5s ease-out, opacity 0.5s ease-out'
    mq.style.transition ='scale 0.5s ease-out, opacity 0.5s ease-out'
    home.style.opacity = 1
    mq.style.opacity = 1
    contain.style.opacity = 0
setTimeout(()=>{pop.style.display="none"},500)
     contain.style.display="none"
})
close.addEventListener('click', ()=>{
    contain.style.transition = 'opacity 0.2s ease'
   setTimeout(() => {
    pop.style.transition="opacity 0.3s ease-in, transform 0.5s ease-out"
    pop.style.transform="scale(1.3)"
    pop.style.opacity=0
    home.style.transition ='scale 0.5s ease-out, opacity 0.5s ease-out'
    mq.style.transition ='scale 0.5s ease-out, opacity 0.5s ease-out'
    setTimeout(e=>home.style.opacity = 1,10)
    mq.style.opacity = 1
    contain.style.opacity = 0
   },0)
setTimeout(()=>{pop.style.display="none"},500)
     contain.style.display="none"
})


// quiting opnPop click 
opnPop.onclick = e => {
    console.log(13)
    confirm.style.display = 'flex'
    clearTimeout(expired);clearTimeout(cng)
    timed?clock.style.transition = 'width 0s linear':0
    timed?clock.style.width = '100%':0
    choose.forEach(f => f.innerHTML = '')
    question.innerHTML = ''
}
// opnPop cancel
cancel.onclick = e => {
    clock.style.transition = 'width '+prd+'s linear';
    console.log(12)
    confirm.style.display = 'none'
    setTimeout(() => {
        let x = generate(0, operation)
    choose.forEach((g,i) => g.innerHTML = x[i + 1])
    question.innerHTML = x[0][0]
    clock.style.width = '0'
    expired = setTimeout(over,prd*1000)
    },0)
}
//play click
play.onclick = () => {
    timed = timer.checked
    if(timed){
        clock.style.display = 'block'
        clock.style.opacity = 1
    }else{
        clock.style.diplay = 'none'
        clock.style.opacity = 0
    }
    amount = document.getElementById('amount').value 
    if(amount){
    if(media.matches){
    transit.style.display = 'flex'
    setTimeout(e => transit.style.display = 'none',1500)
    setTimeout(() => {
        container.style.display = 'none'
        header.style.display = 'none'
        qboard.style.display = 'flex'
    },700)
    setTimeout(e => {
        oprContainer.style.display = 'flex'
        setTimeout(() => {
            oprContainer.style.opacity = 1
        },50)
     },1500)
}else{
    container.style.transition = '0.5s'
    container.style.opacity = 0
    header.style.opacity = 0
    qboard.style.display = 'flex'
    qboard.style.opacity = 0
    setTimeout(() => {
        qboard.style.transition = '0.5s'
        container.style.display = 'none'
        qboard.style.opacity = 1
        header.style.display = 'none'
    },100)
    setTimeout(e => {
        oprContainer.style.display = 'flex'
        setTimeout(() => {
            oprContainer.style.opacity = 1
        },50)
     },300)
}
}else{
    alert('You didn\'t specify an amount.')
}}
//quit button
quit.forEach(f => f.onclick = () => {
    clearTimeout(expired)
    clearTimeout(cng)
    if(media.matches){
        transit.style.display = 'flex'
        setTimeout(e => transit.style.display = 'none',1500)
        setTimeout(() => {
            container.style.display = 'flex'
            container.style.opacity = 1
            header.style.display = 'flex'
            qboard.style.display = 'none'
            score.style.display = 'none'
            confirm.style.display = 'none'
        },700)
    }else{
        container.style.display = 'flex'
        header.style.display = 'flex'
        setTimeout(() => {
            container.style.opacity = 1
            header.style.opacity = 1
            score.style.display = 'none'
        },500)
}
block.style.display = 'none'
choose.forEach(f => f.innerHTML = '')
question.innerHTML = ''
clock.style.transition = 'width 0s ease'
clock.style.width = '100%'
count = correct = 0
})
//restart onclick
restart.onclick = () => {
    setTimeout(e => {
        oprContainer.style.display = 'flex'
        setTimeout(() => {
            oprContainer.style.opacity = 1
        },50)
     },100)
     choose.forEach(f => f.innerHTML = '')
     question.innerHTML = ''
     clock.style.transition = 'width 0s linear'
     setTimeout(()=>timed ? clock.style.width = '100%':0,10)
     clearTimeout(expired)
     clearTimeout(cng)
     count = correct = 0
}