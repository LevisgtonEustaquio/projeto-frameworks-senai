import { Component } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent {
    topo(){
      window.scrollTo(
        {
          top:0,
          left:0,
          behavior: 'smooth'
        }
      )
        }
}
