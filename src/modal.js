import * as React from 'react';
import Exit from './exit_svg';

export default (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '70vh',
        width: '70vw',
        backgroundColor: 'white',
        borderRadius: '6px',
        overflow: 'scroll'
      }}>
      <div
        onClick={() => {props.toggleModal()}}
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
          cursor: 'pointer'
        }}>
        <Exit />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80%', height: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
          {
            props.fields.smartdocs && (
              <div style={{fontFamily: 'Barlow', fontSize: '18px', fontWeight: '400', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                  <p style={{fontSize: '36px', margin: 0}}>SmartDocs</p>
                  <p>SmartDocs is a collaborative note taking application that finds helpful research for you as you write. It accomplishes this by incrementally running your text through a Natural Language Processor and extracting the main entities, relationships, and even sentiments in your text.</p>
                  <p>The more you write, the smarter it gets.</p>
                  <p>This application was written to avoid the problem of "context switching" in your workflow. Our team wanted to make a tool that could do the mundane work of gathering data for you, so that the user can stay focused on their writing.</p>
                  <div style={{cursor: 'pointer'}} onClick={() => {window.open('https://www.youtube.com/watch?v=ju5Lj9ntKpw')}}>
                    <p><u>Live Presentation</u></p>
                  </div>
                  <p style={{marginBottom: '0.5rem'}}><strong>Role: </strong>Developer</p>
                  <p style={{margin: 0}}><strong>Technologies: </strong>React, Redux, DraftJS, Node, Express, Rossette, CrossRef</p>
                </div>
            )
          }

          {
          props.fields.ipfs && (
            <div style={{fontFamily: 'Barlow', fontSize: '18px', fontWeight: '400', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <p style={{fontSize: '36px', margin: 0}}>Tech Talk: The Interplanetary File System</p>
                <p>This was a talk that I delivered on IPFS (Interplanetary File System). The goal was to discuss how the Peer-to-Peer distributed web could revolutionize the way we share information.</p>
                <div style={{cursor: 'pointer'}} onClick={() => {window.open('https://www.youtube.com/watch?v=RXuRho67kvU')}}>
                  <p><u>Presentation</u></p>
                </div>
                <div style={{cursor: 'pointer'}} onClick={() => {window.open('https://medium.com/@jacobmregan0/why-we-need-a-distributed-web-ipfs-and-beyond-c2e12e79aa59')}}>
                  <p><u>Medium Article</u></p>
                </div>
                <p style={{marginBottom: '0.5rem'}}><strong>Role: </strong>Speaker</p>
                <p style={{margin: 0}}><strong>Technologies: </strong>IPFS, HTTP, TCP/IP, Git, Merkle Dag</p>
              </div>
          )
          }

          {
            props.fields.quicksource && (
              <div style={{fontFamily: 'Barlow', fontSize: '18px', fontWeight: '400', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <p style={{fontSize: '36px', margin: 0}}>QuickSource</p>
                <p>QuickSource was a project I built in my free time as a lightweight version of a previous project - SmartDocs. While SmartDocs required that you write a portion of text before it would fetch your research, this is a tool that allows you to conduct more manual searches for academic research based on keywords.</p>
                <p>The development of this application was driven by the desire to minimize the number of steps between a researcher and the information they need to continue their work.</p>
                <p>This is a light version representing a proof of concept for a fast academic search engine with a minimal interface. Continuing development will include a chrome extension for increased ease of use</p>
                <div style={{cursor: 'pointer'}} onClick={() => {window.open('https://quicksource.herokuapp.com/')}}>
                  <p><u>QuickSource Website</u></p>
                </div>
                <p style={{marginBottom: '0.5rem'}}><strong>Role: </strong>Sole Developer</p>
                <p style={{margin: 0}}><strong>Technologies: </strong>React, Redux, Node, Express, CrossRef API, Mailjet</p>
              </div>
            )
          }
      </div>

    </div>
  )
}
