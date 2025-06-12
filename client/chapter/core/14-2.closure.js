function earth(){
    let water = true;
    let gravity = 10;

    function tiger(){

    }

    return tiger;
}

const ufo = earth();



// 어디에 클로저를 쓰는가?

const button = document.querySelector('.btn');





const handleClick = (() => {
    let isClicked = false;
    
    return () => {
        if(!isClicked){
            document.body.style.background = 'orange';
        } else {
            document.body.style.background = 'white';
        }
        isClicked = !isClicked;
    }  
})()

/*
 그냥 handleClick 이렇게만 보내면 함수를 값으로 보내는거다
 실행이 안된채로 넣어주는거라 작동을 안한다
 그래서 이 경우에는 return에서 내보내는 함수를 실행하고 싶으니까
 handleClick() 으로 함수를 실행해서 보내준다
 button.addEventListener('click', handleClick());
*/


// IIFE 패턴을 활용하면 실행한 상태에서 내보내니까
// handleClick()을 할 필요가없다
// button.addEventListener('click', handleClick);

// document.querySelector('.first').addEventListener('click', () => {
//     console.log('hit');
    
//     button.removeEventListener('click', handleClick);
// })





function bindEvent(node, eventType, fn){
    if(typeof node === 'string') node = document.querySelector(node);
    node.addEventListener(eventType, fn);

    return () => node.removeEventListener(eventType, fn);
}

const remove = bindEvent('.btn','click', handleClick)




function useState(init){
    let value = init;

    function read(){
        // ~~~
        return value;
    }

    function write(newValue){
        // ~~~
        value = newValue;
    }

    return [read, write];
}


const [value, setValue] = useState('hello')

// const read = a[0];
// const write = a[1];





