function AddUser() {

    player1_name = document.getElementById("log_1").value;
    player2_name = document.getElementById("log_2").value;

    localStorage.setItem("Name Of Player 1 = ", player1_name);
    localStorage.setItem("Name Of Player 2 = ", player2_name);

    window.location = "game_page.html";
}