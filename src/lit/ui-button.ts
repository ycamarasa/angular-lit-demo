import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ui-button')
export class UiButton extends LitElement {
  @property()
  declare variant: 'primary' | 'secondary';

  constructor() {
    super();
    this.variant = 'primary';
  }

  static override styles = css`
    button {
      color: white;
      margin-top: 10px;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    button.primary {
      background: #1976d2;
    }
    button.secondary {
      background: #e902c2;
    }
  `;

  override render() {
    return html`
      <button
        class=${this.variant}
        @click=${() =>
          this.dispatchEvent(
            new CustomEvent('ui-click', {
              bubbles: true,
              composed: true,
            })
          )}
      >
        <slot></slot>
      </button>
    `;
  }
}
