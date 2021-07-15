import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'jquery';
import { BudgetItem } from 'src/shared/models/budget-item.models';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems : BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() {
    this.budgetItems = [];
  }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item: BudgetItem){
    this.delete.emit(item);

  }

}
