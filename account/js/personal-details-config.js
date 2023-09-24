!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/shared"),require("@deriv/translations")):"function"==typeof define&&define.amd?define(["@deriv/shared","@deriv/translations"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/shared"),require("@deriv/translations")):e["@deriv/account"]=t(e["@deriv/shared"],e["@deriv/translations"])}(self,((e,t)=>(()=>{"use strict";var n={"@deriv/shared":t=>{t.exports=e},"@deriv/translations":e=>{e.exports=t}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{i.d(r,{default:()=>o});var e=i("@deriv/shared"),t=i("@deriv/translations");function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r,l,o=[],u=!0,s=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(a=r.call(n)).done)&&(o.push(a.value),o.length!==t);u=!0);}catch(e){s=!0,i=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}(0,e.getIDVNotApplicableOption)();var l=function(e,t){var n,a,i=t.real_account_signup_target,r=t.residence_list,l=t.account_settings,o=t.account_status,u=t.residence;return["malta","iom"].includes(i)&&e.tax_residence&&(null==e||null===(n=e.tax_residence)||void 0===n||null===(a=n.rules)||void 0===a||a.shift()),function(e){var t,n,a,i,r=e.account_status,l=e.residence,o=e.residence_list,u=e.real_account_signup_target,s=e.account_settings.citizen||l,c=o.find((function(e){return e.value===s})),d="maltainvest"===u,_=null==r||null===(t=r.status)||void 0===t?void 0:t.some((function(e){return"skip_idv"===e}));return Boolean(!d&&s&&(null==c||null===(n=c.identity)||void 0===n||null===(a=n.services)||void 0===a||null===(i=a.idv)||void 0===i?void 0:i.is_country_supported)&&!_)}({account_status:o,account_settings:l,residence:u,residence_list:r,real_account_signup_target:i})||(delete e.document_type,delete e.document_number),e};const o=function(a,i){var r=a.upgrade_info,o=a.real_account_signup_target,u=a.residence_list,s=a.account_settings,c=a.account_status,d=a.residence,_=arguments.length>2&&void 0!==arguments[2]&&arguments[2],v=function(n){var a,i,r,l,o,u,s,c,d,_,v,m,f,p=n.residence_list,g=n.account_settings,h=n.is_appstore;if(!p||!g)return{};var b="maltainvest"===n.real_account_signup_target?null==g?void 0:g.residence:"",x={account_opening_reason:{supported_in:["iom","malta","maltainvest"],default_value:null!==(a=g.account_opening_reason)&&void 0!==a?a:"",rules:[["req",(0,t.localize)("Account opening reason is required.")]]},salutation:{supported_in:["iom","malta","maltainvest"],default_value:null!==(i=g.salutation)&&void 0!==i?i:"",rules:[["req",(0,t.localize)("Salutation is required.")]]},first_name:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(r=g.first_name)&&void 0!==r?r:"",rules:[["req",(0,t.localize)("First name is required.")],["length",(0,t.localize)("First name should be between 2 and 50 characters."),{min:2,max:50}],["name",(0,e.getErrorMessages)().name()]]},last_name:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(l=g.last_name)&&void 0!==l?l:"",rules:[["req",(0,t.localize)("Last name is required.")],["length",(0,t.localize)("Last name should be between 2 and 50 characters."),{min:2,max:50}],["name",(0,e.getErrorMessages)().name()]]},date_of_birth:{supported_in:["svg","iom","malta","maltainvest"],default_value:g.date_of_birth?(0,e.toMoment)(g.date_of_birth).format("YYYY-MM-DD"):"",rules:[["req",(0,t.localize)("Date of birth is required.")],[function(t){return(0,e.toMoment)(t).isValid()&&(0,e.toMoment)(t).isBefore((0,e.toMoment)().subtract(18,"years"))},(0,t.localize)("You must be 18 years old and above.")]]},place_of_birth:{supported_in:["maltainvest","iom","malta"],default_value:g.place_of_birth?null===(o=p.find((function(e){return e.value===g.place_of_birth})))||void 0===o?void 0:o.text:"",rules:[["req",(0,t.localize)("Place of birth is required.")]]},citizen:{supported_in:["iom","malta","maltainvest"],default_value:g.citizen?null===(u=p.find((function(e){return e.value===g.citizen})))||void 0===u?void 0:u.text:"",rules:[["req",(0,t.localize)("Citizenship is required")]]},phone:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(s=g.phone)&&void 0!==s?s:"",rules:[["req",(0,t.localize)("Phone is required.")],["phone",(0,t.localize)("Phone is not in a proper format.")],[function(t){var n=t.replace(/\D/g,"");return(0,e.validLength)(n,{min:9,max:35})},(0,t.localize)("You should enter {{min}}-{{max}} numbers.",{min:9,max:35})]]},tax_residence:{default_value:null!=g&&g.tax_residence?null!==(c=null===(d=p.find((function(e){return e.value===(null==g?void 0:g.tax_residence)})))||void 0===d?void 0:d.text)&&void 0!==c?c:"":b,supported_in:["maltainvest"],rules:[["req",(0,t.localize)("Tax residence is required.")]]},tax_identification_number:{default_value:null!==(_=g.tax_identification_number)&&void 0!==_?_:"",supported_in:["maltainvest"],rules:[["req",(0,t.localize)("Tax Identification Number is required.")],["length",(0,t.localize)("Tax Identification Number can't be longer than 25 characters."),{min:0,max:25}],["regular",(0,t.localize)("Letters, numbers, spaces, periods, hyphens and forward slashes only."),{regex:/^(?!^$|\s+)[A-Za-z0-9./\s-]{0,25}$/}],[function(e,t,n){return!!n.tax_residence},(0,t.localize)("Please fill in Tax residence.")],[function(e,t,n){var a,i,r=n.tax_residence,l=null===(a=p.filter((function(e){return e.text===r&&e.tin_format}))[0])||void 0===a||null===(i=a.tin_format)||void 0===i?void 0:i[0];return!l||new RegExp(l).test(e)},["warn",(0,t.localize)("This Tax Identification Number (TIN) is invalid. You may continue with account creation, but to facilitate future payment processes, valid tax information will be required.")]]]},employment_status:{default_value:null!==(v=g.employment_status)&&void 0!==v?v:"",supported_in:["maltainvest"],rules:[["req",(0,t.localize)("Employment status is required.")]]},tax_identification_confirm:{default_value:!1,supported_in:["maltainvest"],rules:[["confirm",(0,t.localize)("Please confirm your tax information.")]]},document_type:{default_value:null!==(m=g.document_type)&&void 0!==m?m:{id:"",text:"",value:"",example_format:"",sample_image:""},supported_in:["svg"],rules:[]},document_number:{default_value:null!==(f=g.document_number)&&void 0!==f?f:"",supported_in:["svg"],rules:[]}};return[function(){if(h){var e=["first_name","last_name","date_of_birth","phone"];return Object.keys(x).reduce((function(t,n){return e.includes(n)&&(t[n]=x[n]),t}),{})}return x}()]}({residence_list:u,account_settings:s,is_appstore:_,real_account_signup_target:o,residence:d,account_status:c}),m=n(v,1)[0],f=s.immutable_fields;return{header:{active_title:_?(0,t.localize)("A few personal details"):(0,t.localize)("Complete your personal details"),title:_?(0,t.localize)("PERSONAL"):(0,t.localize)("Personal details")},body:i,form_value:(0,e.getDefaultFields)(o,m),props:{validate:(0,e.generateValidationFunction)(o,l(m,{real_account_signup_target:o,residence_list:u,account_settings:s,account_status:c,residence:d})),is_svg:"svg"===(null==r?void 0:r.can_upgrade_to),is_mf:"maltainvest"===o,account_opening_reason_list:[{text:(0,t.localize)("Hedging"),value:"Hedging"},{text:(0,t.localize)("Income Earning"),value:"Income Earning"},{text:(0,t.localize)("Speculative"),value:"Speculative"}],salutation_list:[{label:(0,t.localize)("Mr"),value:"Mr"},{label:(0,t.localize)("Ms"),value:"Ms"}],disabled_items:f,account_status:c,residence:d,account_settings:s,real_account_signup_target:o},passthrough:["residence_list","is_fully_authenticated","has_real_account"],icon:"IcDashboardPersonalDetails"}}})(),r.default})()));