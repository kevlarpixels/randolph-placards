import React from 'react';

const Card = ({ 
    assigned_parking_stall_number,
    first_name,
    last_name,
    address,
    phone_number,
    email,
    vehicle_one_license_plate,
    vehicle_one_make,
    vehicle_one_model,
    vehicle_one_year,
    vehicle_two_license_plate,
    vehicle_two_make,
    vehicle_two_model,
    vehicle_two_year,
    vehicle_three_license_plate,
    vehicle_three_make,
    vehicle_three_model,
    vehicle_three_year
}) => {
    return (
        <div className='tc w-70 pa3 navy bg-light-blue dib br3 ma2 grow bw2 shadow-5'>
            <h2 className=''>{assigned_parking_stall_number}</h2>
            <div className='tl'>
                <p>{first_name} {last_name}</p>
                <p>{address}</p>
                <p>{phone_number}</p>
                <p>{email}</p>
                <p> {vehicle_one_year} {vehicle_one_make} {vehicle_one_model} {vehicle_one_license_plate}</p>
                <p> {vehicle_two_year} {vehicle_two_make} {vehicle_two_model} {vehicle_two_license_plate}</p>
                <p> {vehicle_three_year} {vehicle_three_make} {vehicle_three_model} {vehicle_three_license_plate}</p>
            </div>
        </div>
    )
}

export default Card;