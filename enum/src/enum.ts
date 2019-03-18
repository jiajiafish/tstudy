enum Sex {
    MALE,
    FEMALE,
    UNKNOWN
}

let membersex: Sex = Sex.FEMALE
console.log(membersex)
console.log(Sex[membersex])


switch (+membersex) {
    case Sex.MALE:
        console.log("男")
        break;
    case Sex.FEMALE:
        console.log("女")
        break;
    case Sex.UNKNOWN:
        console.log("不明")
        break;
    default:
        break;
}

let mydata1:string=null;
let mydata3:string=undefined;
let mydata2:string=""

