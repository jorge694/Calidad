import { Component, OnInit } from '@angular/core';
import swal from'sweetalert2';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  titularAlerta:string="";
  constructor() { }

  ngOnInit() {
 
    $('#ingresar').click(function(event)
    {
        event.preventDefault();
        if( $('#myUser').val() === 'admin' && $('#myPass').val() === 'admin') {
          swal.fire('Ingreso corecctamente', this.titularAlerta, 'success');
        }else{
          swal.fire('Datos erroneos', this.titularAlerta, 'warning');
        }
    });
  }
}
