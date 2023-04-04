import React from 'react'
import axios from 'axios';
 
class Home extends React.Component{
 
    constructor(){
        super();
        this.state = {
            selectedFile:'',
        }
 
        this.handleInputChange = this.handleInputChange.bind(this);
    }
 
    handleInputChange(event) {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
 
        reader.onload = (e) => {
             
            this.setState({
                selectedFile: e.target.result,
              })
        }
 
    }
 
    submit(){
        const formData = { image: this.state.selectedFile }
         console.log(formData);
        let url = "http://ankursingh.xyz/api/productinsert.php";
        axios.post(url, formData)
        .then(res => { // then print response status
            console.log(res.data);
        })
 
    }
 
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />
 
                            <h3 className="text-white">React js Upload and Save Base64 Image - Tutsmake.com</h3>
                            <br />
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="text-white">Select File :</label>
                                    <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                                </div>
                            </div>
 
                            <div className="form-row">
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Save</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )  
    }
}
 
export default Home;