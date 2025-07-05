// TypeScript declaration for the Spline custom element
// Allows usage of <spline-viewer> in TSX/JSX

declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      url?: string;
      loadingAnimType?: string;
      [key: string]: any;
    };
  }
}
