import * as React from 'react';

export default () => {
  return (
    <div style={{
      width: '100vw',
      height: '4rem',
      backgroundColor: '#71A1AB',
      opacity: '0.9',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
      <button
        style={{border: 'none', outline: 'none', fontFamily: 'Barlow', cursor: 'pointer', background: 'none', paddingTop: '1rem'}}
        onClick={() => {window.open("https://github.com/jmregan0")}}><u>Github</u></button>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <p style={{fontFamily: 'Barlow', paddingRight: '0.5rem', paddingTop: '1rem', margin: 0, color: 'black', fontSize: '12px'}}>{'<name>'}</p>
          <p style={{fontFamily: 'Barlow', margin: 0, paddingTop: '1rem', color: 'black', fontSize: '24px'}}>Jacob Regan</p>
          <p style={{fontFamily: 'Barlow', paddingLeft: '0.5rem', paddingTop: '1rem', margin: 0, color: 'black', fontSize: '12px'}}>{'</name>'}</p>
        </div>
      <button
        style={{border: 'none', outline: 'none', fontFamily: 'Barlow', cursor: 'pointer', background: 'none', paddingTop: '1rem'}}
        onClick={() => {window.open("https://www.linkedin.com/in/jacob-regan-b2b76013a/")}}><u>LinkedIn</u></button>
    </div>
    <p style={{fontFamily: 'Barlow', padding: '1rem 0.5rem', margin: 0, color: 'black', fontSize: '12px'}}>Software Developer</p>

    </div>
  )
}
