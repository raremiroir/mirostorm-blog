const sectionTemplate = document.createElement('template');
sectionTemplate.innerHTML = `
   <section class="section-wrap">
      <h2><slot name="title"/></h2>
      <p>
         <slot name="subtext"/>
      </p>
      <div class="content">
         <slot/>
      </div>
   </section>
   <style>
      .section_wrap {
         width: 85%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
      }
      h2 {
         text-align: center;
         font-size: 52px;
         font-weight: 400;
      }
      p {
         text-align: center;
      }
      .content {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         gap: 1rem;
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
      // // Props
      // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
   }
}

window.customElements.define('o-section', OrganismSection);