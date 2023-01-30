import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  hidden(){
    let div = document.querySelector('#div');
    console.log(div);
    
    div?.classList.toggle('hidden')
  }
}
