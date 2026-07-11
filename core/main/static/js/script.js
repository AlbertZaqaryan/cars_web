function showInfo(car){

    let message = "";

    if(car === "BMW"){
        message = "BMW was founded in Germany in 1916.";
    }
    else if(car === "Mercedes"){
        message = "Mercedes-Benz is one of the oldest automobile manufacturers.";
    }
    else if(car === "Audi"){
        message = "Audi is famous for its Quattro all-wheel-drive system.";
    }

    alert(message);
}