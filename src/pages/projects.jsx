import Card from "../Components/card";
import "../styles/projects.css";
function Projects() {
  return (
    <div className="projects">
      <h2>My Projects </h2>
      <div className="cardsWrapper">
        <Card
          name="Trivia Game"
          img="public/DailyQuizine.JPG"
          link="https://daily-quizine.vercel.app"
          description="This is a Vite project and uses React, CSS"
        ></Card>
        <Card
          name="Recipes"
          img="public/Recipe.JPG"
          link="https://recipe-livid.vercel.app/"
          description="This is a Next.js project and uses React, CSS"
        ></Card>

        <Card
          name="TIC TAC TOE"
          img="public/TicTacToe.JPG"
          link="
        https://tic-tac-toe-nu-red.vercel.app"
          description=" This is my first project and uses HTML, CSS and JavaScript "
        >
          {" "}
        </Card>
      </div>
    </div>
  );
}

export default Projects;
