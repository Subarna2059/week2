const result = (a,b)=>{
    if(b == false) {
        if(a>=89 && a<100) {
            return true
        }
    } else if(b==true && a>90) {
        return true
    } else {
        return false
    }
}

console.log(result(89,false));
