const cardTemplate = document.createElement('template');
cardTemplate.innerHTML = `
   <div class="card">
      <div class="card-header">
         <iconify-icon icon="mdi:home" style="color: #02e4c0;" width="24" height="24"></iconify-icon>
         <h3>Title</h3>
      </div>
      <slot/>
   </div>
   <style>
      .card {
         display: flex;
         flex-direction: column;
         gap: 1rem;
         border-radius: 0.5rem;
         overflow: hidden;
      }
      .card-header {
         display: flex;
         justify-content: start;
         align-items: center;
         gap: 1rem;
      }
      h3 {
         font-size: 1.5rem;
         line-height: 1.75rem;
         font-weight: 400;
         color: white;
         margin: 0;
      }
   </style>
`;

class MoleculeCard extends HTMLElement {
   constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      const template = cardTemplate;
      const instance = template.content.cloneNode(true);
      this.shadowRoot.appendChild(instance);
      // Props
      this.shadowRoot.querySelector('h3').innerText = this.getAttribute('title');
      this.shadowRoot.querySelector('iconify-icon').setAttribute('icon', this.getAttribute('icon'));

      switch (this.getAttribute('bg')) {
         case 'white':
            this.shadowRoot.querySelector('h3').style.color = '#000000';
            this.shadowRoot.querySelector('iconify-icon').style.color = '#000000';
            this.shadowRoot.querySelector('.card').style.backgroundColor = '#ffffff';
            break;
         default:
            this.shadowRoot.querySelector('h3').style.color = '#ffffff';
            this.shadowRoot.querySelector('iconify-icon').style.color = '#02e4c0';
            this.shadowRoot.querySelector('.card').style.backgroundColor = 'transparent';
            break;
      }
      if (this.getAttribute('customHeader') == 'true') {
         this.shadowRoot.querySelector('.card-header').style.display = 'none';
      }
   }
}

window.customElements.define('m-card', MoleculeCard);