
import React from 'react'
import FitterHappierText from '../FitterHappierText'
import { MinimalHeader, Header, Footer } from 'blk'

class Demo extends React.Component {

  constructor () {
    super ()
    this.state = {
      text: 'Live Demo',
      caps: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggleCaps = this.toggleCaps.bind(this)
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  toggleCaps () {
    var caps = !this.state.caps
    this.setState({ caps: caps })
  }

  render () {
    var classNames = {
      demo: (this.state.caps ? 'caps' : '') + ' avenir'
    }
    return (
      <div>
        <MinimalHeader title='React Fitter Happier Text'
          href='http://jxnblk.com/react-fitter-happier-text' />
        <hr />
        <div className='avenir caps'>
          <FitterHappierText text='React Fitter' />
          <FitterHappierText text='Happier Text' />
          <FitterHappierText text='React component for fully fluid headings' />
        </div>
        <hr />
        <div className='mt3 mb1'>
          <label htmlFor='text'
            className='h5 block'>
            Live Demo
          </label>
          <input id='text'
            type='text'
            className='mr2 input input-light'
            value={this.state.text}
            onChange={this.handleChange} />
        </div>
        <div style={{ minHeight: '50vmin' }}>
          <FitterHappierText
            className={classNames.demo}
            text={this.state.text} />
        </div>
        <hr />
        <div className='avenir caps'>
          <FitterHappierText text='HTML Design Principles' />
          <FitterHappierText text='Conformance for Documents and Implementations' />
          <FitterHappierText text='Support Existing Content' />
          <FitterHappierText text='Degrade Gracefully' />
          <FitterHappierText text='Do Not Reinvent the Wheel' />
          <FitterHappierText text='Pave the Cowpaths' />
          <FitterHappierText text='Evolution Not Revolution' />
          <FitterHappierText text='Solve Real Problems' />
          <FitterHappierText text='Priority of Constituencies' />
          <FitterHappierText text='Secure by Design' />
          <FitterHappierText text='Separation of Concerns' />
          <FitterHappierText text='DOM Consistency' />
          <FitterHappierText text='Well-Defined Behavior' />
          <FitterHappierText text='Avoid Needless Complexity' />
          <FitterHappierText text='Handle Errors' />
          <FitterHappierText text='Media Independence' />
          <FitterHappierText text='Support World Languages' />
          <FitterHappierText text='A11Y' />
          <p className='h5 compact right-align'>
            Source:
            <a href='http://www.w3.org/TR/html-design-principles/'
              className='black'
              target='_blank'>
              HTML Design Principles
            </a>
          </p>
        </div>
        <div className='py3'>
          <h2>Usage</h2>
          <pre>npm i react-fitter-happier-text</pre>
          <pre>
{`var FitterHappierText = require('react-fitter-happier-text')
React.render(<FitterHappierText text='Hello World' />, document.querySelector('#hello-world'))`}
          </pre>
          <p>Note: this component relies on <code>element.offsetWidth</code> and only works in client-side contexts.</p>
        </div>
        <Footer title='React Fitter Happier Text'
          href='//jxnblk.com/react-fitter-happier-text'
          links={[
            { href: '//npmjs.com/package/react-fitter-happier-text', text: 'npm' },
            { href: '//github.com/jxnblk/react-fitter-happier-text', text: 'GitHub' },
          ]} />
        <div className='py4' />
      </div>
    )
  }

}

export default Demo


