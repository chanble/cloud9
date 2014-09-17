/**
 * split code view Module for the Cloud9 IDE
 *
 * Contact me chanbo.cn@gmail.com
 * @copyright 2014, Chen Bo
 *
 * @license GPLv3 <http://www.gnu.org/licenses/gpl.txt>
 */

define(function(require, exports, module) {
"use strict";
	var ext = require("core/ext");
    var ide = require("core/ide");
    var settings = require("core/settings");
	var menus = require("ext/menus/menus");
    var panels = require("ext/panels/panels");
    var editors = require("ext/editors/editors");
    var anims = require("ext/anims/anims");
	//var commands = require("ext/commands/commands");

	module.exports = ext.register("ext/split/split", {
		dev    : "Chen Bo",
		name   : "split",
		alone  : true,
		type   : ext.GENERAL,
		nodes : [],
		init : function(){
            var _self = this;
            //_self.add();
			menus.addItemByPath("View/Split", new apf.item({
				onclick : function(){

				}
			}), 100);
			menus.addItemByPath("View/Split/Vertical Split", new apf.item({
				onclick : function(){

				}
			}), 100);
			menus.addItemByPath("View/Split/Horizontal Split", new apf.item({
				onclick : function(){

				}
			}), 100);
		},
		add : function(){

		},
		destroy : function(){
			menus.remove("View/Split/Vertical Split");
			menus.remove("View/Split/Horizontal Split");
			this.$destroy();
		}
	});

});
