import mongoose, { Schema } from "mongoose";

interface IExpense extends Document{
    description: string;
    amount: number;
    date: Date;
}

const Expense = new Schema<IExpense>({
    description:{
        type: String,
        maxLength: 100,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    }
});

export default mongoose.model("Expense", Expense, "expense")