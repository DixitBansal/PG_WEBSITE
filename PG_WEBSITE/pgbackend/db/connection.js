import mongoose from "mongoose";

export async function connectToDB(DBstring) {
    try {
        console.log("Connecting To Database...")
        await mongoose.connect(DBstring)
    }
    catch (err) {
        console.log(err)
        throw new Error("Unable to connect to Database")
    }
}