module.exports = {
  '/': 'home/index',
  '/:action': 'home/:action',
  '/:controller/:action': ':controller/:action',
  '/:controller/:id/:action': ':controller/:action'
}