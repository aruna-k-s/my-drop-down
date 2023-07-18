import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() options: string[] = []; // list of options recieved from the parent
  @Input() placeholder: string = ''; // placeholder recived from the parent
  @Input() value: string = ''; // Input binding for the selected value

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>(); // Output binding for value changes
  isDropdownOpen: boolean = false;

  // Method triggered when a new option is selected
  onOptionSelected(option: string) {
    this.value = option;
    this.toggleDropdown();
    this.valueChange.emit(option);
  }
// function toggeling the dropdown when user click on the options
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
