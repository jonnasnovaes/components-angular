import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lil-loading-spinner',
  templateUrl: './lil-loading-spinner.component.html',
  styleUrls: ['./lil-loading-spinner.component.scss']
})
export class LilLoadingSpinnerComponent implements OnInit {

  @Input() loading = false;
  @Input() colorClass = 'text-primary';       // Define a cor do spinner de loading
  @Input() typeSpinner = 'spinner-border';    // Define o tipo de animação spinner

  configClassSpinner = '';                    // Utilizado para juntar as classes

  constructor() { }

  ngOnInit(): void {
    this.configClassSpinner = this.colorClass + ' ' + this.typeSpinner;
  }

}
