(function() {
    var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
    var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/polyfills.DtXF2zQ8.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/app.CJBylwy1.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/page-OnePage.Bwcmy3vj.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/DeliveryMethodSelectorSection.C2dCI0Cw.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/useEditorShopPayNavigation.DwS91CgW.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/VaultedPayment.Dm33xB9q.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/LocalizationExtensionField.BULWEm1B.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/ShopPayOptInDisclaimer.DgDN0dEo.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/ShipmentBreakdown.Cl50elIu.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/MerchandiseModal.BVOzQYvb.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/StackedMerchandisePreview.DjldmGwf.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/PayButtonSection.Irm6MeXp.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/component-ShopPayVerificationSwitch.CUCyZZkW.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/useSubscribeMessenger.DROn8pFz.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/index.Df6mH1J3.js"];
    var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/assets/app.YVWRbjK6.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/assets/OnePage.PMX4OSBO.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/assets/DeliveryMethodSelectorSection.DmqjTkNB.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/assets/useEditorShopPayNavigation.DCOTvxC3.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/assets/VaultedPayment.OxMVm7u-.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/assets/StackedMerchandisePreview.CKAakmU8.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.zh-TW/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0028/9669/1264/files/2_x320.png?v=1613715041", "https://cdn.shopify.com/s/files/1/0028/9669/1264/files/img_home_block_07_2x_8e9c8c17-16d8-4f13-8cf4-721aad083101_2000x.jpg?v=1613716984"];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res, next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;

        function run() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
    }

    function onLoaded() {
        try {
            if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
                preconnectAssets();
                prefetchAssets();
            }
        } catch (e) {}
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();