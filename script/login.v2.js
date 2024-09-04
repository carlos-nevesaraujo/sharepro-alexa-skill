function validateForm() {
    var isValid = true;

    // Clear previous errors
    $(".form-control").removeClass("is-invalid");

    var email = $("#email").val();

    // Basic validation checks
    if (!email) {
        isValid = false;
    }

    if(email.indexOf("sharepro") < 0)
    {
        isValid = false;
        alert("Acesso negado!")
    }

  
    if (isValid) {
        // Simulate authentication and generate an access token (in real use, you'd authenticate and obtain a token)
        var accessToken = email; // Replace this with actual token

        // Redirect to Alexa's redirect URL with the access token
        var redirectUri = "https://pitangui.amazon.com/spa/skill/account-linking-status.html?vendorId=MNMBMHN0IMTVR";
        window.location.href = redirectUri + "#access_token=" + encodeURIComponent(accessToken);
    }

    return false; // Prevent form submission to allow redirection
}

