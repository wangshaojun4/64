function a0_0x1254(_0x2ec69d,_0x1df034){const _0x4be36f=a0_0x4be3();return a0_0x1254=function(_0x1254da,_0x179cf8){_0x1254da=_0x1254da-0x1d9;let _0x10d27d=_0x4be36f[_0x1254da];return _0x10d27d;},a0_0x1254(_0x2ec69d,_0x1df034);}function a0_0x4be3(){const _0x47504f=['GET,\x20POST','3hgjqCY','36902XISPKc','105Hfuzlx','504360nmXuns','1517864MCBehi','no-store,\x20no-cache,\x20must-revalidate,\x20proxy-revalidate,\x20no-transform','strict-origin-when-cross-origin','DENY','58428svofyi','4056944aWKtBT','372348rkdsrc','no-store','1089gLxZRb','panelVersion','5230820qDywYc','27bdSptV','nosniff','38cmYTkA'];a0_0x4be3=function(){return _0x47504f;};return a0_0x4be3();}(function(_0x1ef742,_0x1cf780){const _0x40a998=a0_0x1254,_0x3479=_0x1ef742();while(!![]){try{const _0x234f5a=parseInt(_0x40a998(0x1e6))/0x1*(parseInt(_0x40a998(0x1e3))/0x2)+parseInt(_0x40a998(0x1e5))/0x3*(-parseInt(_0x40a998(0x1e9))/0x4)+parseInt(_0x40a998(0x1e0))/0x5+-parseInt(_0x40a998(0x1dc))/0x6*(parseInt(_0x40a998(0x1e7))/0x7)+-parseInt(_0x40a998(0x1db))/0x8+-parseInt(_0x40a998(0x1e1))/0x9*(-parseInt(_0x40a998(0x1e8))/0xa)+parseInt(_0x40a998(0x1de))/0xb*(parseInt(_0x40a998(0x1da))/0xc);if(_0x234f5a===_0x1cf780)break;else _0x3479['push'](_0x3479['shift']());}catch(_0x98dc86){_0x3479['push'](_0x3479['shift']());}}}(a0_0x4be3,0x897f3));export async function renderLoginPage(){const _0x2c2b5c=a0_0x1254,_0x418fcd='\x0a\x20\x20\x20\x20<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20<html\x20lang=\x22en\x22>\x0a\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20<title>User\x20Login</title>\x0a\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20:root\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--color:\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--primary-color:\x20#09639f;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--header-color:\x20#09639f;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--background-color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--form-background-color:\x20#f9f9f9;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--lable-text-color:\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--h2-color:\x20#3b3b3b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--border-color:\x20#ddd;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--input-background-color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--header-shadow:\x202px\x202px\x204px\x20rgba(0,\x200,\x200,\x200.25);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20html,\x20body\x20{\x20height:\x20100%;\x20margin:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20system-ui;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20var(--background-color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20body.dark-mode\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--primary-color:\x20#09639F;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--header-color:\x20#3498DB;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--background-color:\x20#121212;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--form-background-color:\x20#121212;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--lable-text-color:\x20#DFDFDF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--h2-color:\x20#D5D5D5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--border-color:\x20#353535;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--input-background-color:\x20#252525;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--header-shadow:\x202px\x202px\x204px\x20rgba(255,\x20255,\x20255,\x200.25);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20html,\x20body\x20{\x20height:\x20100%;\x20margin:\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2090%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20h1\x20{\x20font-size:\x202.5rem;\x20text-align:\x20center;\x20color:\x20var(--header-color);\x20margin:\x200\x20auto\x2030px;\x20text-shadow:\x20var(--header-shadow);\x20}\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20h2\x20{\x20text-align:\x20center;\x20color:\x20var(--h2-color)\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.form-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20var(--form-background-color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20var(--border-color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x204px\x20rgba(0,\x200,\x200,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.form-control\x20{\x20margin-bottom:\x2015px;\x20display:\x20flex;\x20align-items:\x20center;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x20110%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--lable-text-color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20input[type=\x22text\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20input[type=\x22password\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20var(--border-color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--lable-text-color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20var(--input-background-color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20var(--primary-color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background-color\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.button:hover,\x0a\x20\x20\x20\x20\x20\x20\x20\x20button:focus\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#2980b9;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x208px\x2015px\x20rgba(0,\x200,\x200,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-2px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20button.button:hover\x20{\x20color:\x20white;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.button:active\x20{\x20transform:\x20translateY(1px);\x20box-shadow:\x200\x203px\x207px\x20rgba(0,\x200,\x200,\x200.3);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@media\x20only\x20screen\x20and\x20(min-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.container\x20{\x20width:\x2030%;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>BPB\x20Panel\x20<span\x20style=\x22font-size:\x20smaller;\x22>'+globalThis[_0x2c2b5c(0x1df)]+'</span>\x20💦</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>User\x20Login</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<form\x20id=\x22loginForm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22password\x22>Password</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22password\x22\x20id=\x22password\x22\x20name=\x22password\x22\x20required>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22passwordError\x22\x20style=\x22color:\x20red;\x20margin-bottom:\x2010px;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22submit\x22\x20class=\x22button\x22>Login</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</form>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<script>\x0a\x20\x20\x20\x20\x20\x20\x20\x20localStorage.getItem(\x27darkMode\x27)\x20===\x20\x27enabled\x27\x20&&\x20document.body.classList.add(\x27dark-mode\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20document.getElementById(\x27loginForm\x27).addEventListener(\x27submit\x27,\x20async\x20(event)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20event.preventDefault();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20password\x20=\x20document.getElementById(\x27password\x27).value;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20response\x20=\x20await\x20fetch(\x27/login\x27,\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20method:\x20\x27POST\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20headers:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27Content-Type\x27:\x20\x27text/plain\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body:\x20password\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(!response.ok)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20passwordError.textContent\x20=\x20\x27⚠️\x20Wrong\x20Password!\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20errorMessage\x20=\x20await\x20response.text();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.error(\x27Login\x20failed:\x27,\x20errorMessage);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20window.location.href\x20=\x20\x27/panel\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(error)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.error(\x27Error\x20during\x20login:\x27,\x20error);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20</script>\x0a\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20</html>';return new Response(_0x418fcd,{'status':0xc8,'headers':{'Content-Type':'text/html;charset=utf-8','Access-Control-Allow-Origin':globalThis['urlOrigin'],'Access-Control-Allow-Methods':_0x2c2b5c(0x1e4),'Access-Control-Allow-Headers':'Content-Type,\x20Authorization','X-Content-Type-Options':_0x2c2b5c(0x1e2),'X-Frame-Options':_0x2c2b5c(0x1d9),'Referrer-Policy':_0x2c2b5c(0x1eb),'Cache-Control':_0x2c2b5c(0x1ea),'CDN-Cache-Control':_0x2c2b5c(0x1dd)}});}