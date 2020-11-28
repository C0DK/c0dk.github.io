import React from "react";
import { MainContainer, PageTitle } from "./style";
import TagLine from "./TagLine";
import LinkRow from "./LinkRow";
import Greeting from "./Greeting"

export default () => (
  <MainContainer>
    <Header />
    <TagLine />
    <LinkRow />
    <Greeting />
  </MainContainer>
);

const Header = () => <PageTitle>Casper Weiss Bang</PageTitle>;