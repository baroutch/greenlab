!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}((function(t){"use strict";var e=t.Pos;function r(t,e,r){return r?t.indexOf(e)>=0:0==t.lastIndexOf(e,0)}t.registerHelper("hint","xml",(function(n,s){var i=s&&s.schemaInfo,a=s&&s.quoteChar||'"',o=s&&s.matchInMiddle;if(i){var l=n.getCursor(),g=n.getTokenAt(l);if(g.end>l.ch&&(g.end=l.ch,g.string=g.string.slice(0,l.ch-g.start)),(x=t.innerMode(n.getMode(),g.state)).mode.xmlCurrentTag){var f,c,h=[],u=!1,d=/\btag\b/.test(g.type)&&!/>$/.test(g.string),p=d&&/^\w/.test(g.string);if(p){var m=n.getLine(l.line).slice(Math.max(0,g.start-2),g.start),v=/<\/$/.test(m)?"close":/<$/.test(m)?"open":null;v&&(c=g.start-("close"==v?2:1))}else d&&"<"==g.string?v="open":d&&"</"==g.string&&(v="close");var y=x.mode.xmlCurrentTag(x.state);if(!d&&!y||v){p&&(f=g.string),u=v;var x,C=x.mode.xmlCurrentContext?x.mode.xmlCurrentContext(x.state):[],b=(x=C.length&&C[C.length-1])&&i[x],O=x?b&&b.children:i["!top"];if(O&&"close"!=v)for(var w=0;w<O.length;++w)f&&!r(O[w],f,o)||h.push("<"+O[w]);else if("close"!=v)for(var A in i)!i.hasOwnProperty(A)||"!top"==A||"!attrs"==A||f&&!r(A,f,o)||h.push("<"+A);x&&(!f||"close"==v&&r(x,f,o))&&h.push("</"+x+">")}else{var M=(b=y&&i[y.name])&&b.attrs,P=i["!attrs"];if(!M&&!P)return;if(M){if(P){var $={};for(var I in P)P.hasOwnProperty(I)&&($[I]=P[I]);for(var I in M)M.hasOwnProperty(I)&&($[I]=M[I]);M=$}}else M=P;if("string"==g.type||"="==g.string){var T,j=(m=n.getRange(e(l.line,Math.max(0,l.ch-60)),e(l.line,"string"==g.type?g.start:g.end))).match(/([^\s\u00a0=<>\"\']+)=$/);if(!j||!M.hasOwnProperty(j[1])||!(T=M[j[1]]))return;if("function"==typeof T&&(T=T.call(this,n)),"string"==g.type){f=g.string;var q=0;/['"]/.test(g.string.charAt(0))&&(a=g.string.charAt(0),f=g.string.slice(1),q++);var L=g.string.length;if(/['"]/.test(g.string.charAt(L-1))&&(a=g.string.charAt(L-1),f=g.string.substr(q,L-2)),q){var k=n.getLine(l.line);k.length>g.end&&k.charAt(g.end)==a&&g.end++}u=!0}for(w=0;w<T.length;++w)f&&!r(T[w],f,o)||h.push(a+T[w]+a)}else for(var H in"attribute"==g.type&&(f=g.string,u=!0),M)!M.hasOwnProperty(H)||f&&!r(H,f,o)||h.push(H)}return{list:h,from:u?e(l.line,null==c?g.start:c):l,to:u?e(l.line,g.end):l}}}}))}));