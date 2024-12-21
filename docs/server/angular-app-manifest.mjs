
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/kt6/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/kt6/home",
    "route": "/kt6"
  },
  {
    "renderMode": 2,
    "route": "/kt6/home"
  },
  {
    "renderMode": 2,
    "route": "/kt6/works"
  }
],
  assets: {
    'index.csr.html': {size: 630, hash: '228be46dc0cd1c5b773d22c17790972b808692db072d05646bdeda0be6c48141', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 957, hash: '0642d060450dc21b6f1fd580676269ce15273bc32699ca2fe0e39200f97876df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 8719, hash: 'ddf731a83416aa2145f75dcd263b1806fbd994284eed7a891f9318dfe52bd647', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'works/index.html': {size: 8054, hash: '25b0be3907e242e05bdfa2aa6bf575abc1caf83fe845cf7b8e0cdd6d4c7a4f3e', text: () => import('./assets-chunks/works_index_html.mjs').then(m => m.default)},
    'styles-OU6RILLR.css': {size: 689, hash: 'c70cGpk/E4c', text: () => import('./assets-chunks/styles-OU6RILLR_css.mjs').then(m => m.default)}
  },
};
