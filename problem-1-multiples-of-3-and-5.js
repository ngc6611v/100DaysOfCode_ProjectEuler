function multiplesOf3and5(number) {
  var suma = 0;
  for(let i=3; i<number; i++){
    if(i%3 ==0 || i%5 == 0){      
      suma = suma + i;
      //console.log("i->"+i+" suma->"+suma);
    }
  }
  console.log(suma);
  return suma;
}

multiplesOf3and5(10);
multiplesOf3and5(49);
multiplesOf3and5(1000);
multiplesOf3and5(8456);
multiplesOf3and5(19564);
