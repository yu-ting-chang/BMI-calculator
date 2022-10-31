let calc = document.querySelector('#btn1')
let reset = document.querySelector('#btn2')
let height = document.querySelector('#height')
let weight = document.querySelector('#weight')
let check = document.querySelector('.checkbox')
let result = document.querySelector('#result')

calc.onclick = function () {
  
    reset.disabled = false;
    let h = Number(height.value);
    let w = Number(weight.value);
 

    if ((h && w) < 0 || isNaN(h || w)) {

        alert('請輸入正確數值')
        check.style.display = 'none'

    } else {

        let bmi = w / Math.pow(h / 100, 2);
        bmi = bmi.toFixed(1);
        // to fixed強制捨去小數點
     if (bmi < 18.5) {
        result.innerHTML = 'BMI值:' + bmi + "，體重過輕，均衡飲食，以增加體能。";
        check.style.borderColor = 'blue';
        result.style.color = 'blue';

    } else if (bmi >= 18.5 && bmi < 24) {
        result.innerHTML = 'BMI值:' + bmi + '，體重正常，要繼續保持喔。';
        check.style.borderColor = 'green';
        result.style.color = 'green';

    } else if (bmi >= 24 && bmi < 27) {
        result.innerHTML = 'BMI值:' + bmi + '，體重過重，儘快力行「健康體重管理」！';
        check.style.borderColor = 'orange';
        result.style.color = 'orange';

    } else if (bmi >= 27) {
        result.innerHTML = 'BMI值:' + bmi + '，肥胖，趕快力行「健康體重管理」！';
        check.style.borderColor = 'red';
        result.style.color = 'red';
        
    } else {
        alert('請輸入正確數值');
    }

}};
reset.onclick = function() {
    check.classList.add('.act')
    document.querySelector('#weight').value = ""
    document.querySelector('#height').value = ''
}