import{k as d}from"./links.d8ef3c22.js";import{a as l}from"./addons.ecfd02c6.js";import{o,c as n,r as f,b as _,w as h,D as g}from"./vue.runtime.esm-bundler.0bc3eabf.js";import{_ as e}from"./_plugin-vue_export-helper.8823f7c1.js";import"./index.888aa896.js";import"./Caret.11ded1aa.js";/* empty css                                            *//* empty css                                              */import"./default-i18n.3881921e.js";import"./constants.d0e2b74f.js";import{R as x,a as $}from"./RequiresUpdate.ca3ecb6c.js";import"./TruSeoHighlighter.f41d03f0.js";/* empty css                                              */import{C as v}from"./Index.c396e6bb.js";import b from"./Redirects.65c9792e.js";import"./isArrayLikeObject.10b615a9.js";import"./upperFirst.d65414ba.js";import"./_stringToArray.a4422725.js";import"./RequiresUpdate.a2810a8c.js";import"./postContent.5b10ed83.js";import"./cleanForSlug.a67f7e84.js";import"./Ellipse.e18bc40f.js";import"./toFinite.c2274946.js";import"./license.db04cc67.js";import"./allowed.a855ba11.js";/* empty css             */import"./params.f0608262.js";import"./SaveChanges.5260e1c7.js";import"./Header.06623042.js";import"./LicenseKeyBar.aa0cbefb.js";import"./LogoGear.5cfaa040.js";import"./AnimatedNumber.9020942d.js";import"./numbers.c7cb4085.js";import"./Logo.733f1a87.js";import"./Support.dd2dc8c2.js";import"./Tabs.17b2f5c8.js";import"./TruSeoScore.29220195.js";import"./Information.0dce27f3.js";import"./Slide.c3dfb2b1.js";import"./Date.75340b8b.js";import"./Exclamation.0dd78a69.js";import"./Url.831daf51.js";import"./Gear.93d6eb68.js";import"./Redirects.27714aa7.js";import"./Index.f9e0a853.js";import"./JsonValues.870a4901.js";import"./strings.01407ca7.js";import"./isString.395b35ce.js";import"./ProBadge.57eb3f6b.js";import"./External.88ec9b3a.js";import"./Checkbox.ec923721.js";import"./Checkmark.edd0f833.js";import"./Row.7b93a0cf.js";import"./Tooltip.eebec260.js";import"./Plus.b9ec5db4.js";import"./Blur.71007c0c.js";import"./Card.a96d9a32.js";import"./Table.4899793d.js";import"./Index.38afdc86.js";import"./RequiredPlans.d0936efa.js";import"./AddonConditions.e766d033.js";const y={};function S(t,r){return o(),n("div")}const R=e(y,[["render",S]]),w={};function A(t,r){return o(),n("div")}const B=e(w,[["render",A]]),C={};function k(t,r){return o(),n("div")}const E=e(C,[["render",k]]),L={};function T(t,r){return o(),n("div")}const M=e(L,[["render",T]]),U={};function q(t,r){return o(),n("div")}const D=e(U,[["render",q]]);const N={setup(){return{redirectsStore:d()}},components:{CoreMain:v,FullSiteRedirect:R,ImportExport:B,Logs:E,Logs404:M,Redirects:b,Settings:D},mixins:[x,$],data(){return{strings:{pageName:this.$t.__("Redirects",this.$td)}}},computed:{showSaveButton(){return this.$route.name!=="redirects"&&this.$route.name!=="groups"&&this.$route.name!=="logs-404"&&this.$route.name!=="logs"&&this.$route.name!=="import-export"},excludeTabs(){var r,m,p,s,i,c,a,u;const t=l.isActive("aioseo-redirects")?this.getExcludedUpdateTabs("aioseo-redirects"):this.getExcludedActivationTabs("aioseo-redirects");return(p=(m=(r=this.redirectsStore.options)==null?void 0:r.logs)==null?void 0:m.log404)!=null&&p.enabled||t.push("logs-404"),(!((c=(i=(s=this.redirectsStore.options)==null?void 0:s.logs)==null?void 0:i.redirects)!=null&&c.enabled)||((u=(a=this.redirectsStore.options)==null?void 0:a.main)==null?void 0:u.method)==="server")&&t.push("logs"),t}}};function F(t,r,m,p,s,i){const c=f("core-main");return o(),_(c,{"page-name":s.strings.pageName,"show-save-button":i.showSaveButton,"exclude-tabs":i.excludeTabs},{default:h(()=>[(o(),_(g(t.$route.name)))]),_:1},8,["page-name","show-save-button","exclude-tabs"])}const Kt=e(N,[["render",F]]);export{Kt as default};
