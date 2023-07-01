"use strict";(self.webpackChunkpatchouli_docs=self.webpackChunkpatchouli_docs||[]).push([[468],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1954:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="Entry JSON Format",c={unversionedId:"reference/entry-json",id:"reference/entry-json",isDocsHomePage:!1,title:"Entry JSON Format",description:"This page details every key you can have in an Entry json file.",source:"@site/docs/reference/entry-json.md",sourceDirName:"reference",slug:"/reference/entry-json",permalink:"/Patchouli/docs/reference/entry-json",editUrl:"https://github.com/VazkiiMods/Patchouli/edit/1.18.x/web/docs/reference/entry-json.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Category JSON Format",permalink:"/Patchouli/docs/reference/category-json"},next:{title:"1.17 Upgrade Guide",permalink:"/Patchouli/docs/upgrading/upgrade-guide-117"}},u=[{value:"<strong>name</strong> (String, <em>mandatory</em>)",id:"name-string-mandatory",children:[]},{value:"<strong>category</strong> (String, <em>mandatory</em>)",id:"category-string-mandatory",children:[]},{value:"<strong>icon</strong> (String, <em>mandatory</em>)",id:"icon-string-mandatory",children:[]},{value:"<strong>pages</strong> (Object Array, <em>mandatory</em>)",id:"pages-object-array-mandatory",children:[]},{value:"<strong>advancement</strong> (String)",id:"advancement-string",children:[]},{value:"<strong>flag</strong> (String)",id:"flag-string",children:[]},{value:"<strong>priority</strong> (boolean)",id:"priority-boolean",children:[]},{value:"<strong>secret</strong> (boolean)",id:"secret-boolean",children:[]},{value:"<strong>read_by_default</strong> (boolean)",id:"read_by_default-boolean",children:[]},{value:"<strong>sortnum</strong> (integer)",id:"sortnum-integer",children:[]},{value:"<strong>turnin</strong> (String)",id:"turnin-string",children:[]},{value:"<strong>extra_recipe_mappings</strong> (Object String -&gt; Int)",id:"extra_recipe_mappings-object-string---int",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"entry-json-format"},"Entry JSON Format"),(0,a.kt)("p",null,"This page details every key you can have in an Entry json file."),(0,a.kt)("p",null,'The "entry ID" of an entry is the path necessary to\nget to it from ',(0,a.kt)("inlineCode",{parentName:"p"},"/en_us/entries"),". So if your entry is in\n",(0,a.kt)("inlineCode",{parentName:"p"},"/en_us/entries/misc/cool_stuff.json"),", its ID would be ",(0,a.kt)("inlineCode",{parentName:"p"},"patchouli:misc/cool_stuff"),"."),(0,a.kt)("p",null,"For modders, the domain used is the domain in which the book is defined."),(0,a.kt)("h2",{id:"name-string-mandatory"},(0,a.kt)("strong",{parentName:"h2"},"name")," (String, ",(0,a.kt)("em",{parentName:"h2"},"mandatory"),")"),(0,a.kt)("p",null,"The name of this entry."),(0,a.kt)("h2",{id:"category-string-mandatory"},(0,a.kt)("strong",{parentName:"h2"},"category")," (String, ",(0,a.kt)("em",{parentName:"h2"},"mandatory"),")"),(0,a.kt)("p",null,"The category this entry belongs to. This must be set to one of your categories' ID. For\nbest results, use a fully-qualified ID that includes your book namespace\n",(0,a.kt)("inlineCode",{parentName:"p"},"yourbooknamespace:categoryname"),". In the future this will be enforced."),(0,a.kt)("h2",{id:"icon-string-mandatory"},(0,a.kt)("strong",{parentName:"h2"},"icon")," (String, ",(0,a.kt)("em",{parentName:"h2"},"mandatory"),")"),(0,a.kt)("p",null,"The icon for this entry. This can either be an ",(0,a.kt)("a",{parentName:"p",href:"/docs/patchouli-advanced/itemstack-format"},"ItemStack\nString"),", if you want an item to be the icon, or\na resource location pointing to a square texture. If you want to use a resource location,\nmake sure to end it with .png"),(0,a.kt)("h2",{id:"pages-object-array-mandatory"},(0,a.kt)("strong",{parentName:"h2"},"pages")," (Object Array, ",(0,a.kt)("em",{parentName:"h2"},"mandatory"),")"),(0,a.kt)("p",null,"The array of pages for this entry. In the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[\n    {\n        "type": "TYPE",\n        (type specific data ...)\n    },\n    {\n        "type": "TYPE",\n        (type specific data...)\n    }\n    (...)\n]\n')),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/patchouli-basics/page-types"},"Default Page Types")," for the page types that\nPatchouli comes with and what data each one requires, or ",(0,a.kt)("a",{parentName:"p",href:"/docs/patchouli-basics/templates"},"Using\nTemplates")," for instructions on how to create your own."),(0,a.kt)("h2",{id:"advancement-string"},(0,a.kt)("strong",{parentName:"h2"},"advancement")," (String)"),(0,a.kt)("p",null,"The name of the advancement you want this entry to be locked behind. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/patchouli-basics/advancement-locking"},"Locking Content\nwith Advancements")," for more info on locking\ncontent."),(0,a.kt)("h2",{id:"flag-string"},(0,a.kt)("strong",{parentName:"h2"},"flag")," (String)"),(0,a.kt)("p",null,"A config flag expression that determines whether this entry should exist or not. See\n",(0,a.kt)("a",{parentName:"p",href:"/docs/patchouli-basics/config-gating"},"Using Config Flags")," for more info on config flags."),(0,a.kt)("h2",{id:"priority-boolean"},(0,a.kt)("strong",{parentName:"h2"},"priority")," (boolean)"),(0,a.kt)("p",null,"Defaults to false. If set to true, the entry will show up with an italicized name, and\nwill always show up at the top of the category. Use for really important entries you want\nto show up at the top."),(0,a.kt)("h2",{id:"secret-boolean"},(0,a.kt)("strong",{parentName:"h2"},"secret")," (boolean)"),(0,a.kt)("p",null,'Defaults to false. Set this to true to make this entry a secret entry. Secret entries\ndon\'t display as "Locked" when locked, and instead will not display at all until\nunlocked. Secret entries do not count for % completion of the book, and when unlocked will\ninstead show as an additional line in the tooltip.'),(0,a.kt)("h2",{id:"read_by_default-boolean"},(0,a.kt)("strong",{parentName:"h2"},"read_by_default")," (boolean)"),(0,a.kt)("p",null,'Defaults to false. Set this to true if you want to entry to not show the unread ("(!!)")\nindicator if it hasn\'t been opened yet.'),(0,a.kt)("h2",{id:"sortnum-integer"},(0,a.kt)("strong",{parentName:"h2"},"sortnum")," (integer)"),(0,a.kt)("p",null,"The sorting number for this entry. Defaults to 0. Entries with the same sorting number are\nsorted alphabetically, whereas entries with different sorting numbers are sorted from\nlowest to highest. Priority entries always show up first."),(0,a.kt)("p",null,"It's recommended you do ",(0,a.kt)("em",{parentName:"p"},"not")," use this, as breaking the alphabetical sorting order can make\nthings confusing, but it's left as an option."),(0,a.kt)("h2",{id:"turnin-string"},(0,a.kt)("strong",{parentName:"h2"},"turnin")," (String)"),(0,a.kt)("p",null,'The ID of an advancement the player needs to do to "complete" this entry. The entry will\nshow up at the top of the list with a (?) icon next to it until this advancement is\ncomplete. This can be used as a quest system or simply to help guide players along a\nstarting path.'),(0,a.kt)("h2",{id:"extra_recipe_mappings-object-string---int"},(0,a.kt)("strong",{parentName:"h2"},"extra_recipe_mappings")," (Object String -> Int)"),(0,a.kt)("p",null,"Additional list of items this page teaches the crafting process for, for use with the\nin-world right click and quick lookup feature. Keys are ItemStack strings, values are\n0-indexed page numbers."))}d.isMDXComponent=!0}}]);