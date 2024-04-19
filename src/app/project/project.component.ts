import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { IProject } from '../interface/IProject';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  projects: IProject[] = [];

  // constructor(private readonly projectService: ServiceService) {
  //   this.projects = projectService.getProject();
  // }

  projectSevice = inject(ServiceService);

  constructor() {
    this.projects = this.projectSevice.getProject();
    console.log(this.projects);
  }
}
