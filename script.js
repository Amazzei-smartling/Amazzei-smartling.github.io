function sl_translate() {}
sl_tr_json_start = sl_translate;
sl_tr_json_end = sl_translate;

function testFunc(){
    sl_tr_json_start();
    return {
        "sl_translate": "sl_all",
        "sl_variant": "key1: variantForMagenta, key2: variantForBrown",
        "key1": "magenta",
        "key2": "brown"            
    }
    sl_tr_json_end();
}    