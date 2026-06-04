export function fireContactIntent(intent: string) {
  sessionStorage.setItem('contact-intent', intent);
  window.dispatchEvent(new CustomEvent('contact:intent', { detail: { intent } }));
}
