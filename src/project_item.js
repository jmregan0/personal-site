import * as React from 'react';

const ProjectItem = (props) => {
  return (
    <div
      onClick={() => {props.toggleModal(props.value)}}
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer'}}>
      <div style={{width: '15rem', height: '10rem', margin: '1rem'}}>
        <img style={{maxWidth: '100%', maxHeight: '100%'}} src={props.image} />
      </div>
      <p style={{fontFamily: 'Barlow', fontSize: '18px', margin: 0}}>{props.label}</p>
    </div>
  )
}

export default ProjectItem;
