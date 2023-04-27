import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ItemListService } from 'src/app/service/item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  selectedItem!: Item;
  constructor(private itemService: ItemListService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.getItemList().subscribe((data) => {
      this.items = data;
    });
  }

  onViewDetail(item: Item) {
    this.selectedItem = item;
  }
}
