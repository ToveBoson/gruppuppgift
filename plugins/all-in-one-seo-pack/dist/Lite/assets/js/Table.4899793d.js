import{n as V}from"./numbers.c7cb4085.js";import{o as s,c as n,F as h,h as y,a as i,t as d,K as B,L as R,b as g,w as f,g as P,n as _,i as T,D as C,P as q,J as L,r as w,d as I,f as r,e as N,C as j,S as O,U as D}from"./vue.runtime.esm-bundler.0bc3eabf.js";import{C as W,d as M}from"./Caret.11ded1aa.js";import{_ as F}from"./_plugin-vue_export-helper.8823f7c1.js";import{C as E}from"./Tooltip.eebec260.js";import{T as K}from"./Slide.c3dfb2b1.js";const z={emits:["process-additional-filters","change"],props:{additionalFilters:{type:Array,required:!0},selectedFilters:{type:Object,default(){return{}}}},data(){return{strings:{filter:this.$t.__("Filter",this.$td)}}},mounted(){this.setInitialOptions()},updated(){this.setInitialOptions()},methods:{setInitialOptions(){this.additionalFilters.forEach(t=>{this.selectedFilters[t.name]||(this.selectedFilters[t.name]=t.options[0].value)})}}},J={class:"aioseo-wp-additional-filters alignleft actions"},G={for:"filter-by-date",class:"screen-reader-text"},Q=["name","onUpdate:modelValue","onChange"],X=["value"];function Y(t,a,e,v,l,c){return s(),n("div",J,[(s(!0),n(h,null,y(e.additionalFilters,(u,p)=>(s(),n(h,{key:p},[i("label",G,d(u.label),1),B(i("select",{name:u.name,"onUpdate:modelValue":k=>e.selectedFilters[u.name]=k,onChange:k=>t.$emit("change",{name:u.name,selectedValue:k.target.value})},[(s(!0),n(h,null,y(u.options,(k,S)=>(s(),n("option",{key:S,value:k.value},d(k.label),9,X))),128))],40,Q),[[R,e.selectedFilters[u.name]]])],64))),128)),i("button",{class:"button action",onClick:a[0]||(a[0]=u=>t.$emit("process-additional-filters",e.selectedFilters))},d(l.strings.filter),1)])}const Z=F(z,[["render",Y]]);const $={emits:["process-bulk-action"],props:{bulkOptions:{type:Array,required:!0},disableTable:Boolean},data(){return{bulkAction:"-1",strings:{bulkActions:this.$t.__("Bulk Actions",this.$td),apply:this.$t.__("Apply",this.$td)}}}},ee={class:"aioseo-wp-bulk-actions alignleft actions bulkactions"},te=["disabled"],se={value:"-1"},ae=["value"],le=["disabled"];function ne(t,a,e,v,l,c){return s(),n("div",ee,[B(i("select",{"onUpdate:modelValue":a[0]||(a[0]=u=>l.bulkAction=u),disabled:e.disableTable},[i("option",se,d(l.strings.bulkActions),1),(s(!0),n(h,null,y(e.bulkOptions,(u,p)=>(s(),n("option",{key:p,value:u.value},d(u.label),9,ae))),128))],8,te),[[R,l.bulkAction]]),i("button",{class:"button action",onClick:a[1]||(a[1]=u=>l.bulkAction!=="-1"?t.$emit("process-bulk-action",l.bulkAction):null),disabled:e.disableTable},d(l.strings.apply),9,le)])}const oe=F($,[["render",ne]]);const ie={props:{modelValue:Number,disableTable:Boolean},data(){return{items:[5,10,20,25,50,100],itemsPerPage:20,strings:{itemsPerPage:this.$t.__("items per page",this.$td)}}},watch:{itemsPerPage(t){this.$emit("update:modelValue",t)}},mounted(){this.itemsPerPage=this.modelValue}},re={class:"aioseo-wp-items-per-page alignleft"},ue=["disabled"],ce=["value"];function de(t,a,e,v,l,c){return s(),n("div",re,[i("label",null,[B(i("select",{"onUpdate:modelValue":a[0]||(a[0]=u=>l.itemsPerPage=u),disabled:e.disableTable},[(s(!0),n(h,null,y(l.items,(u,p)=>(s(),n("option",{key:p,value:u},d(u),9,ce))),128))],8,ue),[[R,l.itemsPerPage]]),i("span",null,d(l.strings.itemsPerPage),1)])])}const be=F(ie,[["render",de]]),me={emits:["paginate"],props:{totals:{type:Object,required:!0},initialPageNumber:{type:Number,default(){return 1}},disableTable:Boolean},data(){return{numbers:V,pageNumber:1,strings:{of:this.$t.__("of",this.$td),items:this.$t.__("items",this.$td)}}},watch:{initialPageNumber(t){t!==this.pageNumber&&(this.pageNumber=t)}},methods:{toPage(t){this.pageNumber=t,this.$emit("paginate",parseInt(t))}},created(){this.pageNumber=this.initialPageNumber}},he={class:"tablenav-pages pagination"},ge={class:"displaying-num"},_e={class:"pagination-links"},pe={class:"paging-input"},ke=["max","disabled"],ye={class:"tablenav-paging-text"};function fe(t,a,e,v,l,c){return s(),n("div",he,[i("span",ge,d(l.numbers.numberFormat(e.totals.total))+" "+d(l.strings.items),1),i("span",_e,[(s(),g(C(l.pageNumber===1?"span":"a"),{href:"#",class:_(l.pageNumber===1?"tablenav-pages-navspan button disabled":"first-page button"),onClick:a[0]||(a[0]=T(u=>l.pageNumber===1?null:c.toPage(1),["prevent"]))},{default:f(()=>[P(" « ")]),_:1},8,["class"])),(s(),g(C(l.pageNumber===1?"span":"a"),{href:"#",class:_(l.pageNumber===1?"tablenav-pages-navspan button disabled":"prev-page button"),onClick:a[1]||(a[1]=T(u=>l.pageNumber===1?null:c.toPage(l.pageNumber-1),["prevent"]))},{default:f(()=>[P(" ‹ ")]),_:1},8,["class"])),i("span",pe,[B(i("input",{class:"current-page",type:"number",name:"paged","onUpdate:modelValue":a[2]||(a[2]=u=>l.pageNumber=u),size:"2",min:1,max:e.totals.pages||1,step:1,"aria-describedby":"table-paging",onKeyup:a[3]||(a[3]=L(u=>c.toPage(l.pageNumber),["enter"])),disabled:!e.totals.pages||e.disableTable},null,40,ke),[[q,l.pageNumber]]),i("span",ye,d(l.strings.of)+" "+d(e.totals.pages||0),1)]),(s(),g(C(l.pageNumber===e.totals.pages||!e.totals.pages?"span":"a"),{href:"#",class:_(l.pageNumber===e.totals.pages||!e.totals.pages?"tablenav-pages-navspan button disabled":"next-page button"),onClick:a[4]||(a[4]=T(u=>l.pageNumber===e.totals.pages||!e.totals.pages?null:c.toPage(l.pageNumber+1),["prevent"]))},{default:f(()=>[P(" › ")]),_:1},8,["class"])),(s(),g(C(l.pageNumber===e.totals.pages||!e.totals.pages?"span":"a"),{href:"#",class:_(l.pageNumber===e.totals.pages||!e.totals.pages?"tablenav-pages-navspan button disabled":"last-page button"),onClick:a[5]||(a[5]=T(u=>l.pageNumber===e.totals.pages||!e.totals.pages?null:c.toPage(e.totals.pages),["prevent"]))},{default:f(()=>[P(" » ")]),_:1},8,["class"]))])])}const ve=F(me,[["render",fe]]);const we={emits:["sort-column"],components:{CoreTooltip:E},props:{column:{type:Object,required:!0},disableTable:Boolean,allowTooltipIcon:Boolean}},Pe={key:0,class:"aioseo-table-header-tooltip-icon"},Ne=i("span",{class:"sorting-indicator"},null,-1);function Te(t,a,e,v,l,c){const u=w("core-tooltip");return s(),n("th",{scope:"col",style:j({width:e.column.width}),class:_(["aioseo-manage-column manage-column",[{sortable:!e.disableTable&&e.column.sortable,asc:e.column.sortDir==="asc"&&e.column.sortable,desc:e.column.sortDir==="desc"&&e.column.sortable,sorted:e.column.sortable&&e.column.sorted},e.column.slug]])},[e.allowTooltipIcon&&e.column.tooltipIcon?(s(),n("div",Pe,[I(u,{class:"action",type:"action"},{tooltip:f(()=>[P(d(e.column.label),1)]),default:f(()=>[(s(),g(C(e.column.tooltipIcon)))]),_:1})])):r("",!0),!e.allowTooltipIcon||!e.column.tooltipIcon?(s(),n(h,{key:1},[e.column.sortable?(s(),n("a",{key:0,href:"#",onClick:a[0]||(a[0]=T(p=>t.$emit("sort-column",e.column,p),["prevent"]))},[i("span",null,d(e.column.label),1),Ne])):r("",!0),e.column.sortable?r("",!0):(s(),n(h,{key:1},[t.$slots.headerFooter?N(t.$slots,"headerFooter",{key:0}):r("",!0),t.$slots.headerFooter?r("",!0):(s(),n(h,{key:1},[P(d(e.column.label),1)],64))],64))],64)):r("",!0)],6)}const Fe=F(we,[["render",Te]]);const Ae={emits:["sort-column","process-bulk-action","paginate","search","filter-table","process-change-items-per-page","process-additional-filters","additional-filter-option-selected"],components:{CoreLoader:W,CoreWpAdditionalFilters:Z,CoreWpBulkActions:oe,CoreWpItemsPerPage:be,CoreWpPagination:ve,CoreWpTableHeaderFooter:Fe,TransitionSlide:K},props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0},filters:{type:Array,required:!1},totals:{type:Object,required:!1},loading:Boolean,showSearch:{type:Boolean,default(){return!0}},showBulkActions:{type:Boolean,default(){return!0}},showPagination:{type:Boolean,default(){return!0}},showTableFooter:{type:Boolean,default(){return!0}},showHeader:{type:Boolean,default(){return!0}},searchLabel:{type:String,default(){const t=D();return t.appContext.app.$t.__("Search",t.appContext.app.$td)}},initialPageNumber:{type:Number,default(){return 1}},initialItemsPerPage:{type:Number,default(){return 20}},initialSearchTerm:{type:String,default(){return""}},noResultsLabel:{type:String},bulkOptions:Array,additionalFilters:Array,selectedFilters:Object,itemsPerPageFilter:String,blurRows:Boolean,disableTable:Boolean,showItemsPerPage:Boolean},data(){return{numbers:V,itemsPerPage:null,searchTerm:"",pageNumber:1,activeRow:null,strings:{items:this.$t.__("items",this.$td),noResults:this.$t.__("No items found.",this.$td)}}},watch:{initialPageNumber(t){this.pageNumber=t},pageNumber(t){if(Math.abs(t)!==t){this.pageNumber=Math.floor(t);return}if(this.totals&&t>this.totals.pages){this.pageNumber=this.totals.pages;return}1>t&&(this.pageNumber=1)},itemsPerPage(t,a){a!==null&&this.processChangeItemsPerPage()}},methods:{showFilterCount(t){return Object.prototype.hasOwnProperty.call(t,"count")},editRow(t){if(t===null||this.activeRow===t){this.activeRow=null;return}this.activeRow=t},processSearch(){M(()=>{this.$emit("search",this.searchTerm)},100)},processChangeItemsPerPage(){this.$emit("process-change-items-per-page",this.itemsPerPage)},processBulkAction(t){this.$emit("process-bulk-action",{action:t,selectedRows:this.selectedItems()}),this.resetSelectedItems()},processPaginate(t){this.pageNumber=t,this.$emit("paginate",t,this.searchTerm)},processFilter(t){this.pageNumber=1,this.searchTerm="",this.$emit("filter-table",t)},processAdditionalFilters(t){this.pageNumber=1,this.searchTerm="",this.$emit("process-additional-filters",{filters:t})},selectedItems(){const t=this.$refs.table.querySelectorAll("tbody tr.main-row"),a=[];return t.forEach(e=>{const v=e.querySelector("th.check-column input");v&&v.checked&&a.push(e.dataset.rowId)}),a},resetSelectedItems(){const t=this.$refs.table.querySelectorAll(".check-column input:checked");t&&t.forEach(a=>a.checked=!1)},setPageNumber(t){this.pageNumber=t}},computed:{filteredColumns(){return this.columns.filter(t=>"show"in t?t.show:!0)},noResults(){return this.noResultsLabel||this.strings.noResults}},created(){this.pageNumber=this.initialPageNumber,this.searchTerm=this.initialSearchTerm,this.itemsPerPage=this.initialItemsPerPage}},Ce={class:"aioseo-wp-table"},Be={key:0,class:"aioseo-wp-table-header"},Se={class:"subsubsub"},Ie=["onClick"],Re={key:0},Oe={key:0},Ve={key:0,class:"separator"},qe={key:0,class:"search-box"},Le=["disabled"],Ue=["value","disabled"],He={class:"tablenav top"},xe=i("br",{class:"clear"},null,-1),je={class:"wp-table"},De={key:0,class:"manage-column column-cb check-column"},We=["disabled"],Me={key:0,id:"the-list"},Ee={key:0,class:"loader-overlay-table"},Ke=["data-row-id","data-row-index"],ze={key:0,scope:"row",class:"check-column"},Je=["disabled"],Ge=["colspan"],Qe={key:1},Xe=["colspan"],Ye={class:"border"},Ze=["colspan"],$e={class:"no-results"},et={key:0},tt={key:1},st={key:0,class:"manage-column column-cb check-column"},at=["disabled"],lt={key:1,class:"tablenav bottom"},nt=i("div",{class:"alignleft actions"},null,-1),ot=i("br",{class:"clear"},null,-1);function it(t,a,e,v,l,c){const u=w("core-wp-bulk-actions"),p=w("core-wp-additional-filters"),k=w("core-wp-pagination"),S=w("core-wp-table-header-footer"),U=w("core-loader"),H=w("transition-slide"),x=w("core-wp-items-per-page");return s(),n("div",Ce,[e.showHeader?(s(),n("div",Be,[i("ul",Se,[(s(!0),n(h,null,y(e.filters,(o,b)=>(s(),n("li",{key:b,class:_(o.slug)},[i("span",{class:_(["name",{active:o.active}])},[!o.active&&!e.disableTable?(s(),n("a",{key:0,href:"#",onClick:T(m=>c.processFilter(o),["prevent"])},[P(d(o.name)+" ",1),c.showFilterCount(o)?(s(),n("span",Re," ("+d(l.numbers.numberFormat(o.count))+")",1)):r("",!0)],8,Ie)):r("",!0),o.active||e.disableTable?(s(),n(h,{key:1},[P(d(o.name)+" ",1),c.showFilterCount(o)?(s(),n("span",Oe," ("+d(l.numbers.numberFormat(o.count))+")",1)):r("",!0)],64)):r("",!0)],2),b+1<e.filters.length?(s(),n("span",Ve,"|")):r("",!0)],2))),128))]),e.showSearch?(s(),n("p",qe,[B(i("input",{type:"search",id:"post-search-input",name:"s","onUpdate:modelValue":a[0]||(a[0]=o=>l.searchTerm=o),onKeyup:a[1]||(a[1]=L((...o)=>c.processSearch&&c.processSearch(...o),["enter"])),onSearch:a[2]||(a[2]=(...o)=>c.processSearch&&c.processSearch(...o)),disabled:e.disableTable},null,40,Le),[[q,l.searchTerm]]),i("input",{type:"submit",id:"search-submit",class:"button",value:e.searchLabel,onClick:a[3]||(a[3]=T((...o)=>c.processSearch&&c.processSearch(...o),["prevent"])),disabled:e.disableTable},null,8,Ue)])):r("",!0),i("div",He,[N(t.$slots,"tablenav"),e.showBulkActions&&e.bulkOptions&&e.bulkOptions.length?(s(),g(u,{key:0,"bulk-options":e.bulkOptions,onProcessBulkAction:c.processBulkAction,"disable-table":e.disableTable},null,8,["bulk-options","onProcessBulkAction","disable-table"])):r("",!0),e.additionalFilters&&e.additionalFilters.length?(s(),g(p,{key:1,"additional-filters":e.additionalFilters,"selected-filters":e.selectedFilters,onChange:a[4]||(a[4]=o=>t.$emit("additional-filter-option-selected",o)),onProcessAdditionalFilters:c.processAdditionalFilters},null,8,["additional-filters","selected-filters","onProcessAdditionalFilters"])):r("",!0),e.showPagination?(s(),g(k,{key:2,totals:e.totals,"initial-page-number":l.pageNumber,"disable-table":e.disableTable,onPaginate:c.processPaginate},null,8,["totals","initial-page-number","disable-table","onPaginate"])):r("",!0),xe])])):r("",!0),i("div",je,[i("table",{class:_(["wp-list-table widefat fixed",{blurred:e.blurRows}]),ref:"table",cellpadding:"0",cellspacing:"0","aria-label":"Paginated Table"},[i("thead",null,[i("tr",null,[e.showBulkActions?(s(),n("td",De,[i("input",{type:"checkbox",disabled:e.loading||e.disableTable},null,8,We)])):r("",!0),(s(!0),n(h,null,y(e.columns,(o,b)=>(s(),g(S,{key:b,column:o,"disable-table":e.disableTable,onSortColumn:(m,A)=>t.$emit("sort-column",m,A),"allow-tooltip-icon":""},O({_:2},[t.$slots[o.slug+"HeaderFooter"]?{name:"headerFooter",fn:f(()=>[N(t.$slots,o.slug+"HeaderFooter",{area:"header"})]),key:"0"}:void 0]),1032,["column","disable-table","onSortColumn"]))),128))])]),e.rows?(s(),n("tbody",Me,[e.loading?(s(),n("div",Ee,[I(U)])):r("",!0),(s(!0),n(h,null,y(e.rows,(o,b)=>(s(),n(h,{key:b},[i("tr",{class:_(["main-row",{even:b%2===0,enabled:o.enabled||!o.hasOwnProperty("enabled")}]),"data-row-id":o.rowIndex&&o[o.rowIndex]||o.id||o.url||b,"data-row-index":b},[e.showBulkActions?(s(),n("th",ze,[o.preventBulkAction?r("",!0):(s(),n("input",{key:0,type:"checkbox",disabled:e.disableTable},null,8,Je))])):r("",!0),(s(!0),n(h,null,y(c.filteredColumns,(m,A)=>(s(),n("td",{class:_(["manage-column",m.slug]),key:A,colspan:m!=null&&m.colspan?m.colspan:1},[t.$slots[m.slug]?N(t.$slots,m.slug,{key:0,row:o,column:o[m.slug],editRow:c.editRow,index:b,editRowActive:l.activeRow===b}):r("",!0),t.$slots[m.slug]?r("",!0):(s(),n("span",Qe,d(o[m.slug]),1))],10,Ge))),128))],10,Ke),i("tr",{class:_(["edit-row",{even:b%2===0}])},[i("td",{colspan:e.showBulkActions?e.columns.length+1:e.columns.length,class:"edit-row-content"},[I(H,{tag:"div",class:"wrapper",active:b===l.activeRow},{default:f(()=>[i("div",Ye,[N(t.$slots,"edit-row",{row:o,index:b,editRow:c.editRow})])]),_:2},1032,["active"])],8,Xe)],2)],64))),128)),e.rows.length?r("",!0):(s(),n("td",{key:1,colspan:e.columns.length},[i("div",$e,[e.loading?r("",!0):(s(),n("span",et,d(c.noResults),1))])],8,Ze))])):r("",!0),e.showTableFooter?(s(),n("tfoot",tt,[i("tr",null,[e.showBulkActions?(s(),n("td",st,[i("input",{type:"checkbox",disabled:e.loading||e.disableTable},null,8,at)])):r("",!0),(s(!0),n(h,null,y(e.columns,(o,b)=>(s(),g(S,{key:b,column:o,"disable-table":e.disableTable,onSortColumn:(m,A)=>t.$emit("sort-column",m,A)},O({_:2},[t.$slots[o.slug+"HeaderFooter"]?{name:"headerFooter",fn:f(()=>[N(t.$slots,o.slug+"HeaderFooter",{area:"footer"})]),key:"0"}:void 0]),1032,["column","disable-table","onSortColumn"]))),128))])])):r("",!0)],2),N(t.$slots,"cta")]),e.showTableFooter?(s(),n("div",lt,[e.showBulkActions&&e.bulkOptions&&e.bulkOptions.length?(s(),g(u,{key:0,"bulk-options":e.bulkOptions,onProcessBulkAction:c.processBulkAction,"disable-table":e.disableTable},null,8,["bulk-options","onProcessBulkAction","disable-table"])):r("",!0),e.showItemsPerPage?(s(),g(x,{key:1,modelValue:l.itemsPerPage,"onUpdate:modelValue":a[5]||(a[5]=o=>l.itemsPerPage=o),"disable-table":e.disableTable},null,8,["modelValue","disable-table"])):r("",!0),nt,e.showPagination?(s(),g(k,{key:2,totals:e.totals,"initial-page-number":l.pageNumber,"disable-table":e.disableTable,onPaginate:c.processPaginate},null,8,["totals","initial-page-number","disable-table","onPaginate"])):r("",!0),ot])):r("",!0)])}const ht=F(Ae,[["render",it]]);export{ht as C};
