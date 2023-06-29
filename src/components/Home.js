import styled from "styled-components";
import Left from "./left";
import Right from "./right";
import Main from "./main";
const Home = (probs) => {
    return (
        <Container>
            <Section>
                <h5><a>Hiering in a hurry?</a></h5>
                <p>Find talented pros in record </p>
            </Section>
            <Layout>
                <Left />
                <Main />
                <Right />
            </Layout>
        </Container>

    );


};
const Container = styled.div`
padding:52px;
max-width:100%;`;
const Content = styled.div`
max -width:1128px
margin-left:auto;
margin-right:auto;
`;
const Section = styled.section`
min-height:50px;
padding:16px 0;
box-sizing:content-box;
text-align:center;
text-decoration:underline;
display:flex;
justify-content:center;
 h5{
    color:#0a66c2;
    font-size:14px;
    a{
        font-weight:700;
    }
 }
 p{
    font-size:14px;
    color:#434649;
    font-weight:600
 }
 @media(max-width:768px){
    flex-direction:column;
    padding:0 5px;
    
 }`
const Layout = styled.div`
 display:grid;
 grid-template-area:"LeftSide Main RightSide";
 grid-template-columns:minmax(0,5fr) minmax(0,12fr) minmax(360px,7fr);
 column-gap:25px;
 row-gap:25px;
 grid-template:auto;
 margin:25px 0;
 @media(max-width:768px)
 {
    display:flex;
    flex-direction:column;
    padding:0 5px;
    

 }
 `;

export default Home;
