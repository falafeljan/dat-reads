var html = require('choo/html')
var renderBook = require('../components/book')

module.exports = view

function view (state, emit) {
  return html`
    <div>
      ${state.page().v('title')}
    </div>
  `
}
