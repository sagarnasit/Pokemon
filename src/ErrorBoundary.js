import React from "react";
import { Link, Redirect } from "@reach/router";


class ErrorBoundary extends React.Component {
    state = { hasError: false, redirect: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary cought an error", error, info);
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            //   setTimeout(() => this.setState({ redirect: true }), 5000);
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }

        if (this.state.hasError) {
            return (
                <h1>
                    There is an Error pn this Page. <Link to="/">Click here</Link> to
                    return to home page.
        </h1>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
