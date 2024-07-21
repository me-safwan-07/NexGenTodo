import styled from "@emotion/styled";
import React, { ErrorInfo } from "react";
import { UserContext } from "../contexts/UserContext";
import { Emoji } from "emoji-picker-react";
import { TaskIcon } from "./TaskIcon";


interface ErrorBoundaryProps {
    children: React.ReactDOM;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

// ErrorBoundary component that catches and displays errors.

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    static contextType = UserContext;
    declare context: React.ContextType<typeof UserContext>;
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
        hasError: false,
        };
    }
    
    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {
            hasError: true,
            error: error,
        };  
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("Error:", error);
        console.log("Error Info:", errorInfo);
    }

    handleClearData() {
        localStorage.clear();
        sessionStorage.clear();
        location.reload();
    }
    
    render() {
        if (this.state.hasError) {
            const { user } = this.context;
            const { tasks } = user;

            return (
                <Container>
                    <ErrorHeader>
                        <span>Oops! An error occured. &nbsp;</span>
                        <span>
                            <Emoji size={38} unified="1f644"/>
                        </span>
                    </ErrorHeader>
                    <ErrorIconContainer>
                        <TaskIcon scale={0.6} variant="error" />
                    </ErrorIconContainer>
                </Container>
            )
        }
    }
}

const Container = styled.div``;
const ErrorIconContainer = styled.div``;
const ErrorHeader = styled.h1``;