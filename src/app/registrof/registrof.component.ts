import { Component, OnInit } from '@angular/core';
import swal from'sweetalert2';

declare var $:any;

@Component({
  selector: 'app-registrof',
  templateUrl: './registrof.component.html',
  styleUrls: ['./registrof.component.scss']
})
export class RegistrofComponent implements OnInit {
  titularAlerta:string="";
  constructor() { }

  ngOnInit() {
 
  $('#buton').click(function(event)
  {
      event.preventDefault();
      if( $('#myForm').val().length === 0 && $('#addressLine1').val().length === 0 && $('#addressLine1').val().length === 0 || $('#myForm').val().length === 0 || $('#addressLine1').val().length === 0 || $('#addressLine1').val().length === 0) {
        swal.fire('Ingrese los registros faltantes', this.titularAlerta, 'warning');
      }else{
        swal.fire('Se registro la factura correctamente', this.titularAlerta, 'success');
      }
  });
}
}
