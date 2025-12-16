import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js"


export const createReservation = async (req, res, next) => {

    const { firstName, lastName, date, time, email, phone } = req.body;

    console.log(req.body);
    
    if (!firstName || !lastName || !date || !time || !email || !phone) {
        return next(new ErrorHandler("All fields are required", 400))
    }

    try {
        await Reservation.create({
            firstName, lastName, date, time, email, phone
        });
        res.status(201).json({
            success: true,
            message: "Reservation created successfully"
        });
    } catch (error) {
        if (error.name === "ValidationError") {

            const ValidationError = Object.values(error.error).map(err => err.message);
            return next(new ErrorHandler(ValidationError.join(", "), 400))
        }
        return next(new ErrorHandler(error.message || "Interna; Server Error", 500));
    }
}

export default createReservation;

