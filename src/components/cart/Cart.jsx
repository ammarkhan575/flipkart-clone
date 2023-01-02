
import { Grid, Box, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";

import CartItem from './CartItem'
import CartPayment from './CartPayment'
import EmptyCart from "./EmptyCart";

import PayButton from "./PayButton";

const Container = styled(Grid)(({theme})=>({
    padding: '30px 135px',
    [theme.breakpoints.down('md')]:{
        padding: '15px 0'
    }
}))


const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`

const ButtonWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0/ 10%);
    border-top: 1px solid #f0f0f0;
`


const LeftContainer = styled(Grid)(({theme})=>({
    paddingRight: '15px',
    [theme.breakpoints.down('md')]:{
        marginBottom:15
    }
}))


const Cart = () => {

    const {cartItems} = useSelector(state => state.cart); 

    return (
        <>
            {
                cartItems.length ?
                <Container container>
                    <LeftContainer item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart ({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item =>(
                                <CartItem item={item}/>
                            ))
                        }
                        <ButtonWrapper>
                            <PayButton cartItems={cartItems} />
                        </ButtonWrapper>
                    </LeftContainer>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <CartPayment cartItems={cartItems}/>
                    </Grid>
                </Container>
                :
                <EmptyCart/>
            }
        </>
    )
}

export default Cart;