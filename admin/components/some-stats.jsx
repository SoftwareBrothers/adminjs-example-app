import React, { useEffect, useState } from 'react'
import { WrapperBox, ApiClient, Placeholder, withNotice, StyledButton} from 'admin-bro'

const api = new ApiClient()

const NOTICE_MESSAGE = {
  message: 'I was clicked',
  type: 'success',
}

const SomeStats = ({ addNotice }) => {
  const [text, setText] = useState('')

  useEffect(() => {
    api.getPage({ pageName: 'customPage' }).then(res => {
      setText(res.data.text)
    })
  })

  return (
    <WrapperBox>
      <WrapperBox border>
        <h1>Here you can specify a totally custom page</h1>
        <div>
          <p>With some data fetched from the backend:</p>
          {text.length ? (
            <pre>{text}</pre>
          ) : (
            <Placeholder style={{ width: 400, height: 14 }} />
          )}
          <p>and other interactions like toast :)</p>
          <p>
            <StyledButton onClick={() => addNotice(NOTICE_MESSAGE)}>Click me</StyledButton>
          </p>
        </div>
      </WrapperBox>
    </WrapperBox>
  )
}

export default withNotice(SomeStats)
