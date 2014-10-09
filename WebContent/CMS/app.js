Ext.Loader.setConfig({enabled:true});
Ext.application({
    name: 'CMS',
    
    requires: [
        'CMS.Config',
        'CMS.Url',
        'CMS.ux.data.proxy.Format',
        'CMS.ux.data.FailureProcess'
    ],

    autoCreateViewport: true,
    
    requires: [
        'Ext.window.MessageBox'
    ],

    controllers: [
       'Viewport'
    ],
    
    launch: function(){
        //if (!Ext.isWebKit) {
        //    Ext.MessageBox.alert('WebKit Only', 'This example is currently only supported in WebKit browsers');
        //}
    }
});
