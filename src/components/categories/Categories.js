import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Nav1 from '../navbar/Nav1';


const images = [
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxlNeyGrGZxjytvexnR2xi77-zBBxRr_U3Q&usqp=CAU',
        title: 'Breakfast',
        width: '40%',
    },
    {
        url: '/static/images/image-list/burgers.jpg',
        title: 'Burgers',
        width: '30%',
    },
    {
        url: '/static/images/image-list/camera.jpg',
        title: 'Camera',
        width: '30%',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

export default function ButtonBases() {
    const classes = useStyles();

    return (
        <>
            <Nav1 />
            <div>
                <div>
                    {/* Start hero*/}
                    <div className="herro">
                        <div className="content">
                            {/*     <h1>Royalty Free Stock Photos</h1> */}
                            <h1>The best free stock photos and videos</h1>
                            <input type="search" className="find" />
                        </div>
                    </div>
                    {/* End hero*/}
                    <navbar>
                        <div>
                            <ul className="nav justify-content-center mt-3 mb-2">
                                <Link to="/" className="nav-item" style={{ textDecoration: 'none' }}>
                                    <a className="nav-link" style={{ color: "black" }}><b><h4><u>Home</u></h4></b></a>
                                </Link>
                                <Link to="/videos" className="nav-item" style={{ textDecoration: 'none' }}>
                                    <a className="nav-link" style={{ color: "black" }}><b><h4><u>Videos</u></h4></b></a>
                                </Link>
                                <Link to="/categories" className="nav-item" style={{ textDecoration: 'none' }}>
                                    <a className="nav-link" style={{ color: "black" }}><b><h4><u>Categories</u></h4></b></a>
                                </Link>
                            </ul>
                        </div>
                    </navbar>
                </div>
                <div className='mt-5'>
                    <a href="#" className="prev">
                        &lt;
                    </a>
                    <a href="#" className="next">
                        &gt;
                    </a>
                    {/* <h1 className="d-flex justify-content-center">Free Stock Videos</h1> */}
                </div>
                <Link to="/s-category">
                    <div className={classes.root}>
                        {images.map((image) => (
                            <ButtonBase
                                focusRipple
                                key={image.title}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: image.width,
                                }}
                            >
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url(${image.url})`,
                                    }}
                                />
                                <span className={classes.imageBackdrop} />
                                <span className={classes.imageButton}>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        className={classes.imageTitle}
                                    >
                                        {image.title}
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                            </ButtonBase>
                        ))}
                    </div>
                </Link>
            </div>
        </>
    );
}


//  --legacy-peer-deps
