import React, {Component} from 'react';
import './index.scss'
import Nav from './Navigation/index'
class Index extends Component<any,any> {
    state={
        offsetWid:document.documentElement.clientWidth,
        offsetHei:document.documentElement.clientHeight
    }
    componentDidMount() {
        window.onresize=()=>{
            this.setState({offsetWid : document.documentElement.clientWidth})
            this.setState({offsetHei : document.documentElement.clientHeight})
        }
    }
    render() {

        return (
            <div style={{width:this.state.offsetWid,height:this.state.offsetHei,}} className='index'>
                <Nav/>
            </div>
        );
    }
}

export default Index;