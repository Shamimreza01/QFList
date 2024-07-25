const sliceDetails=(title,size)=>{
    const result=title.length>size?title.slice(0,size)+'...':title;
   return result;
}

export default sliceDetails;

export const makeUrl=(path)=>{
    const url=`http://localhost:1530/api`+`${path}`;
    return url;
}