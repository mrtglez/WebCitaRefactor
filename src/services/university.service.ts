import { of, Observable } from 'rxjs';
import { Centro } from '../interfaces';
import { CENTROS } from '../mockupData';

class UniversityService {
  private static instance: UniversityService;

  private constructor() {}

  public static getInstance(): UniversityService {
    if (!UniversityService.instance) {
      UniversityService.instance = new UniversityService();
    }

    return UniversityService.instance;
  }

  /**
   * Servicio Singleton que realiza emula peticiones a http en forma de observables
   */

  public getCentros(): Observable<Centro[]> {
    return of(CENTROS);
  }
}

export default UniversityService;
