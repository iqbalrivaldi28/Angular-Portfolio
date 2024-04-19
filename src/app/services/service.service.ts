import { Injectable } from '@angular/core';
import { IProject } from '../interface/IProject';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  project: IProject[] = [
    {
      name: 'Snekers App',
      imageUrl:
        'https://cdn.dribbble.com/userupload/14049163/file/original-85de5b0bd2c4cedf0682b44d9c43b501.png?crop=0x0-1600x1200&resize=400x300&vertical=center',
      desc: 'Aplikasi Ini membantu kamu dalam mencari snekers terkeren.',
    },
    {
      name: 'Sport App',
      imageUrl:
        'https://cdn.dribbble.com/userupload/13129607/file/original-f2ace1ea9080485a25b46ba38924d699.png?resize=400x300&vertical=center',
      desc: 'Aplikasi Ini membantu kamu menjadi sehat dan kuat cihuy.',
    },
    {
      name: 'Jelajah App',
      imageUrl:
        'https://cdn.dribbble.com/users/1706519/screenshots/16522997/media/4998769d93fff47d468bc14640da7509.png?resize=400x300&vertical=center',
      desc: 'Aplikasi Ini membantu kamu mejelajah alam yang indah.',
    },
  ];
  constructor() {}

  getProject(): IProject[] {
    return this.project;
  }
}
