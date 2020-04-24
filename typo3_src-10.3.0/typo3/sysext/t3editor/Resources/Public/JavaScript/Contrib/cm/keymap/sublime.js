!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../lib/codemirror"),require("../addon/search/searchcursor"),require("../addon/edit/matchbrackets")):"function"==typeof define&&define.amd?define(["../lib/codemirror","../addon/search/searchcursor","../addon/edit/matchbrackets"],e):e(CodeMirror)}((function(e){"use strict";var t=e.commands,n=e.Pos;function r(t,r){t.extendSelectionsBy((function(o){return t.display.shift||t.doc.extend||o.empty()?function(t,r,o){if(o<0&&0==r.ch)return t.clipPos(n(r.line-1));var i=t.getLine(r.line);if(o>0&&r.ch>=i.length)return t.clipPos(n(r.line+1,0));for(var l,a="start",s=r.ch,c=s,f=o<0?0:i.length,u=0;c!=f;c+=o,u++){var d=i.charAt(o<0?c-1:c),m="_"!=d&&e.isWordChar(d)?"w":"o";if("w"==m&&d.toUpperCase()==d&&(m="W"),"start"==a)"o"!=m?(a="in",l=m):s=c+o;else if("in"==a&&l!=m){if("w"==l&&"W"==m&&o<0&&c--,"W"==l&&"w"==m&&o>0){if(c==s+1){l="w";continue}c--}break}}return n(r.line,c)}(t.doc,o.head,r):r<0?o.from():o.to()}))}function o(t,r){if(t.isReadOnly())return e.Pass;t.operation((function(){for(var e=t.listSelections().length,o=[],i=-1,l=0;l<e;l++){var a=t.listSelections()[l].head;if(!(a.line<=i)){var s=n(a.line+(r?0:1),0);t.replaceRange("\n",s,null,"+insertLine"),t.indentLine(s.line,null,!0),o.push({head:s,anchor:s}),i=a.line+1}}t.setSelections(o)})),t.execCommand("indentAuto")}function i(t,r){for(var o=r.ch,i=o,l=t.getLine(r.line);o&&e.isWordChar(l.charAt(o-1));)--o;for(;i<l.length&&e.isWordChar(l.charAt(i));)++i;return{from:n(r.line,o),to:n(r.line,i),word:l.slice(o,i)}}function l(e,t){for(var n=e.listSelections(),r=[],o=0;o<n.length;o++){var i=n[o],l=e.findPosV(i.anchor,t,"line",i.anchor.goalColumn),a=e.findPosV(i.head,t,"line",i.head.goalColumn);l.goalColumn=null!=i.anchor.goalColumn?i.anchor.goalColumn:e.cursorCoords(i.anchor,"div").left,a.goalColumn=null!=i.head.goalColumn?i.head.goalColumn:e.cursorCoords(i.head,"div").left;var s={anchor:l,head:a};r.push(i),r.push(s)}e.setSelections(r)}t.goSubwordLeft=function(e){r(e,-1)},t.goSubwordRight=function(e){r(e,1)},t.scrollLineUp=function(e){var t=e.getScrollInfo();if(!e.somethingSelected()){var n=e.lineAtHeight(t.top+t.clientHeight,"local");e.getCursor().line>=n&&e.execCommand("goLineUp")}e.scrollTo(null,t.top-e.defaultTextHeight())},t.scrollLineDown=function(e){var t=e.getScrollInfo();if(!e.somethingSelected()){var n=e.lineAtHeight(t.top,"local")+1;e.getCursor().line<=n&&e.execCommand("goLineDown")}e.scrollTo(null,t.top+e.defaultTextHeight())},t.splitSelectionByLine=function(e){for(var t=e.listSelections(),r=[],o=0;o<t.length;o++)for(var i=t[o].from(),l=t[o].to(),a=i.line;a<=l.line;++a)l.line>i.line&&a==l.line&&0==l.ch||r.push({anchor:a==i.line?i:n(a,0),head:a==l.line?l:n(a)});e.setSelections(r,0)},t.singleSelectionTop=function(e){var t=e.listSelections()[0];e.setSelection(t.anchor,t.head,{scroll:!1})},t.selectLine=function(e){for(var t=e.listSelections(),r=[],o=0;o<t.length;o++){var i=t[o];r.push({anchor:n(i.from().line,0),head:n(i.to().line+1,0)})}e.setSelections(r)},t.insertLineAfter=function(e){return o(e,!1)},t.insertLineBefore=function(e){return o(e,!0)},t.selectNextOccurrence=function(t){var r=t.getCursor("from"),o=t.getCursor("to"),l=t.state.sublimeFindFullWord==t.doc.sel;if(0==e.cmpPos(r,o)){var a=i(t,r);if(!a.word)return;t.setSelection(a.from,a.to),l=!0}else{var s=t.getRange(r,o),c=l?new RegExp("\\b"+s+"\\b"):s,f=t.getSearchCursor(c,o),u=f.findNext();if(u||(u=(f=t.getSearchCursor(c,n(t.firstLine(),0))).findNext()),!u||function(t,n,r){for(var o=0;o<t.length;o++)if(0==e.cmpPos(t[o].from(),n)&&0==e.cmpPos(t[o].to(),r))return!0;return!1}(t.listSelections(),f.from(),f.to()))return;t.addSelection(f.from(),f.to())}l&&(t.state.sublimeFindFullWord=t.doc.sel)},t.skipAndSelectNextOccurrence=function(n){var r=n.getCursor("anchor"),o=n.getCursor("head");t.selectNextOccurrence(n),0!=e.cmpPos(r,o)&&n.doc.setSelections(n.doc.listSelections().filter((function(e){return e.anchor!=r||e.head!=o})))},t.addCursorToPrevLine=function(e){l(e,-1)},t.addCursorToNextLine=function(e){l(e,1)};function a(t){for(var r=t.listSelections(),o=[],i=0;i<r.length;i++){var l=r[i],a=l.head,s=t.scanForBracket(a,-1);if(!s)return!1;for(;;){var c=t.scanForBracket(a,1);if(!c)return!1;if(c.ch=="(){}[]".charAt("(){}[]".indexOf(s.ch)+1)){var f=n(s.pos.line,s.pos.ch+1);if(0!=e.cmpPos(f,l.from())||0!=e.cmpPos(c.pos,l.to())){o.push({anchor:f,head:c.pos});break}if(!(s=t.scanForBracket(s.pos,-1)))return!1}a=n(c.pos.line,c.pos.ch+1)}}return t.setSelections(o),!0}function s(e){return e?/\bpunctuation\b/.test(e)?e:void 0:null}function c(t,r){if(t.isReadOnly())return e.Pass;for(var o,i=t.listSelections(),l=[],a=0;a<i.length;a++){var s=i[a];if(!s.empty()){for(var c=s.from().line,f=s.to().line;a<i.length-1&&i[a+1].from().line==f;)f=i[++a].to().line;i[a].to().ch||f--,l.push(c,f)}}l.length?o=!0:l.push(t.firstLine(),t.lastLine()),t.operation((function(){for(var e=[],i=0;i<l.length;i+=2){var a=l[i],s=l[i+1],c=n(a,0),f=n(s),u=t.getRange(c,f,!1);r?u.sort():u.sort((function(e,t){var n=e.toUpperCase(),r=t.toUpperCase();return n!=r&&(e=n,t=r),e<t?-1:e==t?0:1})),t.replaceRange(u,c,f),o&&e.push({anchor:c,head:n(s+1,0)})}o&&t.setSelections(e,0)}))}function f(t,n){t.operation((function(){for(var r=t.listSelections(),o=[],l=[],a=0;a<r.length;a++){(c=r[a]).empty()?(o.push(a),l.push("")):l.push(n(t.getRange(c.from(),c.to())))}t.replaceSelections(l,"around","case");var s;for(a=o.length-1;a>=0;a--){var c=r[o[a]];if(!(s&&e.cmpPos(c.head,s)>0)){var f=i(t,c.head);s=f.from,t.replaceRange(n(f.word),f.from,f.to)}}}))}function u(t){var n=t.getCursor("from"),r=t.getCursor("to");if(0==e.cmpPos(n,r)){var o=i(t,n);if(!o.word)return;n=o.from,r=o.to}return{from:n,to:r,query:t.getRange(n,r),word:o}}function d(e,t){var r=u(e);if(r){var o=r.query,i=e.getSearchCursor(o,t?r.to:r.from);(t?i.findNext():i.findPrevious())?e.setSelection(i.from(),i.to()):(i=e.getSearchCursor(o,t?n(e.firstLine(),0):e.clipPos(n(e.lastLine()))),(t?i.findNext():i.findPrevious())?e.setSelection(i.from(),i.to()):r.word&&e.setSelection(r.from,r.to))}}t.selectScope=function(e){a(e)||e.execCommand("selectAll")},t.selectBetweenBrackets=function(t){if(!a(t))return e.Pass},t.goToBracket=function(t){t.extendSelectionsBy((function(r){var o=t.scanForBracket(r.head,1,s(t.getTokenTypeAt(r.head)));if(o&&0!=e.cmpPos(o.pos,r.head))return o.pos;var i=t.scanForBracket(r.head,-1,s(t.getTokenTypeAt(n(r.head.line,r.head.ch+1))));return i&&n(i.pos.line,i.pos.ch+1)||r.head}))},t.swapLineUp=function(t){if(t.isReadOnly())return e.Pass;for(var r=t.listSelections(),o=[],i=t.firstLine()-1,l=[],a=0;a<r.length;a++){var s=r[a],c=s.from().line-1,f=s.to().line;l.push({anchor:n(s.anchor.line-1,s.anchor.ch),head:n(s.head.line-1,s.head.ch)}),0!=s.to().ch||s.empty()||--f,c>i?o.push(c,f):o.length&&(o[o.length-1]=f),i=f}t.operation((function(){for(var e=0;e<o.length;e+=2){var r=o[e],i=o[e+1],a=t.getLine(r);t.replaceRange("",n(r,0),n(r+1,0),"+swapLine"),i>t.lastLine()?t.replaceRange("\n"+a,n(t.lastLine()),null,"+swapLine"):t.replaceRange(a+"\n",n(i,0),null,"+swapLine")}t.setSelections(l),t.scrollIntoView()}))},t.swapLineDown=function(t){if(t.isReadOnly())return e.Pass;for(var r=t.listSelections(),o=[],i=t.lastLine()+1,l=r.length-1;l>=0;l--){var a=r[l],s=a.to().line+1,c=a.from().line;0!=a.to().ch||a.empty()||s--,s<i?o.push(s,c):o.length&&(o[o.length-1]=c),i=c}t.operation((function(){for(var e=o.length-2;e>=0;e-=2){var r=o[e],i=o[e+1],l=t.getLine(r);r==t.lastLine()?t.replaceRange("",n(r-1),n(r),"+swapLine"):t.replaceRange("",n(r,0),n(r+1,0),"+swapLine"),t.replaceRange(l+"\n",n(i,0),null,"+swapLine")}t.scrollIntoView()}))},t.toggleCommentIndented=function(e){e.toggleComment({indent:!0})},t.joinLines=function(e){for(var t=e.listSelections(),r=[],o=0;o<t.length;o++){for(var i=t[o],l=i.from(),a=l.line,s=i.to().line;o<t.length-1&&t[o+1].from().line==s;)s=t[++o].to().line;r.push({start:a,end:s,anchor:!i.empty()&&l})}e.operation((function(){for(var t=0,o=[],i=0;i<r.length;i++){for(var l,a=r[i],s=a.anchor&&n(a.anchor.line-t,a.anchor.ch),c=a.start;c<=a.end;c++){var f=c-t;c==a.end&&(l=n(f,e.getLine(f).length+1)),f<e.lastLine()&&(e.replaceRange(" ",n(f),n(f+1,/^\s*/.exec(e.getLine(f+1))[0].length)),++t)}o.push({anchor:s||l,head:l})}e.setSelections(o,0)}))},t.duplicateLine=function(e){e.operation((function(){for(var t=e.listSelections().length,r=0;r<t;r++){var o=e.listSelections()[r];o.empty()?e.replaceRange(e.getLine(o.head.line)+"\n",n(o.head.line,0)):e.replaceRange(e.getRange(o.from(),o.to()),o.from())}e.scrollIntoView()}))},t.sortLines=function(e){c(e,!0)},t.sortLinesInsensitive=function(e){c(e,!1)},t.nextBookmark=function(e){var t=e.state.sublimeBookmarks;if(t)for(;t.length;){var n=t.shift(),r=n.find();if(r)return t.push(n),e.setSelection(r.from,r.to)}},t.prevBookmark=function(e){var t=e.state.sublimeBookmarks;if(t)for(;t.length;){t.unshift(t.pop());var n=t[t.length-1].find();if(n)return e.setSelection(n.from,n.to);t.pop()}},t.toggleBookmark=function(e){for(var t=e.listSelections(),n=e.state.sublimeBookmarks||(e.state.sublimeBookmarks=[]),r=0;r<t.length;r++){for(var o=t[r].from(),i=t[r].to(),l=t[r].empty()?e.findMarksAt(o):e.findMarks(o,i),a=0;a<l.length;a++)if(l[a].sublimeBookmark){l[a].clear();for(var s=0;s<n.length;s++)n[s]==l[a]&&n.splice(s--,1);break}a==l.length&&n.push(e.markText(o,i,{sublimeBookmark:!0,clearWhenEmpty:!1}))}},t.clearBookmarks=function(e){var t=e.state.sublimeBookmarks;if(t)for(var n=0;n<t.length;n++)t[n].clear();t.length=0},t.selectBookmarks=function(e){var t=e.state.sublimeBookmarks,n=[];if(t)for(var r=0;r<t.length;r++){var o=t[r].find();o?n.push({anchor:o.from,head:o.to}):t.splice(r--,0)}n.length&&e.setSelections(n,0)},t.smartBackspace=function(t){if(t.somethingSelected())return e.Pass;t.operation((function(){for(var r=t.listSelections(),o=t.getOption("indentUnit"),i=r.length-1;i>=0;i--){var l=r[i].head,a=t.getRange({line:l.line,ch:0},l),s=e.countColumn(a,null,t.getOption("tabSize")),c=t.findPosH(l,-1,"char",!1);if(a&&!/\S/.test(a)&&s%o==0){var f=new n(l.line,e.findColumn(a,s-o,o));f.ch!=l.ch&&(c=f)}t.replaceRange("",c,l,"+delete")}}))},t.delLineRight=function(e){e.operation((function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange("",t[r].anchor,n(t[r].to().line),"+delete");e.scrollIntoView()}))},t.upcaseAtCursor=function(e){f(e,(function(e){return e.toUpperCase()}))},t.downcaseAtCursor=function(e){f(e,(function(e){return e.toLowerCase()}))},t.setSublimeMark=function(e){e.state.sublimeMark&&e.state.sublimeMark.clear(),e.state.sublimeMark=e.setBookmark(e.getCursor())},t.selectToSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find();t&&e.setSelection(e.getCursor(),t)},t.deleteToSublimeMark=function(t){var n=t.state.sublimeMark&&t.state.sublimeMark.find();if(n){var r=t.getCursor(),o=n;if(e.cmpPos(r,o)>0){var i=o;o=r,r=i}t.state.sublimeKilled=t.getRange(r,o),t.replaceRange("",r,o)}},t.swapWithSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find();t&&(e.state.sublimeMark.clear(),e.state.sublimeMark=e.setBookmark(e.getCursor()),e.setCursor(t))},t.sublimeYank=function(e){null!=e.state.sublimeKilled&&e.replaceSelection(e.state.sublimeKilled,null,"paste")},t.showInCenter=function(e){var t=e.cursorCoords(null,"local");e.scrollTo(null,(t.top+t.bottom)/2-e.getScrollInfo().clientHeight/2)},t.findUnder=function(e){d(e,!0)},t.findUnderPrevious=function(e){d(e,!1)},t.findAllUnder=function(e){var t=u(e);if(t){for(var n=e.getSearchCursor(t.query),r=[],o=-1;n.findNext();)r.push({anchor:n.from(),head:n.to()}),n.from().line<=t.from.line&&n.from().ch<=t.from.ch&&o++;e.setSelections(r,o)}};var m=e.keyMap;m.macSublime={"Cmd-Left":"goLineStartSmart","Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-Left":"goSubwordLeft","Ctrl-Right":"goSubwordRight","Ctrl-Alt-Up":"scrollLineUp","Ctrl-Alt-Down":"scrollLineDown","Cmd-L":"selectLine","Shift-Cmd-L":"splitSelectionByLine",Esc:"singleSelectionTop","Cmd-Enter":"insertLineAfter","Shift-Cmd-Enter":"insertLineBefore","Cmd-D":"selectNextOccurrence","Shift-Cmd-Space":"selectScope","Shift-Cmd-M":"selectBetweenBrackets","Cmd-M":"goToBracket","Cmd-Ctrl-Up":"swapLineUp","Cmd-Ctrl-Down":"swapLineDown","Cmd-/":"toggleCommentIndented","Cmd-J":"joinLines","Shift-Cmd-D":"duplicateLine",F5:"sortLines","Cmd-F5":"sortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Cmd-F2":"toggleBookmark","Shift-Cmd-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Cmd-K Cmd-D":"skipAndSelectNextOccurrence","Cmd-K Cmd-K":"delLineRight","Cmd-K Cmd-U":"upcaseAtCursor","Cmd-K Cmd-L":"downcaseAtCursor","Cmd-K Cmd-Space":"setSublimeMark","Cmd-K Cmd-A":"selectToSublimeMark","Cmd-K Cmd-W":"deleteToSublimeMark","Cmd-K Cmd-X":"swapWithSublimeMark","Cmd-K Cmd-Y":"sublimeYank","Cmd-K Cmd-C":"showInCenter","Cmd-K Cmd-G":"clearBookmarks","Cmd-K Cmd-Backspace":"delLineLeft","Cmd-K Cmd-0":"unfoldAll","Cmd-K Cmd-J":"unfoldAll","Ctrl-Shift-Up":"addCursorToPrevLine","Ctrl-Shift-Down":"addCursorToNextLine","Cmd-F3":"findUnder","Shift-Cmd-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Cmd-[":"fold","Shift-Cmd-]":"unfold","Cmd-I":"findIncremental","Shift-Cmd-I":"findIncrementalReverse","Cmd-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"macDefault"},e.normalizeKeyMap(m.macSublime),m.pcSublime={"Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-T":"transposeChars","Alt-Left":"goSubwordLeft","Alt-Right":"goSubwordRight","Ctrl-Up":"scrollLineUp","Ctrl-Down":"scrollLineDown","Ctrl-L":"selectLine","Shift-Ctrl-L":"splitSelectionByLine",Esc:"singleSelectionTop","Ctrl-Enter":"insertLineAfter","Shift-Ctrl-Enter":"insertLineBefore","Ctrl-D":"selectNextOccurrence","Shift-Ctrl-Space":"selectScope","Shift-Ctrl-M":"selectBetweenBrackets","Ctrl-M":"goToBracket","Shift-Ctrl-Up":"swapLineUp","Shift-Ctrl-Down":"swapLineDown","Ctrl-/":"toggleCommentIndented","Ctrl-J":"joinLines","Shift-Ctrl-D":"duplicateLine",F9:"sortLines","Ctrl-F9":"sortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Ctrl-F2":"toggleBookmark","Shift-Ctrl-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Ctrl-K Ctrl-D":"skipAndSelectNextOccurrence","Ctrl-K Ctrl-K":"delLineRight","Ctrl-K Ctrl-U":"upcaseAtCursor","Ctrl-K Ctrl-L":"downcaseAtCursor","Ctrl-K Ctrl-Space":"setSublimeMark","Ctrl-K Ctrl-A":"selectToSublimeMark","Ctrl-K Ctrl-W":"deleteToSublimeMark","Ctrl-K Ctrl-X":"swapWithSublimeMark","Ctrl-K Ctrl-Y":"sublimeYank","Ctrl-K Ctrl-C":"showInCenter","Ctrl-K Ctrl-G":"clearBookmarks","Ctrl-K Ctrl-Backspace":"delLineLeft","Ctrl-K Ctrl-0":"unfoldAll","Ctrl-K Ctrl-J":"unfoldAll","Ctrl-Alt-Up":"addCursorToPrevLine","Ctrl-Alt-Down":"addCursorToNextLine","Ctrl-F3":"findUnder","Shift-Ctrl-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Ctrl-[":"fold","Shift-Ctrl-]":"unfold","Ctrl-I":"findIncremental","Shift-Ctrl-I":"findIncrementalReverse","Ctrl-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"pcDefault"},e.normalizeKeyMap(m.pcSublime);var h=m.default==m.macDefault;m.sublime=h?m.macSublime:m.pcSublime}));