const path = require('path')

const root = path.resolve(__dirname)

const alias = {
  components: `${root}/components`,
  common: `${root}/components/common`,
  hooks: `${root}/hooks`,
  hoc: `${root}/hoc`,
  utils: `${root}/utils`,
  'action-creators': `${root}/action-creators`,
  actions: `${root}/actions`,
  services: `${root}/services`,
  reducers: `${root}/reducers`,
  sagas: `${root}/sagas`,
  store: `${root}/store/store.js`,
  images: `${root}/static/images`,
  i18n: `${root}/i18n.js`,
  locales: `${root}/static/locales`,
  test: `${root}/__test__`,
  constants: `${root}/utils/constants`,
  data: `${root}/utils/data`,
}

module.exports = alias
