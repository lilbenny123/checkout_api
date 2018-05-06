import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const JobAdSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Ad Name is required"],
      unique: true
    },
    adType: {
      type: String,
      trim: true,
      required: [true, "Ad Type is Required"]
    },
    price: {
      type: Number,
      trim: true,
      required: [true, "Ad Price is required"]
    }
  },
  { timestamps: true }
);

JobAdSchema.plugin(uniqueValidator, {
  message: "{VALUE} already taken"
});

export default mongoose.model("JobAd", JobAdSchema);
