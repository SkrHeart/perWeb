import React, {Component} from 'react';
import './index.scss'
import {withRouter} from 'react-router-dom'
class Index extends Component<any> {
    navToUrl = ()=>{
       this.props.history.push('/second')
    }

    render() {
        console.log(this.props.history)
        return (
            <div className='header'>
                <div className='header_btn'>
                    aaaaaa
                </div>
                aaaaaa
                <div onClick={this.navToUrl}>
                    bbbb
                </div>
            </div>
        );
    }
}

export default Index;