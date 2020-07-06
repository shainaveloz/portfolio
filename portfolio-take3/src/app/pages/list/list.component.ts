import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, of } from 'rxjs';
import { Item } from 'src/app/shared/models/list';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    list: Item[] = [];
    listItem = new FormControl('');
    edit = false;
    selecteditem: Item;
    constructor() { }

    ngOnInit(): void {
        this.getList();
    }

    getList(): Observable<any>{
        return of(this.list);
    }

    add(item){
        const newItem = new Item(item.value);
        this.list.push(newItem);
        this.listItem.patchValue('');
        this.getList().subscribe((data) => {
            this.list = data;
        });
    }

    delete(item){
        console.log(item);
        const index = this.list.indexOf(item.id);
        this.list.splice(index, 1);
        console.log('list after splice', this.list);
        this.getList().subscribe((data) => {
            this.list = data;
        });
    }

    clear() {
        this.list = [];
        this.getList().subscribe((data) => {
            this.list = data;
        });
    }

    editItem(item) {
        this.edit = true;
        this.selecteditem = item;
        const cloneItem = JSON.parse(JSON.stringify(item));
        this.listItem.patchValue(cloneItem.label);
    }

    update(item){
        this.selecteditem.label = item.value;
        let value = this.list.find(i => i.id === this.selecteditem.id);
        value.id = this.selecteditem.id;
        value.label = this.selecteditem.label;
        this.getList().subscribe((data) => {
            this.list = data;
            this.edit = false;
            this.listItem.patchValue('');
        });
    }

    trackByItems(index: number, item: Item): number {
        item.id = index;
        return item.id;
    }

}
