"use strict";(self.webpackChunkpatchouli_docs=self.webpackChunkpatchouli_docs||[]).push([[828],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,b=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(b,a(a({ref:t},l),{},{components:n})):r.createElement(b,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7153:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={},p="Specifying Crafting Recipes for Books",s={unversionedId:"patchouli-basics/recipe",id:"patchouli-basics/recipe",isDocsHomePage:!1,title:"Specifying Crafting Recipes for Books",description:"All books that have no custom item are actually the same itembook.",source:"@site/docs/patchouli-basics/recipe.md",sourceDirName:"patchouli-basics",slug:"/patchouli-basics/recipe",permalink:"/Patchouli/docs/patchouli-basics/recipe",editUrl:"https://github.com/VazkiiMods/Patchouli/edit/documentation/docs/patchouli-basics/recipe.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Default Page Types",permalink:"/Patchouli/docs/patchouli-basics/page-types"},next:{title:"Templating",permalink:"/Patchouli/docs/patchouli-basics/templates"}},l=[],u={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"specifying-crafting-recipes-for-books"},"Specifying Crafting Recipes for Books"),(0,i.kt)("p",null,"All books that have no custom item are actually the same item: ",(0,i.kt)("inlineCode",{parentName:"p"},"patchouli:book"),"."),(0,i.kt)("p",null,"This makes crafting recipes a bit annoying, because you have to specify NBT on the output\nvalue. This is a bit involved to do, especially on Fabric, so Patchouli provides\nconvenience recipe types to abstract over differences between loaders."),(0,i.kt)("p",null,"Create a JSON like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/data/yourbooknamespace/recipes/my_book_recipe_shapeless.json"',title:'"/data/yourbooknamespace/recipes/my_book_recipe_shapeless.json"'},'{\n  "type": "patchouli:shapeless_book_recipe",\n  "ingredients": [\n    {\n      "item": "minecraft:gold_ingot"\n    },\n    {\n      "item": "minecraft:dirt"\n    }\n  ],\n  "book": "yourbookid"\n}\n')),(0,i.kt)("p",null,"or for shaped recipes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/data/yourbooknamespace/recipes/my_book_recipe_shaped.json"',title:'"/data/yourbooknamespace/recipes/my_book_recipe_shaped.json"'},'{\n  "type": "patchouli:shaped_book_recipe",\n  "pattern": [\n    "##"\n  ],\n  "key": {\n    "#": {\n      "item": "minecraft:dirt"\n    }\n  },\n  "book": "yourbookid"\n}\n')),(0,i.kt)("p",null,"And Patchouli will automatically arrange for the correct book to be produced."))}f.isMDXComponent=!0}}]);