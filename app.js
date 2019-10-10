const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'api-demo-255407',
  keyFilename: 'C:/Users/vkavsjo/Downloads/Api-demo-bf38d72a7a8b.json'
});
const customers = db.collection('Customers');
let customer = db.collection('Customers')

customers.get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log('Id: ',doc.id, '\nName: ', doc.data().Name);
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });

customer.get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            if ((doc.id === '0sTzAeNZT3hGonPrH0Ba'))
                return console.log('Document Id: ',doc.id, '=>',doc.data());
            })
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
//customer.get().then((snapshot) => {
//    console.log(snapshot.docs);
//})
