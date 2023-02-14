export interface EventProps {
  eventType: string;
  listener: (event?: any) => void;
}

export function on(eventType: string, listener: (event?: any) => void) {
  document.addEventListener(eventType, listener);
}

export function off(eventType: string, listener: (event?: any) => void) {
  document.removeEventListener(eventType, listener);
}

export function once(eventType: string, listener: (event?: any) => void) {
  on(eventType, handleEventOnce);

  function handleEventOnce(event: (event?: any) => void) {
    listener(event);
    off(eventType, handleEventOnce);
  }
}

export function trigger(eventType: string, data?: any) {
  const event = new CustomEvent(eventType, { detail: data });
  document.dispatchEvent(event);
}
