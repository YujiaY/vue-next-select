this.VueSelect=function(e){"use strict";var l={inheritAttrs:!1,name:"vue-input",props:{modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean}},setup(l,a){const t=e.ref(null);return{handleInput:e=>{a.emit("input",e),a.emit("update:modelValue",e.target.value)},handleChange:e=>{a.emit("change",e),a.emit("update:modelValue",e.target.value)},handleFocus:e=>{a.emit("focus",e)},handleBlur:e=>{a.emit("blur",e)},input:t,handleEscape:e=>{a.emit("escape",e),t.value.blur()}}}};const a={class:"vue-input"};l.render=function(l,t,n,o,i,u){return e.openBlock(),e.createBlock("div",a,[e.renderSlot(l.$slots,"prepend"),e.createVNode("input",{ref:"input",modelValue:l.modelValue,placeholder:l.placeholder,disabled:l.disabled,onInput:t[1]||(t[1]=(...e)=>l.handleInput(...e)),onChange:t[2]||(t[2]=(...e)=>l.handleChange(...e)),onFocus:t[3]||(t[3]=(...e)=>l.handleFocus(...e)),onBlur:t[4]||(t[4]=(...e)=>l.handleBlur(...e)),onKeyup:t[5]||(t[5]=e.withKeys(e.withModifiers((...e)=>l.handleEscape(...e),["exact"]),["esc"]))},null,40,["modelValue","placeholder","disabled"]),e.renderSlot(l.$slots,"append")])},l.__file="src/components/input.vue";var t={name:"vue-tag",props:{modelValue:{required:!0,type:Array,validator:e=>e.every(e=>"string"==typeof e.id&&"string"==typeof e.label&&"boolean"==typeof e.active)}},setup:(e,l)=>({handleClick:(e,a)=>{l.emit("click",e,a)}})};const n={class:"vue-tag"};t.render=function(l,a,t,o,i,u){return e.openBlock(),e.createBlock("ul",n,[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(l.modelValue,a=>(e.openBlock(),e.createBlock("li",{key:a.id,onClick:e=>l.handleClick(e,a),class:["vue-tag-item",{active:a.active,inactive:!a.active}]},[e.renderSlot(l.$slots,"default",{option:a},()=>[e.createVNode("span",null,e.toDisplayString(a.label),1)])],10,["onClick"]))),256))])},t.__file="src/components/tag.vue";var o={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:e=>e.every(e=>"string"==typeof e.id&&"string"==typeof e.label&&"boolean"==typeof e.active)}},setup:(e,l)=>({handleClick:(e,a)=>{l.emit("click",e,a)}})};const i={class:"vue-dropdown"};o.render=function(l,a,t,n,o,u){return e.openBlock(),e.createBlock("ul",i,[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(l.modelValue,a=>(e.openBlock(),e.createBlock("li",{key:a.id,onClick:e=>l.handleClick(e,a),class:["vue-dropdown-item",{active:a.active,inactive:!a.active}]},[e.renderSlot(l.$slots,"default",{option:a},()=>[e.createVNode("span",null,e.toDisplayString(a.label),1)])],10,["onClick"]))),256))])},o.__file="src/components/dropdown.vue";const u=(e,l,{valueBy:a})=>a(e)===a(l),r=(e,l,{valueBy:a})=>void 0!==e.find(e=>u(e,l,{valueBy:a})),c=(e,l,{valueBy:a})=>e.find(e=>a(e)===l),d=(e,l,{max:a,valueBy:t})=>r(e,l,{valueBy:t})||e.length+1>a?e:e.concat(l),s=(e,l,{min:a,valueBy:t})=>!1===r(e,l,{valueBy:t})||e.length-1<a?e:e.filter(e=>!1===u(e,l,{valueBy:t}));var p={name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},options:{required:!0,type:Array},visibleOptions:{type:Array},allowEmpty:{default:!1,type:Boolean},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},closeOnSelect:{default:!1,type:Boolean},trackBy:{type:[String,Function]},hideSelected:{default:!1,type:Boolean},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},searchable:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},ellipsis:{default:!1,type:Boolean}},setup(l,a){const{trackBy:t,labelBy:n,valueBy:o,min:i,max:u}=(e=>({trackBy:"function"==typeof e.trackBy?e.trackBy:"string"==typeof e.trackBy?l=>e.trackBy.split(".").reduce((e,l)=>e[l],l):e=>e,labelBy:"function"==typeof e.labelBy?e.labelBy:"string"==typeof e.labelBy?l=>e.labelBy.split(".").reduce((e,l)=>e[l],l):e=>e,valueBy:"function"==typeof e.valueBy?e.valueBy:"string"==typeof e.valueBy?l=>e.valueBy.split(".").reduce((e,l)=>e[l],l):e=>e,min:e.multiple?e.min:e.allowEmpty?0:1,max:e.multiple?e.max:1}))(l),p=e.ref(null),{isFocusing:v,disableFocus:m,enableFocus:y}=(({wrapperRef:l,ignoreClasses:a=[]})=>{const t=e=>a.some(l=>e.classList.contains(l)),n=e.ref(!1),o=e=>{if(!e)return;if(!e.target)return;let a=e.target;for(;a;){if(t(a))return;if(a===l.value)return void(n.value=!0);a=a.parentElement}n.value=!1};e.onMounted(()=>window.addEventListener("click",o)),e.onUnmounted(()=>window.removeEventListener("click",o));const i=()=>{n.value=!1,window.removeEventListener("click",o)};return{isFocusing:n,enableFocus:()=>{i(),window.addEventListener("click",o)},disableFocus:i}})({wrapperRef:p,ignoreClasses:["icon-delete"]});e.watch(()=>l.disabled,()=>{l.disabled?m():y()},{immediate:!0});const g=e.ref(null);e.watch(()=>v.value,()=>{v.value?a.emit("open"):a.emit("close"),setTimeout(()=>B())});const B=()=>{v.value&&g.value&&g.value._&&g.value._.refs.input.focus()},h=()=>{const e=v.value;setTimeout(()=>{!0===e&&(v.value=!1)})},k=e.ref(""),f=e.ref([]);if(l.multiple)l.modelValue.forEach(e=>{const a=c(l.options,e,{valueBy:o});f.value=d(f.value,a,{max:u,valueBy:o})});else{const e=c(l.options,l.modelValue,{valueBy:o});f.value=d(f.value,e,{max:u,valueBy:o})}const I=(e,t)=>{l.disabled||(t=c(l.options,t.id,{valueBy:o}),r(f.value,t,{valueBy:o})?(f.value=s(f.value,t,{min:i,valueBy:o}),a.emit("remove",t)):(l.multiple||(f.value=s(f.value,f.value[0],{min:0,valueBy:o})),f.value=d(f.value,t,{max:u,valueBy:o}),a.emit("select",t),!0===l.closeOnSelect&&h()))};e.watch(()=>f,()=>{const e=f.value.map(e=>o(e));l.multiple?a.emit("update:modelValue",e):e.length?a.emit("update:modelValue",e[0]):a.emit("update:modelValue",null),B()},{deep:!0});const w=e.computed(()=>{const e=new Set(f.value.map(e=>o(e)));return l.hideSelected&&v.value&&setTimeout(()=>v.value=!0),(l.visibleOptions||l.options).filter(a=>!l.hideSelected||!1===e.has(a.value)).map(l=>({id:t(l),label:n(l),active:e.has(l.value),originalOption:l}))}),V=e.computed(()=>{const e=new Set(f.value.map(e=>o(e)));return l.options.map(l=>({id:t(l),label:n(l),active:e.has(l.value),originalOption:l}))});return e.watch(()=>l.options,()=>{const e=new Set(f.value.map(e=>e.value));f.value=l.options.filter(l=>e.has(o(l)))},{deep:!0}),{isFocusing:v,input:g,wrapper:p,close:h,searchingInputValue:k,handleInputForInput:e=>{k.value=e.target.value,a.emit("search-input",e)},handleChangeForInput:e=>{k.value=e.target.value,a.emit("search-change",e)},handleFocusForInput:e=>{a.emit("focus",e)},handleBlurForInput:e=>{a.emit("blur",e)},handleClickForDropdown:(e,l)=>I(0,l),handleClickForTag:(e,l)=>I(0,l),dropdownSelectedOptions:w,tagSelectedOptions:V,addOrRemoveOption:I,focus:B}},components:{VInput:l,VTag:t,VDropdown:o}};const v={class:"vue-select-header"},m={key:2,class:"icon-loading"},y=e.createVNode("div",null,null,-1),g=e.createVNode("div",null,null,-1),B=e.createVNode("div",null,null,-1),h={key:0,class:"icon-loading"},k=e.createVNode("div",null,null,-1),f=e.createVNode("div",null,null,-1),I=e.createVNode("div",null,null,-1);return p.render=function(l,a,t,n,o,i){const u=e.resolveComponent("v-tag"),r=e.resolveComponent("v-input"),c=e.resolveComponent("v-dropdown");return e.openBlock(),e.createBlock("div",{ref:"wrapper",class:["vue-select",{disabled:l.disabled}],onClick:a[6]||(a[6]=(...e)=>l.focus(...e))},[e.createVNode("div",v,[l.taggable?(e.openBlock(),e.createBlock(e.Fragment,{key:0},[e.createVNode(u,{modelValue:l.tagSelectedOptions,class:["vue-select-tag",{ellipsis:l.ellipsis}]},{default:e.withCtx(({option:a})=>[e.renderSlot(l.$slots,"tag-item",{option:a.originalOption},()=>[e.createVNode("span",null,e.toDisplayString(a.label),1),e.createVNode("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon-delete",onClick:()=>l.addOrRemoveOption(l.$event,a)},null,8,["onClick"])])]),_:1},8,["modelValue","class"]),e.createVNode("span",{class:["icon-arrow-downward",{active:l.isFocusing}],onClick:a[1]||(a[1]=(...e)=>l.close(...e))},null,2)],64)):(e.openBlock(),e.createBlock(e.Fragment,{key:1},[l.searchable?e.createVNode(r,{key:0,ref:"input",modelValue:l.searchingInputValue,"onUpdate:modelValue":a[2]||(a[2]=e=>l.searchingInputValue=e),disabled:l.disabled,placeholder:l.placeholder,onInput:l.handleInputForInput,onChange:l.handleChangeForInput,onFocus:l.handleFocusForInput,onBlur:l.handleBlurForInput,onEscape:l.close,class:"vue-select-input"},null,8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape"]):(e.openBlock(),e.createBlock("div",{key:1,ref:"input"},e.toDisplayString(l.placeholder),513)),l.loading?(e.openBlock(),e.createBlock("span",m,[y,g,B])):(e.openBlock(),e.createBlock("span",{key:3,class:["icon-arrow-downward",{active:l.isFocusing}],onClick:a[3]||(a[3]=(...e)=>l.close(...e))},null,2))],64))]),l.isFocusing?(e.openBlock(),e.createBlock(e.Fragment,{key:0},[l.taggable&&l.searchable?e.createVNode(r,{key:0,ref:"input",modelValue:l.searchingInputValue,"onUpdate:modelValue":a[4]||(a[4]=e=>l.searchingInputValue=e),disabled:l.disabled,placeholder:l.placeholder,onInput:l.handleInputForInput,onChange:l.handleChangeForInput,onFocus:l.handleFocusForInput,onBlur:l.handleBlurForInput,onEscape:l.close,class:"vue-select-input"},{append:e.withCtx(()=>[l.loading?(e.openBlock(),e.createBlock("span",h,[k,f,I])):e.createCommentVNode("v-if",!0)]),_:1},8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape"]):e.createCommentVNode("v-if",!0),e.createVNode(c,{modelValue:l.dropdownSelectedOptions,"onUpdate:modelValue":a[5]||(a[5]=e=>l.dropdownSelectedOptions=e),onClick:l.handleClickForDropdown,class:"vue-select-dropdown"},{default:e.withCtx(({option:a})=>[e.renderSlot(l.$slots,"dropdown-item",{option:a.originalOption},()=>[e.createVNode("span",null,e.toDisplayString(a.label),1)])]),_:1},8,["modelValue","onClick"])],64)):e.createCommentVNode("v-if",!0)],2)},p.__file="src/index.vue",p}(Vue);
