
/**
 * 정해진 콜백만 사용해야하는건 아니다
 * 만들고싶은 콜백이 있으면 만들어도 된다
 * 
 */
class MyElement extends HTMLElement {
    count = 0;

    constructor(){
        super();
    }

    // 연결이 되는 순간 바로 호출되는 함수
    connectedCallback(){
        console.log('mount');
        this.render();
        this.attachEvent();
    }

    // 연결이 끊기는 순간(엘리먼트가 제거되는 순간) 바로 호출되는 함수
    disconnectedCallback(){
        console.log('unmount');
    }

    // attribute가 바뀌면 attributeChangeCallback에게 데이터를 넘겨준다
    static get observedAttributes(){
        return ['data-value']
    }

    // observedAttrigutes에게 받은 데이터를 콘솔에 찍어준다
    // 바뀌면 재렌더링 해준다 => 리액트 상태 동기화랑 같음
    // 이벤트 발생시 화면에서 바뀌는거 확인 할 수 있음
    attributeChangedCallback(name, oldValue, newValue){
        if(name === 'data-value'){
            this.render();
        }
        console.log(name, oldValue, newValue);
    }
    
    handleClick(){
        console.log('clicked');
        this.dataset.value = ++ this.count;
        
    }
    
    attachEvent(){
        this.addEventListener('click', this.handleClick)
    }

    render(){
        console.log(this);
        this.innerHTML = this.dataset.value;
    }

}

customElements.define('my-button',Button);

// 브라우저에게 만든 태그를 알려주는 시점
// customElements.define('my-element', MyElement);

// const element = document.createElement('my-element');
// document.body.append(element);




class HelloButton extends HTMLButtonElement {
    constructor(){
        super();
    }
}


customElements.define('hello-button',HelloButton, { extends : 'button'});





