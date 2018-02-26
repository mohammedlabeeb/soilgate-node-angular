import { Component, OnInit } from '@angular/core';
import { OverviewCard } from '../dashboard-shared/types/dashboard';
import { DataService } from '../../shared/services/data.service';

import { OverviewService } from '../dashboard-shared/services/overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {

  overViewCardList: any[] = [];

  constructor(
    private dataService: DataService,
    private overviewService: OverviewService
  ) { }

  ngOnInit() {
    this.dataService.updateTitle('Dashboard Overview');
    this.loadCardData();
    this.overviewService.getOverviewScores();
  }

  private loadCardData() {

    let cardItem: OverviewCard = {
      type: 'card-stats',
      color: 'green',
      icon: 'perm_identity',
      category: 'Total Users',
      title: '49',
      footer: {
        icon: 'search',
        text: 'Find Users',
        link: ''
      }
    };
    this.overViewCardList.push(cardItem);

    cardItem = {
      type: 'card-stats',
      color: 'orange',
      icon: 'account_circle',
      category: 'Over Time Users',
      title: '12',
      footer: {
        icon: 'search',
        text: 'Find Users',
        link: ''
      }
    };
    this.overViewCardList.push(cardItem);

    cardItem = {
      type: 'card-stats',
      color: 'red',
      icon: 'home',
      category: 'Properties',
      title: '123',
      footer: {
        icon: 'search',
        text: 'Find Properties',
        link: ''
      }
    };
    this.overViewCardList.push(cardItem);

    cardItem = {
      type: 'card-stats',
      color: 'blue',
      icon: 'trending_up',
      category: 'Domoscore',
      title: '123',
      footer: {
        icon: 'update',
        text: 'Just Updated',
        link: ''
      }
    };
    this.overViewCardList.push(cardItem);

    cardItem = {
      type: 'card-stats',
      color: 'green',
      icon: 'check_circle',
      category: 'Claimed Properties',
      title: '123',
      footer: {
        icon: 'update',
        text: 'Just Updated',
        link: ''
      }
    };
    this.overViewCardList.push(cardItem);

    cardItem = {
      type: 'card-stats',
      color: 'red',
      icon: 'check_circle',
      category: 'Unlaimed Properties',
      title: '123',
      footer: {
        icon: 'update',
        text: 'Just Updated',
        link: ''
      }
    };
    this.overViewCardList.push(cardItem);
    cardItem = {
      type: 'card-stats',
      color: 'purple',
      icon: 'collections',
      category: 'Property Banners',
      title: '123',
      footer: {
        icon: 'update',
        text: 'Just Updated',
        link: ''
      }
    };
    this.overViewCardList.push(cardItem);

    cardItem = {
      type: 'card-stats',
      color: 'orange',
      icon: 'description',
      category: '# Times Details Added',
      title: '123',
      footer: {
        icon: 'update',
        text: 'Just Updated',
        link: ''
      }
    };
    this.overViewCardList.push(cardItem);
  }

}
