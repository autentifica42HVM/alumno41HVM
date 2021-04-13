class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        HUGO ENRIQUE VAZQUEZ MEDINA
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
