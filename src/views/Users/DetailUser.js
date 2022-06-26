import React from "react"
import axios from "axios"
import {withRouter} from 'react-router-dom'


class DetailUser extends React.Component {

    state = {
        user: {},
    }
    
    async componentDidMount(){
        if(this.props.match && this.props.match.params){
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }


    handleBackDetail() {
        this.props.history.push(`/users`)
    }


    render () {
        
        let { user} = this.state
        let isEmptyObj = Object.keys(user).length === 0;

        return (<> 
               {isEmptyObj === false && 
                    <>
                        <h2>Hello User Id : {user.id}</h2>
                         <div className="information-user">
                            <img src={user.avatar} alt={user.last_name}/>
                            <h4>Fullname : {user.first_name} {user.last_name}</h4>
                            <h4>Email :{user.email}</h4>
                            <button type="button" onClick={() => this.handleBackDetail()}>Back</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser)