import React from 'react';
import PortfolioContainer from './PortfolioContainer';
import FooterComponent from "../FooterComponent";

export default function PersonalPagesComponent({children, title}) {
    document.title = title;
    return (
        <PortfolioContainer>
            {children}
            <FooterComponent/>
        </PortfolioContainer>
    );
}

export const PersonalPagesViewComponent = React.memo(PersonalPagesComponent);
