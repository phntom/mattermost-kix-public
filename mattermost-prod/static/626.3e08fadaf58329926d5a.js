"use strict";(self.webpackChunk_mattermost_webapp=self.webpackChunk_mattermost_webapp||[]).push([[626],{56626:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var s=r(14494),a=r(97779),i=r(33383),n=r(22742),o=r(89754),c=r(37792),l=r(45697),m=r.n(l),d=(r(88674),r(33948),r(41637),r(74916),r(64765),r(4723),r(67294)),u=r(66456),g=r(78318),f=r(44012),h=r(16794),p=r(34288),v=r(13301),E=r(19476),T=r(56640),_=r(73406),S=r(37668),b=r(89262),O=r(64522),C=r(54140),Z=r(66788);function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class y extends d.PureComponent{constructor(e){super(e),R(this,"formattedText",void 0),R(this,"getTermsOfService",(async()=>{this.setState({customTermsOfServiceId:"",customTermsOfServiceText:"",loading:!0});const{data:e}=await this.props.actions.getTermsOfService();e?this.setState({customTermsOfServiceId:e.id,customTermsOfServiceText:e.text,loading:!1}):p.gc("/login?extra=".concat(Z.gT.GET_TERMS_ERROR))})),R(this,"handleLogoutClick",(e=>{e.preventDefault(),p.gc("/login")})),R(this,"handleAcceptTerms",(()=>{this.setState({loadingAgree:!0,serverError:null}),this.registerUserAction(!0,(()=>{const e=new URLSearchParams(this.props.location.search).get("redirect_to");e&&e.match(/^\/([^/]|$)/)?b.m.push(e):this.props.useCaseOnboarding?b.m.push("/"):p.mc()}))})),R(this,"handleRejectTerms",(()=>{this.setState({loadingDisagree:!0,serverError:null}),this.registerUserAction(!1,(()=>{p.gc("/login?extra=".concat(Z.gT.TERMS_REJECTED))}))})),R(this,"registerUserAction",(async(e,t)=>{const{data:r}=await this.props.actions.updateMyTermsOfServiceStatus(this.state.customTermsOfServiceId,e);r?t(r):this.setState({loadingAgree:!1,loadingDisagree:!1,serverError:d.createElement(f.Z,{id:"terms_of_service.api_error",defaultMessage:"Unable to complete the request. If this issue persists, contact your System Administrator."})})})),this.state={customTermsOfServiceId:"",customTermsOfServiceText:"",loading:!0,loadingAgree:!1,loadingDisagree:!1,serverError:null},this.formattedText=(0,h.GA)((t=>(0,C.RZ)(t,{},e.emojiMap)))}componentDidMount(){this.props.termsEnabled?this.getTermsOfService():p.mc()}render(){if(this.state.loading)return d.createElement(E.Z,null);let e="terms-of-service__markdown";return this.state.serverError?e+=" terms-of-service-error__height--fill":e+=" terms-of-service__height--fill",d.createElement("div",null,d.createElement(v.Z,null),d.createElement("div",{className:"signup-header"},d.createElement("a",{href:"#",onClick:this.handleLogoutClick},d.createElement(_.Z,null),d.createElement(f.Z,{id:"web.header.logout",defaultMessage:"Logout"}))),d.createElement("div",null,d.createElement("div",{className:"signup-team__container terms-of-service__container"},d.createElement("div",{className:e},d.createElement("div",{className:"medium-center","data-testid":"termsOfService"},(0,O.Z)(this.formattedText(this.state.customTermsOfServiceText),!1,{mentions:!1}))),d.createElement("div",{className:"terms-of-service__footer medium-center"},d.createElement(u.Z,{className:"terms-of-service__button-group"},d.createElement(g.Z,{bsStyle:"primary",disabled:this.state.loadingAgree||this.state.loadingDisagree,id:"acceptTerms",onClick:this.handleAcceptTerms,type:"submit"},this.state.loadingAgree&&d.createElement(T.Z,null),d.createElement(f.Z,{id:"terms_of_service.agreeButton",defaultMessage:"I Agree"})),d.createElement(g.Z,{bsStyle:"link",disabled:this.state.loadingAgree||this.state.loadingDisagree,id:"rejectTerms",onClick:this.handleRejectTerms,type:"reset"},this.state.loadingDisagree&&d.createElement(T.Z,null),d.createElement(f.Z,{id:"terms_of_service.disagreeButton",defaultMessage:"I Disagree"}))),Boolean(this.state.serverError)&&d.createElement("div",{className:"terms-of-service__server-error alert alert-warning"},d.createElement(S.Z,null)," ",this.state.serverError)))))}}R(y,"propTypes",{location:m().shape({search:m().string.isRequired}).isRequired,termsEnabled:m().bool.isRequired,actions:m().shape({getTermsOfService:m().func.isRequired,updateMyTermsOfServiceStatus:m().func.isRequired}).isRequired,useCaseOnboarding:m().bool.isRequired});const M=(0,s.connect)((function(e){const t=(0,n.iE)(e);return{useCaseOnboarding:(0,o.NC)(e),termsEnabled:"true"===t.EnableCustomTermsOfService,emojiMap:(0,c.kM)(e)}}),(function(e){return{actions:(0,a.bindActionCreators)({getTermsOfService:i.Oi,updateMyTermsOfServiceStatus:i.oR},e)}}))(y)},73406:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(67294),a=r(86896);function i(){const{formatMessage:e}=(0,a.Z)();return s.createElement("i",{className:"fa fa-1x fa-angle-left",title:e({id:"generic_icons.logout",defaultMessage:"Logout Icon"})})}},37668:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(45697),a=r.n(s),i=r(67294),n=r(68492),o=r(87993);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class l extends i.PureComponent{render(){const e="fa fa-warning"+(this.props.additionalClassName?" "+this.props.additionalClassName:"");return i.createElement(n.Z,{className:e,title:{id:(0,o.t)("generic_icons.warning"),defaultMessage:"Warning Icon"}})}}c(l,"propTypes",{additionalClassName:a().oneOfType([a().string,a().oneOf([null])])}),c(l,"defaultProps",{additionalClassName:null})}}]);
//# sourceMappingURL=626.3e08fadaf58329926d5a.js.map