"use strict";(self.webpackChunkpatchouli_docs=self.webpackChunkpatchouli_docs||[]).push([[976],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),f=o,g=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},1527:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={},c="1.20 Upgrade Guide",p={unversionedId:"upgrading/upgrade-guide-120",id:"upgrading/upgrade-guide-120",isDocsHomePage:!1,title:"1.20 Upgrade Guide",description:"Resource Pack-based books Now Required",source:"@site/docs/upgrading/upgrade-guide-120.md",sourceDirName:"upgrading",slug:"/upgrading/upgrade-guide-120",permalink:"/Patchouli/docs/upgrading/upgrade-guide-120",editUrl:"https://github.com/VazkiiMods/Patchouli/edit/1.18.x/web/docs/upgrading/upgrade-guide-120.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1.17 Upgrade Guide",permalink:"/Patchouli/docs/upgrading/upgrade-guide-117"}},s=[{value:"Resource Pack-based books Now Required",id:"resource-pack-based-books-now-required",children:[]}],d={toc:s};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"120-upgrade-guide"},"1.20 Upgrade Guide"),(0,a.kt)("h3",{id:"resource-pack-based-books-now-required"},"Resource Pack-based books Now Required"),(0,a.kt)("p",null,"Historically, Patchouli books have never properly respected resource packs nor datapacks,\ndespite the files being located in ",(0,a.kt)("inlineCode",{parentName:"p"},"/assets/")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/"),"."),(0,a.kt)("p",null,'In 1.17, "resource pack books" were introduced. These books load all of their content via\nthe resource pack system, from the ',(0,a.kt)("inlineCode",{parentName:"p"},"/assets/")," folder. However, due to technical reasons,\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"book.json")," that declares the book must still be located in ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/"),"."),(0,a.kt)("p",null,"In 1.20, this system is now required. All ",(0,a.kt)("inlineCode",{parentName:"p"},"book.json"),"s must specify ",(0,a.kt)("inlineCode",{parentName:"p"},"use_resource_pack:\ntrue"),", and the book contents must be located under\n",(0,a.kt)("inlineCode",{parentName:"p"},"/assets/<namespace>/patchouli_books/{categories, entries, ...}"),"."),(0,a.kt)("p",null,"In the future, we may explore options that also move the ",(0,a.kt)("inlineCode",{parentName:"p"},"book.json")," out of ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/")," and\ninto ",(0,a.kt)("inlineCode",{parentName:"p"},"/assets/"),"."))}l.isMDXComponent=!0}}]);