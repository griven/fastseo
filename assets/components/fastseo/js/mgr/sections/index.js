Ext.onReady(function() {
    MODx.load({ xtype: 'fastseo-page-home'});
});

fastSEO.page.Home = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        components: [{
            xtype: 'fastseo-panel-home'
            ,renderTo: 'fastseo-panel-home-div'
        }]
    });
    fastSEO.page.Home.superclass.constructor.call(this,config);
};
Ext.extend(fastSEO.page.Home,MODx.Component);
Ext.reg('fastseo-page-home',fastSEO.page.Home);