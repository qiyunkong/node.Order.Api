
//对象转换
module.exports = setKeyAndValue = (options)=> {
    let optionArr = []
    for(let key in options){
        let item = {}
        item[key] = {$regex:options[key],$options:'$i'}
        optionArr.push(item)
    }
    if(optionArr.length != 0){
       return {$or:optionArr}
    }
    return {}

}