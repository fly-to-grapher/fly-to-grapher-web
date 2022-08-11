import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Nav2";
import { AuthContext } from '../context/auth'
import { useContext } from "react";
import { useRequest } from "../hooks/useRequest"


const theme = createTheme();

export default function SignUp() {
    const navigate = useNavigate();
    const sendRequest = useRequest()
    const auth = useContext(AuthContext)
    const handleSubmit = (event) => {
    event.preventDefault();
    sendRequest(process.env.REACT_APP_API_URL + "/users/login", {}, {
        userNameOrEmail: event.target.querySelector('input[name=userNameOrEmail]').value,
        password: event.target.querySelector('input[name=password]').value
    }, { type: 'json' }, 'POST')
        .then((response) => {
            console.log(response);
        if (response.success) {
            auth.login(response) 
            navigate('/')
        } else {
            window.alert(response.messages)
            }
        });
    };

    return (
        <>
        <Navbar />
            <div className='d-flex justify-content-center align-items-center flex-wrap mt-3 mb-2'>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: "#012848" }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Log In
                            </Typography>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{ mt: 3 }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="userNameOrEmail"
                                        label="Username or Email"
                                        name="userNameOrEmail"
                                        autoComplete="current-userNameOrEmail"
                                        autoFocus
                                    />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, backgroundColor: "#012848" }}
                                >
                                    Log In
                                </Button>
                                <div className="btn btn-ouline-dark  container-fluid mt-2 mb-2">
                                    <p> Don't have an account ?
                                        <Link
                                            to="/signup"
                                            className="btn btn-ouline"
                                            style={{ color: "blue", textDecoration: 'none' }}
                                        >Sign up
                                        </Link>
                                    </p>
                                </div>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </div>
        </>
    );
}
