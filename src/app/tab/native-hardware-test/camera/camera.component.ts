import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements AfterViewInit {

  @ViewChild('video')
  public video: ElementRef;

  @ViewChild('canvas')
  public canvas: ElementRef;
  @ViewChild('videoContainer')
  public videoContainer: ElementRef;

  public captures: any;

  public constructor() {
    this.captures = [];
  }

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
        this.videoContainer.nativeElement.srcObject = stream;
        this.videoContainer.nativeElement.play();
      });
    }
  }

  public capture() {
    const context = this.canvas.nativeElement.getContext('2d').drawImage(this.videoContainer.nativeElement, 0, 0, 640, 480);
    this.captures = this.canvas.nativeElement.toDataURL('image/png');
  }

}
