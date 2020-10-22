import React, {Component} from 'react'

export default class TextHeader extends Component {
    render() {
        return(
            <p>
                {this.props.name}
            </p>
        )   
    }
}