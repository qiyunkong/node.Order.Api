class HttpData {
    constructor(code, msg,content,data) {
        this.code =  code
        this.msg  =  msg
        this.content = content
        this.data = data || {}
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
module.exports = HttpData;