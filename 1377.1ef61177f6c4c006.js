(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[1377],{51377:(t,n,o)=>{o.r(n),o.d(n,{default:()=>h});var e=o(43226),i=o(33407),r=o(9178),s=o(39716),c=o(76733),a=o(20755),u=o(39986),l=o(60598);function d(t,n){if(1&t){const t=a.EpF();a.TgZ(0,"button",6),a.NdJ("click",(function(){const n=a.CHM(t).$implicit,o=a.oxw(2);return a.KtG(o.insertSmile(n))})),a.qZA()}if(2&t){const t=n.$implicit;a.Q6J("innerHTML",t,a.oJD)}}function p(t,n){if(1&t&&(a.TgZ(0,"div",4),a.YNc(1,d,1,1,"button",5),a.qZA()),2&t){const t=n.$implicit,o=a.oxw();a.Q6J("tuiActiveZoneParent",t),a.xp6(1),a.Q6J("ngForOf",o.smiles)}}let m=(()=>{var t;class n{constructor(){this.editor=(0,a.f3M)(s.TuiTiptapEditorService),this.smiles=["&#129409;","&#9200;","&#9749;","&#9989;","&#10060;","&#10071;","&#10133;","&#128064;","&#128070;","&#128076;","&#128522;","&#128640;"]}insertSmile(t){this.editor.getOriginTiptapEditor().chain().focus().insertContent(`<p data-type="emoji">${t}</p>`).insertContent(" ").run()}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=a.Xpm({type:t,selectors:[["smiles-tool"]],standalone:!0,features:[a.jDz],decls:5,vars:1,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["appearance","icon","automation-id","smiles-tool__button","iconLeft","tuiIconStar","size","s","tuiIconButton","","type","button",1,"tool-button"],["smileDropdown",""],[1,"smiles",3,"tuiActiveZoneParent"],["type","button","class","smile",3,"innerHTML","click",4,"ngFor","ngForOf"],["type","button",1,"smile",3,"innerHTML","click"]],template:function(t,n){if(1&t&&(a.TgZ(0,"tui-hosted-dropdown",0,1),a._UZ(2,"button",2),a.YNc(3,p,2,2,"ng-template",null,3,a.W1O),a.qZA()),2&t){const t=a.MAs(4);a.Q6J("content",t)}},dependencies:[i.eJF,c.sg,r.jhF,u.o,l.Ek,r.m$g],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.smiles[_ngcontent-%COMP%]{max-width:18rem;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center}.smile[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;flex:1 0 21%;cursor:pointer;border-radius:var(--tui-radius-s);font:var(--tui-font-heading-4);padding:1rem}.smile[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}"],changeDetection:0}),n})();var g=o(42918),f=o(62417);const h=(()=>{var t;class n{constructor(){this.builtInTools=[s.TuiEditorTool.Undo],this.control=new e.NI("")}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=a.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[a._Bn([{provide:s.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(o.bind(o,39716)).then((({TuiStarterKit:t})=>t)),o.e(2330).then(o.bind(o,52330)).then((({EmojiExtension:t})=>t))]}]),a.jDz],decls:7,vars:2,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"]],template:function(t,n){1&t&&(a.TgZ(0,"tui-editor",0),a._uU(1," Smiles are custom tool. Try it. "),a.ynx(2,1),a._UZ(3,"smiles-tool",2),a.TgZ(4,"span",3),a._UZ(5,"tui-svg",4),a._uU(6," click it "),a.qZA(),a.BQk(),a.qZA()),2&t&&a.Q6J("formControl",n.control)("tools",n.builtInTools)},dependencies:[r.EIu,g.P,m,i.HOV,f.w,e.UX,e.JJ,e.oH,s.TuiEditorComponent],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),n})()}}]);