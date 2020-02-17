import React from 'react'
import { Box} from 'admin-bro'


export default class DetailedStats extends React.Component {
  componentDidMount() {
    api.resourceAction({
      resourceId: this.props.resource.id, 
      actionName: this.props.action.name,
    }).then((data) => {
      console.log(data)
    })
  }

  render() {
    return (
      <Box>
        <h1>Custom action example</h1>
      </Box>
    )
  }
}
