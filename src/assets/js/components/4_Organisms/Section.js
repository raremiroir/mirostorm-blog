const sectionTemplate = document.createElement('template');
sectionTemplate.innerHTML = `
   <section>
      <h2>Title</h2>
      <p>
         <slot name="subtext"/>
      </p>
      <div class="content">
         <slot/>
      </div>
   </section>
   <style>
      section {
         margin: 4rem auto;
         width: 85%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
      }
      h2 {
         text-align: center;
         font-size: 52px;
         line-height: 62px;
         font-weight: 300;
         margin: 0 auto;
      }
      p {
         text-align: center;
         width: 85%;
         font-size: 1rem;
         font-weight: 300;
      }
      .content {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         gap: 2rem;
      }
   </style>
`;

class OrganismSection extends HTMLElement {
   constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      const template = sectionTemplate;
      const instance = template.content.cloneNode(true);
      this.shadowRoot.appendChild(instance);
      // Props
      this.shadowRoot.querySelector('h2').innerText = this.getAttribute('title');
   }
}

window.customElements.define('o-section', OrganismSection);