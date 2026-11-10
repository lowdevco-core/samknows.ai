/**
 * samknows.ai — page behaviour: reading progress, contents scrollspy, code copy.
 * Vanilla JS, progressive enhancement only.
 */
(function () {
	'use strict';

	var ROOT_SELECTOR = '.gz-single';
	var WPM = 220;

	/* ------------------------------------------------------------------
	 * Utilities
	 * --------------------------------------------------------------- */

	function $(sel, ctx) {
		return (ctx || document).querySelector(sel);
	}

	function $$(sel, ctx) {
		return Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
	}

	function prefersReducedMotion() {
		return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}

	/* ------------------------------------------------------------------
	 * 1 · Reading progress
	 * --------------------------------------------------------------- */

	function initProgress() {
		var bar = document.getElementById('gzProgress');
		var article = $(ROOT_SELECTOR + ' .gz-article');

		if (!bar || !article || bar.dataset.gzBound === '1') {
			return;
		}

		bar.dataset.gzBound = '1';

		var ticking = false;

		function update() {
			ticking = false;

			var rect = article.getBoundingClientRect();
			var start = window.pageYOffset + rect.top;
			var span = article.offsetHeight - window.innerHeight;
			var pct;

			if (span <= 0) {
				pct = window.pageYOffset > start ? 100 : 0;
			} else {
				pct = ((window.pageYOffset - start) / span) * 100;
			}

			bar.style.width = Math.min(100, Math.max(0, pct)).toFixed(2) + '%';
		}

		function onScroll() {
			if (!ticking) {
				ticking = true;
				window.requestAnimationFrame(update);
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });
		update();
	}

	/* ------------------------------------------------------------------
	 * 2 · Contents scrollspy
	 * The list itself is rendered by PHP; this only tracks the active item.
	 * --------------------------------------------------------------- */

	function initScrollspy() {
		var article = $(ROOT_SELECTOR + ' .gz-article');

		if (!article) {
			return;
		}

		var links = $$(ROOT_SELECTOR + ' .gz-toc a[data-for]');

		if (!links.length) {
			return;
		}

		var headings = links
			.map(function (a) { return document.getElementById(a.getAttribute('data-for')); })
			.filter(Boolean)
			// De-duplicate: desktop rail and mobile drawer point at the same headings.
			.filter(function (el, i, all) { return all.indexOf(el) === i; });

		if (!headings.length) {
			return;
		}

		function setActive(id) {
			links.forEach(function (a) {
				a.setAttribute('aria-current', a.getAttribute('data-for') === id ? 'true' : 'false');
			});
		}

		if ('IntersectionObserver' in window) {
			var visible = {};

			var io = new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						visible[entry.target.id] = entry.boundingClientRect.top;
					} else {
						delete visible[entry.target.id];
					}
				});

				var best = null;
				var bestTop = Infinity;

				Object.keys(visible).forEach(function (id) {
					if (visible[id] < bestTop) {
						bestTop = visible[id];
						best = id;
					}
				});

				if (best) {
					setActive(best);
				}
			}, {
				// Activates a heading once it reaches the upper third of the
				// viewport, which is where the eye actually is while reading.
				rootMargin: '-88px 0px -70% 0px',
				threshold: 0
			});

			headings.forEach(function (h) { io.observe(h); });
		}

		setActive(headings[0].id);

		// Close the mobile drawer once a destination is picked.
		var drawer = $(ROOT_SELECTOR + ' .gz-toc-m');

		if (drawer && drawer.dataset.gzBound !== '1') {
			drawer.dataset.gzBound = '1';
			drawer.addEventListener('click', function (e) {
				if (e.target.closest('a')) {
					drawer.open = false;
				}
			});
		}
	}

	/* ------------------------------------------------------------------
	 * 3 · Code blocks — wrap every <pre> and give it a copy button
	 *
	 * Runs against raw <pre> elements, so it covers Gutenberg's code block,
	 * Classic-editor markup and raw HTML posted through the REST API alike.
	 * --------------------------------------------------------------- */

	var LANG_LABELS = {
		js: 'JavaScript', javascript: 'JavaScript', ts: 'TypeScript',
		php: 'PHP', html: 'HTML', css: 'CSS', scss: 'SCSS',
		json: 'JSON', sql: 'SQL', bash: 'Bash', shell: 'Shell',
		python: 'Python', py: 'Python', yaml: 'YAML', xml: 'XML',
		md: 'Markdown', markdown: 'Markdown', text: 'Snippet'
	};

	function detectLanguage(pre) {
		var code = pre.querySelector('code');
		var source = ((code && code.className) || '') + ' ' + pre.className;
		var match = source.match(/(?:language|lang|brush)[-:]([a-z0-9+#]+)/i);

		if (!match) {
			return 'Snippet';
		}

		var key = match[1].toLowerCase();

		return LANG_LABELS[key] || key.toUpperCase();
	}

	function initCodeBlocks() {
		$$(ROOT_SELECTOR + ' .gz-article pre').forEach(function (pre) {

			if (pre.closest('.gz-code')) {
				return;
			}

			var wrap = document.createElement('div');
			wrap.className = 'gz-code';

			var bar = document.createElement('div');
			bar.className = 'gz-code__bar';

			var name = document.createElement('span');
			name.className = 'gz-code__name';
			name.textContent = detectLanguage(pre);

			var btn = document.createElement('button');
			btn.type = 'button';
			btn.className = 'gz-copy';
			btn.textContent = 'Copy';
			btn.setAttribute('aria-label', 'Copy code to clipboard');

			bar.appendChild(name);
			bar.appendChild(btn);

			pre.parentNode.insertBefore(wrap, pre);
			wrap.appendChild(bar);
			wrap.appendChild(pre);
		});
	}

	/* ------------------------------------------------------------------
	 * 4 · Tables — give every bare table its own horizontal scroller so the
	 *     page body never scrolls sideways on a phone.
	 * --------------------------------------------------------------- */

	function initTables() {
		$$(ROOT_SELECTOR + ' .gz-article table').forEach(function (table) {

			if (table.closest('.gz-table') || table.closest('.wp-block-table')) {
				return;
			}

			var wrap = document.createElement('div');
			wrap.className = 'gz-table';
			wrap.setAttribute('tabindex', '0');
			wrap.setAttribute('role', 'region');
			wrap.setAttribute('aria-label', 'Table, scrollable');

			table.parentNode.insertBefore(wrap, table);
			wrap.appendChild(table);
		});
	}

	/* ------------------------------------------------------------------
	 * 5 · Copy interactions
	 * --------------------------------------------------------------- */

	function flash(btn, label) {
		var original = btn.dataset.gzLabel || btn.textContent;

		btn.dataset.gzLabel = original;
		btn.textContent = label;
		btn.dataset.done = '1';

		window.setTimeout(function () {
			btn.textContent = original;
			delete btn.dataset.done;
		}, 1800);
	}

	function copy(text) {
		if (navigator.clipboard && window.isSecureContext) {
			return navigator.clipboard.writeText(text);
		}

		// Fallback for non-HTTPS contexts (local dev, staging without SSL).
		return new Promise(function (resolve, reject) {
			var ta = document.createElement('textarea');

			ta.value = text;
			ta.setAttribute('readonly', '');
			ta.style.position = 'fixed';
			ta.style.top = '-1000px';
			document.body.appendChild(ta);
			ta.select();

			try {
				document.execCommand('copy') ? resolve() : reject();
			} catch (err) {
				reject(err);
			} finally {
				document.body.removeChild(ta);
			}
		});
	}

	function initCopy() {
		if (document.body.dataset.gzCopyBound === '1') {
			return;
		}

		document.body.dataset.gzCopyBound = '1';

		// Delegated, so blocks injected later are covered automatically.
		document.addEventListener('click', function (e) {

			var codeBtn = e.target.closest(ROOT_SELECTOR + ' .gz-copy');

			if (codeBtn) {
				var pre = codeBtn.closest('.gz-code');
				pre = pre && pre.querySelector('pre');

				if (pre) {
					copy(pre.innerText).then(
						function () { flash(codeBtn, 'Copied ★'); },
						function () { flash(codeBtn, 'Press Ctrl+C'); }
					);
				}
				return;
			}

			var linkBtn = e.target.closest(ROOT_SELECTOR + ' .gz-copy-link');

			if (linkBtn) {
				copy(linkBtn.getAttribute('data-url') || window.location.href).then(
					function () { flash(linkBtn, 'Copied ★'); },
					function () { flash(linkBtn, 'Failed'); }
				);
			}
		});
	}

	/* ------------------------------------------------------------------
	 * 7 · Deep links — offset for the sticky header when arriving at #anchor
	 * --------------------------------------------------------------- */

	function initHashOffset() {
		if (!window.location.hash) {
			return;
		}

		var target = document.getElementById(window.location.hash.slice(1));

		if (!target || !target.closest(ROOT_SELECTOR)) {
			return;
		}

		window.requestAnimationFrame(function () {
			target.scrollIntoView({
				behavior: prefersReducedMotion() ? 'auto' : 'smooth',
				block: 'start'
			});
		});
	}

	/* ------------------------------------------------------------------
	 * Boot
	 * --------------------------------------------------------------- */

	function init() {
		if (!$(ROOT_SELECTOR)) {
			return;
		}

		initCodeBlocks();
		initTables();
		initProgress();
		initScrollspy();
		initCopy();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function () {
			init();
			initHashOffset();
		});
	} else {
		init();
		initHashOffset();
	}

})();
