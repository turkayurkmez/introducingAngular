import { Component } from '@angular/core';
import { todoItems } from './models/todoItem.mocks';
import { TodoItem } from './models/todoItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Yapılacaklar Listesi'; 
  name: string = 'Türkay';

  //Dikkat!! TodoItems, mocks verisinden geliyor!
  todoItems: TodoItem[] = todoItems;
  showAllItems : boolean = true;

  filter():void{
    this.showAllItems = !this.showAllItems;
    if (this.showAllItems) {
      this.todoItems = todoItems;
    }
    else{
      this.todoItems = this.todoItems.filter(x=>!x.isCompleted);
    }  
   
  }
  getButtonText():string{
    return this.showAllItems ? "Sadece yapılacakları göster":"Tümünü Göster";
  }


}
