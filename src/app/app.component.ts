import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


// vincula la lógica a la vista
export class AppComponent {

  title = 'LearnAngular';

  getName():void{
    console.log('hola David');
  }
}
