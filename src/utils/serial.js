export function serial(number,max){

return String(number)
.padStart(4,"0")+
" / "+
max;

}
