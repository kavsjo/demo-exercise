const express = require('express');
const Firestore = require('@google-cloud/firestore');

const app = express();
const db = new Firestore({
  projectId: 'api-demo-255407',
  keyFilename: 'C:/Users/vkavsjo/Downloads/Api-demo-bf38d72a7a8b.json'
});
customers = db.collection('Customers');
    
app.get('/getcustomers', (req, res) => {
  let allCus = [];
  customers.get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            allCus.push([
              doc.id,
              doc.data().Name
            ]);
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

app.listen(8080, () =>
  console.log('App listening on port 8080!'),
);
