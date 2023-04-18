import React from 'react';

const Debug = (props) => <pre>{JSON.stringify(props, null, 4)}</pre>;

export default Debug;
