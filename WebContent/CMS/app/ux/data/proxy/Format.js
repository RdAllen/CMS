/**
 * @class CMS.ux.data.proxy.Format
 * @author dong.ren
 * @description
 *  统一处理Ajax 请求 
 */
Ext.define('CMS.ux.data.proxy.Format',{
    extend: 'Ext.data.proxy.Proxy',
    alias:'proxy.format',
    
    requires: [
        'CMS.ux.data.FailureProcess'
    ],
    
    reader:{
        type:'json',
        root:'data',
        messageProperty:'msg'
    },
    
    writer:{
        type:'json',
        encode:true,
        root:'data',
        allowSingle: false //设为false表示确定记录集要被组装成数据，即使发送的记录只有一条
    },
    //处理错误 
    listeners:{
        exception:function(){
                CMS.FailureProcess.Proxy.apply(this, arguments);
        }
    }
    /*encodeFilters: function (filters) {
        var min = [],
            length = filters.length,
            i = 0;

        for (; i < length; i++) {
            min[i] = {
                property: filters[i].property,
                value: filters[i].value,
                operator: filters[i].operator
            };
        }
        return this.applyEncoding(min);
    }*/
	
})