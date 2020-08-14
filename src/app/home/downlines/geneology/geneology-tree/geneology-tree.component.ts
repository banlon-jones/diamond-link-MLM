import { Component, OnInit, ViewChild } from '@angular/core';
import {GeneologyTreeDataService} from '../geneology-tree-data.service';
import {TreeNode} from 'primeng';
import {AddNodeComponent} from '../add-node/add-node.component';
import {IMAGE_BASE_URI} from '../../../../services/app-http/backendUrlStrings';
import {isArray} from "util";


@Component({
  selector: 'app-geneology-tree',
  templateUrl: './geneology-tree.component.html',
  styleUrls: ['./geneology-tree.component.scss']
})
export class GeneologyTreeComponent implements OnInit {
  data: TreeNode[];
  display;
  loading = true;
  loading3 = false;
  base_uri = IMAGE_BASE_URI;
  data3level: TreeNode[];
  networkPath: Array<number> = [];
  @ViewChild(AddNodeComponent, { static: true }) addNode: AddNodeComponent;
  constructor(private dataTree: GeneologyTreeDataService) {
  }

  ngOnInit() {
   this.generateData();
  }
  showDialog(data: any) {
    this.addNode.onInput(data);
    this.display = true;
  }
  refresh() {
    this.generateData();
    this.hideDialog();
  }
  hideDialog() {
    this.display = false;
  }
  generateData() {
    this.dataTree.generateAdvancedData().subscribe(
      (downTree: TreeNode[]) => {
        this.data = downTree;
        this.loading = false;
        console.log(downTree);
      },
      (error) => {
        this.loading = false;
        console.log(error);
      }
    );
  }
  loadMore3Levels(downLine: any) {
    this.loading3 = true;
    this.dataTree.generate3LevelData(downLine.customerId, downLine.networkPath).subscribe(
      (downTree: TreeNode[]) => {
        this.data3level = downTree;
        this.loading3 = false;
        this.prepareDownTree(downLine.networkPath, this.data3level, this.data);
      },
      (error) => {
        this.loading3 = false;
        console.log(error);
      }
    );
  }
  prepareDownTree(networkPath: any, appendData: any, data2Append: any) {
    const dataPass: any = data2Append;
    let parser: any = data2Append;
    // decouple
    for (let j = 0; j < networkPath.length; j++) {
      // check if customerId = network id
      const index = parser.findIndex((f) => f.customerId === networkPath[j]);
      if (index > -1) {
        parser = parser[index].children;
        if (j === networkPath.length - 1) {
          const childIndex = parser.findIndex((f) => f.customerId === appendData[0].customerId);
          if (childIndex > -1) {
            parser[childIndex] = appendData[0];
          }
        }
        dataPass.push(parser);
      }
    }
    // reassemble
    let k = networkPath.length - 1;
    for (let i = dataPass.length - 1; i > 0; i--) {
      if (k > 0) {
        const dataParser = dataPass[i - 1];
        if (i > 1) {
          const indexing = dataParser.findIndex((f) => f.customerId === networkPath[k]);
          if (indexing > -1) {
            console.log(dataPass[i - 1][indexing]);
            // const childIndex = dataPass[i - 1][indexing].children.findIndex((f) => f.customerId === networkPath[k]);
            dataPass[i - 1][indexing].children = dataPass[i];
            dataPass.splice(i, 1);
          }
          k--;
        }
      }
    }
    dataPass[0].children = dataPass[1];
    dataPass.splice(1, 1);
  }

}
