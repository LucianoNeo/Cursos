const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const schema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,

}, {
    timestamps: true,
})


schema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})

schema.pre('findOneAndUpdate', function (next) {
    let password = this.getUpdate().password+''
    if(password.length<55){
        this.getUpdate().password = bcrypt.hashSync(password,10)
    }
    next()
})



const usuarios = mongoose.model('Usuario', schema)

module.exports = usuarios