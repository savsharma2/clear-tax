import React, { useState } from 'react';
import Button from '../button';

import './style.scss';


const Theatre = ({ layout, numberOfSeatsToBook }) => {
    // const firstCategoryRows = layout.categories[0].rows;
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({});


    const onSeatSelect = ({ row, seat, category }) => {
        const seatsThatCanBeSelected = [];
        const indexOfSelectedSeat = row.seats.indexOf(seat);

        for (let i = indexOfSelectedSeat; i < row.seats.length && seatsThatCanBeSelected.length < numberOfSeatsToBook; i++) {
            const currentSeat = row.seats[i];
            if (!currentSeat.isBooked) {
                seatsThatCanBeSelected.push(currentSeat);
            } else {
                break;
            }
        }

        // he has selected the required seats in one row
        if (seatsThatCanBeSelected.length === numberOfSeatsToBook) {
            setSelectedSeats(seatsThatCanBeSelected);
            setSelectedCategory(category);
        } else {
            setSelectedSeats([]);

        }

    };

    const extraPrice = selectedSeats.reduce((acc, val) => {
        if (val.extra) {
            acc += val.extra;
        }
        return acc;
    }, 0);

    const prices = selectedCategory.price * selectedSeats.length;


    return (
        <div>
            <div className="theatre">
                {layout.categories.map(category => {
                    const { rows } = category;
                    return <div className="cinema-seats left">
                        <div className="title"> {category.name} - Rs. {category.price} </div>
                        {rows.map(row => {
                            return <div key={row.name} className="cinema-row">
                                {row.seats.map((seat, index) => {
                                    const { isBooked, number } = seat;
                                    return <div key={index} className={isBooked || selectedSeats.indexOf(seat) > -1 ? 'seat active' : 'seat'} onClick={() => { onSeatSelect({ row, seat, category }) }} >
                                        {number}
                                    </div>
                                })}
                            </div>;
                        })}
                    </div>
                })}
            </div>
            {prices > 0 &&
                <div className='price'>Price is {prices} and  {extraPrice && <span>including {extraPrice} extra charges</span>}</div>}
            <Button disabled={selectedSeats.length !== numberOfSeatsToBook}>Book Now</Button>
            <div>number of seats you can book is ${numberOfSeatsToBook}</div>
        </div>
    );
}

export default Theatre;
