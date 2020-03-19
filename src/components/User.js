import React, { Component } from 'react';
import app from './Firebase';
import Dropzone from 'react-dropzone';
import Progress from './Progress';
//import { render } from '@testing-library/react';
import Button from '@material-ui/core/Button'; 

 

class User extends Component{
    state = {
        progress:0,
        user_id: localStorage.getItem("user_id"),
        isUploading: null,
    };
     

    handleUpload(files){
        for(let i=0; i< files.length; i++) {
            const uploadTask = app.storage().ref(`images/${files.item(i).name}`)
            .get(files.item(i));
        uploadTask.on("state_changed",
        (snapshot) => {
            const isUploading = true;
            this.setState({ isUploading });
            const progress = Math.round(( snapshot.bytesTransferred  / snapshot.totalBytes )  * 100 );
            this.setState({ progress });
        },
        (error) => {

        },
        () => {
            app.storage().ref("image")
            .child(files.item(i).name)
            .getDownloadURL()
            .then((Url) => {
                const isUploading = false;
                this.setState({isUploading});
                const image={
                    url:Url,
                     
                }
            app.firestore().collection(this.state.user_id).add(image).then(res => {
                this.props.history.push("/photo");
            });
            });
        }

        )
        }
    }
     
    render() {
        return (
            <div className="container">
                
                  {this.state.isUploading ? (
                      <Progress percentage={this.state.progress} />
                  ) : ""}  
            
                
               <Dropzone>
                   {({getRootProps, getInputProps}) => (
                     <section className='drop-zone'>  
                         <div {...getRootProps()}>
                             <input {...getInputProps()} />
                             <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                     </section> 
                   )}
                   
               </Dropzone>
               <Button variant="contained" color="primary" className="btn-logout" onClick={app.auth().signOut} >
                 Log out
               </Button>
            </div>
        )
    }
     
}
export default User;