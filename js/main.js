var inpt1=document.querySelector('.txt');
var inpt2=document.querySelector('.pass');
inpt1.onfocus=function(){
   if(inpt1.value==0)
      document.getElementById('label_m').classList.add('label_after');
}
inpt1.onblur=function(){
   if(inpt1.value==0)
      document.getElementById('label_m').classList.remove('label_after');
}
inpt2.onfocus=function(){
   if(inpt2.value==0)
      document.getElementById('label_p').classList.add('label_after');
}
inpt2.onblur=function(){
   if(inpt2.value==0)
      document.getElementById('label_p').classList.remove('label_after');
}