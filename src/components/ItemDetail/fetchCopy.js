export const fetchCopy = (items) =>{
    return new Promise ((resolve,rejet)=>{
        setTimeout(()=>{
            resolve(items)
        },1100);
    })
}