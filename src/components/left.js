import styled from "styled-components";
const Left = (probs) => {
    return (
        <Container>
            <ArtCard>
                <User>
                    <Cardbg />
                    <a>
                        <Photo />
                        <Link>
                            Welcome,Michael!
                        </Link>
                    </a>
                    <a>
                        <AddPhotoText>
                            Add Photo

                        </AddPhotoText>

                    </a>
                </User>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow Your network</span>
                        </div>
                        <img src="/img/widget-icon.svg" />
                    </a>
                </Widget>
                <Items>
                    <img src="/img/item-icon.svg" />
                    my items
                </Items>
            </ArtCard>

        </Container>)
}
const Container = styled.div`
grid-area:"LeftSide" ;

`;
const ArtCard = styled.div`
text-align:center;
overflow:hidden;
margin-botton:8px;
background-color:#fff;
border-radius:5px;
transition:box-shadow 83ms;
position:relative;
border:none;
box-shadow:0 0 0 1px rgb(0 0 0 /15%),0 0 0 rgb(0 0 0 /20%)`;
const User = styled.div`
border-bottom:1px solid rgba(0,0,0,0.15);
padding:12px 12px 16px;
word-wrap:break-word;

`;
const Cardbg = styled.div`
background:url("/img/card-bg.svg");
background-position:center;
background-size:462px;
height:54px;
margin:-12px -12px 0;`

const Photo = styled.div`
box-shadow:none;
background-image:url("/img/photo.svg");
width:72px;
height:72px;
background-clip:content-box;
background-position:center;
background-size:60%;
background-color:white;
background-repeat:no-repeat;
border:2px solid white;
margin:-30px auto 12px;
border-radius:50%;


`;
const Link = styled.div`
font-size:16px;
line-height:1.5;
color:rgba(0,0,0,0.9);
font-weight:600;
`;
const AddPhotoText = styled.div`
color :#0a66c2;
margin-top:4px;
font-size:12px;
line-height:1.33;
font-weight:400;`;
const Widget = styled.div`
border-bottom:1px solid rgba(0,0,0,0.15);
padding-top:12px;
padding-bottom:12px;
& >a{
    text-decoration:none;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:4px 12px;
    &:hover{
        background-color:rgba(0,0,0,0.08);

    }
    div{
        display:flex;
        flex-direction:column;
        text-align:left;
        span{
            font-size:12px;
            line-height:1.33;
            &:first-child{
                color:rgba(0,0,0,0.6)
            }
            &:nth-child(2){
                color:rgba(0,0,0,1);  

            }

        }
    }
}
svg{
    color:rgba(0,0,0,1);
}
`;
const Items = styled.a`
border-color:rgba(0,0,0,0.8);
text-align:left;
padding:12px;
font-size:12px;
display:block;
span{
    display:flex;
    align-items:center;
    color:rgba(0,0,0,1);
    svg{
        color:rgba(0,0,0,0.6)
    }
}
&:hover{
        background-color:rgba(0,0,0,0.08);

    }

`;
export default Left;