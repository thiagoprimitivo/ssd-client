import { Component, OnInit } from '@angular/core';
import { SystemService } from '../services/system.service';
import { System } from '../models/system';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-system-edit',
  templateUrl: './system-edit.component.html',
  styleUrls: ['./system-edit.component.css']
})
export class SystemEditComponent implements OnInit {

  system = {} as System;
  systems: System[];

  constructor(private systemService: SystemService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.getSystems();

    this.route.params.subscribe(params => {
      this.systemService.getSystemById(params['id']).subscribe(system => {
        this.system = system;
      });
    });
  }

  getSystems() {
    this.systemService.getSystems().subscribe((systems: System[]) => {
      this.systems = systems;
    });
  }

  // defini se um carro será criado ou atualizado
  saveSystem(form: NgForm) {
    this.systemService.updateSystem(this.system).subscribe(() => {
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
      .success('Operação realizada com sucesso!', 'Alteração de sistema!')
      .onHidden.subscribe(() => this.navigateToSearch());
  }

  navigateToSearch() {
    this.router.navigate(['/system/search']);
  }
}
