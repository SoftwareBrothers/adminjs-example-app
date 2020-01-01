import React from 'react'
import { ShowPropertyProps, WrapperBox } from 'admin-bro'

const TestComponent = (props: ShowPropertyProps) => {
  const { resource } = props

  return (
    <WrapperBox>
      <WrapperBox border>
        <div className='content'>
          <h1>This component is rendered with <code>.tsx</code> file</h1>
          <p>You dont have to install any additional dependencies</p>
          <h2>The code</h2>
          <pre>
            {`
            import React from 'react'
            import { ShowPropertyProps, WrapperBox } from 'admin-bro'

            const TestComponent = (props: ShowPropertyProps) => {
              const { resource } = props

              return (
                <WrapperBox>
                  <WrapperBox border>
                    <div className='content'>
                      <h1>This component is rendered with <code>.tsx</code> file</h1>
                      <p>You dont have to install any additional dependencies</p>
                      ...
                    </div>
                  </WrapperBox>
                </WrapperBox>
              )
            }

            export default TestComponent
            `}
          </pre>
        </div>
      </WrapperBox>
    </WrapperBox>
  )
}

export default TestComponent
