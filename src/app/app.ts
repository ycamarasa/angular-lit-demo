import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiToast } from '../lit/ui-toast';
import { UiInput } from '../lit/ui-input';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-lit-demo');
  email = signal('');

  showToast() {
    const input = document.querySelector('ui-input') as UiInput | null;
    const value = input?.value?.toString().trim() ?? '';

    if (!value) {
      input?.shadowRoot?.querySelector('input')?.focus();
      return;
    }

    let toast = document.getElementById('toast') as UiToast | null;

    if (!toast) {
      const newToast = document.createElement('ui-toast') as UiToast;
      newToast.id = 'toast';
      document.body.appendChild(newToast);
      toast = newToast;
    }

    toast.show(`Congratulations! The email "${value}" has been saved successfully.`, 'success');
  }

  onNameChange(event: Event) {
    const customEvent = event as CustomEvent;
    this.email.set(customEvent.detail);
  }
}
