const AdminBro = require('admin-bro')

module.exports = {
  name: 'Blog (customized Info page)',
  actions: {
    show: {
      handler: async (request, response, data) => {
        const content = await AdminBro.ACTIONS.show.handler(request, response, data)
        const page = new AdminBro.PageBuilder({ admin: data._admin })
        page.addColumn({ content, columns: 7 })
        page.addChart({
          columns: 5,
          title: 'Popularity',
          subtitle: 'How people like this article',
          config: {
            type: 'bar',
            data: {
              datasets: [
                {
                  label: 'Thumbs UP',
                  fill: true,
                  backgroundColor: AdminBro.PageBuilder.COLOR.INFO,
                  data: [522]
                }, {
                  label: 'Thumbs Down',
                  fill: true,
                  backgroundColor: AdminBro.PageBuilder.COLOR.WARNING,
                  data: [20]
                },
              ],
            },
          }
        })
        return page.toHTML()
      },
    }
  }
}

// 'user-ninja'