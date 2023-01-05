(()=>{"use strict";const e=window.wp.blocks,l=JSON.parse('{"u2":"pmpro-affiliates/pmpro-affiliates-report"}');function o(){return o=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},o.apply(this,arguments)}const t=window.wp.element,a=window.wp.i18n,n=window.wp.blockEditor,i=window.wp.components;(0,e.registerBlockType)(l.u2,{edit:function(e){let{attributes:l,setAttributes:s}=e;const{back_link:r,export_csv:p,help:c,show_commissions_table:m,code:_,subid:f,name:h,user_login:k,date:b,membership_level:g,show_commission:d,total:C}=l,w=(0,n.useBlockProps)({className:"pmpro-block-element"});return[(0,t.createElement)(n.InspectorControls,{key:"controls"},(0,t.createElement)(i.PanelBody,{key:"settings",title:(0,a.__)("Settings","pmpro-affiliates")},(0,t.createElement)(i.ToggleControl,{key:"back_link",label:(0,a.__)("Back Link","pmpro-affiliates"),checked:r,onChange:e=>{s({back_link:e})},help:(0,a.__)("Show a back link?","pmpro-affiliates")}),(0,t.createElement)(i.ToggleControl,{key:"export_csv",label:(0,a.__)("Export CSV","pmpro-affiliates"),checked:p,onChange:e=>{s({export_csv:e})},help:(0,a.__)("Show Export CSV link","pmpro-affiliates")}),(0,t.createElement)(i.ToggleControl,{key:"help",label:(0,a.__)("Help","pmpro-affiliates"),checked:c,onChange:e=>{s({help:e})},help:(0,a.__)("Show a help table","pmpro-affiliates")}),(0,t.createElement)(i.ToggleControl,{key:"show_table",label:(0,a.__)("Show Commissions Table","pmpro-affiliates"),checked:m,onChange:e=>{s({show_commissions_table:e})},help:(0,a.__)("Show the commission table","pmpro-affiliates")})),(0,t.createElement)(i.PanelBody,{key:"table-fields",title:(0,a.__)("Table Fields","pmpro-affiliates")},(0,t.createElement)(i.ToggleControl,{key:"code",label:(0,a.__)("Code","pmpro-affiliates"),checked:_,onChange:e=>{s({code:e})}}),(0,t.createElement)(i.ToggleControl,{key:"sub_id",label:(0,a.__)("Sub-ID","pmpro-affiliates"),checked:f,onChange:e=>{s({subid:e})}}),(0,t.createElement)(i.ToggleControl,{key:"name",label:(0,a.__)("Name","pmpro-affiliates"),checked:h,onChange:e=>{s({name:e})}}),(0,t.createElement)(i.ToggleControl,{key:"user_login",label:(0,a.__)("User Login","pmpro-affiliates"),checked:k,onChange:e=>{s({user_login:e})}}),(0,t.createElement)(i.ToggleControl,{key:"date",label:(0,a.__)("Date","pmpro-affiliates"),checked:b,onChange:e=>{s({date:e})}}),(0,t.createElement)(i.ToggleControl,{key:"membership_level",label:(0,a.__)("Membership Level","pmpro-affiliates"),checked:g,onChange:e=>{s({membership_level:e})}}),(0,t.createElement)(i.ToggleControl,{key:"commision",label:(0,a.__)("Commission","pmpro-affiliates"),checked:d,onChange:e=>{s({show_commission:e})}}),(0,t.createElement)(i.ToggleControl,{key:"total",label:(0,a.__)("Total","pmpro-affiliates"),checked:C,onChange:e=>{s({total:e})}}))),(0,t.createElement)("div",o({key:"main"},w),(0,t.createElement)("span",{key:"title",className:"pmpro-block-title"},(0,a.__)("Paid Memberships Pro Affiliates","pmpro-affiliates")),(0,t.createElement)("span",{key:"subtitle",className:"pmpro-block-subtitle"},(0,a.__)("Report","pmpro-affiliates")))]},save:()=>null})})();