export interface Mechanic {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  document?: number | string;
  phone?: string;
  password?: string;
  role?: Role;
}

export interface Vehicle {
  id?: string;
  brand?: string;
  model?: string;
  color?: string;
  year?: number | string;
  licensePlate?: string;
  mileage?: number | string;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId?: string;
  user?: User;
  mechanicId?: string;
  mechanic?: Mechanic;
  repairLog?: RepairLog;
}

export interface User {
  id?: string;
  lastName?: string;
  firstName?: string;
  email?: string;
  phone?: number | string;
  document?: number | string;
  rol?: Rol;
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

export interface RepairLog {
  id?: string;
  date?: string;
  description: string;
  cost: number;
  state: BudgetState;
  vehicleId: string;
  mechanicId: string;
  vehicle?: Vehicle;
  mechanic?: Mechanic;
}

export type BudgetState =
  | 'Cotizar'
  | 'Confirmar'
  | 'En reparacion'
  | 'Aviso al cliente';

export interface Budget {
  description: string;
  cost: number;
  state: BudgetState;
  vehicleId: string;
  budgetId: string;
}
