interface User {
    id: string;
    lastName: string;
    firstName: string;
    email: string;
    phone: number;
    rol: string;
    pass: string;
  }
  
  interface RepairLog {
    id: string;
    date: string;
    description: string;
    cost: number;
    state: string;
    vehicleId: string;
    mechanicId?: string;
    MechanicId: null | string;
  }
  
  interface Vehicle {
    id: string;
    brand: string;
    model: string;
    color: string;
    year: number;
    licensePlate: string;
    mileage: number;
    imageUrl: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    user: User;
    repairLog: RepairLog[];
  }
  
  export default Vehicle;
  