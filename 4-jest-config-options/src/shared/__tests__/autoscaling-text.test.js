import React from 'react'
import {render} from '@testing-library/react'
import AutoscalingText from '../autoscaling-text'

test('renders correctly', () => {
  const {debug} = render(<AutoscalingText />)
  debug()
})
