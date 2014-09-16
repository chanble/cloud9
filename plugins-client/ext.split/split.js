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
	var menus = require("ext/menus/menus");
	//var commands = require("ext/commands/commands");

	module.exports = ext.register("ext/split/split", {
		dev    : "Chen Bo",
		name   : "split",
		alone  : true,
		type   : ext.GENERAL,
		init : function(){
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
		destroy : function(){
			menus.remove("View/Split/Vertical Split");
			menus.remove("View/Split/Horizontal Split");
			this.$destroy();
		}
	});

});
