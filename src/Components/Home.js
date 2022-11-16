import FavProjects from './FavProjects.js'
import "./Home.css"

// Welcome title with short text underneath, talking about my passions etc.
function Home() {
    return (
        <div className="HomeBody">
            <div className="HomeBodyLeft">
                <div className="Home">
                    <h1> Greetings</h1>
                    <div className="HomeText">
                        <p>I am currently a Graduate Bachelor Computer Scientist.
                        My passion lies within developing software.
                        I also have a passion for developing games
                        and for games in general.</p>
                    </div>
                </div>
            </div>

            <div className="HomeBodyRight">
                <FavProjects />
            </div>

        </div>
    );
  }

  export default Home;