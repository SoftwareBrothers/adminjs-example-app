const { PageBuilder } = require('admin-bro')
const ArticleModel = require('./../mongoose/article-model')
const UserModel = require('./../mongoose/user-model')
const CommentModel = require('./../mongoose/comment-model')
const moment = require('moment')

class DashboardPage extends PageBuilder {
  constructor(props) {
    super(props)
    this.title = 'Welcome on the demo page'
    this.subtitle = `This is just an example what can be done using AdminBro PageBuilder.
                     Check out the docs to see all the possibilities`
    this.infoText = [
      'AdminBro is an Admin Framework for nodejs apps.',
      'Check it out on: <a href="https://github.com/SoftwareBrothers/admin-bro">github</a> and if you like the idea - click the star button',
      '<a href="https://github.com/SoftwareBrothers/admin-bro"><img style="margin: 60px; text-align: center; width: 70%"src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"></a>'
    ]
  }

  async fetchData() {
    this.articlesCount = {
      published: await ArticleModel.find({ published: true }).countDocuments(),
      unpublished: await ArticleModel.find({ published: {$ne: true} }).countDocuments(),
    }
  }

  async build() {
    await this.fetchData()
    await this.addBlock({
      title: 'Published Articles',
      value: this.articlesCount.published,
      icon: 'fas fa-newspaper fa-2x',
      columns: 3,
    })

    this.addBlock({
      title: 'Articles needing publication',
      value: this.articlesCount.unpublished,
      icon: 'fas fa-truck fa-2x',
      columns: 3,
    }, PageBuilder.COLOR.WARNING)

    this.addBlock({
      title: 'Comments',
      value: await CommentModel.find({}).countDocuments(),
      icon: 'fas fa-comments fa-2x',
      columns: 3,
    })

    this.addBlock({
      title: 'Users',
      value: await UserModel.find({}).countDocuments(),
      icon: 'fas fa-users fa-2x',
      columns: 3,
    })

    this.addTextBox({
      title: 'It could also have simple text',
      content: this.infoText.map(row => `<p>${row}</p>`).join(''),
      columns: 6
    })

    this.addChart({
      columns: 6,
      title: 'Articles',
      subtitle: 'Summary for all articles',
      config: {
        type: 'bar',
        data: {
          datasets: [
            {
              label: 'Published',
              fill: true,
              backgroundColor: PageBuilder.COLOR.INFO,
              data: [this.articlesCount.published]
            }, {
              label: 'Not Published',
              fill: true,
              backgroundColor: PageBuilder.COLOR.WARNING,
              data: [this.articlesCount.unpublished]
            },
          ],
        },
      }
    })

    this.addInfoList({
      title: 'Recent comments',
      subtitle: 'Latest comments from user all around the world',
      columns: 4,
      items: (await CommentModel.find({}).limit(3).sort({createdAt: 'desc'})).map(comment => ({
        title: comment.content,
        subtitle: comment.createdBy,
        date: moment(comment.createdAt).format('YYYY-MM-DD HH:MM'),
        status: comment.flagged && 'flagged',
        imgSrc: 'http://www.question2answer.org/qa/?qa=image&qa_blobid=18247718293145324634&qa_size=40',
      }))
    })

    this.addInfoTable({
      title: 'Articles',
      headers: ['Title', 'Author', 'Published', 'Creation date'],
      items: (await ArticleModel.find({}).sort({createdAt: 'desc'}).limit(5)).map(article => ([
        article.title,
        article.author,
        article.published ? 'YES' : 'NO',
        moment(article.createdAt).format('YYYY-MM-DD HH:MM'),
      ])),
      columns: 8,
    })
  }    
}

module.exports = DashboardPage