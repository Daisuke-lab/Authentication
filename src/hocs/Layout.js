import React, {useEffect }from 'react'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import * as actions from '../actions/action'
const Layout = (props) => {
    useEffect(() => {
        props.checkAuthenticated()
        props.load_user()
    }, [])
    return (
    <div>
        <Navbar/>
        {props.children}
    </div>
)
}
const mapDispatchToProps = dispatch => {
    return {
        checkAuthenticated: () => dispatch(actions.checkAuthenticated()),
        load_user: () => dispatch(actions.load_user())
    }
}
export default connect(null, mapDispatchToProps)(Layout)