class Counter extends HTMLElement {
    count = 0;
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render();
        this.button = this.shadowRoot.querySelector('#value');
    }

    static get observedAttributes(){
        return ['data-value'];
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(name==='data-value'){
            this.render();
        }
        console.log(name, oldValue, newValue);
    }

    handleClickPlus(){
        this.dataset.value = ++ this.count;
        
    }
    handleClickMinus(){
        this.dataset.value = -- this.count;

    }

    render(){
        this.shadowRoot.innerHTML = /* html */`
            <button type="button" id="minus" aria-label="감소">-</button>
            <span id="value">${this.dataset.value}</span>
            <button type="button" id="plus" aria-label="증가">+</button>
            `
        this.shadowRoot.querySelector('#minus').addEventListener('click', this.handleClickMinus.bind(this))
        this.shadowRoot.querySelector('#plus').addEventListener('click', this.handleClickPlus.bind(this))
    }
}


customElements.define('c-counter', Counter);



