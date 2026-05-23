class PopupInfo extends HTMLElement {
    constructor() {
        super();
        this.shadow =  this.attachShadow({mode: 'open'})

        const template = document.getElementById("popup-template")
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback(){
        if(this.hasAttribute("img")){
            const img = this.shadowRoot.querySelector("img")

            img.src = this.getAttribute("img")
        }
    }
}

customElements.define("popup-info", PopupInfo)