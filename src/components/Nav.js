import React, { PureComponent } from 'react'
import Link from 'redux-first-router-link'
import styled from 'styled-components';

const navItems = [
    { label: 'Home', path: { type: 'HOME' } },
    { label: 'Posts', path: { type: 'EXPLORE_POSTS' } },
]

const NavWrapper = styled.div`
    display: flex;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    &:hover{
        color:red;
    }
`

class Nav extends PureComponent {
    render() {
        return (
            <NavWrapper>
                {navItems.map((item, i) => (
                    <div
                        key={i}
                    >
                        <StyledLink to={item.path}                        >
                            <span>{item.label} &nbsp;  &nbsp;</span>
                        </StyledLink>
                    </div>
                ))}
            </NavWrapper>
        )
    }
}


export default Nav;
