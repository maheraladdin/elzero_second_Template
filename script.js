var run = true;
function appear(i) {
    if(run){
      document.getElementById(i).style.visibility='visible';
      run = !run;
    }
  else {
    document.getElementById(i).style.visibility='hidden';
    run = !run;
  }
}