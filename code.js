
$('.entry').click(function(){

// sessionStorage
let userName = document.getElementById("userName").value;
console.log(userName)
if (userName === "") {
    alert("Введите свое имя")
} else {
    localStorage.setItem(userName, '[]')

    $('.login-page').animate({height: "toggle", opacity: "toggle"}, 500);
    setTimeout(function(){
        $(".cames").animate({height: "toggle", opacity: "toggle"}, 500);

// logics games start
        let randomNamber = Math.round( Math.random() * 100);
        let remember = [];
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
                }
                
            } else {
                alert ("Введите целое положительное число от 0 до 100");
            }
        }
// logics games stop



    },500)
}


    return false;
 });