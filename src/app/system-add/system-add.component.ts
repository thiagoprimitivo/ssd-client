import { Component, OnInit } from '@angular/core';
import { SystemService } from '../services/system.service';
import { System } from '../models/system';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-system-add',
  templateUrl: './system-add.component.html',
  styleUrls: ['./system-add.component.css']
})
export class SystemAddComponent implements OnInit {

  system = {} as System;
  systems: System[];

  constructor(private systemService: SystemService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.getSystems();
  }

  getSystems() {
    this.systemService.getSystems().subscribe((systems: System[]) => {
      this.systems = systems;
    });
  }

  saveSystem(form: NgForm) {
    this.systemService.saveSystem(this.system).subscribe(() => {
      this.cleanForm(form);
      this.showSuccess();
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getSystems();
    form.resetForm();
    this.system = {} as System;
  }

  showSuccess() {
    this.toastr
      .success('Operação realizada com sucesso!', 'Cadastro de sistema!')
      .onHidden.subscribe(() => this.navigateToSearch());
  }

  navigateToSearch() {
    this.router.navigate(['/system/search']);
  }
}
