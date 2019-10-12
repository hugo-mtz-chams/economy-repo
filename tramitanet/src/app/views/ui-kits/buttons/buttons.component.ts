import { Component, OnInit } from '@angular/core';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  btnGroupModel = {
    left: true,
    middle: false,
    right: false
  };
  btnLoading: boolean;
  loadingButtons = [
    {
      name: 'primary',
      loading: false,
    },
    {
      name: 'secondary',
      loading: false,
    },
    {
      name: 'success',
      loading: false,
    },
    {
      name: 'warning',
      loading: false,
    },
    {
      name: 'info',
      loading: false,
    },
    {
      name: 'danger',
      loading: false,
    },
    {
      name: 'light',
      loading: false,
    },
    {
      name: 'dark',
      loading: false,
    }
  ]
  constructor(
    // private modalService: NgbModal
    ) {}
  ngOnInit() {}

  showLoading(btn) {
    btn.loading = true;
    setTimeout(() => {
      btn.loading = false;
    }, 3000)
  }



}
