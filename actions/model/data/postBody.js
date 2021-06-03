//导入模块
const ModelDva              =     require('../../../model/Model')
const {addModel}            =     require('../../../servers/base')
//暴露模块  
module.exports = async cxt => {
    let httpData
    //获取POST参数
    const body = cxt.request.body
    httpData = await addModel(body,ModelDva);
    cxt.response.status = httpData.code
    //响应
    cxt.body = httpData

}


/*
* 后台的数据库格式
*    name:'room'
*    nameDva:'房间'
*    schemaDva:[
*      {
*       title:'列表表头'
*       dataIndex:'绑定数据字段'
*       tip: '描述',
*       valueType: '表单类型',
*      {
          title: "操作",
          dataIndex: 'option',
          valueType: 'option',
          render: (_, record) => [
            <a key="config" onClick={() => {
                //link 方法
                handleUpdateModalVisible(true);
                setCurrentRow(record);
              }}
            > 更新 </a>,
          ],
        },
*    ]
*
*
*
*
* */