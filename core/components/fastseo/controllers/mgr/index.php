<?php
/**
 * Loads the home page.
 *
 * @package fastseo
 * @subpackage controllers
 */
$modx->regClientStartupScript($fastseo->config['jsUrl'].'mgr/widgets/fastseo.grid.js');
$modx->regClientStartupScript($fastseo->config['jsUrl'].'mgr/widgets/home.panel.js');
$modx->regClientStartupScript($fastseo->config['jsUrl'].'mgr/sections/index.js');

$output = '<div id="fastseo-panel-home-div"></div>';

return $output;
