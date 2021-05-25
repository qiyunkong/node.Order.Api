
//模糊参数 条件对象
const  matchOR = (options)=> {
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

//嵌套|链式 条件对象
const matchORList = (options)=> {
    let optionArr = []
    const parentId = delete options.parentId
    optionArr.push({'$match':{parentId}})
    const or = matchOR (options)
    optionArr.push({'$match':or})
    return optionArr
}

module.exports ={
    matchOR,
    matchORList
}

