import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  fileContent: string;

  @ViewChild('filecontent')
  public content: ElementRef;

  constructor() {
  }

  ngOnInit() {

  }

  changeListener(event): void {
    this.readThis(event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      // you can perform an action with readed data here
      console.log(myReader.result);
      this.fileContent = myReader.result;
    };

    myReader.readAsText(file);
  }

  saveToDevice() {
    console.log('save');
    const text = this.content.nativeElement.value;
    const blob = new Blob([text], {type: 'text/plain'});
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}
