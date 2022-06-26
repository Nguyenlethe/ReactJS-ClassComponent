import React from "react";
import './Nav.scss'


class Navbar extends React.Component {
    render () {
        let {NavLink} = this.props
        return (
            <div className="topnav">
                <NavLink  activeClassName="active" to="/" exact={true}>Home</NavLink>
                <NavLink  activeClassName="active" to="/todos">Todos</NavLink>
                <NavLink  activeClassName="active" to="/courses">Courses</NavLink>
                <NavLink  activeClassName="active" to="/users">Users</NavLink>
            </div>
        )
    }
}
export default Navbar