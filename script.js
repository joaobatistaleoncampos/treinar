const velocidade = document.getElementById('velocidade')

const res=document.getElementById('res')


 function radar(){
const vel = velocidade.value;



if(vel >40 &&vel< 50){
    res.innerHTML+='Multado!!';
    
}

else{
    res.innerHTML+='Não multado'
    
}

 }