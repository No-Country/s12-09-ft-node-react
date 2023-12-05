'use client';

import { useCar } from '@/hook/useCar';
import { carService } from '@/services';

export default function Home() {
  const { getAllCars, cars } = useCar();
  console.log(cars);
  return (
    <div>
      <h1>Home</h1>
      <button className='btn btn-primary' onClick={() => getAllCars()}>
        getCar
      </button>
      <ul>
        {cars.map((item,index) => (
          <li key={index}>{item.model}</li>
        ))}
      </ul>
    </div>
  );
}
