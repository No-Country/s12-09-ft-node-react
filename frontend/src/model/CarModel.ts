export interface CarModel {
    "id": string,
    "brand": string,
    "model": string,
    "color": string,
    "year": number,
    "licensePlate": string,
    "mileage": number,
    "imageUrl": string,
    "userId": string,
    "createdAt": string,
    "updatedAt": string,
    "user": {
        "id": string,
        "lastName": string,
        "firstName": string,
        "email": string,
        "phone": number,
        "rol": string,
        "pass": string
    },
    "repairLog": [
        {
            "id": string,
            "date": string,
            "description": string,
            "cost": number,
            "state": string,
            "vehicleId": string,
            "mechanicId": string,
            "MechanicId": string | null
        }
    ]
}