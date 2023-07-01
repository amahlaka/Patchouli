"use strict";(self.webpackChunkpatchouli_docs=self.webpackChunkpatchouli_docs||[]).push([[370],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(o),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return o?n.createElement(k,i(i({ref:t},p),{},{components:o})):n.createElement(k,i({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6390:function(e,t,o){o.r(t),o.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],l={sidebar_position:1},s="Getting Started",u={unversionedId:"patchouli-basics/getting-started",id:"patchouli-basics/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"This entry serves as a quick guide of what to do to get started making your own Patchouli",source:"@site/docs/patchouli-basics/getting-started.md",sourceDirName:"patchouli-basics",slug:"/patchouli-basics/getting-started",permalink:"/Patchouli/docs/patchouli-basics/getting-started",editUrl:"https://github.com/VazkiiMods/Patchouli/edit/1.18.x/web/docs/patchouli-basics/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/Patchouli/docs/patchouli-basics/prerequisites"},next:{title:"Gating Content with Advancements",permalink:"/Patchouli/docs/patchouli-basics/advancement-locking"}},p=[{value:"0. Install Patchouli",id:"0-install-patchouli",children:[]},{value:"1. Locate patchouli_books",id:"1-locate-patchouli_books",children:[]},{value:"2. Create your folder structure",id:"2-create-your-folder-structure",children:[]},{value:"3. Populate book.json",id:"3-populate-bookjson",children:[]},{value:"4. Check ingame",id:"4-check-ingame",children:[]},{value:"5. Add Stub Content",id:"5-add-stub-content",children:[]},{value:"6. Learn More!",id:"6-learn-more",children:[]},{value:"7. Use the Book Item",id:"7-use-the-book-item",children:[]},{value:"8. Some Pointers",id:"8-some-pointers",children:[]},{value:"Appendix A: Example file structures",id:"appendix-a-example-file-structures",children:[]}],c={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"This entry serves as a quick guide of what to do to get started making your own Patchouli\nbooks, read on and follow carefully!"),(0,r.kt)("h3",{id:"0-install-patchouli"},"0. Install Patchouli"),(0,r.kt)("p",null,"Pretty obvious. For modders, you can load it as a lib to your mod project or just drop it\nin your workspace's mods folder. The preferred way is to use maven, which you find the\naddress for in the repo's readme. For non-modders, obtain the mod through the usual\ndistribution channels."),(0,r.kt)("h3",{id:"1-locate-patchouli_books"},"1. Locate patchouli_books"),(0,r.kt)("p",null,"Your books and their contents will go in your ",(0,r.kt)("inlineCode",{parentName:"p"},"patchouli_books")," directory, so you need to\nfind it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modpack authors can use the external folder ",(0,r.kt)("inlineCode",{parentName:"li"},".minecraft/patchouli_books"),", located next\nto the ",(0,r.kt)("inlineCode",{parentName:"li"},"mods")," folder. If it doesn't exist, create it."),(0,r.kt)("li",{parentName:"ul"},"For modders, it'll be ",(0,r.kt)("inlineCode",{parentName:"li"},"/data/_YOURMODID_/patchouli_books")," in your resources, you'll have\nto make it yourself. You will also need to create a mirroring\n",(0,r.kt)("inlineCode",{parentName:"li"},"/assets/_YOURMODID_/patchouli_books")," directory as well.")),(0,r.kt)("h3",{id:"2-create-your-folder-structure"},"2. Create your folder structure"),(0,r.kt)("p",null,"Once you find ",(0,r.kt)("inlineCode",{parentName:"p"},"patchouli_books"),", decide on a name for your book. Only lower case characters\nand underscores are allowed. This is the internal name for your book, and we encourage you\nto make it distinctive. For mods, you should name it after what the book is for\n(e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"lexicon")," for Botania). For modpacks, name it something with your modpack's name,\nfor example ",(0,r.kt)("inlineCode",{parentName:"p"},"crucial_2_guide_book"),". After you have a name, create folders and files inside\npatchouli_books so that it looks like this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"patchouli_books"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<the name you just chose>")," (folder)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"book.json")," (empty file)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"en_us")," (folder)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entries")," (empty folder)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"categories")," (empty folder)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"templates")," (empty folder)")))))))),(0,r.kt)("p",null,"You may have as many books as you want, even within the same mod(pack). Each book has a\n",(0,r.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Namespaced_ID"},"Namespaced ID"),". If the book is part of a\nmod, the namespace is that mod's ID. If the book is loaded from the\n",(0,r.kt)("inlineCode",{parentName:"p"},".minecraft/patchouli_books")," folder, the namespace is ",(0,r.kt)("inlineCode",{parentName:"p"},"patchouli"),". The second part of the\nnamespaced ID is the name you chose above. So for Botania, the full book ID is\n",(0,r.kt)("inlineCode",{parentName:"p"},"botania:lexicon"),"."),(0,r.kt)("p",null,"Note that creating an ",(0,r.kt)("inlineCode",{parentName:"p"},"en_us"),' folder means you\'re creating the "English" version of your\nbook. The contents you put in the ',(0,r.kt)("inlineCode",{parentName:"p"},"en_us"),' folder are always the "main" ones loaded, so\neven if your book isn\'t meant to be natively in english, you need to put your main stuff\nthere.'),(0,r.kt)("p",null,"Any translators may create folders with their languages and override any files they\nwish. They're automatically loaded if the game language is changed. For translators:\nPlease don't include in your folder anything you aren't overriding."),(0,r.kt)("h3",{id:"3-populate-bookjson"},"3. Populate book.json"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"book.json")," is what tells Patchouli that a book exists. It should be located in one of the\nfollowing places, as described above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/data/_YOURMODID_/patchouli_books/_YOURBOOKNAME_/book.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".minecraft/patchouli_books/_YOURBOOKNAME_/book.json"))),(0,r.kt)("p",null,"Open it up using a text editor, and fill it in as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "My First Book!",\n    "landing_text": "Welcome to Patchouli",\n    "version": 1,\n    "creative_tab": "minecraft:tools_and_utilities",\n    "use_resource_pack": true\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"landing_text")," values show up on the book UI on the landing UI.  The\n",(0,r.kt)("inlineCode",{parentName:"p"},"version")," field specifies which edition your book is. Whenever you update your book, you\nshould also update the edition value. For modders, you can use localization keys in both\n",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"landing_text"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"use_resource_pack")," must be set to true for books declared in ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/"),", but is optional\nfor books declared in ",(0,r.kt)("inlineCode",{parentName:"p"},".minecraft/"),". Setting the flag requires that the book's contents\n(see step 5) are loaded through the resource pack system."),(0,r.kt)("p",null,"For more customization options, please read ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/book-json"},"Book JSON\nFormat"),". (highly recommended!)"),(0,r.kt)("h3",{id:"4-check-ingame"},"4. Check ingame"),(0,r.kt)("p",null,"Load your game and check if your book is there. Unless you specified otherwise, it should\nbe in the Tools and Utilities creative tab, but you can also search for it. Opening the\nbook should yield a blank landing page."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of blank Patchouli book on landing page",src:o(3663).Z})),(0,r.kt)("p",null,"If you don't see it, check if Patchouli is properly loaded and if there's any errors in\nyour log."),(0,r.kt)("p",null,"Everything after this can be hot loaded without closing the game, so feel free to keep it\nopen as you do further edits."),(0,r.kt)("h3",{id:"5-add-stub-content"},"5. Add Stub Content"),(0,r.kt)("p",null,"Time to add some content to your book!"),(0,r.kt)("p",null,"Go to your ",(0,r.kt)("em",{parentName:"p"},"book content folder"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"use_resource_pack")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", this will be\n",(0,r.kt)("inlineCode",{parentName:"p"},"/assets/_YOURBOOKNAMESPACE_/patchouli_books/_YOURBOOKNAME_"),", within a resource pack (or\nmod resources). Otherwise, it is the same folder as ",(0,r.kt)("inlineCode",{parentName:"p"},"book.json"),"."),(0,r.kt)("p",null,"Within that folder, create the following structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"en_us",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"entries (folder)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"test (folder)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"test_entry.json (empty file)"))))),(0,r.kt)("li",{parentName:"ul"},"categories (folder)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"test_category.json (empty file)"))),(0,r.kt)("li",{parentName:"ul"},"templates (empty folder)")))),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"test_entry.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"test_category.json")," and fill them in as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="test_entry.json"',title:'"test_entry.json"'},'{\n    "name": "Test Entry",\n    "icon": "minecraft:writable_book",\n    "category": "your_book_namespace_change_me:test_category",\n    "pages": [\n        {\n            "type": "patchouli:text",\n            "text": "This is a test entry, but it should show up!"\n        }\n    ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="test_category.json"',title:'"test_category.json"'},'{\n    "name": "Test Category",\n    "description": "This is a test category for testing!",\n    "icon": "minecraft:writable_book"\n}\n')),(0,r.kt)("p",null,'You\'ll need to edit the "category" key in the test entry to have the right namespace.'),(0,r.kt)("p",null,"Save your files, then return ingame and open your book. Shift-click the pencil in the\nbottom-left corner. When you do so, it will reload the book contents, and you should see\nthe category and entry you just defined appear."),(0,r.kt)("h3",{id:"6-learn-more"},"6. Learn More!"),(0,r.kt)("p",null,"You're done getting set up, now it's time to learn more about what you can do with\nPatchouli's book system. Check the following pages out:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/patchouli-basics/advancement-locking"},"Locking Content with Advancements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/patchouli-basics/text-formatting"},"Text Formatting 101")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/book-json"},"Book JSON Format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/category-json"},"Category JSON Format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/entry-json"},"Entry JSON Format"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/patchouli-basics/page-types"},"Default Page Types")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/patchouli-basics/templates"},"Using Templates"))),(0,r.kt)("h3",{id:"7-use-the-book-item"},"7. Use the Book Item"),(0,r.kt)("p",null,"Here's a few examples of how to use your book's item. As a refresher, your book's\n",(0,r.kt)("em",{parentName:"p"},"namespace")," is your mod id, if you're a modder, and ",(0,r.kt)("inlineCode",{parentName:"p"},"patchouli"),', if you\'re a pack\nmaker. Then, if your folder is called "coolbook" then your ',(0,r.kt)("em",{parentName:"p"},"book ID")," is\n",(0,r.kt)("inlineCode",{parentName:"p"},"yourbooknamespace:coolbook"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CraftTweaker"),":",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'<patchouli:guide_book>.withTag({"patchouli:book": "YOURBOOKID"});'),(0,r.kt)("br",{parentName:"p"}),"\n","or just use ",(0,r.kt)("inlineCode",{parentName:"p"},"/ct hand")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Vanilla Recipes/Advancements"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"item": "patchouli:guide_book",\n"nbt": {\n    "patchouli:book": "YOURBOOKID"\n}\n')),(0,r.kt)("h3",{id:"8-some-pointers"},"8. Some Pointers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For modpack makers, if you want to use your own images, textures, sounds, or other\nassets, you'll need a tool to load them in, such as ",(0,r.kt)("a",{parentName:"li",href:"https://www.curseforge.com/minecraft/mc-mods/open-loader"},"Open\nLoader"),"."),(0,r.kt)("li",{parentName:"ul"},"To grant your book to new players automatically, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/patchouli-basics/giving-new"},"this\npage")),(0,r.kt)("li",{parentName:"ul"},"You need to reload the game to load new book.json files, but not the book contents."),(0,r.kt)("li",{parentName:"ul"},"Book contents are purely client sided, whereas book.json files are loaded by the server\ntoo."),(0,r.kt)("li",{parentName:"ul"},"You don't have to put your entries in folders corresponding to the categories they\nbelong in, but it helps with organization!"),(0,r.kt)("li",{parentName:"ul"},"No dependencies are needed if you're a modder, not even any code. Patchouli\nautomatically finds your files if you put them in the right place.")),(0,r.kt)("h3",{id:"appendix-a-example-file-structures"},"Appendix A: Example file structures"),(0,r.kt)("h4",{id:"for-a-modder"},"For a modder"),(0,r.kt)("p",null,"Your ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources/")," should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 assets\n\u2502\xa0\xa0 \u2514\u2500\u2500 your_mod_id_change_me\n\u2502\xa0\xa0     \u2514\u2500\u2500 patchouli_books\n\u2502\xa0\xa0      \xa0\xa0 \u2514\u2500\u2500 your_book_name_change_me\n\u2502\xa0\xa0      \xa0\xa0  \xa0\xa0 \u251c\u2500\u2500 en_us\n\u2502\xa0\xa0      \xa0\xa0  \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 categories\n\u2502\xa0\xa0      \xa0\xa0  \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 entries\n\u2502\xa0\xa0      \xa0\xa0  \xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 templates\n\u2502\xa0\xa0      \xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 zh_cn\n\u2502\xa0\xa0      \xa0\xa0  \xa0\xa0     \u2514\u2500\u2500 entries\n\u2514\u2500\u2500 data\n \xa0\xa0 \u2514\u2500\u2500 your_mod_id_change_me\n \xa0\xa0     \u2514\u2500\u2500 patchouli_books\n \xa0\xa0      \xa0\xa0 \u2514\u2500\u2500 your_book_name_change_me\n \xa0\xa0      \xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 book.json\n")),(0,r.kt)("h4",{id:"for-an-addon-modder-or-modpacker-modifying-another-mods-book"},"For an addon modder, or modpacker modifying another mod's book"),(0,r.kt)("p",null,"Ship the following in a resource pack, containing the files you'd like to add or override in the target book:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u2514\u2500\u2500 assets\n \xa0\xa0 \u2514\u2500\u2500 mod_id_of_the_book_change_me\n \xa0\xa0     \u2514\u2500\u2500 patchouli_books\n \xa0\xa0      \xa0\xa0 \u2514\u2500\u2500 the_book_name_to_modify_change_me\n \xa0\xa0      \xa0\xa0  \xa0\xa0 \u251c\u2500\u2500 en_us\n \xa0\xa0      \xa0\xa0  \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 categories\n \xa0\xa0      \xa0\xa0  \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 entries\n \xa0\xa0      \xa0\xa0  \xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 templates\n \xa0\xa0      \xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 zh_cn\n \xa0\xa0      \xa0\xa0  \xa0\xa0     \u2514\u2500\u2500 entries\n")),(0,r.kt)("p",null,"Note: For modders, resource loading order caveats apply. Please be careful when overriding\ncontent."),(0,r.kt)("h4",{id:"for-modpackers-creating-a-new-book"},"For modpackers creating a new book"),(0,r.kt)("p",null,"Your ",(0,r.kt)("inlineCode",{parentName:"p"},".minecraft")," should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".minecraft\n\u2514\u2500\u2500 patchouli_books\n \xa0\xa0 \u2514\u2500\u2500 your_book_name_change_me\n \xa0\xa0     \u251c\u2500\u2500 book.json\n \xa0\xa0     \u2514\u2500\u2500 en_us\n \xa0\xa0         \u251c\u2500\u2500 categories\n \xa0\xa0         \u2514\u2500\u2500 entries\n")))}d.isMDXComponent=!0},3663:function(e,t,o){t.Z=o.p+"assets/images/gettingStarted-caaf8854655999ab1d54fbc867649446.png"}}]);