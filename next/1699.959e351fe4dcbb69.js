(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[1699],{61699:(t,o,e)=>{e.r(o),e.d(o,{default:()=>y});var n=e(84911),i=e(20755),r=e(43226),u=e(43232),s=e(8712),l=e(67350),c=e(40239),d=e(36292),a=e(44336),p=e(39986),h=e(60598);const g=["dropdown"];function b(t,o){if(1&t){const t=i.EpF();i.TgZ(0,"div",4)(1,"label",5)(2,"div",6),i._uU(3,"Youtube URL"),i.qZA(),i.TgZ(4,"div",7)(5,"tui-input-inline",8),i.NdJ("ngModelChange",(function(o){i.CHM(t);const e=i.oxw();return i.KtG(e.url=o)}))("keydown.enter",(function(){i.CHM(t);const o=i.oxw();return i.KtG(o.insertYoutubeVideo(o.url))})),i._uU(6),i.qZA()()()()}if(2&t){const t=o.$implicit,e=i.oxw();i.Q6J("tuiActiveZoneParent",t),i.xp6(5),i.ekj("t-input_filled",e.url),i.Q6J("ngModel",e.url),i.xp6(1),i.hij(" ",e.placeholder," ")}}let f=(()=>{var t;class o{constructor(){this.editor=(0,i.f3M)(c.TuiTiptapEditorService),this.youtubeLogo="https://cdn.worldvectorlogo.com/logos/play-icon.svg",this.placeholder="https://www.youtube.com/embed/abc..",this.url=""}insertYoutubeVideo(t){if(t){const o=this.editor.state.selection.anchor;this.editor.enter(),this.editor.setTextSelection(o),this.editor.setYoutubeVideo({src:t,width:"100%"}),this.url="",this.dropdown?.close()}}}return(t=o).ɵfac=function(o){return new(o||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["youtube-tool"]],viewQuery:function(t,o){if(1&t&&i.Gf(g,5),2&t){let t;i.iGM(t=i.CRH())&&(o.dropdown=t.first)}},standalone:!0,features:[i.jDz],decls:5,vars:2,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["appearance","flat","automation-id","youtube-tool__button","size","s","tuiIconButton","","type","button",1,"tool-button",3,"iconLeft"],["youtubeDropdown",""],[1,"youtube-tool-content",3,"tuiActiveZoneParent"],[1,"t-label"],[1,"t-label-properties"],[1,"t-url"],["tuiAutoFocus","",1,"t-input",3,"ngModel","ngModelChange","keydown.enter"]],template:function(t,o){if(1&t&&(i.TgZ(0,"tui-hosted-dropdown",0,1),i._UZ(2,"button",2),i.YNc(3,b,7,5,"ng-template",null,3,i.W1O),i.qZA()),2&t){const t=i.MAs(4);i.Q6J("content",t),i.xp6(2),i.Q6J("iconLeft",o.youtubeLogo)}},dependencies:[d.z$l,a.l,s.kaH,r.u5,r.JJ,r.On,s.eJF,l.jhF,p.o,h.Ek,l.m$g],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.youtube-tool-content[_ngcontent-%COMP%]{display:flex;min-height:4rem;align-items:center;padding-right:.75rem}.t-label[_ngcontent-%COMP%]{height:var(--tui-height-l);box-sizing:border-box;padding:.4375rem 1rem;min-width:12.5rem;max-width:25rem;width:100%}.t-input[_ngcontent-%COMP%]{flex:1;color:var(--tui-text-02)}.t-input_filled[_ngcontent-%COMP%]{color:var(--tui-text-01)}"],changeDetection:0}),o})();var m,w=e(62417);class v{constructor(){this.sanitizer=(0,i.f3M)(u.H7),this.builtInTools=[c.TuiEditorTool.Undo],this.control=new r.NI('\n        <p>Editor now supports YouTube embeds!</p>\n        <div data-youtube-video>\n            <iframe width="100%" src="https://www.youtube.com/watch?v=KdO8CFCXQu0"></iframe>\n        </div>\n        <p>Try adding your own video to this editor!</p>\n    ',r.kI.required)}safe(t){return this.sanitizer.bypassSecurityTrustHtml(t??"")}}(m=v).ɵfac=function(t){return new(t||m)},m.ɵcmp=i.Xpm({type:m,selectors:[["ng-component"]],standalone:!0,features:[i._Bn([{provide:c.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(e.bind(e,40239)).then((({TuiStarterKit:t})=>t)),Promise.resolve().then(e.bind(e,40239)).then((({TuiYoutube:t})=>t))]}]),i.jDz],decls:13,vars:4,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"],[3,"innerHTML"]],template:function(t,o){1&t&&(i.TgZ(0,"tui-editor",0),i.ynx(1,1),i._UZ(2,"youtube-tool",2),i.TgZ(3,"span",3),i._UZ(4,"tui-svg",4),i._uU(5," click it "),i.qZA(),i.BQk(),i.qZA(),i.TgZ(6,"h4"),i._uU(7,"HTML:"),i.qZA(),i._UZ(8,"div",5),i.TgZ(9,"h4"),i._uU(10,"Text:"),i.qZA(),i.TgZ(11,"p"),i._uU(12),i.qZA()),2&t&&(i.Q6J("formControl",o.control)("tools",o.builtInTools),i.xp6(8),i.Q6J("innerHTML",o.safe(o.control.value),i.oJD),i.xp6(4),i.Oqu(o.control.value))},dependencies:[l.PNk,f,r.UX,r.JJ,r.oH,s.HOV,w.w,c.TuiEditorComponent],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),(0,n.gn)([s.UMq],v.prototype,"safe",null);const y=v}}]);