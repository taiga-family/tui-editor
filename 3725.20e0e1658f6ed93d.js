(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[3725],{13725:(e,s,o)=>{o.r(s),o.d(s,{FocusClasses:()=>n,default:()=>n});var t=o(7410),d=o(62463),i=o(43594);const n=t.Extension.create({name:"focus",addOptions:()=>({className:"has-focus",mode:"all"}),addProseMirrorPlugins(){return[new d.Sy({key:new d.H$("focus"),props:{decorations:({doc:e,selection:s})=>{const{isEditable:o,isFocused:t}=this.editor,{anchor:d}=s,n=[];if(!o||!t)return i.EH.create(e,[]);let a=0;"deepest"===this.options.mode&&e.descendants(((e,s)=>{if(!e.isText)return d>=s&&d<=s+e.nodeSize-1&&void(a+=1)}));let r=0;return e.descendants(((e,s)=>!e.isText&&d>=s&&d<=s+e.nodeSize-1&&(r+=1,"deepest"===this.options.mode&&a-r>0||"shallowest"===this.options.mode&&r>1?"deepest"===this.options.mode:void n.push(i.p.node(s,s+e.nodeSize,{class:this.options.className}))))),i.EH.create(e,n)}}})]}})}}]);