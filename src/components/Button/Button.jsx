import React from "react";
import { LoadMore } from "./Button.styled";

export const Button = ({onLoadMore}) => {
    return (
        <LoadMore type="button" onClick={onLoadMore}>Load more</LoadMore>
    )
}