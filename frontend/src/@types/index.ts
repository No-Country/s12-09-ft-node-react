export interface Mechanic {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  document?: number | string;
  phone?: string;
  password?: string;
  // role: Role;
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
  userId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  user?: User;
  mechanicId?: string;
  mechanic?: Mechanic;
  repairLog?: any[];
}

export interface User {
  id?: string;
  lastName?: string;
  firstName?: string;
  email?: string;
  phone?: string;
  document?: number | string;
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

export interface Repair {
  name: string;
  description: string;
  cost: number | string;
}

interface Maintenance {
  task: string;
  description: string;
  cost: number | string;
}

export interface Budget {
  id?: string;
  repair: Repair[];
  maintenance: Maintenance[];
  costs: number;
  labor: number;
  accepted: boolean;
  isActive?: boolean;
  user?: User;
  vehicleAssociation?: Vehicle;
  mechanicAssociation?: Mechanic;
  userId?: string;
  vehicleId?: string;
  mechanicId?: string;
}
