"use strict";(self.webpackChunk_deriv_trader=self.webpackChunk_deriv_trader||[]).push([["trade-modals"],{"./src/App/Components/Elements/Modals/UnsupportedContractModal/index.js":(e,t,r)=>{r.d(t,{Z:()=>m});var o=r("../../node_modules/prop-types/index.js"),n=r.n(o),a=r("react"),i=r.n(a),l=r("@deriv/components"),s=r("@deriv/translations"),c=r("@deriv/shared"),d=r("../stores/src/index.ts"),u=(0,d.Pi)((function(e){var t=e.onConfirm,r=e.onClose,o=(0,d.oR)().ui,n=o.disableApp,a=o.enableApp,u=o.is_loading,m=o.is_unsupported_contract_modal_visible;return i().createElement(l.Dialog,{title:(0,s.localize)("We’re working on it"),confirm_button_text:(0,s.localize)("Stay on {{website_domain}}",{website_domain:c.website_name}),cancel_button_text:(0,s.localize)("Go to Binary.com"),onConfirm:t,onCancel:r,disableApp:n,enableApp:a,is_loading:u,is_closed_on_cancel:!0,is_visible:m},i().createElement(s.Localize,{i18n_default_text:"You’ve selected a trade type that is currently unsupported, but we’re working on it."}))}));u.propTypes={onClose:n().func,onConfirm:n().func};const m=u},"./src/App/Containers/Modals/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var o=r("react"),n=r.n(o),a=r("@deriv/shared"),i=r("./src/App/Components/Elements/Modals/UnsupportedContractModal/index.js"),l=r("../../node_modules/prop-types/index.js"),s=r.n(l),c=r("@deriv/components"),d=r("@deriv/translations"),u=r("../stores/src/index.ts"),m=(0,u.Pi)((function(e){var t=e.onCancel,r=e.onConfirm,o=(0,u.oR)().ui,i=o.disableApp,l=o.enableApp,s=o.is_loading,m=o.has_only_forward_starting_contracts;return n().createElement(c.Dialog,{className:"market-unavailable-modal",title:(0,d.localize)("We’re working on it"),confirm_button_text:(0,d.localize)("Stay on {{platform_name_trader}}",{platform_name_trader:(0,a.getPlatformSettings)("trader").name}),cancel_button_text:(0,d.localize)("Go to {{platform_name_smarttrader}}",{platform_name_smarttrader:(0,a.getPlatformSettings)("smarttrader").name}),onConfirm:r,onCancel:t,is_mobile_full_width:!1,is_visible:m,disableApp:i,enableApp:l,is_loading:s},n().createElement(d.Localize,{i18n_default_text:"This market is not yet available on {{platform_name_trader}}, but it is on {{platform_name_smarttrader}}.",values:{platform_name_trader:(0,a.getPlatformSettings)("trader").name,platform_name_smarttrader:(0,a.getPlatformSettings)("smarttrader").name}}))}));m.propTypes={onCancel:s().func,onConfirm:s().func};const _=m;var f=function(e){switch(e){case"buy":return(0,d.localize)("Purchase Error");case"cancel":return(0,d.localize)("Deal Cancellation Error");case"contract_update":return(0,d.localize)("Contract Update Error");case"sell":return(0,d.localize)("Sell Error");default:return"Error"}};const p=function(e){var t=e.is_visible,r=e.toggleModal,o=e.is_appstore,i=e.is_logged_in;return n().createElement(c.Modal,{id:"dt_authorization_required_modal",is_open:t,small:!0,toggleModal:r,title:(0,d.localize)("Start trading with us")},n().createElement(c.Modal.Body,null,(0,d.localize)("Log in or create a free account to place a trade.")),n().createElement(c.Modal.Footer,null,n().createElement(c.Button,{has_effect:!0,text:(0,d.localize)("Log in"),onClick:function(){return(0,a.redirectToLogin)(i,(0,d.getLanguage)())},secondary:!0}),n().createElement(c.Button,{has_effect:!0,text:(0,d.localize)("Create free account"),onClick:function(){return(0,a.redirectToSignUp)({is_appstore:o})},primary:!0})))};var g=r("react-router-dom");const v=(0,g.withRouter)((function(e){var t=e.history,r=e.is_virtual,o=e.is_visible,i=e.message,l=e.toggleModal;return n().createElement(c.Modal,{id:"dt_insufficient_balance_modal",is_open:o,small:!0,is_vertical_centered:(0,a.isMobile)(),toggleModal:l,title:(0,d.localize)("Insufficient balance")},n().createElement(c.Modal.Body,null,i),n().createElement(c.Modal.Footer,null,n().createElement(c.Button,{has_effect:!0,text:r?(0,d.localize)("OK"):(0,d.localize)("Deposit now"),onClick:function(){var e;r?l():null==t||null===(e=t.push)||void 0===e||e.call(t,a.routes.cashier_deposit)},primary:!0})))})),b=function(e){var t=e.is_visible,r=e.onConfirm;return n().createElement(c.Modal,{is_open:t,small:!0,is_vertical_centered:(0,a.isMobile)(),toggleModal:r,title:(0,d.localize)("Purchase Error")},n().createElement(c.Modal.Body,null,n().createElement(d.Localize,{i18n_default_text:"No further trading is allowed on this contract type for the current trading session. For more info, refer to our <0>terms and conditions</0>.",components:[n().createElement(c.StaticUrl,{key:0,className:"link",href:"tnc/trading-terms.pdf",is_document:!0})]})),n().createElement(c.Modal.Footer,null,n().createElement(c.Button,{has_effect:!0,text:(0,d.localize)("OK"),onClick:r,primary:!0})))},E=function(e){var t=e.is_visible,r=e.onConfirm,o=(0,g.useHistory)();return n().createElement(c.Modal,{is_open:t,is_vertical_centered:(0,a.isMobile)(),className:"account-verification-required-modal",toggleModal:r,title:(0,d.localize)("Account verification required"),width:"440px",height:(0,a.isMobile)()?"auto":"220px"},n().createElement(c.Modal.Body,{className:"account-verification-required-modal-text"},n().createElement(d.Localize,{i18n_default_text:"Please submit your proof of identity and proof of address to verify your account and continue trading."})),n().createElement("div",{className:"account-verification-required-modal-button"},n().createElement(c.Modal.Footer,null,n().createElement(c.Button,{has_effect:!0,text:(0,d.localize)("Submit Proof"),onClick:function(){return o.push(a.routes.proof_of_identity)},primary:!0}))))},C=function(e){var t=e.is_virtual,r=e.is_visible,o=e.is_logged_in,a=e.onConfirm,i=e.services_error,l=i.code,s=i.message,u=i.type;if(!l||!s)return n().createElement(n().Fragment,null);switch(l){case"AuthorizationRequired":return n().createElement(p,{is_logged_in:o,is_visible:r,toggleModal:a});case"InsufficientBalance":return n().createElement(v,{is_virtual:t,is_visible:r,message:s,toggleModal:a});case"CompanyWideLimitExceeded":return n().createElement(b,{is_visible:r,onConfirm:a});case"PleaseAuthenticate":return n().createElement(E,{is_visible:r,onConfirm:a});default:return n().createElement(c.Modal,{is_open:r,small:!0,title:f(u),toggleModal:a},n().createElement(c.Modal.Body,null,s),n().createElement(c.Modal.Footer,null,n().createElement(c.Button,{has_effect:!0,text:(0,d.localize)("OK"),onClick:a,primary:!0})))}};var y=r("./src/Stores/useTraderStores.tsx");const h=(0,u.Pi)((function(){var e=(0,u.oR)(),t=e.ui,r=e.client,o=e.common,l=(0,y.b)(),s=l.resetPreviousSymbol,c=l.clearPurchaseInfo,d=l.requestProposal,m=r.is_virtual,f=r.is_logged_in,p=o.services_error,g=t.is_services_error_visible,v=t.setHasOnlyForwardingContracts,b=t.toggleServicesErrorModal,E=t.toggleUnsupportedContractModal,h=function(){v(!1),s()},M=function(){E(!1)};return n().createElement(n().Fragment,null,n().createElement(i.Z,{onConfirm:M,onClose:function(){var e=(0,a.urlFor)("user/portfoliows",{legacy:!0});window.open(e,"_blank"),M()}}),n().createElement(_,{onConfirm:function(){h()},onCancel:function(){window.open((0,a.getUrlSmartTrader)()),h()}}),n().createElement(C,{onConfirm:function(){b(!1),"buy"===p.type&&(c(),d())},services_error:p,is_visible:g,is_virtual:m,is_logged_in:f}))}))}}]);