import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { Observable, Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComposeDialogComponent } from '../compose-dialog/compose-dialog.component';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  animations: [SharedAnimations]
})
export class MessagesComponent implements OnInit, OnDestroy {
  mailsSub: Subscription;
  mails: any[];
  selected: any;
  constructor(
    private dl: DataLayerService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.dl.getMails().subscribe((mails)=> {
      this.mails = mails;
    });
  }

  ngOnDestroy() {
    if(this.mailsSub) {
      this.mailsSub.unsubscribe();
    }
  }

  select(mail) {
    this.selected = mail;
    this.mails.forEach(element => {
      element.selected = false;
    });

    mail.selected = true;
  }

  openComposeModal() {
    this.modalService.open(ComposeDialogComponent, {size: 'lg', centered: true})
  }

}
