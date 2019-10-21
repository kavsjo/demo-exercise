const express = require('express')
const db = require('./db')

const app = express()
const customersCollection = db.collection('Customers')

app.get('/', (req, res) => {
    res.send('Get all customers: /getcustomers-------Get one customer by: /getcustomer/:id-------Customer Ids: 0sTzAeNZT3hGonPrH0Ba, 247I9mi7MfY7lWmcJ5XC, qXzQRXIO6xRFvyXWBbuy')
})

app.get('/getcustomers', (req, res) => {
    let customers = []
    customersCollection.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                let data = doc.data()
                data['id']=doc.id
                customers.push({
                    customer: data
                })
            })
            res.json(customers)
        })
        .catch((err) => {
            console.log('Error getting documents', err)
        })
})

app.get('/getcustomer/:id', (req, res) => {
    let customer = {}
    const _id = req.params.id
    customersCollection.doc(_id).get()
        .then(doc => {
            if (!doc.exists) {
                res.json(customer)
            }
            let data = doc.data()
            data['id'] = doc.id
            res.json(data)
        })
        .catch((err) => {
            console.log('Error getting documents', err)
        })
}) 

app.listen(8080, () =>
  console.log('App listening on port 8080!'),
)