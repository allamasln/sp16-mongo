const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/tb')

const studentSchema = new mongoose.Schema({
	name: { type: String, default: 'Rafa' },
})

const Student = mongoose.model('Student', studentSchema)

async function newStudent() {
	const result = await Student.create({})

	// const doc = await Student.findOne({ name: 'vamos' })

	console.log(result)
}

newStudent()
