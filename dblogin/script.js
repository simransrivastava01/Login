
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
         
//             $(document).ready(function(){
//             $("#my-form").click(function(){
//                 var useremail = $("#email").val().trim();
//                 var password = $("#pass").val().trim();
        
//                 if( useremail != "" && password != "" ){
//                     $.ajax({
//                         url:'Sign-Up.php',
//                         type:'post',
//                         data:{useremail:username,password:password},
//                         success:function(response){
//                             if(response == 1){
//                                 window.location = "home.php";
//                             }else{
//                                 alert("Invalid username and password!");
//                             }
//                         }
//                     });
//                 }
//             });
//         });
        
        
    }


}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
