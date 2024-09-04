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
        
        // window.location.href = fullRedirectUri;

        var amazonAccessToken = "dummy_amazon_access_token"; // Simulate token from Amazon OAuth
        var userAuthCode = "dummy_user_auth_code"; // Simulate user's auth code

        // Prepare the payload for enabling the skill
        var payload = {
            stage: "development", // or "live" based on your skill stage
            accountLinkRequest: {
                redirectUri: redirectUri, // Your actual redirect URI
                authCode: userAuthCode,
                type: "AUTH_CODE"
            }
        };

        // Define the header with the Amazon access token
        var headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + amazonAccessToken
        };

        // Send the request to Alexa Skill Enablement API
        fetch("https://api.amazonalexa.com/v1/skills/enablement", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.status === 201) {
                return response.json();
            } else {
                throw new Error('Failed to enable the skill');
            }
        })
        .then(data => {
            console.log("Skill enabled successfully:", data);
            alert("Skill has been enabled successfully!");
        })
        .catch(error => {
            console.error("Error enabling skill:", error);
            alert("Error enabling skill: " + error.message);
        });
    }

    return false; // Prevent form submission to allow redirection
}

