(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[1630],{51630:(t,e,o)=>{o.r(e),o.d(e,{default:()=>w});var n=o(28941),i=o(18928),s=o(3003),r=o(33893),a=o(20092),c=o(91987),u=o(88692),l=o(64537),p=o(55788),d=o(6947),m=o(16331),g=o(18289);function h(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"button",6),l.NdJ("click",(function(){const e=l.CHM(t).$implicit,o=l.oxw(2);return l.KtG(o.insertSmile(e))})),l.qZA()}if(2&t){const t=e.$implicit;l.Q6J("innerHTML",t,l.oJD)}}function f(t,e){if(1&t&&(l.TgZ(0,"div",4),l.YNc(1,h,1,1,"button",5),l.qZA()),2&t){const t=e.$implicit,o=l.oxw();l.Q6J("tuiActiveZoneParent",t),l.xp6(1),l.Q6J("ngForOf",o.smiles)}}let T=(()=>{class t{constructor(){this.editor=(0,l.f3M)(r.TuiTiptapEditorService),this.smiles=["&#129409;","&#9200;","&#9749;","&#9989;","&#10060;","&#10071;","&#10133;","&#128064;","&#128070;","&#128076;","&#128522;","&#128640;"]}insertSmile(t){this.editor.getOriginTiptapEditor().chain().focus().insertContent(`<p data-type="emoji">${t}</p>`).insertContent(" ").run()}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["smiles-tool"]],standalone:!0,features:[l.jDz],decls:5,vars:3,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["appearance","icon","automation-id","smiles-tool__button","icon","tuiIconStarLarge","size","s","tuiIconButton","","type","button",1,"tool-button",3,"focusable","pseudoActive"],["smileDropdown",""],[1,"smiles",3,"tuiActiveZoneParent"],["type","button","class","smile",3,"innerHTML","click",4,"ngFor","ngForOf"],["type","button",1,"smile",3,"innerHTML","click"]],template:function(t,e){if(1&t&&(l.TgZ(0,"tui-hosted-dropdown",0,1),l._UZ(2,"button",2),l.YNc(3,f,2,2,"ng-template",null,3,l.W1O),l.qZA()),2&t){const t=l.MAs(1),e=l.MAs(4);l.Q6J("content",e),l.xp6(2),l.Q6J("focusable",t.open)("pseudoActive",t.open)}},dependencies:[c.Ah6,p.e,u.sg,s.jhF,d.o,m.Ek,s.fNO,g.v],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.smiles[_ngcontent-%COMP%]{max-width:18rem;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center}.smile[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;flex:1 0 21%;cursor:pointer;border-radius:var(--tui-radius-s);font:var(--tui-font-heading-4);padding:1rem}.smile[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}"],changeDetection:0}),t})();var _=o(77825),b=o(32489);let Z=(()=>{class t{constructor(){this.builtInTools=[r.TuiEditorTool.Undo],this.control=new a.NI("")}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["tui-editor-paste-emoji-tool-example-1"]],standalone:!0,features:[l._Bn([{provide:r.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(o.bind(o,33893)).then((({TuiStarterKit:t})=>t)),o.e(7133).then(o.bind(o,27133)).then((({EmojiExtension:t})=>t))]}]),l.jDz],decls:7,vars:2,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"]],template:function(t,e){1&t&&(l.TgZ(0,"tui-editor",0),l._uU(1," Smiles are custom tool. Try it. "),l.ynx(2,1),l._UZ(3,"smiles-tool",2),l.TgZ(4,"span",3),l._UZ(5,"tui-svg",4),l._uU(6," click it "),l.qZA(),l.BQk(),l.qZA()),2&t&&l.Q6J("formControl",e.control)("tools",e.builtInTools)},dependencies:[s.EIu,_.P,T,c.HOV,b.w,a.UX,a.JJ,a.oH,r.TuiEditorComponent],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),t})();var v=o(52442),U=o(73460),A=o(65490);let w=(()=>{class t{constructor(){this.example1={HTML:o.e(6416).then(o.t.bind(o,6416,17)),TypeScript:o.e(1091).then(o.t.bind(o,1091,17)),LESS:o.e(2785).then(o.t.bind(o,52785,17)),"smiles-tool/emoji.extension.ts":o.e(5557).then(o.t.bind(o,95557,17)),"smiles-tool/smiles-tool.component.ts":o.e(8760).then(o.t.bind(o,48760,17)),"smiles-tool/smiles-tool.template.html":o.e(5625).then(o.t.bind(o,65625,17)),"smiles-tool/smiles-tool.styles.less":o.e(1720).then(o.t.bind(o,21720,17))}}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["editor-paste-emoji-tool"]],standalone:!0,features:[l._Bn([{provide:r.TUI_EDITOR_EXTENSIONS,useValue:r.TUI_EDITOR_DEFAULT_EXTENSIONS}]),l.jDz],decls:31,vars:1,consts:[["header","Editor","type","components"],["href","https://www.tiptap.dev/","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["id","custom-tool","heading","Custom emoji tool",3,"content"],[1,"tui-list","tui-space_bottom-6"],[1,"tui-list__item"],["href","https://tiptap.dev/api/introduction","rel","noreferrer","target","_blank","tuiLink",""],["tuiText","<tui-editor>"]],template:function(t,e){1&t&&(l.TgZ(0,"tui-doc-page",0)(1,"p"),l._uU(2," Rich Text Editor based on "),l.TgZ(3,"a",1),l._uU(4," TipTap Editor "),l.qZA(),l._uU(5," for using with Angular forms. For safety reasons use a "),l.TgZ(6,"a",2),l._uU(7," sanitizer "),l.qZA(),l._uU(8," with this component. "),l.qZA(),l.TgZ(9,"tui-doc-example",3),l._uU(10," You can create your own tool: "),l.TgZ(11,"ul",4)(12,"li",5),l._uU(13," Create component with tool button, which can get access to "),l.TgZ(14,"a",6),l._uU(15," original TipTap editor API "),l.qZA(),l._uU(16," via "),l.TgZ(17,"code"),l._uU(18,"TuiTiptapEditorService"),l.qZA(),l._uU(19," from "),l.TgZ(20,"code"),l._uU(21,"@tinkoff/tui-editor"),l.qZA(),l._uU(22," . "),l.qZA(),l.TgZ(23,"li",5),l._uU(24," Pass the component as content projection (with "),l.TgZ(25,"code"),l._uU(26,'ngProjectAs="tools"'),l.qZA(),l._uU(27," ) to "),l._UZ(28,"code",7),l._uU(29," . "),l.qZA()(),l._UZ(30,"tui-editor-paste-emoji-tool-example-1"),l.qZA()()),2&t&&(l.xp6(9),l.Q6J("content",e.example1))},dependencies:[Z,i.Lq,v.q,s.jzK,U.V,n.rH,i.u4,A.f],encapsulation:2,changeDetection:0}),t})()}}]);