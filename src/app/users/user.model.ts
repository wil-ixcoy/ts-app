import { BaseModel } from "../base.model";
export enum ROLES {
  ADMIN = 'administrador',
  VENDEDOR = 'seller',
  CUSTOMER = 'customer',
}

export interface User extends BaseModel {
  name: string;
  role: ROLES;
}
