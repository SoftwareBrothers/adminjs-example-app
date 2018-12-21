const mongoose = require('mongoose')

const { Schema } = mongoose

/**
 *  Custom schema type Configuration
 * 
 *  To create a new schema type, We need to inherit from mongoose.SchemaType and add the corresponding property to mongoose.Schema.Types
 *  Cast method allows us to manage field value. Method's implementation is required
 */
function TextEditor(key, options) {
  mongoose.SchemaType.call(this, key, options, 'TextEditor')
}
TextEditor.prototype = Object.create(mongoose.SchemaType.prototype)
TextEditor.prototype.cast = (val) => val
mongoose.Schema.Types.TextEditor = TextEditor


const PositionSchema = new Schema({
  name: String,
  place: String,
  rate: Number,
  content: TextEditor,
})

const Position = mongoose.model('Position', PositionSchema)

module.exports = Position 