import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Avatar from '@mui/material/Avatar';
import { useState , useEffect } from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useRequest } from "../hooks/useRequest"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


const HomeImage = ({ picture, i }) => {
    // const [hover, setHover] = useState({ is: false, index: -1 })
    const [open, setOpen] = useState(false);
    const sendRequest = useRequest()
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const addRemoveLike = () => {
        sendRequest(`${process.env.REACT_APP_API_URL}/likes/${i}`, {}, {}, {
            type: 'json',
            auth: true
        }, 'post')
            .then((response) => {
                console.log(response)
            });
    }
    const addRemoveSave = () => {
        sendRequest(`${process.env.REACT_APP_API_URL}/save/${i}`, {}, {}, {
            type: 'json',
            auth: true
        }, 'post')
            .then((response) => {
                console.log(response)
            });
    }
    return (
        <ImageListItem style={{}} key={i}>
            <img
                onClick={handleOpen}
                style={{
                    width: "100%",
                    cursor: "pointer"
                }}
                src={`${picture.file_name}?w=248&fit=crop&auto=format`}
                srcSet={`${picture.file_name}?w=248&fit=crop&auto=format&dpr=2 2x`}
            />
                <div style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    bottom: '2px'

                }}>

                    {/* <Avatar style={{ position: "absolute", bottom: "2em", left: "1em" }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                    <div >
                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onClick={addRemoveLike} />
                        <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon/>} onClick={addRemoveSave}  />
                    </div> */}
                </div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll="body"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                        <img
                            src={picture.user_id.avatar}
                            alt="avatar" style={{ width: "10em", height: "10em", borderRadius: "50%" }} />
                        </div>
                        <div>
                        <LocationOnOutlinedIcon />
                            {picture.location}
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent dividers={true}>
                    <div className="mb-3 d-flex justify-content-end align-items-center gap-3">  
                        <button className="btn btn-outline-secondary">
                            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onClick={addRemoveLike} />
                        </button>
                        <button className="btn btn-outline-secondary">
                            <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}  onClick={addRemoveSave} />
                        </button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <img
                            style={{
                                width: "35em",
                                height: "auto",
                                cursor: "pointer",
                            }}
                            src={`${picture.file_name}?w=248&fit=crop&auto=format`}
                            srcSet={`${picture.file_name}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </ImageListItem>
    )
}

export default HomeImage;