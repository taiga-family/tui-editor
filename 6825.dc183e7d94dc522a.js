(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[6825],{38954:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiEditorResizableImagesToolModule:()=>w});var o=i(88692),n=i(20092),s=i(15472),r=i(4966),a=i(22578),c=i(74163),p=i(15777),u=i(64537),d=i(73460),l=i(52442),h=i(65490),m=i(35732),g=i(61528),f=i(13528),b=i(8820),T=i(76690);let _=(()=>{class e{constructor(e,t,i,o){this.imageLoader=e,this.http=t,this.isStackblitz=o,this.relativePath=this.isStackblitz?"https://taiga-ui.dev/":"",this.builtInTools=[p._2.Undo,p._2.Img],this.base64Image$=this.http.get(`${this.relativePath}assets/images/lumberjack.png`,{responseType:"blob"}).pipe((0,g.w)((e=>this.imageLoader(e)))),this.control=new n.NI(""),this.base64Image$.pipe((0,f.R)(i)).subscribe((e=>{this.control.patchValue(`\n                    <img data-type="image-editor" src="${e}" width="300">\n                    <p>Try to drag right border of image!</p>\n                    <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.\n                `)}))}}return e.ɵfac=function(t){return new(t||e)(u.Y36(p.p7),u.Y36(m.eN),u.Y36(a.a31,2),u.Y36(a.SgE))},e.ɵcmp=u.Xpm({type:e,selectors:[["tui-editor-resizable-editor-example-1"]],features:[u._Bn([a.a31,{provide:p.Wf,deps:[u.zs3],useFactory:e=>[Promise.resolve().then(i.bind(i,18233)).then((({StarterKit:e})=>e)),Promise.resolve().then(i.bind(i,27327)).then((({tuiCreateImageEditorExtension:t})=>t({injector:e})))]}])],decls:4,vars:3,consts:[[1,"editor",3,"formControl","tools"],[3,"content"]],template:function(e,t){1&e&&(u._UZ(0,"tui-editor",0),u.TgZ(1,"h4"),u._uU(2,"HTML:"),u.qZA(),u._UZ(3,"tui-editor-socket",1)),2&e&&(u.Q6J("formControl",t.control)("tools",t.builtInTools),u.xp6(3),u.Q6J("content",t.control.value||""))},dependencies:[n.JJ,n.oH,b.a,T.D],encapsulation:2,changeDetection:0}),e})(),z=(()=>{class e{constructor(){this.example1={TypeScript:i.e(8499).then(i.t.bind(i,88499,17)),HTML:i.e(8932).then(i.t.bind(i,28932,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Xpm({type:e,selectors:[["editor-resizable-images"]],features:[u._Bn([{provide:p.Wf,useValue:p.PD}])],decls:11,vars:1,consts:[["header","Editor","type","components"],["href","https://www.tiptap.dev/","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["id","resizable-image","heading","Resizable image",3,"content"]],template:function(e,t){1&e&&(u.TgZ(0,"tui-doc-page",0)(1,"p"),u._uU(2," Rich Text Editor based on "),u.TgZ(3,"a",1),u._uU(4," TipTap Editor "),u.qZA(),u._uU(5," for using with Angular forms. For safety reasons use a "),u.TgZ(6,"a",2),u._uU(7," sanitizer "),u.qZA(),u._uU(8," with this component. "),u.qZA(),u.TgZ(9,"tui-doc-example",3),u._UZ(10,"tui-editor-resizable-editor-example-1"),u.qZA()()),2&e&&(u.xp6(9),u.Q6J("content",t.example1))},dependencies:[d.V,l.q,h.f,s.rH,_],encapsulation:2,changeDetection:0}),e})(),w=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=u.oAB({type:e}),e.ɵinj=u.cJS({imports:[o.ez,a.Ah6,c.EIu,c.jzK,c.jhF,c.fNO,r.fV,n.u5,n.UX,p.T_,p.GK,s.Bz.forChild((0,r.Ve)(z))]}),e})()}}]);