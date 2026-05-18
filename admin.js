// FIREBASE CONFI

const firebaseConfig = {

  apiKey: "AIzaSyC6WfNEkOxKt60ms6AEvoMHjYxWCiMJTBk",

  authDomain: "roxpert-care.firebaseapp.com",

  databaseURL:
  "https://roxpert-care-default-rtdb.firebaseio.com",

  projectId: "roxpert-care",

  storageBucket:
  "roxpert-care.firebasestorage.app",

  messagingSenderId: "791241297789",

  appId:
  "1:791241297789:web:7f8ad80c79d36a40e38614"

};


// INITIALIZE

firebase.initializeApp(firebaseConfig);

const database =
firebase.database();


// GET DATA

const complaintBox =
document.getElementById(
  "complaint-box"
);


database.ref("complaints")
.on("value", function(snapshot){

  complaintBox.innerHTML = "";

  snapshot.forEach(function(data){

    const complaint =
    data.val();

    complaintBox.innerHTML += `

    <div class="complaint">

      <h2>
        ${complaint.name}
      </h2>

      <p>
        <b>Number:</b>
        ${complaint.number}
      </p>

      <p>
        <b>Address:</b>
        ${complaint.address}
      </p>

      <p>
        <b>Brand:</b>
        ${complaint.brand}
      </p>

      <p>
        <b>Problem:</b>
        ${complaint.problem}
      </p>

      <p>

        <b>Status:</b>

        ${complaint.status || "Pending"}

      </p>

      <button
      onclick="markComplete('${data.key}')">

        Complete

      </button>

    </div>

    `;

  });

});


// MARK COMPLETE

function markComplete(id){

  database
  .ref("complaints/" + id)
  .update({

    status:"Completed"

  });

}