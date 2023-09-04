import { boot } from 'quasar/wrappers'
import * as process from "process";

export default boot(async ({ app, router, store }) => {
  // something to do
  app.config.globalProperties.$envMode = process.env.MODE;
})
