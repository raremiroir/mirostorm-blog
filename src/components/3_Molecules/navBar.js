const navbarTemplate = document.createElement('template');
navbarTemplate.innerHTML = `
   <div>
      <nav>
         <ul>
            <li>
               <a href="#home">Home</a>
               <a href="#product">Product</a>
               <a href="#about">About</a>
               <a href="#contact">Contact</a>
            </li>
         </ul>
      </nav>
   </div>
   <style>
      h2 {
         color: blue;
      }
   </style>
`;

class NavBar extends HTMLElement {
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

window.customElements.define('nav-bar', NavBar);