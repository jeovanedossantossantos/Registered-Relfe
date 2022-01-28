import styled from "styled-components";

export const Container = styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 100%
    color: #040004;
    line-height: 1.5;
}

h1{
    text-align: center;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 1px 1px 2px 2px #E91E63;
    font-family: Verdana;
    font-weight: bold;
}

form{
    background-color: #fff;
    width: 720px;
    padding: 20px;
    margin: 20px auto 0 auto;
    box-shadow: 0px 6px 10px #2196F3;
    border-radius: 5px;
}

.row{
    padding: 5px;
}

fieldset{
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 1px 1px 2px 2px #E91E63;
}

legend{
    font-size: 1.5rem;
    font-weight: bold;
    font-family: Verdana;
}
`
