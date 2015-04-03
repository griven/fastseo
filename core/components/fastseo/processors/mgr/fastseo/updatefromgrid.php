<?php
/**
 * @package fastseo
 * @subpackage processors
 */
/* parse JSON */
if (empty($scriptProperties['data'])) return $modx->error->failure('Invalid data.');
$_DATA = $modx->fromJSON($scriptProperties['data']);
if (!is_array($_DATA)) return $modx->error->failure('Invalid data.');

/* get obj */
if (empty($_DATA['id'])) return $modx->error->failure($modx->lexicon('fastseo.fastseo_err_ns'));
$resource = $modx->getObject('modResource',$_DATA['id']);
if (empty($resource)) return $modx->error->failure($modx->lexicon('fastseo.fastseo_err_nf'));

$resource->fromArray($_DATA);

/* save */
if ($resource->save() == false) {
    return $modx->error->failure($modx->lexicon('fastseo.fastseo_err_save'));
}

return $modx->error->success('',$resource);