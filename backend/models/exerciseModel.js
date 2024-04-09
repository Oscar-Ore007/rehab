import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		muscle: {
			type: String,
			required: true,
		},
		equipment: {
			type: String,
			required: true,
		},
		instructions: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export const Exercise = mongoose.model("knee", exerciseSchema);
