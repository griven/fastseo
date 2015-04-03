fastSEO.grid.fastSEO = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        id: 'fastseo-grid-fastseo'
        ,url: fastSEO.config.connectorUrl
        ,baseParams: {
            action: 'mgr/fastseo/getList'
        }
        ,save_action: 'mgr/fastseo/updateFromGrid'
        ,fields: ['id','pagetitle','parent']
        ,paging: true
        ,autosave: true
        ,remoteSort: true
        ,anchor: '97%'
        ,autoExpandColumn: 'name'
        ,columns: [{
            header: _('id')
            ,dataIndex: 'id'
            ,sortable: true
            ,width: 60
        },{
            header: 'pagetitle'
            ,dataIndex: 'pagetitle'
            ,sortable: true
            ,width: 100
            ,editor: { xtype: 'textfield' }
        },{
            header: 'parent id'
            ,dataIndex: 'parent'
            ,sortable: false
            ,width: 350
            ,editor: { xtype: 'textfield' }
        },]
        ,tbar: [{
            xtype: 'textfield'
            ,id: 'fastseo-search-filter'
            ,emptyText: _('fastseo.search')
            ,listeners: {
                'change': {fn:this.search,scope:this}
                ,'render': {fn: function(cmp) {
                    new Ext.KeyMap(cmp.getEl(), {
                        key: Ext.EventObject.ENTER
                        ,fn: function() {
                            this.fireEvent('change',this);
                            this.blur();
                            return true;
                        }
                        ,scope: cmp
                    });
                },scope:this}
            }
        }]
    });
    fastSEO.grid.fastSEO.superclass.constructor.call(this,config)
};
Ext.extend(fastSEO.grid.fastSEO,MODx.grid.Grid,{
    search: function(tf,nv,ov) {
        var s = this.getStore();
        s.baseParams.id = parseInt(tf.getValue());
        this.getBottomToolbar().changePage(1);
        this.refresh();
    }
});
Ext.reg('fastseo-grid-fastseo',fastSEO.grid.fastSEO);


fastSEO.window.CreateFastSEO = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        title: _('fastseo.fastseo_create')
        ,url: fastSEO.config.connectorUrl
        ,baseParams: {
            action: 'mgr/fastseo/create'
        }
        ,fields: [{
            xtype: 'textfield'
            ,fieldLabel: _('fastseo.name')
            ,name: 'name'
            ,width: 300
        },{
            xtype: 'textarea'
            ,fieldLabel: _('fastseo.description')
            ,name: 'description'
            ,width: 300
        }]
    });
    fastSEO.window.CreateFastSEO.superclass.constructor.call(this,config);
};
Ext.extend(fastSEO.window.CreateFastSEO,MODx.Window);
Ext.reg('fastseo-window-fastseo-create',fastSEO.window.CreateFastSEO);


fastSEO.window.UpdateFastSEO = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        title: _('fastseo.fastseo_update')
        ,url: fastSEO.config.connectorUrl
        ,baseParams: {
            action: 'mgr/fastseo/update'
        }
        ,fields: [{
            xtype: 'hidden'
            ,name: 'id'
        },{
            xtype: 'textfield'
            ,fieldLabel: _('fastseo.name')
            ,name: 'name'
            ,width: 300
        },{
            xtype: 'textarea'
            ,fieldLabel: _('fastseo.description')
            ,name: 'description'
            ,width: 300
        }]
    });
    fastSEO.window.UpdateFastSEO.superclass.constructor.call(this,config);
};
Ext.extend(fastSEO.window.UpdateFastSEO,MODx.Window);
Ext.reg('fastseo-window-fastseo-update',fastSEO.window.UpdateFastSEO);