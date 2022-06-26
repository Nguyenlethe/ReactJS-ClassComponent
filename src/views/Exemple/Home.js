import React from "react"

// Lấy ra hàm connect từ Redux
import { connect } from "react-redux"

class Home extends React.Component {




    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user)
    }

    handleCreateUser = () => {
        this.props.AddUserRedux()
    }



    render () {

        // Lấy đc data dữ liệu từ redux qua props
        let listUser = this.props.dataRedux

        return (
            <> 
                <h1>Listuser với Redux</h1>
                <button style={{margin: '0 12px'}} onClick={() => this.handleCreateUser()}>Add New</button>
                {listUser && listUser.length > 0 && 
                listUser.map((user, index) => {
                    return (
                        <div style={{display: 'flex', alignItems: 'center'}} key={user.id}>
                            <h4 style={{margin: '12px 12px', minWidth: '100px'}}>{index + 1} -- {user.name}</h4> 
                            <button type="button" onClick={() => this.handleDeleteUser(user)}>Delete</button>
                        </div>
                    )
                })}
            </>
        )
    }
}


// state là dữ liệu data của Redux trả ra thông qua hàm connect của Redux
const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}


// Thực hiện truyền Actions từ React đến data của Redux qua hàm này của Redux
const mapDispatchToProps = (dispatch) =>{
    return {
        deleteUserRedux: (userDelete) => dispatch({
            type: 'DELETE_USER', 
            payload: userDelete
        }),
        AddUserRedux: () => dispatch({
            type: 'CREATE_USER'
        })
    }
}

// hàm connect() trong Home Giúp redux và react bắt tay với nhau, và lấy đc dl tu redux trả data ra cho mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(Home)