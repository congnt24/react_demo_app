import React, {Component} from 'react';

class SimpleInputText extends Component {
    render() {
        return (
            <div className="SimpleInputText">
                <input type="text" name="simple" placeholder="enter something simple"/>
            </div>
        );
    }
}

export default SimpleInputText;