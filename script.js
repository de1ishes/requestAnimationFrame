
 const btn = document.querySelector(".btn");
 const elem = document.querySelector(".box");
 let pos = 0;//позиция ,з якой буде все стартуваться


 function myAnimation(){
     pos++;
     elem.style.top = pos + "px";//ізміняєм топ
     elem.style.left = pos + "px";
    
     //если позиция стала більше чим 300,то будем запускать анимацию
     if(pos < 300){
         requestAnimationFrame(myAnimation);//принимае один аргумент(функцию)
     }
  }

btn.addEventListener("click", () => requestAnimationFrame(myAnimation));
// let k = 0;
// function count(){
//     for(let i=0; i < 1e9; i++){
//         k++;
//     }
//     alert('done');
// }
// count();