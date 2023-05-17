import styled from 'styled-components'

export const NavWrapper = styled.nav`

width: 100%;
/* background-color: aqua; */
display: flex;
align-items: center;
justify-content: center;

& #navbar{
    width: 1350px;
    /* background-color: blanchedalmond; */
    display: flex;
    padding: 10px 0px;
    
}

& .nav-left{
    margin-right:auto;
    display: flex;
    align-items:center;
    /* width:500px; */
    /* justify-content:space-between; */

    & > *{
        margin-right:50px ;
    }
    & > select{
        padding:10px;
        border:0px;
        outline:0px;
        box-shadow:0px;
    }
    
}
& .nav-right{
    /* margin-right:auto; */
    display: flex;
    align-items:center;
    margin-left:auto;

    & > *{
        margin-right:80px;
    }
    & > button{
        color: 0048FF;
        background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,150,255,1) 100%);
padding: 15px;
border-radius:30px;
color: #eeee;
border: 0px;
font-size:15px;
font-family:arial;
/* letter-spacing:5px; */
        /* 0048FF;
        0096FF */
    }
}




 
// `
// export const BodyWrapper = styled.section`
//     &{
//         height:100vh;
//         width: 100%;
//         background: url(./Back Ground.png);
//     }
    

// ` 
