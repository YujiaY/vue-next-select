this.VueSelect=function(e){"use strict";var l={inheritAttrs:!1,name:"vue-input",props:{modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean}},setup(l,t){const a=e.ref(null);return{handleInput:e=>{t.emit("input",e),t.emit("update:modelValue",e.target.value)},handleChange:e=>{t.emit("change",e),t.emit("update:modelValue",e.target.value)},handleFocus:e=>{t.emit("focus",e)},handleBlur:e=>{t.emit("blur",e)},input:a,handleEscape:e=>{t.emit("escape",e),a.value.blur()}}}};const t={class:"vue-input"};l.render=function(l,a,n,o,i,u){return e.openBlock(),e.createBlock("div",t,[e.renderSlot(l.$slots,"prepend"),e.createVNode("input",{ref:"input",modelValue:l.modelValue,placeholder:l.placeholder,disabled:l.disabled,onInput:a[1]||(a[1]=(...e)=>l.handleInput(...e)),onChange:a[2]||(a[2]=(...e)=>l.handleChange(...e)),onFocus:a[3]||(a[3]=(...e)=>l.handleFocus(...e)),onBlur:a[4]||(a[4]=(...e)=>l.handleBlur(...e)),onKeyup:a[5]||(a[5]=e.withKeys(e.withModifiers((...e)=>l.handleEscape(...e),["exact"]),["esc"]))},null,40,["modelValue","placeholder","disabled"]),e.renderSlot(l.$slots,"append")])},l.__file="src/components/input.vue";var a={name:"vue-tag",props:{modelValue:{required:!0,type:Array,validator:e=>e.every(e=>"string"==typeof e.id&&"string"==typeof e.label&&"boolean"==typeof e.active)}},setup:(e,l)=>({handleClick:(e,t)=>{l.emit("click",e,t)}})};const n={class:"vue-tag"};a.render=function(l,t,a,o,i,u){return e.openBlock(),e.createBlock("ul",n,[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(l.modelValue,t=>(e.openBlock(),e.createBlock("li",{key:t.id,onClick:e=>l.handleClick(e,t),class:["vue-tag-item",{active:t.active,inactive:!t.active}]},[e.renderSlot(l.$slots,"default",{option:t},()=>[e.createVNode("span",null,e.toDisplayString(t.label),1)])],10,["onClick"]))),256))])},a.__file="src/components/tag.vue";var o={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:e=>e.every(e=>"string"==typeof e.id&&"string"==typeof e.label&&"boolean"==typeof e.active)}},setup:(e,l)=>({handleClick:(e,t)=>{l.emit("click",e,t)}})};const i={class:"vue-dropdown"};o.render=function(l,t,a,n,o,u){return e.openBlock(),e.createBlock("ul",i,[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(l.modelValue,t=>(e.openBlock(),e.createBlock("li",{key:t.id,onClick:e=>l.handleClick(e,t),class:["vue-dropdown-item",{active:t.active,inactive:!t.active}]},[e.renderSlot(l.$slots,"default",{option:t},()=>[e.createVNode("span",null,e.toDisplayString(t.label),1)])],10,["onClick"]))),256))])},o.__file="src/components/dropdown.vue";const u=(e,l,{valueBy:t})=>t(e)===t(l),r=(e,l,{valueBy:t})=>void 0!==e.find(e=>u(e,l,{valueBy:t})),c=(e,l,{valueBy:t})=>e.find(e=>t(e)===l),d=(e,l,{max:t,valueBy:a})=>r(e,l,{valueBy:a})||e.length+1>t?e:e.concat(l);var s={name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},options:{required:!0,type:Array},visibleOptions:{type:Array},allowEmpty:{default:!1,type:Boolean},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},closeOnSelect:{default:!1,type:Boolean},trackBy:{type:[String,Function]},hideSelected:{default:!1,type:Boolean},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},searchable:{default:!1,type:Boolean},clearOnSelect:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},ellipsis:{default:!1,type:Boolean}},setup(l,t){const{trackBy:a,labelBy:n,valueBy:o}=(e=>({trackBy:"function"==typeof e.trackBy?e.trackBy:"string"==typeof e.trackBy?l=>e.trackBy.split(".").reduce((e,l)=>e[l],l):e=>e,labelBy:"function"==typeof e.labelBy?e.labelBy:"string"==typeof e.labelBy?l=>e.labelBy.split(".").reduce((e,l)=>e[l],l):e=>e,valueBy:"function"==typeof e.valueBy?e.valueBy:"string"==typeof e.valueBy?l=>e.valueBy.split(".").reduce((e,l)=>e[l],l):e=>e}))(l),i=e.ref(null),{isFocusing:s}=(({wrapperRef:l,ignoreClasses:t=[]})=>{const a=e=>t.some(l=>e.classList.contains(l)),n=ref(!1),o=e=>{if(!e)return;if(!e.target)return;let t=e.target;for(;t;){if(a(t))return;if(t===l.value)return void(n.value=!0);t=t.parentElement}n.value=!1};return e.onMounted(()=>window.addEventListener("click",o)),e.onUnmounted(()=>window.removeEventListener("click",o)),{isFocusing:n}})({wrapperRef:i,ignoreClasses:["vue-select-tag","icon-delete"]}),p=e.ref(null);e.watch(()=>s.value,()=>{s.value?t.emit("open"):t.emit("close"),setTimeout(()=>v())});const v=()=>{s.value&&p.value&&p.value._&&p.value._.refs.input.focus()},y=e.ref(""),m=e.ref([]);if(l.multiple)l.modelValue.forEach(e=>{const t=c(l.options,e,{valueBy:o});m.value=d(m.value,t,{max:l.max,valueBy:o})});else{const e=c(l.options,modelValue,{valueBy:o});m.value=d(m.value,e,{max:l.max,valueBy:o})}const g=(e,a)=>{a=c(l.options,a.id,{valueBy:o}),r(m.value,a,{valueBy:o})?(m.value=((e,l,{min:t,valueBy:a})=>!1===r(e,l,{valueBy:a})||e.length-1<t?e:e.filter(e=>!1===u(e,l,{valueBy:a})))(m.value,a,{min:l.min,valueBy:o}),t.emit("remove",a)):(m.value=d(m.value,a,{max:l.max,valueBy:o}),t.emit("select",a))};e.watch(()=>m,()=>{const e=m.value.map(e=>o(e));l.multiple?t.emit("update:modelValue",e):e.length?t.emit("update:modelValue",e[0]):t.emit("update:modelValue",null),v()},{deep:!0});const B=e.computed(()=>{const e=new Set(m.value.map(e=>o(e)));return(l.visibleOptions||l.options).map(l=>({id:a(l),label:n(l),active:e.has(l.value),originalOption:l}))}),h=e.computed(()=>{const e=new Set(m.value.map(e=>o(e)));return l.options.map(l=>({id:a(l),label:n(l),active:e.has(l.value),originalOption:l}))});return e.watch(()=>l.options,()=>{const e=new Set(m.value.map(e=>e.value));m.value=l.options.filter(l=>e.has(o(l)))},{deep:!0}),{isFocusing:s,input:p,wrapper:i,close:()=>{const e=s.value;setTimeout(()=>{!0===e&&(s.value=!1)})},searchingInputValue:y,handleInputForInput:e=>{y.value=e.target.value,t.emit("search-input",e)},handleChangeForInput:e=>{y.value=e.target.value,t.emit("search-change",e)},handleFocusForInput:e=>{t.emit("focus",e)},handleBlurForInput:e=>{t.emit("blur",e)},handleClickForDropdown:(e,l)=>g(0,l),handleClickForTag:(e,l)=>g(0,l),dropdownSelectedOptions:B,tagSelectedOptions:h,addOrRemoveOption:g,focus:v}},components:{VInput:l,VTag:a,VDropdown:o}};const p={class:"vue-select-header"},v={key:2,class:"icon-loading"},y=e.createVNode("div",null,null,-1),m=e.createVNode("div",null,null,-1),g=e.createVNode("div",null,null,-1),B={key:0,class:"icon-loading"},h=e.createVNode("div",null,null,-1),k=e.createVNode("div",null,null,-1),f=e.createVNode("div",null,null,-1);return s.render=function(l,t,a,n,o,i){const u=e.resolveComponent("v-tag"),r=e.resolveComponent("v-input"),c=e.resolveComponent("v-dropdown");return e.openBlock(),e.createBlock("div",{ref:"wrapper",class:"vue-select",onClick:t[6]||(t[6]=(...e)=>l.focus(...e))},[e.createVNode("div",p,[l.taggable?(e.openBlock(),e.createBlock(e.Fragment,{key:0},[e.createVNode(u,{modelValue:l.tagSelectedOptions,class:["vue-select-tag",{ellipsis:l.ellipsis}]},{default:e.withCtx(({option:t})=>[e.renderSlot(l.$slots,"tag-item",{option:t.originalOption},()=>[e.createVNode("span",null,e.toDisplayString(t.label),1),e.createVNode("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon-delete",onClick:()=>l.addOrRemoveOption(l.$event,t)},null,8,["onClick"])])]),_:1},8,["modelValue","class"]),e.createVNode("span",{class:["icon-arrow-downward",{active:l.isFocusing}],onClick:t[1]||(t[1]=(...e)=>l.close(...e))},null,2)],64)):(e.openBlock(),e.createBlock(e.Fragment,{key:1},[l.searchable?e.createVNode(r,{key:0,ref:"input",modelValue:l.searchingInputValue,"onUpdate:modelValue":t[2]||(t[2]=e=>l.searchingInputValue=e),disabled:l.disabled,placeholder:l.placeholder,onInput:l.handleInputForInput,onChange:l.handleChangeForInput,onFocus:l.handleFocusForInput,onBlur:l.handleBlurForInput,onEscape:l.close,class:"vue-select-input"},null,8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape"]):(e.openBlock(),e.createBlock("div",{key:1,ref:"input"},e.toDisplayString(l.placeholder),513)),l.loading?(e.openBlock(),e.createBlock("span",v,[y,m,g])):(e.openBlock(),e.createBlock("span",{key:3,class:["icon-arrow-downward",{active:l.isFocusing}],onClick:t[3]||(t[3]=(...e)=>l.close(...e))},null,2))],64))]),l.isFocusing?(e.openBlock(),e.createBlock(e.Fragment,{key:0},[l.taggable&&l.searchable?e.createVNode(r,{key:0,ref:"input",modelValue:l.searchingInputValue,"onUpdate:modelValue":t[4]||(t[4]=e=>l.searchingInputValue=e),disabled:l.disabled,placeholder:l.placeholder,onInput:l.handleInputForInput,onChange:l.handleChangeForInput,onFocus:l.handleFocusForInput,onBlur:l.handleBlurForInput,onEscape:l.close,class:"vue-select-input"},{append:e.withCtx(()=>[l.loading?(e.openBlock(),e.createBlock("span",B,[h,k,f])):e.createCommentVNode("v-if",!0)]),_:1},8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape"]):e.createCommentVNode("v-if",!0),e.createVNode(c,{modelValue:l.dropdownSelectedOptions,"onUpdate:modelValue":t[5]||(t[5]=e=>l.dropdownSelectedOptions=e),onClick:l.handleClickForDropdown,class:"vue-select-dropdown"},{default:e.withCtx(({option:t})=>[e.renderSlot(l.$slots,"dropdown-item",{option:t.originalOption},()=>[e.createVNode("span",null,e.toDisplayString(t.label),1)])]),_:1},8,["modelValue","onClick"])],64)):e.createCommentVNode("v-if",!0)],512)},s.__file="src/index.vue",s}(Vue);
