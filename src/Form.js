import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {MenuItem} from "@mui/material";
import {Fragment, useReducer, useState} from "react";
import { Button } from "@material-ui/core";

const Brand = [
    {
        label: 'Adidas',
        value: 'adidas',
    },
    {
        label: 'Reebok',
        value: 'reebok',
    },
    {
        label: 'Nike',
        value: 'nike',
    }
];

const ProductType = [
    {
        label: 'Fruits',
        value: 'fruits',
    },
    {
        label: 'Juice',
        value: 'juice',
    },
    {
        label: 'Dry Fruits',
        value: 'dry fruits',
    }
];

const SalesType = [
    {
        label: 'Online',
        value: 'online',
    },
    {
        label: 'Offline',
        value: 'offline',
    },
    {
        label: 'Direct',
        value: 'direct',
    }
];

export default function FormPropsTextFields() {
    const [formError, setFormError] = useState({})
    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {branchCode: '', branch: '', brand: '', saleType: '', productType: ''}
    );

    const handleSubmit = evt => {
        evt.preventDefault();

        let data = { formInput };
        console.log('data---->', data.formInput)
        let formData = new FormData()
        formData.append("branchCode", data.formInput.branchCode)
        formData.append("branch", data.formInput.branch)
        formData.append("brand", data.formInput.brand)
        formData.append("saleType", data.formInput.saleType)
        formData.append("productType", data.formInput.productType)
    };

    const handleInput = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setFormInput({ [name]: newValue });
    };
    console.log('form input---->', formInput)
    return (
        <Fragment>
            <div>
                <div>
                    <h6 variant="outlined" style={{ color: "red" }}>
                        Enter Clock In Information
                    </h6>
                </div>
                <form onSubmit={handleSubmit}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                    }}
                    style={{ padding: 10 }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="outlined-required"
                            name="branchCode"
                            label="Branch Code"
                            onChange={handleInput}
                        />
                        <TextField
                            id="outlined-disabled"
                            name="branch"
                            label="Branch"
                            onChange={handleInput}
                        />
                    </div>
                </Box>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '100ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="standard-select-currency"
                            select
                            required
                            label="Brand"
                            name="brand"
                            variant="standard"
                            aria-label="select...."
                            onChange={handleInput}
                        >
                            {Brand.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="standard-select-currency"
                            select
                            required
                            label="Sales Type"
                            name="saleType"
                            variant="standard"
                            aria-label="select...."
                            onChange={handleInput}
                        >
                            {Brand.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="standard-select-currency"
                            select
                            required
                            label="Product Type"
                            name="productType"
                            variant="standard"
                            aria-label="select...."
                            onChange={handleInput}
                        >
                            {ProductType.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </Fragment>
    )
}
