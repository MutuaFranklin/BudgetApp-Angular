import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
import * as $ from 'jquery';
import { BudgetItem } from 'src/shared/models/budget-item.models';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {

  // @Input() isIncome: boolean = false;
  @Input() item!: BudgetItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();


  constructor() {

   }

  ngOnInit(): void {

    $(document).ready(function () {
      $(".root").hover(
        function () {
          $(".x-icon-button", this).css("transform", "scale(1)");
        },
        function () {
          $(".x-icon-button", this).css("transform", "scale(0)");
        },

      );

      // $(".x-icon-button").hover(
      //   function () {
      //     $(".x-icon-button", this).css("opacity", 0.3);
      //   },
      //   function () {
      //     $(".x-icon-button", this).css("transform", "scale(0.8)");
      //   },

      // );
    });
  }

  onXButtonClick() {
    this.xButtonClick.emit();
  }

}
