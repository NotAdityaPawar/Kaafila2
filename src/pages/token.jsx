import { Container, Row ,Button,Col} from "react-bootstrap";
import Sidebar from "../components/sidebar";

export default function Token(){
    const data = {
        p1:[`Token Name: Kaafila
        Token Ticker: KFL
        Total Supply: 100 billion (maximum supply, pre-defined)
        Frozen Supply: 80 billion
        Circulating Supply: 20 billion (as of 01 Oct 2021)
        Token Price (starting): $0.0001
        Token Type/Role: Utility Token
        Development Status: Prototype/MVP
        Organization Structure: Decentralized
        Open Source: No
        Consensus Mechanism: Not Mineable
        Algorithm: Pure PoS (Algorand Blockchain)
        Smart Contracts: Content Users, Content Providers, Token Holders, Advertisers`],
        h1:`Kaafila (KFL) on Algorand Blockchain Explorer:`,
        url1:`https://algoexplorer.io/asset/239444645`,
        h2:`Token Release Schedule:`,
        p2:`KFL tokens will be released on a four-yearly “halving schedule”, to ensure enough supply of tokens to reward future efforts to maintain and grow the Kaafila project. This gradual token release schedule has been adopted from Bitcoin, which has demonstrated clear benefits of limited and controlled supply of tokens over a long period of time.`,
        h3:`Token Release Mechanism:`,
        p3:["Total 100 billion tokens (pre-mined, maximum total supply). 80 billion tokens frozen.","Tokens will be released from their frozen state by User effort and Team effort. So it’s the effort of Users and Team members that releases tokens from their frozen state, and this effort may be considered the equivalent of mining.","Some of the released tokens may then become available to Investors for buying through exchange/swap sites, when Users or Team Members put their tokens for sale. The participation of Investors will help liquidity and price stability for tokens, and benefit all stakeholders of the project."],
        p4:"Please refer Section 13 (Tokenomics) of Kaafila whitepaper for more details. Thanks.",
        p5:"Kaafila’s motto is: “Knowledge for Lifetime”, and the same is reflected in our token name “KFL”. Over next 10-20 years, we believe that Kaafila project will help millions of people in their education and career, through the courses, tests, certificates, internships, and scholarships offered through our platform.",
        p6:"KFL token has predefined maximum supply of 100 billion tokens, and the tokens will be released gradually every year, over the next 20+ years, based on the combined efforts of the Kaafila project Team and Users.",
        p7:"Investors can buy KFL token directly from exchanges/swap sites once it is listed on them. We are currently working to list KFL token on two such sites during Q4, 2021. About 3% of total KFL tokens (or 3 bn tokens) maybe put up for sale at the base price of $0.0001. Future token sales maybe at higher rates to fund increasing scope of project work. In total, about 5% of total KFL tokens (or 5 bn tokens) maybe sold till Q1 2022, because our team members and partners are willing to work directly with payments in KFL token, which reduces the need for conversion to another currency.",
        p8:"Please contact us if you would like to receive updates on KFL token. Thanks.",
        p9:"Disclaimer: Kaafila (KFL) token is a utility token meant for the working of Kaafila project. The KFL token does not represent any asset or security, and there are no guarantees of any type regarding the token price appreciation over any timeframe.",

    }
    const tokenContents = ["Token Name: Kaafila","Token Ticker: KFL","Total Supply: 100 billion (maximum supply, pre-defined)","Frozen Supply: 80 billion","Circulating Supply: 20 billion (as of 01 Oct 2021)","Token Price (starting): $0.0001","Token Type/Role: Utility Token","Development Status: Prototype/MVP","Organization Structure: Decentralized","Open Source: No","Consensus Mechanism: Not Mineable","Algorithm: Pure PoS (Algorand Blockchain)","Smart Contracts: Content Users, Content Providers, Token Holders, Advertisers"];
    const styless = {
        button :{
            width:"50%",
            backgroundColor:"#40928c",
            textAlign:"center",
            "&:hover": {
                backgroundColor: "#efefef",
                color:"#21211"
            }
        },
        buttonContainer:{
            padding:"5px"
        },
        header:{
            textAlign:"center"
        }
    }
    return(
        <Container>
            <Row>
                <Col sm={12} lg={9}>
            <Row>
                <Col>
                    <h2 style={styless.header}>Token Information</h2>
                </Col>
            </Row>
            <Row>
                <Col style={styless.header}>
                    {tokenContents.map((items,index)=>
                        <div style={styless.buttonContainer}><Button style={styless.button} sm={12}>{items}</Button></div>
                    )}
                </Col>
            </Row>
            <h4>{data.h1}</h4><a href={data.url1}>{data.url1}</a>
            <h5>{data.h2}</h5>
            </Col>
            <Col sm={12} lg={3}>
                <Sidebar/>
            </Col>
            </Row>
        </Container>
    )
}