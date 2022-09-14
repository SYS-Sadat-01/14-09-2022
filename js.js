export default class User{
    constructor(name,age,lname){
        this.name = name;
        this.age = age;
        this.lname = lname;


}
}
export function printName(user){
    return 'This is The Name:' + user.name + user.lname
}
export function printAge(user){
    return 'This is The Age:' + user.age
}



