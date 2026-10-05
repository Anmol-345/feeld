export const stripSensitiveParams = `
(function (sensitiveNames, allowlist) {
  try {
    var loc = window.location;
    if (!loc) { return; }

    function isSensitive(name) {
      return sensitiveNames.indexOf(String(name).toLowerCase()) !== -1;
    }

    function isAllowedOnStrictRoute(name) {
      var lower = String(name).toLowerCase();
      if (allowlist.exact.indexOf(lower) !== -1) { return true; }
      for (var i = 0; i < allowlist.prefixes.length; i++) {
        if (lower.indexOf(allowlist.prefixes[i]) === 0) { return true; }
      }
      return false;
    }

    function cleanUrl(value, applyStrictAllowlist) {
      var parsed;
      try { parsed = new URL(value, loc.origin); } catch (e) { return value; }
      var names = [];
      parsed.searchParams.forEach(function (unused, key) { names.push(key); });
      var changed = false;
      for (var i = 0; i < names.length; i++) {
        var drop = applyStrictAllowlist ? !isAllowedOnStrictRoute(names[i]) : isSensitive(names[i]);
        if (drop) { parsed.searchParams.delete(names[i]); changed = true; }
      }
      return changed ? parsed.toString() : value;
    }

    // 1. The address bar. Only rewrite when something changed, so a clean URL is untouched.
    var pathname = loc.pathname.replace(/\\/+$/, "") || "/";
    var strict = allowlist.pathnames.indexOf(pathname) !== -1;
    var cleanedHref = cleanUrl(loc.href, strict);
    if (cleanedHref !== loc.href) {
      window.history.replaceState(window.history.state, "", cleanedHref);
    }

    // 2. AppsFlyer persists EVERY query param it saw, arbitrary keys, for two hours. Anyone who
    //    already hit an affected link is carrying a copy, so scrub it rather than wait out the TTL.
    try {
      var rawIncoming = window.localStorage.getItem("ss_incoming_params");
      if (rawIncoming) {
        var entries = JSON.parse(rawIncoming);
        if (Object.prototype.toString.call(entries) === "[object Array]") {
          var mutated = false;
          for (var e = 0; e < entries.length; e++) {
            var entry = entries[e];
            if (!entry || typeof entry !== "object") { continue; }
            var keys = Object.keys(entry);
            for (var k = 0; k < keys.length; k++) {
              if (isSensitive(keys[k])) { delete entry[keys[k]]; mutated = true; }
            }
          }
          if (mutated) {
            window.localStorage.setItem("ss_incoming_params", JSON.stringify(entries));
          }
        }
      }
    } catch (e) { /* corrupt JSON or storage disabled; never break page load */ }

    // 3. The previous page's full href is mirrored into session storage and re-emitted as
    //    "last_page" on the NEXT pageview, so it would otherwise leave a second time.
    var mirrored = ["gtm_last_page_url", "reflections_last_page_url"];
    for (var m = 0; m < mirrored.length; m++) {
      try {
        var stored = window.sessionStorage.getItem(mirrored[m]);
        if (stored) {
          var cleanedStored = cleanUrl(stored, false);
          if (cleanedStored !== stored) { window.sessionStorage.setItem(mirrored[m], cleanedStored); }
        }
      } catch (e) { /* storage disabled */ }
    }
  } catch (e) { /* a failure here must never stop the page rendering */ }
})(["oobcode","apikey","continueurl","link","mode","id_token","access_token","refresh_token","code","state","password","email"], {"pathnames":["/download"],"exact":["c","pid","lang","gclid","fbclid","shortlink","deep_link_value","cta_id","userid"],"prefixes":["af_","utm_"]});
`;

export const googleTagManager = "";

export const animationScript = `
window.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('section, h1, h2, h3, li, article, .safetyAsset, .assetContainer, [class*="safetyContentContainer"] > *');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('anim-up'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  targets.forEach((t, idx) => { t.style.animationDelay = (idx % 6) * 90 + 'ms'; obs.observe(t); });
  document.querySelectorAll('video').forEach(v => { v.muted = true; v.setAttribute('playsinline',''); v.play().catch(()=>{}); });
});
`;

export const ldJson = "{\"@context\":\"https://schema.org\",\"@type\":\"Corporation\",\"name\":\"TokenMingle\",\"url\":\"https://x.com/TokenMngle\",\"logo\":\"/assets/image/upload/v1696845935/lightLogo.svg\",\"description\":\"TokenMingle helps people at TOKEN2049 Singapore meet each other IRL: coffee, networking, dinner, side events, parties.\"}";
export const appsflyerSrc = "/appsflyer-smart-script_2_10_0.js?v=25da71885a3e652a1ac3e1d8ffd9ca78abaa9f7d";
export const crazyEggSrc = "//script.crazyegg.com/pages/scripts/0127/1570.js";
