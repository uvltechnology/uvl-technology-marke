function info(msg, meta) {
  if (meta) console.log('[INFO]', msg, meta)
  else console.log('[INFO]', msg)
}

function error(msg, meta) {
  if (meta) console.error('[ERROR]', msg, meta)
  else console.error('[ERROR]', msg)
}

module.exports = { info, error }
