const template = document.createElement('template')
template.innerHTML = `
<style>
.card {
  --br: 3px;
	position: relative;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
	background: linear-gradient(90deg, #fff5, #888, #fff5);
  background-blend-mode: overlay;
  background-color: lightblue;
  text-align: center;
	box-shadow: 0 14px 5px -12px #0002;
	border-radius: var(--br);
	border-top: 2px solid #fffa;
	border-bottom: 1px solid #6663;
}

.card::before,
.card::after {
	content: "";
	position: absolute;
	bottom: 0;
	top: 75%;
	left: 0;
	right: 0;
	z-index: -1;
	border-radius: var(--br;);
}

.card::before {
	transform-origin: bottom left;
	transform: skewy(-3deg);
	right: 60%;
	box-shadow: 0 14px 8px -8px #0003;
}

.card::after {
	transform-origin: bottom right;
	transform: skewy(3deg);
	left: 60%;
	box-shadow: 0 14px 8px -8px #0003;
}

hr {
  // border-top: #8886 solid 1px;
  border-top: #red solid 1px;
	border-bottom: #fff4 solid 1px;
}
</style>
<div class='card'>
<slot>Fart</slot>
</div>
`

class DcCard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('dc-card', DcCard)
