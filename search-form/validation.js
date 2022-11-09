$("#form").validate({
    
    rules: {
        name:{
            required: true,
            minlength: 2
        },
        country:{
            required: true
        }
    }, 
    messages: {
        name:{
            required: "Please enter your name",
            minlength: "Please enter at least two or more characters"
        },
        
        country:{
            required: "Please select an option"
        }
        
    },


    submitHandler: function(form) {
      form.submit();
    }
});