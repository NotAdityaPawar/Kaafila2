import { Container,Button, Image,Row,Col } from "react-bootstrap"
import KaafilaFocus from "../images/Kaafila-focus-areas.png"
import Algorand from "../images/algorand.png"
import Mascot from "../images/mascot.jpg"
import React from 'react'
import Sidebar from "../components/sidebar"


const styles = {
    button:{
        backgroundColor:"#40928c",
        color:"white"
    }
}
const data ={
    about:`Kaafila is a decentralized media and education project built with blockchain
    technology. We are starting with a new video sharing platform, through which we will
    offer useful content, including free courses, tests, certifications, internships and
    jobs to a wide range Users worldwide. The Kaafila (KFL) token will help in achieving
    our project goals by rewarding Users and Team Members for their efforts.`,

    vision:[
        `Kaafila aims to provide useful content along with learning and growth opportunities,
        to help our Users progress in their career and life.
        `,
        `Our vision is to use our blockchain technology platform for delivering
        quality education (mostly free or at very low cost) to students/youth worldwide —
        so that anybody can learn and earn, irrespective of their present economic condition —
        and we will reward merit/performance with awards, scholarships, internships, and jobs.
         We want to encourage individual content creators, in all industries/niches, with best
          possible rewards for their content.
        `
    ],

    other:[
       {para: `Kaafila will offer a decentralized video sharing platform, which means:
        transparency, efficiency, and support for independent content providers.
        We are creating video sharing platform on blockchain, using Algorand and
        IPFS technology.`},

        {para:`The following chart describes our focus areas. Each focus area will have its
        own team and goals, and each team will aim to achieve global recognition for its work.
        `},
        {image:KaafilaFocus},

        {heading: `Kaafila’s motto is: “Knowledge for Lifetime”,` ,
        para:` And the same is reflected in our token name “KFL”. Over next 10 years, we believe that
        Kaafila project will help millions of people in their education and career, through the
        courses, tests, certificates, and internships offered through our platform.`},

        {para:`The focus is on offering wide range of learning resources either free or at very
        low cost, so that people across the world can learn and benefit irrespective of
        their current income level. The focus is also on creating a large network of people
        worldwide who are constantly learning to progress in their career and life.
        `},

        {
            para:`We also want to support and promote a wide range of creative people involved in music, arts, sports, etc — through regular competitions, awards, and promotional gigs. For example, Kaafila is developing an “NFT Marketplace” to enable artists and creative professionals to earn more from their craft.`
        },

        {
            heading:`Support for Social Causes `,
            para:`is a key driver and major motivation for Kaafila team, and we believe that support for social causes will make Kaafila project truly successful, and enable worldwide adoption for KFL token. Social Causes will be supported and managed by our “Trust & Safety” team. We aim to support a wide range of social causes worldwide, through our custom-developed “Social Causes System”, which will enable Kaafila Team members and Users to list and support social causes using KFL token. Most of these social causes will be linked to providing food, education, healthcare, hope, and relief in emergency situations. We want to use our free education courses for the benefit of children in poor and developing countries, by forging partnerships with local entities/schools/social workers. Support for Veterans is also important for us, and we plan to work with multiple Veterans support groups.`

        },
        {image:Mascot},
        {
            heading:`Technology`,
            para:`Technologically, the Proof-of-Work blockchain is not suitable for handling transactional systems (high frequency and volume of data). Kaafila has tested the blockchain-only solution and found it to be too costly, too slow, and to have a lack of privacy in storing decryption keys – and that is why we use a hybrid stack: the smart contract on Blockchain, payments, and governance; and the already established SQL database with a Node.js application server providing the API for transactional operations between the players and the core platform. We observe the growth of side-chain systems technology and look forward to its readiness for business.`
        },

        {
            heading:`Kaafila is powered by Algorand.`,
            para:`About Algorand: The convergence between decentralized and traditional financial models is accelerating and we are here to power it. Our open source technology is intentionally designed to enable the simple creation of next generation financial products and disrupt economic models across industries where the exchange of value can be made more efficient.`
        },
        {image:Algorand},
        {
            para:`Algorand removes the technical barriers that for years undermined mainstream blockchain adoption: decentralization, scale, and security. Our consensus mechanism is permissionless and “pure proof of stake”. It ensures full participation, protection, and speed within a truly decentralized network. With blocks finalized in seconds, Algorand’s transaction throughput is on par with large payment and financial networks. And Algorand is the first blockchain to provide immediate transaction finality. The era of a decentralized, borderless economy is here. Algorand is the foundation. To learn more, please visit: www.algorand.com`
        }
    ]

}

export default class About extends React.Component{

    showContent = (data) => {
        var objKey = Object.keys(data);



        if((objKey.indexOf('heading') !== -1) || (objKey.indexOf('para') !== -1)){
                return(
                    <React.Fragment>
                        <h2>{data.heading}</h2>
                        <p>{data.para}</p>
                    </React.Fragment>
                )
        }

        else if(objKey.indexOf('image') !== -1){
            return (
                <React.Fragment>
                    <Image src={data.image} style={{ maxWidth:"100%",alignItems:"center"}}></Image>
                </React.Fragment>
            )
        }
    }

render(){
        return(
            <div>
            <Container>
                <Row>
                    <Col sm ={12} lg={9}>
                <h2>About</h2>
                <p>{data.vision}</p>

                <h3>Vision</h3>
                <p>{data.vision}</p>

                { data.other.map((item,key) => (
                        this.showContent(item)
                    )
                )}
                </Col>
                <Col lg={3} sm={12}>
                    <Sidebar/>
                </Col>
                </Row>
            </Container>
            </div>
        )
    }
}