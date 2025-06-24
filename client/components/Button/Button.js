






class Button extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});

        this.state = {
            active: this.getAttribute('active') || false
        }

        this.render();

        this.button = this.shadowRoot.querySelector('button');

    }


    static get observedAttributes(){
        return ['active'];
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(name==='active'){
            this.state.active = newValue === 'true';
            this.render();
        }
    }


    handleClick(){
        console.log(this);  
        const newActiveState = !this.state.active;
        this.setAttribute('active', newActiveState); 
    }

    
    render(){
        const {active} = this.state;
        console.log(active)

        this.shadowRoot.innerHTML = /* html */ `
            <style>
                button {
                    background-color : ${ active ? 'yellowgreen' : 'skyblue'};
                }
            </style>
            <button 
                type="button"
                aria-label = "${ active ? '활성화' : '비활성화'}"
                aria-pressed = "${ active }"
            > 
                ${ active ? '🌞' : '👻'}
            </button>
        `

        this.shadowRoot.querySelector('button').addEventListener('click', this.handleClick.bind(this))
        
    }

}

customElements.define('my-button', Button);

