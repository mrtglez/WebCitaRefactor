import { of, Observable } from 'rxjs';
import { Centro, Categoria, Servicio } from '../interfaces';
import { CENTROS, CATEGORIAS, SERVICIOS } from '../mockupData';

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

  public getCategorias(): Observable<Categoria[]> {
    return of(CATEGORIAS);
  }

  public getServicios(categoria: string): Observable<Servicio[]> {
    return of(SERVICIOS.filter(x => x.categoriaId === categoria));
  }
}

export default UniversityService;
