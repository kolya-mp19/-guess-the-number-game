var logicsGame = function(){
// logics games start
    let randomNamber = Math.round( Math.random() * 100);
    let nameUser = document.getElementById("userName").value;
    console.log(randomNamber);
    console.log(nameUser);
    let remember = [];
    let objRemember = {};
    document.getElementById("checkButton").addEventListener("click", checkNamber);
    function checkNamber() {
        let inputТumber = document.getElementById("inputNumber").value;
        inputТumber = +inputТumber;
        remember.push(inputТumber);
        if (Number.isInteger(inputТumber) && inputТumber <= 100 && inputТumber >= 0 ) {
            randomNamber > inputТumber ? alert ("Введенное значение меньше загаданного") : false;
            randomNamber < inputТumber ? alert ("Введенное значение больше загаданного") : false;
            if (randomNamber === inputТumber) {
                alert ("Угадали!");
                document.getElementById("attempts").innerHTML = remember;
                document.getElementById("checkButton").removeEventListener("click", checkNamber);
                
                // sessionStorage
                console.log(nameUser);
                
                let rememberString = remember.join();
                objRemember.item0 = rememberString;
                let serialObj = JSON.stringify(objRemember);
                localStorage.setItem(userName.value, serialObj)
                
            }
        } else {
            alert ("Введите целое положительное число от 0 до 100");
            }
    }
        // logics games stop
}



// first game
$('.entry').click(function(){

let userName = document.getElementById("userName").value;
if (userName === "") {
    alert("Введите свое имя")
} else {
    $('.login-page').animate({height: "toggle", opacity: "toggle"}, 500);
    setTimeout(function(){
        $(".cames").animate({height: "toggle", opacity: "toggle"}, 500);
        logicsGame();
    },500)
}
    return false;
 });

//  Restart
$(".restart").click(function(){
    logicsGame();
    return false;
});

$(".signOut").click(function(){
    $(".cames").animate({height: "toggle", opacity: "toggle"}, 500);
    setTimeout(function(){
        $('.login-page').animate({height: "toggle", opacity: "toggle"}, 500);
    },500)
    return false;
})