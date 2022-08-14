(function () {
    let screen = document.querySelector('.screen');
    let buttins = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');


    buttins.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
            console.log(screen.value);



        });
       


    });


    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.classList.add('btn-red');
            anime({
                targets: '.screen',
                keyframes: [
                  {translateY: -2},
                  {translateY: 0}
                ],
                duration: 300,
                easing: 'easeOutElastic(1, .8)',
                loop: false,
                complete: function(anim) {
                    screen.classList.remove('btn-red');
                  }
                
              });
              
        }else{
            let answer=eval(screen.value);
            screen.value=answer;
        }
    });

    clear.addEventListener('click',function(){
            screen.value='';
    });
})();




