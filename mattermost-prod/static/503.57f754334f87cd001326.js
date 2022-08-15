"use strict";(self.webpackChunk_mattermost_webapp=self.webpackChunk_mattermost_webapp||[]).push([[503],{5503:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var n=a(45697),l=a.n(n),s=(a(74916),a(4723),a(67294)),i=a(73935),o=a(5977),m=a(44012),r=a(45288),c=(a(32023),a(86896)),d=a(73727),g=a(89363),h=a(21671);let p;!function(e){e.Messaging="Messaging",e.Composing="Composing",e.Mentioning="Mentioning",e.Formatting="Formatting",e.Attaching="Attaching",e.Commands="Commands"}(p||(p={}));const u=e=>{let{excludedLinks:t=[]}=e,a="";const n=(0,h.a)().get("locale");n&&g.cY(n)&&(a="?locale=".concat(n));const{formatMessage:l}=(0,c.Z)(),i={[p.Messaging]:{path:"/help/messaging",message:l({id:"help.link.messaging",defaultMessage:"Basic Messaging"})},[p.Composing]:{path:"/help/composing",message:l({id:"help.link.composing",defaultMessage:"Composing Messages and Replies"})},[p.Mentioning]:{path:"/help/mentioning",message:l({id:"help.link.mentioning",defaultMessage:"Mentioning Teammates"})},[p.Formatting]:{path:"/help/formatting",message:l({id:"help.link.formatting",defaultMessage:"Formatting Messages Using Markdown"})},[p.Attaching]:{path:"/help/attaching",message:l({id:"help.link.attaching",defaultMessage:"Attaching Files"})},[p.Commands]:{path:"/help/commands",message:l({id:"help.link.commands",defaultMessage:"Executing Commands"})}},o=Object.values(p).filter((e=>!t.includes(e)));return s.createElement(s.Fragment,null,s.createElement("p",{className:"links"},s.createElement(m.Z,{id:"help.learnMore",defaultMessage:"Learn more about:"})),s.createElement("ul",null,o.map((e=>{const{path:t,message:n}=i[e];return s.createElement("li",{key:e},s.createElement(d.Link,{to:"".concat(t).concat(a)},n))}))))};u.propTypes={excludedLinks:l().array};const f=u;function E(){return s.createElement("div",null,s.createElement("h1",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.messaging.title",defaultMessage:"Messaging Basics"})),s.createElement("hr",null),s.createElement("p",null,s.createElement(r.Z,{id:"help.messaging.write",defaultMessage:"**Write Messages:** Use the text input box at the bottom of the Mattermost interface to write a message. Press **ENTER** to send the message. Use **SHIFT+ENTER** to create a new line without sending a message."})),s.createElement("p",null,s.createElement(r.Z,{id:"help.messaging.reply",defaultMessage:"**Reply to Messages:** Select the **Reply Arrow** icon next to the text input box."})),s.createElement("p",null,s.createElement("img",{src:"https://docs.mattermost.com/_images/reply-icon.png",alt:"Reply Arrow icon",className:"markdown-inline-img"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.messaging.notify",defaultMessage:"**Notify Teammates:** Type `@username` to get the attention of specific team members."})),s.createElement("p",null,s.createElement(r.Z,{id:"help.messaging.format",defaultMessage:"**Format Your Messages:** Use Markdown to include text styling, headings, links, emoticons, code blocks, block quotes, tables, lists, and in-line images in your messages. See the following table for common formatting examples."})),s.createElement("p",null,s.createElement("img",{src:"https://docs.mattermost.com/_images/messagesTable1.png",alt:"Use Markdown in your messages",className:"markdown-inline-img"})),s.createElement("p",null,s.createElement(m.Z,{id:"help.messaging.emoji",defaultMessage:'**Add Emoji:** Type ":" to open an emoji autocomplete. If the existing emojis don\'t say what you want to express, you can also create your own <link>Custom Emoji</link>.',values:{link:e=>s.createElement("a",{href:"https://docs.mattermost.com/messaging/using-emoji.html#creating-custom-emojis",target:"_blank",rel:"noreferrer"},e)}})),s.createElement("p",null,s.createElement(r.Z,{id:"help.messaging.attach",defaultMessage:"**Attach Files:** Drag and drop files into Mattermost, or select the **Attachment** icon in the text input box."})),s.createElement(f,{excludedLinks:[p.Messaging]}))}function M(){return s.createElement("div",null,s.createElement("h1",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.composing.title",defaultMessage:"Sending Messages"})),s.createElement("hr",null),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.composing.types.title",defaultMessage:"Message Types"})),s.createElement("p",null,s.createElement(m.Z,{id:"help.composing.types.description",defaultMessage:"Reply to posts to keep conversations organized in threads."})),s.createElement("h4",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.composing.posts.title",defaultMessage:"Posts"})),s.createElement("p",null,s.createElement(m.Z,{id:"help.composing.posts.description",defaultMessage:"Posts are considered parent messages when they start a thread of replies. Posts are composed and sent from the text input box at the bottom of the center pane."})),s.createElement("h4",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.composing.replies.title",defaultMessage:"Replies"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.composing.replies.description1",defaultMessage:"Select the **Reply** icon next to any message to open the right-hand sidebar to respond to a thread."})),s.createElement("p",null,s.createElement(r.Z,{id:"help.composing.replies.description2",defaultMessage:"When composing a reply, select the **Expand Sidebar/Collapse Sidebar** icon in the top right corner of the right-hand sidebar to make conversations easier to read."})),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.composing.posting.title",defaultMessage:"Post a Message"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.composing.posting.description",defaultMessage:"Write a message by typing into the text input box, then press **ENTER** to send it. Press **SHIFT+ENTER** to create a new line without sending a message. To send messages by pressing **CTRL+ENTER**, go to **Settings > Advanced > Send Messages on CTRL/CMD+ENTER**."})),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.composing.editing.title",defaultMessage:"Edit a Message"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.composing.editing.description",defaultMessage:"Edit a message by selecting the **More Actions [...]** icon next to any message text that you've composed, then select **Edit**. After making modifications to the message text, press **ENTER** to save the modifications. Message edits don't trigger new @mention notifications, desktop notifications, or notification sounds."})),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.composing.deleting.title",defaultMessage:"Delete a Message"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.composing.deleting.description",defaultMessage:"Delete a message by selecting the **More Actions [...]** icon next to any message text that you've composed, then select **Delete**. System and Team Admins can delete any message on their system or team."})),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.composing.linking.title",defaultMessage:"Link to a Message"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.composing.linking.description",defaultMessage:"Get a permanent link to a message by selecting the **More Actions [...]** icon next to any message, then select **Copy Link**. Users must be a member of the channel to view the message link."})),s.createElement(f,{excludedLinks:[p.Composing]}))}function y(){return s.createElement("div",null,s.createElement("h1",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.mentioning.title",defaultMessage:"Mentioning Teammates"})),s.createElement("hr",null),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.mentioning.mentions.title",defaultMessage:"@Mentions"})),s.createElement("p",null,s.createElement(m.Z,{id:"help.mentioning.mentions.description",defaultMessage:"Use @mentions to get the attention of specific team members."})),s.createElement("h4",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.mentioning.username.title",defaultMessage:"@Username Mentions"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.mentioning.username.description1",defaultMessage:"You can mention a teammate by using the `@` symbol plus their username to send them a mention notification."})),s.createElement("p",null,s.createElement(r.Z,{id:"help.mentioning.username.description2",defaultMessage:"Type `@` to bring up a list of team members who can be mentioned. To filter the list, type the first few letters of any username, first name, last name, or nickname. Use the **Up** and **Down** keyboard arrow keys to scroll through entries in the list, then press **ENTER** to select the user to mention. Once selected, the username is automatically replaced with the full name or nickname. The following example sends a special mention notification to **alice** that alerts her of the channel and message where she has been mentioned. If **alice** is away from Mattermost and has [email notifications](!https://docs.mattermost.com/messaging/configuring-notifications.html#email-notifications) turned on, then she will receive an email alert for the mention along with the message text."})),s.createElement("div",{className:"post-code post-code--wrap"},s.createElement("code",{className:"hljs"},s.createElement(m.Z,{id:"help.mentioning.usernameExample",defaultMessage:"@alice how did your interview go with the new candidate?"}))),s.createElement("p",null),s.createElement("p",null,s.createElement(r.Z,{id:"help.mentioning.usernameCont",defaultMessage:"If the user you mentioned is not a member of the channel, a System Message is posted to let you know. The System Message is a temporary message only seen by the person who triggered it. To add the mentioned user to the channel, go to the dropdown menu beside the channel name and select **Add Members**."})),s.createElement("h4",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.mentioning.channel.title",defaultMessage:"@Channel Mentions"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.mentioning.channel.description",defaultMessage:"You can mention an entire channel by typing `@channel`. All members of the channel receive a mention notification that behaves the same way as if the members had been mentioned individually. The following example sends a special mention notification to everyone in the current channel to congratulate them on a job well done."})),s.createElement("div",{className:"post-code post-code--wrap"},s.createElement("code",{className:"hljs"},s.createElement(m.Z,{id:"help.mentioning.channelExample",defaultMessage:"@channel great work on interviews this week. I think we found some excellent potential candidates!"}))),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.mentioning.triggers.title",defaultMessage:"Words That Trigger Mentions"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.mentioning.triggers.description",defaultMessage:'In addition to being notified with @username and @channel mentions, you can configure Mattermost to trigger mention notifications based on specific words by going to **Settings > Notifications > Words That Trigger Mentions**. By default, you receive mention notifications on your first name. Add more words by typing them into the input box separated by commas. This is useful if you want to be notified of all posts on certain topics, for example, "interviewing" or "marketing".'})),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.mentioning.recent.title",defaultMessage:"Recent Mentions"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.mentioning.recent.description",defaultMessage:"Select `@` next to the Search box to query for your most recent @mentions and words that trigger mentions. Select **Jump** next to a search result in the right-hand sidebar to jump the center pane to the channel and location of the message with the mention."})),s.createElement(f,{excludedLinks:[p.Mentioning]}))}a(39714);var b,k,w,Z=a(64852);function x(){const e=e=>s.createElement("div",{className:"post-code post-code--wrap"},s.createElement("code",{className:"hljs"},e)),t=t=>s.createElement("div",null,e(t),s.createElement("p",null,s.createElement(m.Z,{id:"help.formatting.renders",defaultMessage:"Renders as:"}))," ",s.createElement(Z.Z,{message:t?t.toString():""}));return s.createElement("div",null,s.createElement("h1",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.formatting.title",defaultMessage:"Formatting Messages Using Markdown"})),s.createElement("hr",null),s.createElement("p",null,s.createElement(m.Z,{id:"help.formatting.intro",defaultMessage:"Markdown makes it easy to format messages. Type a message as you normally would, then use the following syntax options to format your message a specific way."})),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.formatting.style.title",defaultMessage:"Text Style"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.style.description",defaultMessage:"You can use either `_` or `*` around a word to make it italic. Use two to make a word bold."})),s.createElement("ul",null,s.createElement("li",null,s.createElement(r.Z,{id:"help.formatting.style.listItem1",defaultMessage:"`_italics_` renders as _italics_"})),s.createElement("li",null,s.createElement(r.Z,{id:"help.formatting.style.listItem2",defaultMessage:"`**bold**` renders as **bold**"})),s.createElement("li",null,s.createElement(r.Z,{id:"help.formatting.style.listItem3",defaultMessage:"`**_bold-italic_**` renders as **_bold-italics_**"})),s.createElement("li",null,s.createElement(r.Z,{id:"help.formatting.style.listItem4",defaultMessage:"`~~strikethrough~~` renders as ~~strikethrough~~"}))),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.formatting.code.title",defaultMessage:"Code Block"})),s.createElement("p",null,s.createElement(m.Z,{id:"help.formatting.code.description",defaultMessage:"Create a code block by indenting each line by four spaces, or by placing ``` on the line above and below your code."})),s.createElement("p",null,s.createElement(m.Z,{id:"help.formatting.example",defaultMessage:"Example:"})),s.createElement(m.Z,{id:"help.formatting.codeBlock",defaultMessage:"Code block"},(e=>t("```\n"+e+"\n```"))),s.createElement("h3",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.formatting.syntax.title",defaultMessage:"Syntax Highlighting"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.syntax.description",defaultMessage:"To add syntax highlighting, type the language to be highlighted after the ``` at the beginning of the code block. Mattermost also offers four different code themes (GitHub, Solarized Dark, Solarized Light, Monokai) that can be changed in **Settings > Display > Theme > Custom Theme > Center Channel Styles > Code Theme**."})),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.supportedSyntax",defaultMessage:"Supported languages are: `applescript`, `as`, `atom`, `bas`, `bash`, `boot`, `_coffee`, `c++`, `c`, `cake`, `cc`, `cl2`, `clj`, `cljc`, `cljs`, `cljs.hl`, `cljscm`, `cljx`, `cjsx`, `cson`, `coffee`, `cpp`, `cs`, `csharp`, `css`, `d`, `dart`, `dfm`, `di`, `delphi`, `diff`, `django`, `docker`, `dockerfile`, `dpr`, `erl`, `fortran`, `freepascal`, `fs`, `fsharp`, `gcode`, `gemspec`, `go`, `groovy`, `gyp`, `h++`, `h`, `handlebars`, `hbs`, `hic`, `hpp`, `html`, `html.handlebars`, `html.hbs`, `hs`, `hx`, `iced`, `irb`, `java`, `jinja`, `jl`, `js`, `json`, `jsp`, `jsx`, `kt`, `ktm`, `kts`, `latexcode`, `lazarus`, `less`, `lfm`, `lisp`, `lpr`, `lua`, `m`, `mak`, `matlab`, `md`, `mk`, `mkd`, `mkdown`, `ml`, `mm`, `nc`, `objc`, `obj-c`, `osascript`, `pas`, `pascal`, `perl`, `pgsql`, `php`, `php3`, `php4`, `php5`, `php6`, `pl`, `plist`, `podspec`, `postgres`, `postgresql`, `ps`, `ps1`, `pp`, `py`, `r`, `rb`, `rs`, `rss`, `ruby`, `scala`, `scm`, `scpt`, `scss`, `sh`, `sld`, `st`, `styl`, `sql`, `swift`, `tex`, `texcode`, `thor`, `ts`, `tsx`, `v`, `vb`, `vbnet`, `vbs`, `veo`, `xhtml`, `xml`, `xsl`, `yaml`, `zsh`."})),s.createElement("p",null,s.createElement(m.Z,{id:"help.formatting.example",defaultMessage:"Example:"})),s.createElement(m.Z,{id:"help.formatting.syntaxEx",defaultMessage:'```go\npackage main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello, 世界")\n}\n```',values:{dummy:""}},(t=>e(t))),s.createElement("p",null,s.createElement(m.Z,{id:"help.formatting.renders",defaultMessage:"Renders as:"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.githubTheme",defaultMessage:"**GitHub Theme**"})),s.createElement("p",null,s.createElement("img",{src:"https://docs.mattermost.com/_images/syntax-highlighting-github.png",alt:"go syntax-highlighting",className:"markdown-inline-img"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.solirizedDarkTheme",defaultMessage:"**Solarized Dark Theme**"})),s.createElement("p",null,s.createElement("img",{src:"https://docs.mattermost.com/_images/syntax-highlighting-sol-dark.png",alt:"go syntax-highlighting",className:"markdown-inline-img"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.solirizedLightTheme",defaultMessage:"**Solarized Light Theme**"})),s.createElement("p",null,s.createElement("img",{src:"https://docs.mattermost.com/_images/syntax-highlighting-sol-light.png",alt:"go syntax-highlighting",className:"markdown-inline-img"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.monokaiTheme",defaultMessage:"**Monokai Theme**"})),s.createElement("p",null,s.createElement("img",{src:"https://docs.mattermost.com/_images/syntax-highlighting-monokai.png",alt:"go syntax-highlighting",className:"markdown-inline-img"})),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.formatting.inline.title",defaultMessage:"In-line Code"})),s.createElement("p",null,s.createElement(m.Z,{id:"help.formatting.inline.description",defaultMessage:"Create in-line monospaced font by surrounding it with backticks."})),e("`monospace`"),s.createElement("p",null,s.createElement(m.Z,{id:"help.formatting.renders",defaultMessage:"Renders as:"},(e=>s.createElement(Z.Z,{message:e+" `monospace`"})))),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.formatting.links.title",defaultMessage:"Links"})),s.createElement("p",null,s.createElement(m.Z,{id:"help.formatting.links.description",defaultMessage:"Create labeled links by putting the desired text in square brackets and the associated link in normal brackets."})),s.createElement(m.Z,{id:"help.formatting.linkEx",defaultMessage:"[Check out Mattermost!](https://mattermost.com/)"},(e=>s.createElement("div",null,s.createElement(Z.Z,{message:"`"+e+"`"}),s.createElement(m.Z,{id:"help.formatting.renders",defaultMessage:"Renders as:"},(t=>s.createElement(Z.Z,{message:t+" "+e})))))),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.formatting.images.title",defaultMessage:"In-line Images"})),s.createElement("p",null,s.createElement(m.Z,{id:"help.formatting.images.description",defaultMessage:"Create in-line images using an `!` followed by the alt text in square brackets and the link in normal brackets. Add hover text by placing it in quotes after the link. See the <link>product documentation</link> for details on working with in-line images.",values:{link:e=>s.createElement("a",{href:"https://docs.mattermost.com/messaging/formatting-text.html#in-line-images",target:"_blank",rel:"noreferrer"},e)}})),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.formatting.emojis.title",defaultMessage:"Emojis"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.emojis.description",defaultMessage:"Open the emoji autocomplete by typing `:`. A full list of emojis can be found [online](!http://www.emoji-cheat-sheet.com/). It is also possible to create your own [Custom Emoji](!https://docs.mattermost.com/messaging/using-emoji.html#creating-custom-emojis) if the emoji you want to use doesn't exist."})),t(":smile: :+1: :sheep:"),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.formatting.lines.title",defaultMessage:"Lines"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.lines.description",defaultMessage:"Create a line by using three `*`, `_`, or `-`."})),s.createElement("p",null,s.createElement(m.Z,{id:"help.formatting.renders",defaultMessage:"Renders as:"},(e=>s.createElement(Z.Z,{message:"`***` "+e})))),s.createElement(Z.Z,{message:"***"}),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.formatting.quotes.title",defaultMessage:"Block quotes"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.quotes.description",defaultMessage:"Create block quotes using `>`."})),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.quotesExample",defaultMessage:"`> block quotes` renders as:"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.quotesRender",defaultMessage:"> block quotes"})),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.formatting.lists.title",defaultMessage:"Lists"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.lists.description",defaultMessage:"Create a list by using `*` or `-` as bullets. Indent a bullet point by adding two spaces in front of it."})),s.createElement(m.Z,{id:"help.formatting.listExample",defaultMessage:"* list item one\n* list item two\n    * item two sub-point"},(e=>t(e))),s.createElement("p",null,s.createElement(m.Z,{id:"help.formatting.ordered",defaultMessage:"Make it an ordered list by using numbers instead:"})),s.createElement(m.Z,{id:"help.formatting.orderedExample",defaultMessage:"1. Item one\n2. Item two"},(e=>t(e))),s.createElement("p",null,s.createElement(m.Z,{id:"help.formatting.checklist",defaultMessage:"Make a task list by including square brackets:"})),s.createElement(m.Z,{id:"help.formatting.checklistExample",defaultMessage:"- [ ] Item one\n- [ ] Item two\n- [x] Completed item"},(e=>t(e))),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.formatting.tables.title",defaultMessage:"Tables"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.tables.description",defaultMessage:"Create a table by placing a dashed line under the header row and separating the columns with a pipe `|`. (The columns don't need to line up exactly for it to work). Choose how to align table columns by including colons `:` within the header row."})),s.createElement(m.Z,{id:"help.formatting.tableExample",defaultMessage:"| Left-Aligned  | Center Aligned  | Right Aligned |\n| :------------ |:---------------:| -----:|\n| Left column 1 | this text       |  $100 |\n| Left column 2 | is              |   $10 |\n| Left column 3 | centered        |    $1 |"},(e=>t(e))),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.formatting.headings.title",defaultMessage:"Headings"})),s.createElement("p",null,s.createElement(m.Z,{id:"help.formatting.headings.description",defaultMessage:"Make a heading by typing # and a space before your title. For smaller headings, use more #'s."})),s.createElement(m.Z,{id:"help.formatting.headingsExample",defaultMessage:"## Large Heading\n### Smaller Heading\n#### Even Smaller Heading"},(e=>t(e))),s.createElement("p",null,s.createElement(r.Z,{id:"help.formatting.headings2",defaultMessage:"Alternatively, you can underline the text using `===` or `---` to create headings."})),s.createElement(m.Z,{id:"help.formatting.headings2Example",defaultMessage:"Large Heading\n-------------"},(e=>t(e))),s.createElement(f,{excludedLinks:[p.Formatting]}))}function _(){return s.createElement("div",null,s.createElement("h1",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.attaching.title",defaultMessage:"Attaching Files"})),s.createElement("hr",null),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.attaching.methods.title",defaultMessage:"Attachment Methods"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.attaching.methods.description",defaultMessage:"There are three ways to attach a file. You can drag and drop files, use the **Attachment** icon, or copy and paste files."})),s.createElement("h4",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.attaching.dragdrop.title",defaultMessage:"Drag and Drop Files"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.attaching.dragdrop.description",defaultMessage:"Upload a file, or a selection of files, by dragging the files from your computer into the right-hand sidebar or center pane. Dragging and dropping attaches the files to the message input box, then you can optionally type a message and press **ENTER** to post the message."})),s.createElement("h4",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.attaching.icon.title",defaultMessage:"Use the Attachment Icon"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.attaching.icon.description",defaultMessage:"Alternatively, upload files by selecting the **Attachment** icon inside the message input box. In the system file viewer, navigate to the desired files, then select **Open** to upload them to the message input box. Optionally type a message, then press **ENTER** to post the message."})),s.createElement("h4",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.attaching.pasting.title",defaultMessage:"Copy and Paste Files"})),s.createElement("p",null,s.createElement(m.Z,{id:"help.attaching.pasting.description",defaultMessage:"On Chrome and Edge browsers, you can upload files by pasting them from the system clipboard. This is not yet supported on other browsers."})),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.attaching.previewer.title",defaultMessage:"View Previewer"})),s.createElement("p",null,s.createElement(m.Z,{id:"help.attaching.previewer.description",defaultMessage:"Mattermost has a built-in file previewer used to view media, download files, and to share public links. Select the thumbnail of an attached file to open it in the file previewer."})),s.createElement("h4",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.attaching.publicLinks.title",defaultMessage:"Share Public Links"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.attaching.publicLinks.description",defaultMessage:"Public links enable you to share file attachments with people outside your Mattermost team. Open the file previewer by selecting the thumbnail of an attachment, then select **Get a public link**. Copy the link provided. When the link is shared and opened by another user, the file automatically downloads."})),s.createElement("p",null,s.createElement(r.Z,{id:"help.attaching.publicLinks2",defaultMessage:"If the **Get a public link** option is not visible in the file previewer, and you want this feature enabled, ask your System Admin to enable this feature in the System Console under **Site Configuration > Public Links**."})),s.createElement("h4",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.attaching.downloading.title",defaultMessage:"Download Files"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.attaching.downloading.description",defaultMessage:"Download an attached file by selecting the Download icon next to the file thumbnail, or by opening the file previewer and selecting **Download**."})),s.createElement("h4",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.attaching.supported.title",defaultMessage:"Supported Media Types"})),s.createElement("p",null,s.createElement(m.Z,{id:"help.attaching.supported.description",defaultMessage:"If you are trying to preview a media type that is not supported, the file previewer opens a standard media attachment icon. Supported media formats depend heavily on your browser and operating system. The following formats are supported by Mattermost on most browsers:"})),s.createElement("ul",null,s.createElement("li",null,s.createElement(m.Z,{id:"help.attaching.supportedListItem1",defaultMessage:"Images: BMP, GIF, JPG, JPEG, PNG, SVG"})),s.createElement("li",null,s.createElement(m.Z,{id:"help.attaching.supportedListItem2",defaultMessage:"Video: MP4"})),s.createElement("li",null,s.createElement(m.Z,{id:"help.attaching.supportedListItem3",defaultMessage:"Audio: MP3, M4A"})),s.createElement("li",null,s.createElement(m.Z,{id:"help.attaching.supportedListItem4",defaultMessage:"Documents: PDF, TXT"}))),s.createElement("p",null,s.createElement(m.Z,{id:"help.attaching.notSupported",defaultMessage:"Other document formats (such as Word, Excel, or PPT) are not yet supported."})),s.createElement("h2",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.attaching.limitations.title",defaultMessage:"File Size Limitations"})),s.createElement("p",null,s.createElement(m.Z,{id:"help.attaching.limitations.description",defaultMessage:"Mattermost supports up to ten files attached per post. The default maximum file size is 100 MB (megabytes), but this can be changed by your System Admin. Image files can be a maximum size of 7680 pixels x 4320 pixels, with a maximum image resolution of 33 MP (mega pixels) or 8K resolution, and a maximum raw image file size of approximately 253 MB."})),s.createElement(f,{excludedLinks:[p.Attaching]}))}function v(){return s.createElement("div",null,s.createElement("h1",{className:"markdown__heading"},s.createElement(m.Z,{id:"help.commands.title",defaultMessage:"Executing Commands"})),s.createElement("hr",null),s.createElement("p",null,s.createElement(r.Z,{id:"help.commands.intro1",defaultMessage:"You can execute commands, called slash commands, by typing into the text input box to perform operations in Mattermost. To run a slash command, type `/` followed by a command and some arguments to perform actions."})),s.createElement("h2",{className:"markdown__heading"},s.createElement(r.Z,{id:"help.commands.builtin.title",defaultMessage:"Built-In Commands"})),s.createElement("p",null,s.createElement(m.Z,{id:"help.commands.intro2",defaultMessage:"Built-in slash commands come with all Mattermost installations. See the <link>product documentation</link> for a list of available built-in slash commands.",values:{link:e=>s.createElement("a",{href:"https://docs.mattermost.com/messaging/executing-slash-commands.html",target:"_blank",rel:"noreferrer"},e)}})),s.createElement("p",null,s.createElement(r.Z,{id:"help.commands.builtin2",defaultMessage:"Begin by typing `/`. A list of slash command options displays above the text input box. The autocomplete suggestions provide you with a format example in black text and a short description of the slash command in grey text."})),s.createElement("p",null,s.createElement("img",{src:"https://docs.mattermost.com/_images/slash-commands.gif",alt:"Slash command autocomplete",className:"markdown-inline-img"})),s.createElement("h2",{className:"markdown__heading"},s.createElement(r.Z,{id:"help.commands.custom.title",defaultMessage:"Custom Commands"})),s.createElement("p",null,s.createElement(r.Z,{id:"help.commands.custom.description",defaultMessage:"Custom slash commands can integrate with external applications. For example, a team might configure a custom slash command to check internal health records with `/patient joe smith` or check the weekly weather forecast in a city with `/weather toronto week`. Check with your System Admin, or open the autocomplete list by typing `/`, to determine whether custom slash commands are available for your organization."})),s.createElement("p",null,s.createElement(m.Z,{id:"help.commands.custom2",defaultMessage:"Custom slash commands are disabled by default and can be enabled by the System Admin in the System Console by going to <strong>Integrations > Integration Management</strong>. Learn about configuring custom slash commands in the <link>developer documentation</link>.",values:{link:e=>s.createElement("a",{href:"https://developers.mattermost.com/integrate/slash-commands/",target:"_blank",rel:"noreferrer"},e),strong:e=>s.createElement("strong",null,e)}})),s.createElement(f,{excludedLinks:[p.Commands]}))}class N extends s.PureComponent{componentDidUpdate(){const e=i.findDOMNode(this);e&&e instanceof HTMLDivElement&&e.scrollIntoView()}render(){return s.createElement("div",{className:"help-page"},s.createElement("div",{className:"container col-sm-10 col-sm-offset-1"},s.createElement(o.rs,null,s.createElement(o.AW,{path:"".concat(this.props.match.url,"/messaging"),component:E}),s.createElement(o.AW,{path:"".concat(this.props.match.url,"/composing"),component:M}),s.createElement(o.AW,{path:"".concat(this.props.match.url,"/mentioning"),component:y}),s.createElement(o.AW,{path:"".concat(this.props.match.url,"/formatting"),component:x}),s.createElement(o.AW,{path:"".concat(this.props.match.url,"/attaching"),component:_}),s.createElement(o.AW,{path:"".concat(this.props.match.url,"/commands"),component:v}))))}}b=N,k="propTypes",w={match:l().shape({url:l().string.isRequired}).isRequired},k in b?Object.defineProperty(b,k,{value:w,enumerable:!0,configurable:!0,writable:!0}):b[k]=w},21671:(e,t,a)=>{a.d(t,{a:()=>l}),a(33948),a(41637),a(74916),a(64765);var n=a(5977);function l(){return new URLSearchParams((0,n.TH)().search)}}}]);
//# sourceMappingURL=503.57f754334f87cd001326.js.map