// ==UserScript==
// @name         k-a-k-a-o-p-a-g-e
// @namespace    https://github.com/ogawaren3456/chay_xa_bay/raw/main/k-a-k-a-o-p-a-g-e.user.js
// @version      2024.12.09
// @description  down k-a-k-a-o-p-a-g-e
// @author       You
// @include      /^https:\/\/p[a@]ge\.k[a@]k[a@]o\.c[o0]m\/c[o0]nt[e3]nt\/.+?\/vi[e3]wer\//
// @icon         https://raw.githubusercontent.com/ogawaren3456/chay_xa_bay/main/k-a-k-a-o-p-a-g-e.png
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/@zip.js/zip.js@2.7.53/dist/zip.min.js
// @downloadURL  https://github.com/ogawaren3456/chay_xa_bay/raw/main/k-a-k-a-o-p-a-g-e.user.js
// @updateURL    https://github.com/ogawaren3456/chay_xa_bay/raw/main/k-a-k-a-o-p-a-g-e.meta.js
// ==/UserScript==

(function(_0x4436d9,_0x17cd90){const _0x4a2436=a0_0x40bb,_0x1eef52=_0x4436d9();while(!![]){try{const _0x29b2fd=-parseInt(_0x4a2436(0x217))/0x1+parseInt(_0x4a2436(0x213))/0x2*(parseInt(_0x4a2436(0x208))/0x3)+parseInt(_0x4a2436(0x1d1))/0x4+parseInt(_0x4a2436(0x201))/0x5*(parseInt(_0x4a2436(0x1cc))/0x6)+parseInt(_0x4a2436(0x21f))/0x7+-parseInt(_0x4a2436(0x1db))/0x8*(parseInt(_0x4a2436(0x1d3))/0x9)+-parseInt(_0x4a2436(0x1d4))/0xa*(parseInt(_0x4a2436(0x1f8))/0xb);if(_0x29b2fd===_0x17cd90)break;else _0x1eef52['push'](_0x1eef52['shift']());}catch(_0x54489b){_0x1eef52['push'](_0x1eef52['shift']());}}}(a0_0x5a1d,0x94bca));let downloading_current=0x0,downloading_total=0x0,image_blobs,zip_title='';function saveBlob(_0x539a02,_0x2d073d){const _0x4fc172=a0_0x40bb,_0x564648=window[_0x4fc172(0x1d2)][_0x4fc172(0x1f1)](_0x539a02),_0xdef96f=document[_0x4fc172(0x22a)]('a');_0xdef96f[_0x4fc172(0x229)]=_0x564648,_0xdef96f[_0x4fc172(0x22b)]=_0x2d073d,_0xdef96f[_0x4fc172(0x1da)]['display']=_0x4fc172(0x1fb),document[_0x4fc172(0x226)]['appendChild'](_0xdef96f),_0xdef96f[_0x4fc172(0x1d0)](),_0xdef96f[_0x4fc172(0x209)](),window[_0x4fc172(0x1d2)][_0x4fc172(0x212)](_0x564648),image_blobs=null;}function sleep(_0x3b7ec4){return new Promise(_0x406aec=>setTimeout(_0x406aec,_0x3b7ec4));}const load_image=_0x40f4a9=>new Promise((_0x4c8d2a,_0x5e4605)=>{const _0x31f5fb=a0_0x40bb,_0x313931=new Image();_0x313931[_0x31f5fb(0x1cb)](_0x31f5fb(0x203),()=>{_0x4c8d2a(_0x313931);}),_0x313931['addEventListener']('error',()=>{_0x5e4605(new Error('Failed\x20to\x20load\x20image'));}),_0x313931['src']=_0x40f4a9,_0x313931[_0x31f5fb(0x211)]=_0x31f5fb(0x20c);}),download_not_encrypted=async(_0x49cd36,_0x3985cb)=>{const _0x1e3be3=a0_0x40bb,_0x1655a5=await load_image(_0x49cd36['replace'](_0x1e3be3(0x21a),_0x1e3be3(0x1dc))),_0x1c7215=document['createElement'](_0x1e3be3(0x1c7));_0x1c7215['width']=_0x1655a5[_0x1e3be3(0x1fd)],_0x1c7215[_0x1e3be3(0x1c5)]=_0x1655a5['naturalHeight'];const _0x117af7=_0x1c7215[_0x1e3be3(0x1e3)]('2d');_0x117af7[_0x1e3be3(0x1f2)](_0x1655a5,0x0,0x0),_0x1c7215[_0x1e3be3(0x20a)](_0x1bf026=>{const _0x316763=_0x1e3be3;let _0x447355=(''+_0x3985cb)[_0x316763(0x218)](0x3,'0')+'.jpg';image_blobs[_0x316763(0x20f)]({'name':_0x447355,'blob':_0x1bf026}),downloading_current+=0x1,downloading_current===downloading_total&&off_heartbeat_css(),update_status();},'image/jpeg',0.99);};function update_status(){const _0x509f32=a0_0x40bb;document[_0x509f32(0x20b)](_0x509f32(0x1c9))['style'][_0x509f32(0x1e8)]=_0x509f32(0x1e1),document[_0x509f32(0x20b)]('.status-num')[_0x509f32(0x1da)][_0x509f32(0x1f4)]=_0x509f32(0x1ea),document[_0x509f32(0x20b)](_0x509f32(0x1c9))['innerHTML']=downloading_current+_0x509f32(0x1fc)+downloading_total;}function create_status_box(){const _0x3cefa1=a0_0x40bb;let _0x3c2d1c=document[_0x3cefa1(0x22a)](_0x3cefa1(0x1ec));return _0x3c2d1c[_0x3cefa1(0x1f7)]=_0x3cefa1(0x1f5),_0x3c2d1c[_0x3cefa1(0x1e7)]=downloading_current+_0x3cefa1(0x1fc)+downloading_total,_0x3c2d1c;}function a0_0x40bb(_0x294921,_0x2219db){const _0x5a1d7d=a0_0x5a1d();return a0_0x40bb=function(_0x40bb47,_0x149c00){_0x40bb47=_0x40bb47-0x1c4;let _0x58c012=_0x5a1d7d[_0x40bb47];return _0x58c012;},a0_0x40bb(_0x294921,_0x2219db);}function create_download_icon(){const _0x2b32a6=a0_0x40bb;let _0x3ac4f3=document[_0x2b32a6(0x22a)](_0x2b32a6(0x1ec)),_0x4877c4=document[_0x2b32a6(0x22a)](_0x2b32a6(0x20e));_0x4877c4[_0x2b32a6(0x1f7)]='tai-ve',_0x4877c4[_0x2b32a6(0x221)](_0x2b32a6(0x1d9),_0x2b32a6(0x202)),_0x4877c4['style'][_0x2b32a6(0x214)]=_0x2b32a6(0x205),_0x4877c4[_0x2b32a6(0x1da)]['cursor']=_0x2b32a6(0x1de),_0x3ac4f3[_0x2b32a6(0x1f0)](_0x4877c4);let _0x4c0fca=document[_0x2b32a6(0x22a)](_0x2b32a6(0x207));_0x4c0fca[_0x2b32a6(0x1ef)]=_0x2b32a6(0x225),_0x4c0fca[_0x2b32a6(0x229)]='https://fonts.googleapis.com/css2?family=Acme&display=swap',document[_0x2b32a6(0x1ee)](_0x2b32a6(0x1eb))[0x0][_0x2b32a6(0x1f0)](_0x4c0fca);let _0x4cbd8e=document[_0x2b32a6(0x22a)](_0x2b32a6(0x1ec));_0x4cbd8e[_0x2b32a6(0x1f7)]='status',_0x4cbd8e[_0x2b32a6(0x1da)]['display']='flex',_0x4cbd8e[_0x2b32a6(0x1da)][_0x2b32a6(0x1e9)]=_0x2b32a6(0x1ea),_0x4cbd8e[_0x2b32a6(0x1da)]['alignItems']=_0x2b32a6(0x1ea),_0x4cbd8e['style'][_0x2b32a6(0x210)]=_0x2b32a6(0x220),_0x4cbd8e[_0x2b32a6(0x1da)][_0x2b32a6(0x1c6)]=_0x2b32a6(0x1f3),_0x4cbd8e['style'][_0x2b32a6(0x224)]=_0x2b32a6(0x21e),_0x4cbd8e[_0x2b32a6(0x1da)][_0x2b32a6(0x215)]=_0x2b32a6(0x216),_0x4cbd8e[_0x2b32a6(0x1da)][_0x2b32a6(0x223)]=_0x2b32a6(0x1ed),_0x4cbd8e['style'][_0x2b32a6(0x1e0)]=_0x2b32a6(0x228);let _0x443cf2=create_status_box();const _0x3a0582=document[_0x2b32a6(0x22a)](_0x2b32a6(0x1da));_0x3a0582[_0x2b32a6(0x1e7)]=_0x2b32a6(0x1fe),document[_0x2b32a6(0x1eb)][_0x2b32a6(0x1f0)](_0x3a0582),_0x4cbd8e[_0x2b32a6(0x1f0)](_0x3ac4f3),_0x4cbd8e[_0x2b32a6(0x1f0)](_0x443cf2);let _0x269587=document[_0x2b32a6(0x20b)](_0x2b32a6(0x226)),_0x53c4b4=_0x269587[_0x2b32a6(0x1e4)];return _0x269587['insertBefore'](_0x4cbd8e,_0x53c4b4),_0x4cbd8e;}function a0_0x5a1d(){const _0x3d3dc8=['src','style','32JrKrYR','dn-img-page.','application/zip','pointer','splice','transform','flex',',\x22productId\x22:','getContext','firstChild','secureUrl','map','textContent','display','justifyContent','center','head','div','50vw','getElementsByTagName','rel','appendChild','createObjectURL','drawImage','absolute','alignItems','status-num','name','className','1254BINsNs','application/json','ZipWriter','none','\x20/\x20','naturalWidth','\x0a\x09.status-num\x20{\x0a\x09\x09font-family:\x20\x27Acme\x27,\x20sans-serif\x20!important;\x0a\x09\x09font-size:\x203rem;\x0a\x09\x09color:\x20#FD7377;\x0a\x09\x09-webkit-text-stroke:\x201px\x20#C62428;\x0a\x09\x09border:\x200.2rem\x20solid\x20#167975;\x0a\x09\x09border-radius:\x201rem;\x0a\x09\x09padding:\x200\x202rem;\x0a\x09\x09background-color:\x20#F9FDFD;\x0a\x09\x09box-shadow:\x200.25rem\x200.4rem\x20#2E8B87;\x0a\x09\x09min-height:\x204rem;\x0a\x09\x09display:\x20none;\x0a\x09}\x0a\x09','match','close','4051900cAIRWY','https://github.com/NAgEustiCa/1_con_kien_2_con_kien/raw/main/tai_icon.png','load','location','3rem','POST','link','3297DDMnbR','remove','toBlob','querySelector','Anonymous','#heartbeat','img','push','gap','crossOrigin','revokeObjectURL','626pIqdcr','width','top','0.5rem','736057WMFUQa','padStart','join','page-edge.','replace','heartbeat','parseInt','10000','4142873WdGFdD','1.5rem','setAttribute','add','left','zIndex','stylesheet','body','data','translate(-50%)','href','createElement','download','item','height','position','canvas','trim','.status-num','viewerInfo','addEventListener','6cEWruD','https://page.kakao.com/','include','forEach','click','3249388tmzUeo','URL','2326383TtATww','15730RQVRTq','length','json','all','.zip'];a0_0x5a1d=function(){return _0x3d3dc8;};return a0_0x5a1d();}const throttlePromises=async(_0x51ea8d,_0x2c3035)=>{const _0x50e4d8=a0_0x40bb;while(_0x51ea8d[_0x50e4d8(0x1d5)]>0x0){await Promise[_0x50e4d8(0x1d7)](_0x51ea8d[_0x50e4d8(0x1df)](0x0,_0x2c3035)[_0x50e4d8(0x1e6)](_0x3fb986=>_0x3fb986())),await sleep(0xc8);}},on_heartbeat_css=()=>{const _0x846ac=a0_0x40bb;let _0x2cea91=document[_0x846ac(0x20b)](_0x846ac(0x20d));!_0x2cea91&&(_0x2cea91=document[_0x846ac(0x22a)](_0x846ac(0x1da)),_0x2cea91[_0x846ac(0x221)]('id',_0x846ac(0x21c)),document['head'][_0x846ac(0x1f0)](_0x2cea91)),_0x2cea91['textContent']='\x0a\x09.tai-ve\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20heartbeat\x202s\x20infinite;\x20/*\x20Apply\x20the\x20heartbeat\x20animation\x20*/\x0a\x09\x09transform-origin:\x20center;\x0a\x09}\x0a\x0a\x09@keyframes\x20heartbeat\x20{\x0a\x09\x090%\x20{\x0a\x09\x09\x09transform:\x20scale(1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20/*\x20Start\x20with\x20full\x20opacity\x20*/\x0a\x09\x09}\x0a\x09\x0925%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.7;\x20/*\x20Fade\x20out\x20slightly\x20at\x2025%\x20of\x20the\x20animation\x20*/\x0a\x09\x09}\x0a\x09\x0950%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1.2);\x20/*\x20Scale\x20up\x20at\x2050%\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20/*\x20Return\x20to\x20full\x20opacity\x20*/\x0a\x09\x09}\x0a\x09\x0975%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.7;\x20/*\x20Fade\x20out\x20slightly\x20at\x2075%\x20*/\x0a\x09\x09}\x0a\x09\x09100%\x20{\x0a\x09\x09\x09transform:\x20scale(1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20/*\x20End\x20with\x20full\x20opacity\x20*/\x0a\x09\x09}\x0a\x09}\x0a\x09';},off_heartbeat_css=()=>{const _0x15bdee=a0_0x40bb,_0xa47227=document['querySelector'](_0x15bdee(0x20d));_0xa47227[_0x15bdee(0x1e7)]='';};((async()=>{const _0x21f71d=a0_0x40bb,_0x400df6=window[_0x21f71d(0x204)]['href'],_0x164177=_0x400df6[_0x21f71d(0x1ff)](/\/content\/(\d+)\/viewer\/(\d+)/),_0x34eb76=Number[_0x21f71d(0x21d)](_0x164177[0x1],0xa),_0x150a53=Number[_0x21f71d(0x21d)](_0x164177[0x2],0xa),_0x58b279=await fetch(['h','t','t','p','s',':','/','/','b','f','f','-','p','a','g','e','.','k','a','k','a','o','.','c','o','m','/','g','r','a','p','h','q','l'][_0x21f71d(0x219)](''),{'method':_0x21f71d(0x206),'credentials':_0x21f71d(0x1ce),'headers':{'content-type':_0x21f71d(0x1f9),'Referer':_0x21f71d(0x1cd)},'body':'{\x22query\x22:\x22\x5cn\x20\x20\x20\x20query\x20viewerInfo($seriesId:\x20Long!,\x20$productId:\x20Long!)\x20{\x5cn\x20\x20viewerInfo(seriesId:\x20$seriesId,\x20productId:\x20$productId)\x20{\x5cn\x20\x20\x20\x20item\x20{\x5cn\x20\x20\x20\x20\x20\x20...SingleFragment\x5cn\x20\x20\x20\x20}\x5cn\x20\x20\x20\x20seriesItem\x20{\x5cn\x20\x20\x20\x20\x20\x20...SeriesFragment\x5cn\x20\x20\x20\x20}\x5cn\x20\x20\x20\x20prevItem\x20{\x5cn\x20\x20\x20\x20\x20\x20...NearItemFragment\x5cn\x20\x20\x20\x20}\x5cn\x20\x20\x20\x20nextItem\x20{\x5cn\x20\x20\x20\x20\x20\x20...NearItemFragment\x5cn\x20\x20\x20\x20}\x5cn\x20\x20\x20\x20viewerData\x20{\x5cn\x20\x20\x20\x20\x20\x20...TextViewerData\x5cn\x20\x20\x20\x20\x20\x20...TalkViewerData\x5cn\x20\x20\x20\x20\x20\x20...ImageViewerData\x5cn\x20\x20\x20\x20\x20\x20...VodViewerData\x5cn\x20\x20\x20\x20}\x5cn\x20\x20\x20\x20displayAd\x20{\x5cn\x20\x20\x20\x20\x20\x20...DisplayAd\x5cn\x20\x20\x20\x20}\x5cn\x20\x20}\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x20\x20\x20\x20fragment\x20SingleFragment\x20on\x20Single\x20{\x5cn\x20\x20id\x5cn\x20\x20productId\x5cn\x20\x20seriesId\x5cn\x20\x20title\x5cn\x20\x20thumbnail\x5cn\x20\x20badge\x5cn\x20\x20isFree\x5cn\x20\x20ageGrade\x5cn\x20\x20state\x5cn\x20\x20slideType\x5cn\x20\x20lastReleasedDate\x5cn\x20\x20size\x5cn\x20\x20pageCount\x5cn\x20\x20isHidden\x5cn\x20\x20remainText\x5cn\x20\x20isWaitfreeBlocked\x5cn\x20\x20saleState\x5cn\x20\x20series\x20{\x5cn\x20\x20\x20\x20...SeriesFragment\x5cn\x20\x20}\x5cn\x20\x20serviceProperty\x20{\x5cn\x20\x20\x20\x20...ServicePropertyFragment\x5cn\x20\x20}\x5cn\x20\x20operatorProperty\x20{\x5cn\x20\x20\x20\x20...OperatorPropertyFragment\x5cn\x20\x20}\x5cn\x20\x20assetProperty\x20{\x5cn\x20\x20\x20\x20...AssetPropertyFragment\x5cn\x20\x20}\x5cn\x20\x20discountRate\x5cn\x20\x20discountRateText\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20SeriesFragment\x20on\x20Series\x20{\x5cn\x20\x20id\x5cn\x20\x20seriesId\x5cn\x20\x20title\x5cn\x20\x20thumbnail\x5cn\x20\x20landThumbnail\x5cn\x20\x20categoryUid\x5cn\x20\x20category\x5cn\x20\x20categoryType\x5cn\x20\x20subcategoryUid\x5cn\x20\x20subcategory\x5cn\x20\x20badge\x5cn\x20\x20isAllFree\x5cn\x20\x20isWaitfree\x5cn\x20\x20ageGrade\x5cn\x20\x20state\x5cn\x20\x20onIssue\x5cn\x20\x20authors\x5cn\x20\x20description\x5cn\x20\x20pubPeriod\x5cn\x20\x20freeSlideCount\x5cn\x20\x20lastSlideAddedDate\x5cn\x20\x20waitfreeBlockCount\x5cn\x20\x20waitfreePeriodByMinute\x5cn\x20\x20bm\x5cn\x20\x20saleState\x5cn\x20\x20startSaleDt\x5cn\x20\x20saleMethod\x5cn\x20\x20discountRate\x5cn\x20\x20discountRateText\x5cn\x20\x20serviceProperty\x20{\x5cn\x20\x20\x20\x20...ServicePropertyFragment\x5cn\x20\x20}\x5cn\x20\x20operatorProperty\x20{\x5cn\x20\x20\x20\x20...OperatorPropertyFragment\x5cn\x20\x20}\x5cn\x20\x20assetProperty\x20{\x5cn\x20\x20\x20\x20...AssetPropertyFragment\x5cn\x20\x20}\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20ServicePropertyFragment\x20on\x20ServiceProperty\x20{\x5cn\x20\x20viewCount\x5cn\x20\x20readCount\x5cn\x20\x20ratingCount\x5cn\x20\x20ratingSum\x5cn\x20\x20commentCount\x5cn\x20\x20pageContinue\x20{\x5cn\x20\x20\x20\x20...ContinueInfoFragment\x5cn\x20\x20}\x5cn\x20\x20todayGift\x20{\x5cn\x20\x20\x20\x20...TodayGift\x5cn\x20\x20}\x5cn\x20\x20preview\x20{\x5cn\x20\x20\x20\x20...PreviewFragment\x5cn\x20\x20\x20\x20...PreviewFragment\x5cn\x20\x20}\x5cn\x20\x20waitfreeTicket\x20{\x5cn\x20\x20\x20\x20...WaitfreeTicketFragment\x5cn\x20\x20}\x5cn\x20\x20isAlarmOn\x5cn\x20\x20isLikeOn\x5cn\x20\x20ticketCount\x5cn\x20\x20purchasedDate\x5cn\x20\x20lastViewInfo\x20{\x5cn\x20\x20\x20\x20...LastViewInfoFragment\x5cn\x20\x20}\x5cn\x20\x20purchaseInfo\x20{\x5cn\x20\x20\x20\x20...PurchaseInfoFragment\x5cn\x20\x20}\x5cn\x20\x20preview\x20{\x5cn\x20\x20\x20\x20...PreviewFragment\x5cn\x20\x20}\x5cn\x20\x20ticketInfo\x20{\x5cn\x20\x20\x20\x20price\x5cn\x20\x20\x20\x20discountPrice\x5cn\x20\x20\x20\x20ticketType\x5cn\x20\x20}\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20ContinueInfoFragment\x20on\x20ContinueInfo\x20{\x5cn\x20\x20title\x5cn\x20\x20isFree\x5cn\x20\x20productId\x5cn\x20\x20lastReadProductId\x5cn\x20\x20scheme\x5cn\x20\x20continueProductType\x5cn\x20\x20hasNewSingle\x5cn\x20\x20hasUnreadSingle\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20TodayGift\x20on\x20TodayGift\x20{\x5cn\x20\x20id\x5cn\x20\x20uid\x5cn\x20\x20ticketType\x5cn\x20\x20ticketKind\x5cn\x20\x20ticketCount\x5cn\x20\x20ticketExpireAt\x5cn\x20\x20ticketExpiredText\x5cn\x20\x20isReceived\x5cn\x20\x20seriesId\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20PreviewFragment\x20on\x20Preview\x20{\x5cn\x20\x20item\x20{\x5cn\x20\x20\x20\x20...PreviewSingleFragment\x5cn\x20\x20}\x5cn\x20\x20nextItem\x20{\x5cn\x20\x20\x20\x20...PreviewSingleFragment\x5cn\x20\x20}\x5cn\x20\x20usingScroll\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20PreviewSingleFragment\x20on\x20Single\x20{\x5cn\x20\x20id\x5cn\x20\x20productId\x5cn\x20\x20seriesId\x5cn\x20\x20title\x5cn\x20\x20thumbnail\x5cn\x20\x20badge\x5cn\x20\x20isFree\x5cn\x20\x20ageGrade\x5cn\x20\x20state\x5cn\x20\x20slideType\x5cn\x20\x20lastReleasedDate\x5cn\x20\x20size\x5cn\x20\x20pageCount\x5cn\x20\x20isHidden\x5cn\x20\x20remainText\x5cn\x20\x20isWaitfreeBlocked\x5cn\x20\x20saleState\x5cn\x20\x20operatorProperty\x20{\x5cn\x20\x20\x20\x20...OperatorPropertyFragment\x5cn\x20\x20}\x5cn\x20\x20assetProperty\x20{\x5cn\x20\x20\x20\x20...AssetPropertyFragment\x5cn\x20\x20}\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20OperatorPropertyFragment\x20on\x20OperatorProperty\x20{\x5cn\x20\x20thumbnail\x5cn\x20\x20copy\x5cn\x20\x20helixImpId\x5cn\x20\x20isTextViewer\x5cn\x20\x20selfCensorship\x5cn\x20\x20cashInfo\x20{\x5cn\x20\x20\x20\x20discountRate\x5cn\x20\x20\x20\x20setDiscountRate\x5cn\x20\x20}\x5cn\x20\x20ticketInfo\x20{\x5cn\x20\x20\x20\x20price\x5cn\x20\x20\x20\x20discountPrice\x5cn\x20\x20\x20\x20ticketType\x5cn\x20\x20}\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20AssetPropertyFragment\x20on\x20AssetProperty\x20{\x5cn\x20\x20bannerImage\x5cn\x20\x20cardImage\x5cn\x20\x20cardTextImage\x5cn\x20\x20cleanImage\x5cn\x20\x20ipxVideo\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20WaitfreeTicketFragment\x20on\x20WaitfreeTicket\x20{\x5cn\x20\x20chargedPeriod\x5cn\x20\x20chargedCount\x5cn\x20\x20chargedAt\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20LastViewInfoFragment\x20on\x20LastViewInfo\x20{\x5cn\x20\x20isDone\x5cn\x20\x20lastViewDate\x5cn\x20\x20rate\x5cn\x20\x20spineIndex\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20PurchaseInfoFragment\x20on\x20PurchaseInfo\x20{\x5cn\x20\x20purchaseType\x5cn\x20\x20rentExpireDate\x5cn\x20\x20expired\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20NearItemFragment\x20on\x20NearItem\x20{\x5cn\x20\x20productId\x5cn\x20\x20slideType\x5cn\x20\x20ageGrade\x5cn\x20\x20isFree\x5cn\x20\x20title\x5cn\x20\x20thumbnail\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20TextViewerData\x20on\x20TextViewerData\x20{\x5cn\x20\x20type\x5cn\x20\x20atsServerUrl\x5cn\x20\x20metaSecureUrl\x5cn\x20\x20contentsList\x20{\x5cn\x20\x20\x20\x20chapterId\x5cn\x20\x20\x20\x20contentId\x5cn\x20\x20\x20\x20secureUrl\x5cn\x20\x20}\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20TalkViewerData\x20on\x20TalkViewerData\x20{\x5cn\x20\x20type\x5cn\x20\x20talkDownloadData\x20{\x5cn\x20\x20\x20\x20dec\x5cn\x20\x20\x20\x20host\x5cn\x20\x20\x20\x20path\x5cn\x20\x20\x20\x20talkViewerType\x5cn\x20\x20}\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20ImageViewerData\x20on\x20ImageViewerData\x20{\x5cn\x20\x20type\x5cn\x20\x20imageDownloadData\x20{\x5cn\x20\x20\x20\x20...ImageDownloadData\x5cn\x20\x20}\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20ImageDownloadData\x20on\x20ImageDownloadData\x20{\x5cn\x20\x20files\x20{\x5cn\x20\x20\x20\x20...ImageDownloadFile\x5cn\x20\x20}\x5cn\x20\x20totalCount\x5cn\x20\x20totalSize\x5cn\x20\x20viewDirection\x5cn\x20\x20gapBetweenImages\x5cn\x20\x20readType\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20ImageDownloadFile\x20on\x20ImageDownloadFile\x20{\x5cn\x20\x20no\x5cn\x20\x20size\x5cn\x20\x20secureUrl\x5cn\x20\x20width\x5cn\x20\x20height\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20VodViewerData\x20on\x20VodViewerData\x20{\x5cn\x20\x20type\x5cn\x20\x20vodDownloadData\x20{\x5cn\x20\x20\x20\x20contentId\x5cn\x20\x20\x20\x20drmType\x5cn\x20\x20\x20\x20endpointUrl\x5cn\x20\x20\x20\x20width\x5cn\x20\x20\x20\x20height\x5cn\x20\x20\x20\x20duration\x5cn\x20\x20}\x5cn}\x5cn\x20\x20\x20\x20\x5cn\x5cn\x20\x20\x20\x20fragment\x20DisplayAd\x20on\x20DisplayAd\x20{\x5cn\x20\x20sectionUid\x5cn\x20\x20bannerUid\x5cn\x20\x20treviUid\x5cn\x20\x20momentUid\x5cn}\x5cn\x20\x20\x20\x20\x22,\x22variables\x22:{\x22seriesId\x22:'+_0x34eb76+_0x21f71d(0x1e2)+_0x150a53+'}}'}),_0x42bf67=await _0x58b279[_0x21f71d(0x1d6)](),{title:_0x33f57a}=_0x42bf67[_0x21f71d(0x227)][_0x21f71d(0x1ca)][_0x21f71d(0x1c4)];let _0x2bb931;_0x33f57a?_0x2bb931=decodeURIComponent(_0x33f57a)[_0x21f71d(0x1c8)]()[_0x21f71d(0x21b)]('.',''):_0x2bb931=['k','a','k','a','o','-','p','a','g','e'][_0x21f71d(0x219)]('');const {files:_0x269892}=_0x42bf67[_0x21f71d(0x227)][_0x21f71d(0x1ca)]['viewerData']['imageDownloadData'];if(_0x269892['length']>0x0){downloading_total=_0x269892[_0x21f71d(0x1d5)];const _0x1bd604=create_download_icon();_0x1bd604[_0x21f71d(0x1cb)](_0x21f71d(0x1d0),async()=>{const _0x330b4a=_0x21f71d;on_heartbeat_css(),downloading_current=0x0,image_blobs=[];const _0x148d7a=_0x269892[_0x330b4a(0x1e6)]((_0x422d6e,_0x18cb65)=>()=>download_not_encrypted(_0x422d6e[_0x330b4a(0x1e5)],_0x422d6e['no']));await throttlePromises(_0x148d7a,0x4);const _0x1407ac=new zip['BlobWriter'](_0x330b4a(0x1dd)),_0x20bb01=new zip[(_0x330b4a(0x1fa))](_0x1407ac);image_blobs[_0x330b4a(0x1cf)](async _0x5a9526=>{const _0x1a12df=_0x330b4a;await _0x20bb01[_0x1a12df(0x222)](_0x5a9526[_0x1a12df(0x1f6)],new zip['BlobReader'](_0x5a9526['blob']));});const _0x232f76=await _0x20bb01[_0x330b4a(0x200)]();saveBlob(_0x232f76,_0x2bb931+_0x330b4a(0x1d8));});}})());