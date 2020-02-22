export interface Centro {
  id: string;
  name: string;
}

export interface Categoria {
  id: string;
  name: string;
}

export interface Servicio {
  id: string;
  name: string;
  categoriaId: string;
}
