function bmiCalc(w,h){
    bmi=w/(h*h);
    return bmi;
}
if (bmiCalc(w,h)<18.5){
    console.log("Underweight");
}else if (bmiCalc(w,h)>=18.5 && bmiCalc(w,h)<25){
    console.log("Normal weight");
}   else if (bmiCalc(w,h)>=25 && bmiCalc(w,h)<30){
    console.log("Overweight");
}else if (bmiCalc(w,h)>=30){
    console.log("Obese");
} else if(bmiCalc(w,h)>=35){
    console.log("Extremely Obese");
}