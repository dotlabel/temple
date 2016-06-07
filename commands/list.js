
'use strict'

/**
 * Lists available template files
 *
 * @example
 *   temple list
 *   temple list --dataDir /usr/local/share/templates
 */

const fs = require( 'fs' )
const path = require( 'path' )
const store = require( '../lib/store' )

/**
 * Lists all templates currently held by the store
 * @param opts <Object>
 *   @param dataDir <String> specific data directory to use
 */
module.exports = function list( opts ) {
  opts = opts || {}
  let templates = store( opts.dataDir || null )

  // @TODO make tabular on --json option supplied
  templates.getAll()
    .map( name => name + '\n' )
    .forEach( name => {
      // @TODO use lib/template show function
      // @TODO currently showing directories, should show only files
      process.stdout.write( name )
    })
}
