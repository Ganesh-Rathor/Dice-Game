// alert("Working!");


    // var player1 = prompt("What is Player one Name !");
    // var player2 = prompt("What is player Two name !");
    
    // Name of player 1 and player 2

    var player1 = "Ganesh";
    var player2 = "Unknown";
    var player1Adderess = document.querySelectorAll("p")[0];
    player1Adderess.innerHTML = player1;

    var player2Adderess = document.querySelectorAll("p")[1];
    player2Adderess.innerHTML = player2;
    
    var randomNumber1 = Math.random() * 6;
    randomNumber1 = Math.floor(randomNumber1) + 1;

    var randomImage = "dice" + randomNumber1 + ".png";

    var randomImageSource = "images/" + randomImage;

    var image1Adderess = document.querySelectorAll("img")[0];

    image1Adderess.setAttribute("src",randomImageSource);

    // Image 2

    var randomNumber2 = Math.floor((Math.random()*6) + 1 );
    
    var randomImage2 = "dice" + randomNumber2 + ".png";

    var randomImageSource2 = "images/" + randomImage2 ;
    
    var image2Adderess = document.querySelectorAll("img")[1];

    image2Adderess.setAttribute("src",randomImageSource2);

    var headAdderess = document.querySelectorAll("h1")[0];
    if(randomNumber1 > randomNumber2){
        headAdderess.innerHTML = "🚩" + player1 + "Wins!";

    }
    else if(randomNumber1 < randomNumber2){
        headAdderess.innerHTML = player2 + " Wins!🚩";
    }
    else{
        headAdderess.innerHTML = "🤜🤛Drawn!";
    }