import * as React from 'react';
import ProjectItem from './project_item';

export default (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <p style={{fontFamily: 'Barlow', fontSize: '48px', color: 'black'}}>Work</p>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <ProjectItem
          toggleModal={props.toggleModal}
          value="smartdocs"
          image="images/smartdocs.png"
          label="SmartDocs" />
        <ProjectItem
          toggleModal={props.toggleModal}
          value="ipfs"
          image="images/ipfs.png"
          label="IPFS" />
        <ProjectItem
          toggleModal={props.toggleModal}
          value="quicksource"
          image="images/quicksource.png"
          label="QuickSource" />
      </div>
    </div>
  )
}
