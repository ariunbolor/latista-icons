/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Latista\'">' + entity + '</span>' + html;
	}
	var icons = {
		'latista-issue': '&#xe91f;',
		'latista-logout': '&#xe920;',
		'latista-dropdown-arrow': '&#xe921;',
		'latista-color-bucket': '&#xe922;',
		'latista-voice': '&#xe901;',
		'latista-user': '&#xe902;',
		'latista-text': '&#xe904;',
		'latista-settings': '&#xe906;',
		'latista-search': '&#xe907;',
		'latista-sync': '&#xe905;',
		'latista-back-arrow': '&#xe91c;',
		'latista-redo': '&#xe909;',
		'latista-undo': '&#xe903;',
		'latista-forward-arrow': '&#xe912;',
		'latista-pen': '&#xe90b;',
		'latista-line': '&#xe90d;',
		'latista-issue-list': '&#xe90e;',
		'latista-issue-entry': '&#xe90f;',
		'latista-info': '&#xe910;',
		'latista-image': '&#xe911;',
		'latista-favorite': '&#xe913;',
		'latista-delete': '&#xe915;',
		'latista-contact-list': '&#xe916;',
		'latista-company': '&#xe917;',
		'latista-close': '&#xe919;',
		'latista-circle': '&#xe91a;',
		'latista-calendar': '&#xe91b;',
		'latista-attachment': '&#xe91d;',
		'latista-arrow': '&#xe91e;',
		'latista-camera': '&#xe900;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/latista-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
