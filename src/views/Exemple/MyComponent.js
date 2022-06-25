import React from "react"
import ChildrenComponent from "./ChildComponent"
import FromComponent from "./FromComponent"

class MyComponent extends React.Component {

    state = { 
        courses: [
            {
                id: '1',
                name: 'HTML CSS',
                describe: 'Học miễn phí HTML CSS trong 1 tuần',
                coin: 60
            },
            {
                id: '2',
                name: 'Javascript',
                describe: 'Học Javascript trong 2 tuần',
                coin: 500
            },
            {
                id: '3',
                name: 'Responsive Web',
                describe: 'Học Responsive Web trong 4 ngày',
                coin: 600
            },
            {
                id: '4',
                name: 'React JS',
                describe: 'Học React JS trong 1 tháng',
                coin: 8900
            },
        ]
    } 


    createNewCourses = (course) => {
        this.setState({
            // Cập nhật lại courses 
            courses: [...this.state.courses,course]
        })
    }

    // Xl xóa khóa học 
    handleDeleteCourse = (course)=> {
        let listCourses = this.state.courses
        listCourses = listCourses.filter(item => item.id !== course.id)
       
        this.setState({
            courses: listCourses
        })
    }


    // Hàm này là 1 nơi thích hợp để gọi API
    componentDidmount = () => {
        console.log(' ')
    }

    // Khi được updata ví dụ như xóa phần tử ,thì sẽ lọt vào đây, khi ta cần xl so sánh dl cữ và mới
    componentDidUpdate = (prevProps, prevState) => {
        console.log( prevState, this.state)
    }
    
    render () {
      
        return (
            <>
                <FromComponent createNewCourses={this.createNewCourses}/>
                <ChildrenComponent handleDeleteCourse={this.handleDeleteCourse} courses={this.state.courses} /> 
            </>
        )
    }
}

export default MyComponent;