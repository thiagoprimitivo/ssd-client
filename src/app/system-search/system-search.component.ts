import { Component, OnInit } from '@angular/core';
import { SystemService } from '../services/system.service';
import { System } from '../models/system';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-system-search',
  templateUrl: './system-search.component.html',
  styleUrls: ['./system-search.component.css']
})
export class SystemSearchComponent implements OnInit {
  system = {} as System;
  systems: System[];

  constructor(private systemService: SystemService) { }

  ngOnInit() {
    this.getSystems();
  }

  getSystems() {
    this.systemService.getSystems().subscribe((systems: System[]) => {
      this.systems = systems;
    });
  }

  searchSystem(form: NgForm) {
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getSystems();
    form.resetForm();
    this.system = {} as System;
  }
}
