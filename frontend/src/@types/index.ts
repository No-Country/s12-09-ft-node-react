export interface Mechanic {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  document: number;
  phone: string;
  role: Role;
}

export interface Vehicle {
  id?: string;
  brand: string;
  model: string;
  color: string;
  year: number;
  licensePlate: string;
  mileage: number;
  imageUrl: string;
  userId?: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  repairLog: any[];
}

export interface User {
  id?: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: number;
  document: number;
  rol: Rol;
  pass?: string;
  vehicle?: Vehicle[];
}

export interface Vehicle {
  id?: string;
  brand: string;
  model: string;
  color: string;
  year: number;
  licensePlate: string;
  mileage: number;
  imageUrl: string;
  userId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum Role {
  Mechanic = 'mechanic',
}
export enum Rol {
  User = 'user',
}
