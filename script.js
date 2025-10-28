//variable.addeventlistener('event eg(click)', (store eg(ele) => {
//    function();
//}))
//class eg(display).innerText += event eg(ele).target.innerText
let display = document.querySelector('.display')
let buttons = Array.from(document.querySelectorAll('.buttons'))

buttons.forEach((btn) => {
    btn.addEventListener('click' ,(e) => {
        switch(e.target.innerText){
            case "=" :
                display.innerText = eval(display.innerText);
                break;
            case "C":
                display.innerText = ""
                break;
            case "×":
                display.innerText += "*"; 
                break;
            case "÷":
                display.innerText += "/"; 
                break;
            case "sin":
                display.innerText =  Math.sin(display.innerText)
                break;
            case "cos":
                display.innerText =  Math.cos(display.innerText)
                break;
            case "tan":
                display.innerText =  Math.tan(display.innerText)
                break;
            case "log":
                display.innerText =  Math.log(display.innerText)
                break;
            case "x^":
                display.innerText =  Math.pow(display.innerText,2)
                break;
            case "rd":
                display.innerText =  Math.round(display.innerText)
                break;
            
            case "⇐":
                display.innerText = display.innerText.slice(0, -1)
                break
            
            
            default:
                display.innerText += e.target.innerText
        }
    } )
})