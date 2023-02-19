let string = "";

let btn = document.querySelectorAll('.calculate');

Array.from(btn).forEach(button => {
    button.addEventListener('click', (event) => {
        if(event.target.innerHTML === "=")
        {
            string = eval(string);
            document.querySelector('.input').innerHTML = string;
        }
        else if(event.target.innerHTML === "C")
        {
            string = "";
            document.querySelector('.input').innerHTML = string;
        }
        else
        {
            console.log(event.target);
            string = string + event.target.innerHTML + " ";
            document.querySelector('.input').innerHTML = string;
        }
    })
}) 