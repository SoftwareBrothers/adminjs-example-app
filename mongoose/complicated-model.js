const mongoose = require('mongoose')

const { Schema } = mongoose
const NestedSchema = new Schema({
  age: Number,
  height: Number,
  placeOfBirth: String,
}, { _id: false })

const ParentSchema = new Schema({
  name: String,
  surname: String,
}, { _id: false })

const ComplicatedSchema = new Schema({
  name: String,
  stringArray: {
    type: [String],
    required: true,
  },
  authors: [{
    type: Schema.Types.ObjectId,
    ref: 'Category',
  }],
  nestedDetails: {
    type: NestedSchema
  },
  parents: [ParentSchema]
})

const Complicated = mongoose.model('Complicated', ComplicatedSchema)

module.exports = Complicated
