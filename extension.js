/*
 * Modified version of add-username-toppanel by brendaw (https://github.com/brendaw/add-username-toppanel)
 * This extention show the cluser position for 42 school
 */

const Clutter = imports.gi.Clutter;
const St = imports.gi.St;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;

let label;
let aggregateMenu;
let children;

function init() {
	let text = GLib.get_host_name();
	let splitHostname = text.split('.');
	if (splitHostname.length > 1)
		text = splitHostname[0];
	label = new St.Label({ text: text, y_align: Clutter.ActorAlign.CENTER, style_class: "hostname-label" });
	aggregateMenu = Main.panel.statusArea["aggregateMenu"];
	powerIndicator = aggregateMenu._power.indicators;
}

function enable() {
	powerIndicator.add_child(label);
}

function disable() {
	powerIndicator.remove_child(label);
}
