import React, { useState } from 'react';
import Button from '../button';
// import Tooltip from '../tooltip';


import './style.scss';


const Seat = ({ seat, selectedSeats, onSeatSelect }) => {

    const getSeatClassName = ({ seat }) => {
        let className = 'seat';
        if (seat.isBooked || selectedSeats.indexOf(seat) > -1) {
            className += ' active';
        }
        else if (seat.extra) {
            className += ' extra';
        }

        return className;
    };

    return <div title={seat.extra ? `extra charges would be ${seat.extra}` : ''}
        key={seat.number} className={getSeatClassName({ seat })}
        onClick={onSeatSelect}>
        {seat.number}
    </div>;
};

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
                                {row.seats.map((seat) => {
                                    return <Seat seat={seat} selectedSeats={selectedSeats}
                                        onSeatSelect={() => { onSeatSelect({ row, seat, category }) }} >
                                    </Seat>
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
