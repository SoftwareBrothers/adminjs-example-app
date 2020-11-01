import React, { useEffect, useState } from 'react'
import { Box, H3, Placeholder, Button} from '@admin-bro/design-system'
import { ApiClient, useNotice} from 'admin-bro'

const api = new ApiClient()

const NOTICE_MESSAGE = {
  message: 'I was clicked',
  type: 'success',
}

const SomeStats = () => {
  const [text, setText] = useState('')
  const addNotice = useNotice()

  useEffect(() => {
    api.getPage({ pageName: 'customPage' }).then(res => {
      setText(res.data.text)
    })
  })

  return (
    <Box variant="grey">
      <Box variant="white">
        <H3>Here you can specify a totally custom page</H3>
        <Box>
          <p>With some data fetched from the backend:</p>
          {text.length ? (
            <pre>{text}</pre>
          ) : (
            <Placeholder style={{ width: 400, height: 14 }} />
          )}
          <p>and other interactions like toast :)</p>
          <p>
            <Button onClick={() => addNotice(NOTICE_MESSAGE)}>Click me</Button>
          </p>
        </Box>
      </Box>
    </Box>
  )
}

export default SomeStats
