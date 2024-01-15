let p1 = document.querySelector('.p1')

function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (max > min) {
        p1.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;
        p1.style.color = "green";
    }
    if (max === min) {
        p1.innerHTML = "minimum number must be DIFFERENT from the maximum number";
        p1.style.color = "yellow";
    }
    if (max < min) {
        p1.innerHTML = "The minimum value must be LESS than the maximum value";
        p1.style.color = "red";
    }
}