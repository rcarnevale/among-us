import { Component, OnInit } from '@angular/core';
import { ColorsDTO } from '../../services/DTO/colors.DTO';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public selectedColor = '#c51111';
  public allColors: Array<ColorsDTO> = [
    { name: 'Red', color: '#c51111' },
    { name: 'Blue', color: '#132ed1' },
    { name: 'DarkGreen', color: '#117f2d' },
    { name: 'Pink', color: '#fb69be' },
    { name: 'Orange', color: '#e8790e' },
    { name: 'Yellow', color: '#f5f557' },
    { name: 'black', color: '#3e474e' },
    { name: 'White', color: '#d6e1f3' },
    { name: 'Purple', color: '#6d3ec0' },
    { name: 'Brown', color: '#764a1d' },
    { name: 'Cyan', color: '#28eae1' },
    { name: 'LightGreen', color: '#45d633' },
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

  changeColor(color: ColorsDTO){
    this.selectedColor = color.color;
  }

}
