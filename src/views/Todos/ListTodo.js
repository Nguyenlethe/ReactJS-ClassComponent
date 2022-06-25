import React from "react"
import './ListTodo.scss'
import { toast } from 'react-toastify'

import AddTodo from './AddTodo'

class ListTodo extends React.Component {

    state = {
        listTodo: [
            {id: 1, title: 'Quét Nhà'},
            {id: 2, title: 'Cắm Cơm'},
            {id: 3, title: 'Rửa Bát'},
            {id: 4, title: 'Học Bài'},
        ],
        editTodo: {}
    }

    creacteNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success("Thêm mới thành công !"); // Khi add todo sẽ hiển thị thông báo này 
    }
    


    handleDeleteTodo = (element) => {
        let currentTodos = this.state.listTodo
        currentTodos = currentTodos.filter(todo => todo.id !== element.id)

        this.setState({
            listTodo: currentTodos
        })
        toast.success(`Đã xóa công việc ${element.title} !`); 
    }

    // Xl khi ẩn sửa todo
    handleEditTodo = (todo) => {
        let isEmptyObj = Object.keys(todo).length === 0
        let { listTodo,editTodo } = this.state

        // Save
        if(isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodo]

            // Trả ra vị trí index của phần tử 
            let indexObj = listTodoCopy.findIndex(item => item.id === todo.id)
            console.log(indexObj)

            listTodoCopy[indexObj].title = editTodo.title

            this.setState({
                listTodo : listTodoCopy,
                editTodo: {}
            })
            toast.success(`Thay đổi thành công !`); 
        }else{
            // edit
            this.setState({
                editTodo: todo
            })
        }
    }


    handleOnchangeEditTodo = (e) => {
        // Sao chép dl của state editTodo
        let editTodoCopy = {...this.state.editTodo}

        // Sử title thành Dl nhập vào input của người dùng
        editTodoCopy.title = e.target.value

        this.setState({
            // Sét lại state editTodo
            editTodo: editTodoCopy
        })
    }



    render () {
        let { listTodo, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0


        return (
            <>
               <div className="list-todo-container">

                    <AddTodo creacteNewTodo={this.creacteNewTodo}/>

                    <div className="list-todo-content">
                        {listTodo && listTodo.length > 0 && listTodo.map((element, index) => {
                            return ( 
                                <div key={element.id} className="todo-child">
                                    {isEmptyObj === true ? 
                                        <>
                                            <h4>{index+1}</h4>
                                            <h4>{element.title}</h4>
                                        </>
                                    :
                                        <>
                                            <h4>{index+1}</h4>
                                            {editTodo.id === element.id ?
                                                <input value={editTodo.title} onChange={(e) => this.handleOnchangeEditTodo(e)} />
                                                :
                                                <h4>{element.title}</h4>
                                            }
                                        </>
                                    }



                                    <div>
                                        <button onClick={()=> this.handleEditTodo(element)} className="btn">
                                            {isEmptyObj === false && editTodo.id === element.id ? 'Save': 'Sửa'}
                                        </button>
                                        <button onClick={() => this.handleDeleteTodo(element)} className="btn">Xóa</button> 
                                    </div> 
                                </div>
                            )
                        })} 
                    </div>
               </div>
            
            </>
        )
    }
}

export default ListTodo