const firebase = require("firebase");

module.exports = {

phonebooksRead:  (req, res) => {
    const userReference = firebase.database().ref("/Contacts/")
    userReference.on("value", function(snapshot) {
      console.log(snapshot.val());
      const data = Object.keys(snapshot.val()).map((o) =>
      Object.assign({ id: o }, snapshot.val()[o])
    );
      res.json(data);
      userReference.off("value");
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
      res.send("The read failed: " + errorObject.code);
    });
  },

  phonebooksCreate: (req, res) => {
    const id = Date.now();
    const name = req.body.name;
    const phone = req.body.phone;
  
    const referencePath = '/Contacts/'+id+'/';
    const userReference = firebase.database().ref(referencePath);
    userReference.set({name, phone}, function(error) {
      if (error) {
        res.send("Data could not be saved." + error);
      } else {
        res.send("Data saved successfully.");
      }
    });
  },

  phonebooksUpdate: (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const phone = req.body.phone;
  
    var referencePath = '/Contacts/'+id+'/';
    var userReference = firebase.database().ref(referencePath);
    userReference.update({name, phone}, function(error) {
      if (error) {
        res.send("Data could not be updated." + error);
      } else {
        res.send("Data updated successfully.");
      }
    });
  },

  phonebooksDelete: (req, res) => {
    const id = req.params.id;
    var referencePath = '/Contacts/'+id+'/';
    var userReference = firebase.database().ref(referencePath);
    userReference.remove((error)=>{
      if (error) {
        res.send("Data could not be deleted." + error);
      } else {
        res.send("Data deleted successfully.");
      }
    })
  }
  

}