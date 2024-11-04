import { Component } from '@angular/core'; 

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage {
  monto: number;
  categoria: string;
  fecha: string;
  notas: string;
  gastos: any[] = [];

  constructor() {
    this.monto = 0;
    this.categoria = '';
    this.fecha = '';
    this.notas = '';
    this.cargarGastos();
  }

  agregarGasto() {
    if (this.monto && this.categoria && this.fecha) {
      const nuevoGasto = {
        monto: this.monto,
        categoria: this.categoria,
        fecha: this.fecha,
        notas: this.notas,
      };
      this.gastos.push(nuevoGasto);
      this.limpiarFormulario();
      this.guardarGastos();
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }

  eliminarGasto(gasto: any) {
    this.gastos = this.gastos.filter(g => g !== gasto);
    this.guardarGastos();
  }

  editarGasto(gasto: any) {

    this.monto = gasto.monto;
    this.categoria = gasto.categoria;
    this.fecha = gasto.fecha;
    this.notas = gasto.notas;
    this.eliminarGasto(gasto);
  }

  limpiarFormulario() {
    this.monto = 0;
    this.categoria = '';
    this.fecha = '';
    this.notas = '';
  }

  
  guardarGastos() {
    localStorage.setItem('gastos', JSON.stringify(this.gastos));
  }

 
  cargarGastos() {
    const gastosGuardados = localStorage.getItem('gastos');
    if (gastosGuardados) {
      this.gastos = JSON.parse(gastosGuardados);
    }
  }
}
