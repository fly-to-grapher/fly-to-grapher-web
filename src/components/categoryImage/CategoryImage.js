import ImageListItem from "@mui/material/ImageListItem";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState, useEffect, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { AuthContext } from "../context/auth";
import DialogTitle from "@mui/material/DialogTitle";
import { useRequest } from "../hooks/useRequest";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";

const CategoryImage = ({ file, i, likes, saves }) => {
  // const [hover, setHover] = useState({ is: false, index: -1 })
  const [open, setOpen] = useState(false);
  let liked = false;
  let saved = false;
  const auth = useContext(AuthContext);
  const sendRequest = useRequest();
  const file_likes = likes.filter((like) => like.file_id == file.id);
  for (var j = 0; j < file_likes.length; j++) {
    if (file_likes[j].user_id == auth?.user?.id) liked = true;
    break;
  }
  const file_saves = saves.filter((save) => save.file_id == file.id);
  for (var j = 0; j < file_saves.length; j++) {
    if (file_saves[j].user_id == auth?.user?.id) saved = true;
    break;
  }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const addRemoveLike = () => {
    sendRequest(
      `${process.env.REACT_APP_API_URL}/likes/${file.id}`,
      {},
      {},
      {
        type: "json",
        auth: true
      },
      "post"
    ).then((response) => {
      console.log(response);
    });
  };
  const addRemoveSave = () => {
    sendRequest(
      `${process.env.REACT_APP_API_URL}/save/${file.id}`,
      {},
      {},
      {
        type: "json",
        auth: true
      },
      "post"
    ).then((response) => {
      console.log(response);
    });
  };
  return (
    <ImageListItem style={{}} key={i}>
      <img
        onClick={handleOpen}
        style={{
          width: "100%",
          cursor: "pointer"
        }}
        src={`${file.file_name}?w=248&fit=crop&auto=format`}
        srcSet={`${file.file_name}?w=248&fit=crop&auto=format&dpr=2 2x`}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          bottom: "2px"
        }}
      >
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
              <Link
                to={"/profile/" + file?.User?.id}
                className="d-flex gap-3 align-items-center text-decoration-none"
              >
                <img
                  src={file?.User?.avatar}
                  alt="avatar"
                  style={{ width: "3em", height: "3em", borderRadius: "50%" }}
                />
                <span style={{ color: "black" }}>{file?.User?.username}</span>
              </Link>
            </div>
            <div>
              <LocationOnOutlinedIcon />
              {file.location}
            </div>
          </div>
        </DialogTitle>
        <DialogContent dividers={true}>
          <div className="row d-flex justify-content-center">
            <img
              style={{
                width: "35em",
                height: "auto",
                cursor: "pointer"
              }}
              src={`${file.file_name}?w=248&fit=crop&auto=format`}
              srcSet={`${file.file_name}?w=248&fit=crop&auto=format&dpr=2 2x`}
            />
          </div>
          <div className="mb-3 mt-4 d-flex justify-content-center align-items-center gap-3">
            {liked == false ? (
              <button className="btn btn-outline-secondary">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  onClick={addRemoveLike}
                />
              </button>
            ) : (
              <button className="btn btn-outline-secondary">
                <Checkbox
                  {...label}
                  icon={<Favorite />}
                  checkedIcon={<FavoriteBorder />}
                  onClick={addRemoveLike}
                />
              </button>
            )}
            {saved == false ? (
              <button className="btn btn-outline-secondary">
                <Checkbox
                  {...label}
                  icon={<BookmarkBorderIcon />}
                  checkedIcon={<BookmarkIcon />}
                  onClick={addRemoveSave}
                />
              </button>
            ) : (
              <button className="btn btn-outline-secondary">
                <Checkbox
                  {...label}
                  icon={<BookmarkIcon />}
                  checkedIcon={<BookmarkBorderIcon />}
                  onClick={addRemoveSave}
                />
              </button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </ImageListItem>
  );
};

export default CategoryImage;
