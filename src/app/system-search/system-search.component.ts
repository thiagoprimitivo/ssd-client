import { Component, OnInit } from '@angular/core';
import { SystemService } from '../services/system.service';
import { System } from '../models/system';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-system-search',
  templateUrl: './system-search.component.html',
  styleUrls: ['./system-search.component.css']
})
export class SystemSearchComponent implements OnInit {
  p: number = 1;
  system = {} as System;
  systems: System[];

  constructor(private systemService: SystemService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getSystems();
  }

  getSystems() {
    this.systemService.getSystems().subscribe((systems: System[]) => {
      this.systems = systems;
    });
  }

  searchSystems(form: NgForm) {
    this.systemService.searchSystems(this.system).subscribe((systems: System[]) => {
      this.systems = systems;
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
    this.toastr.success('Operação realizada com sucesso!', 'Pesquisa de sistemas!');
  }
}
