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

const theme = createTheme();

export default function SignUp() {
    let navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(process.env.REACT_APP_API_URL + "/users/signup", {
            method: "post",
            body: JSON.stringify({
                name: event.target.querySelector('input[name=name]').value,
                email: event.target.querySelector('input[name=email]').value,
                username: event.target.querySelector('input[name=username]').value,
                password: event.target.querySelector('input[name=password]').value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const userRegistered = await response.json()
        if (userRegistered.success) {
            navigate('/login')
        } else {
            window.alert(userRegistered.messages)
        }
    };

    return (
        <>
        <Navbar />
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                        >
                            <Avatar sx={{ m: 0, bgcolor: "#012848" }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h3" variant="h5">
                               <b>Sign up</b> 
                            </Typography>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{ mt: 3 }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            name="name"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="username"
                                            label="Username"
                                            name="username"
                                            autoComplete="username"
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
                                    <b>Sign Up</b>
                                </Button>
                                <div className="btn btn-ouline-dark  container-fluid mt-2 mb-2">
                                    <p> <b>Do you already have an account ?</b> 
                                        <Link
                                            to="/login"
                                            className="btn btn-ouline"
                                            style={{ color: "blue", textDecoration: 'none' }}
                                        > <b>Log In</b>
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
