(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,37164,t=>{"use strict";var e=t.i(91398);t.i(7424);var i=t.i(56133);t.i(70261);var s=t.i(71614);t.i(4961),t.i(61664);var n=t.i(93107),o=t.i(82524);t.i(70326);var a=t.i(3597);t.i(47104);var l=t.i(29373),r=t.i(8381),c=t.i(36306),u=t.i(84150);t.s(["__N_SSG",0,!0,"default",0,function({story:{pageData:t,siteConfig:d}}){let p=(0,n.useStoryblokBridgeInit)(t),h=(0,n.useStoryblokBridgeInit)(d);(0,o.useRegisterPageViewData)(t);let g=p.content.metatags?.title??"";if((0,c.default)(g,"press"),!p.content||!h.content)return null;let{name:m="",description:_="",metatags:v}=p.content,T=(0,u.resolveMetatags)(v,{title:m,description:_});return(0,e.jsx)(a.SiteConfigContextProvider,{siteConfig:h.content,children:(0,e.jsx)(r.default,{theme:l.Theme.LIGHT,children:(0,e.jsx)(s.Layout,{siteConfig:h.content,metatags:T,children:(0,e.jsx)(i.StoryblokComponent,{blok:p.content})})})})}],37164)},52504,(t,e,i)=>{let s="/press/releases/[slug]";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>t.r(37164)]),e.hot&&e.hot.dispose(function(){window.__NEXT_P.push([s])})},61664,t=>{"use strict";var e=t.i(10257),i=t.i(95783);let s=async(t,s)=>new Promise((n,o)=>{(async()=>{let a=(0,i.getQueryWithSiteConfigQuery)(`PressreleaseItem(id: "${s?`${s}/${t}`:t}") {
        slug
        id
        content {
          component
          content
          title
          introText
          publishedDate
          publishedDateText
          updatedDate
          updatedDateText
          embargoedUntilText
          embargoedUntilDate
          socialLinks
          pressContactTitle
          pressContacts
          relatedContentTitle
          _uid
          _editable
        }
      }`,s);try{let{PressreleaseItem:t,SiteconfigItem:i}=await (0,e.queryStoryblok)(a);n({PressreleaseItem:t,SiteconfigItem:i})}catch(t){o(t)}})()});t.s(["getPressReleaseData",0,s])},84150,t=>{"use strict";t.s(["resolveMetatags",0,(t,e)=>({...t,title:t?.title||e.title,description:t?.description||e.description})])},18140,t=>{t.v(e=>Promise.all(["static/chunks/03q99l39y3lnx.js"].map(e=>t.l(e))).then(()=>e(42669)))},77790,t=>{t.v(e=>Promise.all(["static/chunks/12bolkp0vldf9.js"].map(e=>t.l(e))).then(()=>e(72537)))},28805,t=>{t.v(e=>Promise.all(["static/chunks/0h0r_q6xa9qr_.js"].map(e=>t.l(e))).then(()=>e(79466)))},48761,t=>{t.v(e=>Promise.all(["static/chunks/2n_ornp2pwzl0.js"].map(e=>t.l(e))).then(()=>e(93594)))}]);