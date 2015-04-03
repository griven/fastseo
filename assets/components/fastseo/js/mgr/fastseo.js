var fastSEO = function(config) {
    config = config || {};
    fastSEO.superclass.constructor.call(this,config);
};
Ext.extend(fastSEO,Ext.Component,{
    page:{},window:{},grid:{},tree:{},panel:{},combo:{},config: {}
});
Ext.reg('fastseo',fastSEO);

fastSEO = new fastSEO();