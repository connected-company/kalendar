(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["chunk-7b61c074"],{"8a52":function(e,t,n){},"8e6c":function(e,t,n){"use strict";var r=n("8a52"),a=n.n(r);a.a},ac6c:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.cellData.visible?n("li",{staticClass:"kalendar-cell",class:{selected:e.selected,"is-an-hour":(e.index+1)%6===0,"has-events":e.cell_events&&e.cell_events.length>0,"being-created":!!e.being_created||e.hasPopups},style:"\n    height: "+e.kalendar_options.cell_height+"px;\n  ",on:{mouseover:function(t){return t.target!==t.currentTarget?null:e.mouseMove()},mousedown:function(t){return t.target!==t.currentTarget?null:e.mouseDown()},mouseup:function(t){return e.mouseUp()}}},e._l(e.cell_events,function(t,r){return e.cell_events&&e.cell_events.length?n("KalendarEvent",{key:r,style:"z-index: 10",attrs:{event:t,total:e.cell_events.length,index:r,overlaps:e.overlapValue}}):e._e()}),1):e._e()},a=[],s=(n("8e6e"),n("bd86"));n("7514"),n("ac6a"),n("456d");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var c=window.kalendarHelpers.cloneObject,o={props:["creator","index","cellData","constructedEvents","temporaryEvent"],inject:["kalendar_options"],components:{KalendarEvent:function(){return n.e("chunk-ff267764").then(n.bind(null,"b9bb"))}},computed:{cell_events:function(){var e=[];return this.completed_events&&(e=e.concat(this.completed_events)),this.being_created&&(e=e.concat(this.being_created)),e},completed_events:function(){return this.constructedEvents&&this.constructedEvents.hasOwnProperty(this.cellData.value)&&this.constructedEvents[this.cellData.value]},being_created:function(){return this.temporaryEvent&&this.temporaryEvent.start.value===this.cellData.value&&this.temporaryEvent},overlappingEvents:function(){var e=this;return!this.constructedEvents||this.cell_events.length<1?[]:Object.keys(this.constructedEvents).map(function(t){return e.constructedEvents[t]}).flat().filter(function(t){var n=new Date(e.cellData.value),r=new Date(t.start.value),a=new Date(t.end.value);return r<n&&a>n})},overlapValue:function(){var e=this.overlappingEvents.length;return e>2?2:e},selected:function(){return this.cell_events&&this.cell_events.length>0},hasPopups:function(){return this.selected&&!!this.cell_events.find(function(e){return"popup-initiated"===e.status})}},methods:{mouseDown:function(){if(this.creator.creating)this.mouseUp();else{var e=this.kalendar_options,t=e.read_only,n=e.overlap,r=e.past_event_creation;if(!t){if(!1===r){var a=kalendarHelpers.getLocaleTime(new Date);if(new Date(a)>new Date(this.cellData.value))return void this.mouseUp()}if(n||!(this.cell_events.length>0)){this.$kalendar.closePopups();var s={creating:!0,original_starting_cell:c(this.cellData),starting_cell:c(this.cellData),current_cell:c(this.cellData),ending_cell:c(this.cellData)};this.$emit("select",s)}}}},mouseMove:function(){var e=this.kalendar_options,t=e.read_only;e.overlap;if(!t&&(!this.creator||this.creator.creating)){var n=this.creator,r=n.starting_cell,a=n.original_starting_cell,s=n.creating,l=this.cellData.index>=r.index&&r.index===a.index;if(s){var c=i({},this.creator,{current_cell:this.cellData,ending_cell:this.cellData,direction:l?"normal":"reverse"});this.$emit("select",c)}}},mouseUp:function(){this.kalendar_options.read_only||this.creator.creating&&this.$emit("initiatePopup")},resetCreator:function(){this.$emit("reset")}}},u=o,h=(n("8e6c"),n("2877")),v=Object(h["a"])(u,r,a,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-7b61c074.46d4858c.js.map