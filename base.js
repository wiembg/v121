 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBGPWhI1n0NQ6YIqOp1K1Q5WvLRoRtO83o",
    authDomain: "v121-d312c.firebaseapp.com",
    databaseURL: "https://v121-d312c.firebaseio.com",
    projectId: "v121-d312c",
    storageBucket: "v121-d312c.appspot.com",
    messagingSenderId: "405397062015"
  };
  firebase.initializeApp(config);
  

         function insertData(email, password, local,birthday,profession,name,phone) {
			 firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // ...
			});
			var id;
			firebase.auth().onAuthStateChanged((user) => {
			  if (user) {
				id =firebase.auth().currentUser.uid;
				firebase.database().ref('profile/'+ id).set({




				        email: email,
                local: local,
               birthday:birthday,
              profession:profession,
              name:name,
              phone:phone

				
            }); 
			  }
});
                     

        }
		
		$('#confirm').on('click', function () {
            var local = $('#localname').val();
            var email = $('#email').val();
			      var password = $('#password').val();
            var birthday = $('#date').val();
            var name = $('#allname').val();
            var phone = $('#numtel').val();
            var profession = $('#profession').val();
            
            insertData (email, password, local,birthday,profession,name,phone);
        });