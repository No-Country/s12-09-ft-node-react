import type { CarModel } from '@/model'
import axios from 'axios'

export const getAllCar = async (): Promise<CarModel[]> => {
    return await new Promise((resolve, reject) => {
        axios.get('https://mechanicalertbackend.onrender.com/api/v1/vehicle')
            .then((response) => {
                resolve(response.data)
            }
            )
            .catch((err) => { reject(err) })
    })
}


export const getOneCar = async ( id:string ): Promise<CarModel[]> => {
    return await new Promise((resolve, reject) => {
        axios.get(`https://mechanicalertbackend.onrender.com/api/v1/vehicle/${id}`)
            .then((response) => {
                resolve(response.data)
            }
            )
            .catch((err) => { reject(err) })
    })
}

export const deleteCar = () => { }
export const udpateCar = () => { }