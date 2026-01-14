import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('ui-input')
export class UiInput extends LitElement {
  @property()
  declare label: string;
  @state()
  declare value: string;

  constructor() {
    super();
    this.label = '';
    this.value = '';
  }

  static override styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      margin-bottom: 12px;
    }

    label {
      display: block;
      margin-bottom: 4px;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
      box-sizing: border-box;
    }

    input:focus {
      border-color: #1976d2;
      outline: none;
      box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
    }
  `;

  override render() {
    return html`
      <label>${this.label}</label>
      <input .value=${this.value} @input=${this.onInput} />
    `;
  }

  private onInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;

    this.dispatchEvent(
      new CustomEvent('ui-change', {
        detail: this.value,
        bubbles: true,
        composed: true,
      })
    );
  }
}
