
const initState = {
    users: [
        {id: '1', name: 'Nhung'},
        {id: '2', name: 'Nguyện'},
        {id: '3', name: 'Dương'},
        {id: '4', name: 'Lan'},
        {id: '5', name: 'Diễm'},
        {id: '6', name: 'Út'},
    ],  
}

// state là nới lưu trữ data của Redux, gán cho state có gtri khởi tạo = initState
const rootReducer = (state = initState, action) => {

    switch(action.type) {
        case 'DELETE_USER':
            // Chú ý đặt tên biến giống với tên ND data
            let users = state.users

            // Lặp qua và trả lại gtri là mảng mới 
            users = users.filter(user => user.id !== action.payload.id)

            // Lấy users ghi đè state, đặt state ở đây vì sau chúng ta có thể lm việc với nhiều data nên data nào cần sửa thì ta mới cần ghi đè
            return{
                ...state,users
            }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1000000)
            let user = {
                id: id,
                name: `Nguyen Van ${id}`
            }
            return{
                ...state,users:[...state.users,user]
            }
           
        default:
            return state
    }

}

export default rootReducer