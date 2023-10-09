let firstColor = document.getElementById('color-a')
let secondColor = document.getElementById('color-b')
let buttonsElem = document.querySelectorAll('.buttons button')
let generatorBtn = document.getElementById('submit') 
let textAreaBfCode = document.getElementById('code')
let copyElem = document.getElementById('copy')

let currentBgDirect = 'to bottom'

buttonsElem.forEach(function(buttons){
    buttons.addEventListener('click' , function(event){
        let bgColorDirect = event.target.dataset.direction 
        let directionElem  = event.target

        document.querySelector('.active').classList.remove('active')

        if(event.target.tagName === 'BUTTON'){
            directionElem.classList.add('active')
        }else{
            directionElem.parentElement.classList.add('active')
        }

        currentBgDirect = bgColorDirect


    })
})

function generateBG() {
    let bgCssCode  = ` linear-gradient(${currentBgDirect},${firstColor.value},${secondColor.value})`
    
    textAreaBfCode.value = 'background' + bgCssCode

    document.body.style.background = bgCssCode

}
generatorBtn.addEventListener('click' , function generatorBtnFun(){
    generateBG()
    
} )

generateBG()


copyElem.addEventListener('click' , function copyFun(){

        // Select the text field
        textAreaBfCode.select();
        textAreaBfCode.setSelectionRange(0, 99999); // For mobile devices
      
        // Copy the text inside the text field
        navigator.clipboard.writeText(textAreaBfCode.value);

        copyElem.innerHTML = 'coped'
        copyElem.style.backgroundColor = 'green'

        setInterval(() =>{
            copyElem.innerHTML = 'copy'
        copyElem.style.backgroundColor = '#4a6ee0'

    },1500)
      
})
