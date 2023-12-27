
$(document).ready(function () {
    // Add validation rules and messages
    $("#frm").validate({
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
          minlength: 6,
        },
      },
      messages: {
        name: {
          required: "Please enter your name",
        },
        email: {
          required: "Please enter your email",
          email: "Please enter a valid email address",
        },
        password: {
          required: "Please enter a password",
          minlength: "Password must be at least 6 characters",
        },
      },
      // Specify where to display error messages
      errorPlacement: function (error, element) {
        error.insertAfter(element);
      },
    });
  });
