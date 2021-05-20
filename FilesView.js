import React,{useState,useEffect} from 'react'
import './FilesView.css'
import {db} from './firebase';
import FileItem from './FileItem'
import FileCard from './FileCard'
function FilesView() {

    const [files, setFiles] = useState([])
    useEffect(() => {
    db.collection('myFiles').onSnapshot(snapshot =>{
        setFiles(snapshot.docs.map(doc =>({
            id:doc.id,
            data:doc.data()
        })))
    })
        
    }, [])

    return (
        <div className="filesview">
        <div className="files_row">
{
    files.slice(0,5).map(({id,data})=>(
      <FileCard name={data.caption} />
    ))
}
        </div>
            <div className="file_title">
                <div className="file_left">
                    <p>Name</p>
                </div>
                <div className="file_right">
                    <p>Last modified</p>
                    <p>size</p>
                </div>
            </div>
            {
                files.map(({ id, data }) => (
                    <FileItem id={id} caption={data.caption} timestamp={data.timestamp} fileUrl={data.fileUrl} size={data.size} />
                ))
            }
        </div>
    )
}

export default FilesView
