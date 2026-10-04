(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48550,e=>{"use strict";var t=e.i(91398);let i=(0,e.i(91788).createContext)({articles:[]});e.s(["RelatedArticlesContextProvider",0,({articles:e,children:a})=>(0,t.jsx)(i.Provider,{value:{articles:e},children:a}),"default",0,i])},12055,e=>{"use strict";var t=e.i(91398);e.i(7424);var i=e.i(56133);e.i(70261);var a=e.i(71614);e.i(65945),e.i(79852),e.i(4961);var r=e.i(93107),s=e.i(82524),l=e.i(48550);e.i(70326);var n=e.i(3597);e.i(47104);var o=e.i(29373),c=e.i(8381),u=e.i(36306),d=e.i(84150);e.s(["__N_SSG",0,!0,"default",0,function({story:{pageData:e,siteConfig:h},relatedArticles:m}){let g=(0,r.useStoryblokBridgeInit)(e),f=(0,r.useStoryblokBridgeInit)(h);(0,s.useRegisterPageViewData)(e);let y=g.content.metatags?.title??"";if((0,u.default)(y,"ask-feeld"),!g.content||!f.content)return null;let{title:p="",subTitle:w="",metatags:v}=g.content,T=(0,d.resolveMetatags)(v,{title:p,description:w});return(0,t.jsx)(n.SiteConfigContextProvider,{siteConfig:f.content,children:(0,t.jsx)(c.default,{theme:o.Theme.MAGAZINE,children:(0,t.jsx)(a.Layout,{siteConfig:f.content,metatags:T,children:(0,t.jsx)(l.RelatedArticlesContextProvider,{articles:m,children:(0,t.jsx)(i.StoryblokComponent,{blok:g.content})})})})})}],12055)},46988,(e,t,i)=>{let a="/ask-feeld/how-to/[slug]";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(12055)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})},65945,79852,e=>{"use strict";var t=e.i(10257),i=e.i(95783);let a=async(e,a)=>new Promise((r,s)=>{(async()=>{let l=(0,i.getQueryWithSiteConfigQuery)(`ArticleItem(id: "${a?`${a}/${e}`:e}") {
        slug
        id
        content {
          content
          title
          author {
            fullSlug
            name
          }
          authorByText
          category {
            name
            fullSlug
          }
          subcategory {
            name
            fullSlug
          }
          bodyText
          component
          heroImage {
            id
            filename
            alt
            name
            title
          }
          hideHeroImage
          hideBreadcrumbs
          forceMobileHeroWidth
          imageCaption
          publishDate
          # FEELD-15527 — the article's own AFM issue, read by useArticleAfmIssueTheme so the
          # CTA banner inside an article follows THAT article rather than the sitewide switch.
          # This selection set is a hand-maintained allowlist: omit a field here and it arrives
          # undefined at runtime with no error anywhere, which is what made PR #854 ship and do
          # nothing. Comments here use #, not //: a // returns a 500 and takes every page down.
          #
          # A SELECTION SET is required: issue resolves to a Story, not a scalar, so selecting it
          # bare fails the whole query with selectionMismatch and takes every article page down.
          # Verified against the live API, which is the only way to find this.
          #
          # And NO BACKTICKS in these comments, for the same reason as the // rule above: this is
          # a JS template literal, so a backtick terminates it and breaks the file. GraphQL would
          # not care; TypeScript does. Cost a red tsc while writing this very comment.
          issue {
            uuid
            slug
          }
          relatedContentTitle
          subTitle
          theme
          relatedArticleTags
          metatags
          footerImage {
            id
            filename
            alt
            name
            title
          }
          footerText
          _uid
          _editable
        }
      }`,a);try{let{ArticleItem:e,SiteconfigItem:i}=await (0,t.queryStoryblok)(l);r({ArticleItem:e,SiteconfigItem:i})}catch(e){s(e)}})()});e.s(["getArticleData",0,a],65945);let r=async(e,i)=>new Promise((a,r)=>{(async()=>{let s=`{
      ArticleItems(filter_query_v2: {relatedArticleTags: {in_array: "${i}"}} excluding_ids: "${e}", per_page: 3) {
        items {
          content {
            _uid
            author {
              name
              fullSlug
            }
            authorByText
            subTitle
            category {
              name
              fullSlug
            }
            subcategory {
              name
              fullSlug
            }
            title
            publishDate
            heroImage {
              filename
              alt
            }
            isHidden
            relatedArticleTags
          }
          full_slug
        }
      }
    }
   `;try{let{ArticleItems:e}=await (0,t.queryStoryblok)(s);a(e.items.filter(({content:{isHidden:e=!1}})=>!e))}catch(e){r(e)}})()});e.s(["getRelatedArticles",0,r],79852)},84150,e=>{"use strict";e.s(["resolveMetatags",0,(e,t)=>({...e,title:e?.title||t.title,description:e?.description||t.description})])},18140,e=>{e.v(t=>Promise.all(["static/chunks/03q99l39y3lnx.js"].map(t=>e.l(t))).then(()=>t(42669)))},77790,e=>{e.v(t=>Promise.all(["static/chunks/12bolkp0vldf9.js"].map(t=>e.l(t))).then(()=>t(72537)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0h0r_q6xa9qr_.js"].map(t=>e.l(t))).then(()=>t(79466)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/2n_ornp2pwzl0.js"].map(t=>e.l(t))).then(()=>t(93594)))}]);