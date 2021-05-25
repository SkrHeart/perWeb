import React, {Component} from 'react';
import './index.scss'
import Left from './Left/index'
import Mid from './Mid/index'
import Right from './Right/index'
class Index extends Component {
    render() {
        return (
            <div className='second'>
                <div className='one'>
                    <Left/>
                </div>
                <div className='two'>
                    <Mid/>
                </div>
                <div className='thr'>
                   <Right/>
                </div>
            </div>
        );
    }
}

export default Index;