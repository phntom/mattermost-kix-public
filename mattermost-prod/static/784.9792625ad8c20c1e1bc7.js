"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[784],{

/***/ 48784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HelpController)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(45288);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(32023);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./i18n/i18n.jsx + 20 modules
var i18n = __webpack_require__(89363);
// EXTERNAL MODULE: ./utils/http_utils.ts
var http_utils = __webpack_require__(21671);
;// CONCATENATED MODULE: ./components/help/types.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
let HelpLink;

(function (HelpLink) {
  HelpLink["Messaging"] = "Messaging";
  HelpLink["Composing"] = "Composing";
  HelpLink["Mentioning"] = "Mentioning";
  HelpLink["Formatting"] = "Formatting";
  HelpLink["Attaching"] = "Attaching";
  HelpLink["Commands"] = "Commands";
})(HelpLink || (HelpLink = {}));
;// CONCATENATED MODULE: ./components/help/components/help_links.tsx


// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







const HelpLinks = _ref => {
  let {
    excludedLinks = []
  } = _ref;
  // If the current page has locale query param in it, we want to preserve it when navigating to any of the help pages
  let localeQueryParam = '';
  const currentLocaleFromQueryParam = (0,http_utils/* useQuery */.a)().get('locale');

  if (currentLocaleFromQueryParam && i18n/* isLanguageAvailable */.cY(currentLocaleFromQueryParam)) {
    localeQueryParam = "?locale=".concat(currentLocaleFromQueryParam);
  }

  const {
    formatMessage
  } = (0,useIntl/* default */.Z)();
  const HELP_LINK_CONTENT = {
    [HelpLink.Messaging]: {
      path: '/help/messaging',
      message: formatMessage({
        id: 'help.link.messaging',
        defaultMessage: 'Basic Messaging'
      })
    },
    [HelpLink.Composing]: {
      path: '/help/composing',
      message: formatMessage({
        id: 'help.link.composing',
        defaultMessage: 'Composing Messages and Replies'
      })
    },
    [HelpLink.Mentioning]: {
      path: '/help/mentioning',
      message: formatMessage({
        id: 'help.link.mentioning',
        defaultMessage: 'Mentioning Teammates'
      })
    },
    [HelpLink.Formatting]: {
      path: '/help/formatting',
      message: formatMessage({
        id: 'help.link.formatting',
        defaultMessage: 'Formatting Messages Using Markdown'
      })
    },
    [HelpLink.Attaching]: {
      path: '/help/attaching',
      message: formatMessage({
        id: 'help.link.attaching',
        defaultMessage: 'Attaching Files'
      })
    },
    [HelpLink.Commands]: {
      path: '/help/commands',
      message: formatMessage({
        id: 'help.link.commands',
        defaultMessage: 'Executing Commands'
      })
    }
  };
  const linksToBeRendered = Object.values(HelpLink).filter(link => !excludedLinks.includes(link));
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("p", {
    className: "links"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.learnMore",
    defaultMessage: "Learn more about:"
  })), /*#__PURE__*/react.createElement("ul", null, linksToBeRendered.map(linkType => {
    const {
      path,
      message
    } = HELP_LINK_CONTENT[linkType];
    return /*#__PURE__*/react.createElement("li", {
      key: linkType
    }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
      to: "".concat(path).concat(localeQueryParam)
    }, message));
  })));
};

HelpLinks.propTypes = {
  excludedLinks: (prop_types_default()).array
};
/* harmony default export */ const help_links = (HelpLinks);
;// CONCATENATED MODULE: ./components/help/components/messaging.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function Messaging() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.messaging.title",
    defaultMessage: "Messaging Basics"
  })), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.messaging.write",
    defaultMessage: "**Write Messages:** Use the text input box at the bottom of the Mattermost interface to write a message. Press **ENTER** to send the message. Use **SHIFT+ENTER** to create a new line without sending a message."
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.messaging.reply",
    defaultMessage: "**Reply to Messages:** Select the **Reply Arrow** icon next to the text input box."
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("img", {
    src: "https://docs.mattermost.com/_images/reply-icon.png",
    alt: "Reply Arrow icon",
    className: "markdown-inline-img"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.messaging.notify",
    defaultMessage: "**Notify Teammates:** Type `@username` to get the attention of specific team members."
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.messaging.format",
    defaultMessage: "**Format Your Messages:** Use Markdown to include text styling, headings, links, emoticons, code blocks, block quotes, tables, lists, and in-line images in your messages. See the following table for common formatting examples."
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("img", {
    src: "https://docs.mattermost.com/_images/messagesTable1.png",
    alt: "Use Markdown in your messages",
    className: "markdown-inline-img"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.messaging.emoji",
    defaultMessage: '**Add Emoji:** Type ":" to open an emoji autocomplete. If the existing emojis don\'t say what you want to express, you can also create your own <link>Custom Emoji</link>.',
    values: {
      link: msg => /*#__PURE__*/react.createElement("a", {
        href: "https://docs.mattermost.com/messaging/using-emoji.html#creating-custom-emojis",
        target: "_blank",
        rel: "noreferrer"
      }, msg)
    }
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.messaging.attach",
    defaultMessage: "**Attach Files:** Drag and drop files into Mattermost, or select the **Attachment** icon in the text input box."
  })), /*#__PURE__*/react.createElement(help_links, {
    excludedLinks: [HelpLink.Messaging]
  }));
}
;// CONCATENATED MODULE: ./components/help/components/composing.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function HelpComposing() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.composing.title",
    defaultMessage: "Sending Messages"
  })), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.composing.types.title",
    defaultMessage: "Message Types"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.composing.types.description",
    defaultMessage: "Reply to posts to keep conversations organized in threads."
  })), /*#__PURE__*/react.createElement("h4", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.composing.posts.title",
    defaultMessage: "Posts"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.composing.posts.description",
    defaultMessage: "Posts are considered parent messages when they start a thread of replies. Posts are composed and sent from the text input box at the bottom of the center pane."
  })), /*#__PURE__*/react.createElement("h4", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.composing.replies.title",
    defaultMessage: "Replies"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.composing.replies.description1",
    defaultMessage: "Select the **Reply** icon next to any message to open the right-hand sidebar to respond to a thread."
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.composing.replies.description2",
    defaultMessage: "When composing a reply, select the **Expand Sidebar/Collapse Sidebar** icon in the top right corner of the right-hand sidebar to make conversations easier to read."
  })), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.composing.posting.title",
    defaultMessage: "Post a Message"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.composing.posting.description",
    defaultMessage: "Write a message by typing into the text input box, then press **ENTER** to send it. Press **SHIFT+ENTER** to create a new line without sending a message. To send messages by pressing **CTRL+ENTER**, go to **Settings > Advanced > Send Messages on CTRL/CMD+ENTER**."
  })), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.composing.editing.title",
    defaultMessage: "Edit a Message"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.composing.editing.description",
    defaultMessage: 'Edit a message by selecting the **More Actions [...]** icon next to any message text that you\'ve composed, then select **Edit**. After making modifications to the message text, press **ENTER** to save the modifications. Message edits don\'t trigger new @mention notifications, desktop notifications, or notification sounds.'
  })), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.composing.deleting.title",
    defaultMessage: "Delete a Message"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.composing.deleting.description",
    defaultMessage: 'Delete a message by selecting the **More Actions [...]** icon next to any message text that you\'ve composed, then select **Delete**. System and Team Admins can delete any message on their system or team.'
  })), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.composing.linking.title",
    defaultMessage: "Link to a Message"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.composing.linking.description",
    defaultMessage: "Get a permanent link to a message by selecting the **More Actions [...]** icon next to any message, then select **Copy Link**. Users must be a member of the channel to view the message link."
  })), /*#__PURE__*/react.createElement(help_links, {
    excludedLinks: [HelpLink.Composing]
  }));
}
;// CONCATENATED MODULE: ./components/help/components/mentioning.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function Mentioning() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.mentioning.title",
    defaultMessage: "Mentioning Teammates"
  })), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.mentioning.mentions.title",
    defaultMessage: "@Mentions"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.mentioning.mentions.description",
    defaultMessage: "Use @mentions to get the attention of specific team members."
  })), /*#__PURE__*/react.createElement("h4", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.mentioning.username.title",
    defaultMessage: "@Username Mentions"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.mentioning.username.description1",
    defaultMessage: "You can mention a teammate by using the `@` symbol plus their username to send them a mention notification."
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.mentioning.username.description2",
    defaultMessage: "Type `@` to bring up a list of team members who can be mentioned. To filter the list, type the first few letters of any username, first name, last name, or nickname. Use the **Up** and **Down** keyboard arrow keys to scroll through entries in the list, then press **ENTER** to select the user to mention. Once selected, the username is automatically replaced with the full name or nickname. The following example sends a special mention notification to **alice** that alerts her of the channel and message where she has been mentioned. If **alice** is away from Mattermost and has [email notifications](!https://docs.mattermost.com/messaging/configuring-notifications.html#email-notifications) turned on, then she will receive an email alert for the mention along with the message text."
  })), /*#__PURE__*/react.createElement("div", {
    className: "post-code post-code--wrap"
  }, /*#__PURE__*/react.createElement("code", {
    className: "hljs"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.mentioning.usernameExample",
    defaultMessage: "@alice how did your interview go with the new candidate?"
  }))), /*#__PURE__*/react.createElement("p", null), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.mentioning.usernameCont",
    defaultMessage: "If the user you mentioned is not a member of the channel, a System Message is posted to let you know. The System Message is a temporary message only seen by the person who triggered it. To add the mentioned user to the channel, go to the dropdown menu beside the channel name and select **Add Members**."
  })), /*#__PURE__*/react.createElement("h4", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.mentioning.channel.title",
    defaultMessage: "@Channel Mentions"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.mentioning.channel.description",
    defaultMessage: "You can mention an entire channel by typing `@channel`. All members of the channel receive a mention notification that behaves the same way as if the members had been mentioned individually. The following example sends a special mention notification to everyone in the current channel to congratulate them on a job well done."
  })), /*#__PURE__*/react.createElement("div", {
    className: "post-code post-code--wrap"
  }, /*#__PURE__*/react.createElement("code", {
    className: "hljs"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.mentioning.channelExample",
    defaultMessage: "@channel great work on interviews this week. I think we found some excellent potential candidates!"
  }))), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.mentioning.triggers.title",
    defaultMessage: "Words That Trigger Mentions"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.mentioning.triggers.description",
    defaultMessage: "In addition to being notified with @username and @channel mentions, you can configure Mattermost to trigger mention notifications based on specific words by going to **Settings > Notifications > Words That Trigger Mentions**. By default, you receive mention notifications on your first name. Add more words by typing them into the input box separated by commas. This is useful if you want to be notified of all posts on certain topics, for example, \"interviewing\" or \"marketing\"."
  })), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.mentioning.recent.title",
    defaultMessage: "Recent Mentions"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.mentioning.recent.description",
    defaultMessage: "Select `@` next to the Search box to query for your most recent @mentions and words that trigger mentions. Select **Jump** next to a search result in the right-hand sidebar to jump the center pane to the channel and location of the message with the mention."
  })), /*#__PURE__*/react.createElement(help_links, {
    excludedLinks: [HelpLink.Mentioning]
  }));
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(39714);
// EXTERNAL MODULE: ./components/markdown/index.ts + 1 modules
var markdown = __webpack_require__(64852);
;// CONCATENATED MODULE: ./components/help/components/formatting.tsx

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function HelpFormatting() {
  const renderRawExample = example => {
    return /*#__PURE__*/react.createElement("div", {
      className: "post-code post-code--wrap"
    }, /*#__PURE__*/react.createElement("code", {
      className: "hljs"
    }, example));
  };

  const renderRawExampleWithResult = example => {
    return /*#__PURE__*/react.createElement("div", null, renderRawExample(example), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "help.formatting.renders",
      defaultMessage: "Renders as:"
    })), ' ', /*#__PURE__*/react.createElement(markdown/* default */.Z, {
      message: example ? example.toString() : ''
    }));
  };

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.title",
    defaultMessage: "Formatting Messages Using Markdown"
  })), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.intro",
    defaultMessage: "Markdown makes it easy to format messages. Type a message as you normally would, then use the following syntax options to format your message a specific way."
  })), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.style.title",
    defaultMessage: "Text Style"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.style.description",
    defaultMessage: "You can use either `_` or `*` around a word to make it italic. Use two to make a word bold."
  })), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.style.listItem1",
    defaultMessage: "`_italics_` renders as _italics_"
  })), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.style.listItem2",
    defaultMessage: "`**bold**` renders as **bold**"
  })), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.style.listItem3",
    defaultMessage: "`**_bold-italic_**` renders as **_bold-italics_**"
  })), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.style.listItem4",
    defaultMessage: "`~~strikethrough~~` renders as ~~strikethrough~~"
  }))), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.code.title",
    defaultMessage: "Code Block"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.code.description",
    defaultMessage: "Create a code block by indenting each line by four spaces, or by placing ``` on the line above and below your code."
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.example",
    defaultMessage: "Example:"
  })), /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.codeBlock",
    defaultMessage: "Code block"
  }, example => renderRawExampleWithResult('```\n' + example + '\n```')), /*#__PURE__*/react.createElement("h3", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.syntax.title",
    defaultMessage: "Syntax Highlighting"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.syntax.description",
    defaultMessage: "To add syntax highlighting, type the language to be highlighted after the ``` at the beginning of the code block. Mattermost also offers four different code themes (GitHub, Solarized Dark, Solarized Light, Monokai) that can be changed in **Settings > Display > Theme > Custom Theme > Center Channel Styles > Code Theme**."
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.supportedSyntax",
    defaultMessage: 'Supported languages are: `applescript`, `as`, `atom`, `bas`, `bash`, `boot`, `_coffee`, `c++`, `c`, `cake`, `cc`, `cl2`, `clj`, `cljc`, `cljs`, `cljs.hl`, `cljscm`, `cljx`, `cjsx`, `cson`, `coffee`, `cpp`, `cs`, `csharp`, `css`, `d`, `dart`, `dfm`, `di`, `delphi`, `diff`, `django`, `docker`, `dockerfile`, `dpr`, `erl`, `fortran`, `freepascal`, `fs`, `fsharp`, `gcode`, `gemspec`, `go`, `groovy`, `gyp`, `h++`, `h`, `handlebars`, `hbs`, `hic`, `hpp`, `html`, `html.handlebars`, `html.hbs`, `hs`, `hx`, `iced`, `irb`, `java`, `jinja`, `jl`, `js`, `json`, `jsp`, `jsx`, `kt`, `ktm`, `kts`, `latexcode`, `lazarus`, `less`, `lfm`, `lisp`, `lpr`, `lua`, `m`, `mak`, `matlab`, `md`, `mk`, `mkd`, `mkdown`, `ml`, `mm`, `nc`, `objc`, `obj-c`, `osascript`, `pas`, `pascal`, `perl`, `pgsql`, `php`, `php3`, `php4`, `php5`, `php6`, `pl`, `plist`, `podspec`, `postgres`, `postgresql`, `ps`, `ps1`, `pp`, `py`, `r`, `rb`, `rs`, `rss`, `ruby`, `scala`, `scm`, `scpt`, `scss`, `sh`, `sld`, `st`, `styl`, `sql`, `swift`, `tex`, `texcode`, `thor`, `ts`, `tsx`, `v`, `vb`, `vbnet`, `vbs`, `veo`, `xhtml`, `xml`, `xsl`, `yaml`, `zsh`.'
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.example",
    defaultMessage: "Example:"
  })), /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.syntaxEx",
    defaultMessage: '```go\npackage main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello, 世界")\n}\n```',
    values: {
      dummy: ''
    }
  }, example => renderRawExample(example)), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.renders",
    defaultMessage: "Renders as:"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.githubTheme",
    defaultMessage: "**GitHub Theme**"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("img", {
    src: "https://docs.mattermost.com/_images/syntax-highlighting-github.png",
    alt: "go syntax-highlighting",
    className: "markdown-inline-img"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.solirizedDarkTheme",
    defaultMessage: "**Solarized Dark Theme**"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("img", {
    src: "https://docs.mattermost.com/_images/syntax-highlighting-sol-dark.png",
    alt: "go syntax-highlighting",
    className: "markdown-inline-img"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.solirizedLightTheme",
    defaultMessage: "**Solarized Light Theme**"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("img", {
    src: "https://docs.mattermost.com/_images/syntax-highlighting-sol-light.png",
    alt: "go syntax-highlighting",
    className: "markdown-inline-img"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.monokaiTheme",
    defaultMessage: "**Monokai Theme**"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("img", {
    src: "https://docs.mattermost.com/_images/syntax-highlighting-monokai.png",
    alt: "go syntax-highlighting",
    className: "markdown-inline-img"
  })), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.inline.title",
    defaultMessage: "In-line Code"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.inline.description",
    defaultMessage: "Create in-line monospaced font by surrounding it with backticks."
  })), renderRawExample('`monospace`'), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.renders",
    defaultMessage: "Renders as:"
  }, text => /*#__PURE__*/react.createElement(markdown/* default */.Z, {
    message: text + ' `monospace`'
  }))), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.links.title",
    defaultMessage: "Links"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.links.description",
    defaultMessage: "Create labeled links by putting the desired text in square brackets and the associated link in normal brackets."
  })), /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.linkEx",
    defaultMessage: '[Check out Mattermost!](https://mattermost.com/)'
  }, example => /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(markdown/* default */.Z, {
    message: '`' + example + '`'
  }), /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.renders",
    defaultMessage: "Renders as:"
  }, text => /*#__PURE__*/react.createElement(markdown/* default */.Z, {
    message: text + ' ' + example
  })))), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.images.title",
    defaultMessage: "In-line Images"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.images.description",
    defaultMessage: "Create in-line images using an `!` followed by the alt text in square brackets and the link in normal brackets. Add hover text by placing it in quotes after the link. See the <link>product documentation</link> for details on working with in-line images.",
    values: {
      link: msg => /*#__PURE__*/react.createElement("a", {
        href: "https://docs.mattermost.com/messaging/formatting-text.html#in-line-images",
        target: "_blank",
        rel: "noreferrer"
      }, msg)
    }
  })), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.emojis.title",
    defaultMessage: "Emojis"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.emojis.description",
    defaultMessage: 'Open the emoji autocomplete by typing `:`. A full list of emojis can be found [online](!http://www.emoji-cheat-sheet.com/). It is also possible to create your own [Custom Emoji](!https://docs.mattermost.com/messaging/using-emoji.html#creating-custom-emojis) if the emoji you want to use doesn\'t exist.'
  })), renderRawExampleWithResult(':smile: :+1: :sheep:'), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.lines.title",
    defaultMessage: "Lines"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.lines.description",
    defaultMessage: "Create a line by using three `*`, `_`, or `-`."
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.renders",
    defaultMessage: "Renders as:"
  }, text => /*#__PURE__*/react.createElement(markdown/* default */.Z, {
    message: '`***` ' + text
  }))), /*#__PURE__*/react.createElement(markdown/* default */.Z, {
    message: "***"
  }), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.quotes.title",
    defaultMessage: "Block quotes"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.quotes.description",
    defaultMessage: "Create block quotes using `>`."
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.quotesExample",
    defaultMessage: "`> block quotes` renders as:"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.quotesRender",
    defaultMessage: "> block quotes"
  })), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.lists.title",
    defaultMessage: "Lists"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.lists.description",
    defaultMessage: "Create a list by using `*` or `-` as bullets. Indent a bullet point by adding two spaces in front of it."
  })), /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.listExample",
    defaultMessage: '* list item one\n* list item two\n    * item two sub-point'
  }, example => renderRawExampleWithResult(example)), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.ordered",
    defaultMessage: "Make it an ordered list by using numbers instead:"
  })), /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.orderedExample",
    defaultMessage: '1. Item one\n2. Item two'
  }, example => renderRawExampleWithResult(example)), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.checklist",
    defaultMessage: "Make a task list by including square brackets:"
  })), /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.checklistExample",
    defaultMessage: '- [ ] Item one\n- [ ] Item two\n- [x] Completed item'
  }, example => renderRawExampleWithResult(example)), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.tables.title",
    defaultMessage: "Tables"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.tables.description",
    defaultMessage: 'Create a table by placing a dashed line under the header row and separating the columns with a pipe `|`. (The columns don\'t need to line up exactly for it to work). Choose how to align table columns by including colons `:` within the header row.'
  })), /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.tableExample",
    defaultMessage: '| Left-Aligned  | Center Aligned  | Right Aligned |\n| :------------ |:---------------:| -----:|\n| Left column 1 | this text       |  $100 |\n| Left column 2 | is              |   $10 |\n| Left column 3 | centered        |    $1 |'
  }, example => renderRawExampleWithResult(example)), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.headings.title",
    defaultMessage: "Headings"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.headings.description",
    defaultMessage: 'Make a heading by typing # and a space before your title. For smaller headings, use more #\'s.'
  })), /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.headingsExample",
    defaultMessage: '## Large Heading\n### Smaller Heading\n#### Even Smaller Heading'
  }, example => renderRawExampleWithResult(example)), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.formatting.headings2",
    defaultMessage: "Alternatively, you can underline the text using `===` or `---` to create headings."
  })), /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.formatting.headings2Example",
    defaultMessage: 'Large Heading\n-------------'
  }, example => renderRawExampleWithResult(example)), /*#__PURE__*/react.createElement(help_links, {
    excludedLinks: [HelpLink.Formatting]
  }));
}
;// CONCATENATED MODULE: ./components/help/components/attaching.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function Attaching() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.title",
    defaultMessage: "Attaching Files"
  })), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.methods.title",
    defaultMessage: "Attachment Methods"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.attaching.methods.description",
    defaultMessage: "There are three ways to attach a file. You can drag and drop files, use the **Attachment** icon, or copy and paste files."
  })), /*#__PURE__*/react.createElement("h4", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.dragdrop.title",
    defaultMessage: "Drag and Drop Files"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.attaching.dragdrop.description",
    defaultMessage: "Upload a file, or a selection of files, by dragging the files from your computer into the right-hand sidebar or center pane. Dragging and dropping attaches the files to the message input box, then you can optionally type a message and press **ENTER** to post the message."
  })), /*#__PURE__*/react.createElement("h4", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.icon.title",
    defaultMessage: "Use the Attachment Icon"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.attaching.icon.description",
    defaultMessage: "Alternatively, upload files by selecting the **Attachment** icon inside the message input box. In the system file viewer, navigate to the desired files, then select **Open** to upload them to the message input box. Optionally type a message, then press **ENTER** to post the message."
  })), /*#__PURE__*/react.createElement("h4", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.pasting.title",
    defaultMessage: "Copy and Paste Files"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.pasting.description",
    defaultMessage: "On Chrome and Edge browsers, you can upload files by pasting them from the system clipboard. This is not yet supported on other browsers."
  })), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.previewer.title",
    defaultMessage: "View Previewer"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.previewer.description",
    defaultMessage: "Mattermost has a built-in file previewer used to view media, download files, and to share public links. Select the thumbnail of an attached file to open it in the file previewer."
  })), /*#__PURE__*/react.createElement("h4", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.publicLinks.title",
    defaultMessage: "Share Public Links"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.attaching.publicLinks.description",
    defaultMessage: "Public links enable you to share file attachments with people outside your Mattermost team. Open the file previewer by selecting the thumbnail of an attachment, then select **Get a public link**. Copy the link provided. When the link is shared and opened by another user, the file automatically downloads."
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.attaching.publicLinks2",
    defaultMessage: "If the **Get a public link** option is not visible in the file previewer, and you want this feature enabled, ask your System Admin to enable this feature in the System Console under **Site Configuration > Public Links**."
  })), /*#__PURE__*/react.createElement("h4", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.downloading.title",
    defaultMessage: "Download Files"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.attaching.downloading.description",
    defaultMessage: "Download an attached file by selecting the Download icon next to the file thumbnail, or by opening the file previewer and selecting **Download**."
  })), /*#__PURE__*/react.createElement("h4", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.supported.title",
    defaultMessage: "Supported Media Types"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.supported.description",
    defaultMessage: "If you are trying to preview a media type that is not supported, the file previewer opens a standard media attachment icon. Supported media formats depend heavily on your browser and operating system. The following formats are supported by Mattermost on most browsers:"
  })), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.supportedListItem1",
    defaultMessage: "Images: BMP, GIF, JPG, JPEG, PNG, SVG"
  })), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.supportedListItem2",
    defaultMessage: "Video: MP4"
  })), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.supportedListItem3",
    defaultMessage: "Audio: MP3, M4A"
  })), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.supportedListItem4",
    defaultMessage: "Documents: PDF, TXT"
  }))), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.notSupported",
    defaultMessage: "Other document formats (such as Word, Excel, or PPT) are not yet supported."
  })), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.limitations.title",
    defaultMessage: "File Size Limitations"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.attaching.limitations.description",
    defaultMessage: "Mattermost supports up to ten files attached per post. The default maximum file size is 100 MB (megabytes), but this can be changed by your System Admin. Image files can be a maximum size of 7680 pixels x 4320 pixels, with a maximum image resolution of 33 MP (mega pixels) or 8K resolution, and a maximum raw image file size of approximately 253 MB."
  })), /*#__PURE__*/react.createElement(help_links, {
    excludedLinks: [HelpLink.Attaching]
  }));
}
;// CONCATENATED MODULE: ./components/help/components/commands.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function HelpCommands() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.commands.title",
    defaultMessage: "Executing Commands"
  })), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.commands.intro1",
    defaultMessage: "You can execute commands, called slash commands, by typing into the text input box to perform operations in Mattermost. To run a slash command,\xA0type `/` followed by a command and some arguments to perform actions."
  })), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.commands.builtin.title",
    defaultMessage: "Built-In Commands"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.commands.intro2",
    defaultMessage: "Built-in slash commands come with all Mattermost installations. See the <link>product documentation</link> for a list of available built-in slash commands.",
    values: {
      link: msg => /*#__PURE__*/react.createElement("a", {
        href: "https://docs.mattermost.com/messaging/executing-slash-commands.html",
        target: "_blank",
        rel: "noreferrer"
      }, msg)
    }
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.commands.builtin2",
    defaultMessage: "Begin by typing `/`. A list of slash command options displays above the text input box. The autocomplete suggestions provide you with a format example in black text and a short description of the slash command in grey text."
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("img", {
    src: "https://docs.mattermost.com/_images/slash-commands.gif",
    alt: "Slash command autocomplete",
    className: "markdown-inline-img"
  })), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.commands.custom.title",
    defaultMessage: "Custom Commands"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
    id: "help.commands.custom.description",
    defaultMessage: "Custom slash commands can integrate with external applications. For example, a team might configure a custom slash command to check internal health records with `/patient joe smith` or check the weekly weather forecast in a city with `/weather toronto week`. Check with your System Admin, or open the autocomplete list by typing `/`, to determine whether custom slash commands are available for your organization."
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.commands.custom2",
    defaultMessage: "Custom slash commands are disabled by default and can be enabled by the System Admin in the System Console by going to <strong>Integrations > Integration Management</strong>. Learn about configuring custom slash commands in the <link>developer documentation</link>.",
    values: {
      link: msg => /*#__PURE__*/react.createElement("a", {
        href: "https://developers.mattermost.com/integrate/slash-commands/",
        target: "_blank",
        rel: "noreferrer"
      }, msg),
      strong: msg => /*#__PURE__*/react.createElement("strong", null, msg)
    }
  })), /*#__PURE__*/react.createElement(help_links, {
    excludedLinks: [HelpLink.Commands]
  }));
}
;// CONCATENATED MODULE: ./components/help/components/privacy.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

function HelpPrivacy() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("section", {
    id: "your-privacy",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "Effective Date: April 21st, 2021"), /*#__PURE__*/react.createElement("p", null, "At Kix Chat (\u201Ckix.co.il\u201D or \u201Cwe\u201D or \u201Cus\u201D or \u201Cour\u201D), protecting your privacy is really important to us. This platform privacy policy (the \u201CPrivacy Policy\u201D) is designed to help you understand what information we collect about you, including personal data within the meaning of the General Data Protection Regulation (\u201CGDPR\u201D) and other information that directly identifies you or makes you identifiable (\u201Cpersonal information\u201D), and how we use that information."), /*#__PURE__*/react.createElement("p", null, "This Privacy Policy applies to all visitors and users of kix.co.il using Mattermost\u2019s self-hosted and cloud services (collectively, the \u201CServices\u201D), and other kix.co.il and nix.co.il hosted sites and applications (collectively, the \u201CSites\u201D)."), /*#__PURE__*/react.createElement("p", null, "Please read this Privacy Policy carefully. By accessing or using any part of the Services or the Sites, you acknowledge that you have been informed of our practices with regard to your personal information and other data. If you do not agree to this Privacy Policy, please immediately cease use of the Services and the Sites and please shut down your account."), /*#__PURE__*/react.createElement("p", null, "In order to provide the Services to you, our platform is utilized by and in some cases has entered into a separate data processing agreement with the organization (either an employer or another entity or person)(each, a \u201CCustomer\u201D) that governs the delivery, access, and your use of the Services. The Customer owns and controls the messages, files, or other content submitted to the Services, including your personal information (the \u201CCustomer Data\u201D) and your account with the Services and any associated Customer Data that you provide. In these cases our platform acts as a data processor within the meaning of Art. 28 GDPR and the processing of such data is governed by the respective data processing agreement with the Customer. The Customer also controls and manages any Third Party Services they use in conjunction with the Services. The Customer has authorized you to access the Services that they control and the Customer is the controller of the Customer Data. Please contact the Customer if you have any questions related to such Customer\u2019s specific settings and privacy practices.")), /*#__PURE__*/react.createElement("section", {
    id: "contact-us",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "Contact Us"), /*#__PURE__*/react.createElement("p", null, "Please contact us at ", /*#__PURE__*/react.createElement("a", {
    href: "mailto:support@kix.co.il"
  }, "support@kix.co.il"), " if you have any complaints or concerns with respect to your privacy. If you believe we are unable to assist you, you have the right to lodge a complaint with a supervisory authority in the relevant jurisdiction. However, we are committed to working with you to resolve any complaint or concern you may have with respect to your privacy.")), /*#__PURE__*/react.createElement("section", {
    id: "collection-and-usage",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "Information We Collect and How We Use It"), /*#__PURE__*/react.createElement("p", null, "We collect information that relates to you in connection with your visits to the Sites and use of the Services (including without limitation, personal information that you provide, and information that is collected automatically). Please be aware that some of the information described below is required to offer you the Sites and Services, and if this information is not provided, we may not be able to provide the Sites and Services."), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, /*#__PURE__*/react.createElement("u", null, "Information from Website Visitors: "))), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Information You Provide to Us"), ": We collect personal information that you provide when you register for or create an account with the Sites or request more information about our Services. This information includes your name, email address, phone number, and other necessary contact details. We use this information ", /*#__PURE__*/react.createElement("strong", null, "to communicate with you about the Services and respond to your requests"), ". We use your contact information to respond to your questions, inform you about changes to the Services and any events, communicate about account-related matters, and resolve technical issues you encounter. We may also use your information in assisting us with responding to your questions and give you access to demo and educational materials. We may occasionally send you an email to tell you about security, system information, new features, solicit feedback, or keep you informed with what is going on with kix.co.il and nix.co.il communities. Please note that there\u2019s an unsubscribe link located at the bottom of each of the marketing emails we send you so you can stop receiving such emails at any time.", /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "To the extent that such processing is subject to the GDPR, the following applies: In case you act as our customer, the legal basis for the above-mentioned processing of personal information is Art. 6 (1) (b) GDPR (performance of a contract)."), /*#__PURE__*/react.createElement("li", null, "To the extent that such processing is subject to the GDPR, the following applies: In case you act for your employer or another organization as a customer, the legal basis for the above-mentioned processing of personal information is Art. 6 (1) (f) GDPR (legitimate interests)."))), /*#__PURE__*/react.createElement("li", null, "When you use or visit the Sites and/or Services, we may send one or more cookies \u2014 small text files containing a string of alphanumeric characters \u2014 to your computer or device that allows us to uniquely identify your browser, computer, or device. ", /*#__PURE__*/react.createElement("strong", null, "Please see our "), /*#__PURE__*/react.createElement("a", {
    href: "https://kix.co.il/help/cookies"
  }, /*#__PURE__*/react.createElement("strong", null, "Cookies Policy")), /*#__PURE__*/react.createElement("strong", null, " for more information on the way we use Cookies "), "and the information we collect from Cookies."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Device And Log Information: "), "We may record log file information every time you access and use the Sites including Internet Protocol (IP) address, location, browser type and settings, date and time the Sites were used, the web page that you were visiting before accessing our Sites, external links and the features or content which you accessed from our site. When you access the Sites with a device (including a mobile device), we may collect and store a unique identifier associated with your device and additional information about the device accessing the Site, including user settings, location, operating system of the device, and crash settings. We use this information ", /*#__PURE__*/react.createElement("strong", null, "to protect from potential security attacks and abuse"), ". We use this type of information to verify accounts and activity, to detect, investigate, prevent, and respond to potential or actual security incidents and to monitor and protect against other malicious, deceptive, fraudulent, or illegal activity.", /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "To the extent that such processing is subject to the GDPR, the following applies: The legal basis for such processing of personal information is Art. 6 (1) (f) GDPR (legitimate interests)."))), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Usage Information:"), " We also collect information about the way you use our Sites, for example, the site from which you came and the site to which you are going when you leave, the pages you visit, the links you click, how frequently you access the Sites, whether you open emails or click the links contained in emails, whether you access the Site from multiple devices and other actions you take on the Sites. We may collect analytics data, or use third-party analytics tools, to help us measure traffic, usage trends, and to understand more about the demographics of our users. We may also work with third party partners to employ technologies, including the application of statistical modeling tools, which attempt to recognize you across multiple devices. We use this information ", /*#__PURE__*/react.createElement("strong", null, "to market, promote, and drive engagement with our Sites."), " We use usage data to improve performance and content. We use contact information and information about how you interact with our Sites to market to you or offer you information and updates on our products or services we think that you may be interested in. While we may use your personal information in this manner, please note that we do not use the personal information you input to the Sites to serve you ads, and we will never share such information with any third parties for marketing or advertising purposes, unless you have explicitly submitted it to us for that purpose.", /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "To the extent that such processing is subject to the GDPR, the following applies: The legal basis for such processing of personal information is Art. 6 (1) (f) GDPR (legitimate interests).")))), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, /*#__PURE__*/react.createElement("u", null, "Information sent to Mattermost from Self-Hosted Products:"))), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Service and Usage Information: "), "Mattermost collects error and diagnostics, security alert and log file reporting. We may also collect information about usage of enterprise features as well as commercial license key registration information. We use this information to improve your experience with Services and to protect from potential security attacks and abuse. Please see ", /*#__PURE__*/react.createElement("a", {
    href: "http://mattermost.com/pl/default-telemetry"
  }, "telemetry data"), " for more information. You can also opt-out of the usage ping through the admin dashboard.", /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "To the extent that such processing is subject to the GDPR, the following applies: The legal basis for such processing of personal information is Art. 6 (1) (f) GDPR (legitimate interests)."))), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Information You Provide to Mattermost"), ": Customers that purchase the Services may provide billing details such as payment information which include organization\u2019s name, phone number, domain, email address, physical address, and billing addresses. We also collect information that you provide when you request more details about our Services. This information may include your name, email address, and other necessary account details. We use this information to provide and deliver Services, process billing transactions related to the Services, to communicate with you about the Services and respond to your requests.", /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "To the extent that such processing is subject to the GDPR, the following applies: In case you act as our customer, the legal basis for the above-mentioned processing of personal information is Art. 6 (1) (b) GDPR (performance of a contract)."), /*#__PURE__*/react.createElement("li", null, "In case you act for your employer or another organization as a customer, the legal basis for the above-mentioned processing of personal information is Art. 6 (1) (f) GDPR (legitimate interests)."))), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Push Notification Information: "), "Customers may choose a specific configuration of the system that uses the optional Mattermost Hosted Push Notification Service (HPNS), in lieu of the self-hosted option also offered. When utilizing this service, customers may choose to enable information that include the following types of Personal Data: usernames and message preview snippets (which may include Personal Data shared by users in messages, if the customer enables the ability to display message preview snippets for the HPNS relay). Customers can configure HPNS to share no personal data in relaying messages to mobile applications.", /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "To the extent that such processing is subject to the GDPR, the following applies: In case you act as our customer, the legal basis for the above-mentioned processing of personal information is Art. 6 (1) (b) GDPR (performance of a contract).")))), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, /*#__PURE__*/react.createElement("u", null, "Information from Members and Contributors: "))), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Information You Provide to Us"), ": We collect personal information that you provide when you register for or create an account with the Sites or Services or request more information about our Sites or Services, or contribute to our open source projects. This information includes your name, email address, physical address, and phone number. We use this information", /*#__PURE__*/react.createElement("strong", null, " to communicate with you and respond to your requests"), ". We use your contact information to respond to your questions, inform you about changes to the Services and community events, communicate about your contributions, solicit feedback, and resolve technical issues you encounter. We may also use your information in assisting us in responding to your questions. If you have made a contribution to our open source projects we may use your physical address to send you thank you gifts.", /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "In case you act for your employer or another organization as a customer, the legal basis for the above-mentioned processing of personal information is Art. 6 (1) (f) GDPR (legitimate interests).")))), /*#__PURE__*/react.createElement("p", null, "For further information regarding the legal basis for the respective processing, please refer to the section \u201COur Legal Basis for Processing in the EU and Your Rights\u201D below."), /*#__PURE__*/react.createElement("p", null, "If personal information is aggregated or de-identified so it is no longer reasonably associated with an identified or identifiable natural person, we may use it for any business purpose.")), /*#__PURE__*/react.createElement("section", {
    id: "third-party-sharing",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "Information Shared with Third Parties and For What Purposes"), /*#__PURE__*/react.createElement("p", null, "We do not sell, trade, or otherwise transfer the information we collect from you to unaffiliated third parties. We do, however, share the information we collect from you with trusted third parties who assist us in operating our Sites and Services, conducting our business, or servicing you, provided that those parties agree to keep your information confidential and secure. These trusted third parties include:"), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "Service providers, subcontractors, partners, vendors, consultants, and others that help us with any of the purposes in this Privacy Policy, including by performing services on our behalf such as identifying and serving targeted advertisements, processing payments, sending email, providing back-office services, or measuring site traffic. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business. Notwithstanding the foregoing, non-personally identifiable visitor information from our Sites may be provided to other parties for marketing, advertising, or other uses."), /*#__PURE__*/react.createElement("li", null, "Our affiliates, parent companies, subsidiaries, and other related companies, all for the purposes in this Privacy Policy;"), /*#__PURE__*/react.createElement("li", null, "Third parties to respond or comply with, in our sole discretion, a court order, subpoena, law enforcement, or other government request (with or without notice to you, in our discretion) under applicable law;"), /*#__PURE__*/react.createElement("li", null, "Buyers, successors, or others in connection with a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our business or assets. We will provide notice before your personal information is transferred and becomes subject to a different privacy policy;"), /*#__PURE__*/react.createElement("li", null, "Third parties, in our discretion, to: (i) satisfy any applicable law or regulation, (ii) enforce this Privacy Policy, including the investigation of potential violations thereof, (iii) investigate and defend ourselves against any third party claims or allegations, or (iv) protect against harm to the rights, property or safety of us, the Sites, the Services, other users of the Services, or third parties (including financial loss, or in connection with preventing fraud or illegal activity, and/or to enforce our other agreements with you); and"), /*#__PURE__*/react.createElement("li", null, "Other third parties with your consent."))), /*#__PURE__*/react.createElement("section", {
    id: "information-protection",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "How We Protect Your Personal Information"), /*#__PURE__*/react.createElement("p", null, "We implement a variety of security measures to maintain the safety of your personal information that you submit from loss, misuse, and unauthorized access or disclosure. These steps take into account the sensitivity of the information we collect, process, and store, as well as the current state of technology. Any information that we consider potentially sensitive is transmitted through encrypted channels and we follow generally accepted industry standards to protect the data collected by us, both during transmission and after we receive it. Given the nature of communications and information processing technology, we cannot guarantee that information during transmission through the Internet or while stored on our systems or otherwise in our care will be absolutely safe from intrusion by others."), /*#__PURE__*/react.createElement("p", null, "If you believe that any account credentials for the Services have been compromised, please contact us immediately at ", /*#__PURE__*/react.createElement("a", {
    href: "mailto:support@kix.co.il"
  }, "support@kix.co.il"), ".")), /*#__PURE__*/react.createElement("section", {
    id: "cookies",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "Cookies, Tracking Technologies, and Do Not Track Signals"), /*#__PURE__*/react.createElement("p", null, "We use cookies and other tracking mechanisms on our Sites and Services. Please read our ", /*#__PURE__*/react.createElement("a", {
    href: "https://kix.co.il/help/cookies"
  }, "Cookies Policy"), " for more details."), /*#__PURE__*/react.createElement("p", null, "Your browser settings may allow you to automatically transmit a Do Not Track signal to websites and other online services you visit. We do not alter our practices when we receive a Do Not Track signal from a visitor\u2019s browser because we do not track our visitors to provide targeted advertising. To find out more about Do Not Track, please visit\xA0", /*#__PURE__*/react.createElement("a", {
    href: "https://allaboutdnt.com/"
  }, "All About Do Not Track"), ".")), /*#__PURE__*/react.createElement("section", {
    id: "gdpr",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "Our Legal Basis for Processing in the EU and Your Rights"), /*#__PURE__*/react.createElement("p", null, "If the GDPR is applicable as per Art. 3 of the GDPR. then references to \u201Cpersonal information\u201D in this Privacy Policy are equivalent to \u201Cpersonal data\u201D governed by the GDPR."), /*#__PURE__*/react.createElement("p", null, "Our legal basis for collecting and using the personal information described above will depend on the personal information concerned and the specific context in which we collect it. We will normally collect personal information from you only where we need the personal information to perform a contract with you (e.g. to provide you with our Services), where the processing is in our legitimate interests and not overridden by your data protection interests or fundamental rights and freedoms, or where we have your consent. In some cases, we may also have a legal obligation to collect personal information from you."), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Performance of a "), /*#__PURE__*/react.createElement("strong", null, "contract"), ". The use of your personal data may be necessary to perform a Customer Agreement or other contract that you have with us. For example, if you contribute to a project, create a profile, post, and comment on our Sites, we will use your information to carry out our obligation to complete and administer that Customer Agreement or contract."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Legitimate interests"), ". We use your personal data for our legitimate interests, such as to provide you with the best content through our Sites, Services, and communications with users and the public, to improve and promote our products and services, and for administrative, security, fraud prevention and legal purposes. For further details on the information collected by us, please see the sections above."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Consent"), ". We may rely on your consent to use your personal data for certain direct marketing purposes, such as sending you newsletter updates about our products and services. You may withdraw your consent at any time through the unsubscribe feature provided with each marketing email or by contacting us at the addresses given at the end of this Privacy Policy."))), /*#__PURE__*/react.createElement("section", {
    id: "international-data-transfers",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "International Data Transfers and Storage"), /*#__PURE__*/react.createElement("p", null, "In order for us to operate and provide our Sites and Services globally, the personal data you provide to us or that we collect may be transferred or accessed in various countries, including the United States of America. If you are located in the European Economic Area or other regions with laws governing data collection and use that may differ from U.S. law, please note that we may transfer information, including personal information, to a country and jurisdiction that offers a level of protection that may, in certain instances, be less protective of your personal data than the jurisdiction you typically reside in."), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "European Union Standard Contractual Clauses:"), " Where this is the case, we will enter into guarantees to ensure that the right security measures are taken so that your privacy rights continue to be protected as outlined in this Privacy Policy. If we transfer information from the European Economic Area to third parties outside the European Economic Area and to countries not subject to schemes which are considered as providing an adequate data protection standard, we will enter into contracts which are based on the ", /*#__PURE__*/react.createElement("a", {
    href: "https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"
  }, "EU Standard Contractual Clauses "), "with these parties, unless any such transfer is permitted for other reasons under the GDPR."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Data Transfer under Art. 49 GDPR:"), " Notwithstanding the above, we may also rely on Art. 49 GDPR to legitimize the transfer."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "U.-U.S.Privacy Shield and Swiss-U.S. Privacy Shield: "), "While we remain self-certified under the E.U.-U.S. Privacy Shield and Swiss \u2013 U.S. Privacy Shield, we are not relying on these frameworks for the transfer of personal data. To see more information about our responsibilities under Privacy Shield, please see ", /*#__PURE__*/react.createElement("a", {
    href: "https://mattermost.com/privacy-shield/"
  }, "https://mattermost.com/privacy-shield"), ". To learn more about the Privacy Shield Program, please see ", /*#__PURE__*/react.createElement("a", {
    href: "https://www.privacyshield.gov/welcome"
  }, "http://www.privacyshield.gov/welcome"), "."))), /*#__PURE__*/react.createElement("section", {
    id: "retention",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "Retention of Your Personal Information"), /*#__PURE__*/react.createElement("p", null, "We retain your personal information for as long as we need to provide our Sites and/or Services to you and the Customer(s). After such time, we will either delete or anonymize your information."), /*#__PURE__*/react.createElement("p", null, "If you have an account on our sites or services, we will retain your information for as long as your account is active or as needed to perform our contractual obligations, provide you services through the Sites, to comply with legal obligations, resolve disputes, preserve legal rights, or enforce our Customer Agreements and agreements. We will delete information once it is no longer necessary to fulfill the purposes for which it was collected and processed."), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, "Information from Website Visitors: ")), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "If you have elected to receive marketing emails from us, we retain information about your marketing preferences for a reasonable period of time from the date you last expressed interest in our Services, such as when you last opened an email from us or ceased using your kix.co.il account. We retain information derived from cookies and other tracking technologies for a reasonable period of time from the date such information was created so long as needed for our business purposes.")), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, "Information from Mattermost Self-Hosted and Cloud Products: ")), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "Depending on the Services plan, Customers may be able to customize their retention settings such that they are different than Mattermost\u2019s standard data retention practices. Customers may also apply different settings to messages, files, or other types of Customer Data. The deletion of Customer Data and other use of the Services by Customer may result in the deletion and/or de-identification of certain personal information and other information."), /*#__PURE__*/react.createElement("li", null, "Mattermost Cloud products will retain Customer Data in accordance with a Customer\u2019s instructions, including any applicable terms in the Customer Agreement and Customer\u2019s use of Services, and as required by applicable law. Mattermost may provide the option for Customers to delete Customer Data after their subscription ends. This request must be made by the customer, and Mattermost may require additional ID verification. Mattermost will delete all information from currently-running production systems within one year of the deletion request."), /*#__PURE__*/react.createElement("li", null, "National commercial or financial codes may require us to retain certain Customer information for up to 10 years.")), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, "Information from Community Members and Contributors:")), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "Due to the open source nature of our products, services, and community, we may retain limited personal information indefinitely in order to ensure transactional integrity and nonrepudiation. For example, if you provide your information in connection with a forum or blog post or comment, we may display that information even if you have deleted your account as we do not automatically delete community posts. Also, if you contribute to a Mattermost project and provide your personal information in connection with that contribution, that information (including your name) will be embedded and publicly displayed with your contribution and we will not be able to delete or erase it because doing so would break the project code.")), /*#__PURE__*/react.createElement("p", null, "If we are involved in litigation or a governmental or regulatory investigation, then we keep personal information throughout the period of litigation or investigation and for a reasonable amount of time thereafter. If a settlement means that we have to keep personal information for longer, then we keep personal information for the period required to administer the settlement. If we provide personal information to law enforcement agencies, then we keep a record of this for one year beyond the end of the investigation.")), /*#__PURE__*/react.createElement("section", {
    id: "european-union-privacy-rights",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "Your European Union Privacy Rights Regarding Your Personal Information"), /*#__PURE__*/react.createElement("p", null, "If the provision of the GDPR is applicable, then you have certain rights with respect to the use of personal information on the Sites and Services. If your Personal Information was submitted to us by a Customer or your account is controlled by a Customer, then please contact the applicable Customer directly to exercise the below rights. Otherwise, please contact us at ", /*#__PURE__*/react.createElement("a", {
    href: "mailto:support@kix.co.il"
  }, "support@kix.co.il"), " to exercise any of the below rights."), /*#__PURE__*/react.createElement("p", null, "You have the right:"), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "to demand information in accordance with Article\xA015\xA0GDPR regarding the processing of your personal data by us. In particular, you may request information on the purposes of the processing, the categories of personal data, the categories of recipient to whom your data have been or are disclosed, the envisaged storage period, the existence of the right to rectification, erasure, restriction of processing or objection, the right to lodge a complaint, the source of your data to the extent that these were not collected at our site, and the existence of automated decision-making, including profiling and any meaningful information on its details;"), /*#__PURE__*/react.createElement("li", null, "in accordance with Article\xA016\xA0GDPR, obtain the rectification of any inaccurate personal data stored by us or completion of such data without undue delay;"), /*#__PURE__*/react.createElement("li", null, "in accordance with Article\xA017\xA0GDPR, obtain the erasure of your personal data stored by us, to the extent that processing is not required for exercising the right of freedom of expression and information, for compliance with a legal obligation, for reasons of public interest or for the establishment, exercise or defense of legal claims;"), /*#__PURE__*/react.createElement("li", null, "in accordance with Article\xA018\xA0GDPR, obtain the restriction of processing of your personal data, to the extent that the accuracy of the data is contested by you, processing is unlawful, but you oppose erasure and we no longer need the personal data, but you still require them for the establishment, exercise or defense of legal claims or you have objected to processing pursuant to Article\xA021\xA0GDPR;"), /*#__PURE__*/react.createElement("li", null, "in accordance with Article\xA020\xA0GDPR, demand to receive your personal data that you have provided to us in a structured, commonly used and machine-readable format or to demand transmission to another controller;"), /*#__PURE__*/react.createElement("li", null, "in accordance with Article\xA07(3) GDPR, to withdraw your consent once given to us at any time. This has the consequence that we may no longer continue the data processing activities that were based on this consent in the future.")), /*#__PURE__*/react.createElement("p", null, "In addition to the above-listed rights, as an EU resident, you also have the right to lodge a complaint with your local data protection authority. Further information about how to contact your local data protection authority is available at\xA0", /*#__PURE__*/react.createElement("a", {
    href: "http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
  }, "http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"), "."), /*#__PURE__*/react.createElement("p", null, "In accordance with Article 13(2)(e) GDPR we would like to inform you about the following:"), /*#__PURE__*/react.createElement("p", null, "The provision of personal data is neither a statutory nor contractual requirement nor a requirement necessary to enter into a contract. You are not obliged to provide personal data. There are no consequences resulting from failure to provide such data."), /*#__PURE__*/react.createElement("p", null, "In accordance with Article 13(2)(f) GDPR we would like to inform you about the following:"), /*#__PURE__*/react.createElement("p", null, "We do not process your personal data for the purpose of automated decision-making.")), /*#__PURE__*/react.createElement("section", {
    id: "california-privacy-rights",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "Your California Privacy Rights"), /*#__PURE__*/react.createElement("p", null, "This section provides additional details about the personal information we collect about California consumers and the rights afforded to them under the California Consumer Privacy Act or \u201CCCPA.\u201D"), /*#__PURE__*/react.createElement("p", null, "For more details about the personal information we have collected over the last 12 months, including the categories of sources, please see the \u201CInformation We Collect and Receive\u201D\xA0section above. We collect this information for the business and commercial purposes described in the \u201CHow We Use Your Information\u201D section above. We share this information with the categories of third parties described in the \u201CInformation We Share with Third-Parties and For What Purposes\u201D section above. We do not sell (as such term is defined in the CCPA) the personal information we collect (and will not sell it without providing a right to opt-out). Please note that we do use third-party cookies for our advertising purposes as further described in our ", /*#__PURE__*/react.createElement("a", {
    href: "https://kix.co.il/help/cookies"
  }, "Cookie Policy"), "."), /*#__PURE__*/react.createElement("p", null, "Subject to certain limitations, the CCPA provides California consumers the right to request to know more details about the categories or specific pieces of personal information we collect (including how we use and disclose this information), to delete their personal information, to opt-out of any \u201Csales\u201D that may be occurring, and to not be discriminated against for exercising these rights."), /*#__PURE__*/react.createElement("p", null, "California consumers may make a request pursuant to their rights under the CCPA by contacting us at support@kix.co.il . We will verify your request using the information associated with your account, including email address. Government identification may be required. Consumers can also designate an authorized agent to exercise these rights on their behalf.")), /*#__PURE__*/react.createElement("section", {
    id: "third-party-links-and-websites",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "Third-Party Links and Websites"), /*#__PURE__*/react.createElement("p", null, "This Privacy Policy does not apply to any third-party websites, services, or applications, even if they are accessible through our Sites and/or Services.\xA0 This Privacy Policy only applies to our Sites and Services, so when you link to other websites you should read those separate and independent privacy policies. We have no responsibility or liability for the content and activities of these linked sites. However, we seek to protect the integrity of our Sites and Services and welcome any feedback about the Sites and Services.")), /*#__PURE__*/react.createElement("section", {
    id: "information-from-children",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "Information from Children"), /*#__PURE__*/react.createElement("p", null, "The Services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian of a child under the age of 13 and believe that your child may have provided us with personal information, please contact us at\xA0support@kix.co.il\xA0and we will use commercially reasonable efforts to delete that information.")), /*#__PURE__*/react.createElement("section", {
    id: "changes",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "Changes to our Privacy Policy"), /*#__PURE__*/react.createElement("p", null, "If we decide to change our Privacy Policy, we will post those changes on this page. Your continued use of the Sites and Services after an updated Privacy Policy is posted constitutes your consent to the revised Privacy Policy.")));
}
;// CONCATENATED MODULE: ./components/help/components/terms.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

function HelpTerms() {
  return /*#__PURE__*/react.createElement("div", {
    className: "legal-content"
  }, /*#__PURE__*/react.createElement("h2", {
    id: "h-effective-as-of-october-8-2021"
  }, "Effective as of October 8, 2021"), /*#__PURE__*/react.createElement("p", null, "IMPORTANT \u2013 READ CAREFULLY. THIS kix.co.il TERMS OF USE AGREEMENT (\u201CAGREEMENT\u201D) SETS FORTH THE LEGAL TERMS AND CONDITIONS WHICH GOVERN YOUR USE OF THE kix.co.il.COM WEBSITE AND ALL OTHER WEBSITES OWNED AND OPERATED BY kix.co.il, INC. (THE \u201CWEBSITE\u201D). IF YOU DO NOT AGREE TO THE TERMS AND CONDITIONS OF THIS AGREEMENT, THEN YOU MAY NOT ACCESS THE WEBSITE. BY ACCESSING OR USING ANY PART OF THE WEBSITE, YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS OF THIS AGREEMENT.\xA0 WHEN YOU CLICK \u201CI ACCEPT\u201D WHEN DOWNLOADING ANY kix.co.il PRODUCT MATERIALS FROM THE WEBSITE YOU ARE ALSO AGREEING THAT\xA0 (1) YOU ARE AUTHORIZED TO ACCEPT AND AGREE TO THE TERMS OF THIS AGREEMENT AND (2) YOU INTEND TO ENTER INTO AND TO BE BOUND BY THE TERMS OF THIS AGREEMENT.\xA0 IF YOU CLICK ON THE BOX LABELED \u201CI ACCEPT\u201D, YOU WILL BE GRANTED ACCESS TO THE PRODUCT MATERIALS, AND THIS AGREEMENT WILL BE EFFECTIVE IMMEDIATELY (THE \u201CEFFECTIVE DATE\u201D). THE WEBSITE IS ONLY AVAILABLE TO INDIVIDUALS WHO ARE AT LEAST 13 YEARS OLD.\xA0 TERMS NOT OTHERWISE DEFINED IN THE TEXT OF THIS AGREEMENT SHALL HAVE THE MEANING ASCRIBED TO THEM AS OTHERWISE DEFINED ON THE WEBSITE.\xA0"), /*#__PURE__*/react.createElement("h3", null, "1. Acceptable Use"), /*#__PURE__*/react.createElement("p", null, "By accessing and using the Website, you agree to abide by the terms and conditions of the ", /*#__PURE__*/react.createElement("a", {
    href: "#acceptable-use-policy"
  }, /*#__PURE__*/react.createElement("strong", null, "kix.co.il Acceptable Use Policy")), ", which may be modified or updated from time to time."), /*#__PURE__*/react.createElement("h3", null, "2. Intellectual Property License and Ownership."), /*#__PURE__*/react.createElement("p", null, "2.1 License. kix.co.il grants to you a limited, non-transferable, non-sublicensable, revocable license to access and use the Website subject to the terms and conditions of this Agreement."), /*#__PURE__*/react.createElement("p", null, "2.2 Ownership.\xA0 All kix.co.il or third-party intellectual property, and the accompanying\xA0 right, title and interest in and to such intellectual property will remain solely with kix.co.il and/or the third party, as applicable. Kix Chat, kix.co.il, the kix.co.il logo, and all other trademarks, service marks, graphics and logos located on the Website are trademarks or registered trademarks of kix.co.il. Other trademarks, service marks, graphics and logos located on the Website may be the trademarks of other third parties. Your use of the Website does not transfer any ownership, rights, or title from kix.co.il to you."), /*#__PURE__*/react.createElement("h3", null, "3. Copyright Infringement and DMCA Policy"), /*#__PURE__*/react.createElement("p", null, "As kix.co.il asks others to respect its intellectual property rights, it respects the intellectual property rights of others. If you believe that material located on linked to the Website violates your copyright, you are encouraged to notify kix.co.il in accordance with kix.co.il\u2019s ", /*#__PURE__*/react.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act",
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Digital Millennium Copyright Act"), " (\u201CDMCA\u201D) Policy. kix.co.il will respond to all such notices, including as required or appropriate by removing the infringing material or disabling all links to the infringing material. kix.co.il may terminate access to and use of the Website if, under appropriate circumstances, it is determined to be a repeat infringer of the copyrights or other intellectual property rights of kix.co.il or others. In the case of such termination, kix.co.il will have no obligation to provide a refund of any amounts previously paid to kix.co.il."), /*#__PURE__*/react.createElement("h3", null, "4. Disclaimer of Warranties"), /*#__PURE__*/react.createElement("p", null, "THE kix.co.il WEBSITE IS PROVIDED \u201CAS IS.\u201D kix.co.il AND ITS SUPPLIERS AND LICENSORS HEREBY DISCLAIM ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. NEITHER kix.co.il NOR ITS SUPPLIERS OR LICENSORS, MAKE ANY WARRANTY THAT THE kix.co.il WEBSITE WILL BE ERROR FREE OR THAT\xA0 ITS AVAILABILITY WILL BE CONTINUOUS OR UNINTERRUPTED."), /*#__PURE__*/react.createElement("h3", null, "5. Termination"), /*#__PURE__*/react.createElement("p", null, "kix.co.il may terminate your access to all or any part of the Website at any time, with or without cause, with or without notice, effective immediately. All provisions of this Agreement which by their nature should survive termination shall survive termination, including, without limitation, intellectual property ownership provisions, warranty disclaimers, indemnification obligations and limitations of liability."), /*#__PURE__*/react.createElement("h3", null, "6. Limitation of Liability"), /*#__PURE__*/react.createElement("p", null, "IN NO EVENT WILL kix.co.il, ITS AFFILIATES, SUPPLIERS, OR LICENSORS, BE LIABLE TO YOU WITH RESPECT TO YOUR ACCESS OR USE OR OF THE WEBSITE UNDER ANY THEORY OF CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHER LEGAL OR EQUITABLE THEORY FOR: (I) ANY SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES; (II) THE COST OF PROCUREMENT FOR SUBSTITUTE PRODUCTS OR SERVICES; (III) INTERRUPTION OF USE OR LOSS OR CORRUPTION OF DATA; OR (IV) ANY FOR ANY DAMAGES WHATSOEVER. kix.co.il SHALL HAVE NO LIABILITY FOR ANY FAILURE OR DELAY DUE TO MATTERS BEYOND ITS REASONABLE CONTROL.THE FOREGOING SHALL NOT APPLY TO THE EXTENT PROHIBITED BY APPLICABLE LAW."), /*#__PURE__*/react.createElement("h3", null, "7. Indemnification"), /*#__PURE__*/react.createElement("p", null, "You agree to indemnify and hold harmless kix.co.il, its affiliates, contractors, and its licensors, and their respective directors, officers, employees and agents from and against any and all claims and expenses, including attorneys\u2019 fees, arising out of your use of the kix.co.il Website, including but not limited to your violation of this Agreement."), /*#__PURE__*/react.createElement("h3", null, "8. Miscellaneous"), /*#__PURE__*/react.createElement("p", null, "This Agreement constitutes the entire agreement between kix.co.il and you, concerning your access and use of the Website This Agreement will be governed by the laws of the State of California, U.S.A., excluding its conflict of law provisions, and the proper venue for any disputes arising out of or relating to any of the same will be the State and Federal courts located in San Francisco County, California. Except for claims for injunctive or equitable relief or claims regarding intellectual property rights (which may be brought in any competent court without the posting of a bond), any dispute arising under this Agreement shall be finally settled in accordance with the Comprehensive Arbitration Rules of the Judicial Arbitration and Mediation Service, Inc. (\u201CJAMS\u201D) by one arbitrator appointed in accordance with such Rules. The arbitration shall take place in San Francisco, California, in the English language and the arbitral decision may be enforced in any court. The prevailing party in any action or proceeding to enforce this Agreement shall be entitled to costs and attorneys\u2019 fees. If any part of this Agreement is held invalid or unenforceable, that part will be construed to reflect the parties\u2019 original intent, and the remaining portions will remain in full force and effect. A waiver by either party of any term or condition of this Agreement or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof."), /*#__PURE__*/react.createElement("h1", null, "kix.co.il ACCEPTABLE USE POLICY"), /*#__PURE__*/react.createElement("h2", {
    id: "h-effective-as-of-october-8-2021"
  }, "Effective as of October 8, 2021"), /*#__PURE__*/react.createElement("h3", null, "Effective Date: October 8, 2021"), /*#__PURE__*/react.createElement("p", null, "This Acceptable Use Policy (\u201CPolicy\u201D) governs your use of the kix.co.il Website and the Product Materials and Services offered thereon and/or downloaded therefrom. We may modify the Policy by posting a revised version on the Website. By accessing and/or using the Website and/or any kix.co.il Product Materials or Services, you agree to be bound by the most current version of this Policy. Capitalized terms used herein, but not defined in this Policy shall have the same meaning as set forth in the kix.co.il Terms of Use."), /*#__PURE__*/react.createElement("p", null, "You may not use, or facilitate or allow others to use, the Website or any Product Materials or Services:\xA0"), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "For any unlawful or fraudulent activity;"), /*#__PURE__*/react.createElement("li", null, "To impede on or violate the rights of others;"), /*#__PURE__*/react.createElement("li", null, "To threaten, incite, promote, or encourage violence or terrorism;"), /*#__PURE__*/react.createElement("li", null, "For distribution of content or activity that is harmful to minors;"), /*#__PURE__*/react.createElement("li", null, "For distribution or facilitation of the sending of unsolicited mass messages, promotions, advertisements, or solicitations (\u201Cspam\u201D);"), /*#__PURE__*/react.createElement("li", null, "To mine for a cryptocurrency or blockchain;"), /*#__PURE__*/react.createElement("li", null, "to violate the security or integrity of any computer, network or communications system;"), /*#__PURE__*/react.createElement("li", null, "To distribute harmful or offensive content that is defamatory, obscene, profane, abusive, an invasion of privacy or harassing;"), /*#__PURE__*/react.createElement("li", null, "In any way that would be harmful, overburdening of its resources or otherwise impair its functionality.")), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, "Reporting Violations of this Policy."), "\xA0"), /*#__PURE__*/react.createElement("p", null, "The safety and security of all of our users, and everyone in the community is of utmost importance to us. If you become aware of any violations of this Policy, you can submit a report to", /*#__PURE__*/react.createElement("a", {
    href: "mailto:support@kix.co.il"
  }, "support@kix.co.il"), "."), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, "Investigation and Enforcement.\xA0")), /*#__PURE__*/react.createElement("p", null, "kix.co.il may investigate any suspected violation of this Policy, and remove or disable access to any content or resource that violates this Policy. You agree to cooperate with us to remedy any suspected violation. Determinations of whether there has been a violation of this Policy will be made at kix.co.il\u2019s sole discretion."));
}
;// CONCATENATED MODULE: ./components/help/components/contact.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


function HelpContact() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.contact.title",
    defaultMessage: "Contact Us"
  })), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.contact.email.title",
    defaultMessage: "Email"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.contact.email.description",
    defaultMessage: "Send us your requests and concerns via email at "
  }), /*#__PURE__*/react.createElement("a", {
    href: "mailto:support@kix.co.il"
  }, "support@kix.co.il")), /*#__PURE__*/react.createElement("h2", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.contact.channel.title",
    defaultMessage: "Help Channel"
  })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.contact.channel.description",
    defaultMessage: "Logged in users may contact the support staff by joining "
  }), /*#__PURE__*/react.createElement("a", {
    href: "/nix/channels/help"
  }, "channel HELP!")));
}
;// CONCATENATED MODULE: ./components/help/components/cookies.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

function HelpCookies() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("section", {
    id: "legal-text-block_5fa329f452792",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "Effective Date: November 4th, 2020"), /*#__PURE__*/react.createElement("p", null, "At kix.co.il, trust is our number one priority and we always aim to be transparent about our practices. This Cookie Policy provides information about our use of cookies. Any Capitalized terms used in this Cookie Policy but not defined have the meaning set forth in our ", /*#__PURE__*/react.createElement("a", {
    href: "https://kix.co.il/help/privacy"
  }, "Privacy Policy"), ".")), /*#__PURE__*/react.createElement("section", {
    id: "legal-text-block_5fa32a1952793",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "What are Cookies?"), /*#__PURE__*/react.createElement("p", null), /*#__PURE__*/react.createElement("p", null, "We use cookies on our Sites and Service (as defined below). Cookies are small text files that a site or its service provider transfers to your computer or mobile device (if you allow). These cookies are unique to your account, browser, or device and enable the site or service provider to recognize your browser and/or device, and, if you have a registered account, associate it with your registered account. Session-based cookies last only while your browser is open and are automatically deleted when you close your browser. Persistent cookies last until you or your browser delete them or until they expire."), /*#__PURE__*/react.createElement("p", null), /*#__PURE__*/react.createElement("p", null, "We use cookies (both session and persistent) and similar technologies (collectively, \u201C", /*#__PURE__*/react.createElement("strong", null, "Cookies"), "\u201D). We use Cookies on the websites operated on kix.co.il, and our affiliates (collectively, the \u201C", /*#__PURE__*/react.createElement("strong", null, "Sites"), "\u201D) and in the products and services we provide (collectively, the \u201C", /*#__PURE__*/react.createElement("strong", null, "Service"), "\u201D). We also use trusted third party cookies."), /*#__PURE__*/react.createElement("p", null)), /*#__PURE__*/react.createElement("section", {
    id: "legal-text-block_5fa32a3552794",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "Information that is Automatically Collected and How kix.co.il Uses Cookies"), /*#__PURE__*/react.createElement("p", null), /*#__PURE__*/react.createElement("p", null, "We may use both session and persistent Cookies to convey information to us, such as: identify that you\u2019ve logged in to the Service; your Internet Protocol address; unique device identifiers; your browser settings and specification; and information about how you use the Service (e.g., the pages you view, the links you click, features and functionalities you utilize, how frequently you access the Service, and other actions you take on the Service). Cookies also allow us to track your usage of the Service over time."), /*#__PURE__*/react.createElement("p", null), /*#__PURE__*/react.createElement("p", null, "We use the following types of Cookies:"), /*#__PURE__*/react.createElement("p", null), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Operationally Necessary Cookies: "), "These Cookies allow you access to our Service or to make use of certain functionality."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Preferences"), ": These cookies allow our Site and Service to remember the choices that you\u2019ve made in the past, like what language you prefer, your timezone, or your username and password so you can automatically log in. These are provided by the platforms we use including Mattermost and other apps and platforms we maintain."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Security"), ": These cookies enable and support our security features and help us to detect malicious activity. These are mainly provided by our vendor of choice: Cloudflare."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Statistic and Performance:"), " These Cookies collect information about how you use the Site and Service and help us assess the performance of the Site and Service, such as which pages you visit and which links you click on. This information is aggregated and anonymized and used to improve the Site and Service functionality. These are disabled on most of our platforms but sometimes embedded components to external sites or used by systems that do not allow us an easy way to configure them otherwise."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Advertisement and Audience Tagging:"), " Some cookies will be collected by embedded components (for example youtube.com videos) which are not managed by our platform or website. We try to provide basic protection to users who do not wish to be tagged by these services, by proxying most requests to external websites. Do note that users who continue interacting with these elements (i.e. by clicking on embedded videos or visiting websites outside of our domains) are not protected by these safeguards and are possible being tagged and being tracked by cookies for advertisement purposes."))), /*#__PURE__*/react.createElement("section", {
    id: "legal-text-block_5fa32a8b52796",
    className: "block-legal-text"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "title dark"
  }, "How to Opt Out"), /*#__PURE__*/react.createElement("p", null, "If you would prefer not to accept Cookies or otherwise wish to disable our use of tracking technologies, most browsers and mobile devices allow you to change your settings so as to notify you when you receive cookies or other tracking technologies are being used, and to choose whether or not to accept/allow it. Most browsers also allow you to disable or delete existing cookies or to automatically reject future cookies. Please note, however, that if you don\u2019t accept Cookies or disable Cookies, you may not be able to access all portions or features of the Site or the Service."), /*#__PURE__*/react.createElement("p", null, "Certain tracking technologies we use are related to advertising networks, and through those technologies we may share certain information such as IP addresses. Please note that the information we share with those advertising networks might be combined with other information about you that those networks may have collected from other sources. To learn more about advertising networks and how to opt out of sharing information with them, please click ", /*#__PURE__*/react.createElement("a", {
    href: "https://optout.networkadvertising.org/?c=1",
    target: "_blank",
    rel: "noreferrer noopener"
  }, "here"), " and ", /*#__PURE__*/react.createElement("a", {
    href: "https://optout.aboutads.info/?c=2&lang=EN",
    target: "_blank",
    rel: "noreferrer noopener"
  }, "here"), ". If you\u2019re in the EU, you can find additional information about your choices with respect to advertising networks and online behavioral advertising by clicking ", /*#__PURE__*/react.createElement("a", {
    href: "https://www.youronlinechoices.com/",
    target: "_blank",
    rel: "noreferrer noopener"
  }, "here"), "."), /*#__PURE__*/react.createElement("p", null, "Certain tracking technologies we use involve the use of session replay scripts or other scripts that run directly from your browser. If you wish to disable these tracking technologies, you can install a third-party browser analytics blocker plug-in such as ", /*#__PURE__*/react.createElement("a", {
    href: "https://www.ghostery.com/products/",
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Ghostery"), "."), /*#__PURE__*/react.createElement("p", null, "If you have any questions about how we or our third-party service providers use cookies or other tracking technologies that aren\u2019t answered in this Cookie Policy, please contact us at ", /*#__PURE__*/react.createElement("a", {
    href: "mailto:support@kix.co.il"
  }, "support@kix.co.il"), ".")));
}
;// CONCATENATED MODULE: ./components/help/components/about.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


function HelpAbout() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", {
    className: "markdown__heading"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "help.about.title",
    defaultMessage: "About kix.co.il"
  })));
}
;// CONCATENATED MODULE: ./components/help/help_controller.tsx




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.














class HelpController extends react.PureComponent {
  componentDidUpdate() {
    // eslint-disable-next-line react/no-find-dom-node
    const helpControllerNode = react_dom.findDOMNode(this);

    if (helpControllerNode && helpControllerNode instanceof HTMLDivElement) {
      helpControllerNode.scrollIntoView();
    }
  }

  render() {
    return /*#__PURE__*/react.createElement("div", {
      className: "help-page"
    }, /*#__PURE__*/react.createElement("div", {
      className: "container col-sm-10 col-sm-offset-1"
    }, /*#__PURE__*/react.createElement(react_router/* Switch */.rs, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/messaging"),
      component: Messaging
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/composing"),
      component: HelpComposing
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/mentioning"),
      component: Mentioning
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/formatting"),
      component: HelpFormatting
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/attaching"),
      component: Attaching
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/commands"),
      component: HelpCommands
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/privacy"),
      component: HelpPrivacy
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/terms"),
      component: HelpTerms
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/contact"),
      component: HelpContact
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/cookies"),
      component: HelpCookies
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/about"),
      component: HelpAbout
    }))));
  }

}

_defineProperty(HelpController, "propTypes", {
  match: prop_types_default().shape({
    url: (prop_types_default()).string.isRequired
  }).isRequired
});

/***/ }),

/***/ 21671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useQuery)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41637);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64765);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5977);




// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

function useQuery() {
  return new URLSearchParams((0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .useLocation */ .TH)().search);
}

/***/ })

}]);
//# sourceMappingURL=784.9792625ad8c20c1e1bc7.js.map