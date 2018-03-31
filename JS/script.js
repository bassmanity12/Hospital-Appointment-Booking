document.getElementById("signIn")
    .addEventListener("keypress", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementsByClassName("enter").click();
        }
    });

function buttonCode()
{
    alert("Button code executed.");
}

function ShowDiv() {
    document.getElementById("loginForm").style.display = "block";
}