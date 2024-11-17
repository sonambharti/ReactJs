import './App.css';

function Avtar() {
  return <img className="avtar" src="./sonam.jpg" alt="Sonam Bharti" />;
}
function Intro() {
  return (
    <div className='intro'>
      <h1>Sonam Bharti</h1>
      <p>
        Enthusiast Software Developer working as Full Stack Developer at Saarthi.ai.
        I love exploring new technologies and writing blogs over it. Learning is my habit.
        I enjoy my life with my family, and friends.
      </p>

    </div>
  )
}

function SkillList(){
  return (
    <div className='skill-list'>
      
      <Skill skill="C/C++" emoji="🅱️" color="#1245" />
      <Skill skill="Java" emoji="💪" color="orangered" />
      <Skill skill="Python" emoji="🐍" color="yellow" />
      <Skill skill="HTML + CSS" emoji="💪"color="blue" />
      <Skill skill="JavaScript" emoji="💪" color="#156" />
      <Skill skill="React" emoji="✡️" color="red"/>
      <Skill skill="Node" emoji="🔙" color="pink" />

    </div>
  )

}

function Skill(props) {
  return (
    <div className='skill' style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
}

export default function App () {
  return (
    <div className="card">
    <Avtar />
    <div className="data">
      <Intro />
      <SkillList />

    </div>
    </div>

  )
}