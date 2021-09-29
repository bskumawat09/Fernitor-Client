import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'

const Container = styled.div`
    height: 60px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-item: center;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-item: center;
    justify-content: flex-end;
`;
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{ color: "gray", fontSize: 18 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>FERNITOR</Logo>
                </Center>
                <Right>
                    <MenuItems>REGISTER</MenuItems>
                    <MenuItems>SIGN IN</MenuItems>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
