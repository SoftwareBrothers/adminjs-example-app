import React from 'react'

import { WrapperBox } from 'admin-bro/components'

export default class DontTouchThis extends React.Component {
  render() {
    const { record } = this.props

    return (
      <WrapperBox border className="content">
        <h1>Example of a simple page</h1>
        <p>Where you can put almost everything</p>
        <p>like this:</p>
        <p><img src="https://i.redd.it/rd39yuiy9ns21.jpg" alt="stupid cat" width={300} /></p>
        <p>Or (more likely), operate on a returned record:</p>
        <pre>
          {JSON.stringify(record)}
        </pre>
      </WrapperBox>
    )
  }
}
