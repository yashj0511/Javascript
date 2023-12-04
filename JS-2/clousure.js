function outer(){
    let username="yash"
    //console.log(secret);//error: secret is not definedd - bade choto se nhi mang skte
    function inner(){
        let secret="123"
        console.log("inner",username);
    }
    function innerTwo(){
        console.log("innerTwo",username);
        //console.log(secret);//error: secret is not definedd ->note this is hapeeing because siblings cannot acess ,bhai bhai nhi krenge share 
    }
    inner()
    innerTwo()
}
outer()
//console.log(" too Outer",username);//error because it is outsidde


//function ke andar function hai to jo andar ka function hai vo bahar ke function ke values acess kr skta hai pr pura hi bahaar ho jaise yaha too Outer to vha nhi hoga acess


// chote bado se mang skte hai bade choto se nhi mang skte




//////////////////////////////////////////


function makeFunc(){
    const name="Mozilla"
    function displayName(){
        console.log(name);
    }
    return displayName;//yaha return ho rha hai refrence us function ka tb to function ka scope rhta hai jb tk vo execute hota hai mtlb yha return kr rhe hum tb to pure function ka scope to gayab then mean outer function hi gayab ho gya to kaise chlegi lexical scoping

    //athough hamne scope uska function execution context hata dia hai pr memory ka role ata hai 

    //means only displayname nhi jayega agr uska outer function exist krta hai to uska bhi scope jayega 
    //mtlb uska pura lexical scope jata hainaki bas function ka exexution context 
    //agr nhi hota to error aa jata q ki name outer function me hai to error aa jata 
} 

const myFunc=makeFunc()
myFunc()