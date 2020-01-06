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
                            vehicle_one_year={placards[i].Vehicle_One_Year}
                            vehicle_two_license_plate={placards[i].Vehicle_Two_License_Plate}
                            vehicle_two_make={placards[i].Vehicle_Two_Make}
                            vehicle_two_model={placards[i].Vehicle_Two_Model}
                            vehicle_two_year={placards[i].Vehicle_Two_Year}
                            vehicle_three_license_plate={placards[i].Vehicle_Three_License_Plate}
                            vehicle_three_make={placards[i].Vehicle_Three_Make}
                            vehicle_three_model={placards[i].Vehicle_Three_Model}
                            vehicle_three_year={placards[i].Vehicle_Three_Year}/>
                    )
                }
                )
            }
        </div>
    );
}

export default CardList;