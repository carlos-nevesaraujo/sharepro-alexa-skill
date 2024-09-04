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
        var tokenType = "Bearer";
        var expiresIn =3600;
        // Redirect to Alexa's redirect URL with the access token
        var redirectUri = "https://pitangui.amazon.com/spa/skill/account-linking-status.html?vendorId=MNMBMHN0IMTVR";
        var fullRedirectUri = `${redirectUri}#access_token=${encodeURIComponent(accessToken)}&token_type=${encodeURIComponent(tokenType)}&expires_in=${encodeURIComponent(expiresIn)}`;
        
        window.location.href = fullRedirectUri;
    }

    return false; // Prevent form submission to allow redirection
}

