import { Component, OnInit } from '@angular/core';
import { DocParams } from '../models';

@Component({
  selector: 'app-pakiet',
  templateUrl: './pakiet.component.html',
  styleUrls: ['./pakiet.component.css'],
})
export class PakietComponent implements OnInit {
  docum: DocParams = new DocParams();

  constructor() {}

  ngOnInit(): void {}

  public focusNext(pid: string) {
    console.log(pid);
    let input2 = document.getElementById(pid) as HTMLInputElement;
    console.log(input2);
    if (input2 != null) {
    }
    input2.focus();
  }

  clear() {
    this.docum = new DocParams();
  }

}
