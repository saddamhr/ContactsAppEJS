const Contact = require('./Contact')

exports.getAllContact = (req, res) => {

}

exports.getSingleContact = (req, res) => {

}

exports.createContact = (req, res) => {
    let { name, phone, email } = req.body
    let contact = new Contact({
        name,
        email,
        phone
    })
    contact.save()
        .then(c => {
            res.json(c)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error Occurred'
            })
        })
}

exports.updateContact = (req, res) => {

}

exports.deleteContact = (req, res) => {

}