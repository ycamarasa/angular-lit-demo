import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ui-card')
export class UiCard extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: 1px solid #ddd;
      border-radius: 8px;
      max-width: 400px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      background-color: white;
      margin: 16px 0;
      font-family: Arial, sans-serif;
      padding: 25px!important;
    }

    header {
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 12px;
      display: block;
    }

    ::slotted(*) {
      margin-bottom: 12px;
      display: block;
    }
  `;

  override render() {
    return html`
      <header>
        <slot name="header"></slot>
      </header>

      <div class="body">
        <slot></slot>
      </div>

      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
  }
}
