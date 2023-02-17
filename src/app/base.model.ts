/* readonly sirve para definir que cada atributo sea solo de lectura, para que
no sea cambiado en alguna parte del codigo */
export interface BaseModel {
  readonly id: number;
  readonly createdAt: Date;
  readonly updatedAt?: Date;
}
