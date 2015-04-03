<?php
/**
 * @package fastseo
 * @subpackage controllers
 */
require_once dirname(dirname(__FILE__)).'/model/fastseo/fastseo.class.php';
$fastseo = new fastSEO($modx);
return $fastseo->initialize('mgr');