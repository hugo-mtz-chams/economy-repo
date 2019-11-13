import { Component, OnInit, EventEmitter } from '@angular/core';
import { CustomFilePickerAdapter } from './custom-file-picker-adapter';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  adapter = new CustomFilePickerAdapter(this.http, this.toastr);

  constructor(private http: HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

}
