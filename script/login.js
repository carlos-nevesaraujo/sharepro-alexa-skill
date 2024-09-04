function validateForm() {
    var isValid = true;

    // Clear previous errors
    $(".form-control").removeClass("is-invalid");

    var email = $("#email").val();
    var password = $("#senha").val();

    // Basic validation checks
    if (!email || !password) {
        isValid = false;
    }
  
    if (isValid) {
        // Simulate authentication and generate an access token (in real use, you'd authenticate and obtain a token)
        var accessToken = "dummy_access_token"; // Replace this with actual token

        // Redirect to Alexa's redirect URL with the access token
        var redirectUri = "https://pitangui.amazon.com/spa/skill/account-linking-status.html?vendorId=MNMBMHN0IMTVR";
        window.location.href = redirectUri + "&access_token=" + encodeURIComponent(accessToken);
    }

    return false; // Prevent form submission to allow redirection
}