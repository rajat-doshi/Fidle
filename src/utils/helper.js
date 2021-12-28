export const limitChec =(value)=>{
   return value.length>10
}
export const regexChec =(value,regex)=>{
     return value.match(regex);
}