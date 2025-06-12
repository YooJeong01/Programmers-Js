// 클레스 내부는 엄격모드로만 실행된다

class Animal {
    legs = 4;
    tail = true;
    // 내부에서만 조회 가능한 변수
    // private field
    #nickName = 'tiger'; 
 
    constructor(name){ // 최초 1회만 실행
        this.name = name;
        this.stomach = [];
    }

    get eat(){
        return this.stomach;
    }

    set eat(food){
        this.stomach.push(food);
        console.log(`${this.#nickName}이 맛있게 밥을 먹습니다`);
        
    }
}

const animal = new Animal('몽실이');



class Tiger extends Animal {
    constructor(name){
        super(name);
        this.pattern = '호랑이 무늬'
    }

    hunt(target) {
        this.prey = target;
        return `${target}에게 조용히 접근한다.`
    }

    static bark(sound){
        return sound + '🐯';
    }

}

const tiger2 = new Tiger('호돌이');
// static을 붙였기떄문에 더이상 tiger2.bark()호출은 불가능하다
// Tiger.bark()는 가능하다


/*
// class Array extedns Onject {
//     reduce(){

//     }
//     forEach(){

//     }
//     Map(){

//     }
//     static isArray(){

//     }
//     static from(){

//     }
// }
*/

/*
1. 버튼 선택
2. textContent 수정
3. 클릭 이벤트 바인딩
4. 태그 생성하기
5. 태그 랜더링하기
*/


class Button {
    constructor({target, content}){
        this.button = document.querySelector(target);
        this.button.textContent = content;
        this.count = 0;

        this.attachEvent();
    }


    createTag(){
        return `<div>${++this.count}clicked</div>`
    }

    #render(){
        document.body.insertAdjacentHTML('beforeend', this.createTag());
    }


    handleClick(){
        this.#render();
        // 에러 터졌을떈 this.button.#render(); 가 된거라
        // 얘는 엘리먼트일뿐이지 class로 생성된게 아니라 class 내장 기능을 사용하지 못한다 (render)
        // 아래에 bind()를 따로 구성해서 this를 정확하게 잡아서 전달해주면
        // Button.#render(); 가 돼서 render를 할 수 있게 된다!
    }
    
    attachEvent(){
        this.button.addEventListener('click', this.handleClick.bind(this))
        // 여기서 함수 넣을때 this.handleClick만 하게 된다면 이 함수를 호출한 대상을 가리키게 되기 때문에
        // 우리는 인스턴스인 btn을 target해야하는데 this.button을 target 하게된다
        // 그래서 에러가 생긴다!
        // 그렇기 때문에 bind로 this를 바깥에 btn으로 잡아주기
    }

}

// const btn = new Button('.btn', 'click me!');

const btn2 = new Button({
    target:'.btn',
    content: 'click me!'
})



class User {
    #pw;

    constructor(id, pw){
        this.id = id;
        this.#pw = pw;
    }

    hashPassword(pw){
        this.#pw = `hashCODE ${pw} 소금 후추`
        return this.#pw
    }

    checkPassword(pw){
        return this.#pw === this.hashPassword(pw);
    }
}
const user = new User('tiger', 'hello123');


class Admin extends User {
    constructor(id, pw){
        super(id, pw);
        this.role = 'admin';
    }

    isAdmin(){
        return true;
    }

    banUser(user){
        console.log(`${user.id} 계정이 관리자 ${this.id}에 의해 정지됐습니다.`);
        
        user.isBanned = true;
    }
}
const admin = new Admin('admin', 'admin');


let guestCount = 1;
class Guest extends User {
    constructor(){
        const guestId = `guest_${++guestCount}`;
        super(guestId.null);
        this.role = 'guest';
    }

    isGuest(){
        return true;
    }

    checkPassword(){
        return false;
    }
}