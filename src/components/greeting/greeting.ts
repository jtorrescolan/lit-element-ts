import { css, customElement, html, LitElement, property } from 'lit-element';
import style from './greeting.scss';

@customElement('app-greeting')
export class Greeting extends LitElement {
  static get styles() {
    return [style({ css })]; 
  }

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