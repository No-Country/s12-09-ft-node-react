import { useDispatch } from 'react-redux';
import { createMechanicAsync } from '@/store/features/mechanic/mechanicSlice'
import type { AppDispatch } from '@/store/store';
import  { useAppSelector } from '@/store/store';
import { MechanicModel } from '@/model';

export const useMechanic = () => {
    const { value: mechanics } = useAppSelector(state => state.mechanics)
    const dispatch:AppDispatch = useDispatch();

    function createMechanic(mechanic: MechanicModel) {
            dispatch(createMechanicAsync(mechanic));
            
    }

    return {
        mechanics,
        createMechanic
    }
}