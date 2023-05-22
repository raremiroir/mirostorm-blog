const cardTemplate = document.createElement('template');
cardTemplate.innerHTML = `
   <div>
      <h2>Bloop</h2>
   </div>
   <style>
      h2 {
         color: blue;
      }
   </style>
`;

class BaseCard extends HTMLElement {
   constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      const template = cardTemplate;
      const instance = template.content.cloneNode(true);
      this.shadowRoot.appendChild(instance);
      // Props
      this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
   }
}

window.customElements.define('base-card', BaseCard);