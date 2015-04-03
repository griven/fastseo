fastSEO.panel.Home = function(config) {
    config = config || {};
    Ext.apply(config,{
        border: false
        ,baseCls: 'modx-formpanel'
        ,items: [{
            html: '<h2>'+_('fastseo.management')+'</h2>'
            ,border: false
            ,cls: 'modx-page-header'
        },{
            xtype: 'modx-tabs'
            ,bodyStyle: 'padding: 10px'
            ,defaults: { border: false ,autoHeight: true }
            ,border: true
            ,items: [{
                title: _('fastseo')
                ,defaults: { autoHeight: true }
                ,items: [{
                    html: '<p>'+_('fastseo.help')+'</p><br />'
                    ,border: false
                },{
                    xtype: 'textfield'
                    ,id: 'param_textfield'
                    ,emptyText: _('fastseo.param')
                    ,width: 200
                },{
                    xtype: 'textfield'
                    ,id: 'template_textfield'
                    ,emptyText: _('fastseo.template')
                    ,width: 400
                },{
                    xtype: 'button',
                    name: 'button_clear',
                    fieldLabel: '',
                    text: _('fastseo.rename'),
                    width: 130,
                    handler: this.updateResources
                },{
                    xtype: 'fastseo-grid-fastseo'
                    ,preventRender: true
                }]
            }]
        }]
    });

    fastSEO.panel.Home.superclass.constructor.call(this,config);
};

Ext.extend(fastSEO.panel.Home, MODx.Panel, {
    updateResources: function() {
        var parent_id = Ext.getCmp('fastseo-search-filter').getValue();
        var new_text = Ext.getCmp('template_textfield').getValue();
        var field = Ext.getCmp('param_textfield').getValue();
        MODx.msg.confirm({
            title: 'Заменить'
            ,text: 'Вы уверены?'
            ,url: fastSEO.config.connectorUrl
            ,params: {
                action: 'mgr/fastseo/update'
                , id: parent_id
                , text: new_text
                , field: field
            }
            ,listeners: {
                'success': {fn: function() {
                    MODx.msg.status({
                        title: _('save_successful'),
                        delay: 3
                    });
                    var grid = Ext.getCmp('fastseo-grid-fastseo')
                    grid.getBottomToolbar().changePage(1);
                    grid.refresh();
                }, scope:this}
            }
        });
    },
});
Ext.reg('fastseo-panel-home',fastSEO.panel.Home);
