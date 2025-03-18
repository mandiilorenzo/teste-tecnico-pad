import style from "styled-components"

export const Main = style.main`
    background-color: var(--clean-gray);
    max-width: 100vw;
    min-height: 90vh;
`

export const Container = style.div`
    padding: 44px 32px;

    div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
    font-size: 20px;
    font-weight: 500;
    color: var(--dark-color);
    }
    }
`
export const ContainerInput = style.div`
    position: relative;
    display: inline-block;

    img {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-40%);
    cursor: pointer;
    }
`

export const Input = style.input`
    width: 287px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid var(--neutral-gray);
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 400;
`

export const Table = style.table`
    border-collapse: collapse;
    overflow: hidden;
    margin-top: 32px;
    table-layout: fixed;

    th {
    background-color: var(--primary-blue);
    width: 961px;
    height: 47px;
    font-size: 16px;
    font-weight: 500;
    color: var(--white-color);
    text-transform: uppercase;
    border-radius-top-left: 8px;
    border-radius-top-right: 8px;
    }

    td {
    background-color: var(--white-color);
    text-align: center;
    border-bottom: 1px solid var(--neutral-gray);
    padding: 10px 0;
    
    img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    }
    }
`