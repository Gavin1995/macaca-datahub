/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9d8a12b994c42fe62e01c570857b6812"
  },
  {
    "url": "assets/css/0.styles.9fd31716.css",
    "revision": "65a5c53196e10d5ea9daee3c51dd90bc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2b442953.js",
    "revision": "9cec861ee793414645041d5a3f72efa0"
  },
  {
    "url": "assets/js/11.3b900434.js",
    "revision": "844c94ccf12e3ef829d8856528b37f6e"
  },
  {
    "url": "assets/js/12.22d05bbd.js",
    "revision": "a7d0e5408ecf58cf5bc48459d8d53d84"
  },
  {
    "url": "assets/js/13.dac666a2.js",
    "revision": "14063a3e2f2cff9c7336d7a5b7f98fcc"
  },
  {
    "url": "assets/js/14.7eb3ed7e.js",
    "revision": "9f72d308306a3c79fe586ec65ca9e537"
  },
  {
    "url": "assets/js/15.6356b18c.js",
    "revision": "a8061219c1d45aec0b31b7b8f5a1e7bb"
  },
  {
    "url": "assets/js/16.5f509036.js",
    "revision": "c78d1f13103947bf78f1997980f085cd"
  },
  {
    "url": "assets/js/17.2afced31.js",
    "revision": "065bbd2b802818d4d8d0cc4768d67d09"
  },
  {
    "url": "assets/js/18.d7b90a41.js",
    "revision": "c925ae7e62747dc43a43e0dc4a09e5ab"
  },
  {
    "url": "assets/js/19.600e03b5.js",
    "revision": "c4275ee74ae0f1b5a59f16debfd1fdaa"
  },
  {
    "url": "assets/js/2.fdcf46c2.js",
    "revision": "bd3c66d7fad928b28c32c56c4e5af102"
  },
  {
    "url": "assets/js/20.26ba2fab.js",
    "revision": "629fab0dd172fa55be5284bf5ed3986b"
  },
  {
    "url": "assets/js/21.6d9449de.js",
    "revision": "250bdca2ab923d8fd948b737576a90e4"
  },
  {
    "url": "assets/js/22.c81a34cc.js",
    "revision": "0f3ebcbf0ea8cb073b5f4234cac942f5"
  },
  {
    "url": "assets/js/23.91fc8c66.js",
    "revision": "6a787636cad3e287532d124aa9ad16b0"
  },
  {
    "url": "assets/js/24.caeceaec.js",
    "revision": "b660c378f6ac2c6ce2ab41396a9ecc00"
  },
  {
    "url": "assets/js/25.3f607053.js",
    "revision": "aff22f75ca3fc96d6087a8b78876bada"
  },
  {
    "url": "assets/js/26.d8ea8a2b.js",
    "revision": "0f9e03902f7460b5cb285cfe0f66a7dc"
  },
  {
    "url": "assets/js/27.026cac1b.js",
    "revision": "2bed52cd7a14a1b8e99b94c7ec56732b"
  },
  {
    "url": "assets/js/28.43c67812.js",
    "revision": "582ea5696e00776a56bcbd1594176ef8"
  },
  {
    "url": "assets/js/29.f5a8e332.js",
    "revision": "c1db2d0fb8cddf55917a1c2076828b46"
  },
  {
    "url": "assets/js/3.db8f8307.js",
    "revision": "f0a94e3a6363ff5b290ed1c80e74ed49"
  },
  {
    "url": "assets/js/4.82983d1e.js",
    "revision": "f2ed7a936a0b9ed35d71845d09794b8a"
  },
  {
    "url": "assets/js/5.ba03d591.js",
    "revision": "acab2f868449cc21dfe20e3b1a082f25"
  },
  {
    "url": "assets/js/6.93d76a80.js",
    "revision": "a30e7d6c40b2175f02ca4b87a47b10a1"
  },
  {
    "url": "assets/js/7.a927c791.js",
    "revision": "e2c49eca5ad2b638dc19c537ebcf6ca3"
  },
  {
    "url": "assets/js/8.24509733.js",
    "revision": "28bfac9f564d241614ece9939c5a0a24"
  },
  {
    "url": "assets/js/9.0100e3b7.js",
    "revision": "8224db90f6e01796c2fa1cd6889c3ba3"
  },
  {
    "url": "assets/js/app.57b442fa.js",
    "revision": "5528f918a06641addb832132155d9650"
  },
  {
    "url": "guide/configuration.html",
    "revision": "424d7a1b73f3371373a3af991ace504d"
  },
  {
    "url": "guide/design-concept.html",
    "revision": "1b9e76b2485ba609da7bf361a83b21d3"
  },
  {
    "url": "guide/experiment.html",
    "revision": "ea46a42ebc8df0759d016ca53ff6fb84"
  },
  {
    "url": "guide/index.html",
    "revision": "ba7c2d7c28b92602f555469419ebb57b"
  },
  {
    "url": "guide/installation.html",
    "revision": "74e7fdf2b54e11e6b427f0fd03fb307b"
  },
  {
    "url": "guide/integration.html",
    "revision": "fb3e37355c2e89645116fc3904746c4d"
  },
  {
    "url": "guide/presentations.html",
    "revision": "fdc2d45f61f3a5df7ccd7582e4ed89be"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "17498cb197a17c0635c61c430b2c4c78"
  },
  {
    "url": "guide/schema-syntax.html",
    "revision": "da720fa11a32527064baa9f1b051e866"
  },
  {
    "url": "guide/swagger.html",
    "revision": "4871fe742ff606193d11d4a211091522"
  },
  {
    "url": "guide/webpack-tutorial.html",
    "revision": "7bb6ffe42aed47fd80c81b109d76e98a"
  },
  {
    "url": "guide/with-macaca-test.html",
    "revision": "3ea5839b39e69c8e9aff75d30592c417"
  },
  {
    "url": "index.html",
    "revision": "26c669915926fb8cc05fe172e57b5e94"
  },
  {
    "url": "logo/logo-color.svg",
    "revision": "ce025e5858229195d4fa7018ee849edd"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "00c9ac701646019f9634e64c992c063e"
  },
  {
    "url": "zh/guide/design-concept.html",
    "revision": "cbb9fe60b08a8e1ee308d7d631d0b980"
  },
  {
    "url": "zh/guide/experiment.html",
    "revision": "f57d946509a2b46110948772e14a290a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a569285905cfb7fe2734891e4f597526"
  },
  {
    "url": "zh/guide/installation.html",
    "revision": "de41fd9100dc83863232fb3ebb4221b0"
  },
  {
    "url": "zh/guide/integration.html",
    "revision": "5f7229aa7233937d65c271ca022ebf40"
  },
  {
    "url": "zh/guide/presentations.html",
    "revision": "7fc56ded96f0dbc70549c4e12bc1a3d1"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "d3ec0afc1bb12d1b9fd76e800b6a6842"
  },
  {
    "url": "zh/guide/schema-syntax.html",
    "revision": "6f59797ad2fd708f7d8969af9fe19b15"
  },
  {
    "url": "zh/guide/swagger.html",
    "revision": "ba7af497c79b7e3bb35480d804f849f6"
  },
  {
    "url": "zh/guide/webpack-tutorial.html",
    "revision": "10fa75562b4b8f2937f09fe64079d470"
  },
  {
    "url": "zh/guide/with-macaca-test.html",
    "revision": "4c921cc556096cdeb799104d6ab7ba37"
  },
  {
    "url": "zh/index.html",
    "revision": "eba870dbb1e626f90f5613d9591b8e99"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
