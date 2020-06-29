import React, { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

const options = [
    { key: 'glider', value: 'glider', text: 'Lonely Waddler' },
    { key: 'diehard', value: 'diehard', text: 'Bruce Willis' },
    { key: 'gliderGun', value: 'gliderGun', text: 'Rabbit Babies' }
];

class SamplePatterns extends Component {

    state = {
        pattern: ''
    }

    onLoad = () => {
        const { pattern } = this.state;
        return pattern ? this.props.load(pattern) : null;
    }

    render() {
        return (
            <div className='controls'>
                <Button as='div' labelPosition='left'>
                    <Dropdown
                        placeholder='Select a Pattern'
                        options={options}
                        selection
                        className='label'
                        value={this.state.pattern}
                        onChange={(e, { value }) => this.setState({ pattern: value })}
                    />
                    <Button
                        content='Load'
                        onClick={this.onLoad}
                        disabled={this.props.running}
                    />
                </Button>
            </div>
        );
    }

}

export default SamplePatterns;