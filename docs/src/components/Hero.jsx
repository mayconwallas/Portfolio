import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile.jpg' className="profile-img" width={300} height={300} alt="foto do Maycon Wallas" />
      <div className="hero-text">
        <h1>Olá, Eu sou Maycon Wallas</h1>
        <p>
        Bem-vindos ao meu portfólio! Sou um entusiasta dedicado à programação, com foco especial em desenvolvimento Front-end. Visando compartilhar um pouco do meu trabalho, gostaria de apresentar alguns dos meus projetos, espero que apreciem a visita.
        </p>
        <div className="social-icons">
        <a
              href="https://github.com/mayconwallas"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/maycon-wallas-balbino-da-silva-702710179/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;