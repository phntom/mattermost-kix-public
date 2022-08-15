"use strict";(self.webpackChunk_mattermost_webapp=self.webpackChunk_mattermost_webapp||[]).push([[594],{96512:(e,t,a)=>{a.d(t,{Z:()=>d});var s=a(45697),r=a.n(s),n=a(67294),i=a(86896),l=a(44012),m=a(73727),c=a(94184),o=a.n(c);const u=e=>{let{url:t,className:a,onClick:s}=e;const{formatMessage:r}=(0,i.Z)();return n.createElement("div",{id:"back_button",className:o()("signup-header",a)},n.createElement(m.Link,{onClick:s,to:t},n.createElement("span",{id:"back_button_icon",className:"fa fa-1x fa-angle-left",title:r({id:"generic_icons.back",defaultMessage:"Back Icon"})}),n.createElement(l.Z,{id:"web.header.back",defaultMessage:"Back"})))};u.propTypes={url:r().string,className:r().string,onClick:r().func},u.defaultProps={url:"/"};const d=u},78453:(e,t,a)=>{a.d(t,{Z:()=>n}),a(19601);var s=a(67294),r=a(22826);const n=function(e){return t=>{const a=(0,r.Z)();return s.createElement(e,Object.assign({usageDeltas:a},t))}}},37635:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(45697),r=a.n(s),n=a(67294),i=a(44012);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class m extends n.PureComponent{render(){const{customDescriptionText:e,siteName:t}=this.props;let a=null;return a=e||n.createElement(i.Z,{id:"web.root.signup_info",defaultMessage:"All team communication in one place, searchable and accessible anywhere"}),n.createElement(n.Fragment,null,n.createElement("h1",{id:"site_name"},t),n.createElement("h3",{id:"site_description",className:"color--light"},a))}}l(m,"propTypes",{customDescriptionText:r().string,siteName:r().string}),l(m,"defaultProps",{siteName:"Mattermost"})},11594:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var s=a(14494),r=a(97779),n=a(22742),i=a(9276),l=a(5596),m=a(6498),c=a(78453),o=a(46195),u=a(45697),d=a.n(u),p=(a(74916),a(4723),a(19601),a(67294)),h=a(5977),E=a(44012),g=a(13301),_=a(96512),f=(a(73210),a(59925)),N=a(66788),b=a(12266),v=a(16406),M=a(86040);function T(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class y extends p.PureComponent{constructor(e){var t;super(e),T(this,"submitNext",(e=>{e.preventDefault(),(0,f.L9)("display_name","click_next");const t=this.state.teamDisplayName.trim();if(!t)return void this.setState({nameError:p.createElement(E.Z,{id:"create_team.display_name.required",defaultMessage:"This field is required"})});if(t.length<N.ZP.MIN_TEAMNAME_LENGTH||t.length>N.ZP.MAX_TEAMNAME_LENGTH)return void this.setState({nameError:p.createElement(E.Z,{id:"create_team.display_name.charLength",defaultMessage:"Name must be {min} or more characters up to a maximum of {max}. You can add a longer team description later.",values:{min:N.ZP.MIN_TEAMNAME_LENGTH,max:N.ZP.MAX_TEAMNAME_LENGTH}})});const a=this.props.state;a.wizard="team_url",a.team.display_name=t,a.team.name=(0,b.oK)(t),this.props.updateParent(a)})),T(this,"handleFocus",(e=>{e.preventDefault(),e.currentTarget.select()})),T(this,"handleDisplayNameChange",(e=>{this.setState({teamDisplayName:e.target.value})})),this.state={teamDisplayName:(null===(t=this.props.state.team)||void 0===t?void 0:t.display_name)||""}}componentDidMount(){(0,f.L9)("signup","signup_team_01_name")}render(){let e=null,t="form-group";return this.state.nameError&&(e=p.createElement("label",{className:"control-label"},this.state.nameError),t+=" has-error"),p.createElement("div",null,p.createElement("form",null,p.createElement("img",{alt:"signup logo",className:"signup-team-logo",src:v.Z}),p.createElement("h5",null,p.createElement(E.Z,{id:"create_team.display_name.teamName",tagName:"strong",defaultMessage:"Team Name"})),p.createElement("div",{className:t},p.createElement("div",{className:"row"},p.createElement("div",{className:"col-sm-9"},p.createElement("input",{id:"teamNameInput",type:"text",className:"form-control",placeholder:"",maxLength:128,value:this.state.teamDisplayName,autoFocus:!0,onFocus:this.handleFocus,onChange:this.handleDisplayNameChange,spellCheck:"false"}))),e),p.createElement("div",null,p.createElement(E.Z,{id:"create_team.display_name.nameHelp",defaultMessage:"Name your team in any language. Your team name shows in menus and headings."})),p.createElement("button",{id:"teamNameNextButton",type:"submit",className:"btn btn-primary mt-8",onClick:this.submitNext},p.createElement(E.Z,{id:"create_team.display_name.next",defaultMessage:"Next"}),p.createElement(M.Z,null))))}}T(y,"propTypes",{state:d().shape({wizard:d().string.isRequired}).isRequired,updateParent:d().func.isRequired});var Z=a(37635),L=a(92743),x=(a(88674),a(78318)),w=a(45288),A=a(15558),R=a(89959);function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class P extends p.PureComponent{constructor(e){var t;super(e),k(this,"submitBack",(e=>{e.preventDefault(),(0,f.L9)("signup","click_back");const t=this.props.state;t.wizard="display_name",this.props.updateParent(t)})),k(this,"submitNext",(async e=>{e.preventDefault(),(0,f.L9)("signup","click_finish");const t=this.state.teamURL.trim(),a=b.oK(t),{actions:{checkIfTeamExists:s,createTeam:r}}=this.props;if(!t)return void this.setState({nameError:p.createElement(E.Z,{id:"create_team.team_url.required",defaultMessage:"This field is required"})});if(a.length<N.ZP.MIN_TEAMNAME_LENGTH||a.length>N.ZP.MAX_TEAMNAME_LENGTH)return void this.setState({nameError:p.createElement(E.Z,{id:"create_team.team_url.charLength",defaultMessage:"Name must be {min} or more characters up to a maximum of {max}",values:{min:N.ZP.MIN_TEAMNAME_LENGTH,max:N.ZP.MAX_TEAMNAME_LENGTH}})});if(a!==t||!/^[a-z]+([a-z\-0-9]+|(__)?)[a-z0-9]+$/g.test(t))return void this.setState({nameError:p.createElement(E.Z,{id:"create_team.team_url.regex",defaultMessage:"Use only lower case letters, numbers and dashes. Must start with a letter and can't end in a dash."})});for(let e=0;e<N.ZP.RESERVED_TEAM_NAMES.length;e++)if(0===a.indexOf(N.ZP.RESERVED_TEAM_NAMES[e]))return void this.setState({nameError:p.createElement(w.Z,{id:"create_team.team_url.taken",defaultMessage:"This URL [starts with a reserved word](!https://docs.mattermost.com/help/getting-started/creating-teams.html#team-url) or is unavailable. Please try another."})});this.setState({isLoading:!0});const n=JSON.parse(JSON.stringify(this.props.state));if(n.team.type="O",n.team.name=t,(await s(t)).exists)return this.setState({nameError:p.createElement(E.Z,{id:"create_team.team_url.unavailable",defaultMessage:"This URL is taken or unavailable. Please try another."})}),void this.setState({isLoading:!1});const i=await r(n.team),l=i.data,m=i.error;l?(this.props.history.push("/"+l.name+"/channels/"+N.ZP.DEFAULT_CHANNEL),(0,f.L9)("signup","signup_team_03_complete")):m&&(this.setState({nameError:m.message}),this.setState({isLoading:!1}))})),k(this,"handleFocus",(e=>{e.preventDefault(),e.currentTarget.select()})),k(this,"handleTeamURLInputChange",(e=>{this.setState({teamURL:e.target.value})})),this.state={nameError:"",isLoading:!1,teamURL:null===(t=e.state.team)||void 0===t?void 0:t.name}}componentDidMount(){(0,f.L9)("signup","signup_team_02_url")}render(){let e=null,t="form-group";this.state.nameError&&(e=p.createElement("label",{className:"control-label"},this.state.nameError),t+=" has-error");const a="".concat(b.fO(),"/"),s=p.createElement(R.Z,{id:"urlTooltip"},a);let r=p.createElement(E.Z,{id:"create_team.team_url.finish",defaultMessage:"Finish"});return this.state.isLoading&&(r=p.createElement(E.Z,{id:"create_team.team_url.creatingTeam",defaultMessage:"Creating team..."})),p.createElement("div",null,p.createElement("form",null,p.createElement("img",{alt:"signup team logo",className:"signup-team-logo",src:v.Z}),p.createElement("h5",null,p.createElement(E.Z,{id:"create_team.team_url.teamUrl",tagName:"strong",defaultMessage:"Team URL"})),p.createElement("div",{className:t},p.createElement("div",{className:"row"},p.createElement("div",{className:"col-sm-11"},p.createElement("div",{className:"input-group input-group--limit"},p.createElement(A.Z,{delayShow:N.ZP.OVERLAY_TIME_DELAY,placement:"top",overlay:s},p.createElement("span",{className:"input-group-addon"},a)),p.createElement("input",{id:"teamURLInput",type:"text",className:"form-control",placeholder:"",maxLength:128,value:this.state.teamURL,autoFocus:!0,onFocus:this.handleFocus,onChange:this.handleTeamURLInputChange,spellCheck:"false"})))),e),p.createElement("p",null,p.createElement(E.Z,{id:"create_team.team_url.webAddress",defaultMessage:"Choose the web address of your new team:"})),p.createElement("ul",{className:"color--light"},p.createElement("li",null,p.createElement(E.Z,{id:"create_team.team_url.hint1",defaultMessage:"Short and memorable is best"})),p.createElement("li",null,p.createElement(E.Z,{id:"create_team.team_url.hint2",defaultMessage:"Use lowercase letters, numbers and dashes"})),p.createElement("li",null,p.createElement(E.Z,{id:"create_team.team_url.hint3",defaultMessage:"Must start with a letter and can't end in a dash"}))),p.createElement("div",{className:"mt-8"},p.createElement(x.Z,{id:"teamURLFinishButton",type:"submit",bsStyle:"primary",disabled:this.state.isLoading,onClick:e=>this.submitNext(e)},r)),p.createElement("div",{className:"mt-8"},p.createElement("a",{href:"#",onClick:this.submitBack},p.createElement(E.Z,{id:"create_team.team_url.back",defaultMessage:"Back to previous step"})))))}}k(P,"propTypes",{state:d().shape({wizard:d().string.isRequired}).isRequired,updateParent:d().func.isRequired,actions:d().shape({checkIfTeamExists:d().func.isRequired,createTeam:d().func.isRequired}).isRequired,history:d().shape({}).isRequired});const C=(0,s.connect)(null,(function(e){return{actions:(0,r.bindActionCreators)({checkIfTeamExists:L.iw,createTeam:L.Cm},e)}}))(P);function D(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class S extends p.PureComponent{constructor(e){super(e),D(this,"updateParent",(e=>{this.setState(e),this.props.history.push("/create_team/"+e.wizard)})),this.state={team:{},wizard:"display_name"}}render(){const{currentChannel:e,currentTeam:t,customDescriptionText:a,match:s,siteName:r,isCloud:n,isFreeTrial:i,usageDeltas:{teams:{active:l}}}=this.props,m=n&&!i&&l>=0;let c="/select_team";return t&&(c="/".concat(t.name),e&&(c+="/channels/".concat(e.name))),p.createElement("div",null,p.createElement(g.Z,null),p.createElement(_.Z,{url:c}),p.createElement("div",{className:"col-sm-12"},p.createElement("div",{className:"signup-team__container"},p.createElement(Z.Z,{customDescriptionText:a,siteName:r}),p.createElement("div",{className:"signup__content"},m?p.createElement(p.Fragment,null,p.createElement("h5",null,p.createElement(E.Z,{id:"create_team.createTeamRestricted.title",tagName:"strong",defaultMessage:"Professional feature"})),p.createElement("div",null,p.createElement(E.Z,{id:"create_team.createTeamRestricted.message",defaultMessage:"Your workspace plan has reached the limit on the number of teams. Create unlimited teams with a free 30-day trial. Contact your System Administrator."}))):p.createElement(h.rs,null,p.createElement(h.AW,{path:"".concat(this.props.match.url,"/display_name"),render:e=>p.createElement(y,Object.assign({state:this.state,updateParent:this.updateParent},e))}),p.createElement(h.AW,{path:"".concat(this.props.match.url,"/team_url"),render:e=>p.createElement(C,Object.assign({state:this.state,updateParent:this.updateParent},e))}),p.createElement(h.l_,{to:"".concat(s.url,"/display_name")}))))))}}D(S,"propTypes",{customDescriptionText:d().string.isRequired,siteName:d().string.isRequired,match:d().shape({url:d().string.isRequired}).isRequired,isCloud:d().bool.isRequired,isFreeTrial:d().bool.isRequired});const q=(0,r.compose)((0,s.connect)((function(e){const t=(0,n.iE)(e),a=(0,i.TB)(e),s=(0,l.kA)(e),r=t.CustomDescriptionText,c=t.SiteName,u=(0,m.oR)(e),d=(0,n.lJ)(e);return{currentChannel:a,currentTeam:s,customDescriptionText:r,siteName:c,isCloud:(0,o.Ht)(d),isFreeTrial:"true"===(null==u?void 0:u.is_free_trial)}})),c.Z)(S)},16406:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"files/ab8aa80cba445eb0fb75e6611c292567.png"}}]);
//# sourceMappingURL=594.3296e85a6abc98e5bca7.js.map