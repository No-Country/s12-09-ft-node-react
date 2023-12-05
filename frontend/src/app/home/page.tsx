'use client';
import { useState } from 'react';
import type Vehicle from '@/interface/home';

const VehiclePage: React.FC = () => {

    const [vehicleData] = useState<Vehicle[]>([
        {
            id: '1497cedd-6361-41ec-b0ff-4e62cf090782',
            brand: 'Tesla',
            model: 'Model S',
            color: 'red',
            year: 2020,
            licensePlate: 'hdksak',
            mileage: 2332,
            imageUrl:
                'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg',
            userId: '88b7c240-3227-4046-96c1-b19b85d7074f',
            createdAt: '2023-12-03T05:56:50.942Z',
            updatedAt: '2023-12-03T05:56:50.942Z',
            user: {
                id: '88b7c240-3227-4046-96c1-b19b85d7074f',
                lastName: 'Yordan',
                firstName: 'Jimenez',
                email: 'yordan@hotmail.com',
                phone: 1122332212,
                rol: 'user',
                pass: '$2b$10$2y1ZaU1JNO8OwZwIooVTze8JVknL.B69O9X6KNtIrkU2kmba85vgC',
            },
            repairLog: [
                {
                    id: 'b9a91a5a-a378-4ed4-956a-8758b4b2a18f',
                    date: '2023-12-03T00:00:00.000Z',
                    description: 'Probando ando',
                    cost: 90,
                    state: 'Cotizar',
                    vehicleId: '1497cedd-6361-41ec-b0ff-4e62cf090782',
                    mechanicId: 'b5926459-c4aa-4274-8e6b-3f9c9866ae31',
                    MechanicId: null,
                },
            ],
        },
        {
            id: '1497cedd-6361-41ec-b0f4-4e62cf090782',
            brand: 'Tesla',
            model: 'Model S',
            color: 'red',
            year: 2020,
            licensePlate: 'hdksak',
            mileage: 2332,
            imageUrl:
                'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg',
            userId: '88b7c240-3227-4046-96c1-b19b85d7074f',
            createdAt: '2023-12-03T05:56:50.942Z',
            updatedAt: '2023-12-03T05:56:50.942Z',
            user: {
                id: '88b7c240-3227-4046-96c1-b19b85d7074f',
                lastName: 'Yordan',
                firstName: 'Jimenez',
                email: 'yordan@hotmail.com',
                phone: 1122332212,
                rol: 'user',
                pass: '$2b$10$2y1ZaU1JNO8OwZwIooVTze8JVknL.B69O9X6KNtIrkU2kmba85vgC',
            },
            repairLog: [
                {
                    id: 'b9a91a5a-a378-4ed4-954a-8758b4b2a18f',
                    date: '2023-12-03T00:00:00.000Z',
                    description: 'Probando ando',
                    cost: 90,
                    state: 'Cotizar',
                    vehicleId: '1497cedd-6361-41ec-b0ff-4e62cf090782',
                    mechanicId: 'b5926459-c4aa-4274-8e6b-3f9c9866ae31',
                    MechanicId: null,
                },
            ],
        },
        {
            id: '1497cedd-6361-41ec-b0ff-4e62cf090782',
            brand: 'Tesla',
            model: 'Model S',
            color: 'red',
            year: 2020,
            licensePlate: 'hdksak',
            mileage: 2332,
            imageUrl:
                'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg',
            userId: '88b7c240-3227-4046-96c1-b19b85d7074f',
            createdAt: '2023-12-03T05:56:50.942Z',
            updatedAt: '2023-12-03T05:56:50.942Z',
            user: {
                id: '88b7c240-3227-4046-96c1-b19b85d7074f',
                lastName: 'Yordan',
                firstName: 'Jimenez',
                email: 'yordan@hotmail.com',
                phone: 1122332212,
                rol: 'user',
                pass: '$2b$10$2y1ZaU1JNO8OwZwIooVTze8JVknL.B69O9X6KNtIrkU2kmba85vgC',
            },
            repairLog: [
                {
                    id: 'b9a91a5a-a378-4ed4-956a-8758b4b2a18f',
                    date: '2023-12-03T00:00:00.000Z',
                    description: 'Probando ando',
                    cost: 90,
                    state: 'Cotizar',
                    vehicleId: '1497cedd-6361-41ec-b0ff-4e62cf090782',
                    mechanicId: 'b5926459-c4aa-4274-8e6b-3f9c9866ae31',
                    MechanicId: null,
                },
            ],
        },
        {
            id: '1497cedd-6361-41ec-b0ff-4e62cf090782',
            brand: 'Tesla',
            model: 'Model S',
            color: 'red',
            year: 2020,
            licensePlate: 'hdksak',
            mileage: 2332,
            imageUrl:
                'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg',
            userId: '88b7c240-3227-4046-96c1-b19b85d7074f',
            createdAt: '2023-12-03T05:56:50.942Z',
            updatedAt: '2023-12-03T05:56:50.942Z',
            user: {
                id: '88b7c240-3227-4046-96c1-b19b85d7074f',
                lastName: 'Yordan',
                firstName: 'Jimenez',
                email: 'yordan@hotmail.com',
                phone: 1122332212,
                rol: 'user',
                pass: '$2b$10$2y1ZaU1JNO8OwZwIooVTze8JVknL.B69O9X6KNtIrkU2kmba85vgC',
            },
            repairLog: [
                {
                    id: 'b9a91a5a-a378-4ed4-956a-8758b4b2a18f',
                    date: '2023-12-03T00:00:00.000Z',
                    description: 'Probando ando',
                    cost: 90,
                    state: 'Cotizar',
                    vehicleId: '1497cedd-6361-41ec-b0ff-4e62cf090782',
                    mechanicId: 'b5926459-c4aa-4274-8e6b-3f9c9866ae31',
                    MechanicId: null,
                },
            ],
        },
    ]);
    const [currentView, setCurrentView] = useState<'taller' | 'cliente'>('taller');
    const filteredData = currentView === 'taller' ? vehicleData : vehicleData.filter(vehicle => vehicle.user.rol === 'user');

    return (
        <div>
            <div className='flex justify-evenly w-full mt-5'>
                <button onClick={() => { setCurrentView('taller'); }} className={`${currentView === 'taller' ? ' text-blue-700 font-bold underline' : 'text-blue-700 font-bold'}`}>
                    Taller
                </button>
                <button onClick={() => { setCurrentView('cliente'); }} className={` ${currentView === 'cliente' ? ' text-blue-700 font-bold underline' : 'text-blue-700 font-bold'}`}>
                    Cliente
                </button>
            </div>

            <section className='flex justify-center mt-10'>
                <div className='grid grid-cols-2 gap-4 '>
                    {filteredData.map(vehicle => (
                        <div key={vehicle.id} className=''>
                            <section className='bg-slate-100 rounded-xl w-40 h-44 flex justify-evenly items-center flex-col'>
                                <img
                                    src={vehicle.imageUrl}
                                    alt='Vehicle'
                                    className='w-14 h-14'
                                />
                                <h2 className='flex flex-col items-center'>
                                    <p className=' font-bold'>{vehicle.brand}</p>
                                    <p>{vehicle.model}</p>
                                </h2>
                            </section>
                        </div>
                    ))}
                </div>
            </section>
            {/* <div className='flex justify-center'>
                <button className=' bg-cyan-400 p-4 font-bold mt-5 text-white rounded-[100%] text-[20px] '>+</button>
            </div> */}

        </div>
    );
};

export default VehiclePage;
