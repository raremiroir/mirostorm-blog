const buttonTemplate = document.createElement('template');
buttonTemplate.innerHTML = `
   <button class="btn">
      <slot></slot>
   </button>
   <style>
    .btn {
      all: unset;
      cursor: pointer;
      border-radius: 0px;
      font-weight: 500;
      padding: 10px 30px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 17px;
      border: 2px solid;
    }
    .primary {
      background-color: #4452fe; /* Primary */
      border-color: #4452fe; /* Primary */
      color: white;
   }
    .outline {
      background-color: transparent;
      border-color: white;
      color: white;
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
            this.shadowRoot.querySelector('button').classList.add('primary'); break;
         case 'outline':
            this.shadowRoot.querySelector('button').classList.add('outline'); break;
         default:
            this.shadowRoot.querySelector('button').classList.add('primary'); break;
      }
   }
}

window.customElements.define('a-button', AtomButton);