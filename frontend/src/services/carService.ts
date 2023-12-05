import { CarModel } from '@/model'
import axios from 'axios'

const getAllCar = (): Promise<CarModel[]> => {
    return new Promise((resolve, reject) => {
        axios.get('https://mechanicalertbackend.onrender.com/api/v1/vehicle')
            .then((response) => (
                resolve(response.data)
            ))
            .catch((err) => {reject(err)})
    })
}

export default { getAllCar }