"use strict";(self.webpackChunkpatchouli_docs=self.webpackChunkpatchouli_docs||[]).push([[976],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,m=d["".concat(l,".").concat(k)]||d[k]||p[k]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1527:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="1.20 Upgrade Guide",u={unversionedId:"upgrading/upgrade-guide-120",id:"upgrading/upgrade-guide-120",isDocsHomePage:!1,title:"1.20 Upgrade Guide",description:"Resource Pack-based books Now Enforced",source:"@site/docs/upgrading/upgrade-guide-120.md",sourceDirName:"upgrading",slug:"/upgrading/upgrade-guide-120",permalink:"/Patchouli/docs/upgrading/upgrade-guide-120",editUrl:"https://github.com/VazkiiMods/Patchouli/edit/1.18.x/web/docs/upgrading/upgrade-guide-120.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1.17 Upgrade Guide",permalink:"/Patchouli/docs/upgrading/upgrade-guide-117"}},c=[{value:"Resource Pack-based books Now Enforced",id:"resource-pack-based-books-now-enforced",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"120-upgrade-guide"},"1.20 Upgrade Guide"),(0,a.kt)("h3",{id:"resource-pack-based-books-now-enforced"},"Resource Pack-based books Now Enforced"),(0,a.kt)("p",null,"Historically, Patchouli books have never properly respected resource packs nor datapacks,\ndespite the files being located in ",(0,a.kt)("inlineCode",{parentName:"p"},"/assets/")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/"),"."),(0,a.kt)("p",null,'In 1.17, "resource pack books" were introduced. These books load all of their content via\nthe resource pack system, from the ',(0,a.kt)("inlineCode",{parentName:"p"},"/assets/")," folder. However, due to technical reasons,\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"book.json")," that declares the book must still be located in ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/"),"."),(0,a.kt)("p",null,"In 1.20, this system is now required. All ",(0,a.kt)("inlineCode",{parentName:"p"},"book.json"),"s not loaded via\n",(0,a.kt)("inlineCode",{parentName:"p"},".minecraft/patchouli_books")," must specify ",(0,a.kt)("inlineCode",{parentName:"p"},"use_resource_pack: true"),", and the book contents\nmust be located under ",(0,a.kt)("inlineCode",{parentName:"p"},"/assets/<namespace>/patchouli_books/{categories, entries, ...}"),"."),(0,a.kt)("p",null,'People using the "external" ',(0,a.kt)("inlineCode",{parentName:"p"},".minecraft/patchouli_books")," may continue colocating all files\nunder that directory."),(0,a.kt)("p",null,'As a result, "extension books" are now obsolete. Any books that wish to extend another\nbook can simply add content via the resource pack system into the original book\'s\npaths. Book JSONs that specify the old ',(0,a.kt)("inlineCode",{parentName:"p"},"extend")," property will throw an exception."),(0,a.kt)("p",null,'This will temporarily regress the "Added By" indicators, which will show up less\noften. Detecting which mod or resource pack a file was loaded from is nontrivial in both\nForge and Fabric.'),(0,a.kt)("p",null,"In the future, we may explore options that also move the ",(0,a.kt)("inlineCode",{parentName:"p"},"book.json")," out of ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/")," and\ninto ",(0,a.kt)("inlineCode",{parentName:"p"},"/assets/"),"."),(0,a.kt)("p",null,"To recap, this is what your resources folder should look like going forward, for modders:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 assets\n\u2502\xa0\xa0 \u2514\u2500\u2500 your_namespace\n\u2502\xa0\xa0     \u2514\u2500\u2500 patchouli_books\n\u2502\xa0\xa0      \xa0\xa0 \u2514\u2500\u2500 your_book_name\n\u2502\xa0\xa0      \xa0\xa0  \xa0\xa0 \u251c\u2500\u2500 en_us\n\u2502\xa0\xa0      \xa0\xa0  \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 categories\n\u2502\xa0\xa0      \xa0\xa0  \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 entries\n\u2502\xa0\xa0      \xa0\xa0  \xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 templates\n\u2502\xa0\xa0      \xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 zh_cn\n\u2502\xa0\xa0      \xa0\xa0  \xa0\xa0     \u2514\u2500\u2500 entries\n\u2514\u2500\u2500 data\n \xa0\xa0 \u2514\u2500\u2500 your_namespace\n \xa0\xa0     \u2514\u2500\u2500 patchouli_books\n \xa0\xa0      \xa0\xa0 \u2514\u2500\u2500 your_book_name\n \xa0\xa0      \xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 book.json\n")),(0,a.kt)("p",null,"Addon modders and modpackers modifying an existing book will only need the ",(0,a.kt)("inlineCode",{parentName:"p"},"/assets/")," part\nabove, and should ship it in mod resources or a resource pack, respectively."),(0,a.kt)("p",null,"For those using the external folder, your structure will remain as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".minecraft\n\u2514\u2500\u2500 patchouli_books\n \xa0\xa0 \u2514\u2500\u2500 your_book_name\n \xa0\xa0     \u251c\u2500\u2500 book.json\n \xa0\xa0     \u2514\u2500\u2500 en_us\n \xa0\xa0         \u251c\u2500\u2500 categories\n \xa0\xa0         \u2514\u2500\u2500 entries\n")),(0,a.kt)("p",null,"If it sounds confusing, sorry, that's because it is. Patchouli's history of loading stuff\nis complicated due to several past mistakes that stuck with us. These changes already\ndrastically simplify the internals of how extensions and overriding work, so we appreciate\nyour patience."),(0,a.kt)("p",null,"In the future, we may investigate two further simplifications:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Somehow making books completely clientsided, so that nothing needs to be put in ",(0,a.kt)("inlineCode",{parentName:"li"},"/data/")),(0,a.kt)("li",{parentName:"ol"},"Removing the external folder and requiring resource pack usage for everything. This\nrequires the previous point to be done first.")))}d.isMDXComponent=!0}}]);