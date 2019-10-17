import { Component, OnInit, EventEmitter } from '@angular/core';
import { CustomFilePickerAdapter } from './custom-file-picker-adapter';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  adapter = new CustomFilePickerAdapter(this.http);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
