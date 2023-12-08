import {
  useAppSelector,
  type AppDispatch,
  useAppDispatch,
} from '@/store/store';
import {
  openClientModal,
  closeClientModal,
  setUserData,
  openVehicleModal,
  closeVehicleModal,
  setVehicleData,
} from '@/store/features/modal.slice';

export const useModal = () => {
  const { isOpen: isClientModalOpen, userData } = useAppSelector(
    state => state.modal.clientModal
  );
  const {
    isOpen: isRegisterModalOpen,
    userId,
    vehicleData,
  } = useAppSelector(state => state.modal.vehicleModal);

  const dispatch: AppDispatch = useAppDispatch();

  const openClientModalAction = () => {
    dispatch(openClientModal());
  };

  const closeClientModalAction = () => {
    dispatch(closeClientModal());
  };

  const setUserDataAction = (data: any) => {
    dispatch(setUserData(data));
  };

  const openVehicleModalAction = (userId: string) => {
    dispatch(openVehicleModal(userId));
  };

  const closeVehicleModalAction = () => {
    dispatch(closeVehicleModal());
  };

  const setVehicleDataAction = (data: any) => {
    dispatch(setVehicleData(data));
  };

  return {
    isClientModalOpen,
    userData,
    openClientModalAction,
    closeClientModal: closeClientModalAction,
    setUserData: setUserDataAction,
    isRegisterModalOpen,
    userId,
    vehicleData,
    openVehicleModal: openVehicleModalAction,
    closeVehicleModal: closeVehicleModalAction,
    setVehicleData: setVehicleDataAction,
  };
};
