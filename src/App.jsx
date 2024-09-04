import React from 'react'
import Card from './box'





const App = () => {
  let quiz = [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyperlinking Text Mark Language"
      ],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used for the largest heading?",
      options: [
        "<h1>",
        "<head>",
        "<h6>",
        "<header>"
      ],
      correctAnswer: 0
    },
    {
      question: "Which attribute is used to provide a unique identifier to an HTML element?",
      options: [
        "id",
        "class",
        "name",
        "style"
      ],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used to define a paragraph?",
      options: [
        "<p>",
        "<para>",
        "<paragraph>",
        "<pg>"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following is the correct syntax for adding a background color in HTML?",
      options: [
        `<body style="background-color:yellow;">`,
        `<body bg="yellow">`,
        `<background-color="yellow">`,
        `<body style="background-color:yellow">`
      ],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used for creating an unordered list?",
      options: [
        "<ul>",
        "<ol>",
        "<li>",
        "<list>"
      ],
      correctAnswer: 0
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: [
        "<a>",
        "<link>",
        "<href>",
        "<hyperlink>"
      ],
      correctAnswer: 0
    },
    {
      question: "Which attribute is used to specify an alternative text for an image?",
      options: [
        "alt",
        "title",
        "src",
        "href"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: [
        "<br>",
        "<break>",
        "<lb>",
        "<newline>"
      ],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used to specify a footer for a document or section?",
      options: [
        "<footer>",
        "<foot>",
        "<bottom>",
        "<section-footer>"
      ],
      correctAnswer: 0
    }
  ];

  // Example to display the first question and options
  // const currentQuestion = quiz[0];
  // console.log("Question:", currentQuestion.question);

  // currentQuestion.options.forEach((option, index) => {
  //   console.log(`${index + 1}. ${option}`);
  // });

  console.log(quiz[0].question)
  // return (
  //   <div>
  //     {quiz.map((vale, index) => {
  //       console.log(quiz[index].question)
  //   <>
  //     <Card
  //     question={quiz[0].question}
  //     // options={quiz[0].options[0]}
  //     // answer={quiz[0].answer}
  //   />
  //   </> 

  //     })}
  //   </div>
  // )
}

export default App

// const refer = () => useEffect(() => {
//   alert("show")

//   return <div>
//     quiz.map((vale, index) => {
//       console.log(quiz[index].question)
    
//     })
    
//   </div>
    
//   }, [quiz])