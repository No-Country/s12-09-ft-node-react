import { useEffect, useState } from 'react';
import { useMechanic } from '@/hook/useMechanic';
import type { CarModel } from '@/model';

export const useCarDetail = (carId: string) => {
  const [carData, setCarData] = useState<CarModel | null>(null);
  const [loading, setLoading] = useState(true);
  const { mechanics, getAllMechanic } = useMechanic();

  useEffect(() => {
    async function fetchCarData() {
      try {
        const res = await fetch(`https://mechanicalertbackend.onrender.com/api/v1/vehicle/${carId}`);
        const data: CarModel = await res.json();
        setCarData(data);
      } catch (error) {
        console.error('Error fetching car data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCarData();
  }, [carId]);

  useEffect(() => {
    getAllMechanic();
  }, [getAllMechanic]);

  return { carData, mechanics, loading };
};
