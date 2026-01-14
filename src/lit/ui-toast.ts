import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('ui-toast')
export class UiToast extends LitElement {
  @property({ type: String }) declare message: string;
  @property({ type: String }) declare type: 'info' | 'success' | 'error';
  @property({ type: Number }) declare duration: number;
  @state() declare visible: boolean;

  constructor() {
    super();
    this.message = '';
    this.type = 'info';
    this.duration = 3000;
    this.visible = false;
  }
  static override styles = css`
    :host {
      position: fixed;
      bottom: 24px;
      right: 24px;
      display: block;
      max-width: 300px;
      font-family: Arial, sans-serif;
      z-index: 1000;
    }

    .toast {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      border-radius: 6px;
      color: white;
      font-size: 0.95rem;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.3s, transform 0.3s;
    }

    .toast.show {
      opacity: 1;
      transform: translateY(0);
    }

    .info {
      background-color: #2196f3;
    }
    .success {
      background-color: #4caf50;
    }
    .error {
      background-color: #f44336;
    }
  `;

  override render() {
    return html`
      <div class="toast ${this.type} ${this.visible ? 'show' : ''}">${this.message}</div>
    `;
  }

  show(message?: string, type?: 'info' | 'success' | 'error') {
    if (message) this.message = message;
    if (type) this.type = type;

    this.visible = true;

    setTimeout(() => {
      this.visible = false;
    }, this.duration);
  }
}
