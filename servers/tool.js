
//模糊参数 条件对象
const  matchOR = (options)=> {
    if(!options._id){
        let optionArr = []
        for(let key in options){
            let item = {}
            item[key] = {$regex:options[key]}
            optionArr.push(item)
        }
        if(optionArr.length != 0){
            return {$or:optionArr}
        }
        return {}
    }else{
        return {
            _id:options._id
        }
    }
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


//递归方法
const codeOnceDebugEverywhere = (options,name,child) =>{
    //一级菜单
    if(name) return options.push(child)



    let menu = options.find(menu => menu.name = name)
    if(menu){
        codeOnceDebugEverywhere(menu.children,name)
    }else{

    }
}


module.exports ={
    matchOR,
    matchORList
}

