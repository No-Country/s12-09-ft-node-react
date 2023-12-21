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

export interface LoginData {
  codePass?: number | string | undefined;
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
  repairLog?: RepairLog[];
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
export interface RootState {
  mechanic: {
    loginStatus: string; // Asume que loginStatus es una cadena
    user: Mechanic; // Asume que user es de tipo User
    // Define aquí otras propiedades de 'mechanic'
  };
  // Define aquí otros slices de tu estado
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
  costs?: number;
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
