export interface Mechanic {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  document: number;
  phone: string;
  // role: Role;
}

export interface Vehicle {
  id?: string;
  brand?: string;
  model?: string;
  color?: string;
  year?: number;
  licensePlate?: string;
  mileage?: number;
  imageUrl?: string;
  userId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  user?: User;
  repairLog?: any[];
}

export interface NewVehicle {
  brand: string;
  model: string;
  color: string;
  year: number;
  licensePlate: string;
  mileage: number;
  userId: string;
}

export interface User {
  id?: string;
  lastName?: string;
  firstName?: string;
  email?: string;
  phone?: string;
  document?: number;
  rol?: Rol | string;
  pass?: string;
  vehicle?: Vehicle[];
}

export enum Role {
  Mechanic = 'mechanic',
}
export enum Rol {
  User = 'user',
}
