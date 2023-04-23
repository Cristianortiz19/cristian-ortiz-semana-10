
setValues();

function setValues() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-del');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function(a) {
            let value = a.target.dataset.num;
            screen.value += value;
            console.log(value)
        })
    });

    equal.addEventListener('click', function(a){
        if(screen.value === ''){
            screen.value = "";
        }else {
            let result = eval(screen.value);
            screen.value = result;
        }
    });

    clear.addEventListener('click', function(a){
        screen.value = '';
    });
}