"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[862],{862:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,o,c,i,u=t(9439),a=t(2791),l=t(168),s=t(225),d=s.Z.form(r||(r=(0,l.Z)(["\n    display: flex;\n    flex-direction: column;\n  \n    width: 300px;\n    margin-bottom: 20px;\n    padding: 10px 20px;\n  \n    border: 1px solid ",";\n    border-radius: 10px;\n  "])),(function(n){return n.theme.colors.textColor})),f=s.Z.label(o||(o=(0,l.Z)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n  \n    font-weight: 500;"]))),p=s.Z.input(c||(c=(0,l.Z)([" \n  \n    width: 200px;\n    margin-top: 10px;\n  \n    color: ",";\n  \n    border: 1px solid ",";\n    border-radius: 5px;\n    background-color: ",";\n\n    &:hover,\n    &:focus {\n    border: 2px solid ",";\n    outline-color: ",";\n  }\n  "])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.bgcContainer}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.textColor})),h=s.Z.button(i||(i=(0,l.Z)(["\n    width: 100px;\n    padding: 2px 0;\n  \n    background-color: transparent;\n    color: ",";\n  \n    border-radius: 5px;\n    border: 1px solid ",";\n  \n    transition: scale 250 cubic-bezier(0.4, 0, 0.2, 1),\n      background-color 250 cubic-bezier(0.4, 0, 0.2, 1);\n  \n  &:hover,\n  &:focus {\n    scale: 1.1;\n  }\n  \n  &:active {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.bgcBtnActive})),x=t(9434),m=t(3634),b="NOT_FOUND";var g=function(n,e){return n===e};function v(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?g:r,c=t.maxSize,i=void 0===c?1:c,u=t.resultEqualityCheck,a=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),l=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:b},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(a):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return b}return{get:r,put:function(e,o){r(e)===b&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,a);function s(){var e=l.get(arguments);if(e===b){if(e=n.apply(null,arguments),u){var t=l.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return s.clearCache=function(){return l.clear()},s}function y(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function C(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var c,i=0,u={memoizeOptions:void 0},a=r.pop();if("object"===typeof a&&(u=a,a=r.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=u,s=l.memoizeOptions,d=void 0===s?t:s,f=Array.isArray(d)?d:[d],p=y(r),h=n.apply(void 0,[function(){return i++,a.apply(null,arguments)}].concat(f)),x=n((function(){for(var n=[],e=p.length,t=0;t<e;t++)n.push(p[t].apply(null,arguments));return c=h.apply(null,n)}));return Object.assign(x,{resultFunc:a,memoizedResultFunc:h,dependencies:p,lastResult:function(){return c},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),x};return o}var Z,j,k,w,A=C(v),z=function(n){return n.contacts},L=function(n){return n.contacts.items},F=function(n){return n.filter},_=A([L,F],(function(n,e){return n.filter((function(n){return n.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())}))})),E=t(184);function N(){var n=(0,a.useState)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=(0,a.useState)(""),c=(0,u.Z)(o,2),i=c[0],l=c[1],s=(0,x.I0)(),b=(0,x.v9)(L),g=function(n){var e=n.currentTarget,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":l(o);break;default:return}},v=function(){r(""),l("")};return(0,E.jsxs)(d,{onSubmit:function(n){n.preventDefault();var e=t.toLocaleLowerCase();0!==b.filter((function(n){return n.name.toLocaleLowerCase()===e})).length?alert("".concat(t," is already in contacts.")):s((0,m.uK)({name:t,number:i})),v()},children:[(0,E.jsxs)(f,{children:["Name",(0,E.jsx)(p,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:g})]}),(0,E.jsxs)(f,{children:["Number",(0,E.jsx)(p,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:i,onChange:g})]}),(0,E.jsx)(h,{type:"submit",children:"Add contact"})]})}var S,q,O,B=s.Z.ul(Z||(Z=(0,l.Z)(["\n  padding-left: 30px;\n"]))),I=s.Z.span(j||(j=(0,l.Z)(["\n  margin-right: 20px;\n"]))),D=s.Z.li(k||(k=(0,l.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),R=s.Z.button(w||(w=(0,l.Z)(["\n  padding: 2px 7px;\n\n  background-color: transparent;\n  color: ",";\n\n  border-radius: 5px;\n  border: 1px solid ",";\n\n  transition: scale 250 cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250 cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    scale: 1.1;\n  }\n\n  &:active {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.bgcBtnActive})),T=function(){var n=(0,x.I0)(),e=(0,x.v9)(z),t=e.items,r=e.isLoading,o=e.error,c=(0,x.v9)(_),i=(0,x.v9)(F);return(0,a.useEffect)((function(){n((0,m.yF)())}),[n]),(0,E.jsxs)(E.Fragment,{children:[!0===r&&(0,E.jsx)("h2",{children:"Loading..."}),o&&(0,E.jsxs)("h2",{children:["Error!: ",o]}),0===t.length&&0===c.length&&!o&&(0,E.jsx)("h3",{children:"No contacts!"}),0!==t.length&&0===c.length&&!o&&(0,E.jsxs)("h3",{children:["Contacts '",i,"' not found!"]}),(0,E.jsx)(B,{children:c.map((function(e){var t=e.id,r=e.name,o=e.number;return(0,E.jsxs)(D,{children:[(0,E.jsxs)(I,{children:[r,": ",o]}),(0,E.jsx)(R,{type:"button",onClick:function(){return n((0,m.GK)(t))},children:"Delete"})]},t)}))})]})},J=s.Z.label(S||(S=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  font-weight: 500;\n"]))),K=s.Z.input(q||(q=(0,l.Z)([" \n  \n    width: 200px;\n    margin-bottom: 20px;\n    margin-top: 10px;\n  \n    color: ",";\n  \n    border: 1px solid ",";\n    border-radius: 5px;\n\n    background-color: ",";\n\n  &:hover,\n  .input:focus {\n    border: 2px solid ",";\n    outline-color: ",";\n  }\n  "])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.bgcContainer}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.textColor})),M=t(4808),P=function(){var n=(0,x.v9)(F),e=(0,x.I0)();return(0,E.jsxs)(J,{children:["Find contact by name",(0,E.jsx)(K,{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,onChange:function(n){e((0,M.x)(n.currentTarget.value))}})]})},$=s.Z.div(O||(O=(0,l.Z)(["\n  margin-top: 50px;\n  padding: 20px 30px;\n\n  border: 1px solid;\n  border-radius: 10px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.bgcContainer})),G=function(){return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)($,{children:[(0,E.jsx)("h1",{children:"Phonebook"}),(0,E.jsx)(N,{}),(0,E.jsx)("h2",{children:"Contacts"}),(0,E.jsx)(P,{}),(0,E.jsx)(T,{})]})})}}}]);
//# sourceMappingURL=862.3fd88e75.chunk.js.map