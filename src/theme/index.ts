import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#202124',
            paper: '#202124',
        },
        primary: {
            main: '#8ab4f8',
        },
        text: {
            primary: '#e8eaed',
            secondary: '#9aa0a6',
        },
        divider: '#3c4043',
    },
    typography: {
        fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
        fontSize: 14,
        button: {
            textTransform: 'none',
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#202124',
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    backgroundColor: '#2b2b2b',
                    color: '#fff',
                    padding: '10px 12px',
                    fontSize: '16px',
                    borderRadius: 6,
                    border: '1px solid transparent',
                    transition: 'none',
                    boxShadow: 'none',
                    '&:hover': {
                        borderColor: 'transparent',
                    },
                    '&:focus-within': {
                        borderColor: 'transparent',
                        boxShadow: 'none',
                    },
                },
                input: {
                    '::placeholder': {
                        color: '#aaa',
                        opacity: 1,
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    backgroundColor: '#2b2b2b',
                    color: '#fff',
                    padding: '10px 12px',
                    fontSize: '16px',
                    borderRadius: 6,
                    border: '1px solid transparent',
                    boxShadow: 'none',
                    transition: 'none',
                    '&:hover': {
                        borderColor: 'transparent',
                    },
                    '&:focus': {
                        borderColor: 'transparent',
                        boxShadow: 'none',
                    },
                    '&.Mui-focused': {
                        borderColor: 'transparent',
                        boxShadow: 'none',
                    },
                    '&.MuiSelect-select:focus': {
                        backgroundColor: '#2b2b2b',
                    },
                },
                icon: {
                    color: '#aaa',
                },
                select: {
                    '&:focus': {
                        backgroundColor: '#2b2b2b',
                    },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#2b2b2b',
                    color: '#fff',
                    borderRadius: 8,
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    '&.Mui-selected': {
                        backgroundColor: '#3c4043',
                    },
                    '&:hover': {
                        backgroundColor: '#303134',
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    backgroundColor: '#2b2b2b',
                    color: '#fff',
                    borderRadius: 6,
                    padding: '0px 2px',
                },
                inputRoot: {
                    padding: '8px 12px !important',
                },
                popupIndicator: {
                    color: '#aaa',
                },
                option: {
                    fontSize: '14px',
                    '&[aria-selected="true"]': {
                        backgroundColor: '#3c4043',
                    },
                    '&:hover': {
                        backgroundColor: '#303134',
                    },
                },
            },
        },

    },
})

export default theme
