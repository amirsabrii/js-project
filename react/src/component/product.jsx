import React, { Component } from 'react';


class Product extends Component {
    imgUrl = "https://picsum.photos/150/170"
    aUrl = "https://digikala.com"
    
    state = {
        count : 0 , 
        productName : 't-shirt'
        
    }

    style = {
        borderRadius : '50%',
        marginLeft : "2rem"
    }

    render() { 
        let  list = ['iten one','item two','item three']
        return (
            <>
            <div>
                <span className=' m-2 '>{this.state.productName}</span>
                <span className='m-2 badge bg-primary'>{this.format(this.count)}</span>
                <button onClick={this.handleInceremnt} className='m-2 btn btn-sm btn-success'>+</button>
                <button onClick={this.handleDeceremnt} className='m-2 btn btn-sm btn-warning'>-</button>
                <button onClick={this.handleDelete} className='m-2 btn btn-sm btn-danger'>delete</button>
                <a href={this.aUrl}>digikala</a>
                <ul>
                    {list.map((item,index) => {return <li key={index}>{item}</li>})}
                </ul>
                <img src={this.imgUrl} style={this.style} alt=""/>
            </div>
            </>
        );
    }

    handleInceremnt = () =>{
        this.setState({count : this.state.count +1})
    }
    handleDeceremnt = () =>{
        this.setState({count : this.state.count -1})
    }
    handleDelete = () =>{
       console.log("delete");
    }

    format(){
        if (this.state.count == 0) {
            return "zero"
        }else{
            return this.state.count
        }
    }
}
 
export default Product;