import{C as b}from"./Blur.71007c0c.js";import{C as M}from"./DisplayInfo.ba523f99.js";import{C as A}from"./SettingsRow.aa479f88.js";import{r as o,o as r,c as d,d as e,w as n,a as C,t as p,g as m,b as _,f as u}from"./vue.runtime.esm-bundler.0bc3eabf.js";import{_ as g}from"./_plugin-vue_export-helper.8823f7c1.js";import{R as k}from"./RequiredPlans.d0936efa.js";import{C as x}from"./Card.a96d9a32.js";import{C as P}from"./ProBadge.57eb3f6b.js";import{C as S}from"./Index.38afdc86.js";import{C as B}from"./Cta.bdeff3b6.js";import{A as K}from"./AddonConditions.e766d033.js";import"./default-i18n.3881921e.js";import"./constants.d0e2b74f.js";import"./links.d8ef3c22.js";import"./TruSeoHighlighter.f41d03f0.js";/* empty css                                              */import"./Row.7b93a0cf.js";/* empty css                                            */import"./Tooltip.eebec260.js";import"./CheckSolid.b8bab540.js";import"./index.888aa896.js";import"./Caret.11ded1aa.js";import"./Slide.c3dfb2b1.js";import"./addons.ecfd02c6.js";import"./upperFirst.d65414ba.js";import"./_stringToArray.a4422725.js";import"./isArrayLikeObject.10b615a9.js";import"./license.db04cc67.js";/* empty css                                              */import"./postContent.5b10ed83.js";import"./cleanForSlug.a67f7e84.js";import"./Ellipse.e18bc40f.js";import"./toFinite.c2274946.js";const I={components:{CoreBlur:b,CoreDisplayInfo:M,CoreSettingsRow:A},data(){return{strings:{description:this.$t.__("Integrating with Google Maps will allow your users to find exactly where your business is located. Our interactive maps let them see your Google Reviews and get directions directly from your site. Create multiple maps for use with multiple locations.",this.$td),apiKey:this.$t.__("API Key",this.$td),mapPreview:this.$t.__("Map Preview",this.$td)},displayInfo:{block:{copy:"",desc:""}}}}},G={class:"aioseo-maps-blur"},L={class:"aioseo-settings-row"};function U(s,h,f,y,t,$){const a=o("base-input"),i=o("core-settings-row"),c=o("core-display-info"),l=o("core-blur");return r(),d("div",G,[e(l,null,{default:n(()=>[C("div",L,p(t.strings.description),1),e(i,{name:t.strings.apiKey,align:""},{content:n(()=>[e(a,{size:"medium"})]),_:1},8,["name"]),e(c,{options:t.displayInfo},null,8,["options"]),e(i,{name:t.strings.mapPreview,align:""},{content:n(()=>[m(p(t.strings.description),1)]),_:1},8,["name"])]),_:1})])}const D=g(I,[["render",U]]);const R={components:{Blur:D,RequiredPlans:k,CoreCard:x,CoreProBadge:P,Cta:S},data(){return{features:[this.$t.__("Google Places Support",this.$td),this.$t.__("Google Reviews",this.$td),this.$t.__("Driving Directions",this.$td),this.$t.__("Multiple Locations",this.$td)],strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO Maps are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),ctaDescription:this.$t.__("Show your location to your visitors using an interactive Google Map. Create multiple maps for use with multiple locations.",this.$td)}}}},O={class:"aioseo-local-maps"};function E(s,h,f,y,t,$){const a=o("core-pro-badge"),i=o("blur"),c=o("required-plans"),l=o("cta"),v=o("core-card");return r(),d("div",O,[e(v,{slug:"localBusinessMapsApiKey",noSlide:!0},{header:n(()=>[C("span",null,p(t.strings.googleMapsApiKey),1),e(a)]),default:n(()=>[e(i),e(l,{"cta-link":s.$links.getPricingUrl("local-seo","local-seo-upsell","maps"),"button-text":t.strings.ctaButtonText,"learn-more-link":s.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":t.features},{"header-text":n(()=>[m(p(t.strings.ctaHeader),1)]),description:n(()=>[e(c,{addon:"aioseo-local-business"}),m(" "+p(t.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])]),_:1})])}const w=g(R,[["render",E]]),N={mixins:[K],components:{Maps:w,Cta:B,Lite:w},data(){return{addonSlug:"aioseo-local-business",strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td)}}}},V={class:"aioseo-maps"};function q(s,h,f,y,t,$){const a=o("maps",!0),i=o("cta"),c=o("lite");return r(),d("div",V,[s.shouldShowMain?(r(),_(a,{key:0})):u("",!0),s.shouldShowUpdate||s.shouldShowActivate?(r(),_(i,{key:1,"card-slug":"localBusinessMapsApiKey","header-text":t.strings.googleMapsApiKey,"align-top":""},null,8,["header-text"])):u("",!0),s.shouldShowLite?(r(),_(c,{key:2})):u("",!0)])}const vt=g(N,[["render",q]]);export{vt as default};
