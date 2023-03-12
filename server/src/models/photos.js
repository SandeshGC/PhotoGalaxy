const mongoose = require("mongoose")

// const imageFormats = ["jpg", "png", "jpeg", "bmp"]

const photoSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },

    format: {
      type: String,
      required: true,
      // enum: imageFormats
    },

    dimensions: {
      height: { type: Number, required: true },
      width: { type: Number, required: true },
    },

    file_size: {
      type: Number,
      required: true,
    },

    uploaded_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    likes_count: { type: Number, required: true, default: 0 },

    liked_by: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
)

const Photo = mongoose.model("Photo", photoSchema)

module.exports = { photoSchema, Photo }