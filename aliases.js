const path = require('path')

const root = path.resolve(__dirname)

const alias = {
  'action-creators': `${root}/action-creators`,
  actions: `${root}/actions`,
  components: `${root}/components`,
  common: `${root}/components/common`,
  constants: `${root}/utils/constants`,
  data: `${root}/utils/data`,
  hoc: `${root}/hoc`,
  hooks: `${root}/hooks`,
  i18n: `${root}/i18n.js`,
  images: `${root}/static/images`,
  locales: `${root}/static/locales`,
  public: `${root}/public`,
  reducers: `${root}/reducers`,
  sagas: `${root}/sagas`,
  services: `${root}/services`,
  store: `${root}/store/store.js`,
  style: `${root}/style`,
  test: `${root}/__test__`,
  utils: `${root}/utils`,
}

module.exports = alias
