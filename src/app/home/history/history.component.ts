import { Component, OnInit } from '@angular/core';
import { historyService } from './history.service';
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  // NgbModal, NgbModalConfig to component providers
  providers: [NgbModalConfig, NgbModal]
})
export class HistoryComponent implements OnInit {
  historys;
  createhistoryForm;

  constructor( private historyservice: historyService,
               private modal: NgbModal,
               private modalConfig: NgbModalConfig
              ) { }

  ngOnInit() {
    //
    this.historys = this.historyservice.getAllhistorys();
    // customize default values of modals used by this component tree
    this.modalConfig.backdrop = 'static';
    this.modalConfig.keyboard = false;
    // history creation form
    this.createhistoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      benefits: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  open(content) {
    this.modal.open(content);
  }

}
