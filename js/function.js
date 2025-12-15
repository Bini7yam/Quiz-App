let block = document.getElementById('block')
let crt = 0
function clickScale(element){
    element.style.transition='rotate 0.2s ease-out, scale 0.2s ease-out'
    element.style.rotateY = '90deg'
}
function generate(diff, opr) {
    let arr = [], x, y
    let result = []
    let random = [0]
    do {
    x = Math.floor(Math.random() * 40) + 5
    y = Math.floor(Math.random() * 40) + 5
    } while (x == y)
    if(opr == 0){
         answer = x + y
        arr.push(answer)
        result.push(x + ' + ' + y , answer)
    }else if(opr == 1){
         answer = x - y
        arr.push(answer)
        result.push(x + ' - ' + y , answer)
    }else if(opr == 2){
        y = Math.ceil(y / 2) 
        x = Math.ceil(x / 2) 
         answer = x * y
        arr.push(answer)
        result.push(x + ' x ' + y , answer)
    }else if(opr == 3){
        x = Math.ceil(x / 2) 
        y = Math.ceil(y / 2) 
         answer = x;
        arr.push(answer)
        result.push(x * y + ' / ' + y , answer)
    }
    while(arr.length - 4){
        let r = Math.floor(Math.random() * 5) + Math.ceil((opr + 1) / 2) * diff * 20
        r = arr[0] + r * (Math.floor(Math.random() * 2) ? -1 : 1)
        r && !arr.includes(r) && r != x && r != y && (r > 0 || !(opr - 1))? arr.push(r): 0
    }
    let temp = arr[0]
    let index = Math.floor(Math.random() * 4)
    arr[0] = arr[index]
    arr[index] = temp
    arr.unshift(result)
    crt = index
    return arr
}
function ind(element, time) {
    span = document.createElement('span')
    span.style.position = 'absolute'
    span.style.height = '100%'
    span.style.width = '0'
    span.style.left = '0'
    span.style.backgroundColor = 'green'
    span.style.opacity = 1
    span.style.zIndex = '-1'
    span.style.transition = 'width 0.3s ease-out, opacity 0s'
    element.append(span)
   block.style.display = 'block'
    setTimeout(() => {
        span.style.width = '100%'
    },0)
    setTimeout(() => {
        block.style.display = 'none'
    },time * 1000)
}
function ond(element, time) {
    span2 = document.createElement('span')
    span2.style.position = 'absolute'
    span2.style.height = '100%'
    span2.style.width = '0'
    span2.style.left = '0'
    span2.style.backgroundColor ='red'
    span2.style.opacity = 1
    span2.style.zIndex = '-1'
    span2.style.transition = 'width 0.3s ease-out, opacity 0s'
    element.append(span2)
    setTimeout(() => {
        span2.style.width = '100%'
    },0)
    setTimeout(() => {
    },time * 1000)
}