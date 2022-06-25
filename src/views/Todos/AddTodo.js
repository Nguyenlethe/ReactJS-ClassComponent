import React from "react"
import { toast } from 'react-toastify'

class AddTodo extends React.Component {

    state = {
        title: ''
    }
    
    
    handleOnchangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleCreateAddTodo = () => {
        if(this.state.title) {
            let todo = {
                id: Math.floor(Math.random() * 1000000),
                title: this.state.title
            }
            this.props.creacteNewTodo(todo)
            
            this.setState({
                title: ''
            })
        }else{
            toast.error("Vui lòng điền công việc !");       // Khi add todo sẽ hiển thị thông báo này 
        }
    }
    
    render () {

        let {title} = this.state
        return (
            <> 
               <div className="add-todo">
                    <input type="text" value={title} onChange={(e) => this.handleOnchangeTitle(e)}/>
                    <button type="button" onClick={() => this.handleCreateAddTodo()} >Add</button>
                </div>
            
            </>
        )
    }
}

export default AddTodo