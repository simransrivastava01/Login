
function login(){

    var email= document.getElementById("email").value;
    var pwd= document.getElementById("pass").value;

    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(email=='')
    {
        alert('Please enter your user email id');
    }
    else if (!filter.test(email))
    {
        alert('Invalid email');
    }
    else if(pwd=='')
    {
        alert('Please enter Password');
    }
    else
    {				                     
        alert('Thank You for Login ');
           
         window.location = "home.php"; 
         
        //  $.ajax({
        //     type: "POST",
        //     url: 'home.html',
        //     data: {
        //         // username: $("#username").val(),
        //         // password: $("#password").val(),
        //          email: document.getElementById("email").value,
        //          pwd: document.getElementById("pass").value
        //     },
        //     success: function(data)
        //     {
        //         if (data === 'Correct') {
        //             window.location.replace('home.html');
        //         }
        //         else {
        //             alert(data);
        //         }
        //     }
        // });
    }


}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
