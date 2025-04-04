import Card from "../Components/card";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="projectsDiv"><h2>My Projects </h2></div>
      
      <div className="cardsWrapper">
        <Card
          name="Trivia Game"
          img="DailyQuizine.JPG"
          link="https://daily-quizine.vercel.app"
          description="This is a Vite project and uses React, CSS"
        ></Card>
        <Card
          name="OpenAI"
          img="OpenAI.png"
          link="https://open-ai-app-puce.vercel.app/"
          description="This is a Next.js project and uses OpenAI ChatGPT"
        ></Card>
        <Card
          name="Ordering App"
          img="Ordering.JPG"
          link="https://order-app-weld.vercel.app"
          description="This is a React project using all hooks: useContext, useRef, useReducer."
        ></Card>
        <Card
          name="Admin App"
          img="AdminApp.jpg"
          link="https://admin-app-gilt.vercel.app/"
          description=" This is a React project that uses Google Firebase db, storage and authentication."
        ></Card>
        <Card
          name="Recipes"
          img="Recipe.JPG"
          link="https://recipe-livid.vercel.app/"
          description="This is a Next.js project and uses React, CSS"
        ></Card>
        <Card
          name="TIC TAC TOE"
          img="TicTacToe.JPG"
          link="
        https://tic-tac-toe-nu-red.vercel.app"
          description=" This is my first project and uses HTML, CSS and JavaScript "
        ></Card>
      </div>
    </div>
  );
}

export default Projects;
