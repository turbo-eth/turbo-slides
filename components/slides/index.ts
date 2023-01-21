// @ts-nocheck
// require all modules on the path and with the pattern defined
const req = require.context('./', true, /.jsx$/)
const modules = req.keys().map(req)
const defaultExport = {}
modules.map((mod) => {
  module.exports[[Object.keys(mod)[0]]] = mod.default
  defaultExport[[Object.keys(mod)[0]]] = mod.default
})
module.export = defaultExport

export default defaultExport
