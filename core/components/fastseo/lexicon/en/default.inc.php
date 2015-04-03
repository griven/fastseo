<?php
/**
 * Default English Lexicon Entries for fastSEO
 *
 * @package fastseo
 * @subpackage lexicon
 */
$_lang['fastseo'] = 'Быстрое SEO';
$_lang['fastseo.desc'] = 'fastseo';
$_lang['fastseo.description'] = 'Description';
$_lang['fastseo.help'] = 'Изменяемый параметр набирается в простом виде для resource field ( pagetitle ), или с добавлением tv_ для template variable ( tv_price )<br><br>'.
'В шаблоне действуют следующий правила: обычное слово ( Товар ), resource field ( rf_id ), template variable (tv_size), части разделаются с помощью \'+\'<br/>'.
'Пример: Продажа шины +rf_longtitle+ размера +tv_size <br/>'.
'Доступ к полям родителей осуществляется через дописывание ( p1_ для родителя, p2_ для дедушки и тд. ) после rf_ или tv_<br/>'.
'Пример: Продажа шины +rf_p1_pagetitle+ по цене +tv_p2_price';
$_lang['fastseo.management'] = 'Быстрое SEO';
$_lang['fastseo.search'] = 'id родителя';
$_lang['fastseo.param'] = 'изменяемый параметр';
$_lang['fastseo.template'] = 'шаблон';
$_lang['fastseo.rename'] = 'переименовать';