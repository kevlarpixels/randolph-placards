import React from 'react';
import Card from './Card';

const CardList = ({ placards }) => {
    return (
        <div>
            {
                placards.map((user, i) => {
                    return (
                        <Card key={i}
                            assigned_parking_stall_number={placards[i].Assigned_Parking_Stall_Number}
                            first_name={placards[i].First_Name} last_name={placards[i].Last_Name}
                            address={placards[i].Address} 
                            phone_number={placards[i].Phone_Number}
                            email={placards[i].Email}
                            vehicle_one_license_plate={placards[i].Vehicle_One_License_Plate}
                            vehicle_one_make={placards[i].Vehicle_One_Make}
                            vehicle_one_model={placards[i].Vehicle_One_Model}
                            vehicle_one_year={placards[i].Vehicle_One_Year}/>
                    )
                }
                )
            }
        </div>
    );
}

export default CardList;