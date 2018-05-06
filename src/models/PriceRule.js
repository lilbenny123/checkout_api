import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const PriceRuleSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Price Rule Name is required"],
      unique: true
    },
    ruleType: {
      type: String,
      trim: true,
      required: [true, "Rule Type is Required"]
    },
    min_ads: {
      type: Number,
      trim: true,
      required: [true, "Minimum Ads is required"]
    },
    free_ads: {
      type: Number,
      trim: true,
      default: 0
    },
    price_after_discount: {
      type: Number,
      trim: true,
      default: 0
    },
    jobads: [
      {
        type: Schema.Types.ObjectId,
        ref: "JobAd"
      }
    ]
  },
  { timestamps: true }
);

PriceRuleSchema.plugin(uniqueValidator, {
  message: "{VALUE} already taken"
});

export default mongoose.model("PriceRule", PriceRuleSchema);
