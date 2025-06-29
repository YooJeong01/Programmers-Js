// ==================== Template 실습 ======================

// const template = document.createElement('template');
// template.innerHTML = /* html */`
//             <style>
//                 @import url('./components/Counter/_Counter.css');
//             </style>

//             <button type="button" class="decrement" aria-label="감소">-</button>
//             <span>${10}</span>
//             <button type="button" class="increment" aria-label="증가">+</button>
//         `
// console.log(template)









// ==========================  범쌤코드(Shadow DOM. Counter 실습)  ============================
class _Counter extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        
        this.state = {
            value : +this.getAttribute('data-value') || 0
        }

        this.render();
        
        this.attachEvent();
    }

    static get observedAttributes() {
        return ['data-value']
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(name ==='data-value'){
            this.state.value = +newValue; // 얘 안해주면 렌더링때 값이 안바뀐다
            this.render();
        }
        console.log(name, oldValue, newValue);
    }

    increment(){
        this.state.value += 1;
        this.dataset.value = this.state.value;
    }

    decrement(){
        this.state.value -= 1;
        this.dataset.value = this.state.value
    }

    handleClick(e){
        const target = e.target.closest('button');
        if(!target) return;
        if(target.classList.contains('increment')){
            this.increment()
        } else{
            this.decrement()
        }
    }

    attachEvent(){
        this.shadowRoot.addEventListener('click',(e)=>this.handleClick(e));
    }

    render(){
        const {value} = this.state;
        // Template 실습
        // this.shadowRoot.append(template.content.cloneNode(true));

        // ShadowDOM 실습
        this.shadowRoot.innerHTML=/* html */`
            <style>
                @import url('./components/Counter/_Counter.css');
            </style>

            <button type="button" class="decrement" aria-label="감소">-</button>
            <span>${value}</span>
            <button type="button" class="increment" aria-label="증가">+</button>
        `
    }
}

customElements.define('c-counter2',_Counter);