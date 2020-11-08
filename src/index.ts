import { Greeting } from './components/component';

declare global {
  interface HTMLElementTagNameMap {
    'app-greeting': Greeting
  }
}

export { Greeting }