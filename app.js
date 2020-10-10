const inverse = p => p.split('').reverse().join();
const diese = p => p.split('').includes('#')
const myInput = document.querySelector('#myInput');
const myDiv = document.querySelector('.myDiv');
myInput.addEventListener('keyup', myInput => {
   
    if(diese(this.myInput.value)){
        this.myInput.setAttribute('class','success')
    }else {
        this.myInput.setAttribute('class','error')
    }
    
    
})


