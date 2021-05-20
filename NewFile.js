import React,{useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import './New.css'
import firebase from 'firebase';
import {auth,db,storage} from './firebase'

import {makeStyles} from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'

function getModalStyle(){
    return {
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
    };
}
const useStyles = makeStyles((theme) =>({
    paper:{
        position:'absolute',
        width:400,
        backgroundColor:theme.palette.background.paper,
        border:'2px solid #000',
        boxShadow:theme.shadows[5],
        padding:theme.spacing(2,3,4),
    },
}))

function NewFile() {

    const classes=useStyles();
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)
    const [file, setFile] = useState(null)
    const [uploading, setUploading] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }
    const handleUpload = () => {
        setUploading(true)

        storage.ref(`files/${file.name}`).put(file).then(snapshot => {
            console.log(snapshot)

            storage.ref('files').child(file.name).getDownloadURL().then(url => {
                //post image inside the db

                db.collection('myFiles').add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: file.name,
                    fileUrl: url,
                    size: snapshot._delegate.bytesTransferred,
                })

                setUploading(false)
                setOpen(false)
                setFile(null)
            })

            storage.ref('files').child(file.name).getMetadata().then(meta => {
                console.log(meta.size)
            })

        })
    }

    return (
        <div className="newfile">
            <div className="newfile_cont" onClick={handleOpen}>
            <AddIcon />
                <p>New</p>
                <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
<div style={modalStyle} className={classes.paper}>
                    <p>Select files you want to upload!</p>
                    {
                        uploading ? (
                            <p>Uploading...</p>
                        ) : (
                                <>
                                    <input type="file" onChange={handleChange} />
                                    <button onClick={handleUpload}>Upload</button>
                                </>
                            )
                    }
                </div>
</Modal>
            </div>
        </div>
    )
}

export default NewFile
