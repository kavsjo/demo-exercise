const express = require('express');
const firebase = require('firebase');
const db = require('./db');

const app = express();

customers = db.collection('Customers');

app.get('/', (req, res) => {
    res.send('Get all customers: /getcustomers-------Get one customer by: /getcustomer/:id-------Customer Ids: 0sTzAeNZT3hGonPrH0Ba, 247I9mi7MfY7lWmcJ5XC, qXzQRXIO6xRFvyXWBbuy')
});

app.get('/getcustomers', (req, res) => {
    let allCus = [];
    customers.get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            allCus.push(
                doc.id,
                doc.data().Name
            );
        })
        res.send({
          "Customers": allCus
        })
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
})

app.get('/getcustomer/0sTzAeNZT3hGonPrH0Ba', (req, res) => {
  customers.get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            if (doc.id == '0sTzAeNZT3hGonPrH0Ba')
                res.send([
                  doc.id,
                  doc.data()
                ]);
            })
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
})

app.get('/getcustomer/247I9mi7MfY7lWmcJ5XC', (req, res) => {
    customers.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                if (doc.id == '247I9mi7MfY7lWmcJ5XC')
                    res.send([
                        doc.id,
                        doc.data()
                ]);
            })
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });
})

app.get('/getcustomer/qXzQRXIO6xRFvyXWBbuy', (req, res) => {
    customers.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                if (doc.id == 'qXzQRXIO6xRFvyXWBbuy')
                    res.send([
                        doc.id,
                        doc.data()
                    ]);
            })
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });
  })



app.get('/getcus/:id', (req, res) => {
  customers.get().then((snapshot) => {
    snapshot.forEach((doc) => {
        const _id = req.params.id;
        const cus =  findOne(_id);
      
        if (cus)
            res.send([
              doc.id,
              doc.data()
            ]);
        })
})
})   
app.get('/cus/:id', async (req, res) => {
  const _id = req.params.id

  try {
      const cus = await cus.findOne({ _id, owner: req.user._id })

      if (!task) {
          return res.status(404).send()
      }

      res.send(cus)
  } catch (e) {
      res.status(500).send()
  }
})



app.listen(8080, () =>
  console.log('App listening on port 8080!'),
);
