var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
// you can set up to 5 custom variables for each visitor
// you can set up to 5 custom variables for each action (page view, download, click, site search)
_paq.push(["setCampaignNameKey", "a36451e7-ec0e-4cec-a505-ee98d6c80a2b"]);
_paq.push(["setCampaignKeywordKey", "a36451e7-ec0e-4cec-a505-ee98d6c80a2b"]);
_paq.push(["disableCookies"]); _paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function () {
    var u = "https://matomo.zeroem.net/";
    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', '27']);
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = u + 'matomo.js';
    s.parentNode.insertBefore(g, s);
})();