const express = require('express')
const db = require('./db')

const app = express()
const customers = db.collection('Customers')

app.get('/', (req, res) => {
    res.send('Get all customers: /getcustomers-------Get one customer by: /getcustomer/:id-------Customer Ids: 0sTzAeNZT3hGonPrH0Ba, 247I9mi7MfY7lWmcJ5XC, qXzQRXIO6xRFvyXWBbuy')
})

app.get('/getcustomers', (req, res) => {
    let allCustomers = []
    customers.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                allCustomers.push({
                    Id: doc.id,
                    Name: doc.data().Name
                })
            })
            res.json({
                allCustomers
            })
        })
        .catch((err) => {
            console.log('Error getting documents', err)
        })
})

app.get('/getcutomer/:id', (req, res) => {
    customers.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                const _id = req.params.id
                if (doc.id === _id)
                    res.json(doc.data())
            })
        })
        .catch((err) => {
            console.log('Error getting documents', err)
        })
})   

app.listen(8080, () =>
  console.log('App listening on port 8080!'),
)