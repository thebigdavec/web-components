const template = document.createElement('template')
template.innerHTML = `
<style>
	.classname
</style>
<div class='classname'>
<slot></slot>
</div>
`

class TemplateComponent extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('dc-templatecomponent', TemplateComponent)
