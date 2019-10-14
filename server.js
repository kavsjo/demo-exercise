const express = require('express');
const Firestore = require('@google-cloud/firestore');

const app = express();
const db = new Firestore({
  projectId: 'api-demo-255407',
  keyFilename: 'C:/Users/vkavsjo/Downloads/Api-demo-bf38d72a7a8b.json'
});
customers = db.collection('Customers');
    
app.get('/', function (req, res) {
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
app.get('getCustomer/:id', (req, res) => {
  customers.get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
          const customerId = req.params.doc.id;
          console.log(customerId);
            if (doc.id === customerId)
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
app.get('getcus/:id', (req, res) => {
  customers.get().then((doc) => {
    const customerId = req.params.id;
    const customer = doc.data().find(_customer => _customer.id === customerId);
    if (customer) {
      res.send([
        doc.id,
        doc.data()
      ]);
    }

  }) 
})   



app.listen(3003, () =>
  console.log('111Example app listening on port 3000!'),
);
