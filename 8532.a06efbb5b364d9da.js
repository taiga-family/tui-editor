(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[8532],{28532:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiEditorEmbedIframeModule:()=>q});var o=n(88692),i=n(20092),r=n(15472),s=n(4966),l=n(22578),a=n(74163),d=n(15777),u=n(64537),c=n(73460),p=n(52442),m=n(65490),f=n(84911),h=n(5998),b=n(77825),g=n(8820),w=n(18289),v=n(6947),y=n(16331),_=n(55788),Z=n(36866);const x=["dropdown"];function A(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"div",4)(1,"label",5)(2,"div",6),u._uU(3,"Embed URL"),u.qZA(),u.TgZ(4,"div",7)(5,"tui-input-inline",8),u.NdJ("ngModelChange",(function(t){u.CHM(e);const n=u.oxw();return u.KtG(n.url=t)}))("keydown.enter",(function(){u.CHM(e);const t=u.oxw();return u.KtG(t.embedSource(t.url))})),u._uU(6),u.qZA()()()()}if(2&e){const e=t.$implicit,n=u.oxw();u.Q6J("tuiActiveZoneParent",e),u.xp6(5),u.ekj("t-input_filled",n.url),u.Q6J("ngModel",n.url),u.xp6(1),u.hij(" ",n.placeholder," ")}}let T=(()=>{class e{constructor(e){this.editor=e,this.placeholder="https://my-embed.site.com/etc1235",this.url=""}embedSource(e){var t;e&&(this.editor.setIframe({src:e}),this.url="",null===(t=this.dropdown)||void 0===t||t.close())}}return e.ɵfac=function(t){return new(t||e)(u.Y36(d.$3))},e.ɵcmp=u.Xpm({type:e,selectors:[["embed-tool"]],viewQuery:function(e,t){if(1&e&&u.Gf(x,5),2&e){let e;u.iGM(e=u.CRH())&&(t.dropdown=e.first)}},decls:5,vars:3,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["appearance","icon","automation-id","embed-tool__button","icon","tuiIconCodeLarge","size","s","tuiIconButton","","type","button",1,"tool-button",3,"focusable","pseudoActive"],["youtubeDropdown",""],[1,"embed-tool-content",3,"tuiActiveZoneParent"],[1,"t-label"],[1,"t-label-properties"],[1,"t-url"],["tuiAutoFocus","",1,"t-input",3,"ngModel","ngModelChange","keydown.enter"]],template:function(e,t){if(1&e&&(u.TgZ(0,"tui-hosted-dropdown",0,1),u._UZ(2,"button",2),u.YNc(3,A,7,5,"ng-template",null,3,u.W1O),u.qZA()),2&e){const e=u.MAs(1),t=u.MAs(4);u.Q6J("content",t),u.xp6(2),u.Q6J("focusable",e.open)("pseudoActive",e.open)}},dependencies:[w.v,v.o,y.Ek,_.e,Z.l,i.JJ,i.On],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.embed-tool-content[_ngcontent-%COMP%]{display:flex;min-height:4rem;align-items:center;padding-right:.75rem}.t-label[_ngcontent-%COMP%]{height:var(--tui-height-l);box-sizing:border-box;padding:.4375rem 1rem;min-width:12.5rem;max-width:25rem;width:100%}.t-input[_ngcontent-%COMP%]{flex:1;color:var(--tui-text-02)}.t-input_filled[_ngcontent-%COMP%]{color:var(--tui-text-01)}"],changeDetection:0}),e})();class M{constructor(e,t){this.sanitizer=e,this.isE2E=t,this.builtInTools=[d._2.Undo],this.control=new i.NI(`\n        <p>Here is an online IDE:</p>\n        <iframe\n         src="https://codepen.io/mehdinajafi/embed/LYyqNqR?default-tab=html${this.isE2E?"":"%2Cresult"}&editable=true"\n         height="375"\n         width="100%"\n         scrolling="no"\n         frameborder="no"\n         loading="lazy"\n         allowtransparency="true"\n         data-type="iframe-editor"\n         allowfullscreen="true">\n        </iframe>\n        </iframe>\n        <p>Here is a media player:</p>\n        <iframe\n            src="https://bandcamp.com/EmbeddedPlayer/album=2219061201/size=small/bgcol=ffffff/linkcol=63b2cc/transparent=true/"\n            height="42"\n            width="100%"\n            data-type="iframe-editor">\n        </iframe>\n        <p></p>\n    `,i.kI.required)}safe(e){return this.sanitizer.bypassSecurityTrustHtml(null!=e?e:"")}}M.ɵfac=function(e){return new(e||M)(u.Y36(h.H7),u.Y36(l.oDT))},M.ɵcmp=u.Xpm({type:M,selectors:[["tui-editor-embed-iframe-example-1"]],features:[u._Bn([{provide:d.Wf,deps:[u.zs3],useFactory:e=>[Promise.resolve().then(n.bind(n,18233)).then((({StarterKit:e})=>e)),Promise.resolve().then(n.bind(n,52873)).then((({createIframeEditorExtension:t})=>t(e)))]}])],decls:13,vars:4,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"],[3,"innerHTML"]],template:function(e,t){1&e&&(u.TgZ(0,"tui-editor",0),u.ynx(1,1),u._UZ(2,"embed-tool",2),u.TgZ(3,"span",3),u._UZ(4,"tui-svg",4),u._uU(5," click it "),u.qZA(),u.BQk(),u.qZA(),u.TgZ(6,"h4"),u._uU(7,"HTML:"),u.qZA(),u._UZ(8,"div",5),u.TgZ(9,"h4"),u._uU(10,"Text:"),u.qZA(),u.TgZ(11,"p"),u._uU(12),u.qZA()),2&e&&(u.Q6J("formControl",t.control)("tools",t.builtInTools),u.xp6(8),u.Q6J("innerHTML",t.safe(t.control.value),u.oJD),u.xp6(4),u.Oqu(t.control.value))},dependencies:[b.P,i.JJ,i.oH,g.a,T],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),(0,f.gn)([l.UMq],M.prototype,"safe",null);let U=(()=>{class e{constructor(){this.example1={HTML:n.e(3270).then(n.t.bind(n,43270,17)),TypeScript:n.e(3878).then(n.t.bind(n,63878,17)),LESS:n.e(2889).then(n.t.bind(n,92889,17)),"embed-tool/embed-tool.component.ts":n.e(6949).then(n.t.bind(n,76949,17)),"embed-tool/embed-tool.template.html":n.e(8275).then(n.t.bind(n,58275,17)),"embed-tool/embed-tool.styles.less":n.e(6530).then(n.t.bind(n,26530,17)),"embed-tool/embed-tool.module.ts":n.e(7703).then(n.t.bind(n,7703,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Xpm({type:e,selectors:[["editor-embed-iframe"]],features:[u._Bn([{provide:d.Wf,useValue:d.PD}])],decls:11,vars:1,consts:[["header","Editor","type","components"],["href","https://www.tiptap.dev/","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["id","iframe","heading","Resizable iframe",3,"content"]],template:function(e,t){1&e&&(u.TgZ(0,"tui-doc-page",0)(1,"p"),u._uU(2," Rich Text Editor based on "),u.TgZ(3,"a",1),u._uU(4," TipTap Editor "),u.qZA(),u._uU(5," for using with Angular forms. For safety reasons use a "),u.TgZ(6,"a",2),u._uU(7," sanitizer "),u.qZA(),u._uU(8," with this component. "),u.qZA(),u.TgZ(9,"tui-doc-example",3),u._UZ(10,"tui-editor-embed-iframe-example-1"),u.qZA()()),2&e&&(u.xp6(9),u.Q6J("content",t.example1))},dependencies:[c.V,p.q,m.f,r.rH,M],encapsulation:2,changeDetection:0}),e})();var C=n(80968);let E=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=u.oAB({type:e}),e.ɵinj=u.cJS({imports:[o.ez,a.fNO,a.jhF,l.Ah6,a.dpK,C.z$l,i.u5]}),e})(),q=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=u.oAB({type:e}),e.ɵinj=u.cJS({imports:[o.ez,l.Ah6,a.EIu,a.jzK,a.jhF,a.fNO,s.fV,i.u5,i.UX,d.T_,d.GK,E,r.Bz.forChild((0,s.Ve)(U))]}),e})()}}]);