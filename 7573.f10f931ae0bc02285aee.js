(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[7573],{77573:(t,e,o)=>{o.r(e),o.d(e,{ExampleTuiEditorPasteImageToolModule:()=>P});var n=o(12057),i=o(24751),r=o(34016),s=o(47029),l=o(42600),a=o(43232),u=o(37195),c=o(74788),p=o(15997),g=o(73460),d=o(42328),m=o(23618),h=o(62463);const f={addProseMirrorPlugins:()=>[new h.Sy({props:{handleDOMEvents:{paste:(t,e)=>{const o=e.clipboardData?.getData("text/plain")??"";if(/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(o)){const n=t.state.schema.nodes.image.create({src:o}),i=t.state.tr.replaceSelectionWith(n);setTimeout((()=>t.dispatch(i))),e.preventDefault()}}}}})]};var w=o(8820),v=o(98778),b=o(16331),Z=o(18289),y=o(55788),_=o(36866);const x=["dropdown"];function A(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div",4),c.TgZ(1,"label",5),c.TgZ(2,"div",6),c._uU(3,"Image URL"),c.qZA(),c.TgZ(4,"div",7),c.TgZ(5,"tui-input-inline",8),c.NdJ("ngModelChange",(function(e){return c.CHM(t),c.oxw().url=e}))("keydown.enter",(function(){c.CHM(t);const e=c.oxw();return e.insertImage(e.url)})),c._uU(6),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=e.$implicit,o=c.oxw();c.Q6J("tuiActiveZoneParent",t),c.xp6(5),c.ekj("t-input_filled",o.url),c.Q6J("ngModel",o.url),c.xp6(1),c.hij(" ",o.placeholder," ")}}let T=(()=>{class t{constructor(t){this.editor=t,this.youtubeLogo='<?xml version="1.0" ?><svg width="24px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="385.829,128 385.829,256 347.429,291.072 307.2,256 272.457,241.371 306.59,165.51 " style="fill:#D32E2A;"/><polygon points="384,385.219 256,385.219 255.39,383.391 226.133,356.291 255.39,308.041 270.629,271.848   355.962,302.043 " style="fill:#3A5BBC;"/><polygon points="256.61,128.61 288.305,164.901 256.61,203.959 241.371,240.152 161.524,200.253 128,126.781   256,126.781 " style="fill:#FBBB00;"/><polygon points="239.543,270.629 204.495,346.843 126.171,384 126.171,256 163.962,232.558 204.8,256 " style="fill:#28B446;"/><polygon points="512,256 384,385.219 270.629,271.848 307.2,256 385.829,256 " style="fill:#518EF8;"/><polygon points="255.39,383.391 255.39,512 126.171,384 239.543,270.629 255.39,307.2 255.39,308.041 " style="fill:#91C646;"/><polygon points="241.371,240.152 204.8,256 126.171,256 0,256 128,126.781 " style="fill:#FFD837;"/><polygon points="385.829,128 272.457,241.371 256.61,204.8 256.61,203.959 256.61,128.61 256.61,0 " style="fill:#F14336;"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',this.placeholder="https://image.com/etc.png",this.url=""}insertImage(t){t&&(this.editor.setImage(t),this.dropdown?.close())}}return t.ɵfac=function(e){return new(e||t)(c.Y36(u.$3))},t.ɵcmp=c.Xpm({type:t,selectors:[["image-tool"]],viewQuery:function(t,e){if(1&t&&c.Gf(x,5),2&t){let t;c.iGM(t=c.CRH())&&(e.dropdown=t.first)}},decls:5,vars:4,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["appearance","flat","automation-id","youtube-tool__button","size","s","tuiIconButton","","type","button",1,"tool-button",3,"focusable","icon","pseudoActive"],["youtubeDropdown",""],[1,"youtube-tool-content",3,"tuiActiveZoneParent"],[1,"t-label"],[1,"t-label-properties"],[1,"t-url"],["tuiAutoFocus","",1,"t-input",3,"ngModel","ngModelChange","keydown.enter"]],template:function(t,e){if(1&t&&(c.TgZ(0,"tui-hosted-dropdown",0,1),c._UZ(2,"button",2),c.YNc(3,A,7,5,"ng-template",null,3,c.W1O),c.qZA()),2&t){const t=c.MAs(1),o=c.MAs(4);c.Q6J("content",o),c.xp6(2),c.Q6J("focusable",t.open)("icon",e.youtubeLogo)("pseudoActive",t.open)}},directives:[v.o,b.Ek,Z.v,y.e,_.l,i.JJ,i.On],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.youtube-tool-content[_ngcontent-%COMP%]{display:flex;min-height:4rem;align-items:center;padding-right:.75rem}.t-label[_ngcontent-%COMP%]{height:var(--tui-height-l);box-sizing:border-box;padding:.4375rem 1rem;min-width:12.5rem;max-width:25rem;width:100%}.t-input[_ngcontent-%COMP%]{flex:1;color:var(--tui-text-02)}.t-input_filled[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-url[_ngcontent-%COMP%]{max-width:12.5rem;min-width:12.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"],changeDetection:0}),t})();var U=o(77825);let C=(()=>{class t{constructor(){this.builtInTools=[u._2.Undo],this.control=new i.NI("")}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["tui-editor-paste-image-tool-example-1"]],features:[c._Bn([{provide:u.Wf,deps:[c.gxx],useFactory:t=>[Promise.resolve().then(o.bind(o,25923)).then((({StarterKit:t})=>t)),Promise.resolve().then(o.bind(o,89681)).then((({tuiCreateImageEditorExtension:e})=>e({injector:t}).extend(f)))]}])],decls:6,vars:2,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"]],template:function(t,e){1&t&&(c.TgZ(0,"tui-editor",0),c.ynx(1,1),c._UZ(2,"image-tool",2),c.TgZ(3,"span",3),c._UZ(4,"tui-svg",4),c._uU(5," click it "),c.qZA(),c.BQk(),c.qZA()),2&t&&c.Q6J("formControl",e.control)("tools",e.builtInTools)},directives:[w.a,i.JJ,i.oH,T,U.P],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),t})(),k=(()=>{class t{constructor(){this.example1={HTML:o.e(6969).then(o.t.bind(o,46969,17)),TypeScript:o.e(7170).then(o.t.bind(o,87170,17)),LESS:o.e(3505).then(o.t.bind(o,33505,17)),"image-tool/paste.extension.ts":o.e(6158).then(o.t.bind(o,76158,17)),"image-tool/image-tool.component.ts":o.e(7090).then(o.t.bind(o,77090,17)),"image-tool/image-tool.template.html":o.e(9284).then(o.t.bind(o,59284,17)),"image-tool/image-tool.styles.less":o.e(5988).then(o.t.bind(o,15988,17)),"image-tool/image-tool.module.ts":o.e(3065).then(o.t.bind(o,63065,17))}}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["editor-emoji-tool"]],features:[c._Bn([{provide:u.Wf,useValue:u.PD}])],decls:31,vars:1,consts:[["header","Editor","type","components"],["href","https://www.tiptap.dev/","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["id","custom-image-tool","heading","Custom image tool",3,"content"],[1,"tui-list","tui-space_bottom-6"],[1,"tui-list__item"],["href","https://tiptap.dev/api/introduction","rel","noreferrer","target","_blank","tuiLink",""],["tuiText","<tui-editor>"]],template:function(t,e){1&t&&(c.TgZ(0,"tui-doc-page",0),c.TgZ(1,"p"),c._uU(2," Rich Text Editor based on "),c.TgZ(3,"a",1),c._uU(4," TipTap Editor "),c.qZA(),c._uU(5," for using with Angular forms. For safety reasons use a "),c.TgZ(6,"a",2),c._uU(7," sanitizer "),c.qZA(),c._uU(8," with this component. "),c.qZA(),c.TgZ(9,"tui-doc-example",3),c._uU(10," You can create your own tool: "),c.TgZ(11,"ul",4),c.TgZ(12,"li",5),c._uU(13," Create component with tool button, which can get access to "),c.TgZ(14,"a",6),c._uU(15," original TipTap editor API "),c.qZA(),c._uU(16," via "),c.TgZ(17,"code"),c._uU(18,"TuiTiptapEditorService"),c.qZA(),c._uU(19," from "),c.TgZ(20,"code"),c._uU(21,"@tbank/tui-editor"),c.qZA(),c._uU(22," . "),c.qZA(),c.TgZ(23,"li",5),c._uU(24," Pass the component as content projection (with "),c.TgZ(25,"code"),c._uU(26,'ngProjectAs="tools"'),c.qZA(),c._uU(27," ) to "),c._UZ(28,"code",7),c._uU(29," . "),c.qZA(),c.qZA(),c._UZ(30,"tui-editor-paste-image-tool-example-1"),c.qZA(),c.qZA()),2&t&&(c.xp6(9),c.Q6J("content",e.example1))},directives:[p.q,g.V,r.yS,d.f,m.v,C],encapsulation:2,changeDetection:0}),t})();var q=o(86655);let M=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=c.oAB({type:t}),t.ɵinj=c.cJS({imports:[[i.u5,n.ez,a.fNO,q.z$l,a.jhF,l.Ah6,a.dpK]]}),t})(),P=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=c.oAB({type:t}),t.ɵinj=c.cJS({imports:[[n.ez,l.Ah6,a.EIu,a.jzK,a.jhF,a.fNO,s.fV,i.u5,i.UX,u.T_,M,u.GK,r.Bz.forChild((0,s.Ve)(k)),s.Zp]]}),t})()}}]);