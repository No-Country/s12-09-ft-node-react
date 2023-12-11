"use client"
import { useEffect, useState } from 'react';
import { UserIcon } from '@/assets/icons';
import { CarDetailImage } from '@/assets/image';
import Image from 'next/image';
import { type CarModel } from '@/model';


export default function CarDetailPage({ params }: { params: { id: string } }) {
    const [carData, setCarData] = useState<CarModel | null>(null);
    console.log(carData)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`https://mechanicalertbackend.onrender.com/api/v1/vehicle/${params.id}`);
                const data: CarModel = await res.json();
                setCarData(data);
            } catch (error) {
                console.error('Error fetching car data:', error);
            }
        }

        fetchData();
    }, [params.id]);

    return (
        <div>
            {carData !== null ? (
                <section className='md:grid md:grid-cols-2 md:px-[10%] px-[5%] md:gap-20 justify-center items-center min-h-screen'>
                    <div className=''>
                        <div className='hidden md:block'>
                            <div className='flex  flex-row items-center gap-5'>
                                <button type='button' className='btn btn-sm btn-circle bg-base-300'>
                                    <Image src={UserIcon} alt='user icon' />
                                </button>
                                <p className='text-accent'>{carData.user.firstName}{carData.user.lastName}</p>
                            </div>
                        </div>

                        <div className='flex place-content-center'>
                            <img src={carData.imageUrl} alt='car detail' />
                        </div>
                        <div className='flex flex-row justify-between'>
                            <h2 className='card-title'>{carData.brand} - {carData.model}</h2>
                            <h2 className='card-title'>{carData.licensePlate}</h2>
                        </div>
                        <p>Kilometraje: {carData.mileage}</p>
                    </div>

                    <section>
                        <div className='md:hidden my-4'>
                            <div className='flex justify-between'>
                                <div className='flex  flex-row items-center gap-5'>
                                    <button type='button' className='btn btn-sm btn-circle bg-base-300'>
                                        <Image src={UserIcon} alt='user icon' />
                                    </button>
                                    <p className='text-accent'>{carData.user.firstName}{carData.user.lastName}</p>
                                </div>
                                <p className='text-accent'>00/00</p>
                            </div>

                        </div>
                        <div className=' flex justify-center items-center gap-5 flex-col'>
                            <input className='bg-base-300 p-5 rounded-3xl h-[150px] w-full'

                            />
                            <div className=' gap-4'>
                                <div className='flex gap-3 items-center'>
                                    <h2 className='text-secondary font-bold'>Asignar</h2>
                                    <select className='select w-full max-w-sm bg-base-300 rounded-2xl h-8'>
                                        <option disabled selected>
                                            Pick the mechanic
                                        </option>
                                        <option>Homer</option>
                                        <option>Marge</option>
                                        <option>Bart</option>
                                        <option>Lisa</option>
                                        <option>Maggie</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <button className='btn btn-primary text-secondary font-bold w-28 text-xl'>
                                    Notificar
                                </button>
                            </div>
                        </div>
                    </section>
                </section>
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
}




