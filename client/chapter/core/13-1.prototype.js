/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
    legs : 4,
    tail : true,
    get eat(){ //geter
        return this.stomach
    },
    set eat(food){ //setter
        this.stomach = [];
        this.stomach.push(food);
    }
}


const tiger = {
    pattern : '호랑이 무늬',
    hunt(target){
        this.prey = target;
        this.eat = this.prey;
        return `${target}에게 조용히 접근한다.`
    },
    __proto__ : animal
}

const 백두산호랑이 = {
    name : '백돌이',
    color : 'white',
    __proto__ : tiger,
}

const 한라산호랑이 = {
    name : '한돌이',
    color : 'orange',
    __proto__ : tiger,
}








// 생성자 함수 


function Animal(){
    this.legs = 4;
    this.tail = true;
    // 생성자함수에서는 getter, setter를 나눌 수 없다
    this.getEat = function(){
        return this.stomach ?? [];
    }
    this.setEat = function(food){
        this.stomach = [];
        this.stomach.push(food);
    }
}

const _animal = new Animal();

function Tiger(name){
    Animal.call(this)
    this.name = name;
    this.pattern = '호랑이무늬';
    this.hunt = function (target){
        this.prey = target;
        return `${target}에게 조용히 접근한다.`
    }
}

// Animal을 상속받는다
// Tiger.prototype = _animal; 

const _tiger = new Tiger('호돌이');






// function instance method
// f.call -> 함수를 대신 '실행'시켜줌 -> 빌려쓰기 -> 인수 : 값 , , , 형태로 받음
// f.apply -> 함수를 대신 '실행'시켜줌 -> 빌려쓰기 -> 인수 : 배열 [, , , ] 형태로 받음
// f.bind -> 함수를 대신 실행 X -> 빌려쓰기 -> 함수를 값으로써 받는다 -> bind() 실행해야 쓸 수 있다 

function sum(a,b){
    console.log(this);
    return a + b;
}


// (this, thisArgs1,,,) 이런 형태로 인자를 전달받는다
// 명시적 this 바인딩 {}

const _call = sum.call({}, 10, 20);
const _apply = sum.apply({}) //객체를 던지면 sum함수의 this로 전달됨
const _apply2 = sum.apply({},[10,20]) // 배열에 감싸서 변수 전달
const _bind = sum.bind({}) // 함수를 담는다, this를 bind에 전달해 묶어두기만 하고, 필요할때 함수를 실행할 수 있다
_bind(); // -> 함수 실행


// bind의 뉘앙스 예시
function handleClick(){}

// target.addEventListener('click', handleClick.bind({}))
// target.addEventListener('click', handleClick)
// 이런 경우는 클릭 이벤트가 발생해야 handleClick을 실행해야 하므로
// 인자로 handleClick() 로 전달해버리면 클릭전에 실행이 되버린다
// 그래서 값으로 전달해야함! -> 이럴때 bind를 쓸 수 있다

