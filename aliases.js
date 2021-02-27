const path = require('path')

const root = path.resolve(__dirname)

const alias = {
  components: `${root}/components`,
  common: `${root}/components/common`,
  ui: `${root}/components/ui`,
  hooks: `${root}/hooks`,
  hoc: `${root}/hoc`,
  utils: `${root}/utils`,
  'action-creators': `${root}/store/action-creators`,
  actions: `${root}/store/actions`,
  services: `${root}/services`,
  reducers: `${root}/store/reducers`,
  sagas: `${root}/sagas`,
  store: `${root}/store`,
  images: `${root}/static/images`,
  i18n: `${root}/i18n.js`,
  locales: `${root}/static/locales`,
  test: `${root}/__test__`,
  constants: `${root}/constants`,
  styles: `${root}/styles`,
  data: `${root}/utils/data`,
}

module.exports = alias
