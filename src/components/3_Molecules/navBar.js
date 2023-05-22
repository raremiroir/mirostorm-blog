const navbarTemplate = document.createElement('template');
navbarTemplate.innerHTML = `
   <div class="nav-wrap">
      <nav>
         <ul>
            <li>
               <a-button type="transp" href="#home">Home</a-button>
               <a-button type="transp" href="#product">Product</a-button>
               <a-button type="transp" href="#about">About</a-button>
               <a-button type="transp" href="#contact">Contact</a-button>
            </li>
         </ul>
      </nav>
   </div>
   <style>
      .nav_wrap {
         width: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
      }
      nav {
         width: fit-content;
         margin: 0 auto;
      }
      li {
         list-style: none;
      }
   </style>
`;

class MoleculeNavbar extends HTMLElement {
   constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      const template = navbarTemplate;
      const instance = template.content.cloneNode(true);
      this.shadowRoot.appendChild(instance);
      // // Props
      // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
   }
}

window.customElements.define('m-navbar', MoleculeNavbar);