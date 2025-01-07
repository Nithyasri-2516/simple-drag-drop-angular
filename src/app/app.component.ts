

/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentItem: any;
  isEditing: boolean = false;

  // List of tasks
  ticketsArray: any[] = [
    { taskName: 'Layout1', description: 'Design the homepage', priority: 'High', status: 'To Do' },
    { taskName: 'API Integration', description: 'Connect API to backend', priority: 'Medium', status: 'In Progress' },
    { taskName: 'Unit Testing', description: 'Write unit tests', priority: 'Low', status: 'Done' }
  ];

  // New task form data
  newTask = { taskName: '', description: '', priority: '', status: 'To Do' ,dueDate:''};

  // Filter tasks by status
  filterTickets(status: string) {
    return this.ticketsArray.filter(task => task.status === status);
  }

  // Add a new task
  addTask() {
    if (!this.isEditing) {
      this.ticketsArray.push({ ...this.newTask });
    } else {
      const index = this.ticketsArray.findIndex(task => task === this.currentItem);
      this.ticketsArray[index] = { ...this.newTask };
      this.isEditing = false;
    }
    this.resetForm();
    
  }

  // Edit an existing task
  editTask(task: any) {
    this.currentItem = task;
    this.newTask = { ...task };
    this.isEditing = true;
  }

  // Delete a task
  deleteTask(task: any) {
    this.ticketsArray = this.ticketsArray.filter(t => t !== task);
  }

  // Reset the form
  resetForm() {
    this.newTask = { taskName: '', description: '', priority: '', status: 'To Do' ,dueDate:''};
    this.currentItem = null;
  }

  onDragStart(item: any) {
    this.currentItem = item;
  }

  onDrop(event: any, status: string) {
    event.preventDefault();
    const task = this.ticketsArray.find(t => t === this.currentItem);
    if (task) {
      task.status = status;
    }
    this.currentItem = null;
  }

  onDragOver(event: any) {
    event.preventDefault();
  }
}
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentItem: any;
  isEditing: boolean = false;

  // Columns data for dynamic rendering
  columns: any[] = [
    { name: 'To Do', id: 'todo' },
    { name: 'In Progress', id: 'in-progress' },
    { name: 'Done', id: 'done' },
  ];

  // List of tasks
  ticketsArray: any[] = [
    { taskName: 'Layout1', description: 'Design the homepage', priority: 'High', status: 'To Do', dueDate: '2025-01-15' },
    { taskName: 'API Integration', description: 'Connect API to backend', priority: 'Medium', status: 'In Progress', dueDate: '2025-01-20' },
    { taskName: 'Unit Testing', description: 'Write unit tests', priority: 'Low', status: 'Done', dueDate: '2025-01-25' }
  ];

  // New task form data
  newTask = { taskName: '', description: '', priority: '', status: 'To Do', dueDate: '' };

  // New column form data
  newColumn = { name: '' };

  // Filter tasks by status
  filterTickets(status: string) {
    return this.ticketsArray.filter(task => task.status === status);
  }

  // Add a new task
  addTask() {
    if (!this.isEditing) {
      this.ticketsArray.push({ ...this.newTask });
    } else {
      const index = this.ticketsArray.findIndex(task => task === this.currentItem);
      this.ticketsArray[index] = { ...this.newTask };
      this.isEditing = false;
    }
    this.resetForm();
  }

  // Edit an existing task
  editTask(task: any) {
    this.currentItem = task;
    this.newTask = { ...task };
    this.isEditing = true;
  }

  // Delete a task
  deleteTask(task: any) {
    this.ticketsArray = this.ticketsArray.filter(t => t !== task);
  }

  // Reset the form
  resetForm() {
    this.newTask = { taskName: '', description: '', priority: '', status: 'To Do', dueDate: '' };
    this.currentItem = null;
  }

  // Add a new column
  addColumn() {
    const id = this.newColumn.name.toLowerCase().replace(/\s+/g, '-');
    this.columns.push({ name: this.newColumn.name, id });
    this.newColumn = { name: '' }; // Reset the form
  }

  // Drag-and-drop functionality
  onDragStart(item: any) {
    this.currentItem = item;
  }

  onDrop(event: any, status: string) {
    event.preventDefault();
    const task = this.ticketsArray.find(t => t === this.currentItem);
    if (task) {
      task.status = status;
    }
    this.currentItem = null;
  }

  onDragOver(event: any) {
    event.preventDefault();
  }
}
