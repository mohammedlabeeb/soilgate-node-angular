import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/services/data.service';
import { DataTableResource } from '../../shared/libs/data-table';
import persons from './data-table-demo1-data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  itemResource = new DataTableResource(persons);
  items = [];
  itemCount = 0;

  constructor(private dataService: DataService) {
    this.itemResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }

  // special properties:

  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent) {
    alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) { return item.jobTitle; }

  ngOnInit() {
    this.dataService.updateTitle('MajorDomo Users');
  }

}
