var xhr = new XMLHttpRequest();

export default class Store {
    constructor(){
        this.key = true;
    }
    static setKey(key){
        this.key = key;
    }
    static getKey(){
        return this.key;
    }
    static getApi(fun){
        xhr.open('GET', "https://now-express-master.nio7.now.sh/users", true);
        xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        fun(users);
        }
        xhr.send(null);
    }
    static postApi(user){
        var json = JSON.stringify(user);
        xhr.open("POST", "https://now-express-master.nio7.now.sh/user", true);
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.send(json);
    }
}