"use strict";(self.webpackChunk_deriv_trader=self.webpackChunk_deriv_trader||[]).push([["contract","error-component"],{"./src/App/Components/Elements/Errors/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r("../../node_modules/prop-types/index.js"),a=r.n(n),o=r("react"),i=r.n(o),c=r("@deriv/components"),l=r("@deriv/shared"),s=r("@deriv/translations"),u=function(e){var t=e.header,r=e.message,n=e.is_dialog,a=e.redirect_label,o=e.redirectOnClick,u=e.should_show_refresh,m=void 0===u||u?(0,s.localize)("Please refresh this page to continue."):"";return n?i().createElement(c.Dialog,{title:t||(0,s.localize)("There was an error"),is_visible:!0,confirm_button_text:a||(0,s.localize)("Ok"),onConfirm:o||function(){return location.reload()}},r||(0,s.localize)("Sorry, an error occured while processing your request.")):i().createElement(c.PageErrorContainer,{error_header:null!=t?t:"",error_messages:r?[r,m]:[],redirect_urls:[l.routes.trade],redirect_labels:[a||(0,s.localize)("Refresh")],buttonOnClick:o||function(){return location.reload()}})};u.propTypes={header:a().string,is_dialog:a().bool,message:a().oneOfType([a().node,a().string,a().object]),redirect_label:a().string,redirectOnClick:a().func,should_show_refresh:a().bool,type:a().string};const m=u},"./src/App/Components/Elements/Modals/UnsupportedContractModal/index.js":(e,t,r)=>{r.d(t,{Z:()=>d});var n=r("../../node_modules/prop-types/index.js"),a=r.n(n),o=r("react"),i=r.n(o),c=r("@deriv/components"),l=r("@deriv/translations"),s=r("@deriv/shared"),u=r("../stores/src/index.ts"),m=(0,u.Pi)((function(e){var t=e.onConfirm,r=e.onClose,n=(0,u.oR)().ui,a=n.disableApp,o=n.enableApp,m=n.is_loading,d=n.is_unsupported_contract_modal_visible;return i().createElement(c.Dialog,{title:(0,l.localize)("We’re working on it"),confirm_button_text:(0,l.localize)("Stay on {{website_domain}}",{website_domain:s.website_name}),cancel_button_text:(0,l.localize)("Go to Binary.com"),onConfirm:t,onCancel:r,disableApp:a,enableApp:o,is_loading:m,is_closed_on_cancel:!0,is_visible:d},i().createElement(l.Localize,{i18n_default_text:"You’ve selected a trade type that is currently unsupported, but we’re working on it."}))}));m.propTypes={onClose:a().func,onConfirm:a().func};const d=m},"./src/Modules/Contract/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>Oe});var n=r("../../node_modules/prop-types/index.js"),a=r.n(n),o=r("react"),i=r.n(o),c=r("react-router"),l=r("../../node_modules/react-transition-group/esm/CSSTransition.js"),s=r("@deriv/shared"),u=r("./src/App/Components/Elements/Errors/index.js"),m=r("@deriv/translations"),d=r("../../node_modules/classnames/index.js"),_=r.n(d),p=r("react-router-dom"),f=r("@deriv/components"),b=r("./src/App/Components/Elements/chart-loader.jsx"),y=r("./src/App/Components/Elements/PositionsDrawer/helpers/index.js"),g=function(e){var t=e.icon,r=e.id,n=e.label,a=e.timestamp,o=e.value,c=e.value2;return i().createElement("div",{id:r,className:"contract-audit__grid","data-testid":r},t&&i().createElement("div",{className:"contract-audit__icon"},t),i().createElement("div",{className:"contract-audit__item"},i().createElement(f.Text,{size:"xxxs",styles:{lineHeight:"unset"},className:"contract-audit__label"},n),i().createElement("div",{className:"contract-audit__value-wrapper"},i().createElement(f.Text,{weight:"bold",size:"xxs",line_height:"m",color:"prominent",className:"contract-audit__value"},o),c&&i().createElement(f.Text,{weight:"bold",size:"xxs",line_height:"m",color:"prominent",className:"contract-audit__value2"},c))),a&&i().createElement("div",{className:"contract-audit__timestamp"},i().createElement(f.Text,{size:"xxxs",align:"right",line_height:"xs",className:"contract-audit__timestamp-value"},(0,s.formatDate)(a)),i().createElement(f.Text,{size:"xxxs",align:"right",line_height:"xs",className:"contract-audit__timestamp-value"},(0,s.formatTime)(a))))};g.propTypes={icon:a().node,id:a().string,label:a().string,timestamp:a().string,value:a().PropTypes.oneOfType([a().number,a().string,a().node]),value2:a().PropTypes.oneOfType([a().number,a().string])};const v=g;var h=r("./src/_common/base/server_time.js"),E=r.n(h),C=function(e){var t=e.contract_end_time,r=e.contract_info,n=e.duration,a=e.duration_unit,o=e.exit_spot,c=e.is_vanilla,l=r.commission,u=r.contract_type,d=r.currency,_=r.entry_spot_display_value,p=r.entry_tick_time,b=r.exit_tick_time,g=r.high_barrier,h=r.profit,C=r.date_start,w=r.tick_count,k=r.tick_passed,S=r.transaction_ids,x=(S=void 0===S?{}:S).buy,T=S.sell,j=r.low_barrier,O=r.display_number_of_contracts,z=h>=0,I=(0,s.getCancellationPrice)(r),M=!c&&!(0,s.isAccumulatorContract)(u)&&!(0,s.isSmartTraderContract)(u),A=!(0,s.isAccumulatorContract)(u)||!isNaN(t),N=(0,s.isTurbosContract)(u)||c,D=(0,s.isAccumulatorContract)(u)?"".concat(k,"/").concat(w," ").concat((0,m.localize)("ticks")):"".concat(w," ").concat(w<2?(0,m.localize)("tick"):(0,m.localize)("ticks"));return i().createElement(f.ThemedScrollbars,{is_bypassed:(0,s.isMobile)()},i().createElement("div",{className:"contract-audit__tabs-content"},i().createElement(v,{id:"dt_id_label",icon:i().createElement(f.Icon,{icon:"IcContractId",size:24}),label:(0,m.localize)("Reference ID"),value:(0,m.localize)("{{buy_value}} (Buy)",{buy_value:x}),value2:T?(0,m.localize)("{{sell_value}} (Sell)",{sell_value:T}):void 0}),(0,s.isMultiplierContract)(u)?i().createElement(i().Fragment,null,i().createElement(v,{id:"dt_commission_label",icon:i().createElement(f.Icon,{icon:"IcContractCommission",size:24}),label:(0,m.localize)("Commission"),value:i().createElement(f.Money,{amount:l,currency:d,show_currency:!0})}),!!I&&i().createElement(v,{id:"dt_cancellation_label",icon:i().createElement(f.Icon,{icon:"IcContractSafeguard",size:24}),label:(0,s.isUserSold)(r)&&(0,s.isEndedBeforeCancellationExpired)(r)?(0,m.localize)("Deal cancellation"):(0,s.isUserCancelled)(r)?(0,m.localize)("Deal cancellation (executed)"):function(e){return!!(e.cancellation.date_expiry<E().get().unix())}(r)?(0,m.localize)("Deal cancellation (expired)"):(0,m.localize)("Deal cancellation (active)"),value:i().createElement(f.Money,{amount:I,currency:d})})):i().createElement(i().Fragment,null,A&&i().createElement(v,{id:"dt_duration_label",icon:i().createElement(f.Icon,{icon:"IcContractDuration",size:24}),label:(0,m.localize)("Duration"),value:w>0?D:"".concat(n," ").concat(a)}),c&&i().createElement(v,{id:"dt_bt_label",icon:i().createElement(f.Icon,{icon:"IcContractStrike",size:24}),label:(0,y.Bs)(r),value:(0,y.rh)(r)||" - "}),M&&i().createElement(v,{id:"dt_bt_label",icon:(0,y.qm)(u)?i().createElement(f.Icon,{icon:"IcContractTarget",size:24}):i().createElement(f.Icon,{icon:"IcContractBarrier",size:24}),label:(0,y.Bs)(r),value:(0,y.rh)(r)||" - "}),N&&i().createElement(v,{id:"dt_bt_label",icon:i().createElement(f.Icon,{icon:"IcContractPayout",size:24}),label:(0,m.localize)("Payout per point"),value:"".concat(O," ").concat((0,s.getCurrencyDisplayCode)(d))||" - "})),(0,s.hasTwoBarriers)(u)&&i().createElement(i().Fragment,null,[g,j].map((function(e,t){return i().createElement(v,{id:"dt_bt_label_".concat(t+1),icon:i().createElement(f.Icon,{icon:"IcContractStrike",size:24}),key:e,label:g===e?(0,m.localize)("High barrier"):(0,m.localize)("Low barrier"),value:e})}))),i().createElement(v,{id:"dt_start_time_label",icon:i().createElement(f.Icon,{icon:"IcContractStartTime",size:24}),label:(0,m.localize)("Start time"),value:(0,s.toGMTFormat)((0,s.epochToMoment)(C))||" - "}),!(0,y.qm)(u)&&i().createElement(v,{id:"dt_entry_spot_label",icon:i().createElement(f.Icon,{icon:"IcContractEntrySpot",size:24}),label:(0,m.localize)("Entry spot"),value:(0,y.Ew)(_)||" - ",value2:(0,s.toGMTFormat)((0,s.epochToMoment)(p))||" - "}),!isNaN(o)&&i().createElement(v,{id:"dt_exit_spot_label",icon:i().createElement(f.Icon,{icon:"IcContractExitSpot",size:24}),label:(0,m.localize)("Exit spot"),value:(0,y.Ew)(o)||" - ",value2:(0,s.toGMTFormat)((0,s.epochToMoment)(b))||" - "}),!isNaN(t)&&i().createElement(v,{id:"dt_exit_time_label",icon:i().createElement(f.Icon,{icon:"IcContractExitTime",color:z?"green":"red",size:24}),label:(0,m.localize)("Exit time"),value:(0,s.toGMTFormat)((0,s.epochToMoment)(t))||" - "})))};C.propTypes={contract_end_time:a().oneOfType([a().number,a().string]),contract_info:a().object,date_start:a().oneOfType([a().number,a().string]),duration:a().oneOfType([a().number,a().string]),duration_unit:a().string,exit_spot:a().string,is_vanilla:a().bool};const w=C;var k=function(e){var t=e.currency,r=e.history,n=void 0===r?[]:r;return n.length?i().createElement(f.ThemedScrollbars,{is_bypassed:(0,s.isMobile)()},i().createElement("div",{className:"contract-audit__tabs-content"},n.map((function(e,r){return i().createElement(v,{key:r,id:"dt_history_label_".concat(r),label:e.display_name,timestamp:+e.order_date,value:0!==Math.abs(+e.order_amount)?i().createElement(i().Fragment,null,+e.order_amount<0&&i().createElement("strong",null,"-"),i().createElement(f.Money,{amount:e.order_amount,currency:t}),e.value&&i().createElement(i().Fragment,null,i().createElement("br",null),i().createElement("span",null,"(",e.value,")"))):(0,m.localize)("Cancelled")})})))):i().createElement("div",{className:"contract-audit__empty"},i().createElement(f.Icon,{icon:"IcBox",size:48,color:"secondary"}),i().createElement("h4",{className:"contract-audit__empty-header"},(0,m.localize)("No history")),i().createElement(f.Text,{align:"center",line_height:"s",color:"less-prominent",size:"xxs"},(0,m.localize)("You have yet to update either take profit or stop loss")))};k.propTypes={currency:a().string,history:a().array};const S=k;var x=["contract_update_history","has_result","is_accumulator","is_multiplier","is_smarttrader_contract","is_turbos","toggleHistoryTab"];function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j=function(e){var t=e.contract_update_history,r=e.has_result,n=e.is_accumulator,a=e.is_multiplier,o=(e.is_smarttrader_contract,e.is_turbos),c=e.toggleHistoryTab,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,x),u=l.contract_info,d=u.contract_id,_=u.currency,p=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(i().useState([]),2),b=p[0],y=p[1],g=function(e){return e.sort((function(e,t){return t.order_date-e.order_date}))};return i().useEffect((function(){t.length&&t.length>b.length&&y(g(t))}),[t,b]),r?a||n||o?i().createElement("div",{className:"contract-audit__wrapper"},i().createElement(f.Tabs,{top:!0,className:"contract-audit__tabs",onTabItemClick:function(e){c(e),e&&s.WS.contractUpdateHistory(d).then((function(e){y(g(e.contract_update_history))}))}},i().createElement("div",{label:(0,m.localize)("Details")},i().createElement(w,l)),i().createElement("div",{label:(0,m.localize)("History")},i().createElement(S,{currency:_,history:b})))):i().createElement("div",{className:"contract-audit__wrapper"},i().createElement(w,l)):null};j.propTypes={contract_info:a().object,contract_update_history:a().array,has_result:a().bool,is_accumulator:a().bool,is_multiplier:a().bool,is_smarttrader_contract:a().bool,is_turbos:a().bool,toggleHistoryTab:a().func};const O=j;var z=r("./src/App/Components/Elements/ContentLoader/index.js"),I=r("./src/Constants/contract.js"),M=r("./src/Utils/Helpers/market-underlying.js"),A=r("react-dom"),N=r.n(A);function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},D.apply(this,arguments)}var P=function(e){var t=e.is_multiplier,r=e.children,n=e.onSwipedDown,a=f.SwipeableWrapper.useSwipeable({onSwipedDown:n}),o=document.getElementById("dt_contract_drawer_audit");return o?N().createPortal(i().createElement("div",{className:"contract-audit-card"},i().createElement("div",D({},a,{className:_()("contract-audit-card__container",{"contract-audit-card__container--is-multiplier":t})}),r)),o):null};P.propTypes={is_multiplier:a().bool,children:a().node,onSwipedDown:a().func};var F=function(e){var t=e.children,r=e.onSwipedDown,n=e.onSwipedUp,a=f.SwipeableWrapper.useSwipeable({onSwipedDown:r,onSwipedUp:n});return i().createElement("div",a,t)};F.propTypes={children:a().node,onSwipedDown:a().func,onSwipedUp:a().func};var W=function(e){var t=e.validation_error;return i().createElement("div",{className:"contract-card__market-closed"},i().createElement(f.Text,{align:"center",as:"p",className:"contract-card__market-closed__title",weight:"bold"},t))};W.propTypes={symbol:a().string};const H=W;var R=r("./src/Stores/useTraderStores.tsx"),U=r("../stores/src/index.ts");function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var q=(0,U.Pi)((function(e){var t=e.contract_info,r=e.contract_update,n=e.currency,a=e.is_accumulator,o=e.is_collapsed,c=e.is_market_closed,l=e.is_mobile,u=e.is_multiplier,m=e.is_vanilla,d=e.is_smarttrader_contract,p=e.is_sell_requested,b=e.is_turbos,y=e.onClickCancel,g=e.onClickSell,v=e.onSwipedUp,h=e.onSwipedDown,E=e.result,C=e.server_time,w=e.status,k=e.toggleContractAuditDrawer,S=(0,U.oR)(),x=S.ui,T=S.contract_trade,j=(0,R.b)().active_symbols,O=x.addToast,z=x.current_focus,A=x.removeToast,N=x.should_show_cancellation_warning,D=x.setCurrentFocus,P=x.toggleCancellationWarning,W=T.getContractById,L=B((0,f.useHover)(),2),q=L[0],Z=L[1],G=t.profit,$=t.validation_error,V=!!(0,s.getEndTime)(t),Y=(0,s.getSymbolDisplayName)(j,(0,M.cS)(t.shortcode).underlying),X=(0,s.isCryptoContract)(t.underlying),J=!u||X&&u,K=i().createElement(f.ContractCard.Header,{contract_info:t,display_name:Y,getCardLabels:I.gk,getContractTypeDisplay:I.h8,has_progress_slider:(0,s.isDesktop)()&&J,is_mobile:l,is_sell_requested:p,is_sold:V,onClickSell:g,server_time:C}),Q=i().createElement(f.ContractCard.Body,{addToast:O,contract_info:t,contract_update:r,currency:n,current_focus:z,getCardLabels:I.gk,getContractById:W,is_accumulator:a,is_mobile:l,is_multiplier:u,is_sold:V,is_turbos:b,is_vanilla:m,has_progress_slider:J,removeToast:A,server_time:C,setCurrentFocus:D,should_show_cancellation_warning:N,status:w,toggleCancellationWarning:P}),ee=i().createElement(f.ContractCard.Footer,{contract_info:t,getCardLabels:I.gk,is_multiplier:u,is_sell_requested:p,onClickCancel:y,onClickSell:g,server_time:C,status:w}),te=i().createElement(i().Fragment,null,K,Q),re=i().createElement(f.ContractCard,{contract_info:t,getCardLabels:I.gk,is_multiplier:u,profit_loss:G,should_show_result_overlay:!1},i().createElement("div",{className:_()("dc-contract-card",{"dc-contract-card--green":G>0&&!E,"dc-contract-card--red":G<0&&!E,"contract-card__market-closed--disabled":c&&Z}),ref:q},c&&!(0,s.getEndTime)(t)&&i().createElement("div",{className:_()({"contract-card__market-closed--hidden":(0,s.isDesktop)()&&Z})},i().createElement(H,{validation_error:$})),te,ee)),ne=V||u||a||m||b||d;return i().createElement(i().Fragment,null,i().createElement(f.DesktopWrapper,null,re),i().createElement(f.MobileWrapper,null,i().createElement(F,{onSwipedUp:ne?v:void 0,onSwipedDown:ne?h:void 0},ne&&i().createElement(f.Collapsible.ArrowButton,{onClick:k,is_collapsed:o}),re)))}));q.propTypes={currency:a().string,is_accumulator:a().bool,is_smarttrader_contract:a().bool,is_collapsed:a().bool,is_turbos:a().bool,onClickCancel:a().func,onClickSell:a().func};const Z=q;function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var $=(0,U.Pi)((function(e){var t,r=e.contract_info,n=e.contract_update,a=e.contract_update_history,o=e.is_accumulator,c=e.is_sell_requested,u=e.is_dark_theme,m=e.is_market_closed,d=e.is_multiplier,p=e.is_turbos,b=e.is_vanilla,y=e.is_smarttrader_contract,g=e.onClickCancel,v=e.onClickSell,h=e.status,E=e.toggleHistoryTab,C=(0,U.oR)(),w=C.common,k=C.ui,S=w.server_time,x=k.is_mobile,T=r.currency,j=r.exit_tick_display_value,I=r.is_sold,M=i().useRef(),A=i().useRef(),N=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?G(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(i().useState(!1),2),D=N[0],F=N[1],W=!(0,s.isUserSold)(r)||o||d||p?j:"-",H=i().createElement(O,{contract_info:r,contract_update_history:a,contract_end_time:(0,s.getEndTime)(r),is_accumulator:o,is_dark_theme:u,is_multiplier:d,is_smarttrader_contract:y,is_open:!0,is_turbos:p,duration:(0,s.getDurationTime)(r),duration_unit:(0,s.getDurationUnitText)((0,s.getDurationPeriod)(r)),exit_spot:W,has_result:!!I||d||b||p||o||y,toggleHistoryTab:E,is_vanilla:b});if(!r)return null;var R=r.status||r.is_expired?i().createElement(i().Fragment,null,i().createElement(Z,{contract_info:r,contract_update:n,currency:T,is_accumulator:o,is_mobile:x,is_market_closed:m,is_multiplier:d,is_turbos:p,is_vanilla:b,is_sell_requested:c,is_smarttrader_contract:y,is_collapsed:D,onClickCancel:g,onClickSell:v,onSwipedUp:function(){return F(!0)},onSwipedDown:function(){return F(!1)},server_time:S,status:h,toggleContractAuditDrawer:function(){return F(!D)}}),i().createElement(f.DesktopWrapper,null,H)):i().createElement("div",{className:"contract-card"},i().createElement(z.r,{is_dark_theme:u,speed:2})),B=i().createElement(l.Z,{in:D,timeout:250,classNames:"contract-drawer__transition"},i().createElement("div",{id:"dt_contract_drawer",className:_()("contract-drawer",{"contract-drawer--with-collapsible-btn":!!(0,s.getEndTime)(r)||(d||b||p||o||y)&&(0,s.isMobile)(),"contract-drawer--is-multiplier":d&&(0,s.isMobile)(),"contract-drawer--is-multiplier-sold":d&&(0,s.isMobile)()&&(0,s.getEndTime)(r)}),style:{transform:D&&M.current&&A.current&&"translateY(calc(".concat(A.current.clientHeight,"px - ").concat(M.current.clientHeight,"px))")},ref:M},i().createElement("div",{className:"contract-drawer__body",ref:A},R),D&&i().createElement(f.MobileWrapper,null,i().createElement("div",{id:"dt_contract_drawer_audit"},i().createElement(P,{is_multiplier:d},H)))));return i().createElement(i().Fragment,null,i().createElement(f.DesktopWrapper,null,B),i().createElement(f.MobileWrapper,null,i().createElement("div",{style:{height:null===(t=A.current)||void 0===t?void 0:t.clientHeight}},i().createElement(f.Div100vhContainer,{height_offset:"40px",is_bypassed:!A.current},B))))}));$.propTypes={is_accumulator:a().bool,is_multiplier:a().bool,is_vanilla:a().bool,is_smarttrader_contract:a().bool,is_turbos:a().bool,toggleHistoryTab:a().func};const V=(0,c.withRouter)($);var Y=r("./src/App/Components/Elements/Modals/UnsupportedContractModal/index.js"),X=r("./src/Modules/SmartChart/index.js"),J=r("./src/Modules/Contract/Components/Digits/index.js"),K=r("./src/App/Components/Animations/index.js"),Q=r("mobx-react");function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var te=function(e){var t=e.contract_info,r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ee(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(i().useState(!0),2),n=r[0],a=r[1];return i().createElement("div",{className:"info-box-longcode"},i().createElement(f.Icon,{icon:"IcContractFlag",className:"info-box-longcode-icon",size:24}),i().createElement("div",{className:"info-box-longcode-wrapper"},i().createElement(f.Text,{size:"xs",className:_()("info-box-longcode-text",{"info-box-longcode-text--collapsed":n})},t.longcode)," ",t.longcode.length>150&&i().createElement(f.Text,{as:"a",href:"#",size:"xs",onClick:function(){a(!n)},c:!0},n?(0,m.localize)("View more"):(0,m.localize)("View less"))))};te.propTypes={contract_info:a().object,longcode:a().string,is_vanilla:a().bool};const re=(0,Q.observer)(te);var ne=function(e){var t=e.message,r=void 0===t?"":t,n=e.onClickClose;return r?i().createElement("div",{className:"message"},i().createElement("div",{className:"message-icon"},i().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16"},i().createElement("g",{fill:"none",fillRule:"evenodd"},i().createElement("circle",{cx:"8",cy:"8",r:"8",fill:"#F44336"}),i().createElement("path",{fill:"#FFF",fillRule:"nonzero",d:"M8 7.293l3.146-3.147a.5.5 0 0 1 .708.708L8.707 8l3.147 3.146a.5.5 0 0 1-.708.708L8 8.707l-3.146 3.147a.5.5 0 0 1-.708-.708L7.293 8 4.146 4.854a.5.5 0 1 1 .708-.708L8 7.293z"})))),i().createElement("div",{className:"message-text"},r),i().createElement("div",{className:"message-close",onClick:n},i().createElement(f.Icon,{icon:"IcCross"}))):null};ne.propTypes={message:a().string,onClickClose:a().func};const ae=ne;var oe=function(e){var t=e.contract_info,r=e.error_message,n=e.removeError,a=!!t.longcode;return i().createElement(K.o,{is_visible:a,className:"info-box-container",keyname:"info-box-container"},!!t.contract_type&&i().createElement("div",{className:"info-box"},i().createElement(re,{contract_info:t})),i().createElement(ae,{message:r,onClickClose:n}))};oe.propTypes={contract_info:a().object,error_message:a().string,removeError:a().func};const ie=oe;var ce=r("./src/Modules/SmartChart/Components/bottom-widgets.jsx"),le=r("./src/Modules/SmartChart/Components/top-widgets.jsx"),se=(0,U.Pi)((function(){var e=(0,U.oR)().contract_replay.contract_store,t=e.contract_info,r=e.digits_info,n=e.display_status,a=e.is_digit_contract,o=e.is_ended;return i().createElement(J.Z,{is_digit_contract:a,is_ended:o,contract_info:t,digits_info:r,display_status:n})})),ue=(0,U.Pi)((function(){var e=(0,U.oR)().contract_replay,t=(0,R.b)().is_vanilla,r=e.contract_store,n=e.removeErrorMessage,a=e.error_message,o=r.contract_info;return i().createElement(ie,{contract_info:o,error_message:a,removeError:n,is_vanilla:t})})),me=function(){return i().createElement(le.Z,{InfoBox:i().createElement(ue,null),is_title_enabled:!1})},de=function(){return i().createElement(ce.Z,{Widget:i().createElement(se,null)})},_e=r("./src/Modules/SmartChart/Components/Markers/marker.jsx");function pe(e){return pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(e)}var fe=["marker_component"];function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){ge(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ge(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==pe(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==pe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===pe(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ve=i().memo((function(e){var t=e.marker_component,r=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,fe);return i().createElement(t,ye(ye({},r),{},{previous_spot_time:void 0}))}),(function(e,t){return e.previous_spot_time===t.previous_spot_time}));ve.displayName="DelayedAccuBarriersMarker";const he=ve;var Ee=r("./src/Modules/SmartChart/Components/all-markers.jsx");function Ce(){return Ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ce.apply(this,arguments)}function we(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ke=(0,U.Pi)((function(e){var t=e.contract_id,r=(0,U.oR)(),n=r.common,a=r.contract_replay,o=r.ui,c=a.contract_store,l=a.is_market_closed,u=a.is_sell_requested,d=a.is_valid_to_cancel,y=a.onClickCancel,g=a.onClickSell,v=a.onMount,h=a.onUnmount,E=a.indicative_status,C=a.is_chart_loading,w=a.is_forward_starting,k=c.contract_info,S=c.contract_update,x=c.contract_update_history,T=c.is_digit_contract,j=n.routeBackInApp,O=o.is_dark_mode_on,z=o.notification_messages_ui,I=o.toggleHistoryTab,M=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return we(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?we(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(i().useState(!1),2),A=M[0],N=M[1],D=(0,p.useHistory)();if(i().useEffect((function(){var e=+/[^/]*$/.exec(location.pathname)[0];return v(t||e),N(!0),function(){N(!1),h()}}),[t,location,v,h]),!k.underlying)return null;var P=(0,s.isAccumulatorContract)(k.contract_type),F=(0,s.isMultiplierContract)(k.contract_type),W=(0,s.isTurbosContract)(k.contract_type),H=(0,s.isVanillaContract)(k.contract_type),R=(0,s.isSmartTraderContract)(k.contract_type),B=i().createElement(V,{contract_info:k,contract_update:S,contract_update_history:x,is_accumulator:P,is_chart_loading:C,is_dark_theme:O,is_market_closed:l,is_multiplier:F,is_turbos:W,is_sell_requested:u,is_valid_to_cancel:d,is_vanilla:H,is_smarttrader_contract:R,onClickCancel:y,onClickSell:g,status:E,toggleHistoryTab:I});return i().createElement(f.FadeWrapper,{is_visible:A,className:"contract-details-wrapper",keyname:"contract-details-wrapper"},i().createElement(f.MobileWrapper,null,i().createElement(z,null)),i().createElement(Y.Z,{onConfirm:function(){D.goBack()},onClose:function(){var e=(0,s.urlFor)("user/statementws",{legacy:!0});window.open(e,"_blank")},is_visible:w}),i().createElement(f.PageOverlay,{id:"dt_contract_replay_container",header:(0,m.localize)("Contract details"),onClickClose:function(){return N(!1),!(0,s.isEmptyObject)(location.state)&&location.state.from_table_row?D.goBack():j(D)}},i().createElement(f.Div100vhContainer,{className:"trade-container__replay",is_disabled:(0,s.isDesktop)(),height_offset:"80px"},i().createElement(f.DesktopWrapper,null,B),i().createElement(f.MobileWrapper,null,i().createElement("div",{className:_()("contract-drawer__mobile-wrapper",{"contract-drawer__mobile-wrapper--is-multiplier":(0,s.isMobile)()&&F})},B)),i().createElement(i().Suspense,{fallback:i().createElement("div",null)},i().createElement("div",{className:_()("replay-chart__container",{"replay-chart__container--is-multiplier":(0,s.isMobile)()&&F,"vanilla-trade-chart":H})},i().createElement(f.DesktopWrapper,null,i().createElement(z,null)),i().createElement(b.Z,{is_dark:O,is_visible:C}),i().createElement(f.DesktopWrapper,null,i().createElement(xe,{is_dark_theme:O,is_accumulator_contract:P})),i().createElement(f.MobileWrapper,null,T?i().createElement(i().Fragment,null,i().createElement(ue,null),i().createElement(f.SwipeableWrapper,{className:"replay-chart__container-swipeable-wrapper"},i().createElement(se,null),i().createElement(xe,null))):i().createElement(xe,{is_dark_theme:O,is_accumulator_contract:P})))))))}));ke.propTypes={contract_id:a().number};const Se=ke;var xe=(0,U.Pi)((function(e){var t,r=e.is_accumulator_contract,n=(0,R.b)(),a=(0,U.oR)(),o=a.contract_replay,c=a.common,l=a.ui,u=o.contract_store,m=o.chart_state,d=o.chartStateChange,_=o.margin,p=u.accumulator_previous_spot_time,b=u.contract_config,y=u.marker,g=u.is_digit_contract,v=u.barriers_array,h=u.markers_array,E=u.contract_info,C=E.underlying,w=E.audit_details,k="READY"===m||"SCROLL_TO_LEFT"===m,S=c.app_routing_history,x=c.current_language,T=c.is_socket_opened,j=l.is_dark_mode_on,O=l.is_chart_layout_default,z=l.is_chart_countdown_visible,I=b.end_epoch,M=b.chart_type,A=b.start_epoch,N=b.granularity,D="DBot"===(0,s.getPlatformRedirect)(S).name,P={language:x.toLowerCase(),theme:j&&!D?"dark":"light",position:O?"bottom":"left",countdown:z,assetInformation:!1,isHighestLowestMarkerEnabled:!1},F=k?b.scroll_to_epoch:void 0,W=w?w.all_ticks:[],H=n.wsForget,B=n.wsSubscribe,L=n.wsSendRequest,q=n.wsForgetStream,Z=Ee.Z[null==y?void 0:y.type],G=function(){return(0,s.isDesktop)()&&g},$=(0,f.usePrevious)(A);return i().createElement(X.Xb,{barriers:v,bottomWidgets:G()?de:null,chartControlsWidgets:null,chartType:M,endEpoch:I,margin:_||null,isMobile:(0,s.isMobile)(),enabledNavigationWidget:(0,s.isDesktop)(),enabledChartFooter:!1,granularity:N,requestAPI:L,requestForget:H,requestForgetStream:q,crosshair:(0,s.isMobile)()?0:void 0,maxTick:(0,s.isMobile)()?8:void 0,requestSubscribe:B,settings:P,startEpoch:A,scrollToEpoch:F,stateChangeListener:d,symbol:C,allTicks:W,topWidgets:me,isConnectionOpened:T,isStaticChart:r&&I&&A<$,shouldFetchTradingTimes:!1,yAxisMargin:(t={top:(0,s.isMobile)()?96:148,bottom:G()?128:112},(0,s.isMobile)()&&(t.bottom=48),t),anchorChartToLeft:(0,s.isMobile)(),shouldFetchTickHistory:"seconds"!==(0,s.getDurationUnitText)((0,s.getDurationPeriod)(E))||"open"===E.status,shouldDrawTicksFromContractInfo:r,contractInfo:E},h.map((function(e){var t=e.content_config,r=e.marker_config,n=e.react_key;return i().createElement(_e.Z,{key:n,marker_config:r,marker_content_props:t,is_bottom_widget_visible:G()})})),r&&!!h&&i().createElement(he,Ce({marker_component:Z,key:y.key,is_dark_theme:j,granularity:N,is_in_contract_details:!0,previous_spot_time:p},y)))}));xe.propTypes={is_accumulator_contract:a().bool};var Te=["GetProposalFailure","ContractValidationError"],je=(0,U.Pi)((function(e){var t=e.match,r=e.history,n=(0,U.oR)().contract_replay,a=n.removeErrorMessage,o=n.error_message,d=n.error_code,_=n.has_error,p=n.removeAccountSwitcherListener,f=n.setAccountSwitcherListener;return i().useEffect((function(){return f(+t.params.contract_id,r),function(){a(),p()}}),[f,p,a,r,t.params.contract_id]),isNaN(t.params.contract_id)?i().createElement(c.Redirect,{to:"/404"}):i().createElement(i().Fragment,null,_?i().createElement(u.default,{message:o,is_dialog:Te.includes(d),redirect_label:Te.includes(d)?(0,m.localize)("Ok"):(0,m.localize)("Go back to trading"),redirectOnClick:function(){return r.push(s.routes.trade)},should_show_refresh:!1}):i().createElement(l.Z,{in:!_,timeout:400,classNames:{enter:"contract--enter",enterDone:"contract--enter-done",exit:"contract--exit"},unmountOnExit:!0},i().createElement(Se,{contract_id:+t.params.contract_id,key:+t.params.contract_id})))}));je.propTypes={history:a().object,match:a().object};const Oe=(0,c.withRouter)(je)}}]);