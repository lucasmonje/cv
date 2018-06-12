
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"80",
  "macros":[{
      "function":"__dbg"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],"||-1==",["escape",["macro",1],8,16],".indexOf(\"sacatutarjeta.bancogalicia.com.ar\")?\"test\":\"live\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return void 0===a||\"\"===a||null===a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"step"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"option"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"ARS",
      "vtp_name":"currencyCode"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={};try{var b={step:",["escape",["macro",4],8,16],",option:",["escape",["macro",5],8,16],"};a={ecommerce:{currencyCode:",["escape",["macro",6],8,16],",checkout:{actionField:b}}}}catch(c){}return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"promo"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={};try{var c=",["escape",["macro",8],8,16],",b=[];b.push(c);a={ecommerce:{currencyCode:",["escape",["macro",6],8,16],",promoClick:{promotions:b}}}}catch(d){}return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transaction.id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"transactionLog"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",10],8,16],")return function(){var a=",["escape",["macro",10],8,16],".toString(),b=[a];if(",["escape",["macro",11],8,16],")if(b=",["escape",["macro",11],8,16],".split(\"|\"),-1==b.indexOf(a))b.push(a);else return;a=new Date;a.setTime(a.getTime()+15552E6);a=\"expires\\x3d\"+a.toUTCString();document.cookie=\"transactionLog\\x3d\"+b.join(\"|\")+\"; \"+a+\"; path\\x3d\/\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return{parseName:function(){try{var a=$(\".column-card #TituloOfertaRecomendada\").text().trim().replace(RegExp(\"(\\r\\n|\\n|\\r)\",\"g\"),\"\").replace(RegExp(\" +(?\\x3d )\",\"g\"),\" \");try{a=a.replace(\"\\u00c9\",\"E\");var b=$(\".products\").text().toLowerCase().trim();-1!=a.toLowerCase().indexOf(\"prefer\")?a=-1!=b.indexOf(\"platinum\")?a+\" Platinum\":a:-1!=a.toLowerCase().indexOf(\"eminent\")\u0026\u0026(a=-1!=b.indexOf(\"black\")?a+\" Black\":a)}catch(c){}}catch(c){}return a},parseBrand:function(){try{var a=$(\".column-card input:checked\").siblings('div[class*\\x3d\"logo-\"]').attr(\"class\").split(\"-\")[1]}catch(b){a=\n\"Galicia\"}return a}}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"stt_product"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return{load:function(){var a={};try{var b=",["escape",["macro",14],8,16],",c=b.split(\"|\");a.name=c[0];a.brand=c[1];a.recommended=\"true\"==c[2];try{a.aditionals=c[3]}catch(d){a.aditionals=0}}catch(d){}return a},save:function(a){void 0==a.aditionals\u0026\u0026(a.aditionals=0);a=a.name+\"|\"+a.brand+\"|\"+a.recommended+\"|\"+a.aditionals;var b=new Date;b.setTime(b.getTime()+2592E7);b=\"expires\\x3d\"+b.toUTCString();document.cookie=\"stt_product\\x3d\"+a+\"; \"+b+\"; path\\x3d\/\"}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,c,d,b){a={event:\"formFieldInteraction\",formName:a,formFieldName:c,formFieldStatus:d};void 0!=b\u0026\u0026(a.formSubStep=b);window.dataLayer.push(a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var a=\/\\\/SeleccionOferta\\\/?\/i;if(a.test(b))return\"Eleg\\u00ed tu producto\";a=\/\\\/ValidacionIdentidad\\\/?\/i;if(a.test(b))return\"Valid\\u00e1 tus datos\";a=\/\\\/IngresoDatosAdicional\\\/?\/i;if(a.test(b))return\"Coordin\\u00e1 la entrega\";a=\/\\\/Confirmacion\\\/?\/i;if(a.test(b))return\"Confirm\\u00e1 tu informaci\\u00f3n\";a=\/\\\/Fin\\\/?\/i;if(a.test(b))return\"Fin\";a=\/\\\/$|\\\/IngresoDatos\\\/?|\\\/Landing\/i;if(a.test(b))return\"Ingres\\u00e1 tus datos\";a=\/\\\/FormularioNocturno\\\/?\/i;return a.test(b)?\"Formulario Nocturno\":\nb}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,e){try{for(var c=\"-_-\",d=\"\",a=1;50\u003E=a;a++){var f=-1!=e.indexOf(a)?50==a?b:b+c:c;d+=f}return d}catch(g){}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(c,a){try{var b=JSON.parse(localStorage.stt_datos);a=a.toLowerCase();a=a.replace(new RegExp(\/[\\u00e0\\u00e1\\u00e2\\u00e3\\u00e4\\u00e5]\/g),\"a\");a=a.replace(new RegExp(\/\\u00e6\/g),\"ae\");a=a.replace(new RegExp(\/\\u00e7\/g),\"c\");a=a.replace(new RegExp(\/[\\u00e8\\u00e9\\u00ea\\u00eb]\/g),\"e\");a=a.replace(new RegExp(\/[\\u00ec\\u00ed\\u00ee\\u00ef]\/g),\"i\");a=a.replace(new RegExp(\/\\u00f1\/g),\"n\");a=a.replace(new RegExp(\/[\\u00f2\\u00f3\\u00f4\\u00f5\\u00f6]\/g),\"o\");a=a.replace(new RegExp(\/\\u0153\/g),\n\"oe\");a=a.replace(new RegExp(\/[\\u00f9\\u00fa\\u00fb\\u00fc]\/g),\"u\");a=a.replace(new RegExp(\/[\\u00fd\\u00ff]\/g),\"y\");b[c]=a;localStorage.stt_datos=JSON.stringify(b)}catch(d){}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,a){try{",["escape",["macro",0],8,16],"?console.error(\"error at - \"+a.location+\" :: \"+b):window.dataLayer.push({event:\"debug\",debugSection:a.location,debugDescription:a.description,debugMessage:b})}catch(c){}}})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_uid"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",26],8,16],",b=",["escape",["macro",17],8,16],";return b(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",24],8,16],"){var a=new Date;a.setTime(a.getTime()+63072E6);a=\"expires\\x3d\"+a.toGMTString();document.cookie=\"_uid\\x3d\"+",["escape",["macro",24],8,16],"+\"; \"+a+\"; path\\x3d\/\";a=",["escape",["macro",24],8,16],"}else ",["escape",["macro",25],8,16],"\u0026\u0026(a=",["escape",["macro",25],8,16],");if(\"Ingres\\u00e1 tus datos\"!=",["escape",["macro",27],8,16],")return a})();"]
    },{
      "function":"__c",
      "vtp_value":"bancogalicia.com,bancogalicia.com.ar"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__c",
      "vtp_value":"2"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"Formulario Nocturno\"==",["escape",["macro",27],8,16],"?\"Nocturno\":\"Full\"})();"]
    },{
      "function":"__c",
      "vtp_value":"3"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_origen"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"origen"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"user\";",["escape",["macro",34],8,16],"\u0026\u0026(b=",["escape",["macro",34],8,16],");\"recupero\"==",["escape",["macro",35],8,16],"\u0026\u0026(b=",["escape",["macro",35],8,16],");if(\"Ingres\\u00e1 tus datos\"==",["escape",["macro",27],8,16],"){var a=new Date;a.setTime(a.getTime()+63072E6);a=\"expires\\x3d\"+a.toGMTString();document.cookie=\"_origen\\x3d\"+b+\"; \"+a+\"; path\\x3d\/\"}return b})();"]
    },{
      "function":"__c",
      "vtp_value":"5"
    },{
      "function":"__c",
      "vtp_value":"6"
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",36],8,16],";return\"transaction\"==",["escape",["macro",39],8,16],"||\"purchase\"==",["escape",["macro",39],8,16],"?a+\"-conversion\":a+\"-pasos\"})();"]
    },{
      "function":"__c",
      "vtp_value":"8"
    },{
      "function":"__f",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"]
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",2],
      "vtp_defaultValue":"UA-62726172-11",
      "vtp_map":["list",["map","key","live","value","UA-62726172-11"],["map","key","test","value","UA-XXXXXXXX-11"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",28]],["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",29],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",30],"dimension","yes"],["map","index",["macro",31],"dimension",["macro",32]],["map","index",["macro",33],"dimension",["macro",36]],["map","index",["macro",37],"dimension",["macro",28]],["map","index",["macro",38],"dimension",["macro",40]],["map","index",["macro",41],"dimension",["macro",42]],["map","index","9","dimension",["macro",43]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__c",
      "vtp_value":"10"
    },{
      "function":"__c",
      "vtp_value":"::"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formFieldStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formFieldName"
    },{
      "function":"__c",
      "vtp_value":"4"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"formSubStep"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"errorContext"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"errorMessage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"theProduct"
    },{
      "function":"__c",
      "vtp_value":"7"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b={},e=",["escape",["macro",3],8,16],";try{e(a.name)||(b.name=a.name.replace(\"  \",\" \"),b.id=b.name);b.quantity=1;e(a.category)||(b.category=a.category);if(!e(a.brand)){var f=a.brand;try{f=a.brand[0].toUpperCase()+a.brand.substring(1,a.brand.length)}catch(g){}b.brand=f}e(a.list)||(b.list=a.list);e(a.position)||(b.position=a.position);e(a.recommended)||(b.variant=a.recommended?\"Recommended\":\"Not recommended\");var d=b.name,c;-1\u003Cd.indexOf(\"Prefer\")?c=17E3:-1\u003Cd.indexOf(\"Classic\")?\nc=13500:-1\u003Cd.indexOf(\"Simple\")?c=8500:-1\u003Cd.indexOf(\"Gold\")?c=6E3:-1\u003Cd.indexOf(\"Internacional\")?c=4E3:-1\u003Cd.indexOf(\"Platinum\")?c=22E3:-1\u003Cd.indexOf(\"Black\")?c=28E3:-1\u003Cd.indexOf(\"Eminent\")\u0026\u0026(c=25E3);b.price=c;e(a.aditionals)||(b[\"dimension\"+",["escape",["macro",56],8,16],"]=a.aditionals)}catch(g){b=a}return b}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={};try{var b=",["escape",["macro",55],8,16],",c=",["escape",["macro",57],8,16],";c(b);a={ecommerce:{currencyCode:",["escape",["macro",6],8,16],",add:{products:[b]}}}}catch(d){}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={};try{var b=",["escape",["macro",55],8,16],",c=",["escape",["macro",57],8,16],";c(b);a={ecommerce:{currencyCode:",["escape",["macro",6],8,16],",remove:{products:[b]}}}}catch(d){}return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c={};try{for(var a=",["escape",["macro",60],8,16],",e=",["escape",["macro",57],8,16],",d=[],b=0;b\u003Ca.length;b++)d.push(e(a[b]));a={step:",["escape",["macro",4],8,16],"};c={ecommerce:{currencyCode:",["escape",["macro",6],8,16],",checkout:{actionField:a,products:d}}}}catch(f){}return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={};try{var b=",["escape",["macro",55],8,16],",c=",["escape",["macro",57],8,16],",d=c(b);a={ecommerce:{currencyCode:",["escape",["macro",6],8,16],",detail:{products:[d]}}}}catch(e){}return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"promos"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c={};try{var a=",["escape",["macro",60],8,16],",e=",["escape",["macro",63],8,16],",f=",["escape",["macro",57],8,16],",d=[];if(void 0!==a)for(var b=0;b\u003Ca.length;b++){var g=f(a[b]);d.push(g)}c={ecommerce:{currencyCode:",["escape",["macro",6],8,16],",impressions:d,promoView:{promotions:e}}}}catch(h){}return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={};try{var c=",["escape",["macro",55],8,16],",d=",["escape",["macro",57],8,16],",b=d(c);a={ecommerce:{currencyCode:",["escape",["macro",6],8,16],",click:{actionField:{list:b.list},products:[b]}}}}catch(e){}return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"transaction"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d={};try{for(var a=",["escape",["macro",60],8,16],",e=",["escape",["macro",57],8,16],",b=[],c=0;c\u003Ca.length;c++)b.push(e(a[c]));a=",["escape",["macro",66],8,16],";try{a.total=b[0].price}catch(f){}d={ecommerce:{currencyCode:",["escape",["macro",6],8,16],",purchase:{actionField:{id:a.id,affiliation:a.affiliation,revenue:a.total,tax:a.tax,shipping:a.shippingFee,coupon:a.coupon},products:b}}}}catch(f){}return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={hitCallback:function(){},nonInteraction:!1};switch(",["escape",["macro",39],8,16],"){case \"addToCart\":a.action=\"Add to cart\";a.payload=",["escape",["macro",58],8,16],";break;case \"removeFromCart\":a.action=\"Remove from cart\";a.payload=",["escape",["macro",59],8,16],";break;case \"checkoutStep\":a.action=\"Checkout\";a.label=\"Step \"+",["escape",["macro",4],8,16],";a.nonInteraction=!0;a.payload=",["escape",["macro",61],8,16],";break;case \"checkoutOption\":a.action=\"Checkout\";a.label=\"Option\";a.nonInteraction=!0;a.payload=",["escape",["macro",7],8,16],";\nbreak;case \"detail\":a.action=\"Detail\";a.nonInteraction=!0;a.payload=",["escape",["macro",62],8,16],";break;case \"impressions\":a.action=\"Impressions\";a.nonInteraction=!0;a.payload=",["escape",["macro",64],8,16],";break;case \"productClick\":a.action=\"Product click\";a.payload=",["escape",["macro",65],8,16],";break;case \"promoClick\":a.action=\"Promo click\";a.payload=",["escape",["macro",9],8,16],";break;case \"purchase\":a.action=\"Purchase\",a.label=",["escape",["macro",10],8,16],",a.nonInteraction=!0,a.payload=",["escape",["macro",67],8,16],",a.hitCallback=",["escape",["macro",12],8,16],"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",68],8,16],".nonInteraction})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",68],8,16],".payload})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",68],8,16],".value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",68],8,16],".hitCallback})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",68],8,16],".action})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",68],8,16],".label})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",18],
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"label"
    },{
      "function":"__r"
    },{
      "function":"__u"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"timingCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"timingVar"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"timingValue"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_stripWww":false,
      "vtp_component":"HOST",
      "vtp_customUrlSource":["macro",84]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"virtualPage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"debugSection"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-62726172-24",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"debugDescription"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"debugMessage"
    },{
      "function":"__c",
      "vtp_value":"ARS"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",27],
      "vtp_map":["list",["map","key","Validá tus datos","value","1"],["map","key","Coordiná la entrega","value","2"],["map","key","Confirmá tu información","value","3"],["map","key","Formulario Nocturno","value","1"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_processingStart"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"theProduct"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    }],
  "tags":[{
      "function":"__ua",
      "setup_tags":["list",["tag",41,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",45],
      "vtp_dimension":["list",["map","index",["macro",46],"dimension",["macro",19]]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","Form ",["macro",47]," ",["macro",48]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",45],
      "vtp_eventAction":["template","Interaction ",["macro",47]," ",["macro",49]],
      "vtp_eventLabel":["macro",50],
      "vtp_dimension":["list",["map","index",["macro",51],"dimension",["macro",52]]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",45],
      "vtp_eventAction":["macro",53],
      "vtp_eventLabel":["macro",54],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",69],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",70],
      "vtp_eventValue":["macro",71],
      "vtp_fieldsToSet":["list",["map","fieldName","hitCallback","value",["macro",72]]],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",45],
      "vtp_eventAction":["macro",73],
      "vtp_eventLabel":["macro",74],
      "vtp_enableEcommerce":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",75],
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",76],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",45],
      "vtp_eventAction":["macro",77],
      "vtp_eventLabel":["macro",78],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":29
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"galic01",
      "vtp_useImageTag":false,
      "vtp_activityTag":"bg_hc0",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"5741706",
      "vtp_ordinalStandard":["macro",79],
      "vtp_url":["macro",80],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":36
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"938719189",
      "vtp_customParamsFormat":"NONE",
      "vtp_url":["macro",80],
      "tag_id":37
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"galic01",
      "vtp_useImageTag":false,
      "vtp_activityTag":"bg_hc000",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"5741706",
      "vtp_ordinalStandard":["macro",79],
      "vtp_url":["macro",80],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":38
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"537386",
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingCategory":["macro",81],
      "vtp_gaSettings":["macro",45],
      "vtp_timingVar":["macro",82],
      "vtp_timingValue":["macro",83],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "tag_id":44
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Outbound links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",45],
      "vtp_eventAction":["template","Redirect ",["macro",47]," ",["macro",85]],
      "vtp_eventLabel":["macro",84],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",87]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",45],
      "vtp_dimension":["list",["map","index",["macro",46],"dimension",["macro",19]]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":75
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template","Debug :: ",["macro",88]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",89],
      "vtp_eventAction":["macro",90],
      "vtp_eventLabel":["macro",91],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":79
    },{
      "function":"__cl",
      "tag_id":83
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"6829651_85",
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(b,a,f){var n=",["escape",["macro",16],8,16],";try{var c=$(\".column-titles.active\").attr(\"id\").split(\"-\")[1]}catch(p){}n(b,a,f,c)}function d(a,h,f){void 0==f\u0026\u0026(f=function(){return!1});$(\"button:submit, input:submit, #btn-submit\",a).click(function(){var a=\"enviar\",c=\"click\";b(h,a,c)});$(\"button:not([type\\x3dsubmit], .dropdown-toggle, #btn-submit), input:button\",a).click(function(){var a=$(this),c=a.text().trim();c=\"\"==c?a.attr(\"value\").trim():c;a=\"button \"+",["escape",["macro",47],8,16],"+\" \"+c;c=\n\"click\";b(h,a,c)});$(\"input, select, textarea\",a).blur(function(){try{var a=$(this),c=a.attr(\"id\"),m=a.attr(\"name\"),d=a.attr(\"type\");if(\"hidden\"!=d){var g=0\u003Ca.val().length;void 0==c\u0026\u0026(c=m);switch(d){case \"checkbox\":var e=1==a[0].checked?\"checked\":\"unchecked\";break;case \"radio\":e=1==a[0].checked?\"selected\":\"unselected\";break;case \"select\":var k=a.options[a.selectedIndex].innerHTML;e=\"\"!=k?\"complete\":\"empty\";break;case \"button\":e=\"button\";break;case \"submit\":e=\"button\";break;default:e=g?\"complete\":\n\"empty\"}var l=e;\"button\"==l||f()||b(h,c,l)}}catch(q){}})}var a=",["escape",["macro",27],8,16],";d($(\"form div.container\"),a);switch(a){case \"Ingres\\u00e1 tus datos\":$(\"div.terms-conditions a\").click(function(){b(a,$(\"div.terms-conditions .checkbox input\").attr(\"id\"),\"view\")});$(\".reload-captcha\").click(function(){b(a,\"reload-captcha\",\"click\")});break;case \"Coordin\\u00e1 la entrega\":var k=function(){var a=\"block\"!=$(\"#modalAdicionalPaquete\").css(\"display\"),b=window.dataLayer[window.dataLayer.length-1];b=\"formFieldInteraction\"==\nb.event\u0026\u0026(-1\u003Cb.formFieldName.indexOf(\"Confirmar\")||-1\u003Cb.formFieldName.indexOf(\"Cancelar\"));return a||b},g=$(\"#ContenidoModalAdicional\");$(\".full-content div a\",g).click(function(){b(a,\"button \"+",["escape",["macro",47],8,16],"+\" \"+$(this).text().trim(),\"click\")});d(g,a+\" - Adicional\",k);$(\"#AbrirModalAdicional\").click(function(){b(a,\"button \"+",["escape",["macro",47],8,16],"+\" Agregar adicional\",\"click\")});$(\"#adiMiniatura\").on(\"click\",\".fa-pencil\",function(){b(a,\"button \"+",["escape",["macro",47],8,16],"+\" Modificar adicional\",\n\"click\")});$('div[id^\\x3d\"Adicionales\"]').on(\"click\",\".fa-pencil\",function(){b(a,\"button \"+",["escape",["macro",47],8,16],"+\" Modificar adicional - right\",\"click\")});$(\"#adiMiniatura\").on(\"click\",\".fa-trash-o\",function(){b(a,\"button \"+",["escape",["macro",47],8,16],"+\" Eliminar adicional\",\"click\")});$(\".send-product a\").click(function(){var d=\"button \"+",["escape",["macro",47],8,16],"+\" \"+$(this).text().trim();b(a,d,\"click\")});break;case \"Confirm\\u00e1 tu informaci\\u00f3n\":$('a[id^\\x3d\"lapiz\"]').click(function(){var d=$(this).attr(\"id\").replace(\"lapiz\",\n\"\");b(a,\"button \"+",["escape",["macro",47],8,16],"+\" Modificar \"+d,\"click\")});break;case \"Fin\":$(\"div.icons-download-print a\").click(function(){b(a,\"button \"+",["escape",["macro",47],8,16],"+\" print\",\"click\")}),$(\".rating input\").click(function(){b(a,$(this).attr(\"value\")+\" star\",\"click\")}),$(\".btn-mensajeEstrellas\").click(function(){b(a,\"buttton \"+",["escape",["macro",47],8,16],"+\" enviar\",\"click\")})}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":22
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a=document.getElementsByClassName(\"error-message\");if(0\u003Ca.length){var b=a[0].textContent.trim();a=\"System\";-1\u003Cb.indexOf(\"es cliente de Banco\")\u0026\u0026(a=\"Current customer\",window.dataLayer.push({event:\"escliente\"}));-1\u003Cb.indexOf(\"ya es cliente del Banco\")\u0026\u0026(a=\"Current customer\",window.dataLayer.push({event:\"escliente\"}));-1!=b.toLowerCase().indexOf(\"oferta especial\")\u0026\u0026(a=\"Function\");-1\u003Cb.indexOf(\"producto disponible para ofrecerte por este canal\")\u0026\u0026(a=\"No offer\",window.dataLayer.push({event:\"noOffer\"}));\n-1\u003Cb.indexOf(\"no tenemos una oferta\")\u0026\u0026(a=\"No offer\",window.dataLayer.push({event:\"noOffer\"}));window.dataLayer.push({event:\"error\",errorContext:a,errorMessage:b});hj(\"trigger\",\"errorsystem\");hj(\"tagRecording\",[\"errorsystem :: \"+b])}}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(",["escape",["macro",11],8,16],"){var trackedTransactions=",["escape",["macro",11],8,16],".split(\"|\");-1==trackedTransactions.indexOf(",["escape",["macro",10],8,16],".toString())\u0026\u0026purchase()}else purchase();function purchase(){dataLayer.push({event:\"purchase\"})};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(b,c,g){$(b).each(function(){d++;try{var b=$(this),a={};a.name=$('h1[id*\\x3d\"descripcionOfertaModal\"]',b).text().trim().replace(RegExp(\"(\\r\\n|\\n|\\r)\",\"g\"),\"\").replace(RegExp(\" +(?\\x3d )\",\"g\"),\" \");a.recommended=g;try{a.brand=$(\".radio-logos-cards-containar input:checked\",b).siblings('div[class*\\x3d\"logo-\"]').attr(\"class\").split(\"-\")[1]}catch(e){a.brand=\"Galicia\"}a.list=h;a.position=d;f.push(a);$(c,b).click(function(){try{a.brand=$(\".radio-logos-cards-containar input:checked\",\nb).siblings('div[class*\\x3d\"logo-\"]').attr(\"class\").split(\"-\")[1]}catch(e){}window.dataLayer.push({event:\"productClick\",theProduct:a,currencyCode:",["escape",["macro",92],8,16],"});k.save(a)})}catch(e){}})}var f=[],h=\"Ofertas - Modal\",d=0,k=",["escape",["macro",15],8,16],",c=",["escape",["macro",16],8,16],";b(\"#oferta .pop-up-offer.not-recommended\",\"div div a\",!1);b(\"#oferta div[class~\\x3d'pop-up-offer']:not([class*\\x3d'not-recommend'])\",\"button\",!0);$(\".column-card button\").click(function(){window.dataLayer.push({event:\"impressions\",\nproducts:f,currencyCode:",["escape",["macro",92],8,16],"})});$(\".botonSeleccionarOferta\").parent(\"a\").click(function(){window.dataLayer.push({event:\"addToCart\",currencyCode:",["escape",["macro",92],8,16],"});c(",["escape",["macro",27],8,16],",\"button \"+",["escape",["macro",47],8,16],"+\" continuar\",\"click\")})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function f(a){a=$(\".modal-body\",a).text().trim();window.dataLayer.push({event:\"error\",errorContext:",["escape",["macro",27],8,16],",errorMessage:a});try{hj(\"trigger\",\"errorform\"),hj(\"tagRecording\",[\"errorform :: \"+a])}catch(d){}}var c=$(\"#modal-error\");0\u003Cc.length\u0026\u0026\"block\"==c.css(\"display\")\u0026\u0026f(c[0]);MutationObserver=window.MutationObserver||window.WebKitMutationObserver;c=new MutationObserver(function(a,c){for(var b=0;b\u003Ca.length;b++)for(var e=a[b],d=0;d\u003Ce.addedNodes.length;d++){var g=e.addedNodes[d];\n\"modal-error\"==g.id\u0026\u0026f(g)}});var h=$(\"div#mainModalContainer\")[0],k={childList:!0,subtree:!0},l=$(\"#ModalErrorAdicional\")[0],m=new MutationObserver(function(a){a.forEach(function(a){try{if(\"block\"==$(a.target).css(\"display\")\u0026\u0026\"style\"==a.attributeName){var b=$(\"#MensajeErrorAdicional\").text().trim();if(-1==b.indexOf(\"Vas a eliminar\")){window.dataLayer.push({event:\"error\",errorContext:",["escape",["macro",27],8,16],",errorMessage:b});try{hj(\"trigger\",\"errorform\"),hj(\"tagRecording\",[\"errorform :: \"+b])}catch(e){}}}}catch(e){}})}),\nn={attributes:!0,attributeOldValue:!0};try{c.observe(h,k),m.observe(l,n)}catch(a){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":28
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=",["escape",["macro",15],8,16],",b=",["escape",["macro",13],8,16],";$(\"a.beneficios-info\").click(function(){var a=\"Ver Condiciones Oferta\";window.dataLayer.push({event:\"trackEvent\",category:\"Ecommerce\",action:a,label:b.parseName()+\" \"+",["escape",["macro",47],8,16],"+\" \"+b.parseBrand(),nonInteraction:!1})});var c={event:\"detail\",currencyCode:",["escape",["macro",92],8,16],"};if(void 0==",["escape",["macro",55],8,16],"){var a={};a.name=b.parseName();a.recommended=!0;a.brand=b.parseBrand();c.theProduct=a;d.save(a)}window.dataLayer.push(c)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=",["escape",["macro",15],8,16],",a=b.load(),c=",["escape",["macro",93],8,16],";\"Confirm\\u00e1 tu informaci\\u00f3n\"==",["escape",["macro",27],8,16],"\u0026\u0026(a.aditionals=$(\".aditionals h3\").length,b.save(a));window.dataLayer.push({event:\"checkoutStep\",step:c,products:[a],currencyCode:",["escape",["macro",92],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=",["escape",["macro",15],8,16],";a=a.load();var b={};try{var c=$(\".success-message .number\").text().match(\"[0-9]+\")[0];b.id=c}catch(d){}window.dataLayer.push({event:\"transaction\",currencyCode:",["escape",["macro",92],8,16],",products:[a],transaction:b})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function e(a){try{var b=a.attr(\"id\"),d=a.attr(\"class\"),c=\"\";-1\u003Cd.indexOf(\"done\")?c=\"Done\":d.indexOf(\"active\")\u0026\u0026(c=\"Active\");var e=parseInt(b.split(\"-\")[1])+1,f=$(\"#\"+b.replace(\"Div\",\"\"),a).text().trim();a=\"Pregunta \"+e+\" \"+",["escape",["macro",47],8,16],"+\" \"+f;g(h,a,c)}catch(n){}}var h=",["escape",["macro",27],8,16],",g=",["escape",["macro",16],8,16],",f=$(\".content\")[0],k=new MutationObserver(function(a){for(var b=0;b\u003Ca.length;b++)try{var d=a[b],c=$(d.target);-1\u003Cc.attr(\"id\").indexOf(\"DivPreg\")\u0026\u0026\"class\"==d.attributeName\u0026\u0026\ne(c)}catch(m){}}),l={attributes:!0,attributeOldValue:!0,subtree:!0};try{k.observe(f,l),e($(\"#DivPreg-0\"))}catch(a){}$(\"#btn-continuar\").click(function(){try{g(h,\"button \"+",["escape",["macro",47],8,16],"+\" continuar\",\"click\")}catch(a){}})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1690461017710571\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1690461017710571\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var d=(new Date).getTime(),e=RegExp('\"',\"g\"),f=$(\"script\").text().match(\"cmCreateRegistrationTag\\\\((.*)\\\\)\")[1],b=f.split(\",\")[0].replace(e,\"\"),a=new Date;a.setTime(a.getTime()+63072E6);var c=\"expires\\x3d\"+a.toGMTString();document.cookie=\"_uid\\x3d\"+b+\"; \"+c+\"; path\\x3d\/\";window.dataLayer.push({event:\"authentication\",userId:b});document.cookie=\"_processingStart\\x3d\"+d+\";\"+c+\"; path\\x3d\/\"}catch(g){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var start=",["escape",["macro",94],8,16],",end=(new Date).getTime(),elapsed=end-start;window.dataLayer.push({event:\"timing\",timingCategory:\"Processing\",timingVar:",["escape",["macro",27],8,16],",timingValue:elapsed})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a=\"UI \"+",["escape",["macro",47],8,16],"+\" Header\",b=",["escape",["macro",17],8,16],";$(\".navbar-header a\").click(function(){window.dataLayer.push({event:\"trackEvent\",category:a,action:\"Click\",label:\"Logo Galicia\",nonInteraction:!1})});$(\".navbar-nav a\").click(function(){window.dataLayer.push({event:\"trackEvent\",category:a,action:\"Click\",label:b($(this).attr(\"href\")),nonInteraction:!1})})}catch(c){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=$(\"#btn-submit\")[0],e=new MutationObserver(function(a){for(var b=0;b\u003Ca.length;b++){var c=a[b];\"disabled\"!=c.attributeName||c.target.disabled||window.dataLayer.push({event:\"trackEvent\",category:\"Form \"+",["escape",["macro",47],8,16],"+\" \"+",["escape",["macro",27],8,16],",action:\"Enable submit\",label:void 0,nonInteraction:!0})}});try{e.observe(d,{attributes:!0,attributeOldValue:!0})}catch(a){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var b=",["escape",["macro",70],8,16],".ecommerce,a=b.detail.products[0],c=b.currencyCode;fbq(\"track\",\"ViewContent\",{content_type:\"product\",content_ids:[a.id],content_category:a.variant,content_name:a.name,value:a.price,currency:c})}catch(d){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=938719189,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"u7GSCM6o3HUQ1e_OvwM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/938719189\/?label=u7GSCM6o3HUQ1e_OvwM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":63
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1690461017710571\");fbq(\"track\",\"AddToWishlist\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1690461017710571\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{try{var c=$($(\".limiteUnPago\")[0]).text().replace(\"$\",\"\").replace(\".\",\"\"),b=$($(\".limiteEnCuotas\")[0]).text().replace(\"$\",\"\").replace(\".\",\"\")}catch(d){}var e=",["escape",["macro",21],8,16],";e(\"limite\",c);e(\"limiteCuotas\",b);b=",["escape",["macro",28],8,16],";var f=",["escape",["macro",95],8,16],".name.replace(\"Tarjeta  Galicia \",\"\").replace(\"Servicio Galicia \",\"\"),a=JSON.parse(localStorage.stt_datos),g=a.nombre,h=a.apellido,k=a.dni,l=a.telefono,m=a.email,n=a.sexo,p=a.fecha_nacimiento;a=",["escape",["macro",20],8,16],";var q=\na(g+\"|\"+l+\"|\"+m+\"|\"+k+\"|\"+n+\"|\"+p+\"|\"+h,[7,46]);cmCreateShopAction5Tag(b,f,\"1\",c,\"Tarjetas no cliente\",q);cmDisplayShops()}catch(d){console.error(d)}})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var c=",["escape",["macro",28],8,16],",p=",["escape",["macro",60],8,16],"[0].name.replace(\"  \",\" \").replace(\"Tarjeta  Galicia \",\"\").replace(\"Servicio Galicia \",\"\");try{var a=JSON.parse(localStorage.stt_datos),d=a.nombre,e=a.apellido,f=a.dni,g=a.telefono,h=a.email,k=a.sexo,l=a.fecha_nacimiento}catch(b){}try{var m=a.limite}catch(b){}a=",["escape",["macro",20],8,16],";var n=a(d+\"|\"+g+\"|\"+h+\"|\"+f+\"|\"+k+\"|\"+l+\"|\"+e,[7,46]);d=c;e=\"1\";f=m;g=c;h=\"0\";k=m;l=\"Tarjetas no cliente\";a=n;var q=\"0\",r=\"\",t=\"\",u=\"\",v=\"\";try{cmCreateShopAction9Tag(d,\np,e,f,g,h,k,l,a),cmDisplayShops()}catch(b){}try{cmCreateOrderTag(q,m,r,c,t,u,v,n)}catch(b){}localStorage.stt_datos=\"\"}catch(b){console.error(b)}})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a=document.location.pathname;cmCreatePageviewTag(a,\"STT\")}catch(b){}})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function c(b){try{window.dataLayer.push({event:\"virtualPageView\",virtualPage:b})}catch(k){}}try{var d=$(\"#modal-phone\"),f=d[0];MutationObserver=window.MutationObserver||window.WebKitMutationObserver;var h=new MutationObserver(function(b,d){try{for(var e=0;e\u003Cb.length;e++)try{var a=b[e];if(\"modal-phone\"==a.target.id\u0026\u0026\"attributes\"==a.type\u0026\u0026(null==a.oldValue||-1!=a.oldValue.indexOf(\"display: none\"))\u0026\u0026\"block\"==a.target.style.display){c(\"\/ValidacionCelular\/Numero\");break}else if(\"modal-phone\"==\na.target.id\u0026\u0026\"attributes\"==a.type\u0026\u0026-1!=a.oldValue.indexOf(\"display: block\")\u0026\u0026\"none\"==a.target.style.display){c(\"\/IngresoDatos\/Inicio\");break}else if(!(\"seccion-codigo\"!=a.target.id||\"attributes\"!=a.type||null!=a.oldValue\u0026\u0026-1==a.oldValue.indexOf(\"display: none\")\u0026\u0026-1==a.oldValue.indexOf(\"display:none\")||\"block\"!=a.target.style.display\u0026\u0026\"\"!=a.target.style.display)){c(\"\/ValidacionCelular\/Codigo\");break}else if(\"seccion-codigo\"==a.target.id\u0026\u0026\"attributes\"==a.type\u0026\u0026(-1!=a.oldValue.indexOf(\"display: block\")||\n\"\"==a.oldValue)\u0026\u0026\"none\"==a.target.style.display){c(\"\/ValidacionCelular\/Numero\");break}}catch(g){}}catch(g){}});d={childList:!1,subtree:!0,attributes:!0,attributeOldValue:!0};try{h.observe(f,d)}catch(b){}}catch(b){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a=",["escape",["macro",21],8,16],",d={};localStorage.stt_datos=JSON.stringify(d);$(\"#Nombre\").blur(function(){a(\"nombre\",$(\"#Nombre\").val())});$(\"#Apellido\").blur(function(){a(\"apellido\",$(\"#Apellido\").val())});$(\"#Documento\").blur(function(){a(\"dni\",$(\"#Documento\").val().replace(\/\\.\/g,\"\"))});$(\"form\").on(\"submit\",function(){try{a(\"telefono\",$(\"#CodArea\").val()+$(\"#Telefono\").val())}catch(c){var b=",["escape",["macro",22],8,16],";data={location:\"HTML - save data for coremetrics\",description:\"blur tel viejo\"};\nb(c,data)}});$(\"#Email\").blur(function(){a(\"email\",$(\"#Email\").val())});$(\"a[name\\x3d'sexos']\").click(function(){try{a(\"sexo\",2==$(\"#Sexo\").val()?\"M\":\"F\")}catch(c){var b=",["escape",["macro",22],8,16],";data={location:\"HTML - save data for coremetrics\",description:\"blur sexo\"};b(c,data)}});$(\"#FechaNac\").blur(function(){a(\"fecha_nacimiento\",$(\"#FechaNac\").val())});$(\"#TermYCond\").blur(function(){try{a(\"nombre\",$(\"#Nombre\").val()),a(\"apellido\",$(\"#Apellido\").val()),a(\"dni\",$(\"#Documento\").val().replace(\/\\.\/g,\n\"\")),a(\"telefono\",$(\"#Telefono\").val()),a(\"email\",$(\"#Email\").val()),a(\"sexo\",2==$(\"#Sexo\").val()?\"M\":\"F\"),a(\"fecha_nacimiento\",$(\"#FechaNac\").val())}catch(c){var b=",["escape",["macro",22],8,16],";data={location:\"HTML - save data for coremetrics\",description:\"blur terminos y cond\"};b(c,data)}})}catch(b){d=",["escape",["macro",22],8,16],",data={location:\"HTML - save data for coremetrics\",description:\"main\"},d(b,data)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a=",["escape",["macro",21],8,16],";0\u003C$(\"#TelefonoNew\").length\u0026\u0026$(\"#TelefonoNew\").blur(function(){1==esCelularValido($(\"#TelefonoNew\").val()).validation\u0026\u0026a(\"telefono\",esCelularValido($(\"#TelefonoNew\").val()).CodArea+esCelularValido($(\"#TelefonoNew\").val()).number)})}catch(b){var c=",["escape",["macro",22],8,16],";data={location:\"HTML - save data for coremetrics new telefono\",description:\"main\"};c(b,data)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:50535},{event:\"setEmail\",email:\"\"},{event:\"setSiteType\",type:\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:50535},{event:\"setEmail\",email:\"\"},{event:\"setSiteType\",type:\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"},{event:\"viewHome\",user_segment:1});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:50535},{event:\"setEmail\",email:\"\"},{event:\"setSiteType\",type:\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:1,quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "setup_tags":["list",["tag",42,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(\"Ingres\\u00e1 tus datos\"==",["escape",["macro",27],8,16],"){var a=\"expires\\x3dThu, 01 Jan 1970 00:00:01 GMT\";document.cookie=\"_uid\\x3d;\"+a+\"; path\\x3d\/\"}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__opt",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-WS4VL2J",
      "vtp_gaSettings":["macro",45],
      "tag_id":66
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"formFieldInteraction"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"error"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"checkoutOption"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"checkoutStep"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"detail"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"impressions"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"productClick"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"promoClick"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"purchase"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"removeFromCart"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"trackEvent"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"\/Fin",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"test"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"recupero"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"timing"
    },{
      "function":"_eq",
      "arg0":["macro",85],
      "arg1":"sacatutarjeta.bancogalicia.com.ar"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"(^$|((^|,)6829651_85($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"virtualPageView"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"debug"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":".*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"\/ValidacionIdentidad",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"transaction"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"\/SeleccionOferta\/MostrarOfertas",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"productView"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"\/IngresoDatosAdicional",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"\/Confirmacion",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"\/FormularioNocturno",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"recupero"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"processingStart"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"processingEnd"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"noOffer"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"escliente"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"^\\\/$|^\\\/IngresoDatos\\\/?$|^\\\/IngresoDatos\\\/Inicio\\\/?$|^\\\/Landing",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"^\\\/$|^\\\/IngresoDatos\\\/?$|^\\\/IngresoDatos\\\/Inicio\\\/?$^\\\/$|^\\\/IngresoDatos\\\/?$|^\\\/IngresoDatos\\\/Inicio\\\/?$|^\\\/Landing",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"\/SeleccionOferta",
      "ignore_case":true
    }],
  "rules":[
    [["if",0],["add",0,6,7,8,34,13]],
    [["if",1],["add",1]],
    [["if",2],["add",2]],
    [["if",3],["add",3]],
    [["if",4],["add",3]],
    [["if",5],["add",3]],
    [["if",6],["add",3,32]],
    [["if",7],["add",3]],
    [["if",8],["add",3]],
    [["if",9],["add",3]],
    [["if",10],["add",3,33]],
    [["if",11],["add",3]],
    [["if",12],["add",4]],
    [["if",0,13],["add",5],["block",8]],
    [["if",16],["add",9]],
    [["if",18,19],["unless",17],["add",10]],
    [["if",20],["add",11]],
    [["if",21],["add",12]],
    [["if",0,22],["add",14]],
    [["if",23],["add",15,16,19,27,28]],
    [["if",25],["add",17]],
    [["if",26,27],["add",18]],
    [["if",28],["add",20]],
    [["if",0,24],["add",21]],
    [["if",0,29],["add",21]],
    [["if",0,30],["add",21]],
    [["if",0,31],["add",21]],
    [["if",13,23],["add",22],["block",28]],
    [["if",23,24],["add",23],["block",15]],
    [["if",0],["unless",32],["add",24]],
    [["if",33],["add",25]],
    [["if",34],["add",26]],
    [["if",6],["unless",32],["add",29]],
    [["if",23,26],["unless",32],["add",30]],
    [["if",35],["unless",32],["add",31,39]],
    [["if",36],["add",31]],
    [["if",23,37],["add",35,36,38]],
    [["if",27,38],["add",37]],
    [["if",23,39],["add",38]],
    [["if",23,26],["add",40],["block",28]],
    [["if",0,13,14],["block",5]],
    [["if",0,14],["block",6,7,8,24]],
    [["if",0,15],["block",8]],
    [["if",6,14],["block",29]],
    [["if",14,23,26],["block",30]],
    [["if",14,35],["block",31]]]
},
"runtime":[
[],[]
]};

var ba=this,ea=function(){if(null===ca){var a;a:{var b=ba.document.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");if(c&&da.test(c)){a=c;break a}}a=null}ca=a||""}return ca},da=/^[\w+/_-]+[=]{0,2}$/,ca=null,fa=function(a,b){function c(){}c.prototype=b.prototype;a.ye=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ie=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var g=function(a,b){this.s=a;this.Qc=b};g.prototype.fd=function(){return this.s};g.prototype.getType=g.prototype.fd;g.prototype.getData=function(){return this.Qc};g.prototype.getData=g.prototype.getData;var ha=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ia=function(){this.da={};this.qa=!1};ia.prototype.get=function(a){return this.da["dust."+a]};ia.prototype.set=function(a,b){!this.qa&&(this.da["dust."+a]=b)};ia.prototype.has=function(a){return this.da.hasOwnProperty("dust."+a)};var ja=function(a){var b=[],c;for(c in a.da)a.da.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ia.prototype.remove=function(a){!this.qa&&delete this.da["dust."+a]};ia.prototype.D=function(){this.qa=!0};var u=function(a){this.fa=new ia;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ha(b)?this.h[Number(b)]=a[Number(b)]:this.fa.set(b,a[b]))};u.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};u.prototype.set=function(a,b){if("length"==a){if(!ha(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else ha(a)?this.h[Number(a)]=b:this.fa.set(a,b)};
u.prototype.set=u.prototype.set;u.prototype.get=function(a){return"length"==a?this.length():ha(a)?this.h[Number(a)]:this.fa.get(a)};u.prototype.get=u.prototype.get;u.prototype.length=function(){return this.h.length};u.prototype.M=function(){for(var a=ja(this.fa),b=0;b<this.h.length;b++)a.push(b+"");return new u(a)};u.prototype.getKeys=u.prototype.M;u.prototype.remove=function(a){ha(a)?delete this.h[Number(a)]:this.fa.remove(a)};u.prototype.remove=u.prototype.remove;u.prototype.pop=function(){return this.h.pop()};
u.prototype.pop=u.prototype.pop;u.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};u.prototype.push=u.prototype.push;u.prototype.shift=function(){return this.h.shift()};u.prototype.shift=u.prototype.shift;u.prototype.splice=function(a,b,c){return new u(this.h.splice.apply(this.h,arguments))};u.prototype.splice=u.prototype.splice;u.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
u.prototype.unshift=u.prototype.unshift;u.prototype.has=function(a){return ha(a)&&this.h.hasOwnProperty(a)||this.fa.has(a)};var ka=function(){function a(a,b){c[a]=b}function b(){c={}}var c={},d={add:a,reset:b,create:function(d){var e={add:a,request:function(a,b){return c[a]?c[a].apply(d,Array.prototype.slice.call(arguments,1)):!1},reset:b};e.add=e.add;e.request=e.request;e.reset=e.reset;return e}};d.add=d.add;d.reset=d.reset;return d};var la=function(){function a(a,c){if(b[a]){if(b[a].Ea+c>b[a].max)throw Error("Quota exceeded");b[a].Ea+=c}}var b={},c=void 0,d=void 0,e={Bd:function(a){c=a},Eb:function(){c&&a(c,1)},Cd:function(a){d=a},O:function(b){d&&a(d,b)},Td:function(a,c){b[a]=b[a]||{Ea:0};b[a].max=c},ed:function(a){return b[a]&&b[a].Ea||0},reset:function(){b={}},Kc:a};e.onFnConsume=e.Bd;e.consumeFn=e.Eb;e.onStorageConsume=e.Cd;e.consumeStorage=e.O;e.setMax=e.Td;e.getConsumed=e.ed;e.reset=e.reset;e.consume=e.Kc;return e};var na=function(a,b,c){this.F=a;this.U=b;this.T=c;this.h=new ia};na.prototype.add=function(a,b){this.h.qa||(this.F.O(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};na.prototype.add=na.prototype.add;na.prototype.set=function(a,b){this.h.qa||(this.T&&this.T.has(a)?this.T.set(a,b):(this.F.O(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};na.prototype.set=na.prototype.set;
na.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.T?this.T.get(a):void 0};na.prototype.get=na.prototype.get;na.prototype.has=function(a){return!!this.h.has(a)||!(!this.T||!this.T.has(a))};na.prototype.has=na.prototype.has;na.prototype.C=function(){return this.F};na.prototype.D=function(){this.h.D()};var oa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},pa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1};var v=function(a,b){ia.call(this);this.Rb=a;this.cd=b};fa(v,ia);var ra=function(a,b){for(var c,d=0;d<b.length&&!(c=qa(a,b[d]),c instanceof g);d++);return c},qa=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof v))throw"Attempting to execute non-function "+b[0]+".";return c.i.apply(c,[a].concat(b.slice(1)))};v.prototype.toString=function(){return this.Rb};v.prototype.getName=function(){return this.Rb};v.prototype.getName=v.prototype.getName;v.prototype.M=function(){return new u(ja(this))};
v.prototype.getKeys=v.prototype.M;v.prototype.i=function(a,b){var c,d={A:function(){return a},evaluate:function(b){var c=a;return oa(b)?qa(c,b):b},ma:function(b){return ra(a,b)},C:function(){return a.C()},oe:function(){c||(c=a.U.create(d));return c}};a.C().Eb();return this.cd.apply(d,Array.prototype.slice.call(arguments,1))};v.prototype.invoke=v.prototype.i;var x=function(){ia.call(this)};fa(x,ia);x.prototype.M=function(){return new u(ja(this))};x.prototype.getKeys=x.prototype.M;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var sa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ta=function(a){if(null==a)return String(a);var b=sa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ua=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},va=function(a){if(!a||"object"!=ta(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ua(a,"constructor")&&!ua(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ua(a,b)},y=function(a,b){var c=b||("array"==ta(a)?[]:{}),d;for(d in a)if(ua(a,d)){var e=a[d];"array"==ta(e)?("array"!=ta(c[d])&&(c[d]=[]),c[d]=y(e,c[d])):va(e)?(va(c[d])||(c[d]={}),c[d]=y(e,c[d])):c[d]=e}return c};var wa=function(a){if(a instanceof u){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=wa(a.get(d)));return b}if(a instanceof x){for(var e={},f=a.M(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=wa(a.get(f.get(k)));return e}return a instanceof v?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=xa(b[c]);var d=new na(la(),ka());return wa(a.i.apply(a,[d].concat(b)))}:a},xa=function(a){if(oa(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=xa(a[c]));return new u(b)}if(va(a)){var d=
new x,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,xa(a[e]));return d}if("function"===typeof a)return new v("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=wa(this.evaluate(c[d]));return xa(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var ya={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.A(),e=this.evaluate(b);if(!(e instanceof u))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.C().O(a.length+f.length);return new v(a,function(){return function(a){for(var b=new na(d.F,d.U,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new u(c));var q=ra(b,f);if(q instanceof g)return"return"===q.s?q.getData():q}}())},list:function(a){var b=this.C();b.O(arguments.length);for(var c=new u,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.O(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.C(),c=new x,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.O(h);c.set(e,f)}return c},undefined:function(){}};var z=function(){this.F=la();this.U=ka();this.na=new na(this.F,this.U)};z.prototype.N=function(a,b){var c=new v(a,b);c.D();this.na.set(a,c)};z.prototype.addInstruction=z.prototype.N;z.prototype.Db=function(a,b){ya.hasOwnProperty(a)&&this.N(b||a,ya[a])};z.prototype.addNativeInstruction=z.prototype.Db;z.prototype.C=function(){return this.F};z.prototype.getQuota=z.prototype.C;z.prototype.Ka=function(){this.F=la();this.na.F=this.F};z.prototype.resetQuota=z.prototype.Ka;
z.prototype.Pd=function(){this.U=ka();this.na.U=this.U};z.prototype.resetPermissions=z.prototype.Pd;z.prototype.K=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.ib(c)};z.prototype.execute=z.prototype.K;z.prototype.ib=function(a){for(var b,c=0;c<arguments.length;c++){var d=qa(this.na,arguments[c]);b=d instanceof g||d instanceof v||d instanceof u||d instanceof x||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
z.prototype.run=z.prototype.ib;z.prototype.D=function(){this.na.D()};z.prototype.makeImmutable=z.prototype.D;var Aa=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var Ba={Wd:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof u)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new u(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new u(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new u(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Aa(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new u(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Aa(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.i(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var B={Pb:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},Ca="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Da=new g("break"),Ea=new g("continue");B.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};B.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
B.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof u))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=pa(Ca,b))return xa(a[b].apply(a,Aa(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof u){if(a.has(b)){var d=
a.get(b);if(d instanceof v){var e=Aa(c);e.unshift(this.A());return d.i.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=pa(Ba.Wd,b))return e=Aa(c),e.unshift(this.A()),Ba[b].apply(a,e)}if(a instanceof v||a instanceof x){if(a.has(b)){d=a.get(b);if(d instanceof v)return e=Aa(c),e.unshift(this.A()),d.i.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof v?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,Aa(c))}throw"TypeError: Object has no '"+
b+"' property.";};B.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.A();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};B["break"]=function(){return Da};B["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};B["continue"]=function(){return Ea};
B.Rc=function(a,b,c){var d=new u;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[B.Pb.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.A().set(a,this.evaluate(f))};B.Uc=function(a,b){return this.evaluate(a)/this.evaluate(b)};B.Xc=function(a,b){return this.evaluate(a)==this.evaluate(b)};B.Zc=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
B.dd=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.A();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.ma(c);if(f instanceof g){if("break"==f.s)break;if("return"==f.s)return f}}else if(b instanceof x||b instanceof u||b instanceof v){var h=b.M(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.ma(c),f instanceof g){if("break"==f.s)break;if("return"==f.s)return f}}};B.get=function(a){return this.A().get(this.evaluate(a))};
B.Nb=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof x||a instanceof u||a instanceof v?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ha(b)&&(c=a[b]));return c};B.gd=function(a,b){return this.evaluate(a)>this.evaluate(b)};B.hd=function(a,b){return this.evaluate(a)>=this.evaluate(b)};B.md=function(a,b){return this.evaluate(a)===this.evaluate(b)};B.nd=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
B["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.ma(d);if(e instanceof g)return e};B.ud=function(a,b){return this.evaluate(a)<this.evaluate(b)};B.vd=function(a,b){return this.evaluate(a)<=this.evaluate(b)};B.wd=function(a,b){return this.evaluate(a)%this.evaluate(b)};B.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};B.xd=function(a){return-this.evaluate(a)};B.yd=function(a){return!this.evaluate(a)};
B.zd=function(a,b){return this.evaluate(a)!=this.evaluate(b)};B["null"]=function(){return null};B.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};B.Xb=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};B.Yb=function(a){return this.evaluate(a)};B.quote=function(a){return Array.prototype.slice.apply(arguments)};B["return"]=function(a){return new g("return",this.evaluate(a))};
B.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof v||a instanceof u||a instanceof x)&&a.set(b,c);return c};B.Vd=function(a,b){return this.evaluate(a)-this.evaluate(b)};
B["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!oa(b)||!oa(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.s;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.s||"continue"==d.s)))return d};
B.Xd=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};B["typeof"]=function(a){a=this.evaluate(a);return a instanceof v?"function":typeof a};B.undefined=function(){};B["var"]=function(a){for(var b=this.A(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
B["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.ma(f),e instanceof g)){if("break"==e.s)return;if("return"==e.s)return e}for(;this.evaluate(a);){e=this.ma(f);if(e instanceof g){if("break"==e.s)break;if("return"==e.s)return e}this.evaluate(b)}};var Ga=function(){this.Ob=!1;this.P=new z;Fa(this);this.Ob=!0};Ga.prototype.sd=function(){return this.Ob};Ga.prototype.isInitialized=Ga.prototype.sd;Ga.prototype.K=function(a){return this.P.ib(a)};Ga.prototype.execute=Ga.prototype.K;Ga.prototype.D=function(){this.P.D()};Ga.prototype.makeImmutable=Ga.prototype.D;
var Fa=function(a){function b(a,b){e.P.Db(a,String(b))}function c(a,b){e.P.N(String(d[a]),b)}var d=B.Pb,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",B.add);c("AND",B.and);c("APPLY",B.apply);c("ASSIGN",B.assign);c("BREAK",B["break"]);c("CASE",B["case"]);c("CONTINUE",B["continue"]);c("DEFAULT",B["case"]);c("DEFN",B.Rc);c("DIVIDE",B.Uc);c("EQUALS",B.Xc);c("EXPRESSION_LIST",B.Zc);c("FOR_IN",B.dd);c("GET",B.get);c("GET_INDEX",
B.Nb);c("GET_PROPERTY",B.Nb);c("GREATER_THAN",B.gd);c("GREATER_THAN_EQUALS",B.hd);c("IDENTITY_EQUALS",B.md);c("IDENTITY_NOT_EQUALS",B.nd);c("IF",B["if"]);c("LESS_THAN",B.ud);c("LESS_THAN_EQUALS",B.vd);c("MODULUS",B.wd);c("MULTIPLY",B.multiply);c("NEGATE",B.xd);c("NOT",B.yd);c("NOT_EQUALS",B.zd);c("NULL",B["null"]);c("OR",B.or);c("POST_DECREMENT",B.Xb);c("POST_INCREMENT",B.Xb);c("PRE_DECREMENT",B.Yb);c("PRE_INCREMENT",B.Yb);c("QUOTE",B.quote);c("RETURN",B["return"]);c("SET_PROPERTY",B.setProperty);
c("SUBTRACT",B.Vd);c("SWITCH",B["switch"]);c("TERNARY",B.Xd);c("TYPEOF",B["typeof"]);c("VAR",B["var"]);c("WHILE",B["while"])};Ga.prototype.N=function(a,b){this.P.N(a,b)};Ga.prototype.addInstruction=Ga.prototype.N;Ga.prototype.C=function(){return this.P.C()};Ga.prototype.getQuota=Ga.prototype.C;Ga.prototype.Ka=function(){this.P.Ka()};Ga.prototype.resetQuota=Ga.prototype.Ka;var Ha=function(){this.Ha={}};Ha.prototype.get=function(a){return this.Ha.hasOwnProperty(a)?this.Ha[a]:void 0};Ha.prototype.add=function(a,b){if(this.Ha.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new v(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.D();this.Ha[a]=c};Ha.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var C=window,F=document,Ia=navigator,Ja=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Ka=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},J=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Ka(d,b);c&&(d.onerror=c);ea()&&d.setAttribute("nonce",ea());var e=F.getElementsByTagName("script")[0]||F.body||F.head;e.parentNode.insertBefore(d,e);return d},
La=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||F.body||F.head;d.parentNode.insertBefore(c,d);Ka(c,b);void 0!==a&&(c.src=a);return c},P=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},Ma=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Na=function(a,b,
c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},Q=function(a){C.setTimeout(a,0)},Pa=function(a){var b=F.getElementById(a);if(b&&Oa(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Oa(document.all[a][c],"id")==a)return document.all[a][c];return b},Oa=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Qa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g,
" "));return b},Ra=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c};var Sa=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(decodeURIComponent(e[0]).replace(/\+/g," ")==b)return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g," ")}},R=function(a,b,c,d,e){var f,h=a.protocol||C.location.protocol;h=h.replace(":","").toLowerCase();b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=h;break;case "host":f=(a.hostname||C.location.hostname).split(":")[0].toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;
case "port":f=String(1*(a.hostname?a.port:C.location.port)||("http"==h?80:"https"==h?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=pa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Sa(f,e));break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ta=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},S=function(a){var b=
F.createElement("a");a&&(b.href=a);return b};var Wa=function(){this.Wb=new Ga;var a=new Ha;a.addAll(Ua());Va(this,function(b){return a.get(b)})},Ua=function(){return{callInWindow:Xa,getCurrentUrl:Ya,getInWindow:Za,getReferrer:$a,getUrlComponent:bb,getUrlFragment:cb,isPlainObject:db,loadIframe:eb,loadJavaScript:fb,removeUrlFragment:gb,replaceAll:hb,sendTrackingBeacon:kb,setInWindow:lb}};Wa.prototype.K=function(a){return this.Wb.K(a)};Wa.prototype.execute=Wa.prototype.K;var Va=function(a,b){a.Wb.N("require",b)};
function Xa(a,b){for(var c=a.split("."),d=C,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==ta(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(wa(arguments[f]));e.apply(d,h)}}function Ya(){return C.location.href}function Za(a,b,c){for(var d=a.split("."),e=C,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=wa(b));return xa(e[d[f]])}function $a(){return F.referrer}
function bb(a,b,c,d,e){var f;if(d&&d instanceof u){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return R(S(a),b,c,f,e)}function cb(a){return R(S(a),"fragment")}function db(a){return a instanceof x}function eb(a,b){var c=this.A();La(a,function(){b instanceof v&&b.i(c)})}var mb={};
function fb(a,b,c,d){var e=this.A(),f=function(){b instanceof v&&b.i(e)},h=function(){c instanceof v&&c.i(e)};d?mb[d]?(mb[d].onSuccess.push(f),mb[d].onFailure.push(h)):(mb[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=mb[d].onSuccess,b=0;b<a.length;b++)Q(a[b]);a.push=function(a){Q(a);return 0}},h=function(){for(var a=mb[d].onFailure,b=0;b<a.length;b++)Q(a[b]);mb[d]=null},J(a,f,h)):J(a,f,h)}function gb(a){return Ta(S(a))}function hb(a,b,c){return a.replace(new RegExp(b,"g"),c)}
function kb(a,b,c){var d=this.A();P(a,function(){b instanceof v&&b.i(d)},function(){c instanceof v&&c.i(d)})}function lb(a,b,c){for(var d=a.split("."),e=C,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=wa(b),!0):!1};
var nb=[],ob={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},pb=function(a){return ob[a]},qb=/[\x00\x22\x26\x27\x3c\x3e]/g;var ub=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,wb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},xb=function(a){return wb[a]};
nb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(ub,xb)+"'"}};var Fb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Gb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Hb=function(a){return Gb[a]};nb[16]=function(a){return a};var Jb,Kb=[],Lb=[],Mb=[],Nb=[],Ob=[],Pb={},Ub,Vb,Wb,Xb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";if(Pb[b]){var c={},d;for(d in a)a.hasOwnProperty(d)&&0===d.indexOf("vtp_")&&(c[d]=a[d]);return Pb[b](c)}var e=new x,f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&e.set(f.substr(4),xa(a[f]));var h=Jb([b,e]);h instanceof g&&"return"===h.s&&(h=h.getData());return wa(h)},Zb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=
Yb(a[e],b,c));return d},Yb=function(a,b,c){if(oa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Yb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Kb[f];if(!h||b(h))return;c[f]=!0;try{var k=Zb(h,b,c);d=Xb(k);Wb&&(d=Wb.Mc(d,k))}catch(w){d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Yb(a[l],b,c)]=Yb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=Yb(a[n],b,c);Vb&&(m=m||p===
Vb.ya);d.push(p)}return Vb&&m?Vb.Nc(d):d.join("");case "escape":d=Yb(a[1],b,c);if(Vb&&oa(a[1])&&"macro"===a[1][0]&&Vb.td(a))return Vb.Gd(d);d=String(d);for(var q=2;q<a.length;q++)nb[a[q]]&&(d=nb[a[q]](d));return d;case "tag":var t=a[1];if(!Nb[t])throw Error("Unable to resolve tag reference "+t+".");return d={Kb:a[2],index:t};case "zb":var r=$b({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c);a[4]&&(r=!r);return r;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");
}}return a},$b=function(a,b,c){try{return Ub(Zb(a,b,c))}catch(d){JSON.stringify(a)}return null};var ac=null,dc=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];ac=bc(a);for(var e=0;e<Lb.length;e++){var f=Lb[e],h=cc(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<Nb.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},cc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ac(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=ac(e[c]);if(null===d)return null;if(d)return!1}return!0};
var bc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=$b(Mb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var gc={},hc=null;gc.m="GTM-TDX8NDH";var ic=null,jc="//www.googletagmanager.com/a?id="+gc.m+"&cv=80",kc={},lc={};var mc=function(){},nc=function(a){return"function"==typeof a},oc=function(a){return"string"==ta(a)},pc=function(a){return"number"==ta(a)&&!isNaN(a)},qc=function(a){return Math.round(Number(a))||0},rc=function(a){return"false"==String(a).toLowerCase()?!1:!!a},sc=function(a){var b=[];if(oa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},tc=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},uc=function(a,b){if(!pc(a)||!pc(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+
a)},vc=function(){this.prefix="gtm.";this.values={}};vc.prototype.set=function(a,b){this.values[this.prefix+a]=b};vc.prototype.get=function(a){return this.values[this.prefix+a]};vc.prototype.contains=function(a){return void 0!==this.get(a)};var wc=function(){var a=hc.sequence||0;hc.sequence=a+1;return a},xc=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},yc=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}};var T=function(){var a=function(a){return{toString:function(){return a}}};return{sb:a("convert_case_to"),tb:a("convert_false_to"),ub:a("convert_null_to"),vb:a("convert_true_to"),wb:a("convert_undefined_to"),I:a("function"),ec:a("instance_name"),fc:a("live_only"),gc:a("malware_disabled"),hc:a("once_per_event"),yb:a("once_per_load"),zb:a("setup_tags"),ic:a("tag_id"),Ab:a("teardown_tags")}}();var zc=new vc,Ac={},Dc={set:function(a,b){y(Bc(a,b),Ac)},get:function(a){return Cc(a,2)},reset:function(){zc=new vc;Ac={}}},Cc=function(a,b){return 2!=b?zc.get(a):Ec(a)},Ec=function(a,b,c){var d=a.split(".");return Gc(d)},Gc=function(a){for(var b=Ac,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Kc=function(a,b){zc.set(a,b);y(Bc(a,b),Ac)},Bc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Lc=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Mc={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Nc={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Oc=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var Pc=function(a){var b=Cc("gtm.whitelist");
var c=b&&Oc(sc(b),Mc),d=Cc("gtm.blacklist")||Cc("tagTypeBlacklist")||[];Lc.test(C.location&&C.location.hostname)&&(d=sc(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Oc(sc(d),Nc),f={};return function(h){var k=h&&h[T.I];if(!k||"string"!=typeof k)return!0;k=k.replace(/_/g,"");if(void 0!==f[k])return f[k];var l=lc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>pa(c,
k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>pa(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var t;if(!(t=0<=pa(e,k)))a:{for(var r=l||[],w=new vc,E=0;E<e.length;E++)w.set(e[E],!0);for(E=0;E<r.length;E++)if(w.get(r[E])){t=!0;break a}t=!1}q=t}return f[k]=!m||q}};var Qc={Mc:function(a,b){b[T.sb]&&"string"===typeof a&&(a=1==b[T.sb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(T.ub)&&null===a&&(a=b[T.ub]);b.hasOwnProperty(T.wb)&&void 0===a&&(a=b[T.wb]);b.hasOwnProperty(T.vb)&&!0===a&&(a=b[T.vb]);b.hasOwnProperty(T.tb)&&!1===a&&(a=b[T.tb]);return a}};var Rc=function(a){var b=hc.zones;!b&&a&&(b=hc.zones=a());return b},Sc={active:!0,isWhitelisted:function(){return!0}};var Tc=!1,Uc=0,Vc=[];function Wc(a){if(!Tc){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Tc=!0;for(var e=0;e<Vc.length;e++)Q(Vc[e])}Vc.push=function(){for(var a=0;a<arguments.length;a++)Q(arguments[a]);return 0}}}function Xc(){if(!Tc&&140>Uc){Uc++;try{F.documentElement.doScroll("left"),Wc()}catch(a){C.setTimeout(Xc,50)}}}var Yc=function(a){Tc?a():Vc.push(a)};var Zc=!1,$c=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]};var ad=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(!C[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}return C[b]},bd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=$c();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var fd=function(){return"&tc="+Nb.filter(function(a){return a}).length},gd="0.005000">Math.random(),hd="",id=function(){hd=[jc,"&v=3&t=t","&pid="+uc(),"&rv=64"].join("")},jd={},kd="",ld=void 0,md={},nd={},od=void 0,pd=2,qd=1E3,rd=function(){pd=2},sd=function(){var a=ld;return void 0===a?"":[hd,jd[a]?"":"&es=1",md[a],fd(),kd,"&z=0"].join("")},td=function(){od&&(C.clearTimeout(od),od=void 0);void 0===ld||jd[ld]&&!kd||(nd[ld]||0>=pd--||0>=qd--?nd[ld]=!0:(P(sd()),jd[ld]=
!0,kd=""))},ud=function(a,b,c){if(gd&&!nd[a]&&b){a!==ld&&(td(),ld=a);var d=c+String(b[T.I]||"").replace(/_/g,"");kd=kd?kd+"."+d:"&tr="+d;od||(od=C.setTimeout(td,500));2022<=sd().length&&td()}};function vd(a,b,c,d,e,f){var h=Nb[a],k=wd(a,b,c,d,e,f);if(!k)return null;var l=Yb(h[T.zb],f.R,[]);if(l&&l.length){var m=l[0];k=vd(m.index,b,k,1===m.Kb?e:k,e,f)}return k}
function wd(a,b,c,d,e,f){function h(){var b=Zb(k,f.R);b.vtp_gtmOnSuccess=function(){ud(f.id,Nb[a],"5");c()};b.vtp_gtmOnFailure=function(){ud(f.id,Nb[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[T.gc])d();else{ud(f.id,k,"1");try{Xb(b)}catch(E){ud(f.id,
k,"7");e()}}}var k=Nb[a];if(f.R(k))return null;var l=Yb(k[T.Ab],f.R,[]);if(l&&l.length){var m=l[0],n=vd(m.index,b,c,d,e,f);if(!n)return null;c=n;d=2===m.Kb?e:n}if(k[T.yb]||k[T.hc]){var p=k[T.yb]?Ob:b,q=c,t=d;if(!p[a]){h=yc(h);var r=xd(a,p,h);c=r.H;d=r.S}return function(){p[a](q,t)}}return h}function xd(a,b,c){var d=[],e=[];b[a]=yd(d,e,c);return{H:function(){b[a]=zd;for(var c=0;c<d.length;c++)d[c]()},S:function(){b[a]=Ad;for(var c=0;c<e.length;c++)e[c]()}}}
function yd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function zd(a){a()}function Ad(a,b){b()};function Bd(a){var b=0,c=0,d=!1;return{add:function(){c++;return yc(function(){b++;d&&b>=c&&a()})},uc:function(){d=!0;b>=c&&a()}}}function Cd(a,b){if(!gd)return;var c=function(a){var d=b.R(Nb[a])?"3":"4",f=Yb(Nb[a][T.zb],b.R,[]);f&&f.length&&c(f[0].index);ud(b.id,Nb[a],d);var h=Yb(Nb[a][T.Ab],b.R,[]);h&&h.length&&c(h[0].index)};c(a);}var Dd=!1;var Ed=function(a,b){var c={};c[T.I]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);Nb.push(c);return Nb.length-1};var Fd=/[A-Z]+/,Gd=/\s/,Hd=function(a){if(oc(a)&&(a=a.trim(),!Gd.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Fd.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ca:d}}}}};var Id=null,Jd={},Kd={},Ld;function Md(){Id=Id||!hc.gtagRegistered;hc.gtagRegistered=!0;return Id}var Nd=function(a,b){var c={event:a};b&&(c.eventModel=y(b,void 0),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function Od(a){if(void 0===Kd[a.id]){var b;if("UA"==a.prefix)b=Ed("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=Ed("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=Ed("gtagfl",{targetId:a.id});else if("GF"==a.prefix)b=Ed("gtaggf",{conversionId:a});else if("G"==a.prefix)b=Ed("get",{trackingId:a.id,isAutoTag:!0});else return;if(!Ld){var c={name:"send_to",dataLayerVersion:2},d={};d[T.I]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+e]=c[e]);Kb.push(d);Ld=["macro",Kb.length-1]}var f={arg0:Ld,
arg1:a.id,ignore_case:!1};f[T.I]="_lc";Mb.push(f);var h={"if":[Mb.length-1],add:[b]};h["if"]&&(h.add||h.block)&&Lb.push(h);Kd[a.id]=b}}
var Qd={event:function(a){var b=a[1];if(oc(b)&&!(3<a.length)){var c;if(2<a.length){if(!va(a[2]))return;c=a[2]}var d=Nd(b,c);return d}},set:function(a){var b;2==a.length&&va(a[1])?
b=y(a[1],void 0):3==a.length&&oc(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=y(b,void 0),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},Pd=yc(function(){});var Yd=!1,Zd=[];function $d(){if(!Yd){Yd=!0;for(var a=0;a<Zd.length;a++)Q(Zd[a])}};var ae=[],be=!1,ce=function(a){var b=a.eventCallback,c=yc(function(){nc(b)&&Q(function(){b(gc.m)})}),d=a.eventTimeout;d&&C.setTimeout(c,Number(d));return c},de=function(){for(var a=!1;!be&&0<ae.length;){be=!0;delete Ac.eventModel;var b=ae.shift();if(nc(b))try{b.call(Dc)}catch(Rd){}else if(oa(b)){var c=b;if(oc(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=Cc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(Rd){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{var l=b;if(l.length&&oc(l[0])){var m=Qd[l[0]];if(m){b=m(l);break a}}b=void 0}if(!b){be=!1;continue}}var n;var p=void 0,q=b,t=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(t&&Kc(p,void 0),Kc(p,q[p]));var r=q.event;if(r){var w=q["gtm.uniqueEventId"];w||(w=wc(),q["gtm.uniqueEventId"]=w,Kc("gtm.uniqueEventId",w));ic=r;var E;var K,A,N=q,D=N.event,O=N["gtm.uniqueEventId"],I=hc.zones;A=I?I.checkState(gc.m,O):Sc;if(A.active){var L=ce(N);c:{var H=
A.isWhitelisted;if("gtm.js"==D){if(Dd){K=!1;break c}Dd=!0}var M=O,G=D;if(gd&&!(0>=qd)&&ld!==M){td();ld=M;kd="";var V=md,aa=M,ma,za=G;ma=0===za.indexOf("gtm.")?encodeURIComponent(za):"*";V[aa]="&e="+ma+"&eid="+M;od||(od=C.setTimeout(td,500))}var ib=Pc(H),ab={id:O,name:D,Gc:L||mc,R:ib,La:dc(ib)};for(var Hc,Rb=ab,Ud=Bd(Rb.Gc),Hf=[],Sb=[],jb=0;jb<Nb.length;jb++)if(Rb.La[jb]){var If=Nb[jb];var vb=Ud.add();try{var Vd=vd(jb,Hf,vb,vb,vb,Rb);Vd?Sb.push(Vd):(Cd(jb,Rb),vb())}catch(Rd){vb()}}Ud.uc();for(var Ic=0;Ic<Sb.length;Ic++)Sb[Ic]();Hc=0<Sb.length;if("gtm.js"===D||"gtm.sync"===D)d:{}if(Hc){for(var Jf={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Tb=0;Tb<ab.La.length;Tb++)if(ab.La[Tb]){var Xd=Nb[Tb];if(Xd&&!Jf[Xd[T.I]]){K=!0;break c}}K=!1}else K=Hc}E=K?!0:!1}else E=!1;ic=null;n=E}else n=!1;a=n||a}be=!1}return!a},ee=function(){var a=de();try{var b=C["dataLayer"].hide;if(b&&void 0!==b[gc.m]&&b.end){b[gc.m]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&
!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},fe=function(){var a=Ja("dataLayer",[]),b=Ja("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Vc.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Zd.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(ae.push.apply(ae,b);300<this.length;)this.shift();return de()};ae.push.apply(ae,a.slice(0));
Q(ee)};var ge={};ge.ya=new String("undefined");ge.Pa={};var he=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ge.ya?b:a[d]);return c.join("")}};he.prototype.toString=function(){return this.resolve("undefined")};he.prototype.valueOf=he.prototype.toString;ge.Nc=function(a){return new he(a)};var ie={};ge.Nd=function(a,b){var c=wc();ie[c]=[a,b];return c};ge.Fb=function(a){var b=a?0:1;return function(a){var c=ie[a];if(c&&"function"===typeof c[b])c[b]();ie[a]=void 0}};
ge.td=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};ge.Gd=function(a){if(a===ge.ya)return a;var b=wc();ge.Pa[b]=a;return'google_tag_manager["'+gc.m+'"].macro('+b+")"};ge.jc=he;var je=new vc,ke=function(a,b){function c(a){var b=S(a),c=R(b,"protocol"),d=R(b,"host",!0),e=R(b,"port"),f=R(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function le(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(r){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=pa(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,t=je.get(q);t||(t=new RegExp(c,p),je.set(q,t));n=t.test(b)}catch(r){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ke(b,c)}return!1};function me(a,b,c,d){return(d||"https:"==C.location.protocol?a:b)+c}function ne(a,b){for(var c=b||(a instanceof u?new u:new x),d=a.M(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof u?(c.get(f)instanceof u||c.set(f,new u),ne(h,c.get(f))):h instanceof x?(c.get(f)instanceof x||c.set(f,new x),ne(h,c.get(f))):c.set(f,h)}}return c}function oe(){return gc.m}function pe(){return(new Date).getTime()}function qe(a,b){return xa(Cc(a,b||2))}function re(){return ic}
function se(a){return Ra('<a href="'+a+'"></a>')[0].href}function te(a){return qc(wa(a))}function ue(a){return null===a?"null":void 0===a?"undefined":a.toString()}function ve(a,b){return uc(a,b)}function we(a,b,c){if(!(a instanceof u))return null;for(var d=new x,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof x&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var xe=function(){var a=new Ha;a.addAll(Ua());a.addAll({buildSafeUrl:me,decodeHtmlUrl:se,copy:ne,generateUniqueNumber:wc,getContainerId:oe,getCurrentTime:pe,getDataLayerValue:qe,getEventName:re,makeInteger:te,makeString:ue,randomInteger:ve,tableToMap:we});return function(b){return a.get(b)}};var ye=new Wa,ze=function(){var a=data.runtime||[];Jb=function(a){return ye.K(a)};Ub=le;Va(ye,xe());for(var b=0;b<a.length;b++){var c=a[b];if(!oa(c)||3>c.length){if(0==c.length)continue;break}ye.K(c)}};var Ae=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Be=function(a){return encodeURIComponent(a)},Ce=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=R(S(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var U=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},De=function(a,b){y(a,b)},Ee=function(a){return qc(a)},Fe=function(a,b){return pa(a,b)};var Ge=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Oa(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},He=function(a){hc.hasOwnProperty("autoEventsSettings")||(hc.autoEventsSettings={});var b=hc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Ie=function(a,b,c,d){var e=He(a),f=xc(e,b,d);e[b]=
c(f)},Je=function(a,b,c){var d=He(a);return xc(d,b,c)};var Ke=/(^|\.)doubleclick\.net$/i,Le=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Me=function(a,b,c){for(var d=String(b||F.cookie).split(";"),e=[],f=0;f<d.length;f++){var h=d[f].split("="),k=tc(h[0]);if(k&&k==a){var l=tc(h.slice(1).join("="));l&&!1!==c&&(l=decodeURIComponent(l));e.push(l)}}return e},Ne=function(a,b,c,d,e,f){f&&(b=encodeURIComponent(b));var h=a+"="+b+"; ";c&&(h+="path="+c+"; ");e&&(h+="expires="+e.toGMTString()+"; ");var k,l;if("auto"==d){var m=R(C.location,"host",!0).split(".");if(4==
m.length&&/^[0-9]*$/.exec(m[3]))l=["none"];else{for(var n=[],p=m.length-2;0<=p;p--)n.push(m.slice(p).join("."));n.push("none");l=n}}else l=[d||"none"];k=l;for(var q=F.cookie,t=0;t<k.length;t++){var r=h,w=k[t],E=c;if(Ke.test(C.location.hostname)||"/"==E&&Le.test(w))break;"none"!=k[t]&&(r+="domain="+k[t]+";");F.cookie=r;if(q!=F.cookie||0<=pa(Me(a),b))break}};var Oe=!1;if(F.querySelectorAll)try{var Pe=F.querySelectorAll(":root");Pe&&1==Pe.length&&Pe[0]==F.documentElement&&(Oe=!0)}catch(a){}var Qe=Oe;var Re=function(a){for(var b=[],c=document.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}return b},Ue=function(a,b,c){var d=Se(a);if(1===d.length)return d[0].id;if(0!==d.length){d=Te(d,function(a){return a.Vc},b);if(1===d.length)return d[0].id;d=Te(d,function(a){return a.Ed},c);return d[0]?d[0].id:void 0}},Xe=function(a,b,c,d,e){c=void 0===c?"/":c;var f=d=void 0===d?"auto":d,h=c;if(Ve.test(document.location.hostname)||"/"===h&&
We.test(f))return!1;var k=b;k&&1200<k.length&&(k=k.substring(0,1200));b=k;var l=a+"="+b+"; path="+c+"; ";void 0!==e&&(l+="expires="+(new Date((new Date).getTime()+e)).toGMTString()+"; ");if("auto"===d){var m=!1,n;a:{var p=[],q=document.location.hostname.split(".");if(4===q.length){var t=q[q.length-1];if(parseInt(t,10).toString()===t){n=["none"];break a}}for(var r=q.length-2;0<=r;r--)p.push(q.slice(r).join("."));p.push("none");n=p}for(var w=n,E=0;E<w.length&&!m;E++)m=Xe(a,b,c,w[E],e);return m}d&&"none"!==
d&&(l+="domain="+d+";");var K=document.cookie;document.cookie=l;return K!=document.cookie||0<=Re(a).indexOf(b)};function Te(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Se(a){for(var b=Ye,c=[],d=Re(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Vc:1*k[0]||1,Ed:1*k[1]||1}))}}return c}
var We=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ve=/(^|\.)doubleclick\.net$/i;var Ze=window,$e=document;function af(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function bf(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Ye=["1"],cf={},df=function(a){return cf[(void 0===a?"_gcl":a)+"_dcu"]},ff=function(a,b,c){b=void 0===b?"auto":b;c=void 0===c?"/":c;var d,e=void 0===a?"_gcl":a;d=(void 0===e?"_gcl":e)+"_dcu";if(!cf[d]&&!ef(d,b,c)){for(var f,h=Ze.navigator.userAgent+($e.cookie||"")+($e.referrer||""),k=h.length,l=Ze.history.length;0<l;)h+=l--^k++;var m=1,n,p,q;if(h)for(m=0,p=h.length-1;0<=p;p--)q=h.charCodeAt(p),m=(m<<6&268435455)+q+(q<<14),n=m&266338304,m=0!=n?m^n>>21:m;var t=[Math.round(2147483647*Math.random())^
m&2147483647,Math.round(Date.now()/1E3)].join("."),r=""+af(void 0),w=bf(void 0);1<w&&(r+="-"+w);f=["1",r,t].join(".");Xe(d,f,c,b,7776E6);ef(d,b,c)}};function ef(a,b,c){var d,e=af(b);(d=Ue(a,e,bf(c)))&&(cf[a]=d);return d};var gf=function(a){for(var b=[],c=F.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}var h=[];if(!b||0==b.length)return h;for(var k=0;k<b.length;k++){var l=b[k].split(".");3==l.length&&"GCL"==l[0]&&l[1]&&h.push(l[2])}return h};var hf=/^\w+$/,jf=/^[\w-]+$/,kf=/^\d+\.fls\.doubleclick\.net$/;function lf(a){return a&&"string"==typeof a&&a.match(hf)?a:"_gcl"}function mf(a){if(a){if("string"==typeof a){var b=lf(a);return{la:b,ka:b}}if(a&&"object"==typeof a)return{la:lf(a.dc),ka:lf(a.aw)}}return{la:"_gcl",ka:"_gcl"}}function nf(a){var b=S(C.location.href),c=R(b,"host",!1);if(c&&c.match(kf)){var d=R(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function of(a){return a.filter(function(a){return jf.test(a)})}var qf=function(a){var b=nf("gclaw");if(b)return b.split(".");var c=mf(a);if("_gcl"==c.ka){var d=pf();if(d&&(null==d.G||"aw.ds"==d.G))return[d.ba]}return of(gf(c.ka+"_aw"))},rf=function(a){var b=nf("gcldc");if(b)return b.split(".");var c=mf(a);if("_gcl"==c.la){var d=pf();if(d&&("ds"==d.G||"aw.ds"==d.G))return[d.ba]}return of(gf(c.la+"_dc"))};
function pf(){var a=S(C.location.href),b=R(a,"query",!1,void 0,"gclid"),c=R(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=R(a,"fragment");b=b||Sa(d,"gclid");c=c||Sa(d,"gclsrc")}return void 0!==b&&b.match(jf)?{ba:b,G:c}:null}
var sf=function(a,b,c){var d=mf(a);c=c||"auto";b=b||"/";var e=pf();if(null!=e){var f=(new Date).getTime(),h=new Date(f+7776E6),k=["GCL",Math.round(f/1E3),e.ba].join(".");e.G&&"aw.ds"!=e.G||Ne(d.ka+"_aw",k,b,c,h,!0);"aw.ds"!=e.G&&"ds"!=e.G||Ne(d.la+"_dc",k,b,c,h,!0)}},tf=function(){var a=nf("gac");if(a)return decodeURIComponent(a);for(var b=[],c=F.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({lb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=
0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].lb]||(h[b[k].lb]=[]),h[b[k].lb].push({timestamp:l[1],ba:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],t=0;t<q.length;t++)p.push(q[t].ba);p=of(p);p.length&&m.push(n+":"+p.join(","))}return m.join(";")},uf=function(a,b,c){};var vf;a:{vf="G"}var wf={"":"n",UA:"u",AW:"a",DC:"d",GTM:vf},xf=function(a){var b=gc.m.split("-"),c=b[0].toUpperCase();return(wf[c]||"i")+"64"+(a&&"GTM"===c?b[1]:"")};
var yf=function(a){return!(void 0===a||null===a||0===(a+"").length)},zf=function(a,b){var c;if(2===b.B)return a("ord",uc(1E11,1E13)),!0;if(3===b.B)return a("ord","1"),a("num",uc(1E11,1E13)),!0;if(4===b.B)return yf(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.B)c="1";else if(6===b.B)c=b.Zb;else return!1;yf(c)&&a("qty",c);yf(b.Ta)&&a("cost",b.Ta);yf(b.mb)&&a("ord",b.mb);return!0},Af=encodeURIComponent,Bf=function(a,b){function c(a,b,c){f.hasOwnProperty(a)||(b+="",e+=";"+a+"="+(c?b:Af(b)))}var d=a.Va,
e=a.protocol;e+=a.Ma?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+Af(d)+(";type="+Af(a.Wa))+(";cat="+Af(a.ja));var f=a.Pc||{},h;for(h in f)f.hasOwnProperty(h)&&(e+=";"+Af(h)+"="+Af(f[h]+""));if(zf(c,a)){yf(a.ob)&&c("u",a.ob);yf(a.tran)&&c("tran",a.tran);c("gtm",xf());if(a.Sa){var k=rf(a.Z);k&&k.length&&c("gcldc",k.join("."));var l=qf(a.Z);l&&l.length&&c("gclaw",l.join("."));var m=tf();m&&c("gac",m);}yf(a.eb)&&c("prd",a.eb,!0);for(var p in a.va)a.va.hasOwnProperty(p)&&c(p,a.va[p]);e+=b||"";yf(a.Ia)&&c("~oref",a.Ia);a.Ma?La(e+"?",a.H):P(e+"?",a.H,a.S)}else Q(a.S)};var Df=!!C.MutationObserver,Ef=void 0,Ff=function(a){if(!Ef){var b=function(){var a=F.body;if(a)if(Df)(new MutationObserver(function(){for(var a=0;a<Ef.length;a++)Q(Ef[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;Ma(a,"DOMNodeInserted",function(){b||(b=!0,Q(function(){b=!1;for(var a=0;a<Ef.length;a++)Q(Ef[a])}))})}};Ef=[];F.body?b():Q(b)}Ef.push(a)};var Tf="www.googletagmanager.com/gtm.js";
var Uf=Tf,Vf=function(a,b,c,d){Ma(a,b,c,d)},Wf=function(a,b){return C.setTimeout(a,b)},Xf=function(a,b,c){J(a,b,c)},Yf={},Zf=function(a,b,c){var d=Yf[a];if(void 0===d){var e=function(a,b){return function(){a.status=b;for(var c=2==b?a.bc:a.Jb,d=0;d<c.length;d++)C.setTimeout(c[d],0)}};d={status:1,bc:[],Jb:[],Rd:void 0};d.we=J(a,e(d,2),e(d,3));Yf[a]=d}0===d.status&&(d.Rd(),d.status=2);2===d.status?b&&b():3===d.status?c&&c():1===d.status&&(b&&d.bc.push(b),c&&d.Jb.push(c))},$f=function(){return C.location.href},
ag=function(a){return R(S(a),"fragment")},W=function(a,b){return Cc(a,b||2)},bg=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return C["dataLayer"].push(a)},cg=function(a,b){C[a]=b},X=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=b);return C[a]},dg=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},Y=function(a,b,c,d){var e=!d&&"http:"==
C.location.protocol;e&&(e=2!==eg());return(e?b:a)+c};
var fg=function(a){var b=0;return b},gg=function(a){},hg=function(a){var b=!1;return b},ig=function(a,b){var c;a:{if(a&&
oa(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},jg=function(a,b,c,d){Ie(a,b,c,d)},kg=function(a,b,c){return Je(a,b,c)},lg=function(a){return!!Je(a,"init",!1)},mg=function(a){He(a).init=!0};
var eg=function(){var a=Uf;a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=F.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};
var pg=function(a,b){var c=Uf+"?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var d in b)b[d]&&b.hasOwnProperty(d)&&(c+="&"+d+"="+encodeURIComponent(b[d]));var e=Y("https://","http://",c);J(e,void 0,void 0)};
var rg=function(a,b,c){a instanceof ge.jc&&(a=a.resolve(ge.Nd(b,c)),b=mc);return{Xa:a,H:b}};var sg=function(a,b){var c=(new Date).getTime();this.n=a;this.t=c;this.p=b},tg=function(){this.c=1;this.e=[];this.p=null};function ug(a){var b=hc,c=b.gss=b.gss||{};return c[a]=c[a]||new tg}var vg=function(a,b){ug(a).p=b},wg=function(a){};var Bg=function(a){if(1===ug(a).c){ug(a).c=2;var b=encodeURIComponent(a);J("www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c")}},Cg=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(a,c){c=c?c.slice(0,-1):void 0;Bf(a,c)}(function(a){Z.__flc=a;Z.__flc.b="flc";Z.__flc.g=!0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=U(b.vtp_customVariable||[],"key","value")||{},e={ja:b.vtp_activityTag,Sa:c,Z:b.vtp_conversionCookiePrefix||void 0,B:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Va:b.vtp_advertiserId,Wa:b.vtp_groupTag,S:b.vtp_gtmOnFailure,H:b.vtp_gtmOnSuccess,Ia:b.vtp_useImageTag?void 0:b.vtp_url,
protocol:"",Ma:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,tran:b.vtp_transactionVariable,ob:b.vtp_userVariable,va:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){Xf("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,X("google_attr").build([U(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0})(function(a){var b=a.vtp_gtmOnFailure;Xf("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=X("google_trackConversion");if(nc(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=U(a.vtp_customParams,"key","value"));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_remarketing_only:!0,
onload_callback:a.vtp_gtmOnSuccess,google_gtm:xf(void 0)})||b()}else b()},b)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0})(function(a){return a.vtp_value})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0})(function(){return ic})}();Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0})(function(a){var b=W("gtm.referrer",1)||F.referrer,c;if(b){var d;if(a.vtp_component&&"URL"!=a.vtp_component){var e=S(String(b));d=R(e,a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey)}else d=Ta(S(String(b)));c=d}else c=String(b);return c})}();
Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=Ge(b);d.event="gtm.click";bg(d)}}(function(a){Z.__cl=a;Z.__cl.b="cl";Z.__cl.g=!0})(function(b){if(!lg("cl")){var c=X("document");Ma(c,"click",a,!0);mg("cl");var d=Je("cl","legacyTeardown",void 0);d&&d()}Q(b.vtp_gtmOnSuccess)})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0})(function(a){var b=W("gtm.cookie",1);return Me(a.vtp_name,b,!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0})(function(a){return uc(a.vtp_min,a.vtp_max)})}();

Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.b="u";Z.__u.g=!0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:W("gtm.url",1))||$f();var d=b[a("vtp_component")],e;if(d&&"URL"!=d){var f=S(String(c));e=R(f,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0)}else e=Ta(S(String(c)));return e})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=W(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();

Z.a.ua=["google"],function(){var a;(function(a){Z.__ua=a;Z.__ua.b="ua";Z.__ua.g=!0})(function(b){var c={},d={},e={},f={},h={};if(b.vtp_gaSettings){var k=b.vtp_gaSettings;De(U(k.vtp_fieldsToSet,"fieldName","value"),d);De(U(k.vtp_contentGroup,"index","group"),e);De(U(k.vtp_dimension,"index","dimension"),f);De(U(k.vtp_metric,"index","metric"),h);b.vtp_gaSettings=null;k.vtp_fieldsToSet=void 0;k.vtp_contentGroup=void 0;k.vtp_dimension=void 0;k.vtp_metric=void 0;var l=y(k,void 0);b=y(b,l)}De(U(b.vtp_fieldsToSet,
"fieldName","value"),d);De(U(b.vtp_contentGroup,"index","group"),e);De(U(b.vtp_dimension,"index","dimension"),f);De(U(b.vtp_metric,"index","metric"),h);var m=ad(b.vtp_functionName),n="",p="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(p=b.vtp_trackerName,n=p+"."):(p="gtm"+wc(),n=p+".");var q={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,
cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},t={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},r=function(a){var b=[].slice.call(arguments,0);b[0]=n+b[0];m.apply(window,b)},w=function(a,b){return void 0===b?b:a(b)},E=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&
r("set",a+c,b[c])},K=function(){var a=function(a,b,c){if(!va(b))return!1;var d;d=xc(Object(b),c,[]);for(var e=0;d&&e<d.length;e++)r(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=W("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!va(c))return;c=Object(c);var e=xc(d,"currencyCode",c.currencyCode);void 0!==e&&r("set","&cu",e);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",
c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){r("ec:setAction","promo_click",c.promoClick.actionField);return}for(var f="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<f.length;h++){var k=c[f[h]];if(k){a("ec:addProduct",k,"products");r("ec:setAction",f[h],k.actionField);break}}},A=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&q[e]||!c&&void 0===
q[e])){var f=t[e]?rc(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},N={name:p};A(d,N,!0);m("create",b.vtp_trackingId||c.trackingId,N);r("set","&gtm",xf(!0));(function(a,c){void 0!==b[c]&&r("set",a,b[c])})("nonInteraction","vtp_nonInteraction");E("contentGroup",e);E("dimension",f);E("metric",h);var D={};A(d,D,!1)&&r("set",D);var O;
b.vtp_enableLinkId&&r("require","linkid","linkid.js");r("set","hitCallback",function(){var a=d&&d.hitCallback;nc(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(r("require","ec","ec.js"),K());var I={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:w(String,b.vtp_eventLabel||c.label),eventValue:w(Ee,b.vtp_eventValue||
c.value)};A(O,I,!1);r("send",I);}else if("TRACK_SOCIAL"==b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==
b.vtp_trackType){I={hitType:"timing",timingCategory:String(b.vtp_timingCategory||c.category),timingVar:String(b.vtp_timingVar||c.name),timingValue:qc(b.vtp_timingValue||c.value),timingLabel:w(String,b.vtp_timingLabel||c.label)},A(O,I,!1),r("send",I);}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==b.vtp_trackType){}else{b.vtp_enableEcommerce&&(r("require","ec","ec.js"),K());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var ma="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");r("require","displayfeatures",void 0,{cookieName:ma})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&(ma="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),r("require","adfeatures",{cookieName:ma}));O?r("send","pageview",O):r("send","pageview");b.vtp_autoLinkDomains&&bd(n,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var za=
b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&(za="internal/"+za);a=!0;Zf(Y("https:","http:","//www.google-analytics.com/"+za,d&&d.forceSSL),function(){var a=$c();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}})}();
Z.a.opt=["google"],function(){var a;(function(a){Z.__opt=a;Z.__opt.b="opt";Z.__opt.g=!0})(function(b){var c={};if(b.vtp_gaSettings){var d=b.vtp_gaSettings;De(U(d.vtp_fieldsToSet,"fieldName","value"),c);b.vtp_gaSettings=null;d.vtp_fieldsToSet=void 0;var e=y(d,void 0);b=y(b,e)||{}}De(U(b.vtp_fieldsToSet,"fieldName","value"),c);var f=ad(b.vtp_functionName);f.r=!0;var h="",k="";b.vtp_setTrackerName&&"string"===typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(k=b.vtp_trackerName,h=k+"."):(k="gtm"+wc(),
h=k+".");var l={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},m={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},n=function(a,
b,c){var d=0,e;for(e in a)if(a.hasOwnProperty(e)&&(c&&l[e]||!c&&void 0===l[e])){var f=m[e]?rc(a[e]):a[e];"anonymizeIp"!==e||f||(f=void 0);b[e]=f;d++}return d},p={name:k};n(c,p,!0);var q={"&gtm":xf(!0)};n(c,q,!1);var t=encodeURI(Y("https:","http:","//www.google-analytics.com/"+(b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!c.forceSSL));f("create",b.vtp_trackingId,p);f(h+"set",q);f(h+"require",b.vtp_optimizeContainerId,{dataLayer:"dataLayer"});f(b.vtp_gtmOnSuccess);f(h+"require",
"render");a||(a=!0,Zf(t,function(){return $c().loaded||b.vtp_gtmOnFailure()},b.vtp_gtmOnFailure));var r=X("dataLayer"),w=r&&r.hide;w&&w.end&&(w[b.vtp_optimizeContainerId]=!0)})}();
Z.a.hjtc=["nonGoogleScripts"],function(){(function(a){Z.__hjtc=a;Z.__hjtc.b="hjtc";Z.__hjtc.g=!0})(function(a){var b=a.vtp_hotjar_site_id;cg("hj",function(){(window.hj.q=window.hj.q||[]).push(arguments)});cg("_hjSettings",{hjid:b,hjsv:5});Xf("//static.hotjar.com/c/hotjar-"+encodeURIComponent(b)+".js?sv=5",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},f=function(a){var b=W(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue};(function(a){Z.__aev=
a;Z.__aev.b="aev";Z.__aev.g=!0})(function(e){switch(e.vtp_varType){case "TEXT":var h,l=W("gtm.element",1),m=W("event",1),n=Number(new Date);a===l&&b===m&&c>n-250?h=d:(d=h=l?Qa(l):"",a=l,b=m);c=n;return h||e.vtp_defaultValue;case "URL":var p=String(W("gtm.elementUrl",1)||e.vtp_defaultValue||""),q=S(p);return e.vtp_component&&"URL"!=e.vtp_component?R(q,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey):p;case "ATTRIBUTE":var t;if(void 0===e.vtp_attribute)t=f(e);else{var r=W("gtm.element",
1);t=Oa(r,e.vtp_attribute)||e.vtp_defaultValue||""}return t;default:return f(e)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0})(function(a){var b=y(a,void 0),c=b;c[T.I]=null;c[T.ec]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0})(function(a){var b=a.vtp_input,c=U(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,Ka(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){Q(h)}}};var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,f=rg(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Xa,k=f.H;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,Ra(h),k,e)()}else Wf(function(){c(d)},200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0}();

Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0})(function(){return!1})}();


Z.a.lcl=[],function(){function a(){var a=X("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=dg(e,["a","area"]);if(!e)return c.returnValue;var f=c.defaultPrevented||!1===c.returnValue,l=Je("lcl",f?"nv.mwt":"mwt",0),m=Ge(e);m.event="gtm.linkClick";if(f){var n=kg("lcl","nv.ids",[]).join(",");if(n)m["gtm.triggers"]=n;else return}else{var p=kg("lcl","ids",[]).join(",");m["gtm.triggers"]=p}if(b(c,e,a)&&!f&&l&&e.href){var q=X((e.target||"_self").substring(1)),
t=!0;if(bg(m,function(){t&&q&&(q.location.href=e.href)},l))t=!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else bg(m,function(){},l||2E3);return!0}};Ma(a,"click",e,!1);Ma(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=Ta(S(b.href)),l=Ta(S(e.location));return k!==l}return!0}(function(a){Z.__lcl=a;Z.__lcl.b="lcl";
Z.__lcl.g=!0})(function(b){var c=void 0===b.vtp_waitForTags?!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,f=Number(b.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(f,a)};Ie("lcl","mwt",k,0);e||Ie("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};jg("lcl","ids",l,[]);e||jg("lcl","nv.ids",l,[]);if(!lg("lcl")){a();mg("lcl");var m=Je("lcl","legacyTeardown",void 0);m&&m()}Q(b.vtp_gtmOnSuccess)})}();

var Dg={macro:function(a){if(ge.Pa.hasOwnProperty(a))return ge.Pa[a]}};Dg.dataLayer=Dc;Dg.onHtmlSuccess=ge.Fb(!0);Dg.onHtmlFailure=ge.Fb(!1);Dg.callback=function(a){kc.hasOwnProperty(a)&&nc(kc[a])&&kc[a]();delete kc[a]};Dg.zc=function(){hc[gc.m]=Dg;lc=Z.a;Vb=Vb||ge;Wb=Qc};
Dg.pd=function(){hc=C.google_tag_manager=C.google_tag_manager||{};if(hc[gc.m]){var a=hc.zones;a&&a.unregisterChild(gc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Kb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Nb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Mb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);Lb.push(p)}Pb=Z;ze();Dg.zc();fe();Tc=!1;Uc=0;if("interactive"==
F.readyState&&!F.createEventObject||"complete"==F.readyState)Wc();else{Ma(F,"DOMContentLoaded",Wc);Ma(F,"readystatechange",Wc);if(F.createEventObject&&F.documentElement.doScroll){var t=!0;try{t=!C.frameElement}catch(w){}t&&Xc()}Ma(C,"load",Wc)}Yd=!1;"complete"===F.readyState?$d():Ma(C,"load",$d);a:{
if(!gd)break a;id();pd=2;ld=void 0;md={};jd={};od=void 0;nd={};kd="";C.setInterval(id,864E5);C.setInterval(rd,1E3);}}};Dg.pd();

})()
