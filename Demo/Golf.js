function fillArraySumAndAvg() {
    // commenting out b/c using jQuery 
    // var strokesCtrl = getRefById('strokes');
    // var sumCtrl = getRefById('sum');
    // var avgCtrl = getRefById('avg');

    var scores = [];

    let par = 72;
    var sum = 0;
    for (var idx=0; idx < 18; idx++) {
        let s = getRandomNumber();
        scores.push(s);
        sum += s;
    }
    var avg = (sum / scores.length).toFixed(2);
    console.log(scores, sum, avg);

    // strokesCtrl.textContent = scores.join();
    // sumCtrl.value = sum;
    // avgCtrl.value = avg;
    $('#strokes').text(scores);
    $('#sum').val(sum);
    $('#avg').val(avg);
    let parmsg = "";
    if (par>sum) {
        parmsg = "Congrats, you shot " +(par-sum) +" under par!";
    } else if (sum>par) {
        parmsg = "Yikes, you shot " +(sum-par) + " over par! You need some practice!"
    } else if (sum=par) {
        parmsg = "You're on par!"
    }

    $('#parmsg').text(parmsg);

}

function getRandomNumber() {
    return Math.floor((Math.random() * 7)+1);
}

// function getRefById(id) {
//     return document.getElementById(id);
// }