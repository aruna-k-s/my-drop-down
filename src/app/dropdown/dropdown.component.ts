import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  @Input() options: string[] = [];
  @Input() placeholder: string = '';
  @Input() value: string = ''; // Input binding for the selected value

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>(); // Output binding for value changes
  isDropdownOpen: boolean = false;

  // Method triggered when a new option is selected
  onOptionSelected(option: string) {
    this.value = option;
    this.valueChange.emit(option);
  }

  toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
