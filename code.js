let logicsGame = function(){
    let randomNamber = Math.round( Math.random() * 100);
    let nameUser = document.getElementById("userName").value;
    console.log(randomNamber);
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
                if (localStorage.length == 0 ) {
                    objRemember.item1 = remember.join();
                    let serialObj = JSON.stringify(objRemember);
                    localStorage.setItem(nameUser, serialObj);                    
                } else {
                    for (let i = 0; i < localStorage.length; i++) {
                        if (localStorage.key(i) === nameUser) {
                            // нашли объект по ключу и парсим 
                            let returnObj = JSON.parse(localStorage.getItem(nameUser));
                            // добавляем к объекту свойство с новыми массивом значений
                            let key = Object.keys(returnObj).length +1;
                            let newItem = "item" + key;
                            returnObj[newItem] = remember.join();
                            // сериализуем объект и записываем обратно под тем же ключем
                            let serialObj = JSON.stringify(returnObj);
                            localStorage.setItem(nameUser, serialObj);
                            i = localStorage.length;
                        } else {
                            objRemember.item1 = remember.join();
                            let serialObj = JSON.stringify(objRemember);
                            localStorage.setItem(nameUser, serialObj);
                            i = localStorage.length;
                        }
                    }                    
                }
            }
        } else {
            alert ("Введите целое положительное число от 0 до 100");
            }
    }
}


// first game
$('.entry').click(function(){
    document.getElementById("inputNumber").value = 50;
    let userName = document.getElementById("userName").value;
    if (userName === "") {
        alert("Введите свое имя")
    } else {
        $(".inputUserName").text(userName);
        $('.login-page').animate({height: "toggle", opacity: "toggle"}, 500);
        setTimeout(function(){
            $(".games").animate({height: "toggle", opacity: "toggle"}, 500);
            logicsGame();
        },500)
    }
    return false;
 });

//  Restart
$(".restart").click(function(){
    $(".games").animate({height: "toggle", opacity: "toggle"}, 500);
        setTimeout(function(){
            document.getElementById("inputNumber").value = 50;
            $(".games").animate({height: "toggle", opacity: "toggle"}, 500);
            logicsGame();
        },500)
    return false;
});

// Sign out
$(".signOut").click(function(){
    $(".games").animate({height: "toggle", opacity: "toggle"}, 500);
    setTimeout(function(){
        $('.login-page').animate({height: "toggle", opacity: "toggle"}, 500);
    },500)
    return false;
})

// Удали Вас из LocalStorage
$(".removeUserName").click(function(){
    let userName = document.getElementById("userName").value;
    localStorage.removeItem(userName);
    $(".games").animate({height: "toggle", opacity: "toggle"}, 500);
    setTimeout(function(){
        $('.login-page').animate({height: "toggle", opacity: "toggle"}, 500);
    },500)
    return false;
})