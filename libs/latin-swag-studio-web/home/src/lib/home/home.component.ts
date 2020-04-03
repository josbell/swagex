import { Component, OnInit } from '@angular/core';
import { CardConfig } from '../material-card/material-card.component';

@Component({
  selector: 'ls-studio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: CardConfig[] = [
    {
      title: 'Learn to Dance',
      subtitle: 'Express Yourself',
      imageUrl:
        'https://dance-studio.cmsmasters.net/wp-content/uploads/2015/04/1.jpg',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient ntesmus. Proin velnibh et elit mollis commodo et nec augue',
      alt: 'Photo of Dancer',
      actionButton: [{ id: 'more', label: 'More' }]
    },
    {
      title: 'About our Studio',
      subtitle: 'Who we are',
      imageUrl:
        'https://dance-studio.cmsmasters.net/wp-content/uploads/2015/04/2.jpg',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient ntesmus. Proin velnibh et elit mollis commodo et nec augue',
      alt: 'Photo of Dancer',
      actionButton: [{ id: 'more', label: 'More' }]
    },
    {
      title: 'Client Reviews',
      subtitle: 'Our students say',
      imageUrl:
        'https://dance-studio.cmsmasters.net/wp-content/uploads/2015/04/3.jpg',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient ntesmus. Proin velnibh et elit mollis commodo et nec augue',
      alt: 'Photo of Dancer',
      actionButton: [{ id: 'more', label: 'More' }]
    }
  ];
  styles = [
    'Jazz Funk',
    'Modern Dance',
    'House Dance',
    'Strip Dance',
    'Disco Dance',
    'Tango'
  ];

  events = [
    {
      date: '01 January',
      name: 'Dance NOW! Mexico',
      location: 'Capital Hilton Mexica Mexico',
      weekday: 'Thursday',
      time: '12:00 am - 9:00 pm'
    },
    {
      date: '01 January',
      name: 'Dance NOW! Mexico',
      location: 'Capital Hilton Mexica Mexico',
      weekday: 'Thursday',
      time: '12:00 am - 9:00 pm'
    },
    {
      date: '01 January',
      name: 'Dance NOW! Mexico',
      location: 'Capital Hilton Mexica Mexico',
      weekday: 'Thursday',
      time: '12:00 am - 9:00 pm'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
