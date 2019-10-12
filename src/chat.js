import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const arrayCompanies = ["PowerBitches", "Wager", "Quartet", "Dress For Success", "81cents", "Flatiron"]

const rand = arrayCompanies[Math.floor(Math.random() * arrayCompanies.length)]

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Montserrat',
  headerBgColor: '#944eb8',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#944eb8',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

const steps = [
  {
    id: '0',
    message: '💸 Welcome to Practice Makes Paycheck! 💸',
    trigger: '1',
  },
  {
    id: '1',
    message: 'What is your name? ',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3'
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you! What would you like to do today?',
    trigger: '4'
  },
  {
    id: '4',
    options: [
    { value: 1, label: 'Offer w/ Recruiter', trigger: '5' },
    { value: 2, label: 'Negotiating', trigger: '5' },
    { value: 3, label: 'Mock Interview', trigger: '5' },
    { value: 4, label: 'Salary Expectations', trigger: '14' },
  ]
  },
  {
    id: '5',
    message: 'Okay, lets start!',
    trigger: '6'
  },
  {
    id: '6',
    message: 'Thank you for joining us today. Is now still a good time?',
    trigger: '7'
  },
  {
    id: '7',
    user: true,
    trigger: '8'
  },
  {
    id: '8',
    message: `Great! We’re pleased to offer you a position with ${rand} as a Designer. Your offer will include $80k, $40k, and $5k`,
    trigger: '10'
  },
  {
    id: '10',
    user: true,
    trigger: '11'
  },
  {
    id: '11',
    message: "Your total compensation would be $80k",
    trigger: '12'
  },
  {
    id: '12',
    message: "Any questions so far?",
    trigger: '13'
  },
  {
    id: "13",
    user: true,
    end: true
  },
  {
    id: "14",
    message: "Tell me what state you live in",
    trigger: "15"
  },
  {
    id: "15",
    user: true,
    trigger: "16"
  },
  {
    id: "16",
    message: "In {previousValue}, the average salary is $61,372 as in 2017."
  }
];

class Chat extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <ChatBot steps={steps} />
        </ThemeProvider>
      </div>
    )
  }
}

export default Chat;

// floating
