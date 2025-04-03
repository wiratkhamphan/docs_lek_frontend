window.sendMessage = function () {
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    const data = {
        name: name,
        email: email,
        message: message
    };

    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbw1xGf64M0aa0OAOs3h4TynJoSIWol_ZawnjfLCu5mfVn_YPESS_LWU9cr8NDH9tpil/exec',
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
            alert("Message sent successfully!");
            // Clear form after successful submission
            $("#name").val('');
            $("#email").val('');
            $("#message").val('');
            console.log(response);
        },
        error: function (error) {
            alert("Failed to send message.");
            console.log(error);
        }
    });
};
