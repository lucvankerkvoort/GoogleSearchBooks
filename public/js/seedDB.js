const mongoose = require("mongoose");
const db = require("../../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const localSeed = [
  {
    title: "Harry Potter",
    authors: "JK Rowling",
    description: "Nope",
    image: "https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg",
    link:
      "https://www.amazon.com/s?k=harry+potter+collectible+book&gclid=EAIaIQobChMIqab8o5Xt4wIVhtlkCh2S4wogEAAYASAAEgKywfD_BwE&hvadid=329283954681&hvdev=c&hvlocphy=9031962&hvnetw=g&hvpos=1t1&hvqmt=b&hvrand=6276456491861112199&hvtargid=kwd-391213841676&hydadcr=16849_10299158&tag=googhydr-20&ref=pd_sl_6zrgy3vve2_b"
  }
];

db.books
  .remove({})
  .then(() => db.books.collection.insertMany(localSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
