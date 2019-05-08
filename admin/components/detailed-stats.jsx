import React from 'react'
import { ApiClient } from 'admin-bro'

import { WrapperBox, ValueBlock, DashboardHeader, Column, Columns } from 'admin-bro/components'
import { colors } from 'admin-bro/style'

export default class DetailedStats extends React.Component {
  componentDidMount() {
    const api = new ApiClient()
    api.resourceAction({
      resourceId: this.props.resource.id, 
      actionName: this.props.action.name,
    }).then((data) => {
      console.log(data)
    })
  }

  render() {
    return (
      <React.Fragment>
        <DashboardHeader>
          <h1>Custom action example</h1>
        </DashboardHeader>
        <WrapperBox>
          <Columns>
            <Column width={4}>
              <WrapperBox border className="content">
                <h3>Custom Action</h3>
                <p>Here you can see custom example page</p>
              </WrapperBox>
            </Column>
            <Column width={4}>
              <ValueBlock value="$ 1.16M" icon="fas fa-cog" color={colors.warning}>
                Some typical value
              </ValueBlock>
            </Column>
            <Column width={4}>
              <ValueBlock value="$ 2.2M" icon="fas fa-cog" color={colors.error}>
                Profit
              </ValueBlock>
            </Column>
          </Columns>
        </WrapperBox>
      </React.Fragment>
    )
  }
}
