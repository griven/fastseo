<?php
/**
 * Get a list of fastSEO
 *
 * @package fastseo
 * @subpackage processors
 */
/* setup default properties */
$isLimit = !empty($scriptProperties['limit']);
$start = $modx->getOption('start',$scriptProperties,0);
$limit = $modx->getOption('limit',$scriptProperties,20);
$sort = $modx->getOption('sort',$scriptProperties,'');
$dir = $modx->getOption('dir',$scriptProperties,'ASC');
$query = $modx->getOption('query',$scriptProperties,'');
$parent_id = $modx->getOption('id',$scriptProperties,'');

/* build query */
$c = $modx->newQuery('modResource');
$c->where(array(
    'parent' => $parent_id
));

$count = $modx->getCount('modResource',$c);
if ($sort) $c->sortby($sort,$dir);
if ($isLimit) $c->limit($limit,$start);
$resources1 = $modx->getIterator('modResource', $c);

/* iterate */
$list = array();
foreach ($resources1 as $res) {
    $resourceArray = $res->toArray();
    $list[]= $resourceArray;
}

return $this->outputArray($list,$count);