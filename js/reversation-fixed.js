customElements.define('reversation-fixed', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <button class="reversation-fixed" id="reversation-fixed">
                <span>填單諮詢</span>
                <i class="fa-solid fa-file-pen"></i>
            </button>
        `;
    }
});