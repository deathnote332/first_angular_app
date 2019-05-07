import { Component, OnInit, Output, Input } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { getPagingRange } from 'src/app/core/utilities/collection.ulits';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pageSize: number;
  @Input() pageLength: number;
  @Output() nextPage: Subject<number> = new Subject();
  @Output() previousPage: Subject<number> = new Subject();
  @Output() selectedPage: Subject<number> = new Subject();
  pageRange: Observable<number[]> = new Observable();
  selectedPageNumber = 1;

  constructor() { }

  ngOnInit() {
    // this.pageRange = this.createRange(Math.ceil(this.pageLength / this.pageSize));
    this.pageLength = Math.ceil(this.pageLength / this.pageSize);
    this.pageRange = of(this.generatePageRange(this.selectedPageNumber, this.pageLength));
  }

  onClickCurrent(page: number) {
    this.selectedPageNumber = page;
    this.pageRange = of(this.generatePageRange(this.selectedPageNumber, this.pageLength));
    this.selectedPage.next(page);
  }

  onClickNext() {
    this.nextPage.next(this.selectedPageNumber += 1);
    this.pageRange = of(this.generatePageRange(this.selectedPageNumber, this.pageLength));
  }

  onClickPrevious() {
    this.previousPage.next(this.selectedPageNumber -= 1);
    this.pageRange = of(this.generatePageRange(this.selectedPageNumber, this.pageLength));
  }

  private createRange(numberRange: number): number[] {
    const pageRange = [];
    for (let index = 1; index <= numberRange; index++) {
      pageRange.push(index);
    }
    return pageRange;
  }

  generatePageRange(currentPage: number, lastPage: number) {
    const delta = 1;

    const range = [];
    for (let i = Math.max(2, (currentPage - delta)); i <= Math.min((lastPage - 1), (currentPage + delta)); i += 1) {
        range.push(i);
    }

    if ((currentPage - delta) > 2) {
        range.unshift('..');
    }
    if ((currentPage + delta) < (lastPage - 1)) {
        range.push('..');
    }

    range.unshift(1);
    if (lastPage !== 1) {
      range.push(lastPage);
    }

    return range;
  }


}
