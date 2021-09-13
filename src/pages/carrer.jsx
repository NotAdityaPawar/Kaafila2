import { Container } from "react-bootstrap";


export default function Carrer(){
    var p6 = "Please see Section 15 (Kaafila Team Roles & Responsibilities) of our whitepaper to learn more. We have about 50 roles across these four groups , which will be filled ongoing basis along with the project growth.    "
    var p5 = ""
    var p4 = "Kaafila project team will require multiple roles and team effort to achieve the goals stated in Section 9 of our whitepaper, and to create an organization that is able to grow and deliver high quality content, and learning resources to millions of people worldwide, either free or at very low cost, over the next 20 years.    "
    var p3 = "We also want to support and promote a wide range of creative people involved in music, arts, sports, etc.    "
    var p2 = "Kaafila’s motto is: \"Knowledge for Lifetime\", and the same is reflected in our token name \"KFL\". Over time, we believe that Kaafila will help millions of people in their education and career, through the courses, certificates, and internships offered through our platform."
    var p1 = "Kaafila is a new video sharing platform, built using blockchain technology. Using this video sharing platform, Kaafila aims to provide useful content and learning resources, along with tests, certifications, and internships wherever possible, to a wide range of users of different age groups, from school children to working professionals, to help in their careers. The focus is on creating a large network of people worldwide who are constantly learning to progress in their career and life. The focus is also on offering wide range of learning resources either free or at very low cost, so that people across the world can learn and benefit irrespective of their current income level."
    return(
        <Container paddign>
            <Container>{p1}</Container>
            <Container>{p2}</Container>
            <Container>{p3}</Container>
            <Container>{p4}</Container>
            <Container>{p6}</Container>
        </Container>
    )
}