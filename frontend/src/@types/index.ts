export interface Mechanic {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  document?: number;
  phone?: string;
  password?: string;
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
  mechanicId?: string;
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

export interface Workshop {
  id?: string;
  name?: string;
  address?: string;
  password?: string;
  email?: string;
  phone?: string;
  role?: string;
}

export enum Role {
  Mechanic = 'mechanic',
}
export enum Rol {
  User = 'user',
}

export interface MenuItem {
  name: string;
  href: string;
  icon?: JSX.Element;
}

export interface LoginResult {
  result: Workshop;
  token?: string;
}

export interface Tabs {
  label?: string;
  content?: JSX.Element;
}
