import React from "react";
import { useCounter, useFetch } from "../hooks";
import {Quote, LoadingQuote} from '../03-examples';
export const Layout = () => {
  const { counter , increment} = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  console.log(data), isLoading, hasError;
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>Breaking bad quotes</h1>
      {isLoading ? (
        <LoadingQuote/>
      ) : (
        <Quote author={author} quote={quote} />
      )}
      <button disabled={isLoading} className="btn btn-primary" onClick={() => {increment()}} > Next quoter</button>
    </>
  );
};
