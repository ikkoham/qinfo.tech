import { Component } from '@angular/core';
import { OnInit } from '@angular/core'

import { PresentationService } from './presentation.service'

@Component({
  selector: '[presentation]',
  templateUrl: 'presentation.component.html',
  providers: [ PresentationService ]
})

export class PresentationComponent implements OnInit {
  domesticOral: string[];
  domesticPoster: string[];
  summerSchool: string[];

  constructor (private presentationService: PresentationService) {}

  ngOnInit() {
    this.presentationService.getPresentations()
      .subscribe(res => {
        this.domesticOral = res
          .filter(p => p['style'] == 'oral')
          .sort(this.sortedByDateDesc);
        this.domesticPoster = res
          .filter(p => p['style'] == 'poster')
          .sort(this.sortedByDateDesc);
        this.summerSchool = res
          .filter(p => p['style'] == 'summerSchool')
          .sort(this.sortedByDateDesc);
      })
  }

  private sortedByDateDesc(a, b) {
    let parsedDateA = Date.parse(a['date']['from']);
    let parsedDateB = Date.parse(b['date']['from']);
    if (parsedDateA < parsedDateB) {
      return 1;
    }
    if (parsedDateA > parsedDateB) {
      return -1;
    }
    return 1;
  }
}

