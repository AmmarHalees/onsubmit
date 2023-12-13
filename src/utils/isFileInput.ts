export default (element: HTMLInputElement): element is HTMLInputElement =>
  element.type === 'file';
