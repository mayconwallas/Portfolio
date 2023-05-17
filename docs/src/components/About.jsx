import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>SOBRE MIM</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                    Apaixonado por programação, há mais de 1 ano tenho me empenhado em adquirir habilidades e competências no ramo, em especial na área de Front-end, com o objetivo de desenvolver sites e aplicações que possibilitem uma experiência inovadora ao usuário, a partir de um bom desempenho que facilite a navegação e reduza eventuais problemas. Sou bastante comunicativo e dinâmico, recebo feedbacks com entusiasmo e me esforço para aprimorar minhas habilidades. Estou buscando uma oportunidade de crescer profissionalmente e colaborar com meus conhecimentos para o sucesso da empresa. 

                    </p>
                    No último ano tenho me dedicado integralmente em adquirir novas habilidades através de projetos pessoais que desenvolvo durante os diversos cursos que realizei, que me permitiram aplicar na prática os conceitos adquiridos. Estou ansioso para vivenciar meus conhecimentos em um ambiente profissional e continuar aprimorando minhas competências, buscando sempre novos desafios e oportunidades de crescimento.

                </div>
                <div className="about-img">
                    <Image src='/images/about.jpg' className="profile-img" width={300} height={500} alt="Joe and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;