const heroTemplate = document.createElement('template');
heroTemplate.innerHTML = `
   <header>
      <h1><slot/></h1>
      <p>
         <slot name="subtext"/>
      </p>
      <div class="actions-wrap">
         <slot name="actions"/>
      </div>
      <slot name="image"/>
   </header>
   <style>
      header {
         width: 100%;
         display: flex;
         gap: 1rem;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         background: linear-gradient(0deg, rgba(14,14,14,1) 0%, rgba(255,255,255,0) 100%);
         padding: 1rem auto;
      }
      h1 {
         width: 85%;
         text-align: center;
         font-size: clamp(3.25rem, 2.6667rem + 2.9167vw, 5rem);
         font-weight: 300;
         line-height: clamp(3.875rem, 3.3333rem + 2.7083vw, 5.5rem);
         letter-spacing: 0.1rem;
         margin: 0 auto;
      }
      p {
         margin: 0 auto;
         width: 85%;
         text-align: center;
      }
      .actions-wrap {
         display: flex;
         justify-content: center;
         align-items: center;
      }

      @media screen and (min-width: 768px) { 
         h1 {
            font-weight: 400;
         }
      }
   </style>
`;

class OrganismHero extends HTMLElement {
   constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      const template = heroTemplate;
      const instance = template.content.cloneNode(true);
      this.shadowRoot.appendChild(instance);
      // // Props
      // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
   }
}

window.customElements.define('o-hero', OrganismHero);