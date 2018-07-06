import { CollectionService } from './../../../core/services/collection.service';
import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  public state = State;
  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
  }

  public changeState(etat: State): void {
    this.item.state = etat;
    this.collectionService.update(this.item);
  }

  public delete(): void {
    this.collectionService.delete(this.item);
  }

}
