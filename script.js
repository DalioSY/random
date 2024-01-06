let p1 = document.querySelector('p')

function generateNumber(){
   
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (max > min){
        p1.innerHTML =`The drawn number is ${Math.floor(Math.random() * (max - min + 1)) + min}` ;
    
    }else {
        alert("The minimum value must be LESS than the maximum value")
    }

}