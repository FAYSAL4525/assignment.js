//pogram1:kilometerToMeter
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        var wrong = 'That is a negetive value kilometer can not be a negetive value';
        return wrong;
    }
    else if (typeof kilometer == "string") {
        var wrong = 'That is a string value kilometer can not be a string    value';
        return wrong;
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }

}

console.log(kilometerToMeter('st'));

//pogram2:budgetCalculator
function budgetCalculator(watch, phone, leptop) {
    if (watch < 0 || phone < 0 || leptop < 0) {
        var wrong = 'That is a negetive value product value  can not be a negetive ';
        return wrong;
    }
    else if (typeof watch == "string" || typeof phone == "string" || typeof leptop == "string") {
        var wrong = 'That is a string value product value can not be a string value';
        return wrong;
    }
    else {
        var totalWatchPrice = watch * 50;
        var totalPhonePrice = phone * 100;
        var totalLeptopPrice = leptop * 500;
        var totalBudget = totalWatchPrice + totalPhonePrice + totalLeptopPrice;
        return totalBudget;
    }
}

console.log(budgetCalculator(2, 8, 5));

//pogram3:hotelCost
function hotelCost(day) {
    if (day < 0 || typeof day == "string") {
        var wrong = 'That is a negetive or string value day can not be a negetive or string value';
        return wrong;
    }
    else if (day <= 10) {
        var hotelcost = day * 100;
        return hotelcost;
    }
    else if (day <= 20) {
        var firstShift = 10;
        var firstShiftPrice = firstShift * 100;
        var remaining = day - firstShift;
        var secondShiftPrice = remaining * 80;
        var hotelcost = firstShiftPrice + secondShiftPrice;
        return hotelcost;

    }
    else if (day > 20) {
        var firstShift = 10;
        var firstShiftPrice = firstShift * 100;
        var secondShift = 10;
        var secondShiftPrice = secondShift * 80;
        var remaining = day - 20;
        var thirShiftPrice = remaining * 50;
        var hotelcost = firstShiftPrice + secondShiftPrice + thirShiftPrice;
        return hotelcost;
    }
}

console.log(hotelCost(20));


//pogram4:megaFriend
function megaFriend(friendsName) {
    var max = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        if (typeof friendsName[i] != "string") {
            var wrong = "FriendsName isn't a string value ";
            return wrong;
        }
        else if (friendsName[i].length > max.length) {
            max = friendsName[i];
        }
    }
    return max;
}

var friend = ['faysal', 'jabed', 'hasibur', 'mehedi']
console.log(megaFriend(friend));