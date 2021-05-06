import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lil-loading-router',
  templateUrl: './lil-loading-router.component.html',
  styleUrls: ['./lil-loading-router.component.scss']
})
export class LilLoadingRouterComponent implements OnInit {

  @Input() loading = false;
  @Input() colorClass = 'text-dark';                                    // Define a cor do spinner de loading
  @Input() typeSpinner = 'spinner-border';                              // Define o tipo de animação spinner
  @Input() backgroundStyle = {backgroundColor: 'grey', opacity: 0.8};   // Define as propriedades do background
  @Input() timeout = 0;                                                 // Define o tempo de execução do fake-loading

  configClassSpinner = '';                                              // Utilizado para juntar as classes

  constructor() { }

  ngOnInit(): void {
    this.configClassSpinner = this.colorClass + ' ' + this.typeSpinner;
  }

  show(timeout = 0) {
    this.loading = true;
    if (this.timeout > 0 || timeout > 0) {
      setTimeout(() => {
        this.hide();
      }, timeout > 0 ? timeout : this.timeout);
    }
  }

  hide() {
    this.loading = false;
  }
}
