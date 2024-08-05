customElements.define(
  "line-fixed",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
            <a href="https://lin.ee/jrJI6RD" target="_blank" class="line-fixed" id="line-fixed">
                <span>線上客服預約</span>
                <div class="img-container">
                    <img src="../image/other/line_icon_onbtn.svg" alt="line_icon_onbtn.svg">
                </div>
            </a>
        `;
    }
  }
);
