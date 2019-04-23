import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import ReactDOM from 'react-dom';

class App extends React.Component {

    state = { lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            error => this.setState({ errorMessage: error.message})
        )
    };
    
    renderContnet() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return (
            <Spinner inputText="Waiting for choice to Allow or Deny Location"/>
        );
    }

    render() {
        return(
            <div className="border red">
                {this.renderContnet()}
            </div>
        );  
    };

};

ReactDOM.render(<App />, document.getElementById('root'));
