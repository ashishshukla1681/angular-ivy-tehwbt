import { Component, Input, VERSION } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <h2>Version: {{ver}}!</h2>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  ver: string;

  constructor() {
    this.ver = VERSION.major;
  }
}
