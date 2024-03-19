import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: null | Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error): void {
    this.setState({ hasError: true, error });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div>
          <h1>
            {this.state?.error?.message ||
              "Something went wrong. Please try again later."}
          </h1>
          <button onClick={() => window.location.replace("/")}>Reload</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
