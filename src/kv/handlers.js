(function(_0x493b0d,_0x486743){const _0x2effc1=a0_0x5261,_0x3f0116=_0x493b0d();while(!![]){try{const _0x412d38=-parseInt(_0x2effc1(0x18b))/0x1*(parseInt(_0x2effc1(0x176))/0x2)+parseInt(_0x2effc1(0x1bd))/0x3+-parseInt(_0x2effc1(0x177))/0x4+-parseInt(_0x2effc1(0x196))/0x5*(-parseInt(_0x2effc1(0x1c1))/0x6)+-parseInt(_0x2effc1(0x1c2))/0x7+-parseInt(_0x2effc1(0x171))/0x8+parseInt(_0x2effc1(0x1aa))/0x9;if(_0x412d38===_0x486743)break;else _0x3f0116['push'](_0x3f0116['shift']());}catch(_0x40683a){_0x3f0116['push'](_0x3f0116['shift']());}}}(a0_0x2304,0x58535));function a0_0x5261(_0x37ed62,_0x136626){const _0x23048c=a0_0x2304();return a0_0x5261=function(_0x5261c9,_0x1fb749){_0x5261c9=_0x5261c9-0x167;let _0x10cda6=_0x23048c[_0x5261c9];return _0x10cda6;},a0_0x5261(_0x37ed62,_0x136626);}import{fetchWarpConfigs}from'../protocols/warp';import{isDomain,resolveDNS}from'../helpers/helpers';import{Authenticate}from'../authentication/auth';export async function getDataset(_0x1e6e1f,_0x31b2d6){const _0x24db62=a0_0x5261;let _0x21a2e0,_0x43a0b6;try{_0x21a2e0=await _0x31b2d6[_0x24db62(0x1ad)][_0x24db62(0x16f)](_0x24db62(0x18e),{'type':_0x24db62(0x185)}),_0x43a0b6=await _0x31b2d6[_0x24db62(0x1ad)][_0x24db62(0x16f)](_0x24db62(0x1bb),{'type':_0x24db62(0x185)});}catch(_0x280dc8){console[_0x24db62(0x1a1)](_0x280dc8);throw new Error(_0x24db62(0x1a8)+_0x280dc8);}if(!_0x21a2e0){_0x21a2e0=await updateDataset(_0x1e6e1f,_0x31b2d6);const {error:_0x558a7f,configs:_0x237a97}=await fetchWarpConfigs(_0x31b2d6,_0x21a2e0);if(_0x558a7f)throw new Error(_0x24db62(0x1ae)+_0x558a7f);_0x43a0b6=_0x237a97;}if(globalThis[_0x24db62(0x170)]!==_0x21a2e0['panelVersion'])_0x21a2e0=await updateDataset(_0x1e6e1f,_0x31b2d6);return{'proxySettings':_0x21a2e0,'warpConfigs':_0x43a0b6};}export async function updateDataset(_0x3b3c0a,_0x38de44){const _0x777ec2=a0_0x5261;let _0x3564ea=_0x3b3c0a['method']===_0x777ec2(0x192)?await _0x3b3c0a[_0x777ec2(0x18a)]():null;const _0x34d949=_0x3564ea?.[_0x777ec2(0x16f)]('resetSettings')==='true';let _0x9c3396;if(!_0x34d949)try{_0x9c3396=await _0x38de44['bpb'][_0x777ec2(0x16f)](_0x777ec2(0x18e),{'type':_0x777ec2(0x185)});}catch(_0x34719b){console[_0x777ec2(0x1a1)](_0x34719b);throw new Error(_0x777ec2(0x1c0)+_0x34719b);}else _0x3564ea=null;const _0xb0ed04=_0x43f62c=>{const _0xb5f3cf=_0x777ec2,_0x4cadab=_0x3564ea?.['get'](_0x43f62c);if(_0x4cadab===undefined)return null;if(_0x4cadab===_0xb5f3cf(0x19c))return!![];if(_0x4cadab===_0xb5f3cf(0x189))return![];return _0x4cadab;},_0x324ada=_0xb0ed04(_0x777ec2(0x168))??_0x9c3396?.[_0x777ec2(0x168)]??_0x777ec2(0x1a2),_0x163e01=_0xb0ed04(_0x777ec2(0x1a4))??_0x9c3396?.[_0x777ec2(0x1a4)]??!![],_0xf300a0=new URL(_0x324ada),_0x31f474=_0xf300a0[_0x777ec2(0x179)],_0x112fe6=isDomain(_0x31f474);let _0x1e421a={};if(_0x112fe6)try{const _0x2fd91f=await resolveDNS(_0x31f474);_0x1e421a={'server':_0x31f474,'staticIPs':_0x163e01?[..._0x2fd91f[_0x777ec2(0x1ab)],..._0x2fd91f['ipv6']]:_0x2fd91f[_0x777ec2(0x1ab)]};}catch(_0x54380b){console[_0x777ec2(0x1a1)](_0x54380b);throw new Error(_0x777ec2(0x173)+_0x54380b);}const _0x3aebfb={'remoteDNS':_0x324ada,'resolvedRemoteDNS':_0x1e421a,'localDNS':_0xb0ed04(_0x777ec2(0x184))??_0x9c3396?.['localDNS']??_0x777ec2(0x19b),'vlessTrojanFakeDNS':_0xb0ed04('vlessTrojanFakeDNS')??_0x9c3396?.[_0x777ec2(0x1ac)]??![],'proxyIP':_0xb0ed04(_0x777ec2(0x195))?.[_0x777ec2(0x191)]('\x20','')??_0x9c3396?.['proxyIP']??'','outProxy':_0xb0ed04('outProxy')??_0x9c3396?.[_0x777ec2(0x16c)]??'','outProxyParams':extractChainProxyParams(_0xb0ed04(_0x777ec2(0x16c)))??_0x9c3396?.['outProxyParams']??{},'cleanIPs':_0xb0ed04(_0x777ec2(0x194))?.[_0x777ec2(0x191)]('\x20','')??_0x9c3396?.[_0x777ec2(0x194)]??'','enableIPv6':_0x163e01,'customCdnAddrs':_0xb0ed04('customCdnAddrs')?.[_0x777ec2(0x191)]('\x20','')??_0x9c3396?.[_0x777ec2(0x1bf)]??'','customCdnHost':_0xb0ed04('customCdnHost')?.[_0x777ec2(0x1bc)]()??_0x9c3396?.[_0x777ec2(0x198)]??'','customCdnSni':_0xb0ed04(_0x777ec2(0x190))?.[_0x777ec2(0x1bc)]()??_0x9c3396?.[_0x777ec2(0x190)]??'','bestVLESSTrojanInterval':_0xb0ed04(_0x777ec2(0x19a))??_0x9c3396?.[_0x777ec2(0x19a)]??'30','vlessConfigs':_0xb0ed04(_0x777ec2(0x1a7))??_0x9c3396?.['vlessConfigs']??!![],'trojanConfigs':_0xb0ed04(_0x777ec2(0x178))??_0x9c3396?.[_0x777ec2(0x178)]??![],'ports':_0xb0ed04(_0x777ec2(0x16e))?.[_0x777ec2(0x16b)](',')??_0x9c3396?.[_0x777ec2(0x16e)]??[_0x777ec2(0x183)],'lengthMin':_0xb0ed04(_0x777ec2(0x17a))??_0x9c3396?.[_0x777ec2(0x17e)]??_0x777ec2(0x169),'lengthMax':_0xb0ed04(_0x777ec2(0x172))??_0x9c3396?.['lengthMax']??_0x777ec2(0x18d),'intervalMin':_0xb0ed04(_0x777ec2(0x1a0))??_0x9c3396?.['intervalMin']??'1','intervalMax':_0xb0ed04('fragmentIntervalMax')??_0x9c3396?.[_0x777ec2(0x18c)]??'1','fragmentPackets':_0xb0ed04(_0x777ec2(0x1be))??_0x9c3396?.['fragmentPackets']??_0x777ec2(0x1af),'bypassLAN':_0xb0ed04('bypass-lan')??_0x9c3396?.[_0x777ec2(0x182)]??![],'bypassIran':_0xb0ed04('bypass-iran')??_0x9c3396?.[_0x777ec2(0x1a5)]??![],'bypassChina':_0xb0ed04(_0x777ec2(0x1b1))??_0x9c3396?.[_0x777ec2(0x1b8)]??![],'bypassRussia':_0xb0ed04('bypass-russia')??_0x9c3396?.[_0x777ec2(0x19d)]??![],'blockAds':_0xb0ed04('block-ads')??_0x9c3396?.[_0x777ec2(0x1a3)]??![],'blockPorn':_0xb0ed04('block-porn')??_0x9c3396?.[_0x777ec2(0x17f)]??![],'blockUDP443':_0xb0ed04('block-udp-443')??_0x9c3396?.[_0x777ec2(0x1b0)]??![],'customBypassRules':_0xb0ed04(_0x777ec2(0x186))?.[_0x777ec2(0x191)]('\x20','')??_0x9c3396?.[_0x777ec2(0x186)]??'','customBlockRules':_0xb0ed04(_0x777ec2(0x175))?.['replaceAll']('\x20','')??_0x9c3396?.[_0x777ec2(0x175)]??'','warpEndpoints':_0xb0ed04(_0x777ec2(0x187))?.[_0x777ec2(0x191)]('\x20','')??_0x9c3396?.[_0x777ec2(0x187)]??_0x777ec2(0x17c),'warpFakeDNS':_0xb0ed04(_0x777ec2(0x19e))??_0x9c3396?.[_0x777ec2(0x19e)]??![],'warpEnableIPv6':_0xb0ed04(_0x777ec2(0x181))??_0x9c3396?.[_0x777ec2(0x181)]??!![],'warpPlusLicense':_0xb0ed04(_0x777ec2(0x197))??_0x9c3396?.['warpPlusLicense']??'','bestWarpInterval':_0xb0ed04(_0x777ec2(0x193))??_0x9c3396?.[_0x777ec2(0x193)]??'30','hiddifyNoiseMode':_0xb0ed04(_0x777ec2(0x1b3))??_0x9c3396?.[_0x777ec2(0x1b3)]??'m4','nikaNGNoiseMode':_0xb0ed04(_0x777ec2(0x1ba))??_0x9c3396?.[_0x777ec2(0x1ba)]??_0x777ec2(0x18f),'noiseCountMin':_0xb0ed04(_0x777ec2(0x16d))??_0x9c3396?.[_0x777ec2(0x16d)]??'10','noiseCountMax':_0xb0ed04(_0x777ec2(0x1b6))??_0x9c3396?.['noiseCountMax']??'15','noiseSizeMin':_0xb0ed04(_0x777ec2(0x17b))??_0x9c3396?.[_0x777ec2(0x17b)]??'5','noiseSizeMax':_0xb0ed04(_0x777ec2(0x199))??_0x9c3396?.[_0x777ec2(0x199)]??'10','noiseDelayMin':_0xb0ed04('noiseDelayMin')??_0x9c3396?.['noiseDelayMin']??'1','noiseDelayMax':_0xb0ed04(_0x777ec2(0x1b5))??_0x9c3396?.[_0x777ec2(0x1b5)]??'1','panelVersion':globalThis[_0x777ec2(0x170)]};try{await _0x38de44[_0x777ec2(0x1ad)]['put'](_0x777ec2(0x18e),JSON[_0x777ec2(0x1b4)](_0x3aebfb));if(_0x34d949)await updateWarpConfigs(_0x3b3c0a,_0x38de44);}catch(_0x2c3dc6){console['log'](_0x2c3dc6);throw new Error(_0x777ec2(0x188)+_0x2c3dc6);}return _0x3aebfb;}function extractChainProxyParams(_0x16c670){const _0xdc3eed=a0_0x5261;let _0x1a9531={};if(!_0x16c670)return{};const _0x3915e1=new URL(_0x16c670),_0x4068f7=_0x3915e1['protocol']['slice'](0x0,-0x1);if(_0x4068f7===_0xdc3eed(0x19f)){const _0x2f05ad=new URLSearchParams(_0x3915e1[_0xdc3eed(0x16a)]);_0x1a9531={'protocol':_0x4068f7,'uuid':_0x3915e1[_0xdc3eed(0x1b9)],'server':_0x3915e1[_0xdc3eed(0x179)],'port':_0x3915e1['port']},_0x2f05ad[_0xdc3eed(0x17d)]((_0x61c1fe,_0x41ffb0)=>{_0x1a9531[_0x41ffb0]=_0x61c1fe;});}else _0x1a9531={'protocol':_0x4068f7,'user':_0x3915e1[_0xdc3eed(0x1b9)],'pass':_0x3915e1[_0xdc3eed(0x180)],'server':_0x3915e1[_0xdc3eed(0x1b2)],'port':_0x3915e1[_0xdc3eed(0x174)]};return JSON['stringify'](_0x1a9531);}export async function updateWarpConfigs(_0xf76893,_0xb5e119){const _0x2edea0=a0_0x5261,_0x5d71fe=await Authenticate(_0xf76893,_0xb5e119);if(!_0x5d71fe)return new Response(_0x2edea0(0x1a9),{'status':0x191});if(_0xf76893[_0x2edea0(0x1a6)]==='POST')try{const {proxySettings:_0x2dca3f}=await getDataset(_0xf76893,_0xb5e119),{error:_0x408bf9}=await fetchWarpConfigs(_0xb5e119,_0x2dca3f);if(_0x408bf9)return new Response(_0x408bf9,{'status':0x190});return new Response('Warp\x20configs\x20updated\x20successfully',{'status':0xc8});}catch(_0x1d77a6){return console[_0x2edea0(0x1a1)](_0x1d77a6),new Response(_0x2edea0(0x1b7)+_0x1d77a6,{'status':0x1f4});}else return new Response(_0x2edea0(0x167),{'status':0x195});}function a0_0x2304(){const _0x4c6c81=['bypassRussia','warpFakeDNS','vless','fragmentIntervalMin','log','https://8.8.8.8/dns-query','blockAds','enableIPv6','bypassIran','method','vlessConfigs','An\x20error\x20occurred\x20while\x20getting\x20KV\x20-\x20','Unauthorized','7305543TjbcPv','ipv4','vlessTrojanFakeDNS','bpb','An\x20error\x20occurred\x20while\x20getting\x20Warp\x20configs\x20-\x20','tlshello','blockUDP443','bypass-china','host','hiddifyNoiseMode','stringify','noiseDelayMax','noiseCountMax','An\x20error\x20occurred\x20while\x20updating\x20Warp\x20configs!\x20-\x20','bypassChina','username','nikaNGNoiseMode','warpConfigs','trim','1124319kkSvcW','fragmentPackets','customCdnAddrs','An\x20error\x20occurred\x20while\x20getting\x20current\x20KV\x20settings\x20-\x20','4281654yQqABv','3900043dhZbfu','Unsupported\x20request','remoteDNS','100','search','split','outProxy','noiseCountMin','ports','get','panelVersion','2796704DCplCr','fragmentLengthMax','An\x20error\x20occurred\x20while\x20resolving\x20remote\x20DNS\x20server,\x20please\x20try\x20agian!\x20-\x20','port','customBlockRules','782308UmnZnK','961748KmBlhg','trojanConfigs','hostname','fragmentLengthMin','noiseSizeMin','engage.cloudflareclient.com:2408','forEach','lengthMin','blockPorn','password','warpEnableIPv6','bypassLAN','443','localDNS','json','customBypassRules','warpEndpoints','An\x20error\x20occurred\x20while\x20updating\x20KV\x20-\x20','false','formData','1vVdZzi','intervalMax','200','proxySettings','quic','customCdnSni','replaceAll','POST','bestWarpInterval','cleanIPs','proxyIP','5khgJXZ','warpPlusLicense','customCdnHost','noiseSizeMax','bestVLESSTrojanInterval','8.8.8.8','true'];a0_0x2304=function(){return _0x4c6c81;};return a0_0x2304();}