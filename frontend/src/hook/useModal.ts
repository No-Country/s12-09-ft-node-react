import { useAppSelector, useAppDispatch } from '@/store/store';
import {
  openClientModal,
  closeClientModal,
  setUserData,
  openVehicleModal,
  closeVehicleModal,
  setVehicleData,
} from '@/store/features/modal.slice';

export const useModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen: isClientModalOpen, userData } = useAppSelector(state => state.modal.clientModal);

  const {
    isOpen: isVehicleModalOpen,
    userId,
    vehicleData,
  } = useAppSelector(state => state.modal.vehicleModal);

  function openClientModalAction() {
    dispatch(openClientModal());
  }

  function closeClientModalAction() {
    dispatch(closeClientModal());
  }

  function setUserDataAction(data: any) {
    dispatch(setUserData(data));
  }

  function openVehicleModalAction(userId: string) {
    dispatch(openVehicleModal(userId));
  }

  function closeVehicleModalAction() {
    dispatch(closeVehicleModal());
  }

  function setVehicleDataAction(data: any) {
    dispatch(setVehicleData(data));
  }

  return {
    isClientModalOpen,
    userData,
    openClientModal: openClientModalAction,
    closeClientModal: closeClientModalAction,
    setUserData: setUserDataAction,
    isVehicleModalOpen,
    userId,
    vehicleData,
    openVehicleModal: openVehicleModalAction,
    closeVehicleModal: closeVehicleModalAction,
    setVehicleData: setVehicleDataAction,
  };
};
