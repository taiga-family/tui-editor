(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[8567],{58567:(e,o,t)=>{t.r(o),t.d(o,{default:()=>i});var n=t(43226),l=t(99246),a=t(20755),r=t(8920);const u="<b>HTML</b><p>with a paragraph</p><div>a div</div>and a plain text node",i=(()=>{var e;class o{constructor(){this.model="Initial value",this.disabled=!0,this.control=new n.NI("Initial value",{updateOn:"blur"}),this.group=new n.cw({control:new n.NI("Initial value")}),this.group.disable()}onToggleModelDisabled(){this.disabled=!this.disabled}onModelSetValue(){this.model=u}onToggleControlDisabled(){this.control.disabled?this.control.enable():this.control.disable()}onControlSetValue(){this.control.setValue(u)}onToggleNameDisabled(){this.group.disabled?this.group.enable():this.group.disable()}onNameSetValue(){this.group.patchValue({control:u})}}return(e=o).ɵfac=function(o){return new(o||e)},e.ɵcmp=a.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,features:[a.jDz],decls:83,vars:7,consts:[["header","Editor","type","components"],[3,"click"],["contenteditable","",3,"disabled","ngModel","ngModelChange"],[3,"textContent"],["contenteditable","",3,"formControl"],[3,"formGroup"],["contenteditable","","formControlName","control"]],template:function(e,o){1&e&&(a.TgZ(0,"tui-doc-page",0)(1,"h2"),a._uU(2,"This is a demo for ContenteditableValueAccessor"),a.qZA(),a.TgZ(3,"p"),a._uU(4," This accessor allows you to use Angular forms with contenteditable elements with ease. It has zero dependencies, other than Angular itself as peer and works with Angular 4+ in all modern browsers, including "),a.TgZ(5,"strong"),a._uU(6,"Internet Explorer 11"),a.qZA(),a._uU(7," . "),a.qZA(),a.TgZ(8,"h3"),a._uU(9,"Setup"),a.qZA(),a.TgZ(10,"p"),a._uU(11," Simply import "),a.TgZ(12,"code"),a._uU(13,"ContenteditableValueAccessorModule"),a.qZA(),a._uU(14," along with either Angular's form modules and use like that: "),a.qZA(),a.TgZ(15,"pre"),a._uU(16,"  "),a.TgZ(17,"code"),a._uU(18,'\n    <div [(ngModel)]="model" contenteditable></div>\n  '),a.qZA(),a._uU(19,"\n"),a.qZA(),a.TgZ(20,"pre"),a._uU(21,"  "),a.TgZ(22,"code"),a._uU(23,'\n    <div [formControl]="control" contenteditable></div>\n  '),a.qZA(),a._uU(24,"\n"),a.qZA(),a.TgZ(25,"pre"),a._uU(26,"  "),a.TgZ(27,"code"),a._uU(28,'\n    <form [formGroup]="group">\n      <div formControlName="control" contenteditable></div>\n    </form>\n  '),a.qZA(),a._uU(29,"\n"),a.qZA(),a.TgZ(30,"h3"),a._uU(31,"Examples"),a.qZA(),a.TgZ(32,"h4"),a._uU(33," ngModel "),a.TgZ(34,"button",1),a.NdJ("click",(function(){return o.onToggleModelDisabled()})),a._uU(35,"Toggle disabled"),a.qZA(),a.TgZ(36,"button",1),a.NdJ("click",(function(){return o.onModelSetValue()})),a._uU(37,"Set value"),a.qZA()(),a.TgZ(38,"p")(39,"i"),a._uU(40," Tip: You can apply disabled styles by "),a.TgZ(41,"code"),a._uU(42,'[contenteditable="false"]'),a.qZA(),a._uU(43," CSS selector "),a.qZA()(),a.TgZ(44,"label"),a._uU(45,"Write here:"),a.qZA(),a.TgZ(46,"p",2),a.NdJ("ngModelChange",(function(e){return o.model=e})),a.qZA(),a.TgZ(47,"label"),a._uU(48,"Result:"),a.qZA(),a._UZ(49,"p",3),a.TgZ(50,"h4"),a._uU(51," formControl "),a.TgZ(52,"button",1),a.NdJ("click",(function(){return o.onToggleControlDisabled()})),a._uU(53,"Toggle disabled"),a.qZA(),a.TgZ(54,"button",1),a.NdJ("click",(function(){return o.onControlSetValue()})),a._uU(55,"Set value"),a.qZA()(),a.TgZ(56,"p")(57,"i"),a._uU(58," Tip: updateOn FormHooks also work, this example is set to "),a.TgZ(59,"code"),a._uU(60,"'blur'"),a.qZA()()(),a.TgZ(61,"label"),a._uU(62,"Write here:"),a.qZA(),a._UZ(63,"p",4),a.TgZ(64,"label"),a._uU(65,"Result:"),a.qZA(),a._UZ(66,"p",3),a.TgZ(67,"h4"),a._uU(68," formControlName "),a.TgZ(69,"button",1),a.NdJ("click",(function(){return o.onToggleNameDisabled()})),a._uU(70,"Toggle disabled"),a.qZA(),a.TgZ(71,"button",1),a.NdJ("click",(function(){return o.onNameSetValue()})),a._uU(72,"Set value"),a.qZA()(),a.TgZ(73,"p")(74,"i"),a._uU(75,"Tip: disabling parent FormGroup/FormArray also works"),a.qZA()(),a.TgZ(76,"label"),a._uU(77,"Write here:"),a.qZA(),a.TgZ(78,"form",5),a._UZ(79,"p",6),a.qZA(),a.TgZ(80,"label"),a._uU(81,"Result:"),a.qZA(),a._UZ(82,"p",3),a.qZA()),2&e&&(a.xp6(46),a.Q6J("disabled",o.disabled)("ngModel",o.model),a.xp6(3),a.Q6J("textContent",o.model),a.xp6(14),a.Q6J("formControl",o.control),a.xp6(3),a.Q6J("textContent",o.control.value),a.xp6(12),a.Q6J("formGroup",o.group),a.xp6(4),a.Q6J("textContent",o.group.value.control))},dependencies:[n.UX,n._Y,n.JJ,n.JL,n.oH,n.sg,n.u,n.u5,n.On,l.az,r.q],styles:["[contenteditable][_ngcontent-%COMP%]{box-shadow:0 0 1px}[contenteditable=false][_ngcontent-%COMP%]{background:lightgray;opacity:.8}label[_ngcontent-%COMP%], i[_ngcontent-%COMP%]{opacity:.6}"],changeDetection:0}),o})()}}]);