"use strict";
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
    Sex[Sex["UNKNOWN"] = 2] = "UNKNOWN";
})(Sex || (Sex = {}));
var membersex = Sex.FEMALE;
console.log(membersex);
console.log(Sex[membersex]);
switch (+membersex) {
    case Sex.MALE:
        console.log("男");
        break;
    case Sex.FEMALE:
        console.log("女");
        break;
    case Sex.UNKNOWN:
        console.log("不明");
        break;
    default:
        break;
}
var mydata1 = null;
var mydata3 = undefined;
var mydata2 = "";
