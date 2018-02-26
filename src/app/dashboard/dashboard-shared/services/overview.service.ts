import { Injectable } from '@angular/core';

import { HttpService } from '../../../shared/services/http.service';

@Injectable()
export class OverviewService {

  constructor(
    private httpService: HttpService
  ) { }

  getOverviewScores() {
    this.httpService.get('property/quickscoreFeatures').subscribe(resp => {
      console.log(resp);
    });
  }

}
