document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("button");
    const select = document.querySelector("select");
    const output = document.getElementById("result");
    const firstNum = document.querySelector("input:first-of-type");
    const secondNum = document.querySelector("input:last-of-type");

    btn.addEventListener("click", () => {
        let fn = parseFloat(firstNum.value);
        let sn = parseFloat(secondNum.value);
        if (isNaN(fn) || isNaN(sn)) {
            output.innerText = "Please enter valid numbers.";
        } else {
            if (select.value === "+") {
                output.innerText = fn + sn;
            } else if (select.value === "-") {
                output.innerText = fn - sn;
            } else if (select.value === "/") {
                if (sn === 0) {
                    output.innerText = "Cannot divide by zero.";
                } else {
                    output.innerText = fn / sn;
                }
            } else if (select.value === "*") {
                output.innerText = fn * sn;
            } else if (select.value === "%") {
                output.innerText = fn % sn;
            }
        }
    });
});
