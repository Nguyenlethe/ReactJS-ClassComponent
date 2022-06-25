import React from "react";

class FromComponent extends React.Component {

    state = {
        name: '',
        describe: '',
        coin: 0,
    }

    handleOnChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    handleOnChangeDescribe = (e) => {
        this.setState({describe: e.target.value})
    }
    handleOnChangeCoin = (e) => {
        this.setState({coin: e.target.value})
    }



    handleSubmit = (e) => {
        e.preventDefault()
        // XL logic xl from xong mới thực hiện ở dưới 
        this.props.createNewCourses({
            id:  Math.floor(Math.random() * 100),
            name: this.state.name,
            describe: this.state.describe,
            coin: this.state.coin
        })
    }



    render () {
        return (
            <>
                <form className="from" action="">
                    <label>Name :</label><br/>
                    <input type="text" value={this.state.name} onChange={(e)=> this.handleOnChangeName(e)} /><br/>
                    <label>Describe :</label><br/>
                    <input type="text" value={this.state.describe} onChange={(e)=> this.handleOnChangeDescribe(e)} /><br/>
                    <label>Coin :</label><br/>
                    <input type="text" value={this.state.coin} onChange={(e)=> this.handleOnChangeCoin(e)} /><br/><br/>
                    <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)}/>
                </form> 
            </>
        )
    }
}

export default FromComponent;