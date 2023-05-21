const template = document.createElement('template');
template.innerHTML = `
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Miro Storm - Blog</title>

   <link rel="stylesheet" href="/public/assets/css/style.css">
</head>
<body>


   <script type="module" src="/public/assets/js/main.js"></script>
</body>
`;

export default class BaseLayout extends HTMLElement {
   constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
   }
}

window.customElements.define('layout-base', BaseLayout);