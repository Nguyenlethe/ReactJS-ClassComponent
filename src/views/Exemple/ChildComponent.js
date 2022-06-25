import React from "react";

// Component Con nhận đc props là name từ component cha
class ChildrenComponent extends React.Component {

    state = {
        showCourses: false,
    }

    handleShowHine = () => {
        this.setState({
            showCourses: !this.state.showCourses
        })
    }

    handleDeleteCourse = (course) => {
        this.props.handleDeleteCourse(course)
    }


    render () {
        // Lấy ra dl từ Props của componet cha truyền xuống đây
        const {courses } = this.props
        const {showCourses} = this.state
        return (
            <>
                {showCourses === false  ? 
                        <button onClick={()=> this.handleShowHine()}>Show</button>
                    : 
                    <div className="list-courses">
                        {courses.map((course, index) => {
                            if(course.coin > 50){
                                return (
                                    <div key={index}>
                                        <h4>Tên Khóa Học : {course.name}</h4>
                                        <h4>Mô Tả Khóa Học : {course.describe}</h4>
                                        <h4>Giá : {course.coin}$</h4>
                                        <div><button title={index} onClick={(e)=> this.handleDeleteCourse(course)}>Xóa</button> <button>Sửa</button></div>
                                        <br/>
                                    </div>
                                )
                            }else {
                                return null;
                            }
                        })}
                        <button  onClick={()=> this.handleShowHine()}>Hide</button>
                    </div>
                }
            </>
        )
    }
}
export default ChildrenComponent;