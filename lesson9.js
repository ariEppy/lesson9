/* let box = document.getElementById("div1");
let button = document.getElementById("change");
let timerID = null;

const change = () => {
    button.disabled = true;

    timerID = setTimeout(() => {
        box.style.backgroundColor = "blue";
        button.disabled = false;
        timerID = null;
    }, 2000);
};

const cancel = () => {
    if (timerID !== null) {
        clearTimeout(timerID);
        timerID = null;
        button.disabled = false;
    }
}; */

/* function count() {
    let time = 5;
    let timerDiv = document.getElementById("timer");

    function tick() {
        timerDiv.innerText = time;

        if (time > 0) {
            time--;
            setTimeout(tick, 1000);
        } else {
            timerDiv.innerText = "out of time";
        }
    }

    tick();
} */

const customIndexOf = (str1, char1) => {
    if(char1.length !== 1 || typeof char1 !== "string" || typeof str1 !== "string")
        throw new Error("one of the inputs is incorrect");
    for(let i = 0; i < str1.length; i++)
    {
        if(char1 === str1[i])
        {
                console.log(i);
                return;
        }
    }
    console.log(-1);

};
try {
    console.log(customIndexOf("hello", "e")); 
    console.log(customIndexOf("hello", "z"));  
    console.log(customIndexOf("hello", 1234));  
} catch (error) {
    console.error(error.message);
}


