function forLoop(arr){
  for(let i = 0; i<25; i++){
    if(i ===1){
      arr.push("I am a strange loop.")
    }
    else{
      arr.push('I am ${i} strange loops.')
    }
  }
  return arr;
}

function whileLoop(n){
  while(n>0){
    console.log(n);
    n=n-1;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr){
  do{
    arr.pop();
  } while(arr.length > 0 && maybeTrue());
  return arr;
}
