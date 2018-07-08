import * as React from 'react';
import Navbar from './navbar';
import About from './about';
import Projects from './projects';
import Modal from './modal';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showModal: false,
      smartdocs: false,
      quicksource: false,
      ipfs: false
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({showModal: !prevState.showModal}))
  }

  toggleModal(field) {
    if (!field) {
      this.setState({
        smartdocs: false,
        quicksource: false,
        ipfs: false
      })
    } else {
      this.setState({
        [field]: true
      })
    }
    this.toggle();
  }

  render() {
    return (
      <div style={{maxWidth: '100vw', overflow: 'hidden'}}>
        <Navbar />
        <div className="p-1">
          <p style={{fontFamily: 'Barlow', color: '#FFFFFF', fontSize: '48px'}}>W e l c o m e</p>
        </div>
        <div className="sectional">
          <About />
        </div>
        <div className="p-2"></div>
        <div className="sectional">
          <Projects toggleModal={this.toggleModal} />
        </div>
        <div className="p-3"></div>
        <div className={`overlay ${this.state.showModal ? 'visible' : 'hidden'}`}>
          <Modal
            toggleModal={this.toggleModal}
            fields={this.state} />
        </div>
      </div>
    )
  }
}

export default App;
