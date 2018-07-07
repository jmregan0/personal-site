import * as React from 'react'

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <p style={{fontFamily: 'Barlow', fontSize: '48px', color: 'black'}}>About</p>
      <p style={{fontFamily: 'Barlow', fontSize: '18px', color: 'black'}}>I am a fullstack Javascript developer. I love working with Node.js, Express, React-Redux, Postgres, and SQL (to name a few). I also have experience in NoSQL, Graph databases, and Typescript development. I enjoy working in web development because there is always something new just around the corner.</p>
      <p style={{fontFamily: 'Barlow', fontSize: '18px', color: 'black'}}>I love both writing code for computers and words for humans. Originally an English major, I enjoy reading good books. I also love exploring in the outdoors, climbing, and kayaking. My most recent professional work has included working as a Teaching Assistant at Fullstack Academy of Code in Chicago, and as a Javascript developer at CFX Trading and OpenFinance Network.</p>
    </div>
  )
}
