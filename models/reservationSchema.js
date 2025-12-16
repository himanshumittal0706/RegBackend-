import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Character Must be at least 3 characters long"],
        maxLength: [30, "First name can not be exceed 30 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Character Must be at least 3 characters long"],
        maxLength: [30, "Last name can not be exceed 30 characters"]
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validator: [validator.isEmail, "Provide a Valid Email"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone Number must be at least 10 characters"],
        maxLength: [15, "Phone Number can not be exceed 15 characters"]
    }

})

export const Reservation = mongoose.model("Reservation", reservationSchema);

