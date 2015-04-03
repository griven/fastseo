<?php
/**
 * fastSEO Connector
 *
 * @package fastseo
 */
require_once dirname(dirname(dirname(dirname(__FILE__)))).'/config.core.php';
require_once MODX_CORE_PATH.'config/'.MODX_CONFIG_KEY.'.inc.php';
require_once MODX_CONNECTORS_PATH.'index.php';

$corePath = $modx->getOption('fastseo.core_path',null,$modx->getOption('core_path').'components/fastseo/');
require_once $corePath.'model/fastseo/fastseo.class.php';
$modx->fastseo = new fastSEO($modx);

$modx->lexicon->load('fastseo:default');

/* handle request */
$path = $modx->getOption('processorsPath',$modx->fastseo->config,$corePath.'processors/');
$modx->request->handleRequest(array(
    'processors_path' => $path,
    'location' => '',
));