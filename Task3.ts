//Q3-Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let Myname:string="Rehan Raees"
let TitleCase:string=""

console.log(Myname.toLocaleUpperCase())
console.log(Myname.toLowerCase())
console.log(Myname.charAt(0).toUpperCase() + Myname.slice(1).toLowerCase());

for (let i=0; i< Myname.length ; i++){
    if (i === 0 || Myname[i-1] ===" ") {
        TitleCase +=Myname[i].toUpperCase();

    }else{
        TitleCase=TitleCase+Myname[i].toLowerCase();
        
    }
}

console.log(TitleCase)




export{}