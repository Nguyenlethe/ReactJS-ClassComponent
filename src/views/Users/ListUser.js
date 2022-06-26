import React from "react"
import axios from "axios"
import './ListUser.scss'
import {withRouter} from 'react-router-dom'


class ListUser extends React.Component {

    state = {
        listUser: []
    }

    // Ngay sau khi hàm render được gọi đến lần đầu tiên chạy xong thì hàm này sẽ được chạy.
    componentDidMount = async () => {
        let res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        }) 
    }

    handleViewDeteilUser = (user) => {
        this.props.history.push(`/users/${user.id}`)
    }
    
    render () {
        let {listUser} = this.state
        return (
            <> 
               <div className="list-user-container">
                    <h1>Danh sách người dùng</h1>
                    {listUser && listUser.length > 0 && 
                        listUser.map((user, index) => {
                            return (
                                    <div key={user.id} className="information-user" onClick={() => this.handleViewDeteilUser(user)}>
                                        <h4>{index + 1}</h4>
                                        <h4>Fullname : {user.first_name} {user.last_name}</h4>
                                     </div>
                                )
                    })}
               </div>
            </>
        )
    }
}

export default withRouter(ListUser) 