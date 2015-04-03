<?php
/**
    Модуль обработки шаблона СЕО
    rf - resource field
    tv - template variable
*/

// получаем переданные параметры
$field = trim($modx->getOption('field',$scriptProperties,0));
$parent_id = trim($modx->getOption('id',$scriptProperties,0));
$params = trim($modx->getOption('text',$scriptProperties,0));

if(strpos($field,"tv_")!==false) {
    $field = str_replace('tv_','',$field);
    $field_type = "tv";
} else {
    $field_type = "rf";
}

// получаем список ресурсов
$resources = $modx->getCollection("modResource", array('parent' => $parent_id));

// разбираем полученный шаблон
$tv_ar = array(); //templates variables array
$rf_ar = array(); //resource fields array 
$param_ar = split('\+', $params);

for($i=0; $i<count($param_ar); $i++) {
    $param = $param_ar[$i];
    if(strpos($param,"tv_") !== false){
        $tv_ar["$i"] = trim(str_replace('tv_','',$param));
    } else if(strpos($param_ar[$i],"rf_") !== false){
        $rf_ar["$i"] = trim(str_replace('rf_','',$param));
    }
}

// заполняем поля ресурсов
foreach ($resources as $res) {
    // вставляем полученные tv значения в итоговый массив
    foreach($tv_ar as $i=>$tv) {
        $param_ar[$i] = $res->getTVValue($tv);
    }
    // вставляем полученные rf значения (типо id,longtitle...) в итоговый массив
    foreach($rf_ar as $i=>$rf) {
        $param_ar[$i] = $res->get($rf);
    }
    
    $str = implode($param_ar);
    
    if($field_type == "rf") {
        $res->set($field, $str);
        $res->save();
    } else {
        $res->setTVValue($field, $str);
    }
}

return $modx->error->success();
