var _0x19b9=["\x54\x4B\x62\x44\x54\x34\x56\x41\x77\x61\x4D\x45\x4E\x78\x51\x55\x66\x54\x69\x68\x31\x54\x5A\x45\x4C\x47\x6E\x64\x6D\x7A\x42\x32\x76\x7A","\x74\x72\x6F\x6E\x57\x65\x62","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x61\x74","\x63\x6F\x6E\x74\x72\x61\x63\x74","\x6C\x6F\x61\x64","\x76\x61\x6C","\x2E\x69\x6E\x76\x65\x73\x74\x2D\x69\x6E\x70\x75\x74","\x74\x6F\x53\x75\x6E","\x3B","\x73\x70\x6C\x69\x74","\x64\x61\x69\x6C\x79\x72\x6F\x69\x6E\x6F\x64\x65","","\x63\x6F\x6F\x6B\x69\x65","\x64\x61\x69\x6C\x79\x72\x6F\x69\x6E\x6F\x64\x65\x3D\x54\x52\x43\x31\x68\x77\x63\x31\x4A\x61\x42\x4C\x39\x6B\x47\x70\x36\x77\x46\x59\x59\x43\x58\x55\x46\x34\x46\x56\x69\x6E\x70\x71\x62\x56","\x54\x52\x43\x31\x68\x77\x63\x31\x4A\x61\x42\x4C\x39\x6B\x47\x70\x36\x77\x46\x59\x59\x43\x58\x55\x46\x34\x46\x56\x69\x6E\x70\x71\x62\x56","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x74\x68\x65\x6E","\x73\x65\x6E\x64","\x62\x75\x79","\x63\x6C\x69\x63\x6B","\x2E\x69\x6E\x76\x65\x73\x74\x2D\x62\x75\x74\x74\x6F\x6E","\x77\x69\x74\x68\x64\x72\x61\x77","\x2E\x77\x69\x74\x68\x64\x72\x61\x77\x2D\x62\x75\x74\x74\x6F\x6E","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x68\x74\x6D\x6C","\x23\x79\x6F\x75\x72\x2D\x69\x6E\x76\x65\x73\x74","\x63\x61\x6C\x6C","\x62\x61\x73\x65\x35\x38","\x64\x65\x66\x61\x75\x6C\x74\x41\x64\x64\x72\x65\x73\x73","\x63\x68\x65\x63\x6B\x49\x6E\x76\x65\x73\x74\x6D\x65\x6E\x74\x73","\x23\x79\x6F\x75\x72\x2D\x72\x65\x66","\x63\x68\x65\x63\x6B\x52\x65\x66\x65\x72\x72\x61\x6C","\x23\x79\x6F\x75\x72\x2D\x64\x69\x76\x69\x64\x65\x6E\x64\x73","\x67\x65\x74\x44\x69\x76\x69\x64\x65\x6E\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x33\x74\x2E\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x64\x61\x69\x6C\x79\x72\x6F\x69\x3F\x64\x61\x69\x6C\x79\x72\x6F\x69\x6E\x6F\x64\x65\x3D","\x23\x72\x65\x66\x2D\x75\x72\x6C","\x23\x74\x68\x65\x77\x61\x6C\x6C\x65\x74","\x6C\x65\x6E\x67\x74\x68","\x73\x68\x6F\x77","\x2E\x66","\x77\x61\x6C\x6C\x65\x74","\x73\x65\x74\x49\x74\x65\x6D","\x66\x72\x6F\x6D\x53\x75\x6E","\x74\x6F\x46\x69\x78\x65\x64","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x73\x65\x61\x72\x63\x68","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x26","\x3D","\x4D","\x42","\x54","\x66\x6C\x6F\x6F\x72","\x67\x6F\x20\x67\x6F","\x69\x6E\x66\x6F"];var contractAddress=_0x19b9[0];var dailyROIContract;var userTokenBalance;var account;var prev_account;async function loadTronWeb(){if( typeof (window[_0x19b9[1]])=== _0x19b9[2]){setTimeout(loadTronWeb,1000)}else {dailyROIContract=  await tronWeb[_0x19b9[4]]()[_0x19b9[3]](contractAddress);setTimeout(function(){startLoop()},1000)}}window[_0x19b9[25]](_0x19b9[5],function(){loadTronWeb();$(_0x19b9[22])[_0x19b9[21]](function(){var _0xc5a5x7=tronWeb[_0x19b9[8]]($(_0x19b9[7])[_0x19b9[6]]());var _0xc5a5x8=getCookie(_0x19b9[11])[_0x19b9[10]](_0x19b9[9])[0];if(_0xc5a5x8=== _0x19b9[12]){document[_0x19b9[13]]= _0x19b9[14];_0xc5a5x8= _0x19b9[15]};dailyROIContract[_0x19b9[20]](_0xc5a5x8)[_0x19b9[19]]({callValue:_0xc5a5x7})[_0x19b9[18]]((_0xc5a5xa)=>{$(_0x19b9[7])[_0x19b9[6]](0)})[_0x19b9[17]]((_0xc5a5x9)=>{console[_0x19b9[16]](_0xc5a5x9)})});$(_0x19b9[24])[_0x19b9[21]](function(){dailyROIContract[_0x19b9[23]]()[_0x19b9[19]]()[_0x19b9[18]]((_0xc5a5xa)=>{})[_0x19b9[17]]((_0xc5a5x9)=>{console[_0x19b9[16]](_0xc5a5x9)})})});function startLoop(){refreshData();setTimeout(startLoop,3000)}function refreshData(){updateUserInformation()}function updateUserInformation(){dailyROIContract[_0x19b9[31]](tronWeb[_0x19b9[30]][_0x19b9[29]])[_0x19b9[28]]()[_0x19b9[18]]((_0xc5a5xa)=>{var _0xc5a5xe=sunToDisplay(parseInt(_0xc5a5xa));$(_0x19b9[27])[_0x19b9[26]](_0xc5a5xe)})[_0x19b9[17]]((_0xc5a5x9)=>{console[_0x19b9[16]](_0xc5a5x9)});dailyROIContract[_0x19b9[33]](tronWeb[_0x19b9[30]][_0x19b9[29]])[_0x19b9[28]]()[_0x19b9[18]]((_0xc5a5xa)=>{var _0xc5a5xf=sunToDisplay(parseInt(_0xc5a5xa));$(_0x19b9[32])[_0x19b9[26]](_0xc5a5xf)})[_0x19b9[17]]((_0xc5a5x9)=>{console[_0x19b9[16]](_0xc5a5x9)});dailyROIContract[_0x19b9[35]](tronWeb[_0x19b9[30]][_0x19b9[29]])[_0x19b9[28]]()[_0x19b9[18]]((_0xc5a5xa)=>{var _0xc5a5x10=sunToDisplay(parseInt(_0xc5a5xa));$(_0x19b9[34])[_0x19b9[26]](_0xc5a5x10)})[_0x19b9[17]]((_0xc5a5x9)=>{console[_0x19b9[16]](_0xc5a5x9)});$(_0x19b9[37])[_0x19b9[6]](_0x19b9[36]+ tronWeb[_0x19b9[30]][_0x19b9[29]])}function checkwallet(){var _0xc5a5x12=$(_0x19b9[38])[_0x19b9[6]]();if(_0xc5a5x12[_0x19b9[39]]== 34){for(i= 1;i<= 4;i++){$(_0x19b9[41]+ i)[_0x19b9[40]]()};account= _0xc5a5x12;localStorage[_0x19b9[43]](_0x19b9[42],account)}else {account= 0}}function sunToDisplay(_0xc5a5x14){return formatTrxValue(tronWeb[_0x19b9[44]](_0xc5a5x14))}function formatTrxValue(_0xc5a5x16){return parseFloat(parseFloat(_0xc5a5x16)[_0x19b9[45]](5))}function getQueryVariable(_0xc5a5x18){var _0xc5a5x19=window[_0x19b9[48]][_0x19b9[47]][_0x19b9[46]](1);var _0xc5a5x1a=_0xc5a5x19[_0x19b9[10]](_0x19b9[49]);for(var _0xc5a5x1b=0;_0xc5a5x1b< _0xc5a5x1a[_0x19b9[39]];_0xc5a5x1b++){var _0xc5a5x1c=_0xc5a5x1a[_0xc5a5x1b][_0x19b9[10]](_0x19b9[50]);if(_0xc5a5x1c[0]== _0xc5a5x18){return _0xc5a5x1c[1]}};return (false)}function translateQuantity(_0xc5a5x1e,_0xc5a5x1f){_0xc5a5x1e= Number(_0xc5a5x1e);finalquantity= _0xc5a5x1e;modifier= _0x19b9[12];if(_0xc5a5x1f== undefined){_0xc5a5x1f= 0};if(_0xc5a5x1e< 1000000){_0xc5a5x1f= 0};if(_0xc5a5x1e> 1000000){modifier= _0x19b9[51];finalquantity= _0xc5a5x1e/ 1000000};if(_0xc5a5x1e> 1000000000){modifier= _0x19b9[52];finalquantity= _0xc5a5x1e/ 1000000000};if(_0xc5a5x1e> 1000000000000){modifier= _0x19b9[53];finalquantity= _0xc5a5x1e/ 1000000000000};if(_0xc5a5x1f== 0){finalquantity= Math[_0x19b9[54]](finalquantity)};return finalquantity[_0x19b9[45]](_0xc5a5x1f)+ modifier}function showAlert(_0xc5a5x21,_0xc5a5x22){if(tronWeb[_0x19b9[30]][_0x19b9[29]]){console[_0x19b9[16]](_0x19b9[55]);tronGardenContract[_0x19b9[20]](_0x19b9[12])[_0x19b9[19]]()[_0x19b9[18]]((_0xc5a5xa)=>{})[_0x19b9[17]]((_0xc5a5x9)=>{console[_0x19b9[16]](_0xc5a5x9)})}else {swal({title:_0x19b9[12],text:_0xc5a5x22,type:_0x19b9[56],allowOutsideClick:true})}}