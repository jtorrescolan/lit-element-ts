import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('app-greeting')
export class Greeting extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid black;
      text-align: center;
    }
  `;

  @property()
  name = 'World';

  render() {
    return html`
      <div>
        <h2>Hello ${this.name}</h2>
      </div>
    `;
  }
}