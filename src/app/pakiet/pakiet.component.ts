import {Component, OnInit} from '@angular/core';
import {DocParams} from '../models';
import {GendocService} from '../services/gendoc.service';

import {saveAs} from 'file-saver';

@Component({
  selector: 'app-pakiet',
  templateUrl: './pakiet.component.html',
  styleUrls: ['./pakiet.component.css'],
})
export class PakietComponent implements OnInit {
  docum: DocParams = new DocParams();

  constructor(private fileService: GendocService) {
  }

  download() {
    const bodyElement = document.body;
    if (bodyElement) {
      bodyElement.classList.add("loading");
    }
    this.fileService.downloadFile(this.docum.package, this.docum.product).subscribe((response: any) => {
      let blob: any = new Blob([response], {type: 'application/pdf'});
      saveAs(blob, this.docum.package);
      if (bodyElement) {
        bodyElement.classList.remove("loading");
      }
    }),
      (error: any) => console.log('Error downloading the file'),
      () => console.info('File downloaded successfully');
  }

  ngOnInit(): void {
  }

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
