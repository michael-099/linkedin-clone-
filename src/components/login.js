import styled from "styled-components";
const Login = (probs) => {
    return (<Container>
        <Nav>
            <a href="/">
                <img src="img/LinkedIn-Logo.wine.svg" />
            </a>
            <Div>
                <Join>join now</Join>
                <Signin> Sign in</Signin>
            </Div>

        </Nav>
    </Container>)


}
const Div=styled.div`display:flex;`;
const Container = styled.div`padding :0px;`;

const Nav = styled.nav`
  max-width:1128px;
  margin:auto;
  padding:12px 0 16px ;
  display:flex;
  align-items:center;
  ${'' /* justify-content:center; */}
  position:relative;
  justify-content:space-between;
  flex-wrap:nowrap;
  ${'' /* background-color:green; */}
 
    & > a:first-child {
     width:135px ;
     height:35px ;
     @media (max-width:768px){
     padding:0 5px;
     }

 }
 `;
const Join = styled.a`
 font-size:15px;
 display:flex;
 align-items:center;
 justify-content:center;
 padding:10px 12px;
 text-decoration:none;
 margin-right:12px;
 border-radius:5px;
 color:rgba(0,0,0.6);
 width:60px;

 :hover{
 background-color:rgba(0,0,0,0.08);
 color:rgba(0,0,0,0.9);
 text-decoration:none;}
  `;
const Signin = styled.a`
  box-shadow:inset 0 0 0 1px #0a66c2;
  color:#0a66c2;
  border-radius:24px;
  transition-duration:167ms;
  font-size:15px;
  font-weight:600;
  padding:10px 24px;
  text-align:center;
  background-color:rgba(0,0,0,0);
  :hover{
    background-color:rgba(112,181,249,0.15);
    color: #0a66c2;
    text-decoration:none;
    


  }
  `;
export default Login;
