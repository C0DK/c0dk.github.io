import React, { ReactElement } from "react";
import moment, { Moment } from 'moment'
import styled from "styled-components";
import {
    color11
} from "../theme";
import { FAIcon, } from "./style";

import { faHeart, faBirthdayCake, faSnowman, faBeer, faGhost } from "@fortawesome/free-solid-svg-icons";


export default () => {
    const time = moment()
    let greeting = getGreetingFromDate(time)
    if (greeting === undefined)
        greeting = getGreetingFromWeekday(time.day())

    if (greeting === undefined)
        return <></>

    return greeting
}
const getGreetingFromWeekday = (weekday: number) => {
    const greetings: { [Key: string]: ReactElement } = {
        5: <Greeting>Have a nice friday! <Icon icon={faBeer} /></Greeting>, // Friday
    }

    return greetings[weekday]
}

const getGreetingFromDate = (date: Moment) => {
    const index = `${date.date()}-${date.month() + 1}`
    console.log(index)
    const greetings: { [Key: string]: ReactElement } = {
        "1-1": <NewYearGreeting />,
        "9-2": <Greeting>Happy My Birthday! <Icon icon={faBirthdayCake} /></Greeting>,
        "14-2": <Greeting>Happy Valentines! <Icon icon={faHeart} /></Greeting>,
        "25-2": <Greeting>Happy Chinese New Year!</Greeting>,
        "31-11": <Greeting>Happy Halloween!<Icon icon={faGhost} /></Greeting>,
        "1-12": <ChristmasGreeting />,
        "24-12": <ChristmasGreeting />,
        "25-12": <ChristmasGreeting />,
        "31-12": <NewYearGreeting />,
    }

    return greetings[index]
}

const ChristmasGreeting = () => <Greeting>Merry Christmas! <Icon icon={faSnowman} /></Greeting>
const NewYearGreeting = () => <Greeting>Happy New Year!</Greeting>

export const Greeting = styled.div`
  text-align: center;
  filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.5));
  padding: 20px 0px 0px;
  color: ${color11}
`;

const Icon = ({ icon }: { icon: any }) => (
    <FAIcon icon={icon} />
);