import type { FallbackProps } from "react-error-boundary";

import "./ErrorFallback.css";

function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div className="error-boundary">
      <div className="error-card">
        <h2>Something went wrong</h2>

        <p>An unexpected error occurred.</p>

        <button onClick={resetErrorBoundary}>Try Again</button>
      </div>
    </div>
  );
}

export default ErrorFallback;
