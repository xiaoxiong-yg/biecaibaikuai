var head = document.getElementsByClassName('head')[0];
var main = document.getElementsByClassName('main')[0];
var timer,speed = 5,num = 0,key = true;
function start(){
    head.onclick = function(){
        this.style.display = 'none';
        key = true;
        move();
    }
}
start();
function move(){
    clearInterval(timer);
    timer = setInterval(function(){
        var set = parseInt(main.offsetTop) + speed;
        main.style.top = set + 'px';
        if(parseInt(main.offsetTop) >= 0){
            main.style.top = '-150px';
            creatdom();
        }
        var len = main.children.length;
        if(len >= 6){
            for(var i = 0;i < 4;i++){
                if(main.lastElementChild.children[i].classList.contains('i')){
                    clearInterval(timer);
                    key = false;
                    alert('游戏结束，得分为'+num);
                    newgame()
                }
            }
            main.removeChild(main.lastElementChild)
        }
    },20)
    play()
}
function creatdom() {
    var bdiv = document.createElement('div');
    bdiv.className = 'row';
    var index = Math.floor(Math.random()*4);
    for(var i = 0; i < 4;i++){
        var sdiv = document.createElement('div');
        bdiv.appendChild(sdiv);
        sdiv.className = 'small';
    }
    if(main.children.length == 0){
        main.appendChild(bdiv);
    }else{
        main.insertBefore(bdiv,main.children[0]);
    }
    main.children[0].children[index].style.backgroundColor = '#000';
    main.children[0].children[index].classList.add('i');
}
function play(){
    main.onclick = function(e){
        if(key){
            var tar = e.target;
            if(tar.classList.contains('i')){
                tar.style.backgroundColor = '#bbb';
                tar.classList.remove('i');
                tar.classList.add('j')
                num++;
            }else if(tar.classList.contains('j')){
                tar.style.backgroundColor = '#bbb';
            }else{
                clearInterval(timer);
                key = false;
                alert('游戏结束，得分为'+num);
                newgame()
            }
            if(num % 10 == 0 && num > 0){
                speed++;
            }
            console.log(speed)
        }
    }
}
function newgame(){
    head.style.display = 'block';
    main.innerHTML = '';
    num = 0;
    speed = 5;
}