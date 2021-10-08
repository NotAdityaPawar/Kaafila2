import { Container, Row, Button, Col, Table, Image } from "react-bootstrap";
import Sidebar from "../components/sidebar";
import React from "react";
import TokenDistribution from '../images/TokenDistributionChart.png'
import TokenUsage from '../images/TokenUsageChart.png'
export default class Token extends React.Component {
    constructor(props){
        super(props)
        this.state = {
             data : [
                {
                    index:1,
                    para: ['Token Name: Kaafila','Token Ticker: KFL','Total Supply: 100 billion (maximum supply, pre-defined)',
                            'Frozen Supply: 80 billion',
                            "Circulating Supply: 20 billion (as of 01 Oct 2021)",
                            "Token Price (starting): $0.0001",
                            "Token Type/Role: Utility Token",
                            "Development Status: Prototype/MVP",
                            "Organization Structure: Decentralized",
                            "Open Source: No",
                            "Consensus Mechanism: Not Mineable",
                            "Algorithm: Pure PoS (Algorand Blockchain)",
                            "Smart Contracts: Content Users, Content Providers, Token Holders, Advertisers"
                    ]
                },
                {
                    index: 2,
                    header: `Kaafila (KFL) on Algorand Blockchain Explorer:`,
                    url: `https://algoexplorer.io/asset/239444645`
                },
                {
                    index: 3,
                    header: `Token Release Schedule:`,
                    para: `KFL tokens will be released on a four-yearly “halving schedule”, to ensure enough supply of tokens to reward future efforts to maintain and grow the Kaafila project. This gradual token release schedule has been adopted from Bitcoin, which has demonstrated clear benefits of limited and controlled supply of tokens over a long period of time.`
                },
                {
                    index:4,
                    table: {
                        tableHeading:['Tokens Released','Timeframe'],
                        tableRows:[['50% tokens will be released in first 4 years','2021-2025'],
                        ['25% tokens will be released in next 4 years','2025-2029'],
                        ['12.5% tokens will be released in next 4 years','2029-2033'],
                        ['6.25% tokens will be released in next 4 years','2033-2037'],
                        ['3.125% tokens will be released in next 4 years','2037-2041'],
                        ['96.875% tokens will be released in 20 years','2021-2041']
                        ]
                    }
                },
                {
                    index: 5,
                    header: `Token Release Mechanism:`,
                    para:["Total 100 billion tokens (pre-mined, maximum total supply). 80 billion tokens frozen.", "Tokens will be released from their frozen state by User effort and Team effort. So it’s the effort of Users and Team members that releases tokens from their frozen state, and this effort may be considered the equivalent of mining.", "Some of the released tokens may then become available to Investors for buying through exchange/swap sites, when Users or Team Members put their tokens for sale. The participation of Investors will help liquidity and price stability for tokens, and benefit all stakeholders of the project."]
                },
                {
                    index: 6,
                    para: "Please refer Section 13 (Tokenomics) of Kaafila whitepaper for more details. Thanks.",
                },
                {
                    index:7,
                    image:TokenDistribution
                },
                {
                    index:8,
                    para: "Kaafila’s motto is: “Knowledge for Lifetime”, and the same is reflected in our token name “KFL”. Over next 10-20 years, we believe that Kaafila project will help millions of people in their education and career, through the courses, tests, certificates, internships, and scholarships offered through our platform.",

                },
                {
                    index:9,
                    para: "KFL token has predefined maximum supply of 100 billion tokens, and the tokens will be released gradually every year, over the next 20+ years, based on the combined efforts of the Kaafila project Team and Users.",
                },
                {
                    index:10,
                    image: TokenUsage
                },

                {
                    index:11,
                    para: "Investors can buy KFL token directly from exchanges/swap sites once it is listed on them. We are currently working to list KFL token on two such sites during Q4, 2021. About 3% of total KFL tokens (or 3 bn tokens) maybe put up for sale at the base price of $0.0001. Future token sales maybe at higher rates to fund increasing scope of project work. In total, about 5% of total KFL tokens (or 5 bn tokens) maybe sold till Q1 2022, because our team members and partners are willing to work directly with payments in KFL token, which reduces the need for conversion to another currency.",

                },
                {
                    index:12,
                    para: "Please contact us if you would like to receive updates on KFL token. Thanks.",
                },
                {
                    index:13,
                    para: "Disclaimer: Kaafila (KFL) token is a utility token meant for the working of Kaafila project. The KFL token does not represent any asset or security, and there are no guarantees of any type regarding the token price appreciation over any timeframe.",

                },



            ]
         ,tokenContents : ["Token Name: Kaafila", "Token Ticker: KFL", "Total Supply: 100 billion (maximum supply, pre-defined)", "Frozen Supply: 80 billion", "Circulating Supply: 20 billion (as of 01 Oct 2021)", "Token Price (starting): $0.0001", "Token Type/Role: Utility Token", "Development Status: Prototype/MVP", "Organization Structure: Decentralized", "Open Source: No", "Consensus Mechanism: Not Mineable", "Algorithm: Pure PoS (Algorand Blockchain)", "Smart Contracts: Content Users, Content Providers, Token Holders, Advertisers"],
         styless : {
            button: {
                width: "50%",
                backgroundColor: "#40928c",
                textAlign: "center",
                "&:hover": {
                    backgroundColor: "#efefef",
                    color: "#21211"
                }
            },
            buttonContainer: {
                padding: "5px"
            },
            header: {
                textAlign: "left"
            }
        }

        }
    }

    showContent = (data) => {
        return(
            <div>
                <h5>{data.heading}</h5>
                <p>{data.para}</p>
                <a href={data.url}>{data.url}</a>

                <table >
                    <th>{data.tableHeading}</th>
                    <tr>{data.tableRows}</tr>
                </table>
            </div>
        );

    }


render(){
    return (
        <Container>

            <Row>
                {/* Main Page Section */}
                <Col sm={12} lg={9}>
                    <Row>
                        <Col>
                            <h2 style={this.state.styless.header}>Token Information</h2>
                        </Col>
                    </Row>

                    {/* Token info in form of button */}
                    {/*<Row>
                        <Col style={this.state.styless.header}>
                            {this.state.tokenContents.map((items, index) =>
                                <div style={this.state.styless.buttonContainer}><Button style={this.state.styless.button} sm={12}>{items}</Button></div>
                            )}
                        </Col>
                    </Row>*/}
                    {/* Token info in form of button */}
                    {/* yes you can bang your computer, hammer time!!*/}
                    {/* Assignment Create rest of the code here */}

                    {/* Index:-1 */}
                    {
                        this.state.data[0].para.map( (item,key) => (
                            this.showContent({para:item})
                            )
                        )
                    }

                    {/* kaafila heder and link, index-2*/}
                    { this.showContent({heading:this.state.data[1].header,url:this.state.data[1].url}) }

                    {/* token release heder and link, index-3*/}
                    { this.showContent({heading:this.state.data[2].header,para:this.state.data[2].para}) }

                    {/* table heder and link, index-4*/}
                    <table>
                        <tr><th>Tokens Released</th><th>Timeframe</th></tr>

                        <tr><td>50% tokens will be released in first 4 years</td><td>2021-2025</td></tr>
                        <tr><td>25% tokens will be released in next 4 years</td><td>2025-2029</td></tr>
                        <tr><td>12.5% tokens will be released in next 4 years</td><td>2029-2033</td></tr>
                        <tr><td>6.25% tokens will be released in next 4 years</td><td>2033-2037</td></tr>
                        <tr><td>3.125% tokens will be released in next 4 years</td><td>2037-2041</td></tr>
                        <tr><td>96.875% tokens will be released in 20 years</td><td>2021-2041</td></tr>

                    </table>

                    {/* Token Release Mechanism,index-heading5 */}
                    <div>
                    { this.showContent({heading:this.state.data[4].header}) }
                    { this.state.data[4].para.map((item,key) => (
                        this.showContent({para:item}))
                        ) }
                    </div>

                    {/* Please refer section 13, index-6 */}
                    { this.showContent({para:this.state.data[5].para}) }

                    {/* Token Distribution,index-7 */}
                    <Image src={this.state.data[6].image} alt="No Image Found"/>

                    {/* index-8 */}
                    { this.showContent({para:this.state.data[7].para}) }

                    {/* index-9 */}
                    { this.showContent({para:this.state.data[8].para}) }

                    {/* index-10 */}
                    <Image src={this.state.data[9].image} alt="No Image Found"/>

                    {/* index-11 */}
                    { this.showContent({para:this.state.data[10].para}) }


                    {/* index-12 */}
                    { this.showContent({para:this.state.data[10].para}) }


                    {/* index-13 */}
                    { this.showContent({para:this.state.data[10].para}) }


                    {/* Assignment Create rest of the code here */}
                </Col>
                {/* Main Page Section */}

                {/* Sidebar Section */}
                <Col sm={12} lg={3}>
                    <Sidebar />
                </Col>
                {/* Sidebar Section */}
            </Row>
        </Container>
    )
}
}



function ShowContent(param){
    if (param){
        console.log(param)
        return(
            <div>
            </div>
        )
    }
}