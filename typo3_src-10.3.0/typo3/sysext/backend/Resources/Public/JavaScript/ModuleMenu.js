/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
define(["require","exports","./Enum/Viewport/ScaffoldIdentifier","jquery","./Storage/Persistent","./Viewport","./Event/ClientRequest","./Event/TriggerRequest"],(function(e,t,n,o,a,i,d,r){"use strict";class l{constructor(){this.loadedModule=null,this.loadedNavigationComponentId="",o(()=>this.initialize())}static getCollapsedMainMenuItems(){return a.isset("modulemenu")?JSON.parse(a.get("modulemenu")):{}}static addCollapsedMainMenuItem(e){const t=l.getCollapsedMainMenuItems();t[e]=!0,a.set("modulemenu",JSON.stringify(t))}static removeCollapseMainMenuItem(e){const t=this.getCollapsedMainMenuItems();delete t[e],a.set("modulemenu",JSON.stringify(t))}static includeId(e,t){if(!e.navigationComponentId&&!e.navigationFrameScript)return t;let n="";return n="TYPO3/CMS/Backend/PageTree/PageTreeElement"===e.navigationComponentId?"web":e.name.split("_")[0],top.fsMod.recentIds[n]&&(t="id="+top.fsMod.recentIds[n]+"&"+t),t}static toggleMenu(e){i.NavigationContainer.cleanup();const t=o(n.ScaffoldIdentifierEnum.scaffold);void 0===e&&(e=t.hasClass("scaffold-modulemenu-expanded")),t.toggleClass("scaffold-modulemenu-expanded",!e),e||o(".scaffold").removeClass("scaffold-search-expanded").removeClass("scaffold-toolbar-expanded"),a.set("BackendComponents.States.typo3-module-menu",{collapsed:e}),i.doLayout()}static getRecordFromName(e){const t=o("#"+e);return{name:e,navigationComponentId:t.data("navigationcomponentid"),navigationFrameScript:t.data("navigationframescript"),navigationFrameScriptParam:t.data("navigationframescriptparameters"),link:t.find("a").data("link")}}static highlightModuleMenuItem(e){o(".modulemenu-item.active").removeClass("active"),o("#"+e).addClass("active")}refreshMenu(){o.ajax(TYPO3.settings.ajaxUrls.modulemenu).done(e=>{o("#menu").replaceWith(e.menu),top.currentModuleLoaded&&l.highlightModuleMenuItem(top.currentModuleLoaded),i.doLayout()})}reloadFrames(){i.NavigationContainer.refresh(),i.ContentContainer.refresh()}showModule(e,t,n){t=t||"";const o=l.getRecordFromName(e);return this.loadModuleComponents(o,t,new d("typo3.showModule",n?n.originalEvent:null))}initialize(){const e=this;let t=o.Deferred();if(t.resolve(),top.startInModule&&top.startInModule[0]&&o("#"+top.startInModule[0]).length>0)t=this.showModule(top.startInModule[0],top.startInModule[1]);else{const e=o(".t3js-mainmodule:first");e.attr("id")&&(t=this.showModule(e.attr("id")))}t.then(()=>{e.initializeEvents()})}initializeEvents(){o(document).on("click",".modulemenu-group .modulemenu-group-header",e=>{const t=o(e.currentTarget).parent(".modulemenu-group"),n=t.find(".modulemenu-group-container");i.NavigationContainer.cleanup(),t.hasClass("expanded")?(l.addCollapsedMainMenuItem(t.attr("id")),t.addClass("collapsed").removeClass("expanded"),n.stop().slideUp().promise().done(()=>{i.doLayout()})):(l.removeCollapseMainMenuItem(t.attr("id")),t.addClass("expanded").removeClass("collapsed"),n.stop().slideDown().promise().done(()=>{i.doLayout()}))}),o(document).on("click",".modulemenu-item,.t3-menuitem-submodule",e=>{e.preventDefault(),this.showModule(o(e.currentTarget).attr("id"),"",e)}),o(document).on("click",".t3js-topbar-button-modulemenu",e=>{e.preventDefault(),l.toggleMenu()}),o(document).on("click",".t3js-scaffold-content-overlay",e=>{e.preventDefault(),l.toggleMenu(!0)}),o(document).on("click",".t3js-topbar-button-navigationcomponent",e=>{e.preventDefault(),i.NavigationContainer.toggle()})}loadModuleComponents(e,t,n){const a=e.name,d=i.ContentContainer.beforeSetUrl(n);return d.then(o.proxy(()=>{e.navigationComponentId?this.loadNavigationComponent(e.navigationComponentId):e.navigationFrameScript?(i.NavigationContainer.show("typo3-navigationIframe"),this.openInNavFrame(e.navigationFrameScript,e.navigationFrameScriptParam,new r("typo3.loadModuleComponents",n))):i.NavigationContainer.hide(),l.highlightModuleMenuItem(a),this.loadedModule=a,t=l.includeId(e,t),this.openInContentFrame(e.link,t,new r("typo3.loadModuleComponents",n)),top.currentSubScript=e.link,top.currentModuleLoaded=a,i.doLayout()},this)),d}loadNavigationComponent(t){const n=this;if(i.NavigationContainer.show(t),t===this.loadedNavigationComponentId)return;const a=t.replace(/[/]/g,"_");""!==this.loadedNavigationComponentId&&o("#navigationComponent-"+this.loadedNavigationComponentId.replace(/[/]/g,"_")).hide(),o('.t3js-scaffold-content-navigation [data-component="'+t+'"]').length<1&&o(".t3js-scaffold-content-navigation").append(o("<div />",{class:"scaffold-content-navigation-component","data-component":t,id:"navigationComponent-"+a})),e([t],e=>{e.initialize("#navigationComponent-"+a),i.NavigationContainer.show(t),n.loadedNavigationComponentId=t})}openInNavFrame(e,t,n){const o=e+(t?(e.includes("?")?"&":"?")+t:""),a=i.NavigationContainer.getUrl(),d=i.NavigationContainer.setUrl(e,new r("typo3.openInNavFrame",n));return a!==o&&("resolved"===d.state()?i.NavigationContainer.refresh():d.then(i.NavigationContainer.refresh)),d}openInContentFrame(e,t,n){let o;if(top.nextLoadModuleUrl)o=i.ContentContainer.setUrl(top.nextLoadModuleUrl,new r("typo3.openInContentFrame",n)),top.nextLoadModuleUrl="";else{const a=e+(t?(e.includes("?")?"&":"?")+t:"");o=i.ContentContainer.setUrl(a,new r("typo3.openInContentFrame",n))}return o}}return top.TYPO3.ModuleMenu||(top.TYPO3.ModuleMenu={App:new l}),top.TYPO3.ModuleMenu}));