import React, { useEffect } from "react";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProctedRoute({ children }) {
  const navigate = useNavigate();

  //.Load the authenticaed user

  const { isLoading, isAuthenticated } = useUser();

  // While loading show a spinner

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // if there is NO authenticated user, redirect to the login

  // If there is a user, render app

  return children;
}

export default ProctedRoute;
