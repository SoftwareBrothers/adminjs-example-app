const nullifyEmptyProperties = (request) => {
  const { method, payload } = request
  if (method === 'post') {
    request.payload = Object
      .entries(payload)
      .reduce((memo, [key, value]) => ({
        ...memo,
        [key]: value === '' ? null : value,
      }), {})
  }
  return request
}


module.exports = {
  actions: {
    edit: {
      before: nullifyEmptyProperties
    },
    new: {
      before: nullifyEmptyProperties
    }
  }
}
