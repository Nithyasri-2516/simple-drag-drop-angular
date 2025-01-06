import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
currentItem:any;
ticketsArray: any[]=[
    {
      ticketId:'001',
      ticketName:'layout1',
      status:'In Progress',

    },

    {
      ticketId:'101',
      ticketName:'eg',
      status:'To Do',

    },
    {
      ticketId:'102',
      ticketName:'eg2',
      status:'To Do',

    },

    {
      ticketId:'002',
      ticketName:'layout2',
      status:'Todo',

    },

    {
      ticketId:'003',
      ticketName:'layout3',
      status:'In Progress',
    },

    {
      ticketId:'004',
      ticketName:'layout4',
      status:'Done',
    },

    {
      ticketId:'005',
      ticketName:'layout5',
      status:'Done',
    },

    
    {
      ticketId:'006',
      ticketName:'layout6',
      status:'To Do',
    },
  ];

  filterTickkets(status: string){
     return this.ticketsArray.filter(m=>m.status== status);
  }
  onDragStart(item:any){
    console.log('start')
     this.currentItem=item;
  }

  onDrop(event:any,status:string){
    console.log('onDrop')
    event.preventDefault();
    const record=this.ticketsArray.find(m=>m.ticketId==this.currentItem.ticketId);
    if(record!=undefined){
      record.status=status;
    }
    this.currentItem=null;
  }

  onDragOver(event:any){
     console.log('onDragOver')
     event.preventDefault();
  }
}
