(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[5920],{55920:(t,e,o)=>{o.r(e),o.d(e,{default:()=>M});var n=o(28941),i=o(18928),u=o(3003),r=o(33893),s=o(84911),l=o(64537),d=o(20092),c=o(5998),a=o(91987),p=o(54294),h=o(36866),g=o(30528),b=o(55788),m=o(6947),w=o(16331),f=o(18289);const y=["dropdown"];function v(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"div",4)(1,"label",5)(2,"div",6),l._uU(3,"Youtube URL"),l.qZA(),l.TgZ(4,"div",7)(5,"tui-input-inline",8),l.NdJ("ngModelChange",(function(e){l.CHM(t);const o=l.oxw();return l.KtG(o.url=e)}))("keydown.enter",(function(){l.CHM(t);const e=l.oxw();return l.KtG(e.insertYoutubeVideo(e.url))})),l._uU(6),l.qZA()()()()}if(2&t){const t=e.$implicit,o=l.oxw();l.Q6J("tuiActiveZoneParent",t),l.xp6(5),l.ekj("t-input_filled",o.url),l.Q6J("ngModel",o.url),l.xp6(1),l.hij(" ",o.placeholder," ")}}let T=(()=>{class t{constructor(){this.editor=(0,l.f3M)(r.TuiTiptapEditorService),this.youtubeLogo='<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'><svg height="24px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x33_95-youtube"><g><path d="M476.387,144.888c-5.291-19.919-20.878-35.608-40.67-40.933C399.845,94.282,256,94.282,256,94.282    s-143.845,0-179.719,9.674c-19.791,5.325-35.378,21.013-40.668,40.933c-9.612,36.105-9.612,111.438-9.612,111.438    s0,75.334,9.612,111.438c5.29,19.92,20.877,34.955,40.668,40.281C112.155,417.719,256,417.719,256,417.719    s143.845,0,179.717-9.674c19.792-5.326,35.379-20.361,40.67-40.281c9.612-36.104,9.612-111.438,9.612-111.438    S485.999,180.994,476.387,144.888z" style="fill:#FF0000;"/><polygon points="208.954,324.723 208.954,187.93 329.18,256.328   " style="fill:#FFFFFF;"/></g></g><g id="Layer_1"/></svg>',this.placeholder="https://www.youtube.com/embed/j2_NnV7nU6s",this.url=""}insertYoutubeVideo(t){var e;if(t){const o=this.editor.state.selection.anchor;this.editor.enter(),this.editor.setTextSelection(o),this.editor.setYoutubeVideo({src:t,width:"100%"}),this.url="",null===(e=this.dropdown)||void 0===e||e.close()}}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["youtube-tool"]],viewQuery:function(t,e){if(1&t&&l.Gf(y,5),2&t){let t;l.iGM(t=l.CRH())&&(e.dropdown=t.first)}},standalone:!0,features:[l.jDz],decls:5,vars:4,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["appearance","flat","automation-id","youtube-tool__button","size","s","tuiIconButton","","type","button",1,"tool-button",3,"focusable","icon","pseudoActive"],["youtubeDropdown",""],[1,"youtube-tool-content",3,"tuiActiveZoneParent"],[1,"t-label"],[1,"t-label-properties"],[1,"t-url"],["tuiAutoFocus","",1,"t-input",3,"ngModel","ngModelChange","keydown.enter"]],template:function(t,e){if(1&t&&(l.TgZ(0,"tui-hosted-dropdown",0,1),l._UZ(2,"button",2),l.YNc(3,v,7,5,"ng-template",null,3,l.W1O),l.qZA()),2&t){const t=l.MAs(1),o=l.MAs(4);l.Q6J("content",o),l.xp6(2),l.Q6J("focusable",t.open)("icon",e.youtubeLogo)("pseudoActive",t.open)}},dependencies:[p.z$l,h.l,a.Q7V,g.k,d.u5,d.JJ,d.On,a.Ah6,b.e,u.jhF,m.o,w.Ek,u.fNO,f.v],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.youtube-tool-content[_ngcontent-%COMP%]{display:flex;min-height:4rem;align-items:center;padding-right:.75rem}.t-label[_ngcontent-%COMP%]{height:var(--tui-height-l);box-sizing:border-box;padding:.4375rem 1rem;min-width:12.5rem;max-width:25rem;width:100%}.t-input[_ngcontent-%COMP%]{flex:1;color:var(--tui-text-02)}.t-input_filled[_ngcontent-%COMP%]{color:var(--tui-text-01)}"],changeDetection:0}),t})();var _=o(77825),x=o(32489);class Z{constructor(){this.sanitizer=(0,l.f3M)(c.H7),this.builtInTools=[r.TuiEditorTool.Undo],this.control=new d.NI('\n        <p>Editor now supports YouTube embeds!</p>\n        <div data-youtube-video>\n            <iframe width="100%" src="https://www.youtube.com/watch?v=KdO8CFCXQu0"></iframe>\n        </div>\n        <p>Try adding your own video to this editor!</p>\n    ',d.kI.required)}safe(t){return this.sanitizer.bypassSecurityTrustHtml(null!=t?t:"")}}Z.ɵfac=function(t){return new(t||Z)},Z.ɵcmp=l.Xpm({type:Z,selectors:[["tui-editor-embed-youtube-example-1"]],standalone:!0,features:[l._Bn([{provide:r.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(o.bind(o,33893)).then((({TuiStarterKit:t})=>t)),Promise.resolve().then(o.bind(o,33893)).then((({TuiYoutube:t})=>t))]}]),l.jDz],decls:13,vars:4,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"],[3,"innerHTML"]],template:function(t,e){1&t&&(l.TgZ(0,"tui-editor",0),l.ynx(1,1),l._UZ(2,"youtube-tool",2),l.TgZ(3,"span",3),l._UZ(4,"tui-svg",4),l._uU(5," click it "),l.qZA(),l.BQk(),l.qZA(),l.TgZ(6,"h4"),l._uU(7,"HTML:"),l.qZA(),l._UZ(8,"div",5),l.TgZ(9,"h4"),l._uU(10,"Text:"),l.qZA(),l.TgZ(11,"p"),l._uU(12),l.qZA()),2&t&&(l.Q6J("formControl",e.control)("tools",e.builtInTools),l.xp6(8),l.Q6J("innerHTML",e.safe(e.control.value),l.oJD),l.xp6(4),l.Oqu(e.control.value))},dependencies:[u.EIu,_.P,T,d.UX,d.JJ,d.oH,a.HOV,x.w,r.TuiEditorComponent],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),(0,s.gn)([a.UMq],Z.prototype,"safe",null);var U=o(65490),A=o(52442),C=o(73460);let M=(()=>{class t{constructor(){this.example1={HTML:o.e(250).then(o.t.bind(o,50250,17)),TypeScript:o.e(5501).then(o.t.bind(o,5501,17)),LESS:o.e(6847).then(o.t.bind(o,26847,17)),"youtube-tool/youtube-tool.component.ts":o.e(6014).then(o.t.bind(o,76014,17)),"youtube-tool/youtube-tool.template.html":o.e(8229).then(o.t.bind(o,28229,17)),"youtube-tool/youtube-tool.styles.less":o.e(7398).then(o.t.bind(o,87398,17))}}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["editor-embed-youtube"]],standalone:!0,features:[l._Bn([{provide:r.TUI_EDITOR_EXTENSIONS,useValue:r.TUI_EDITOR_DEFAULT_EXTENSIONS}]),l.jDz],decls:11,vars:1,consts:[["header","Editor","type","components"],["href","https://www.tiptap.dev/","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["id","youtube","heading","Youtube extension",3,"content"]],template:function(t,e){1&t&&(l.TgZ(0,"tui-doc-page",0)(1,"p"),l._uU(2," Rich Text Editor based on "),l.TgZ(3,"a",1),l._uU(4," TipTap Editor "),l.qZA(),l._uU(5," for using with Angular forms. For safety reasons use a "),l.TgZ(6,"a",2),l._uU(7," sanitizer "),l.qZA(),l._uU(8," with this component. "),l.qZA(),l.TgZ(9,"tui-doc-example",3),l._UZ(10,"tui-editor-embed-youtube-example-1"),l.qZA()()),2&t&&(l.xp6(9),l.Q6J("content",e.example1))},dependencies:[Z,i.u4,U.f,i.Lq,A.q,n.rH,u.jzK,C.V],encapsulation:2,changeDetection:0}),t})()}}]);