import Image from 'next/image';

import aire from '@/assets/icons/repair/1.svg';
import frenos from '@/assets/icons/repair/2.png';
import motor from '@/assets/icons/repair/3.svg';
import electric from '@/assets/icons/repair/4.svg';
import Tdelantero from '@/assets/icons/repair/5.svg';
import neumaticos from '@/assets/icons/repair/6.png';
import bateria from '@/assets/icons/repair/7.svg';
import FyF from '@/assets/icons/repair/8.svg';
import Facite from '@/assets/icons/repair/9.svg';
import Fire from '@/assets/icons/repair/10.svg';
import Button from '@/assets/icons/repair/buton.svg';

export default function page() {
  return (
    <div>
      <section className='md:grid md:grid-cols-2 gap-10 flex flex-col justify-center items-center min-h-screen '>
        <article className='flex justify-center gap-10 items-center flex-col'>
          <div className='pr-20 md:pr-0 '>
            <h2 className="md:text-center  mb-2 text-indigo-900 text-3xl font-bold font-['Roboto']">
              Reparacion
            </h2>
            <h3 className="text-center text-neutral-400 text-xl font-medium font-['Roboto'] leading-7">
              Selecciona las categorias a reparar
            </h3>
          </div>
          <div className='flex justify-center md:gap-24 gap-12 w-[80%] flex-wrap'>
            <div style={{ position: 'relative' }}>
              <input
                type='radio'
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
              />

              <div className='w-[72.90px] h-[72.90px] bg-gray-100 rounded-full flex justify-center items-center'>
                <Image src={aire} alt='icono' className='w-[41px] h-[41px]' />
              </div>

              <p className="text-center text-neutral-400 text-xs font-normal font-['Roboto'] leading-normal">
                aire
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type='radio'
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
              />

              <div className='w-[72.90px] h-[72.90px] bg-gray-100 rounded-full flex justify-center items-center'>
                <Image src={frenos} alt='icono' className='w-[41px] h-[41px]' />
              </div>

              <p className="text-center text-neutral-400 text-xs font-normal font-['Roboto'] leading-normal">
                Frenos
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type='radio'
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
              />

              <div className='w-[72.90px] h-[72.90px] bg-gray-100 rounded-full flex justify-center items-center'>
                <Image src={motor} alt='icono' className='w-[41px] h-[41px]' />
              </div>

              <p className="text-center text-neutral-400 text-xs font-normal font-['Roboto'] leading-normal">
                Motor
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type='radio'
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
              />

              <div className='w-[72.90px] h-[72.90px] bg-gray-100 rounded-full flex justify-center items-center'>
                <Image
                  src={electric}
                  alt='icono'
                  className='w-[41px] h-[41px]'
                />
              </div>

              <p className="text-center text-neutral-400 text-xs font-normal font-['Roboto'] leading-normal">
                Electricidad
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type='radio'
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
              />

              <div className='w-[72.90px] h-[72.90px] bg-gray-100 rounded-full flex justify-center items-center'>
                <Image
                  src={Tdelantero}
                  alt='icono'
                  className='w-[41px] h-[41px]'
                />
              </div>

              <p className="text-center text-neutral-400 text-xs font-normal font-['Roboto'] leading-normal">
                Tren Delantero
              </p>
            </div>
          </div>
        </article>
        <article className='flex justify-center gap-10 items-center flex-col'>
          <div>
            <h2 className="md:text-center mb-2 text-indigo-900 text-3xl font-bold font-['Roboto']">
              Mantenimiento
            </h2>
            <h3 className="text-center text-neutral-400 text-xl font-medium font-['Roboto'] leading-7">
              Selecciona las categorias para mantenimineto
            </h3>
          </div>
          <div className='flex justify-center md:gap-24 gap-12 w-[80%] flex-wrap'>
            <div style={{ position: 'relative' }}>
              <input
                type='radio'
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
              />

              <div className='w-[72.90px] h-[72.90px] bg-gray-100 rounded-full flex justify-center items-center'>
                <Image
                  src={neumaticos}
                  alt='icono'
                  className='w-[41px] h-[41px]'
                />
              </div>

              <p className="text-center text-neutral-400 text-xs font-normal font-['Roboto'] leading-normal">
                Neumáticos
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type='radio'
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
              />

              <div className='w-[72.90px] h-[72.90px] bg-gray-100 rounded-full flex justify-center items-center'>
                <Image
                  src={bateria}
                  alt='icono'
                  className='w-[41px] h-[41px]'
                />
              </div>

              <p className="text-center text-neutral-400 text-xs font-normal font-['Roboto'] leading-normal">
                Batería
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type='radio'
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
              />

              <div className='w-[72.90px] h-[72.90px] bg-gray-100 rounded-full flex justify-center items-center'>
                <Image src={FyF} alt='icono' className='w-[41px] h-[41px]' />
              </div>

              <p className=" w-[85px] h-7 text-center text-neutral-400 text-[10px] font-normal font-['Roboto'] leading-3">
                Fluido hidráulico y de frenos
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type='radio'
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
              />

              <div className='w-[72.90px] h-[72.90px] bg-gray-100 rounded-full flex justify-center items-center'>
                <Image
                  src={electric}
                  alt='icono'
                  className='w-[41px] h-[41px]'
                />
              </div>

              <p className="text-center text-neutral-400 text-xs font-normal font-['Roboto'] leading-normal">
                Electricidad
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type='radio'
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
              />

              <div className='w-[72.90px] h-[72.90px] bg-gray-100 rounded-full flex justify-center items-center'>
                <Image src={Facite} alt='icono' className='w-[41px] h-[41px]' />
              </div>

              <p className="text-center text-neutral-400 text-xs font-normal font-['Roboto'] leading-normal">
                Filtro de acite
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type='radio'
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
              />

              <div className='w-[72.90px] h-[72.90px] bg-gray-100 rounded-full flex justify-center items-center'>
                <Image src={Fire} alt='icono' className='w-[41px] h-[41px]' />
              </div>

              <p className="text-center text-neutral-400 text-xs font-normal font-['Roboto'] leading-normal">
                Filtro de aire
              </p>
            </div>
          </div>
        </article>
      </section>
      <div className='flex justify-end mr-16 mb-10 mt-10 '>
        <Image
          className='hover:scale-105 hover:cursor-pointer'
          src={Button}
          alt='boton'
        />
      </div>
    </div>
  );
}
