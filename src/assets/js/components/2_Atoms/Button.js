const buttonTemplate = document.createElement('template');
buttonTemplate.innerHTML = `
   <a class="btn">
      <slot></slot>
   </a>
   <style>
    .btn {
      all: unset;
      cursor: pointer;
      border-radius: 0px;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 1rem;
      border: 2px solid;
      color: white
    }
    .primary {
      background-color: #4452fe; /* Primary */
      border-color: #4452fe; /* Primary */
   }
    .outline {
      background-color: transparent;
      border-color: white;
    }
    .transp {
      background-color: transparent;
      border-color: transparent;
    }
   </style>
`;

class AtomButton extends HTMLElement {
   constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      const template = buttonTemplate;
      const instance = template.content.cloneNode(true);
      this.shadowRoot.appendChild(instance);

      switch (this.getAttribute('type')) {
         case 'primary':
            this.shadowRoot.querySelector('a').classList.add('primary'); break;
         case 'outline':
            this.shadowRoot.querySelector('a').classList.add('outline'); break;
         case 'transp':
            this.shadowRoot.querySelector('a').classList.add('transp'); break;
         default:
            this.shadowRoot.querySelector('a').classList.add('primary'); break;
      }
   }
}

window.customElements.define('a-button', AtomButton);