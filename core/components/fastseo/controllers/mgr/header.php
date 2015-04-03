<?php
/**
 * Loads the header for mgr pages.
 *
 * @package fastseo
 * @subpackage controllers
 */
$modx->regClientStartupScript($fastseo->config['jsUrl'].'mgr/fastseo.js');
$modx->regClientStartupHTMLBlock('<script type="text/javascript">
Ext.onReady(function() {
    fastSEO.config = '.$modx->toJSON($fastseo->config).';
});
</script>');


return '';