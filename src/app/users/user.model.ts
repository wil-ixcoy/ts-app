export enum ROLES {
  ADMIN = 'administrador',
  VENDEDOR = 'seller',
  CUSTOMER = 'customer',
}

export interface User {
  id: number;
  name: string;
  role: ROLES;
}
