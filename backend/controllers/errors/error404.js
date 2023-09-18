function error404 (req, res, next) {
  res.status(404)
  res.json({
    error: {
      status: 404,
      name: 'Error404',
      message: '404 Not Found'
    }
  })
}

export default error404