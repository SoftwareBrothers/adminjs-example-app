import React, { useEffect, useState } from 'react'
import { WrapperBox, ApiClient, Placeholder } from 'admin-bro'

const api = new ApiClient()

const SomeStats = () => {
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
        </div>
      </WrapperBox>
    </WrapperBox>
  )
}

export default SomeStats
