import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GeneologyTreeDataService} from '../geneology-tree-data.service';

@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.scss']
})
export class AddNodeComponent implements OnInit {
  @Input() upLineRegistrationCode = '';
  @Output() onAddNode: EventEmitter<null> = new EventEmitter<null>();
addNodeForm;
header;
referrals: any;
position: string;
immediateUpLineId: number;
public progressBar = false;
  constructor(private treeData: GeneologyTreeDataService) { }

  ngOnInit() {
    this.addNodeForm = new FormGroup({
      customerId: new FormControl('')
    });
    this.getReferrals();
  }
  onSubmit() {
    const referral_info = this.addNodeForm.value;
    this.progressBar = true;
    this.treeData.addDownLine(this.immediateUpLineId, referral_info.customerId, this.position).subscribe(
      response => {
        console.log(response);
        this.getReferrals();
        this.progressBar = false;
        this.onAddNode.emit();
      },
      error2 => {
        console.log(error2);
        this.progressBar = false;
        this.onAddNode.emit();
      }
    );
    console.log(referral_info);
  }
  onInput(data: any) {
    this.upLineRegistrationCode = data.upLineRegistrationCode;
    this.position = data.position;
    this.immediateUpLineId = data.immediateUpLineId;
    console.log(data);
  }
  getReferrals() {
    this.treeData.getReferrals().subscribe(
      (data: any) => {
        this.referrals = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
}
